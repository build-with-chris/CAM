import type { Metadata } from 'next';
import { Einstieg } from '@/components/sections/Einstieg';
import { Formate } from '@/components/sections/Formate';
import { Wege } from '@/components/sections/Wege';
import { Storytelling } from '@/components/sections/Storytelling';
import { AbschlussCta } from '@/components/sections/AbschlussCta';

export const metadata: Metadata = {
  title: 'Circus Akademie München e.V. – Zeitgenössischer Zirkus braucht Raum',
  description: 'Wir schaffen in München Struktur für Training, Austausch und Bühne. Zeitgenössischer Zirkus als Kunstform – im Pepe Dome am Ostpark.',
};

export default function Home() {
  return (
    <>
      <Einstieg />
      <Formate />
      <Wege />
      <Storytelling />
      <AbschlussCta />
    </>
  );
}
