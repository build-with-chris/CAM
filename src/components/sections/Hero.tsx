import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { site } from '@/content/site';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24 pb-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-normal text-primary-900 leading-tight tracking-tight">
              {site.hero.headline}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {site.hero.subline}
            </p>
            
            {/* Bedarf - prominent hervorgehoben */}
            <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-lg max-w-xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg font-medium text-primary-900 leading-relaxed">
                {site.hero.bedarf}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link href={site.hero.cta1.href}>
                <Button size="lg" variant="primary" className="w-full sm:w-auto">
                  {site.hero.cta1.text}
                </Button>
              </Link>
              <Link href={site.hero.cta2.href}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  {site.hero.cta2.text}
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-gray-500 pt-2">
              {site.hero.hinweis}
            </p>
          </div>

          {/* Hero Image - optimiert für Mobile */}
          <div className="relative w-full">
            <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[500px] xl:h-[600px] rounded overflow-hidden border border-gray-200">
              <Image
                src="/placeholders/hero.svg"
                alt="Circus Akademie München - Zeitgenössischer Zirkus"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
