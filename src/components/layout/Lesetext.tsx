import React from 'react';
import Link from 'next/link';

interface LesetextProps {
  titel: string;
  /** Zeilen direkt unter dem Titel, zum Beispiel Geltungsbereich und Stand. */
  einleitung?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Gemeinsames Lese-Layout für Impressum, AGB und Datenschutz.
 * Die Seiten liefern nur Text und Struktur, das Aussehen kommt aus der Klasse `lesetext`.
 */
export function Lesetext({ titel, einleitung, children }: LesetextProps) {
  return (
    <article className="wrap py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">{titel}</h1>
        {einleitung && <div className="mt-5 space-y-1 text-ink-muted">{einleitung}</div>}
        <div className="lesetext mt-10">{children}</div>
        <div className="mt-12 border-t border-line pt-8">
          <Link href="/" className="font-medium text-dome underline-offset-4 hover:underline">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </article>
  );
}
