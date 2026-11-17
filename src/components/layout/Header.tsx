"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

const BUTTON = site.navigationButton;

function passt(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

function istAktiv(pathname: string, item: { href: string; auch: readonly string[] }) {
  return passt(pathname, item.href) || item.auch.some((href) => passt(pathname, href));
}

export function Header() {
  const [offen, setOffen] = useState(false);
  const pathname = usePathname();

  // Escape schließt das mobile Menü.
  useEffect(() => {
    if (!offen) return;
    const beiTaste = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOffen(false);
    };
    window.addEventListener("keydown", beiTaste);
    return () => window.removeEventListener("keydown", beiTaste);
  }, [offen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="wrap flex h-19 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOffen(false)}
        >
          <Image
            src="/images/logos/cam-logo.png"
            alt="Logo der Circus Akademie München"
            width={273}
            height={273}
            className="size-10"
            preload
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            Circus Akademie München
          </span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 xl:flex">
          {site.navigation.map((item) => {
            const aktiv = istAktiv(pathname, item);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={aktiv ? "page" : undefined}
                className={cn(
                  "py-3 text-[0.9375rem] font-medium transition-colors hover:text-dome",
                  aktiv ? "text-dome" : "text-ink-muted"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Button asChild className="hidden xl:inline-flex">
          <Link href={BUTTON.href}>{BUTTON.label}</Link>
        </Button>

        <button
          type="button"
          className="-mr-2 flex size-11 items-center justify-center rounded-control text-ink hover:bg-mist xl:hidden"
          onClick={() => setOffen((wert) => !wert)}
          aria-label={offen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={offen}
          aria-controls="mobiles-menue"
        >
          {offen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {offen && (
        <nav
          id="mobiles-menue"
          aria-label="Hauptnavigation"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.75rem)] overflow-y-auto border-b border-line bg-white xl:hidden"
        >
          <ul className="wrap py-3">
            {site.navigation.map((item) => {
              const aktiv = istAktiv(pathname, item);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={aktiv ? "page" : undefined}
                    onClick={() => setOffen(false)}
                    className={cn(
                      "flex h-13 items-center border-b border-line text-lg font-medium",
                      aktiv ? "text-dome" : "text-ink"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="py-5">
              <Button asChild size="lg" className="w-full">
                <Link href={BUTTON.href} onClick={() => setOffen(false)}>
                  {BUTTON.label}
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
