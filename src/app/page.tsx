import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Intro } from '@/components/sections/Intro';
import { SupportBanner } from '@/components/sections/SupportBanner';

export default function Home() {
  return (
    <main className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <div id="main-content">
        <Hero />
        <Intro />
        <SupportBanner />
      </div>
      <Footer />
    </main>
  );
}
