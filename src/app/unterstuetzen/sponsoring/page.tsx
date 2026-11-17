import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Seitenkopf } from '@/components/layout/Seitenkopf';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { SponsoringForm } from '@/components/SponsoringForm';
import { cn } from '@/lib/utils';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Sponsoring | Circus Akademie München e.V.',
  description: 'Werden Sie Sponsor für zeitgenössischen Zirkus in München. Sichtbarkeit, CSR-Engagement und Networking mit der Kulturszene.',
};

export default function SponsoringPage() {
  const { hero, warum, pakete, paketeHinweis, kontakt } = site.sponsoring;

  return (
    <>
      <Seitenkopf titel={hero.headline} einleitung={hero.lead}>
        <Button asChild size="lg">
          <Link href={hero.cta1.href}>{hero.cta1.text}</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href={hero.cta2.href}>{hero.cta2.text}</Link>
        </Button>
      </Seitenkopf>

      <Section id="warum">
        <SectionHeader title="Warum Sponsoring?" />
        <ul className="grid gap-6 md:grid-cols-3">
          {warum.map((punkt) => (
            <li key={punkt} className="flex gap-4 border-t-2 border-dome pt-5">
              <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-dome" />
              <span className="text-lg text-ink-soft">{punkt}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="pakete" background="gray">
        <SectionHeader title="Sponsoring-Pakete" subtitle={paketeHinweis} />
        <ul className="grid gap-6 lg:grid-cols-3">
          {pakete.map((paket, index) => {
            const hervorgehoben = index === 1;
            return (
              <li
                key={paket.name}
                className={cn(
                  'flex flex-col rounded-card border bg-white p-7 sm:p-8',
                  hervorgehoben ? 'border-2 border-dome' : 'border-line'
                )}
              >
                <h3 className="text-lg font-semibold">{paket.name}</h3>
                <p className="mt-2 font-display text-[2rem] font-bold leading-tight text-dome">
                  {paket.betrag}
                </p>
                <p className="mt-3 text-sm text-ink-muted">{paket.beschreibung}</p>
                <ul className="my-7 space-y-3 border-t border-line pt-6 text-ink-soft">
                  {paket.inhalt.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-dome" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="mt-auto w-full"
                  variant={hervorgehoben ? 'primary' : 'outline'}
                >
                  <Link href="#kontakt">Paket anfragen</Link>
                </Button>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section id="kontakt">
        <div className="mx-auto max-w-2xl">
          <SectionHeader title="Sponsoring anfragen" subtitle={kontakt.text} />
          <div className="relative rounded-card border border-line bg-white p-6 sm:p-8">
            <SponsoringForm />
          </div>
        </div>
      </Section>
    </>
  );
}
