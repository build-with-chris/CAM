import React from 'react';
import { cn } from '@/lib/utils';

interface SeitenkopfProps {
  /** Seitentitel, wird zur h1. */
  titel: string;
  /** Kurzer Einleitungstext unter dem Titel. */
  einleitung?: string;
  /** Kleine Zeile über dem Titel. */
  kicker?: string;
  /** Zum Beispiel Buttons unter der Einleitung. */
  children?: React.ReactNode;
  className?: string;
}

/** Kopf einer Unterseite: abgesetzte Fläche, großer Titel, optional Einleitung und Buttons. */
export function Seitenkopf({ titel, einleitung, kicker, children, className }: SeitenkopfProps) {
  return (
    <section className={cn('border-b border-line bg-mist', className)}>
      <div className="wrap py-14 md:py-20">
        {kicker && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-dome">
            {kicker}
          </p>
        )}
        <h1 className="max-w-4xl text-4xl font-bold sm:text-5xl md:text-[3.5rem] md:leading-[1.06]">
          {titel}
        </h1>
        {einleitung && (
          <p className="mt-6 max-w-2xl text-lg text-ink-muted md:text-xl">{einleitung}</p>
        )}
        {children && <div className="mt-9 flex flex-wrap gap-3.5">{children}</div>}
      </div>
    </section>
  );
}
