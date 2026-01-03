import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section, SectionHeader } from '@/components/ui/Section';
import { site } from '@/content/site';
import Image from 'next/image';

export default function ZweckPage() {
  return (
    <main className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <div id="main-content">
        <Section id="zweck" background="gray">
          <SectionHeader
            kicker={site.zweck.kicker}
            title="Wofür wir stehen"
            subtitle={site.zweck.text}
          />

          <div className="space-y-12">
            {/* Über den Verein */}
            <div className="space-y-6">
              <h3 className="text-2xl font-normal text-primary-900">Über den Verein</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Name</p>
                  <p className="font-medium">{site.verein.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Sitz</p>
                  <p className="font-medium">{site.verein.details.sitz}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Geschäftsjahr</p>
                  <p className="font-medium">{site.verein.details.geschaeftsjahr}</p>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-lg font-medium text-primary-900 mb-3">Selbstverständnis</h4>
                <p className="text-gray-600 leading-relaxed">
                  {site.verein.details.selbstverstaendnis}
                </p>
              </div>
            </div>

            {/* Zweck und Gemeinnützigkeit */}
            <div className="space-y-6 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-normal text-primary-900">Zweck und Gemeinnützigkeit</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-primary-900 mb-3">Gemeinnützige Zwecke</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {site.verein.details.gemeinnuetzigkeit.zweck}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primary-900 mb-3">Selbstlosigkeit und Mittelverwendung</h4>
                  <ul className="space-y-2 text-gray-600 leading-relaxed">
                    {site.verein.details.gemeinnuetzigkeit.selbstlosigkeit.map((punkt, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary-600 mr-3 mt-1">•</span>
                        <span>{punkt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Werte */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Unsere Werte</p>
              <div className="flex flex-wrap gap-3">
                {site.zweck.werte.map((wert) => (
                  <span
                    key={wert}
                    className="inline-block px-4 py-2 bg-primary-50 text-primary-900 rounded-full text-sm font-medium"
                  >
                    {wert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </main>
  );
}

