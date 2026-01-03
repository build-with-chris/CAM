import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsoring | Circus Akademie München e.V.',
  description: 'Werden Sie Sponsor für zeitgenössischen Zirkus in München. Sichtbarkeit, CSR-Engagement und Networking mit der Kulturszene.',
};

export default function SponsoringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

