import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Check } from 'lucide-react';
import { KontaktForm } from '@/components/KontaktForm';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Kontakt | Circus Akademie München e.V.',
  description: 'Schreib dem Circus Akademie München e.V. über das Kontaktformular oder per E-Mail.',
};

export default function KontaktPage() {
  return (
    <section className="py-14 md:py-20">
      <div className="wrap grid gap-x-20 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div>
          <h1 className="text-5xl font-bold md:text-[4rem] md:leading-[1.04]">Schreib uns</h1>
          <ul className="mt-10 space-y-4">
            {site.kontakt.merkmale.map((merkmal) => (
              <li key={merkmal} className="flex items-center gap-4 text-lg text-ink-soft">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-dome-tint text-dome">
                  <Check aria-hidden="true" className="size-4" />
                </span>
                {merkmal}
              </li>
            ))}
          </ul>
          <a
            href="mailto:info@xn--circusakademiemnchen-3ec.de"
            className="mt-10 inline-block break-all font-display text-lg font-semibold text-dome underline-offset-4 hover:underline sm:text-2xl md:text-[1.75rem]"
          >
            info@circusakademiemünchen.de
          </a>
        </div>

        <div className="relative rounded-card border border-line bg-white p-6 sm:p-8">
          {/* useSearchParams braucht eine Suspense-Grenze, sonst bricht der statische Build ab. */}
          <Suspense fallback={<p className="text-ink-muted">Lade Formular...</p>}>
            <KontaktForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
