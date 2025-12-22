import React from 'react';
import Image from 'next/image';
import { Section, SectionHeader } from '../ui/Section';

export const Location: React.FC = () => {
  return (
    <Section id="ort" background="gray">
      <SectionHeader
        kicker="Ort"
        title="Pepe Dome"
        subtitle="Geodom am Ostpark – unsere feste Basis seit 2025."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        <div className="relative h-80 lg:h-96 rounded overflow-hidden border border-gray-200">
          <Image
            src="https://picsum.photos/seed/circus-dome/1000/800"
            alt="Der Pepe Dome im Ostpark München"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-base text-gray-600 leading-relaxed">
              Seit 2025 haben wir mit dem Pepe Dome eine feste Basis in München. Hier können
              Trainings, Proben, Workshops und kleine Formate verlässlicher stattfinden.
              Der Raum ist unser Anker – und gleichzeitig ein Startpunkt für Kooperationen
              in der Stadt.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <div>
                <p className="text-sm text-gray-600">München – Ostpark</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <div>
                <p className="text-sm text-gray-600">Nutzung für Training/Proben/Workshops</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <div>
                <p className="text-sm text-gray-600">Platz für Community & Austausch</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <p className="text-sm text-gray-600">Formate nach Absprache</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              <div>
                <p className="text-sm text-gray-600">Kooperationen willkommen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
