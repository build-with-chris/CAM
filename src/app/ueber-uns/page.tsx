import type { Metadata } from 'next';
import { Seitenkopf } from '@/components/layout/Seitenkopf';
import { Section } from '@/components/ui/Section';
import { ArrowUpRight } from 'lucide-react';
import { Bild } from '@/components/ui/Bild';
import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';
import { domeBilder } from '@/content/domeBilder';

export const metadata: Metadata = {
  title: 'Über uns | Circus Akademie München e.V.',
  description:
    'Circus Akademie München e.V. – Kulturverein zur Förderung von zeitgenössischem Zirkus. Erfahren Sie mehr über unseren Zweck, unsere Werte und unsere Struktur.',
};

// Feste Auswahl statt Zufall: sechs Hochformate, die den Zuschnitt 4:5 gut vertragen.
const GALERIE = ['Aerial Silk', 'Clownerie', 'Canes', 'Contemporary Dance', 'Drag', 'Feuerwehr Akrobatik'];

// Querformate brauchen im Hochformat-Rahmen einen Ausschnitt, der die Person zeigt.
const FOKUS: Record<string, string> = { 'Contemporary Dance': '68% 50%' };

export default function UeberUnsPage() {
  const { wofuerWirStehen, details, name, rolle, rechtsform, register, ansprechpersonen } = site.verein;
  const bilder = GALERIE.flatMap((titel) => site.disziplinen.filter((d) => d.name === titel));

  return (
    <>
      <Seitenkopf titel={wofuerWirStehen.headline} einleitung={wofuerWirStehen.text1} />

      <Section>
        <p className="max-w-3xl text-lg text-ink-soft">{wofuerWirStehen.text2}</p>
        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {bilder.map((bild) => (
            <li key={bild.image}>
              <Bild
                src={bild.image}
                width={bild.width}
                height={bild.height}
                alt={bild.alt}
                credit={bild.credit}
                fokus={FOKUS[bild.name]}
                sizes="(min-width: 768px) 33vw, 50vw"
                rahmenClassName="aspect-4/5 rounded-media"
              />
              <p className="mt-2 text-sm font-medium text-ink-muted">{bild.name}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section background="gray">
        <div className="grid items-center gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,1fr)_32rem]">
          <div>
            <h2 className="mb-7 text-3xl font-bold md:text-[2.75rem]">
              {wofuerWirStehen.workplace.headline}
            </h2>
            <div className="space-y-4 text-lg text-ink-soft">
              <p className="font-semibold text-ink">{rolle}</p>
              <p>{wofuerWirStehen.workplace.text1}</p>
              <p>{wofuerWirStehen.workplace.text2}</p>
            </div>
            <Button asChild variant="outline" className="mt-8 bg-white">
              <a href={site.extern.pepeDome.href} target="_blank" rel="noopener noreferrer">
                Zum Pepe Dome
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </div>
          <Bild
            {...domeBilder.kuppelHerbst}
            sizes="(min-width: 1024px) 512px, 100vw"
            rahmenClassName="aspect-3/2 w-full rounded-card"
          />
        </div>

        <dl className="mt-14 grid gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {site.dome.fakten.map((fakt) => (
            <div key={fakt.label}>
              <dt className="mb-1 text-sm text-ink-muted">{fakt.label}</dt>
              <dd className="font-medium">{fakt.wert}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <h2 className="mb-6 text-3xl font-bold md:text-[2.75rem]">{site.dome.entstehung.ueberschrift}</h2>
        <p className="max-w-3xl text-lg text-ink-soft">{site.dome.entstehung.text}</p>
        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {site.dome.entstehung.bilder.map((bild) => (
            <li key={bild.src}>
              <Bild
                {...bild}
                sizes="(min-width: 768px) 25vw, 50vw"
                rahmenClassName="aspect-4/5 rounded-media"
              />
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-ink-muted">{site.dome.entstehung.bildunterschrift}</p>
      </Section>

      <Section>
        <h2 className="mb-8 text-3xl font-bold md:text-[2.75rem]">Über den Verein</h2>
        <dl className="grid gap-x-6 gap-y-8 border-y border-line py-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <dt className="mb-1 text-sm text-ink-muted">Name</dt>
            <dd className="font-medium">{name}</dd>
          </div>
          <div>
            <dt className="mb-1 text-sm text-ink-muted">Sitz</dt>
            <dd className="font-medium">{details.sitz}</dd>
          </div>
          <div>
            <dt className="mb-1 text-sm text-ink-muted">Geschäftsjahr</dt>
            <dd className="font-medium">{details.geschaeftsjahr}</dd>
          </div>
          <div>
            <dt className="mb-1 text-sm text-ink-muted">Rechtsform</dt>
            <dd className="font-medium">{rechtsform}</dd>
          </div>
          <div>
            <dt className="mb-1 text-sm text-ink-muted">Vereinsregister</dt>
            <dd className="font-medium">{register}</dd>
          </div>
          <div>
            <dt className="mb-1 text-sm text-ink-muted">Ansprechpersonen</dt>
            <dd className="font-medium">{ansprechpersonen.join(', ')}</dd>
          </div>
        </dl>

        <div className="mt-12 grid gap-x-16 gap-y-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xl font-semibold">Selbstverständnis</h3>
            <p className="text-ink-soft">{details.selbstverstaendnis}</p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-semibold">Vereinszweck</h3>
            <h4 className="mb-2 mt-5 font-sans text-base font-semibold tracking-normal">
              Satzungszweck
            </h4>
            <p className="text-ink-soft">{details.vereinszweck.zweck}</p>
            <h4 className="mb-2 mt-6 font-sans text-base font-semibold tracking-normal">
              Mittelverwendung
            </h4>
            <ul className="list-disc space-y-2 pl-5 text-ink-soft marker:text-dome">
              {details.vereinszweck.mittelverwendung.map((punkt) => (
                <li key={punkt}>{punkt}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
