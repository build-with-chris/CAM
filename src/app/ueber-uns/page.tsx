import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { About6 } from '@/components/about6';

export const metadata: Metadata = {
  title: 'Über uns | Circus Akademie München e.V.',
  description: 'Circus Akademie München e.V. – Gemeinnütziger Verein zur Förderung von zeitgenössischem Zirkus. Erfahren Sie mehr über unseren Zweck, unsere Werte und unsere Struktur.',
};

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <div id="main-content">
        <About6 />
      </div>
      <Footer />
    </main>
  );
}

