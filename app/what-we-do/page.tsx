import { BottomCTA } from '@/components/BottomCTA';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'What We Do | Hunternew',
  description: 'Hunternew builds modern property plans that fit your generation with clarity, strategy, and momentum.',
  path: '/what-we-do'
});

const beliefs = [
  'Clarity beats noise — plain English over hype.',
  'Strategy should fit your life stage, not someone else’s.',
  'Data matters, but so does how you feel living there.',
  'Progress is better than perfection — momentum compounds.',
  'Risk is personal. We design for your comfort and goals.',
  'Local nuance beats generic national headlines.',
  'Confidence comes from knowing the why behind every move.'
];

const personas = [
  {
    title: 'The first-home buyer feeling whiplash',
    copy: 'Rates, grants, conflicting advice — you want a plan that won’t leave you exposed.'
  },
  {
    title: 'The would-be investor wanting to start smart',
    copy: 'You don’t want to gamble. You want a strategy built around risk controls and growth options.'
  },
  {
    title: 'The already-owner wanting the next move',
    copy: 'Upgrade, renovate, invest? You need clarity on what aligns with your life and numbers.'
  }
];

const pillars = [
  {
    title: 'Clarity',
    copy: 'See the landscape clearly: lending rules, local dynamics, and the trade-offs that actually matter.'
  },
  {
    title: 'Strategy',
    copy: 'A tailored plan that links your goals, timing, budget, and risk comfort into actionable steps.'
  },
  {
    title: 'Confidence',
    copy: 'Make decisions without the second-guessing. You’ll know why each move is right for you.'
  },
  {
    title: 'Momentum',
    copy: 'Stop waiting for perfect conditions. Move forward with a sequence that keeps you in control.'
  }
];

export default function WhatWeDoPage() {
  return (
    <div className="space-y-20">
      <section className="section-shell pt-10 space-y-6">
        <p className="text-sm font-semibold text-accent uppercase tracking-wide">Innovator & relatable guide</p>
        <h1 className="text-4xl font-bold">We help you build a property plan that fits your generation.</h1>
        <p className="text-lg text-muted max-w-4xl">
          Old advice doesn’t match today’s market. We translate the noise into a plan you can trust, with clear reasons behind every recommendation.
        </p>
      </section>

      <section className="section-shell grid gap-8 md:grid-cols-2">
        <div className="glass-card p-6 space-y-3">
          <h2 className="text-2xl font-bold">Mission</h2>
          <p className="text-muted">Give Hunter people a modern, confidence-building way to move on property decisions without pressure.</p>
        </div>
        <div className="glass-card p-6 space-y-3">
          <h2 className="text-2xl font-bold">Vision</h2>
          <p className="text-muted">A region of homeowners and investors who feel clear, equipped, and in control because their plan fits the world they live in.</p>
        </div>
      </section>

      <section className="section-shell space-y-6">
        <h2 className="text-3xl font-bold">What we believe</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((belief) => (
            <div key={belief} className="glass-card p-5 text-charcoal font-semibold">
              {belief}
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-6">
        <h2 className="text-3xl font-bold">Who it’s for</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {personas.map((persona) => (
            <div key={persona.title} className="glass-card p-5 space-y-2">
              <h3 className="text-xl font-bold">{persona.title}</h3>
              <p className="text-muted">{persona.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-6">
        <h2 className="text-3xl font-bold">The transformation</h2>
        <p className="text-muted max-w-3xl">
          We design for outcomes, not a service list. Each pillar builds your confidence and momentum without the guesswork.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="glass-card p-5 space-y-2">
              <h3 className="text-xl font-bold">{pillar.title}</h3>
              <p className="text-muted">{pillar.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <BottomCTA />
    </div>
  );
}
