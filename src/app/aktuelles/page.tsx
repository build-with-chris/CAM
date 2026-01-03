import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { site } from '@/content/site';
import { formatDate } from '@/lib/formatDate';

export default function AktuellesPage() {
  const sortedNews = [...site.aktuelles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <div id="main-content">
        <Section id="aktuelles" background="gray">
          <SectionHeader
            kicker="Aktuelles"
            title="News & Termine"
            subtitle="Aktuelle Veranstaltungen, Workshops und Termine der Circus Akademie München."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedNews.map((item, index) => (
              <Card key={index} hover>
                <div className="space-y-4">
                  <div className="text-sm text-gray-500 font-medium">
                    {formatDate(item.date)}
                  </div>
                  <h3 className="text-xl font-normal text-primary-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </div>
      <Footer />
    </main>
  );
}

