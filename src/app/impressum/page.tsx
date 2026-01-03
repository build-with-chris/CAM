import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section, SectionHeader } from '@/components/ui/Section';
import { site } from '@/content/site';

export default function ImpressumPage() {
  return (
    <main className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <div id="main-content">
        <Section id="impressum" background="white">
          <SectionHeader
            title={site.impressum.title}
          />

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Organisation und Gremien */}
            <div className="space-y-6">
              <h3 className="text-2xl font-normal text-primary-900">Organisation und Gremien</h3>
              
              <div>
                <h4 className="text-lg font-medium text-primary-900 mb-3">Organe</h4>
                <p className="text-gray-600 leading-relaxed">
                  {site.impressum.organisation.organe}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-primary-900 mb-3">Vorstand</h4>
                <ul className="space-y-2 text-gray-600 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>{site.impressum.organisation.vorstand.struktur}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>{site.impressum.organisation.vorstand.wahl}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>{site.impressum.organisation.vorstand.vertretung}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>{site.impressum.organisation.vorstand.geschaeftsordnung}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-primary-900 mb-3">Mitgliederversammlung</h4>
                <ul className="space-y-2 text-gray-600 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>{site.impressum.organisation.mitgliederversammlung.haeufigkeit}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>{site.impressum.organisation.mitgliederversammlung.ausserordentlich}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>{site.impressum.organisation.mitgliederversammlung.beschlussfaehigkeit}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>{site.impressum.organisation.mitgliederversammlung.mehrheiten}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-primary-900 mb-3">Kassenprüfung</h4>
                <p className="text-gray-600 leading-relaxed">
                  {site.impressum.organisation.kassenpruefung}
                </p>
              </div>
            </div>

            {/* Transparenz und Finanzen */}
            <div className="pt-8 border-t border-gray-200 space-y-6">
              <h3 className="text-2xl font-normal text-primary-900">Transparenz und Finanzen</h3>
              
              <div>
                <h4 className="text-lg font-medium text-primary-900 mb-3">Vereinsämter & Vergütung</h4>
                <ul className="space-y-2 text-gray-600 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>{site.impressum.organisation.transparenz.aemter}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>{site.impressum.organisation.transparenz.auftraege}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>{site.impressum.organisation.transparenz.aufwendungsersatz}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>{site.impressum.organisation.transparenz.finanzordnung}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-primary-900 mb-3">Vermögensbindung</h4>
                <p className="text-gray-600 leading-relaxed">
                  {site.impressum.organisation.vermoegensbindung}
                </p>
              </div>
            </div>

            {/* Download Satzung */}
            <div className="pt-8 border-t border-gray-200">
              <h4 className="text-lg font-medium text-primary-900 mb-4">Download</h4>
              <a
                href={site.satzung.download}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                {site.satzung.text}
              </a>
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </main>
  );
}

