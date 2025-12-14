# Hunternew Website

High-converting, SEO-optimised, mobile-first site for Hunternew.

## Getting started
1. Ensure Node 18+.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```

## Environment variables
Configure in `.env.local`:
```
RESEND_API_KEY=your_resend_key
RESEND_FROM=hello@hunternew.com
NEXT_PUBLIC_GA4_ID=G-XXXXXXX
```
If email vars are missing, the consult API logs payloads and still returns success to keep UX smooth.

## Consult form email
- API route: `app/api/consult/route.ts`
- Sends to **reece@hunternew.com.au** via Resend.
- Payload: firstName, mobile, email, stage, timeframe, challenge.

## Deployment (Vercel)
1. Push to repo.
2. Set env vars in Vercel project (same keys as above).
3. `npm run build` during deploy.

## Testing
See `docs/testing-checklist.md` for a quick preflight list.
