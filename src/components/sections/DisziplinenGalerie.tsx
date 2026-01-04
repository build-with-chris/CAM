'use client';

import React from 'react';
import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/Section';
import { site } from '@/content/site';

export const DisziplinenGalerie: React.FC = () => {
  return (
    <Section id="disziplinen" background="gray">
      <SectionHeader
        title="Die Vielfalt des zeitgenössischen Zirkus"
        subtitle="Unsere Artisten und ihre Disziplinen"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {site.disziplinen.map((disziplin, index) => (
          <div
            key={index}
            className="group relative aspect-square rounded-lg overflow-hidden surface-card cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={disziplin.image}
              alt={disziplin.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-medium text-base-text">{disziplin.name}</p>
                <p className="text-xs text-base-muted mt-1">{disziplin.kategorie}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-base-muted max-w-2xl mx-auto">
          Von Artistik über Performance bis Tanz – zeitgenössischer Zirkus verbindet Disziplinen und schafft neue künstlerische Ausdrucksformen.
        </p>
      </div>
    </Section>
  );
};

