import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Programs } from '@/components/sections/Programs';
import { Location } from '@/components/sections/Location';
import { JoinUs } from '@/components/sections/JoinUs';
import { News } from '@/components/sections/News';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Location />
      <JoinUs />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}
