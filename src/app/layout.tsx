import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Circus Akademie München e.V. – Zeitgenössischer Zirkus braucht Raum",
  description: "Wir schaffen in München Struktur für Training, Austausch und Bühne. Zeitgenössischer Zirkus als Kunstform – im Pepe Dome am Ostpark.",
  keywords: ["Zeitgenössischer Zirkus", "Circus Akademie München", "Zirkuskunst", "Akrobatik", "Luftartistik", "Pepe Dome", "Ostpark München", "Training", "Workshops", "Open Stage"],
  authors: [{ name: "Circus Akademie München e.V." }],
  creator: "Circus Akademie München e.V.",
  publisher: "Circus Akademie München e.V.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://circus-akademie-muenchen.de",
    siteName: "Circus Akademie München e.V.",
    title: "Circus Akademie München e.V. – Zeitgenössischer Zirkus braucht Raum",
    description: "Wir schaffen in München Struktur für Training, Austausch und Bühne. Zeitgenössischer Zirkus als Kunstform – im Pepe Dome am Ostpark.",
    images: [
      {
        url: "/placeholders/og.svg",
        width: 1200,
        height: 630,
        alt: "Circus Akademie München e.V.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Circus Akademie München e.V. – Zeitgenössischer Zirkus braucht Raum",
    description: "Wir schaffen in München Struktur für Training, Austausch und Bühne. Zeitgenössischer Zirkus als Kunstform – im Pepe Dome am Ostpark.",
    images: ["/placeholders/og.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
