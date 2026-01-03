import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Förderung | Circus Akademie München e.V.',
  description: 'Zeitgenössischer Zirkus als Kultur- und Begegnungsraum für München. Gemeinnütziger Verein mit festem Veranstaltungsort im Geodome.',
};

export default function FoerderungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

