import type { Metadata } from 'next';

const siteUrl = 'https://www.hunternew.com.au';
const siteName = 'Hunternew';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

export function buildMetadata({ title, description, path = '/' }: SeoProps): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Hunternew',
  url: siteUrl,
  email: 'hello@hunternew.com',
  telephone: '0466 911 617',
  areaServed: [
    'Newcastle',
    'Maitland',
    'Lake Macquarie',
    'Port Stephens',
    'Hunter Valley'
  ],
  image: `${siteUrl}/brand/hunternew-logo.png`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Service-area only'
  }
};
