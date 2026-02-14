"use client";

import { ArrowLeft, ArrowRight, ChevronRight, Plus } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { site } from "@/content/site";

import { Button } from "@/components/ui/Button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const PrivatspenderIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cn("size-6", className)}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

const UnternehmenIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cn("size-6", className)}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
  </svg>
);

const PolitikIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cn("size-6", className)}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
  </svg>
);

const CARD_ICONS = [PrivatspenderIcon, UnternehmenIcon, PolitikIcon] as const;

const Feature242 = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  const items = [
    {
      title: "Privatspender:innen",
      description: "Jede Spende hilft uns, Trainingsräume zu sichern, Workshops zu organisieren und künstlerische Projekte zu fördern.",
      href: "/unterstuetzen/spenden",
      details: {
        text: site.mitmachen[1]?.details?.spenden?.text || "Jede Spende hilft uns, Trainingsräume zu sichern, Workshops zu organisieren und künstlerische Projekte zu fördern. Als gemeinnütziger Verein können wir Spendenquittungen ausstellen.",
        vorteile: [
          "Steuerlich absetzbar (gemeinnütziger Verein)",
          "Direkte Förderung der Münchner Kulturlandschaft",
          "Unterstützung lokaler Künstler*innen",
          "Transparente Mittelverwendung",
        ],
      },
    },
    {
      title: "Unternehmen",
      description: "Als Sponsor unterstützen Sie zeitgenössischen Zirkus und erhalten gleichzeitig wertvolle Sichtbarkeit für Ihr Unternehmen.",
      href: "/unterstuetzen/sponsoring",
      details: {
        text: site.mitmachen[1]?.details?.sponsoring?.text || "Als Sponsor unterstützen Sie zeitgenössischen Zirkus und erhalten gleichzeitig wertvolle Sichtbarkeit für Ihr Unternehmen oder Ihre Organisation.",
        vorteile: [
          "Sichtbarkeit bei Veranstaltungen und auf unserer Website",
          "Assoziation mit innovativer, kultureller Arbeit",
          "Zielgruppenansprache: Kulturinteressierte, Künstler*innen, Familien",
          "CSR-Engagement mit nachhaltiger Wirkung",
        ],
      },
    },
    {
      title: "Politik & Kommune",
      description: "Förderung von Kultur und kultureller Teilhabe. Wir arbeiten an nachhaltigen Strukturen für zeitgenössischen Zirkus in München.",
      href: "/foerderung",
      details: {
        text: "Förderung von Kultur und kultureller Teilhabe. Wir arbeiten an nachhaltigen Strukturen für zeitgenössischen Zirkus in München.",
        vorteile: [
          "Kulturelle Teilhabe fördern",
          "Nachhaltige Strukturen",
          "Gemeinnützige Zwecke",
          "Beitrag zur Münchner Kulturlandschaft",
        ],
      },
    },
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(items.length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, items.length]);

  return (
    <>
      <section className="overflow-hidden py-32">
        <div className="relative container flex flex-col items-center md:px-0 lg:pt-8">
          <div className="relative z-10 w-full items-center justify-between lg:flex">
            <h1 className="max-w-2xl text-5xl font-semibold tracking-tighter md:text-7xl">
              So können Sie helfen
            </h1>
            <p className="mt-8 max-w-lg tracking-tight text-muted-foreground/80 md:text-xl lg:mt-0">
              Ihre Unterstützung ermöglicht zeitgenössischen Zirkus in München. Wir schaffen Räume für künstlerische Entwicklung und bereichern die Münchner Kulturlandschaft.{" "}
              <span className="group inline-flex cursor-pointer items-center font-medium text-foreground transition-all ease-in-out">
                Mehr erfahren{" "}
                <ChevronRight
                  size={17}
                  className="mt-px ml-1 transition-all ease-in-out group-hover:ml-2"
                />{" "}
              </span>
            </p>
          </div>
          <DottedDiv className="mt-8 flex w-full items-center justify-center px-2 py-10">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
              setApi={setApi}
            >
              <CarouselContent className="m-0 flex w-full">
                {items.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="px-2 md:basis-1/2 lg:basis-1/3"
                  >
                    <Link
                      href={item.href}
                      className="group relative flex h-full max-h-96 w-full flex-col items-end justify-between rounded-3xl bg-muted p-5 text-ellipsis focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-foreground block"
                    >
                      <div className="flex max-h-72 w-full flex-1 items-center justify-center text-foreground opacity-100 transition-all ease-in-out group-hover:scale-90 group-hover:opacity-60" aria-hidden="true">
                        {(() => {
                          const Icon = CARD_ICONS[index];
                          return <Icon className="size-24 md:size-28 lg:size-32" />;
                        })()}
                      </div>
                      <div className="relative flex w-full items-center justify-center gap-4 py-1">
                        <h5 className="text-2xl leading-7 font-medium tracking-tighter transition-all ease-in-out group-hover:translate-x-4 text-center">
                          {item.title}
                        </h5>
                        {/* Plus-Button nur ab md (auf Mobile ausgeblendet, Klick auf Karte leitet weiter) */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setOpenDialog(index);
                          }}
                          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground rounded-full hidden md:flex items-center justify-center"
                          aria-label={`Mehr Informationen über ${item.title} anzeigen`}
                          aria-expanded={openDialog === index}
                        >
                          <div className="h-12 w-12 rounded-full bg-white border-2 border-gray-900 text-gray-900 transition-all ease-in-out hover:bg-gray-900 hover:text-white hover:border-gray-900 focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 shadow-md flex items-center justify-center">
                            <Plus 
                              className="scale-150" 
                              aria-hidden="true" 
                              size={20}
                              strokeWidth={3}
                            />
                          </div>
                        </button>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Nur auf Mobile: Zähler und Pfeile (Desktop: ausgeblendet); Pfeile nutzen api direkt für zuverlässigen Touch */}
              <div className="mt-8 flex w-full items-center justify-between px-4 lg:hidden">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-medium">
                    {current.toString().padStart(2, "0")}
                  </span>
                  <span className="text-muted-foreground">/</span>
                  <span className="text-muted-foreground">
                    {count.toString().padStart(2, "0")}
                  </span>
                </div>

                <div className="flex gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => api?.scrollPrev()}
                    className="inline-flex h-12 w-12 min-w-12 touch-manipulation items-center justify-center rounded-full border-2 border-foreground bg-background hover:bg-muted focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                    aria-label="Vorherige Karte"
                  >
                    <ArrowLeft className="size-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => api?.scrollNext()}
                    className="inline-flex h-12 w-12 min-w-12 touch-manipulation items-center justify-center rounded-full border-2 border-foreground bg-foreground text-background hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                    aria-label="Nächste Karte"
                  >
                    <ArrowRight className="size-6" />
                  </button>
                </div>
              </div>
            </Carousel>
          </DottedDiv>
        </div>
      </section>

      {/* Dialog für Details */}
      {openDialog !== null && (
        <Dialog open={openDialog !== null} onOpenChange={() => setOpenDialog(null)}>
          <DialogContent className="max-w-2xl" aria-describedby="dialog-description">
            <DialogHeader>
              <DialogTitle id="dialog-title">{items[openDialog]?.title}</DialogTitle>
              <DialogDescription id="dialog-description">
                {items[openDialog]?.description}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <p className="text-muted-foreground leading-relaxed">
                {items[openDialog]?.details?.text}
              </p>
              {items[openDialog]?.details?.vorteile && (
                <div>
                  <h4 className="font-medium mb-3">Vorteile:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {items[openDialog].details.vorteile.map((vorteil, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 mt-1">✓</span>
                        <span>{vorteil}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="pt-4">
                <Link href={items[openDialog]?.href || "#"}>
                  <Button className="w-full">
                    Mehr erfahren
                  </Button>
                </Link>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export { Feature242 };

const DottedDiv = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("relative", className)}>
    <div className="absolute top-4 -left-[12.5px] h-[1.5px] w-[110%] bg-muted md:-left-20" />
    <div className="absolute bottom-4 -left-[12.5px] h-[1.5px] w-[110%] bg-muted md:-left-20" />
    <div className="absolute -top-4 left-0 h-[110%] w-[1.5px] bg-muted" />
    <div className="absolute -top-4 right-0 h-[110%] w-[1.5px] bg-muted" />
    <div className="absolute top-[12.5px] left-[-3px] z-10 h-2 w-2 rounded-full bg-foreground" />
    <div className="absolute top-[12.5px] right-[-3px] z-10 h-2 w-2 rounded-full bg-foreground" />
    <div className="absolute bottom-[12.5px] left-[-3px] z-10 h-2 w-2 rounded-full bg-foreground" />
    <div className="absolute right-[-3px] bottom-[12.5px] z-10 h-2 w-2 rounded-full bg-foreground" />
    {children}
  </div>
);
