import { buildMetadata } from '@/lib/seo';
import { CTAButton } from '@/components/CTAButton';
import { BottomCTA } from '@/components/BottomCTA';
import { ConsultForm } from '@/components/ConsultForm';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { ImageWithOverlay } from '@/components/ImageWithOverlay';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Hunternew | Property advice that actually works in today’s reality',
  description:
    'Cut through the noise with modern property strategy built for Newcastle & the Hunter. No hype — just clarity, confidence, and momentum.'
});

const heroBullets = [
  'A clear plan in plain English',
  'Strategy built for your life — not someone else’s',
  'Confidence to take the next step'
];

const outcomeCards = [
  'You stop second-guessing every decision',
  'You know what to do next — and why',
  'You buy with confidence (not pressure)',
  'You avoid the common expensive mistakes',
  'You feel in control of your future',
  'You build momentum instead of waiting'
];

const faqs = [
  {
    q: 'Is this for first home buyers?',
    a: 'Yes. We translate the landscape into a plan that fits your budget, your timing, and your risk appetite.'
  },
  {
    q: 'What if I’m not ready yet?',
    a: 'No pressure. The consult is to get you unstuck and show you a direction — whether you move now or later.'
  },
  {
    q: 'Do you guarantee results?',
    a: 'No guarantees. Property has variables. We give you the clearest strategy and risk controls for your goals.'
  },
  {
    q: 'Do you work across the Hunter?',
    a: 'Yes. Newcastle, Maitland, Lake Macquarie, Port Stephens, Hunter Valley.'
  },
  {
    q: 'How does the free consult work?',
    a: 'Tell us where you’re at. We listen, map your options, and recommend the cleanest next step.'
  },
  {
    q: 'What happens after I enquire?',
    a: 'We’ll confirm a time, send a short prep guide, and meet you with a clear agenda focused on outcomes.'
  }
];

const regions = ['Newcastle', 'Maitland', 'Lake Macquarie', 'Port Stephens', 'Hunter Valley'];

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden pt-6">
        <AnimatedBackground />
        <div className="section-shell grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-charcoal shadow-sm">
              Modern property strategy for Newcastle & the Hunter
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Property advice that actually works in today’s reality.
            </h1>
            <p className="text-lg text-muted max-w-xl">
              The old rules don’t apply anymore. If you feel stuck, you’re not behind — the game changed. Hunternew helps you cut through the noise, build a clear plan, and move with confidence.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <CTAButton as="link" href="/contact#consult" eventName="click_cta_header" />
              <span className="text-sm font-semibold text-muted">No pressure. Just clarity.</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {heroBullets.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="font-semibold text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[420px] lg:h-[520px]">
            <ImageWithOverlay
              src="/images/hero.avif"
              alt="Hunter Coastline"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-shell space-y-6">
        <h2 className="text-3xl font-bold">If you feel overwhelmed, you’re normal.</h2>
        <p className="text-lg text-muted max-w-3xl">
          You’re juggling advice from family, media headlines, and salespeople — none of it matches your situation. Analysis paralysis is real because the stakes are high and the market keeps shifting.
        </p>
      </section>

      <section className="section-shell grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Good advice can still be wrong for today.</h2>
          <ul className="space-y-3 text-muted">
            <li>• Old playbooks ignore today’s lending rules and lifestyle trade-offs.</li>
            <li>• Generic “buy and hold” talk doesn’t address your risk or time horizons.</li>
            <li>• The cost of guessing is higher now — every misstep compounds.</li>
          </ul>
          <p className="text-lg text-charcoal font-semibold">
            Anything is possible — when you stop guessing and start following a plan that fits the world you’re in.
          </p>
        </div>
        <div className="glass-card p-8 space-y-4">
          <h3 className="text-2xl font-bold">What you get with Hunternew</h3>
          <p className="text-muted">
            We blend modern data with on-the-ground insight to give you options you can actually act on — minus the jargon and pressure.
          </p>
          <div className="flex flex-wrap gap-3">
            {regions.map((region) => (
              <span key={region} className="rounded-full bg-charcoal text-white px-3 py-1 text-sm">
                {region}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell space-y-6">
        <h2 className="text-3xl font-bold">What changes when you have the right strategy</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomeCards.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card p-5"
            >
              <div className="h-10 w-10 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold mb-3">→</div>
              <p className="font-semibold text-charcoal">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-6">
        <h2 className="text-3xl font-bold">Built for Newcastle & the Hunter.</h2>
        <p className="text-muted max-w-3xl">
          Local nuance matters. From inner-city streets to coastal corridors and growing hubs, we help you navigate the specific dynamics shaping Newcastle, Maitland, Lake Macquarie, Port Stephens, and the Hunter Valley.
        </p>
        <div className="flex flex-wrap gap-3">
          {regions.map((region) => (
            <span key={region} className="rounded-full border border-charcoal/15 px-3 py-1 text-sm font-semibold text-charcoal">
              {region}
            </span>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-8">
        <h2 className="text-3xl font-bold">Quick answers</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.q} className="glass-card p-5 space-y-2">
              <h3 className="font-semibold text-lg text-charcoal">{faq.q}</h3>
              <p className="text-muted">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-6">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Tell us where you’re at — we’ll respond with a clear next step.</h2>
            <p className="text-muted">Book a Free Strategy Consult. No pressure. Just clarity.</p>
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-muted">
              <Link href="tel:0466911617" className="underline" onClick={() => {}}>
                0466 911 617
              </Link>
              <Link href="mailto:hello@hunternew.com" className="underline" onClick={() => {}}>
                hello@hunternew.com
              </Link>
            </div>
          </div>
          <div className="glass-card p-6">
            <ConsultForm />
          </div>
        </div>
      </section>

      <BottomCTA />
    </div>
  );
}
