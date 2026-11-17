import { Bild } from '@/components/ui/Bild';
import { site } from '@/content/site';

/** Die fünf Formate als nummerierte Liste: Titel, Stichwort, Beschreibung, kleines Foto. */
export function Formate() {
  return (
    <section id="formate" className="py-16 md:py-26">
      <div className="wrap">
        <h2 className="mb-8 text-3xl font-bold md:mb-10 md:text-5xl">
          {site.home.formateUeberschrift}
        </h2>
        <ol className="border-b border-line">
          {site.home.formate.map((format, index) => (
            <li
              key={format.title}
              className="grid items-center gap-x-10 gap-y-4 border-t border-line py-7 md:grid-cols-[3.5rem_minmax(0,1fr)_13.75rem] lg:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1.8fr)_13.75rem]"
            >
              <p
                aria-hidden="true"
                className="font-display text-[1.375rem] font-semibold text-dome"
              >
                {String(index + 1).padStart(2, '0')}
              </p>
              <div>
                <h3 className="text-3xl font-semibold md:text-[2.125rem]">{format.title}</h3>
                <p className="mt-1.5 text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-ink-muted">
                  {format.label}
                </p>
                <p className="mt-3 text-[1.0625rem] text-ink-soft lg:hidden">
                  {format.description}
                </p>
              </div>
              <p className="hidden text-[1.0625rem] text-ink-soft lg:block">{format.description}</p>
              <Bild
                src={format.image.src}
                width={format.image.width}
                height={format.image.height}
                alt={format.image.alt}
                fokus={'fokus' in format.image ? format.image.fokus : undefined}
                sizes="(min-width: 768px) 220px, 100vw"
                rahmenClassName="aspect-3/2 w-full rounded-media md:aspect-auto md:h-37 md:w-55"
              />
            </li>
          ))}
        </ol>
        <p className="mt-8 text-lg text-ink-soft">
          {site.home.programm.text}{' '}
          <a
            href={site.extern.pepeDome.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-dome underline underline-offset-4 hover:text-dome-dark"
          >
            {site.extern.pepeDome.label}
          </a>
        </p>
      </div>
    </section>
  );
}
