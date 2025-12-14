import { BottomCTA } from '@/components/BottomCTA';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Our Results | Hunternew',
  description: 'Real outcomes from people who moved from stuck to clear with Hunternew’s modern property strategy.',
  path: '/our-results'
});

const caseStudies = [
  {
    before: 'Felt priced out and paralysed by headlines.',
    shift: 'Mapped lending options, clarified budget, and reframed suburbs that match lifestyle.',
    after: 'Purchased confidently in a growth corridor with a buffer built-in.'
  },
  {
    before: 'Investor worried about buying at the wrong time.',
    shift: 'Stress-tested cash flow and outlined staged moves.',
    after: 'Secured an asset aligned to long-term plan without compromising sleep.'
  },
  {
    before: 'Couple debating renovate vs. move.',
    shift: 'Modelled both paths and timing impacts.',
    after: 'Chose to upgrade with clarity on costs and upside.'
  },
  {
    before: 'First home buyer missing out at auctions.',
    shift: 'Shifted to pre-market strategy and tightened criteria.',
    after: 'Won a property without overpaying and kept a safety buffer.'
  },
  {
    before: 'Family wanting to invest but nervous about rates.',
    shift: 'Scenario planning with rate rises and rent assumptions.',
    after: 'Acquired with confidence and a clear exit plan.'
  },
  {
    before: 'Owner sitting on equity, unsure what’s next.',
    shift: 'Aligned goals with timeline and mapped options.',
    after: 'Activated a two-step plan toward their ideal lifestyle suburb.'
  }
];

const testimonials = new Array(6).fill(null).map((_, i) => ({
  name: `Client ${i + 1}`,
  quote: 'Placeholder testimonial. Real client stories to be added.'
}));

const wins = [
  'Confidence to walk away from the wrong property',
  'Plans that match school zones and lifestyle goals',
  'Timeframes that balance urgency with calm',
  'Sleep-better risk controls on every decision',
  'Community insight you won’t find in a search result',
  'Momentum without the overwhelm'
];

export default function ResultsPage() {
  return (
    <div className="space-y-20">
      <section className="section-shell pt-10 space-y-4">
        <h1 className="text-4xl font-bold">Real outcomes. Real clarity.</h1>
        <p className="text-lg text-muted max-w-4xl">No hype. Just stories of people who went from stuck → clear.</p>
      </section>

      <section className="section-shell space-y-6">
        <h2 className="text-3xl font-bold">Case studies</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item, idx) => (
            <div key={idx} className="glass-card p-5 space-y-3">
              <div>
                <p className="text-xs uppercase text-accent font-semibold">Before</p>
                <p className="text-charcoal font-semibold">{item.before}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-accent font-semibold">Shift</p>
                <p className="text-muted">{item.shift}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-accent font-semibold">After</p>
                <p className="text-charcoal font-semibold">{item.after}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-6">
        <h2 className="text-3xl font-bold">Testimonials (placeholders)</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="glass-card p-5 space-y-2">
              <p className="text-muted">“{item.quote}”</p>
              <p className="font-semibold text-charcoal">{item.name}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="glass-card p-6 h-full flex items-center justify-center text-muted font-semibold">
            Video placeholder
          </div>
          <div className="glass-card p-6 h-full flex items-center justify-center text-muted font-semibold">
            Video placeholder
          </div>
        </div>
      </section>

      <section className="section-shell space-y-6">
        <h2 className="text-3xl font-bold">Results that matter</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wins.map((win) => (
            <div key={win} className="glass-card p-5 font-semibold text-charcoal">
              {win}
            </div>
          ))}
        </div>
      </section>

      <BottomCTA />
    </div>
  );
}
