import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';
import Image from 'next/image';
import Link from 'next/link';
import { AngebotModal } from '@/components/ui/AngebotModal';

export const metadata: Metadata = {
  title: 'Programm | Circus Akademie München e.V.',
  description: 'Unser Programm: Open Stage, Training, Workshops und Produktionen. Zeitgenössischer Zirkus in München – entdecken Sie unsere Formate.',
};

export default function ProgrammPage() {
  return (
    <main className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <div id="main-content">
        <Section id="programm" background="white">
          <SectionHeader
            kicker="Unser Programm"
            title="Was wir machen"
            subtitle="So verwirklichen wir den Vereinszweck"
          />

          <div className="mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed space-y-4">
            <p>
              Der Circus Akademie München e.V. verwirklicht seinen Zweck durch verschiedene Aktivitäten und Formate:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {site.angebote.map((angebot) => (
              <Card key={angebot.id} className="flex flex-col h-full">
                <AngebotModal angebot={angebot}>
                  <div className="cursor-pointer">
                    <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={angebot.image}
                        alt={angebot.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <h3 className="text-2xl font-normal text-primary-900 mb-3">
                      {angebot.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {angebot.teaser}
                    </p>
                  </div>
                </AngebotModal>
                {angebot.cta && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-gray-700 font-medium mb-3">
                      {angebot.cta}
                    </p>
                    <Link href={angebot.ctaLink || '/kontakt'}>
                      <Button variant="primary" className="w-full">
                        Kontakt aufnehmen
                      </Button>
                    </Link>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </Section>
      </div>
      <Footer />
    </main>
  );
}

