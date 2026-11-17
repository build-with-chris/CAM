import { ArrowRight, Building2, Heart, Landmark, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { site } from '@/content/site';

const ICONS: LucideIcon[] = [Heart, Building2, Landmark];

/** Drei Wege, den Verein zu tragen: als Privatperson, als Unternehmen, als Kommune. */
export function Wege() {
  return (
    <section id="finanzierung" className="bg-mist py-16 md:py-24">
      <div className="wrap">
        <h2 className="mb-8 text-3xl font-bold md:mb-10 md:text-[2.75rem]">
          {site.home.zielgruppenUeberschrift}
        </h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {site.home.zielgruppen.map((zielgruppe, index) => {
            const Icon = ICONS[index] ?? Heart;
            return (
              <li key={zielgruppe.link}>
                <Link
                  href={zielgruppe.link}
                  className="group flex h-full flex-col rounded-card border border-line bg-white p-7 transition-colors hover:border-dome sm:p-8"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-dome-tint text-dome">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <h3 className="mb-2.5 mt-7 text-2xl font-semibold">{zielgruppe.title}</h3>
                  <p className="mb-6 text-ink-muted">{zielgruppe.text}</p>
                  <ArrowRight
                    aria-hidden="true"
                    className="mt-auto size-6 text-dome transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
