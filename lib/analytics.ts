export type EventName =
  | 'click_cta_header'
  | 'click_cta_mobile_sticky'
  | 'click_cta_bottom'
  | 'submit_consult_form'
  | 'click_call'
  | 'click_email'
  | 'nav_click';

export function track(event: EventName, payload?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  const detail = { event, ...payload };
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push(detail);
  if (process.env.NODE_ENV !== 'production') {
    console.log('[analytics]', detail);
  }
}

export const gaMeasurementId = process.env.NEXT_PUBLIC_GA4_ID || 'G-XXXXXXX';
