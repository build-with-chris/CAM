import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/content/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative h-12 w-12 flex-shrink-0">
                <Image
                  src="/CAM Logo negativ.png"
                  alt="Circus Akademie München Logo"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <h3 className="text-xl font-bold">{site.verein.name}</h3>
            </div>
            <p className="text-primary-100 leading-relaxed">
              {site.verein.kurzbeschreibung}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {site.navigation.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className="text-primary-100 hover:text-white transition-colors focus:outline-none focus:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <address className="text-primary-100 not-italic space-y-2">
              <p>Pepe Dome/Geodom</p>
              <p>Ostpark München</p>
              <p className="mt-4">
                <a href="mailto:info@circus-akademie-muenchen.de" className="hover:text-white transition-colors focus:outline-none focus:underline">
                  info@circus-akademie-muenchen.de
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-700">
          <div className="mb-6 text-center">
            <p className="text-primary-100 text-sm max-w-2xl mx-auto">
              {site.footer.trustLine}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-primary-200 text-sm">
            <p>&copy; {new Date().getFullYear()} {site.verein.name} Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <Link href="/kontakt" className="hover:text-white transition-colors focus:outline-none focus:underline">
                Kontakt
              </Link>
              <Link href="/impressum" className="hover:text-white transition-colors focus:outline-none focus:underline">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-white transition-colors focus:outline-none focus:underline">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
