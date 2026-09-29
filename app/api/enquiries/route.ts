import { NextResponse } from 'next/server';
import { enquirySchema } from '@/lib/forms';
import { handleEnquiry } from '@/lib/enquiry-store';

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = enquirySchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { message: parsed.error.issues[0]?.message || 'Please check the form and try again.' },
        { status: 400 }
      );
    }

    const result = await handleEnquiry(parsed.data, request.headers.get('user-agent') || undefined);
    return NextResponse.json({
      message: 'Enquiry received.',
      id: result.id,
      delivered: result.delivered
    });
  } catch {
    return NextResponse.json({ message: 'Unable to send your enquiry right now.' }, { status: 500 });
  }
}
