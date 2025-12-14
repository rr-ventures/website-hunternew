'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { CTAButton } from './CTAButton';
import { track } from '@/lib/analytics';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/what-we-do', label: 'What We Do' },
  { href: '/our-results', label: 'Our Results' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur shadow-header py-3' : 'bg-white/70 backdrop-blur py-5'
      }`}
    >
      <div className="section-shell flex items-center gap-4 justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Hunternew home">
          <div className="relative h-10 w-36">
            <Image src="/brand/hunternew-logo.png" alt="Hunternew" fill className="object-contain" />
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-muted relative">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => track('nav_click', { href: item.href })}
                className={`relative pb-2 transition-colors ${active ? 'active-link' : 'hover:text-charcoal'}`}
              >
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="tel:0466911617"
            className="text-sm font-semibold text-muted hover:text-charcoal"
            onClick={() => track('click_call')}
          >
            0466 911 617
          </Link>
          <CTAButton
            as="link"
            href="/contact#consult"
            eventName="click_cta_header"
            className="px-5 py-2"
          />
        </div>
      </div>
    </header>
  );
}
