import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { alleBeitraege, beitrag, datumLang } from '@/lib/blog';

type Props = { params: Promise<{ slug: string }> };

// Nur veröffentlichte Beiträge haben eine Adresse, alles andere antwortet mit 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return alleBeitraege().map((eintrag) => ({ slug: eintrag.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const eintrag = beitrag(slug);
  if (!eintrag) return {};

  return {
    title: `${eintrag.title} | Circus Akademie München e.V.`,
    description: eintrag.excerpt || undefined,
    openGraph: {
      type: 'article',
      title: eintrag.title,
      description: eintrag.excerpt || undefined,
      publishedTime: eintrag.date,
      images: eintrag.cover ? [{ url: eintrag.cover, alt: eintrag.coverAlt }] : undefined,
    },
  };
}

export default async function BlogBeitragPage({ params }: Props) {
  const { slug } = await params;
  const eintrag = beitrag(slug);

  if (!eintrag) {
    notFound();
  }

  return (
    <article className="wrap py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-ink-muted">
          <time dateTime={eintrag.date}>{datumLang(eintrag.date)}</time>
          {eintrag.author && <span> · {eintrag.author}</span>}
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">{eintrag.title}</h1>
        {eintrag.excerpt && <p className="mt-5 text-xl text-ink-muted">{eintrag.excerpt}</p>}

        {eintrag.cover && (
          <div className="relative mt-10 aspect-3/2 overflow-hidden rounded-media bg-mist">
            <Image
              src={eintrag.cover}
              alt={eintrag.coverAlt ?? ''}
              fill
              preload
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
        )}

        <div className="lesetext mt-10">
          <ReactMarkdown
            components={{
              // Bilder im Text laufen über next/image. Der Rahmen gibt die Form vor, damit nichts springt.
              img: ({ src, alt }) =>
                typeof src === 'string' && src.startsWith('/') ? (
                  <span className="relative my-8 block aspect-3/2 overflow-hidden rounded-media bg-mist">
                    <Image
                      src={src}
                      alt={alt ?? ''}
                      fill
                      sizes="(min-width: 768px) 768px, 100vw"
                      className="object-cover"
                    />
                  </span>
                ) : null,
            }}
          >
            {eintrag.content}
          </ReactMarkdown>
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <Link href="/blog" className="font-medium text-dome underline-offset-4 hover:underline">
            ← Alle Beiträge
          </Link>
        </div>
      </div>
    </article>
  );
}
