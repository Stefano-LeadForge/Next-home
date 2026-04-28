import { MetadataRoute } from 'next';

const BASE = 'https://nexthomemilano.it';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}/`,
      lastModified: new Date('2026-04-28'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/next-home-360`,
      lastModified: new Date('2026-04-28'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/valuta-casa`,
      lastModified: new Date('2026-04-28'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/portfolio`,
      lastModified: new Date('2026-04-28'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE}/portfolio/vendite`,
      lastModified: new Date('2026-04-28'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE}/portfolio/affitti`,
      lastModified: new Date('2026-04-28'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE}/blog`,
      lastModified: new Date('2026-04-28'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE}/blog/mercato-immobiliare-milano-2026`,
      lastModified: new Date('2026-04-12'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE}/privacy`,
      lastModified: new Date('2026-04-28'),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE}/cookie`,
      lastModified: new Date('2026-04-28'),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE}/termini`,
      lastModified: new Date('2026-04-28'),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];
}
