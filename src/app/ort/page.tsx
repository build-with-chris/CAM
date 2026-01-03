import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section, SectionHeader } from '@/components/ui/Section';
import { site } from '@/content/site';
import Image from 'next/image';

export default function OrtPage() {
  return (
    <main className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <div id="main-content">
        <Section id="ort" background="white">
          <SectionHeader
            kicker={site.ort.kicker}
            title={site.ort.headline}
            subtitle={site.ort.text}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div className="space-y-8">
              {/* PepeDome Logo */}
              <div className="relative w-full max-w-xs mx-auto lg:mx-0">
                <div className="relative w-full h-32 lg:h-40">
                  <Image
                    src="/PepeDome Logo ausgeschnitten.png"
                    alt="PepeDome Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 320px, 400px"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-primary-900">Fakten</h3>
                <ul className="space-y-3">
                  {site.ort.fakten.map((fakt, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-3">•</span>
                      <span className="text-gray-700">{fakt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-medium text-primary-900">Trainingszeiten</h3>
                <div className="bg-primary-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">{site.ort.trainingszeiten.beschreibung}</p>
                  <p className="text-lg font-medium text-primary-900">{site.ort.trainingszeiten.profis}</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden border border-gray-200">
              <Image
                src="/TheDome.png"
                alt="Geodom am Ostpark München - Pepe Dome"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </main>
  );
}

