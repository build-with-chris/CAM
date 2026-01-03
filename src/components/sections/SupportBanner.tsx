import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export const SupportBanner: React.FC = () => {
  return (
    <section className="bg-primary-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-normal mb-4">
              Unterstützen Sie zeitgenössischen Zirkus in München
            </h2>
            <p className="text-primary-100 leading-relaxed">
              Ihre Spende oder Ihr Sponsoring ermöglicht Trainings, Workshops und künstlerische Projekte. 
              Gemeinsam stärken wir die Münchner Kulturlandschaft.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
            <Link href="/mitmachen#unterstuetzen">
              <Button variant="primary" size="lg" className="w-full sm:w-auto bg-white text-primary-900 hover:bg-gray-100">
                Jetzt spenden
              </Button>
            </Link>
            <Link href="/mitmachen#unterstuetzen">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary-900">
                Sponsor werden
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

