'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { site } from '@/content/site';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navigation = site.navigation;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl" aria-label="Hauptnavigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg">
            <div className="relative h-10 w-10 md:h-12 md:w-12 flex-shrink-0">
              <Image
                src="/Logo CAM ausgeschnitten.png"
                alt="Circus Akademie München Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 40px, 48px"
              />
            </div>
            <div className="text-xl md:text-2xl font-bold text-primary-800 hidden sm:block">
              Circus Akademie München
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href === '/' && pathname === '/');
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 font-medium transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    isActive
                      ? 'text-primary-900 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-700 hover:bg-primary-50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/unterstuetzen/spenden" className="ml-4">
              <Button variant="primary" size="md">
                Spenden
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-expanded={isMobileMenuOpen}
            aria-label="Menü öffnen"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden mt-4 pb-4 space-y-1"
            role="dialog"
            aria-modal="true"
            aria-label="Hauptnavigation"
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href === '/' && pathname === '/');
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    isActive
                      ? 'text-primary-900 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-700 hover:bg-primary-50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link 
              href="/unterstuetzen/spenden" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-4"
            >
              <Button variant="primary" size="md" className="w-full">
                Spenden
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
