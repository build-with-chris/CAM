import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Seite nicht gefunden | Circus Akademie München e.V.',
};

export default function NotFound() {
  return (
    <section className="wrap py-20 md:py-32">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-dome">Fehler 404</p>
      <h1 className="text-4xl font-bold md:text-[3.5rem]">Diese Seite gibt es nicht.</h1>
      <p className="mt-6 max-w-xl text-lg text-ink-muted">
        Die Adresse ist falsch oder die Seite wurde entfernt.
      </p>
      <div className="mt-9 flex flex-wrap gap-3.5">
        <Button asChild size="lg">
          <Link href="/">Zur Startseite</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/kontakt">Kontakt</Link>
        </Button>
      </div>
    </section>
  );
}
