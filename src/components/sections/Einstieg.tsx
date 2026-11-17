import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';

/**
 * Einstieg der Startseite: dunkle Bühne, das Foto füllt die rechte Seite bis zum Rand.
 * Links ist das Foto ohnehin schwarz, deshalb geht es nahtlos in die Fläche über.
 */
export function Einstieg() {
  const { cta1, cta2 } = site.home.abschlussCta;

  return (
    <section className="bg-stage text-white">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div className="flex flex-col justify-center px-5 py-14 sm:px-8 lg:py-24 lg:pr-12 lg:pl-[max(2rem,calc((100vw-75rem)/2))]">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-white/80">
            {site.verein.name}
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-[3.125rem] lg:leading-[1.06]">
            {site.home.einstieg.headline}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-normal text-white/85 sm:text-[1.1875rem]">
            {site.verein.kurzbeschreibung}
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <Button asChild size="lg">
              <Link href={cta1.href}>{cta1.text}</Link>
            </Button>
            <Button asChild size="lg" variant="outline-white">
              <Link href={cta2.href}>{cta2.text}</Link>
            </Button>
          </div>
        </div>

        <div className="relative min-h-80 sm:min-h-112 lg:min-h-180">
          <Image
            src="/images/disziplinen/cyr-wheel.webp"
            alt="Ein Artist schwebt waagerecht in einem Cyr Wheel, um ihn herum zieht Bühnennebel"
            width={1620}
            height={1080}
            preload
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="absolute inset-0 h-full w-full object-cover object-[30%_50%] xl:object-[15%_50%]"
          />
          {/* Übergang von der Fläche ins Foto: am Handy von oben, ab lg von links */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1/5 bg-linear-to-b from-stage to-transparent lg:inset-y-0 lg:left-0 lg:right-auto lg:h-auto lg:w-1/5 lg:bg-linear-to-r"
          />
        </div>
      </div>
    </section>
  );
}
