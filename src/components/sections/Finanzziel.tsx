import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { site } from '@/content/site';

export const Finanzziel: React.FC = () => {
  const finanzziel = site.home.finanzziel;

  return (
    <Section id="finanzziel" background="gray">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-primary-900 mb-8 sm:mb-12 text-center">
          {finanzziel.ueberschrift ?? "Finanzziel"}
        </h2>

        <div className="space-y-6">
          {finanzziel.gruppen?.map((gruppe: any, idx: number) => {
            const gridClass =
              gruppe.karten.length === 4
                ? "lg:grid-cols-2"
                : "lg:grid-cols-3";

            return (
              <div
                key={idx}
                className="bg-base-surface rounded-lg p-6 border border-white/10"
              >
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
                  <h3 className="text-xl font-semibold text-primary-900">
                    {gruppe.titel}
                  </h3>
                  <p className="text-sm text-base-muted font-medium">
                    {gruppe.summe}
                  </p>
                </div>

                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${gridClass}`}>
                  {gruppe.karten.map((karte: any, cardIdx: number) => (
                    <Card
                      key={cardIdx}
                      className="text-left py-4 gap-4"
                    >
                      <h4 className="text-lg font-medium text-primary-900">
                        {karte.title}
                      </h4>
                      {karte.beschreibung ? (
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {karte.beschreibung}
                        </p>
                      ) : null}
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-6 border-t border-gray-300 mt-6">
          <p className="text-2xl md:text-3xl font-bold text-primary-900">
            Gesamtrahmen: {finanzziel.gesamt}
          </p>
        </div>
      </div>
    </Section>
  );
};

