import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Förderung | Circus Akademie München e.V.',
  description:
    'Zeitgenössischer Zirkus als Kultur- und Begegnungsraum für München. Kulturverein mit festem Veranstaltungsort im Geodome – aktuell Umbau & Upgrade.',
};

export default function FoerderungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

