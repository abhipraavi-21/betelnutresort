import type { MetadataRoute } from 'next';
import { site } from '@/lib/site-data';

const routes = [
  '',
  '/cottages',
  '/facilities',
  '/gallery',
  '/explore-diveagar',
  '/contact',
  '/career',
  '/faqs',
  '/privacy-policy',
  '/terms-and-conditions'
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7
  }));
}
