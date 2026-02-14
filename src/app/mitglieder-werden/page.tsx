import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/site";
import { MembershipForm } from "@/components/MembershipForm";

export const metadata: Metadata = {
  title: "Mitglied werden | Circus Akademie München e.V.",
  description:
    "Mitgliedschaft beim Circus Akademie München e.V. – Antrag per Formular. Aktives Mitglied oder Fördermitglied.",
};

export default function MitgliederWerdenPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      {/* Intro: heller Abschnitt */}
      <section className="bg-white border-b border-slate-200/80 pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-slate-900">
              Mitglied werden
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              {site.mitglieder.intro}
            </p>
          </div>
        </div>
      </section>
      {/* Formular: weicher Grauton für Fluss */}
      <section className="bg-slate-50 py-12 md:py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl bg-white border border-slate-200/80 shadow-sm p-6 md:p-8">
              <MembershipForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
