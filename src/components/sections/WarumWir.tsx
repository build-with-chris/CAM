import React from 'react';
import { Section } from '../ui/Section';
import { site } from '@/content/site';

export const WarumWir: React.FC = () => {
  return (
    <Section id="warum-wir" background="gray">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal text-primary-900 mb-8 text-center">
          Warum wir
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {site.home.warumWir.map((punkt, index) => (
            <li key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg">
              <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-700 leading-relaxed">{punkt}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

