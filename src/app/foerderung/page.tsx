import type { Metadata } from 'next';
import Link from 'next/link';
import { Bath, Check, Coffee, FileDown, MonitorPlay, Shield, type LucideIcon } from 'lucide-react';
import { Seitenkopf } from '@/components/layout/Seitenkopf';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Förderung | Circus Akademie München e.V.',
  description:
    'Zeitgenössischer Zirkus als Kultur- und Begegnungsraum für München. Kulturverein mit festem Veranstaltungsort im Geodome – aktuell Umbau & Upgrade.',
};

const EINSATZ_ICONS: LucideIcon[] = [Bath, Shield, MonitorPlay, Coffee];

export default function FoerderungPage() {
  const { hero, mehrwert, finanzplan, einsatz, unterlagen, kontakt } = site.foerderung;

  return (
    <>
      <Seitenkopf titel={hero.headline} einleitung={hero.lead}>
        <Button asChild size="lg">
          <Link href={hero.cta.href}>{hero.cta.text}</Link>
        </Button>
      </Seitenkopf>

      <Section id="mehrwert">
        <SectionHeader title="Öffentlicher Mehrwert" />
        <ul className="grid gap-x-12 gap-y-5 md:grid-cols-2">
          {mehrwert.map((punkt) => (
            <li key={punkt} className="flex gap-4 border-t border-line pt-5">
              <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-dome" />
              <span className="text-lg text-ink-soft">{punkt}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="finanzplan" background="gray">
        <SectionHeader title={finanzplan.ueberschrift} />
        <div className="grid gap-6 lg:grid-cols-2">
          {finanzplan.rubriken.map((rubrik) => (
            <div key={rubrik.titel} className="rounded-card border border-line bg-white p-7 sm:p-8">
              <p className="font-display text-[2.125rem] font-bold leading-tight text-dome">
                {rubrik.summe}
              </p>
              <h3 className="mb-5 mt-1.5 text-xl font-semibold">{rubrik.titel}</h3>
              <dl>
                {rubrik.items.map((item) => (
                  <div key={item.kategorie} className="border-t border-line py-4 last:pb-0">
                    <dt className="font-semibold">{item.kategorie}</dt>
                    <dd className="mt-1 text-[0.9375rem] text-ink-muted">{item.beschreibung}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-ink-muted">{finanzplan.zusatztext}</p>
      </Section>

      <Section id="einsatz">
        <SectionHeader title="Wofür Förderung konkret eingesetzt wird" />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {einsatz.map((item, index) => {
            const Icon = EINSATZ_ICONS[index] ?? Check;
            return (
              <li key={item.kategorie} className="rounded-card border border-line p-6">
                <span className="flex size-12 items-center justify-center rounded-full bg-dome-tint text-dome">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h3 className="mb-2 mt-6 text-xl font-semibold">{item.kategorie}</h3>
                <p className="text-ink-muted">{item.beschreibung}</p>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section id="unterlagen" background="gray">
        <SectionHeader title="Unterlagen" />
        <ul className="grid max-w-3xl gap-4">
          {unterlagen.map((unterlage) => (
            <li key={unterlage.link}>
              <a
                href={unterlage.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-card border border-line bg-white p-5 font-medium transition-colors hover:border-dome"
              >
                <FileDown aria-hidden="true" className="size-7 shrink-0 text-dome" />
                {unterlage.titel}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="kontakt" background="primary">
        <h2 className="mb-5 text-3xl font-bold md:text-5xl">Kontakt</h2>
        <p className="mb-8 max-w-2xl text-lg text-white/90">{kontakt.text}</p>
        <Button asChild size="lg" variant="white">
          <Link href="/kontakt">Zum Kontaktformular</Link>
        </Button>
      </Section>
    </>
  );
}
