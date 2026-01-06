import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Pricing3 } from '@/components/pricing3';
import { Faq6 } from '@/components/faq6';
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

        {/* Was deine Spende bewirkt */}
        <section id="spenden-optionen" className="bg-white">
          <Pricing3 />
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white">
          <Faq6 />
        </section>

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
