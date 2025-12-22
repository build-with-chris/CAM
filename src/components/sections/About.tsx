import React from 'react';
import Image from 'next/image';
import { Section, SectionHeader } from '../ui/Section';

export const About: React.FC = () => {
  return (
    <Section id="zweck" background="gray">
      <SectionHeader
        kicker="Zweck & Werte"
        title="Wofür wir stehen"
        subtitle="Der Circus Akademie München e.V. setzt sich für die Förderung von Kunst und Kultur ein – mit Fokus auf zeitgenössischen Zirkus."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p className="text-base">
            Wir verstehen Zirkus als Brücke zwischen darstellender und bildender Kunst:
            Körper, Musik, Raum, Bild und Story treffen aufeinander. Unser Ziel ist eine
            verlässliche Struktur, in der Training, Wissenstransfer und öffentliche Formate
            dauerhaft möglich werden.
          </p>
          <p className="text-base">
            Wir arbeiten gemeinschaftlich, sorgfältig und offen für Kooperationen – damit
            künstlerische Entwicklung und kulturelle Teilhabe in München wachsen können.
          </p>

          <div className="pt-12 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Unsere Werte</p>
            <p className="text-base text-gray-700">
              Qualität · Sicherheit · Offenheit · Zusammenarbeit
            </p>
          </div>

          <div className="pt-12 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Transparenz</p>
            <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
              <p>Eingetragener Verein (e.V.)</p>
              <p>Mittel werden für satzungsmäßige Zwecke eingesetzt</p>
              <p>
                Kontakt für Kooperation & Förderung: <a href="#kontakt" className="text-gray-900 hover:text-gray-700 underline">hier anfragen</a>
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-96 lg:h-[600px] rounded overflow-hidden border border-gray-200">
          <Image
            src="https://picsum.photos/seed/circus-about/800/1000"
            alt="Zeitgenössischer Zirkus bei der Circus Akademie München"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </Section>
  );
};
