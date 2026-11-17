import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/siteUrl';
import { alleBeitraege } from '@/lib/blog';

const SEITEN = [
  '/',
  '/ueber-uns',
  '/unterstuetzen',
  '/unterstuetzen/sponsoring',
  '/foerderung',
  '/mitglieder-werden',
  '/kontakt',
  '/impressum',
  '/agb',
  '/datenschutz',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const beitraege = alleBeitraege();
  // Der Blog steht nur in der Sitemap, wenn es veröffentlichte Beiträge gibt.
  const blog = beitraege.length > 0 ? ['/blog', ...beitraege.map((b) => `/blog/${b.slug}`)] : [];

  return [...SEITEN, ...blog].map((pfad) => ({ url: `${SITE_URL}${pfad === '/' ? '' : pfad}` }));
}
