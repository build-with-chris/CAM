"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/separator";

interface Pricing3Props {
  className?: string;
}

const Pricing3 = ({ className }: Pricing3Props) => {
  // Wähle 3 repräsentative Spenden-Beträge aus
  const donationTiers = [
    site.spenden.donationTiers[0], // 25 €
    site.spenden.donationTiers[2], // 150 €
    site.spenden.donationTiers[4], // 1.000 €
  ];

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-6 text-4xl font-bold text-pretty lg:text-6xl">
            Was deine Spende bewirkt
          </h2>
          <p className="text-muted-foreground lg:text-xl">
            Jeder Betrag hilft – wir setzen Spenden dort ein, wo sie aktuell am dringendsten gebraucht werden.
          </p>
        </div>
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {donationTiers.map((tier, index) => (
            <div key={index}>
              <div className="flex flex-col justify-between gap-10 rounded-lg border p-6">
                <div>
                  <p className="mb-2 text-lg font-semibold">Spendenbetrag</p>
                  <p className="mb-4 text-4xl font-semibold">{tier.betrag}</p>
                  <p className="text-sm text-muted-foreground">
                    {tier.wirkung}
                  </p>
                </div>
                <Link href="/kontakt?subject=Spende">
                  <Button variant={index === 1 ? "default" : "outline"} className="w-full">
                    Jetzt spenden
                  </Button>
                </Link>
              </div>
              <ul className="mt-8 px-6">
                <li className="flex gap-2">
                  <Check className="w-4" />
                  <p className="text-sm text-muted-foreground">
                    <span className="mr-1 font-semibold text-primary">
                      Steuerlich absetzbar:
                    </span>
                    Als gemeinnütziger Verein können wir Spendenquittungen ausstellen
                  </p>
                </li>
                <Separator className="my-4" />
                <li className="flex gap-2">
                  <Check className="w-4" />
                  <p className="text-sm text-muted-foreground">
                    <span className="mr-1 font-semibold text-primary">
                      Transparente Verwendung:
                    </span>
                    Spenden werden satzungsgemäß für zeitgenössischen Zirkus verwendet
                  </p>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Pricing3 };
