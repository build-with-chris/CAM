import React from 'react';
import Link from 'next/link';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { site } from '@/content/site';

export const Zielgruppen: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {site.home.zielgruppen.map((kachel, index) => (
            <Card key={index} hover className="flex flex-col">
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-normal text-primary-900">
                  {kachel.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {kachel.text}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link href={kachel.link}>
                  <Button variant="primary" className="w-full">
                    Mehr erfahren
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

