import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section, SectionHeader } from '@/components/ui/Section';
import { site } from '@/content/site';

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <div id="main-content">
        <Section id="datenschutz" background="white">
          <SectionHeader
            title={site.datenschutz.title}
          />

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-normal text-primary-900">Datenschutz</h3>
              
              <div>
                <h4 className="text-lg font-medium text-primary-900 mb-3">Mitgliedsdaten</h4>
                <ul className="space-y-3 text-gray-600 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>{site.datenschutz.mitgliedsdaten.erhebung}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>{site.datenschutz.mitgliedsdaten.verarbeitung}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>{site.datenschutz.mitgliedsdaten.weitergabe}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span>{site.datenschutz.mitgliedsdaten.veroeffentlichung}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </main>
  );
}

