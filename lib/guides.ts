export const GUIDES = [
  { slug: 'guida-bb-1', label: 'Guida B&B 1', envKey: 'GUIDE_BB_1_PASSWORD' },
  { slug: 'guida-bb-2', label: 'Guida B&B 2', envKey: 'GUIDE_BB_2_PASSWORD' },
  { slug: 'guida-bb-3', label: 'Guida B&B 3', envKey: 'GUIDE_BB_3_PASSWORD' },
  { slug: 'guida-bb-4', label: 'Guida B&B 4', envKey: 'GUIDE_BB_4_PASSWORD' },
  { slug: 'guida-bb-5', label: 'Guida B&B 5', envKey: 'GUIDE_BB_5_PASSWORD' },
  { slug: 'guida-bb-6', label: 'Guida B&B 6', envKey: 'GUIDE_BB_6_PASSWORD' },
  { slug: 'guida-bb-7', label: 'Guida B&B 7', envKey: 'GUIDE_BB_7_PASSWORD' },
  { slug: 'guida-bb-8', label: 'Guida B&B 8', envKey: 'GUIDE_BB_8_PASSWORD' },
] as const;

export type GuideSlug = typeof GUIDES[number]['slug'];

export function findGuide(slug: string) {
  return GUIDES.find((g) => g.slug === slug) ?? null;
}

export function authCookieName(slug: string) {
  return 'guide_auth_' + slug.replace(/-/g, '_');
}
