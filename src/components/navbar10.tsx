"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

const LOGO = {
  url: "/",
  src: "/Logo CAM ausgeschnitten.png",
  alt: "Circus Akademie München Logo",
  title: "Circus Akademie München",
};

const NAVIGATION = site.navigation.map((item) => ({
  title: item.label,
  url: item.href,
}));

const CTA_BUTTON = {
  label: "Spenden",
  url: "/unterstuetzen/spenden",
};

interface Navbar10Props {
  className?: string;
}

const Navbar10 = ({ className }: Navbar10Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Schließe Menü bei Route-Wechsel
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Schließe bei Resize auf Desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (url: string) => {
    setIsOpen(false);
    router.push(url);
  };

  return (
    <>
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-20 bg-white border-b border-gray-200",
          className
        )}
      >
        <div className="container h-full mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href={LOGO.url} className="flex items-center gap-2">
            <Image
              src={LOGO.src}
              alt={LOGO.alt}
              width={28}
              height={28}
            />
            <span className="hidden md:block font-semibold text-gray-900">
              {LOGO.title}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAVIGATION.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:block">
            <Button variant="ghost" asChild>
              <Link href={CTA_BUTTON.url}>
                {CTA_BUTTON.label}
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="xl:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div className="absolute top-20 left-0 right-0 bottom-0 bg-white overflow-y-auto">
            <nav className="p-4">
              <ul className="space-y-1">
                {NAVIGATION.map((item) => (
                  <li key={item.title}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.url)}
                      className="w-full flex items-center h-14 px-4 text-left text-lg font-medium text-gray-900 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-6 px-4">
                <Button
                  className="w-full h-14 text-lg"
                  onClick={() => handleNavClick(CTA_BUTTON.url)}
                >
                  {CTA_BUTTON.label}
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export { Navbar10 };
