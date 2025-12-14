import { Resend } from 'resend';

export interface ConsultPayload {
  firstName: string;
  mobile: string;
  email: string;
  stage: string;
  timeframe?: string;
  challenge?: string;
}

const resendKey = process.env.RESEND_API_KEY;
const resendFrom = process.env.RESEND_FROM || 'hello@hunternew.com';

const resend = resendKey ? new Resend(resendKey) : null;

export async function sendConsultEmail(payload: ConsultPayload) {
  if (!resend) {
    console.warn('Resend not configured. Payload logged:', payload);
    return { success: true, skipped: true };
  }

  try {
    await resend.emails.send({
      from: resendFrom,
      to: 'reece@hunternew.com.au',
      replyTo: payload.email,
      subject: `New consult request from ${payload.firstName}`,
      text: buildPlainText(payload)
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to send consult email', error);
    return { success: false, error: (error as Error).message };
  }
}

function buildPlainText(payload: ConsultPayload) {
  return `New strategy consult request\n\nName: ${payload.firstName}\nMobile: ${payload.mobile}\nEmail: ${payload.email}\nStage: ${payload.stage}\nTimeframe: ${payload.timeframe || 'Not specified'}\nChallenge: ${payload.challenge || 'Not provided'}\n`;
}
