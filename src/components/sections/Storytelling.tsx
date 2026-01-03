import React from 'react';
import { Section } from '../ui/Section';
import { site } from '@/content/site';

export const Storytelling: React.FC = () => {
  return (
    <Section id="storytelling" background="white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-normal text-primary-900 mb-6">
          {site.home.storytelling.ueberschrift}
        </h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          {site.home.storytelling.text.split('. ').map((satz, index, array) => {
            const vollstaendigerSatz = index < array.length - 1 ? satz + '.' : satz;
            return (
              <p key={index}>{vollstaendigerSatz}</p>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

