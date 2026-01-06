import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Feature16Foerderung } from '@/components/feature16Foerderung';
import { site } from '@/content/site';
import Link from 'next/link';

export default function FoerderungPage() {
  return (
    <main className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <div id="main-content">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-base-bg pt-24 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-base-text leading-tight tracking-tight mb-6">
              {site.foerderung.hero.headline}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-base-muted leading-relaxed max-w-3xl mx-auto mb-8">
              {site.foerderung.hero.lead}
            </p>
            <Link href={site.foerderung.hero.cta.href}>
              <Button size="lg" variant="primary">
                {site.foerderung.hero.cta.text}
              </Button>
            </Link>
          </div>
        </section>

        {/* Öffentlicher Mehrwert */}
        <Section id="mehrwert" background="gray">
          <SectionHeader
            title="Öffentlicher Mehrwert"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {site.foerderung.mehrwert.map((punkt, index) => (
              <Card key={index} hover className="bg-base-surface border-white/10">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-base-text leading-relaxed">{punkt}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Finanzplan 2026 */}
        <Section id="finanzplan" background="white">
          <SectionHeader
            title={site.foerderung.finanzplan.ueberschrift}
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-base-surface rounded-lg p-6 mb-6 border border-white/10">
              <div className="space-y-4">
                {site.foerderung.finanzplan.items.map((item, index) => (
                  <div key={index} className="flex items-start justify-between pb-4 border-b border-white/10 last:border-0 last:pb-0">
                    <div className="flex-1">
                      <p className="font-medium text-base-text">{item.kategorie}</p>
                      {item.beschreibung && (
                        <p className="text-sm text-base-muted mt-1">{item.beschreibung}</p>
                      )}
                    </div>
                    <p className="text-xl font-bold text-brand-primary ml-4">{item.betrag}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-base-muted italic max-w-2xl mx-auto">
              {site.foerderung.finanzplan.zusatztext}
            </p>
          </div>
        </Section>

        {/* Wofür Förderung eingesetzt wird */}
        <section id="einsatz" className="bg-base-bg">
          <Feature16Foerderung />
        </section>

        {/* Unterlagen */}
        <Section id="unterlagen" background="white">
          <SectionHeader
            title="Unterlagen"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {site.foerderung.unterlagen.map((unterlage, index) => (
                <Card key={index} hover className="cursor-pointer bg-base-surface border-white/10">
                  <Link href={unterlage.link} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <svg className="w-8 h-8 text-brand-primary flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      <span className="text-base-text font-medium">{unterlage.titel}</span>
                    </div>
                    <svg className="w-5 h-5 text-base-muted" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Kontakt */}
        <Section id="kontakt" background="gray">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-normal text-base-text mb-4">
              Kontakt
            </h2>
            <p className="text-base-muted leading-relaxed mb-6">
              {site.foerderung.kontakt.text}
            </p>
            <Link href="/kontakt">
              <Button variant="primary" size="lg">
                Zum Kontaktformular
              </Button>
            </Link>
          </div>
        </Section>
      </div>
      <Footer />
    </main>
  );
}
