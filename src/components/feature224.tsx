"use client";
import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Mic,
  Theater,
  Dumbbell,
  GraduationCap,
  Film,
} from "lucide-react";
import { startTransition, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { site } from "@/content/site";

import { Card, CardContent } from "@/components/ui/Card";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface feature {
  title: string;
  label: string;
  icon: LucideIcon;
  description: string;
  background: string;
}

const FEATURES: Array<feature> = [
  {
    title: "Training",
    label: "Kontinuität",
    icon: Dumbbell,
    description: site.angebote.find(a => a.id === "training")?.teaser || "Regelmäßige Trainings- und Probenmöglichkeiten als Basis für Kontinuität.",
    background: "/Cam Bilder /Breakdance.webp",
  },
  {
    title: "Produktion",
    label: "Projekte",
    icon: Film,
    description: site.angebote.find(a => a.id === "produktionen")?.teaser || "Ressourcen, Austausch und Sichtbarkeit für performative Projekte.",
    background: "/Critical Spaces.jpeg.webp",
  },
  {
    title: "Open Stage",
    label: "Experimentieren",
    icon: Mic,
    description: site.angebote.find(a => a.id === "open-stage")?.teaser || "Ein Raum zum Experimentieren: interdisziplinär, niedrigschwellig, publikumsnah.",
    background: "/Cam Bilder /Artistik Luft MCDonalds.webp",
  },
  {
    title: "Show",
    label: "Aufführung",
    icon: Theater,
    description: "Aufführungen und Präsentationen: Zeitgenössischer Zirkus auf der Bühne, für Publikum sichtbar gemacht.",
    background: "/PEPE complete_batcheditor_fotor.webp",
  },
  {
    title: "Workshops",
    label: "Weiterbildung",
    icon: GraduationCap,
    description: site.angebote.find(a => a.id === "workshops")?.teaser || "Weiterbildung mit Gästen und lokalen Expert*innen – von Technik bis Kreation.",
    background: "/Cam Bilder /Tellerdrehen.webp",
  },
];

interface Feature224Props {
  className?: string;
}

const Feature224 = ({ className }: Feature224Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    startTransition(() => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    api.on("select", () => {
      startTransition(() => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    });
  }, [api]);

  const goToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section className={cn("pt-28 pb-16 md:py-24 lg:py-32", className)}>
      <div className="container px-4 sm:px-6">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <h2 className="w-full text-center text-3xl leading-tight font-medium sm:text-4xl md:text-5xl lg:text-6xl">
            <div className="block">Zirkus neu erleben</div>
            <div className="block">– Kunst, die Menschen verbindet.</div>
          </h2>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent className="-ml-4 sm:-ml-8 pt-12 sm:pt-20">
            {FEATURES.map((card, index) => (
              <CarouselItem
                key={index}
                className="pl-4 sm:pl-8 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="border-0 py-0 shadow-none dark:bg-background">
                    <CardContent className="flex flex-col p-0">
                      <div
                        style={{ backgroundImage: `url("${card.background}")` }}
                        className="relative flex aspect-[0.935802469] w-full flex-col items-center justify-between overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat p-7"
                      >
                        <div className="flex size-full flex-1"></div>
                        <div className="h-12 w-full">
                          <div className="mx-auto mb-8 flex w-full max-w-[15rem] items-center gap-4 rounded-full bg-primary px-3 py-2.5 shadow-xl dark:bg-background">
                            <div className="shrink-0">
                              <div className="flex -space-x-2">
                                <div className="flex size-7 rounded-full border border-black bg-background dark:bg-primary">
                                  <Sparkles className="m-auto size-4 dark:text-background" />
                                </div>
                                <div className="flex size-7 rounded-full border border-black bg-background dark:bg-primary">
                                  <card.icon className="m-auto size-4 dark:text-background" />
                                </div>
                              </div>
                            </div>
                            <div className="text-sm font-medium text-white">
                              {card.label}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full flex-col gap-1 pt-6">
                        <h3 className="text-xl font-medium text-foreground">
                          {card.title}
                        </h3>
                        <p className="text-sm">{card.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4">
              <CarouselPrevious className="static size-14 translate-y-0 bg-brand-primary hover:bg-brand-primary/90 text-base-bg border-2 border-brand-primary shadow-lg hover:shadow-xl transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed" />
              <CarouselNext className="static size-14 translate-y-0 bg-brand-primary hover:bg-brand-primary/90 text-base-bg border-2 border-brand-primary shadow-lg hover:shadow-xl transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed" />
            </div>
            <p className="text-sm text-base-muted text-center">
              Weitere Formate entdecken
            </p>
          </div>
          <div className="mt-6 flex w-full items-center gap-2 md:hidden">
            {Array.from({ length: FEATURES.length }).map((_, i) => (
              <button
                onClick={() => goToSlide(i % FEATURES.length)}
                key={`carousel-btn-${i}`}
                className="h-4 w-full"
              >
                <div
                  className={` ${current == i + 1 ? "bg-primary" : "bg-muted"} my-auto h-1 w-full rounded-full`}
                ></div>
              </button>
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export { Feature224 };
