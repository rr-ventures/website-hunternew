import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { jsonLd } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hunternew.com.au'),
  title: 'Hunternew | Property advice that actually works in today’s reality',
  description:
    'Hunternew helps Newcastle & Hunter locals build a modern property plan with clarity, confidence, and momentum.',
  alternates: { canonical: 'https://www.hunternew.com.au' },
  openGraph: {
    title: 'Hunternew | Modern property strategy',
    description:
      'Hunternew guides you through today’s property landscape with clarity-first strategy and confidence-building support.',
    url: 'https://www.hunternew.com.au',
    siteName: 'Hunternew'
  },
  twitter: {
    card: 'summary_large_image'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-white text-charcoal">
        <Header />
        <main className="pb-24">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
