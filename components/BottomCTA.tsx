import { ConsultForm } from './ConsultForm';
import { CTAButton } from './CTAButton';
import Link from 'next/link';

interface BottomCTAProps {
  title?: string;
  description?: string;
  id?: string;
}

export function BottomCTA({
  title = 'Book a Free Strategy Consult',
  description = 'Tell us where you’re at — we’ll help you find the cleanest next step.',
  id = 'consult'
}: BottomCTAProps) {
  return (
    <section id={id} className="bg-gradient-to-br from-charcoal via-muted to-charcoal text-white py-16 mt-20">
      <div className="section-shell grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">{title}</h2>
          <p className="text-lg text-white/80">{description}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span>Prefer to talk now?</span>
            <Link href="tel:0466911617" className="underline">0466 911 617</Link>
            <span>or</span>
            <Link href="mailto:hello@hunternew.com" className="underline">hello@hunternew.com</Link>
            <CTAButton className="px-4 py-2 text-sm" as="link" href="#consult" eventName="click_cta_bottom" />
          </div>
        </div>
        <div className="glass-card bg-white/10 border-white/20 shadow-xl p-6 rounded-2xl">
          <ConsultForm compact />
        </div>
      </div>
    </section>
  );
}
