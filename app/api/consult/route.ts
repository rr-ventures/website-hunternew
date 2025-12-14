import { NextResponse } from 'next/server';
import { sendConsultEmail } from '@/lib/mailer';

export async function POST(request: Request) {
  const body = await request.json();
  const requiredFields = ['firstName', 'mobile', 'email', 'stage'];
  for (const field of requiredFields) {
    if (!body[field]) {
      return NextResponse.json({ error: `${field} is required` }, { status: 400 });
    }
  }

  const result = await sendConsultEmail(body);

  if (!result.success) {
    return NextResponse.json({ error: result.error || 'Unable to send' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
