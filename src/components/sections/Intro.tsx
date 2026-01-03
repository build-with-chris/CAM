import React from 'react';
import Image from 'next/image';
import { Section } from '../ui/Section';
import { site } from '@/content/site';

export const Intro: React.FC = () => {
  return (
    <Section id="intro" background="gray">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative w-full order-2 lg:order-1">
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
            <Image
              src="/Ella-no-bg.png"
              alt="Circus Akademie München"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6 order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-normal text-primary-900">
            {site.verein.intro.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {site.verein.intro.text}
          </p>
          <ul className="space-y-3 text-gray-600 leading-relaxed">
            {site.verein.intro.teaser.map((punkt, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-600 mr-3 mt-1">•</span>
                <span>{punkt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

