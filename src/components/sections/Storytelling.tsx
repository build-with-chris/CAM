import Image from 'next/image';
import { site } from '@/content/site';

export function Storytelling() {
  // Jeder Satz bekommt einen eigenen Absatz, der Text selbst bleibt wörtlich.
  const saetze = site.home.storytelling.text
    .split('. ')
    .map((satz, index, alle) => (index < alle.length - 1 ? `${satz}.` : satz));

  return (
    <section id="storytelling" className="py-16 md:py-26">
      <div className="wrap grid items-center gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,1fr)_27.5rem]">
        <div>
          <h2 className="mb-7 text-3xl font-bold md:text-5xl">
            {site.home.storytelling.ueberschrift}
          </h2>
          <div className="space-y-4 text-lg text-ink-soft">
            {saetze.map((satz) => (
              <p key={satz}>{satz}</p>
            ))}
          </div>
        </div>

        {/* Die Datei hat rundum viel leeren Rand. Der Rahmen zeigt nur die Plattform mit der Kuppel. */}
        <div className="relative mx-auto aspect-square w-full max-w-110 overflow-hidden">
          <Image
            src="/images/the-dome.webp"
            alt="Der Pepe Dome von oben: eine blau-weiße Kuppel auf einer runden, grauen Plattform"
            width={1697}
            height={2400}
            sizes="(min-width: 1024px) 660px, 150vw"
            className="absolute -left-1/4 top-[-48.6%] h-auto w-[150%] max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
