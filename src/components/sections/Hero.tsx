import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24 pb-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 md:space-y-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-normal text-primary-900 leading-tight tracking-tight">
              Zeitgenössischer Zirkus braucht Raum.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Wir schaffen in München Struktur für Training, Austausch und Bühne – damit Ideen nicht in der Luft hängen, sondern fliegen lernen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button size="lg" variant="primary">
                <a href="#mitmachen" className="flex items-center">
                  Mitmachen
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <a href="#kontakt" className="flex items-center">
                  Kontakt
                </a>
              </Button>
            </div>
            <p className="text-sm text-gray-500 pt-2">
              Ort 2025: Pepe Dome (Geodom am Ostpark)
            </p>
          </div>

          {/* Hero Image - optimiert für Mobile */}
          <div className="relative w-full">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded overflow-hidden border border-gray-200">
              <Image
                src="https://picsum.photos/seed/circus-hero/1200/800"
                alt="Circus Akademie München - Artistinnen und Artisten bei einer Aufführung"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#zweck" className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 rounded p-2" aria-label="Nach unten scrollen">
          <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
          <span className="text-xs mt-2">Mehr erfahren</span>
        </a>
      </div>
    </section>
  );
};
