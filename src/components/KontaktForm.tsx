"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { site } from "@/content/site";

import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const BETREFFE = ["Allgemein", "Mitgliedschaft", "Sponsoring", "Unterstützen", "Kooperation"];

const LEER = {
  name: "",
  email: "",
  message: "",
  privacy: false,
  website: "", // Honeypot-Feld (sollte leer bleiben)
};

const KEINE_FEHLER = { name: "", email: "", message: "", privacy: "" };

export function KontaktForm() {
  const searchParams = useSearchParams();
  // Ein Betreff aus der Adresse (?subject=...) ist vorausgewählt.
  const [subject, setSubject] = useState(() => searchParams.get("subject") || "Allgemein");
  const [formData, setFormData] = useState(LEER);
  const [errors, setErrors] = useState(KEINE_FEHLER);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const betreffe = BETREFFE.includes(subject) ? BETREFFE : [...BETREFFE, subject];

  const validateForm = (): boolean => {
    const newErrors = { ...KEINE_FEHLER };

    if (!formData.name.trim()) {
      newErrors.name = "Bitte geben Sie Ihren Namen ein.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Bitte schreiben Sie uns eine Nachricht.";
    }

    if (!formData.privacy) {
      newErrors.privacy = "Bitte bestätigen Sie die Datenschutzhinweise.";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: subject,
          message: formData.message,
          website: formData.website, // Honeypot
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Fehler beim Senden der Nachricht");
      }

      setSubmitted(true);
      setFormData(LEER);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
      if (name === "privacy") {
        setErrors({ ...errors, privacy: "" });
      }
    } else {
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: "" });
    }
  };

  if (submitted) {
    return (
      <div className="py-8 text-center" role="status">
        <h2 className="mb-3 text-3xl font-bold">Danke!</h2>
        <p className="text-lg text-ink-soft">{site.kontakt.success}</p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          {site.kontakt.fields.name} *
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="mt-2 text-sm text-destructive" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          {site.kontakt.fields.email} *
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-destructive" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Honeypot-Feld: für Menschen unsichtbar, Bots füllen es aus */}
      <div className="pointer-events-none absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website">Website (nicht ausfüllen)</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium">
          Betreff
        </label>
        <Select
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          {betreffe.map((betreff) => (
            <option key={betreff} value={betreff}>
              {betreff}
            </option>
          ))}
        </Select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          {site.kontakt.fields.nachricht} *
        </label>
        <Textarea
          id="message"
          name="message"
          rows={7}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-2 text-sm text-destructive" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            className="mt-1 h-4 w-4 accent-dome"
            aria-invalid={!!errors.privacy}
          />
          <label htmlFor="privacy" className="text-sm text-ink-soft">
            {site.kontakt.fields.datenschutz}{" "}
            <Link href="/datenschutz" className="text-dome underline hover:no-underline">
              Datenschutzhinweise
            </Link>{" "}
            *
          </label>
        </div>
        {errors.privacy && (
          <p className="mt-2 text-sm text-destructive" role="alert">
            {errors.privacy}
          </p>
        )}
      </div>

      {submitError && (
        <p className="rounded-control border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive" role="alert">
          {submitError}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
      </Button>
    </form>
  );
}
