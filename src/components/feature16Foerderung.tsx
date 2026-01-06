import { Settings, Wrench, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

interface Feature16FoerderungProps {
  className?: string;
}

const Feature16Foerderung = ({ className }: Feature16FoerderungProps) => {
  const einsatz = site.foerderung.einsatz;
  const icons = [Settings, Wrench, Users]; // Betrieb, Investitionen, Minijobs

  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="container px-4 sm:px-6">
        <h2 className="mb-8 text-2xl sm:text-3xl font-medium lg:text-4xl lg:mb-12 text-base-text">
          Wofür Förderung konkret eingesetzt wird
        </h2>
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
          {einsatz.map((item, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="block">
                <div className="rounded-lg bg-base-surface border border-white/10 p-5 transition-all hover:shadow-lg hover:border-brand-primary/50">
                  <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-brand-primary/20">
                    <Icon className="size-6 text-brand-primary" />
                  </span>
                  <h3 className="mb-2 text-xl font-medium text-base-text">{item.kategorie}</h3>
                  <p className="leading-7 text-base-muted">
                    {item.beschreibung}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Feature16Foerderung };

