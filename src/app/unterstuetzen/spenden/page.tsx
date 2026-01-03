import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { site } from '@/content/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Spenden | Circus Akademie München e.V.',
  description: 'Spenden Sie für zeitgenössischen Zirkus in München. Steuerlich absetzbar, transparente Mittelverwendung. Jede Spende hilft.',
};

export default function SpendenPage() {
  return (
    <main className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <div id="main-content">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-white pt-24 pb-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-primary-900 leading-tight tracking-tight mb-6">
              {site.spenden.hero.headline}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              {site.spenden.hero.lead}
            </p>
            <Link href={site.spenden.hero.cta.href}>
              <Button size="lg" variant="primary">
                {site.spenden.hero.cta.text}
              </Button>
            </Link>
          </div>
        </section>

        {/* Wofür wir Unterstützung brauchen */}
        <Section id="unterstuetzung" background="gray">
          <SectionHeader
            title={site.spenden.unterstuetzung.titel}
          />
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-6 space-y-3">
              {site.spenden.unterstuetzung.items.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-primary-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Was deine Spende bewirkt */}
        <Section id="spenden-optionen" background="white">
          <SectionHeader
            title="Was deine Spende bewirkt"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {site.spenden.donationTiers.map((tier, index) => (
              <Card key={index} hover className="flex flex-col">
                <div className="flex-1">
                  <p className="text-3xl font-bold text-primary-900 mb-3">
                    {tier.betrag}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {tier.wirkung}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 italic max-w-2xl mx-auto">
            {site.spenden.hinweis}
          </p>
        </Section>

        {/* Gemeinnützigkeit & Spendenquittung */}
        <Section id="trust" background="gray">
          <div className="max-w-3xl mx-auto">
            <Card>
              <div className="text-center">
                <h3 className="text-2xl font-normal text-primary-900 mb-4">
                  Gemeinnützigkeit & Spendenquittung
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {site.spenden.trust.text}
                </p>
              </div>
            </Card>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" background="white">
          <SectionHeader
            title="Häufige Fragen"
          />
          <div className="max-w-3xl mx-auto">
            <Card>
              <Accordion items={site.spenden.faq} />
            </Card>
          </div>
        </Section>

        {/* Abschluss-CTA */}
        <section id="abschluss" className="py-20 md:py-32 lg:py-40 bg-primary-900">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-normal text-white mb-8">
                {site.spenden.abschluss.ueberschrift}
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={site.spenden.abschluss.cta1.href}>
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full sm:w-auto bg-white text-primary-900 hover:bg-gray-100"
                  >
                    {site.spenden.abschluss.cta1.text}
                  </Button>
                </Link>
                <Link href={site.spenden.abschluss.cta2.href}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary-900"
                  >
                    {site.spenden.abschluss.cta2.text}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
