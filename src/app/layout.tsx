import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/siteUrl";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Schriften wie beim Pepe Dome: Outfit für Überschriften, Inter für Fließtext.
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // data-scroll-behavior: Next 16 setzt weiches Scrollen beim Seitenwechsel sonst nicht mehr aus.
    <html lang="de" data-scroll-behavior="smooth" className={`${outfit.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a href="#main-content" className="skip-link">
          Zum Hauptinhalt springen
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
