import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

/**
 * Blog aus Markdown-Dateien unter content/blog.
 * Bewusst Markdown mit Frontmatter statt MDX: Die Felder lassen sich später
 * eins zu eins in ein CMS übernehmen (siehe docs/BACKEND-PLAN.md).
 */
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export type Beitrag = {
  /** Dateiname ohne .md, wird zur Adresse /blog/<slug> */
  slug: string;
  title: string;
  /** ISO-Datum, zum Beispiel 2026-11-17 */
  date: string;
  excerpt: string;
  /** Pfad zum Titelbild unter public/, zum Beispiel /images/... */
  cover?: string;
  /** Beschreibt, was auf dem Titelbild zu sehen ist */
  coverAlt?: string;
  author?: string;
  /** true: Der Beitrag erscheint nirgends auf der Website */
  draft: boolean;
  /** Der Text in Markdown */
  content: string;
};

function isoDatum(wert: unknown, datei: string): string {
  // YAML macht aus 2026-11-17 ein Date-Objekt, in Anführungszeichen bleibt es ein String.
  const datum = wert instanceof Date ? wert : new Date(String(wert));
  if (Number.isNaN(datum.getTime())) {
    throw new Error(`content/blog/${datei}: "date" fehlt oder ist kein Datum (erwartet 2026-11-17).`);
  }
  return datum.toISOString().slice(0, 10);
}

function lesen(datei: string): Beitrag {
  const slug = datei.replace(/\.md$/, '');
  if (!/^[a-z0-9-]+$/.test(slug)) {
    throw new Error(
      `content/blog/${datei}: Der Dateiname darf nur Kleinbuchstaben, Ziffern und Bindestriche enthalten.`
    );
  }

  const { data, content } = matter(fs.readFileSync(path.join(BLOG_DIR, datei), 'utf8'));

  if (typeof data.title !== 'string' || !data.title.trim()) {
    throw new Error(`content/blog/${datei}: "title" fehlt.`);
  }
  if (data.cover && !data.coverAlt) {
    throw new Error(`content/blog/${datei}: Zum Titelbild fehlt "coverAlt" mit der Bildbeschreibung.`);
  }

  return {
    slug,
    title: data.title.trim(),
    date: isoDatum(data.date, datei),
    excerpt: typeof data.excerpt === 'string' ? data.excerpt.trim() : '',
    cover: typeof data.cover === 'string' ? data.cover : undefined,
    coverAlt: typeof data.coverAlt === 'string' ? data.coverAlt : undefined,
    author: typeof data.author === 'string' ? data.author : undefined,
    // Fehlt die Angabe, gilt der Beitrag als Entwurf. Veröffentlicht wird nur mit draft: false.
    draft: data.draft !== false,
    content,
  };
}

/** Alle veröffentlichten Beiträge, neueste zuerst. Entwürfe sind nie dabei. */
export function alleBeitraege(): Beitrag[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((datei) => datei.endsWith('.md'))
    .map(lesen)
    .filter((beitrag) => !beitrag.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function beitrag(slug: string): Beitrag | undefined {
  return alleBeitraege().find((eintrag) => eintrag.slug === slug);
}

/** 2026-11-17 wird zu "17. November 2026". */
export function datumLang(iso: string): string {
  return new Intl.DateTimeFormat('de-DE', { dateStyle: 'long', timeZone: 'UTC' }).format(
    new Date(`${iso}T00:00:00Z`)
  );
}
