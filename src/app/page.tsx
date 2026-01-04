import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Zielgruppen } from '@/components/sections/Zielgruppen';
import { WarumWir } from '@/components/sections/WarumWir';
import { Storytelling } from '@/components/sections/Storytelling';
import { DisziplinenGalerie } from '@/components/sections/DisziplinenGalerie';
import { Finanzziel } from '@/components/sections/Finanzziel';
import { AbschlussCta } from '@/components/sections/AbschlussCta';

export const metadata: Metadata = {
  title: 'Circus Akademie München e.V. – Zeitgenössischer Zirkus braucht Raum',
  description: 'Wir schaffen in München Struktur für Training, Austausch und Bühne. Zeitgenössischer Zirkus als Kunstform – im Pepe Dome am Ostpark.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <div id="main-content">
        <Hero />
        <Zielgruppen />
        <WarumWir />
        <Storytelling />
        <DisziplinenGalerie />
        <Finanzziel />
        <AbschlussCta />
      </div>
      <Footer />
    </main>
  );
}
