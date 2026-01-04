import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Feature242 } from '@/components/feature242';

export const metadata: Metadata = {
  title: 'Unterstützen | Circus Akademie München e.V.',
  description: 'Unterstützen Sie zeitgenössischen Zirkus in München. Spenden, Sponsoring oder Mitgliedschaft – finden Sie die passende Form der Unterstützung.',
};

export default function UnterstuetzenPage() {
  return (
    <main className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <div id="main-content">
        <Feature242 />
      </div>
      <Footer />
    </main>
  );
}

