import { BottomCTA } from '@/components/BottomCTA';
import { ConsultForm } from '@/components/ConsultForm';
import { buildMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Contact | Hunternew',
  description: 'Book a Free Strategy Consult with Hunternew. Tell us where you’re at and we’ll help you find the cleanest next step.',
  path: '/contact'
});

const regions = ['Newcastle', 'Maitland', 'Lake Macquarie', 'Port Stephens', 'Hunter Valley'];

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <section className="section-shell pt-10 space-y-4">
        <h1 className="text-4xl font-bold">Book a Free Strategy Consult</h1>
        <p className="text-lg text-muted max-w-3xl">Tell us where you’re at. We’ll help you find the cleanest next step.</p>
      </section>

      <section className="section-shell grid gap-10 lg:grid-cols-3" id="consult">
        <div className="lg:col-span-2 glass-card p-6">
          <ConsultForm />
        </div>
        <div className="space-y-6">
          <div className="glass-card p-5 space-y-2">
            <h2 className="text-xl font-bold">Talk directly</h2>
            <Link href="tel:0466911617" className="block text-charcoal font-semibold underline">0466 911 617</Link>
            <Link href="mailto:hello@hunternew.com" className="block text-charcoal font-semibold underline">hello@hunternew.com</Link>
            <p className="text-sm text-muted">Responses within 1 business day.</p>
          </div>
          <div className="glass-card p-5 space-y-3">
            <h2 className="text-xl font-bold">Service area</h2>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <span key={region} className="rounded-full border border-charcoal/15 px-3 py-1 text-sm font-semibold text-charcoal">
                  {region}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BottomCTA description="Ready when you are. Share a few details and we’ll map the next best move." />
    </div>
  );
}
