"use client";

import { ChevronsUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Contact18Props {
  className?: string;
}

const Contact18 = ({ className }: Contact18Props) => {
  const searchParams = useSearchParams();
  const [subject, setSubject] = useState('Allgemein');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    privacy: false,
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    privacy: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const subjectParam = searchParams?.get('subject');
    if (subjectParam) {
      setSubject(decodeURIComponent(subjectParam));
    }
  }, [searchParams]);

  const supportFeatures = [
    { text: "Gemeinnütziger Verein" },
    { text: "Zeitnahe Antwort" },
    { text: "Transparente Kommunikation" },
    { text: "Persönlicher Kontakt" },
  ];

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
      privacy: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Bitte gib deinen Namen ein.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Bitte gib deine E-Mail-Adresse ein.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Bitte gib eine gültige E-Mail-Adresse ein.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Bitte schreib uns eine Nachricht.';
    }

    if (!formData.privacy) {
      newErrors.privacy = 'Bitte bestätige die Datenschutzhinweise.';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
      if (name === 'privacy') {
        setErrors({ ...errors, privacy: '' });
      }
    } else {
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: '' });
    }
  };

  if (submitted) {
    return (
      <section className={cn("py-32", className)}>
        <div className="container">
          <div className="text-center">
            <h1 className="text-6xl font-semibold tracking-tight lg:text-7xl mb-6">
              Danke!
            </h1>
            <p className="text-lg text-muted-foreground">
              {site.kontakt.success}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mt-20 flex max-h-120 flex-col justify-between gap-15 md:gap-10 lg:flex-row">
          <div className="flex w-full max-w-lg flex-col justify-between gap-15">
            <div className="relative w-fit">
              <h1 className="text-6xl font-semibold tracking-tight lg:text-7xl">
                Schreib uns
              </h1>
              <Illustration className="absolute -top-2 -right-5 size-5 text-red-500 md:size-6" />
              <Illustration className="absolute -bottom-2 -left-5 size-5 rotate-180 text-red-500 md:size-6" />
            </div>
            <ul className="space-y-6">
              {supportFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-8 text-base text-foreground/50"
                >
                  <div className="flex size-6 items-center justify-center bg-red-100 text-red-500">
                    <ChevronsUp className="size-5" />
                  </div>
                  {feature.text}
                </li>
              ))}
            </ul>
            <a
              href="mailto:info@circus-akademie-muenchen.de"
              className="flex items-center gap-4 text-4xl font-medium tracking-tighter"
            >
              info@circus-akademie-muenchen.de
            </a>
          </div>
          <div className="col-span-4 flex w-full flex-col gap-2 lg:pl-10">
            <form className="space-y-2" onSubmit={handleSubmit} noValidate>
              <div>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="h-15 rounded-xl border-0 border-b-foreground/25 bg-muted shadow-none placeholder:text-foreground/20 placeholder:uppercase focus-visible:ring-0"
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="h-15 rounded-xl border-0 border-b-foreground/25 bg-muted shadow-none placeholder:text-foreground/20 placeholder:uppercase focus-visible:ring-0"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              <div>
                <select
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="h-15 w-full rounded-xl border-0 border-b-foreground/25 bg-muted shadow-none text-foreground/80 uppercase focus-visible:ring-0 focus:outline-none"
                >
                  <option value="Allgemein">Allgemein</option>
                  <option value="Mitgliedschaft">Mitgliedschaft</option>
                  <option value="Spende">Spende</option>
                  <option value="Sponsoring">Sponsoring</option>
                  <option value="Unterstützen">Unterstützen</option>
                  <option value="Kooperation">Kooperation</option>
                </select>
              </div>
              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Nachricht"
                  className="min-h-52 rounded-xl border-0 border-b-foreground/25 bg-muted shadow-none placeholder:text-foreground/20 placeholder:uppercase focus-visible:ring-0"
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                )}
              </div>
              <div className="flex items-start gap-2 pt-2">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4"
                  aria-invalid={!!errors.privacy}
                />
                <label htmlFor="privacy" className="text-sm text-foreground/70">
                  {site.kontakt.fields.datenschutz} <Link href="/datenschutz" className="underline">Datenschutzhinweise</Link> *
                </label>
              </div>
              {errors.privacy && (
                <p className="text-sm text-red-600">{errors.privacy}</p>
              )}

              <Button type="submit" className="h-15 w-full rounded-xl uppercase">
                Nachricht senden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact18 };

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M-0.0078125 0.867188H21.1133V4.89062H2.00391C0.892865 4.89062 -0.0078125 3.98995 -0.0078125 2.87891V0.867188Z"
        fill="currentColor"
      />
      <path
        d="M16.9316 0.867188H21.1133V19.9404H19.0225C17.8677 19.9404 16.9316 19.0043 16.9316 17.8496V0.867188Z"
        fill="currentColor"
      />
    </svg>
  );
};
