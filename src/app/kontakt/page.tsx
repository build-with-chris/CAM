import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Contact18 } from '@/components/contact18';
import { Suspense } from 'react';

export default function KontaktPage() {
  return (
    <main className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <div id="main-content">
        <Suspense fallback={
          <div className="py-32">
            <div className="container">
              <div className="text-center">
                <p className="text-muted-foreground">Lade Formular...</p>
              </div>
            </div>
          </div>
        }>
          <Contact18 />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
