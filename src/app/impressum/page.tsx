import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section, SectionHeader } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Impressum | Circus Akademie München e.V.',
  description: 'Impressum und rechtliche Informationen des Circus Akademie München e.V.',
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <div id="main-content">
        <Section id="impressum" background="white">
          <SectionHeader title="Impressum" />

          <div className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-relaxed">
            <p className="text-muted-foreground">
              Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
            </p>

            <div>
              <h2 className="text-xl font-semibold text-primary-900 mb-2">Betreiber</h2>
              <p>Circus Akademie München e.V.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary-900 mb-2">Anschrift</h2>
              <p>
                Ranhazweg 18<br />
                85521 Ottobrunn<br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary-900 mb-2">Kontakt</h2>
              <p>
                Telefon: +49 179 699 0707<br />
                E-Mail: <a href="mailto:info@pepearts.de" className="text-primary-600 hover:underline">info@pepearts.de</a>
              </p>
              <p className="mt-2">
                Kontaktformular: Nachrichten über das Kontaktformular werden an die genannte E-Mail-Adresse weitergeleitet.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary-900 mb-2">Vereinsregister</h2>
              <p>
                Eingetragen im Vereinsregister.<br />
                Registergericht: Amtsgericht München<br />
                Registernummer: VR 208483
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary-900 mb-2">Vertretungsberechtigung</h2>
              <p>
                Der Verein wird durch den Vorstand vertreten; jedes Vorstandsmitglied ist einzelvertretungsberechtigt.<br />
                Vorstand (laut Register): Doro Auer, Mathias Eder, Marius Eichhöfer, Michael Heiduk, Johannes Thumser, Karl Trautmann.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary-900 mb-2">Umsatzsteuer-ID</h2>
              <p>Keine Umsatzsteuer-Identifikationsnummer vorhanden.</p>
            </div>

            <hr className="border-gray-200 my-8" />

            <div>
              <h2 className="text-xl font-semibold text-primary-900 mb-2">
                Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV
              </h2>
              <p>
                Christoph Hermann<br />
                Kiebitzweg 12a<br />
                85464 Finsing<br />
                Deutschland<br />
                E-Mail: <a href="mailto:Chris@pepearts.de" className="text-primary-600 hover:underline">Chris@pepearts.de</a>
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            <div>
              <h2 className="text-xl font-semibold text-primary-900 mb-2">Verbraucherstreitbeilegung</h2>
              <p>
                Der Verein ist nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            <div>
              <h2 className="text-xl font-semibold text-primary-900 mb-2">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht jedoch nicht.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            <div>
              <h2 className="text-xl font-semibold text-primary-900 mb-2">Haftung für Links</h2>
              <p>
                Diese Website enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr.
              </p>
            </div>

            <hr className="border-gray-200 my-8" />

            <div>
              <h2 className="text-xl font-semibold text-primary-900 mb-2">Urheberrecht</h2>
              <p>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Eine Vervielfältigung, Bearbeitung, Verbreitung oder Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung.
              </p>
            </div>

            <div className="pt-8">
              <Link href="/" className="text-primary-600 hover:underline font-medium">
                ← Zurück zur Startseite
              </Link>
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </main>
  );
}
