import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';

/** Abschluss der Startseite: der eine vollflächig blaue Abschnitt. */
export function AbschlussCta() {
  const { ueberschrift, cta1, cta2 } = site.home.abschlussCta;

  return (
    <section id="abschluss-cta" className="bg-dome py-20 text-white md:py-28">
      <div className="wrap">
        <h2 className="mb-9 text-4xl font-bold sm:text-5xl md:text-[4rem] md:leading-[1.08]">
          {ueberschrift}
        </h2>
        <div className="flex flex-wrap gap-3.5">
          <Button asChild size="lg" variant="white">
            <Link href={cta1.href}>{cta1.text}</Link>
          </Button>
          <Button asChild size="lg" variant="outline-white">
            <Link href={cta2.href}>{cta2.text}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
