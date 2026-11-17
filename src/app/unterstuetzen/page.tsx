import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Check, Heart, Landmark, type LucideIcon } from 'lucide-react';
import { Seitenkopf } from '@/components/layout/Seitenkopf';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Unterstützen | Circus Akademie München e.V.',
  description: 'Unterstützen Sie zeitgenössischen Zirkus in München. Sponsoring oder Mitgliedschaft – finden Sie die passende Form der Unterstützung.',
};

const ICONS: LucideIcon[] = [Heart, Building2, Landmark];

export default function UnterstuetzenPage() {
  const { headline, intro, vorteileUeberschrift, wege } = site.unterstuetzen;

  return (
    <>
      <Seitenkopf titel={headline} einleitung={intro} />

      <Section>
        <ul className="grid gap-6 lg:grid-cols-3">
          {wege.map((weg, index) => {
            const Icon = ICONS[index] ?? Heart;
            return (
              <li
                key={weg.title}
                className="flex flex-col rounded-card border border-line bg-white p-7 sm:p-8"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-dome-tint text-dome">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <h2 className="mb-3 mt-7 text-2xl font-semibold">{weg.title}</h2>
                <p className="text-ink-muted">{weg.text}</p>

                <h3 className="mb-3 mt-7 font-sans text-base font-semibold tracking-normal">
                  {vorteileUeberschrift}
                </h3>
                <ul className="mb-8 space-y-2.5 text-ink-soft">
                  {weg.vorteile.map((vorteil) => (
                    <li key={vorteil} className="flex gap-3">
                      <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-dome" />
                      <span>{vorteil}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="mt-auto w-full" variant={index === 0 ? 'primary' : 'outline'}>
                  <Link href={weg.cta.href}>{weg.cta.text}</Link>
                </Button>
              </li>
            );
          })}
        </ul>
      </Section>
    </>
  );
}
