import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Circus Akademie München e.V.</h3>
            <p className="text-primary-100 leading-relaxed">
              Ein Ort für Zirkuskunst, Kreativität und Gemeinschaft im Herzen Münchens.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#ueber-uns" className="text-primary-100 hover:text-white transition-colors focus:outline-none focus:underline">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#programme" className="text-primary-100 hover:text-white transition-colors focus:outline-none focus:underline">
                  Programme
                </a>
              </li>
              <li>
                <a href="#ort" className="text-primary-100 hover:text-white transition-colors focus:outline-none focus:underline">
                  Ort
                </a>
              </li>
              <li>
                <a href="#mitmachen" className="text-primary-100 hover:text-white transition-colors focus:outline-none focus:underline">
                  Mitmachen
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-primary-100 hover:text-white transition-colors focus:outline-none focus:underline">
                  Kontakt
                </a>
              </li>
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

        <div className="mt-12 pt-8 border-t border-primary-700 text-center text-primary-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Circus Akademie München e.V. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};
