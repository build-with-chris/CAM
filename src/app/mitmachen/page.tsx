import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';
import Link from 'next/link';

export default function MitmachenPage() {
  return (
    <main className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <div id="main-content">
        <Section id="mitmachen" background="white">
          <SectionHeader
            kicker="Mitmachen"
            title="Werde Teil unserer Community"
            subtitle="Es gibt verschiedene Wege, die Circus Akademie München zu unterstützen und Teil unserer Community zu werden."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {site.mitmachen.map((item) => (
              <Card key={item.id} hover className="flex flex-col">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-normal text-primary-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link href={`/kontakt?subject=${encodeURIComponent(item.subject)}`}>
                    <Button variant="primary" className="w-full">
                      {item.cta}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Details zu Mitglied werden */}
          {site.mitmachen[0]?.details && (
            <div className="max-w-4xl mx-auto space-y-8 pt-12 border-t border-gray-200">
              <h3 className="text-2xl font-normal text-primary-900">Mitglied werden – Details</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-primary-900 mb-3">Wer kann Mitglied werden?</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {site.mitmachen[0].details.wer}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-primary-900 mb-3">Mitgliedsarten</h4>
                  <ul className="space-y-2 text-gray-600 leading-relaxed">
                    {site.mitmachen[0].details.arten.map((art, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary-600 mr-3 mt-1">•</span>
                        <span>{art}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-primary-900 mb-3">Mitgliedsbeiträge</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {site.mitmachen[0].details.beitrag}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-primary-900 mb-3">Mitgliedschaft beenden</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {site.mitmachen[0].details.austritt}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Spenden & Sponsoring Details */}
          {site.mitmachen[1]?.details && (
            <div id="unterstuetzen" className="max-w-6xl mx-auto space-y-12 pt-16 border-t border-gray-200 scroll-mt-24">
              {/* Wertversprechen */}
              <div className="bg-primary-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-normal text-primary-900 mb-4">
                  Warum unterstützen?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  {site.mitmachen[1].details.wertversprechen}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Spenden */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-normal text-primary-900 mb-3">
                      {site.mitmachen[1].details.spenden.titel}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {site.mitmachen[1].details.spenden.text}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-primary-900 mb-4">Ihre Vorteile</h4>
                    <ul className="space-y-2 text-gray-600">
                      {site.mitmachen[1].details.spenden.vorteile.map((vorteil, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>{vorteil}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-primary-900 mb-4">Spendenbeträge</h4>
                    <div className="space-y-3">
                      {site.mitmachen[1].details.spenden.betraege.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
                          <div>
                            <p className="font-semibold text-primary-900">{item.betrag}</p>
                            <p className="text-sm text-gray-600">{item.beschreibung}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={`/kontakt?subject=${encodeURIComponent('Spende')}`}>
                    <Button variant="primary" size="lg" className="w-full">
                      Jetzt spenden
                    </Button>
                  </Link>
                </div>

                {/* Sponsoring */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-normal text-primary-900 mb-3">
                      {site.mitmachen[1].details.sponsoring.titel}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {site.mitmachen[1].details.sponsoring.text}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-primary-900 mb-4">Ihre Vorteile</h4>
                    <ul className="space-y-2 text-gray-600">
                      {site.mitmachen[1].details.sponsoring.vorteile.map((vorteil, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>{vorteil}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-primary-900 mb-4">Sponsoring-Pakete</h4>
                    <div className="space-y-4">
                      {site.mitmachen[1].details.sponsoring.pakete.map((paket, index) => (
                        <Card key={index} className="border-2">
                          <div className="space-y-3">
                            <div className="flex items-start justify-between">
                              <h5 className="text-lg font-semibold text-primary-900">{paket.name}</h5>
                              <span className="text-primary-600 font-medium">{paket.betrag}</span>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-600">
                              {paket.inhalt.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="text-primary-600 mr-2 mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Link href={`/kontakt?subject=${encodeURIComponent('Sponsoring')}`}>
                    <Button variant="primary" size="lg" className="w-full">
                      Sponsor werden
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Section>
      </div>
      <Footer />
    </main>
  );
}

