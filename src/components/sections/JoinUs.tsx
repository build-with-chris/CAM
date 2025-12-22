import React from 'react';
import { Section, SectionHeader } from '../ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';

export const JoinUs: React.FC = () => {
  const ways = [
    {
      title: 'Mitglied werden',
      description: 'Werde Teil des Vereins und gestalte Struktur, Angebote und Formate mit.',
      cta: 'Mitgliedschaft anfragen',
      subject: 'Mitgliedschaft',
    },
    {
      title: 'Unterstützen',
      description: 'Du willst fördern, spenden oder Ressourcen teilen? Jede Unterstützung stärkt Kultur vor Ort.',
      cta: 'Unterstützung anbieten',
      subject: 'Unterstützen',
    },
    {
      title: 'Kooperation',
      description: 'Kultur, Bildung, Soziales, Stadtteil: Wir freuen uns über Partnerschaften auf Augenhöhe.',
      cta: 'Kooperation starten',
      subject: 'Kooperation',
    },
  ];

  return (
    <Section id="mitmachen" background="gray">
      <SectionHeader
        kicker="Mitmachen"
        title="Werde Teil der Akademie"
        subtitle="Verschiedene Wege, die Circus Akademie München zu unterstützen und mitzugestalten."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {ways.map((way, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-lg">{way.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-grow">{way.description}</p>
              <a href={`#kontakt?subject=${encodeURIComponent(way.subject)}`}>
                <Button variant="outline" size="sm" className="w-full">
                  {way.cta}
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
