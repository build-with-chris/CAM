import type { Metadata } from "next";
import { Space_Grotesk, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/siteUrl";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Circus Akademie München e.V. – Zeitgenössischer Zirkus braucht Raum",
  description: "Wir schaffen in München Struktur für Training, Austausch und Bühne. Zeitgenössischer Zirkus als Kunstform – im Pepe Dome am Ostpark.",
  keywords: ["Zeitgenössischer Zirkus", "Circus Akademie München", "Zirkuskunst", "Akrobatik", "Luftartistik", "Pepe Dome", "Ostpark München", "Training", "Workshops", "Open Stage"],
  authors: [{ name: "Circus Akademie München e.V." }],
  creator: "Circus Akademie München e.V.",
  publisher: "Circus Akademie München e.V.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "Circus Akademie München e.V.",
    title: "Circus Akademie München e.V. – Zeitgenössischer Zirkus braucht Raum",
    description: "Wir schaffen in München Struktur für Training, Austausch und Bühne. Zeitgenössischer Zirkus als Kunstform – im Pepe Dome am Ostpark.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Ein Artist schwebt waagerecht in einem Cyr Wheel, um ihn herum zieht Bühnennebel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Circus Akademie München e.V. – Zeitgenössischer Zirkus braucht Raum",
    description: "Wir schaffen in München Struktur für Training, Austausch und Bühne. Zeitgenössischer Zirkus als Kunstform – im Pepe Dome am Ostpark.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/CAMLogonegativ.svg",
    shortcut: "/CAMLogonegativ.svg",
    apple: "/CAMLogonegativ.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="de" 
      className={`scroll-smooth ${spaceGrotesk.variable} ${manrope.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
