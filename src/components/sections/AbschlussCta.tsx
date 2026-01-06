import React from 'react';
import { Button } from '../ui/Button';
import { site } from '@/content/site';
import Link from 'next/link';

export const AbschlussCta: React.FC = () => {
  return (
    <section id="abschluss-cta" className="py-12 sm:py-20 md:py-32 lg:py-40 bg-primary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-6 sm:mb-8">
            {site.home.abschlussCta.ueberschrift}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={site.home.abschlussCta.cta1.href}>
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full sm:w-auto bg-white text-primary-900 hover:bg-gray-100"
              >
                {site.home.abschlussCta.cta1.text}
              </Button>
            </Link>
            <Link href={site.home.abschlussCta.cta2.href}>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary-900"
              >
                {site.home.abschlussCta.cta2.text}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

