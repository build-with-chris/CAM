import type { Metadata } from "next";
import { Seitenkopf } from "@/components/layout/Seitenkopf";
import { Section } from "@/components/ui/Section";
import { MembershipForm } from "@/components/MembershipForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Mitglied werden | Circus Akademie München e.V.",
  description:
    "Mitgliedschaft beim Circus Akademie München e.V. – Antrag per Formular. Aktives Mitglied oder Fördermitglied.",
};

export default function MitgliederWerdenPage() {
  return (
    <>
      <Seitenkopf titel="Mitglied werden" einleitung={site.mitglieder.intro} />
      <Section>
        <div className="relative mx-auto max-w-2xl rounded-card border border-line bg-white p-6 sm:p-8">
          <MembershipForm />
        </div>
      </Section>
    </>
  );
}
