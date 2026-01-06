import React from 'react';
import Image from 'next/image';
import { Section } from '../ui/Section';
import { site } from '@/content/site';

export const Storytelling: React.FC = () => {
  return (
    <section id="storytelling" className="py-12 md:py-16 lg:py-20 bg-base-bg">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Text links */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-base-text">
              {site.home.storytelling.ueberschrift}
            </h2>
            <div className="space-y-4 text-base md:text-lg text-base-muted leading-relaxed">
              {site.home.storytelling.text.split('. ').map((satz, index, array) => {
                const vollstaendigerSatz = index < array.length - 1 ? satz + '.' : satz;
                return (
                  <p key={index}>{vollstaendigerSatz}</p>
                );
              })}
            </div>
          </div>
          
          {/* Bild rechts */}
          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/TheDome.png"
              alt="Geodome München - Pepe Dome am Ostpark"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

