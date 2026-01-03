import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Unterstützen | Circus Akademie München e.V.',
  description: 'Unterstützen Sie zeitgenössischen Zirkus in München. Spenden, Sponsoring oder Mitgliedschaft – finden Sie die passende Form der Unterstützung.',
};

export default function UnterstuetzenPage() {
  return (
    <main className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <div id="main-content">
        <Section id="unterstuetzen" background="white">
          <SectionHeader
            kicker="Unterstützen"
            title="So können Sie helfen"
            subtitle="Ihre Unterstützung ermöglicht zeitgenössischen Zirkus in München. Wir schaffen Räume für künstlerische Entwicklung und bereichern die Münchner Kulturlandschaft."
          />

          {/* Wertversprechen */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="bg-primary-50 rounded-lg p-8 text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                {site.mitmachen[1]?.details?.wertversprechen || 'Ihre Unterstützung ermöglicht zeitgenössischen Zirkus in München.'}
              </p>
            </div>
          </div>

          {/* 3 Zielgruppen */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {/* Privatspender */}
            <Card hover className="flex flex-col">
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-normal text-primary-900">
                  Privatspender:innen
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Jede Spende hilft uns, Trainingsräume zu sichern, Workshops zu organisieren und künstlerische Projekte zu fördern. Als gemeinnütziger Verein können wir Spendenquittungen ausstellen.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">✓</span>
                    <span>Steuerlich absetzbar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">✓</span>
                    <span>Direkte Förderung der Kultur</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">✓</span>
                    <span>Transparente Mittelverwendung</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link href="/unterstuetzen/spenden">
                  <Button variant="primary" className="w-full">
                    Jetzt spenden
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Unternehmen */}
            <Card hover className="flex flex-col">
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-normal text-primary-900">
                  Unternehmen
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Als Sponsor unterstützen Sie zeitgenössischen Zirkus und erhalten gleichzeitig wertvolle Sichtbarkeit für Ihr Unternehmen. CSR-Engagement mit nachhaltiger Wirkung.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">✓</span>
                    <span>Sichtbarkeit bei Veranstaltungen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">✓</span>
                    <span>CSR-Engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">✓</span>
                    <span>Networking mit Kulturszene</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link href="/unterstuetzen/sponsoring">
                  <Button variant="primary" className="w-full">
                    Sponsor werden
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Politik/Kommune */}
            <Card hover className="flex flex-col">
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-normal text-primary-900">
                  Politik & Kommune
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Förderung von Kultur und kultureller Teilhabe. Wir arbeiten an nachhaltigen Strukturen für zeitgenössischen Zirkus in München.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">✓</span>
                    <span>Kulturelle Teilhabe fördern</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">✓</span>
                    <span>Nachhaltige Strukturen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">✓</span>
                    <span>Gemeinnützige Zwecke</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link href="/foerderung">
                  <Button variant="primary" className="w-full">
                    Mehr erfahren
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </Section>
      </div>
      <Footer />
    </main>
  );
}

