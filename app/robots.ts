import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.hunternew.com.au';
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}
