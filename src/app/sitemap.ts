import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/siteUrl';

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
  return SEITEN.map((pfad) => ({ url: `${SITE_URL}${pfad === '/' ? '' : pfad}` }));
}
