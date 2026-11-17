import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Seitenkopf } from '@/components/layout/Seitenkopf';
import { Section } from '@/components/ui/Section';
import { alleBeitraege, datumLang } from '@/lib/blog';

// Ohne Beiträge antwortet die Seite mit 404 und soll dann auch nicht "Blog" heißen.
export function generateMetadata(): Metadata {
  if (alleBeitraege().length === 0) {
    return { title: 'Seite nicht gefunden | Circus Akademie München e.V.' };
  }
  return {
    title: 'Blog | Circus Akademie München e.V.',
    description: 'Neuigkeiten aus dem Circus Akademie München e.V.',
  };
}

export default function BlogPage() {
  const beitraege = alleBeitraege();

  // Ohne veröffentlichten Beitrag gibt es die Seite nicht. Ein leerer Blog schadet mehr, als er nützt.
  if (beitraege.length === 0) {
    notFound();
  }

  return (
    <>
      <Seitenkopf titel="Blog" />
      <Section>
        <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {beitraege.map((eintrag) => (
            <li key={eintrag.slug}>
              <Link href={`/blog/${eintrag.slug}`} className="group block">
                {eintrag.cover && (
                  <div className="relative mb-5 aspect-3/2 overflow-hidden rounded-media bg-mist">
                    <Image
                      src={eintrag.cover}
                      alt={eintrag.coverAlt ?? ''}
                      fill
                      sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <p className="text-sm text-ink-muted">
                  <time dateTime={eintrag.date}>{datumLang(eintrag.date)}</time>
                </p>
                <h2 className="mt-2 text-2xl font-semibold group-hover:text-dome">
                  {eintrag.title}
                </h2>
                {eintrag.excerpt && <p className="mt-3 text-ink-soft">{eintrag.excerpt}</p>}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
