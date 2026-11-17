import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/content/site';

const RECHTLICHES = [
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Impressum', href: '/impressum' },
  { label: 'AGB', href: '/agb' },
  { label: 'Datenschutz', href: '/datenschutz' },
];

export function Footer() {
  return (
    <footer className="bg-night text-white">
      <div className="wrap pb-10 pt-16 md:pt-18">
        <div className="grid gap-x-16 gap-y-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/images/logos/cam-logo.png"
                alt="Logo der Circus Akademie München"
                width={273}
                height={273}
                className="size-11 invert"
              />
              <p className="font-display text-xl font-semibold">{site.verein.name}</p>
            </div>
            <p className="max-w-sm text-night-muted">{site.verein.kurzbeschreibung}</p>
          </div>

          <nav aria-label="Fußnavigation">
            <h2 className="mb-4 text-[1.0625rem] font-semibold">Navigation</h2>
            <ul className="space-y-1.5 text-night-muted">
              {site.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-[1.0625rem] font-semibold">Kontakt</h2>
            <address className="not-italic text-night-muted">
              <p>Pepe Dome/Geodom</p>
              <p>Ostpark München</p>
              <p className="mt-4">
                <a
                  href="mailto:info@xn--circusakademiemnchen-3ec.de"
                  className="break-all text-white underline-offset-4 hover:underline"
                >
                  info@circusakademiemünchen.de
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14">
          <p className="mb-3.5 text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-night-muted">
            Unterstützt von
          </p>
          {/* Die Förderlogos stehen auf Weiß, so wie die Geldgeber sie vorgeben. */}
          <div className="max-w-2xl rounded-media bg-white px-4 py-3 sm:px-6 sm:py-4">
            <Image
              src="/images/logos/foerderlogos.jpg"
              alt="Förderlogos: Städtebauförderung von Bund, Ländern und Gemeinden, Bundesministerium für Wohnen, Stadtentwicklung und Bauwesen, Bayerisches Staatsministerium für Wohnen, Bau und Verkehr, Landeshauptstadt München. Dieses Projekt wird durch Städtebauförderung in einem Bund-Länder-Programm mit Mitteln des Bundes und des Freistaats Bayern gefördert sowie von der Landeshauptstadt München kofinanziert."
              width={1600}
              height={221}
              sizes="(min-width: 768px) 624px, 90vw"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="mt-12 border-t border-night-line pt-6 text-sm text-night-muted">
          <p className="mb-3">{site.footer.trustLine}</p>
          <div className="flex flex-col justify-between gap-3 sm:flex-row">
            <p>
              &copy; {new Date().getFullYear()} {site.verein.name} Alle Rechte vorbehalten.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {RECHTLICHES.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
