import { Bild } from '@/components/ui/Bild';
import { domeBilder } from '@/content/domeBilder';
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
          <p className="mb-5 text-xl font-semibold text-ink">{site.verein.rolle}</p>
          <div className="space-y-4 text-lg text-ink-soft">
            {saetze.map((satz) => (
              <p key={satz}>{satz}</p>
            ))}
          </div>
        </div>

        <Bild
          {...domeBilder.kuppelNacht}
          sizes="(min-width: 1024px) 440px, 100vw"
          rahmenClassName="aspect-4/3 w-full rounded-card"
        />
      </div>
    </section>
  );
}
