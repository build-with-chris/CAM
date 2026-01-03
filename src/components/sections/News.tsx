'use client';

import React, { useState } from 'react';
import { Section, SectionHeader } from '../ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { site } from '@/content/site';
import { formatDate } from '@/lib/formatDate';

export const News: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const sortedNews = [...site.aktuelles].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const displayedNews = showAll ? sortedNews : sortedNews.slice(0, 3);

  return (
    <Section id="aktuelles" background="white">
      <SectionHeader
        kicker="Aktuelles"
        title="Termine & News"
        subtitle="Bleib auf dem Laufenden über kommende Formate und Neuigkeiten."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {displayedNews.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <time className="text-xs text-gray-400" dateTime={item.date}>
                  {formatDate(item.date)}
                </time>
              </div>
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {sortedNews.length > 3 && (
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="md"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Weniger anzeigen' : 'Alle Termine anzeigen'}
          </Button>
        </div>
      )}
    </Section>
  );
};
