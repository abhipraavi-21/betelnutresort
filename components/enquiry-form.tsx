'use client';

import { Send } from 'lucide-react';
import type React from 'react';
import { FormEvent, useState } from 'react';

type EnquiryFormProps = {
  type?: 'stay' | 'contact' | 'career';
  compact?: boolean;
};

type Status = { type: 'success' | 'error'; message: string } | null;

export function EnquiryForm({ type = 'stay', compact = false }: EnquiryFormProps) {
  const [status, setStatus] = useState<Status>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (!response.ok) {
        setStatus({ type: 'error', message: result.message || 'Please check the form and try again.' });
        return;
      }
      form.reset();
      setStatus({
        type: 'success',
        message:
          type === 'career'
            ? 'Thanks for applying. The resort team will review your details.'
            : 'Thanks. Your enquiry has been received and the resort team will follow up.'
      });
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong while sending. Please call or WhatsApp the resort.' });
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input type="hidden" name="type" value={type} />
      <div className="hidden-field" aria-hidden="true">
        <label htmlFor={`${type}-company`}>Company</label>
        <input id={`${type}-company`} name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {type === 'stay' && (
        <>
          <div className="field-grid">
            <Field label="Check-in" name="checkIn" type="date" required />
            <Field label="Check-out" name="checkOut" type="date" required />
          </div>
          <div className="field-grid">
            <Field label="Adults" name="adults" type="number" min="1" max="20" defaultValue="2" required />
            <Field label="Children" name="children" type="number" min="0" max="20" defaultValue="0" />
          </div>
          <Field label="Number of cottages" name="cottages" type="number" min="1" max="12" defaultValue="1" required />
        </>
      )}

      {type === 'career' && <Field label="Position you are applying for" name="position" required />}

      <div className="field-grid">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <Field label="Email" name="email" type="email" required />
      <div className="field">
        <label htmlFor={`${type}-message`}>{type === 'career' ? 'Experience or message' : 'Message'}</label>
        <textarea
          id={`${type}-message`}
          name="message"
          placeholder={compact ? 'Anything the resort should know?' : 'Share preferences, arrival plans or questions.'}
        />
      </div>
      {type === 'stay' && (
        <p className="form-note">
          This sends an enquiry only. Availability, rates, payments and confirmation are handled by the resort or its booking provider.
        </p>
      )}
      {status && <p className={`status ${status.type}`}>{status.message}</p>}
      <button className="btn primary" type="submit" disabled={pending}>
        <Send size={17} aria-hidden="true" />
        {pending ? 'Sending...' : type === 'career' ? 'Submit Application' : 'Send Enquiry'}
      </button>
    </form>
  );
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

function Field({ label, name, ...props }: FieldProps) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} {...props} />
    </div>
  );
}
