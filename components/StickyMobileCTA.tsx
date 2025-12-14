'use client';

import { usePathname } from 'next/navigation';
import { CTAButton } from './CTAButton';
import { track } from '@/lib/analytics';

export function StickyMobileCTA() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur shadow-header md:hidden">
      <div className="section-shell py-3 flex items-center gap-3">
        <div className="flex-1 text-sm font-semibold text-charcoal">Free Strategy Consult</div>
        <CTAButton
          as="link"
          href={pathname === '/contact' ? '#consult' : '/contact#consult'}
          className="px-4 py-2 text-sm"
          eventName="click_cta_mobile_sticky"
          onClick={() => track('click_cta_mobile_sticky')}
        >
          Book now
        </CTAButton>
      </div>
    </div>
  );
}
