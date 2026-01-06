import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { site } from '@/content/site';

export const Finanzziel: React.FC = () => {
  return (
    <Section id="finanzziel" background="gray">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-primary-900 mb-8 sm:mb-12 text-center">
          Finanzziel 2026
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {site.home.finanzziel.karten.map((karte, index) => (
            <Card key={index} className="text-center">
              <h3 className="text-lg font-medium text-primary-900 mb-2">
                {karte.title}
              </h3>
              <p className="text-2xl font-bold text-primary-600 mb-2">
                {karte.betrag}
              </p>
              {karte.beschreibung && (
                <p className="text-sm text-gray-600">
                  {karte.beschreibung}
                </p>
              )}
            </Card>
          ))}
        </div>
        <div className="text-center pt-6 border-t border-gray-300">
          <p className="text-2xl md:text-3xl font-bold text-primary-900">
            Gesamt: {site.home.finanzziel.gesamt}
          </p>
        </div>
      </div>
    </Section>
  );
};

