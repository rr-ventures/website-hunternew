import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.hunternew.com.au';
  const pages = ['/', '/what-we-do', '/our-results', '/contact'];
  return pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
