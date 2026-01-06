"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Pricing3SponsoringProps {
  className?: string;
}

const Pricing3Sponsoring = ({ className }: Pricing3SponsoringProps) => {
  const sponsoringPakete = site.sponsoring.pakete;

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-6 text-4xl font-bold text-pretty lg:text-6xl">
            Sponsoring-Pakete
          </h2>
          <p className="text-muted-foreground lg:text-xl">
            {site.sponsoring.paketeHinweis}
          </p>
        </div>
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {sponsoringPakete.map((paket, index) => (
            <div key={index}>
              <div className="flex flex-col justify-between gap-10 rounded-lg border p-6">
                <div>
                  <p className="mb-2 text-lg font-semibold">{paket.name}</p>
                  <p className="mb-4 text-4xl font-semibold">{paket.betrag}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {index === 0 && "Ideal für Unternehmen, die zeitgenössischen Zirkus unterstützen möchten."}
                    {index === 1 && "Perfekt für Unternehmen, die mehr Sichtbarkeit und Engagement suchen."}
                    {index === 2 && "Best für große Organisationen mit umfassendem Engagement."}
                  </p>
                </div>
                <Link href="#kontakt">
                  <Button variant={index === 1 ? "default" : "outline"} className="w-full">
                    Paket anfragen
                  </Button>
                </Link>
              </div>
              <ul className="mt-8 px-6">
                {paket.inhalt.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <li className="flex gap-2">
                      <Check className="w-4 shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {item}
                      </p>
                    </li>
                    {itemIndex < paket.inhalt.length - 1 && (
                      <Separator className="my-4" />
                    )}
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Pricing3Sponsoring };

