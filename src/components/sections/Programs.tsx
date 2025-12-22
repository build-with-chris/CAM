'use client';

import React, { useState } from 'react';
import { Section, SectionHeader } from '../ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Modal } from '../ui/Modal';

export const Programs: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);
  const programs = [
    {
      title: 'Open Stage',
      teaser: 'Ein Raum zum Experimentieren: interdisziplinär, niedrigschwellig, publikumsnah.',
      description: 'Unsere Open Stages schaffen Sichtbarkeit und Austausch. Artistik trifft Musik, Performance trifft Bild, Recherche trifft Publikum. Wer Neues ausprobiert, braucht einen Rahmen – wir bauen ihn gemeinsam.',
      bullets: ['Testen & Feedback', 'Vernetzung', 'Dokumentation/Material nach Möglichkeit'],
      icon: '🎭',
    },
    {
      title: 'Training',
      teaser: 'Regelmäßige Trainings- und Probenmöglichkeiten als Basis für Kontinuität.',
      description: 'Kontinuität ist im Zirkus alles. Wir arbeiten daran, Trainingsfenster, Probenzeiten und Austausch so zu organisieren, dass Entwicklung planbarer wird – für unterschiedliche Level und Disziplinen.',
      bullets: ['Struktur & Routine', 'Sicherer Rahmen', 'Community-Training'],
      icon: '🤸',
    },
    {
      title: 'Workshops',
      teaser: 'Weiterbildung mit Gästen und lokalen Expert*innen – von Technik bis Kreation.',
      description: 'Workshops bringen neue Impulse nach München. Von Grundlagen bis Spezialthemen: Technik, Körperarbeit, Kreation, Bühnenpraxis. Inhalte und Formate entwickeln wir bedarfsorientiert.',
      bullets: ['Skill-Boost', 'Input von außen', 'Gemeinsames Lernen'],
      icon: '📚',
    },
    {
      title: 'Produktionen',
      teaser: 'Ressourcen, Austausch und Sichtbarkeit für performative Projekte.',
      description: 'Wir unterstützen Projekte ideell und organisatorisch – durch Raum, Netzwerk, Sparring und Öffentlichkeit, wenn es passt. Ziel: mehr zeitgenössischer Zirkus auf Münchner Bühnen und in neuen Räumen.',
      bullets: ['Netzwerk & Kooperation', 'Strukturhilfe', 'Bühnenmomente'],
      icon: '✨',
    },
  ];

  return (
    <Section id="angebote" background="white">
      <SectionHeader
        kicker="Angebote"
        title="Unsere Formate"
        subtitle="Training, Austausch und Bühne für zeitgenössischen Zirkus in München."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {programs.map((program, index) => (
          <Card key={index} hover>
            <CardHeader>
              <CardTitle className="text-2xl">{program.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-6">{program.teaser}</p>
              <button
                onClick={() => setSelectedProgram(index)}
                className="text-sm text-primary-900 hover:text-primary-700 transition-colors inline-flex items-center focus:outline-none focus:ring-2 focus:ring-primary-700 focus:ring-offset-2 rounded px-2 py-1 -ml-2"
              >
                Details anzeigen
                <svg className="w-4 h-4 ml-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedProgram !== null && (
        <Modal
          isOpen={selectedProgram !== null}
          onClose={() => setSelectedProgram(null)}
          title={programs[selectedProgram].title}
        >
          <div className="space-y-6">
            <p className="text-base text-gray-600 leading-relaxed">
              {programs[selectedProgram].teaser}
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              {programs[selectedProgram].description}
            </p>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-4">
                Im Detail
              </h3>
              <ul className="space-y-3">
                {programs[selectedProgram].bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-4 h-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm text-gray-600">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>
      )}
    </Section>
  );
};
