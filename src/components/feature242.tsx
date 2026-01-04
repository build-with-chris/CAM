"use client";

import { ChevronRight, Plus } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { site } from "@/content/site";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Feature242 = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  const items = [
    {
      title: "Privatspender:innen",
      description: "Jede Spende hilft uns, Trainingsräume zu sichern, Workshops zu organisieren und künstlerische Projekte zu fördern.",
      imgSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-exchange-between-the-user-and-the-global-network.svg",
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
      imgSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-letters-and-arrows-flying-out-of-a-black-hole.svg",
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
      imgSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-loading-the-next-page.svg",
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
                    <div className="group relative flex h-full max-h-96 w-full flex-col items-end justify-between rounded-3xl bg-muted p-5 text-ellipsis focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-foreground">
                      <img
                        className="max-h-72 w-full opacity-100 transition-all ease-in-out group-hover:scale-90 group-hover:opacity-60"
                        src={item.imgSrc}
                        alt={item.title}
                      />
                      <div className="flex w-full items-center justify-between gap-4">
                        <h5 className="text-2xl leading-7 font-medium tracking-tighter transition-all ease-in-out group-hover:translate-x-4">
                          {item.title}
                        </h5>
                        <button
                          onClick={() => setOpenDialog(index)}
                          className="relative z-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground rounded-full"
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
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-8 flex w-full items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-medium">
                    {current.toString().padStart(2, "0")}
                  </span>
                  <span className="text-muted-foreground">/</span>
                  <span className="text-muted-foreground">
                    {count.toString().padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mr-10 flex gap-2">
                  <CarouselPrevious className="h-10 w-10" />
                  <CarouselNext variant="default" className="h-10 w-10" />
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
