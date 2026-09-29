import { mkdir, appendFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import path from 'node:path';
import { site } from './site-data';
import type { EnquiryInput } from './forms';

type SavedEnquiry = EnquiryInput & {
  id: string;
  createdAt: string;
  userAgent?: string;
};

export async function handleEnquiry(input: EnquiryInput, userAgent?: string) {
  const enquiry: SavedEnquiry = {
    ...input,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    userAgent
  };

  const results = await Promise.allSettled([writeLocalCopy(enquiry), sendWebhook(enquiry), sendEmail(enquiry)]);
  const delivered = results.some((result) => result.status === 'fulfilled' && result.value === true);

  if (!delivered && process.env.NODE_ENV === 'production') {
    throw new Error('No enquiry delivery channel is configured.');
  }

  return { id: enquiry.id, delivered };
}

async function writeLocalCopy(enquiry: SavedEnquiry) {
  const storageDir = path.join(process.cwd(), 'storage');
  await mkdir(storageDir, { recursive: true });
  await appendFile(path.join(storageDir, 'enquiries.jsonl'), `${JSON.stringify(enquiry)}\n`, 'utf8');
  return true;
}

async function sendWebhook(enquiry: SavedEnquiry) {
  const url = process.env.ENQUIRY_WEBHOOK_URL;
  if (!url) return false;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(enquiry)
  });
  if (!response.ok) throw new Error('Webhook delivery failed.');
  return true;
}

async function sendEmail(enquiry: SavedEnquiry) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL;
  if (!apiKey || !to || !from) return false;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${apiKey}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      from,
      to,
      subject: `New ${enquiry.type} enquiry from ${enquiry.name} - ${site.name}`,
      text: formatEnquiry(enquiry)
    })
  });

  if (!response.ok) throw new Error('Email delivery failed.');
  return true;
}

function formatEnquiry(enquiry: SavedEnquiry) {
  return Object.entries(enquiry)
    .filter(([, value]) => value !== undefined && value !== '')
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
}
