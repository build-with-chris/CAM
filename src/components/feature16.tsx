import { Heart, Building2, Handshake } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

interface Feature16Props {
  className?: string;
}

const Feature16 = ({ className }: Feature16Props) => {
  const zielgruppen = site.home.zielgruppen;
  const icons = [Heart, Building2, Handshake];

  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="container px-4 sm:px-6">
        <h2 className="mb-6 text-2xl font-medium sm:text-3xl lg:text-4xl lg:mb-12">
          So finanzieren wir uns
        </h2>
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
          {zielgruppen.map((zielgruppe, index) => {
            const Icon = icons[index];
            return (
              <Link key={index} href={zielgruppe.link} className="block">
                <div className="rounded-lg bg-accent p-5 transition-all hover:shadow-lg">
                  <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mb-2 text-xl font-medium">{zielgruppe.title}</h3>
                  <p className="leading-7 text-muted-foreground">
                    {zielgruppe.text}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Feature16 };
