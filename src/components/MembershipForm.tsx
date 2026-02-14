"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const NACHRICHT_MAX = 1000;
const MITGLIEDART_OPTIONS = [
  {
    value: "Aktives Mitglied",
    label: "Aktives Mitglied",
    description:
      "Hat Stimmrecht in der Mitgliederversammlung und unterstützt aktiv und inhaltlich.",
  },
  {
    value: "Fördermitglied",
    label: "Fördermitglied",
    description:
      "Unterstützt den Verein ideell und finanziell und hat kein Stimmrecht.",
  },
] as const;

type FormData = {
  vorname: string;
  nachname: string;
  strasse: string;
  plz: string;
  ort: string;
  email: string;
  telefon: string;
  mitgliedsart: string;
  nachricht: string;
  checkboxAntrag: boolean;
  checkboxDatenschutz: boolean;
  checkboxSatzung: boolean;
  website: string;
};

const initialFormData: FormData = {
  vorname: "",
  nachname: "",
  strasse: "",
  plz: "",
  ort: "",
  email: "",
  telefon: "",
  mitgliedsart: "",
  nachricht: "",
  checkboxAntrag: false,
  checkboxDatenschutz: false,
  checkboxSatzung: false,
  website: "",
};

type Errors = Partial<Record<keyof FormData, string>>;

const inputClass =
  "h-12 rounded-xl border border-input bg-muted/50 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-amber-500 shadow-none";

export function MembershipForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = (): boolean => {
    const e: Errors = {};

    if (!formData.vorname.trim()) e.vorname = "Bitte Vorname angeben.";
    if (!formData.nachname.trim()) e.nachname = "Bitte Nachname angeben.";
    if (!formData.strasse.trim()) e.strasse = "Bitte Straße & Hausnummer angeben.";
    if (!formData.plz.trim()) e.plz = "Bitte PLZ angeben.";
    if (!formData.ort.trim()) e.ort = "Bitte Ort angeben.";
    if (!formData.email.trim()) {
      e.email = "Bitte E-Mail angeben.";
    } else if (!validateEmail(formData.email)) {
      e.email = "Bitte eine gültige E-Mail-Adresse eingeben.";
    }
    if (!formData.mitgliedsart) e.mitgliedsart = "Bitte Mitgliedsart wählen.";
    if (formData.nachricht.length > NACHRICHT_MAX) {
      e.nachricht = `Maximal ${NACHRICHT_MAX} Zeichen.`;
    }
    if (!formData.checkboxAntrag) {
      e.checkboxAntrag = "Bitte den Mitgliedsantrag bestätigen.";
    }
    if (!formData.checkboxDatenschutz) {
      e.checkboxDatenschutz = "Bitte die Datenschutzhinweise bestätigen.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vorname: formData.vorname.trim(),
          nachname: formData.nachname.trim(),
          strasse: formData.strasse.trim(),
          plz: formData.plz.trim(),
          ort: formData.ort.trim(),
          email: formData.email.trim(),
          telefon: formData.telefon.trim() || undefined,
          mitgliedsart: formData.mitgliedsart,
          nachricht: formData.nachricht.trim().slice(0, NACHRICHT_MAX) || undefined,
          checkboxAntrag: formData.checkboxAntrag,
          checkboxDatenschutz: formData.checkboxDatenschutz,
          checkboxSatzung: formData.checkboxSatzung,
          website: formData.website,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Fehler beim Senden des Antrags.");
      }
      setSubmitted(true);
      setFormData(initialFormData);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Fehler beim Senden. Bitte später erneut versuchen."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900">Antrag eingegangen</h2>
        <p className="text-slate-600">
          {site.mitglieder.success}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-foreground" noValidate>
      {/* Honeypot */}
      <div
        className="absolute -left-[9999px] opacity-0 pointer-events-none"
        aria-hidden
      >
        <label htmlFor="membership-website">Website (nicht ausfüllen)</label>
        <Input
          id="membership-website"
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="vorname" className="mb-1 block text-sm font-medium text-slate-700">
            Vorname *
          </label>
          <Input
            id="vorname"
            name="vorname"
            value={formData.vorname}
            onChange={handleChange}
            className={cn(inputClass, errors.vorname && "border-destructive")}
            aria-invalid={!!errors.vorname}
          />
          {errors.vorname && (
            <p className="mt-1 text-sm text-destructive">{errors.vorname}</p>
          )}
        </div>
        <div>
          <label htmlFor="nachname" className="mb-1 block text-sm font-medium text-slate-700">
            Nachname *
          </label>
          <Input
            id="nachname"
            name="nachname"
            value={formData.nachname}
            onChange={handleChange}
            className={cn(inputClass, errors.nachname && "border-destructive")}
            aria-invalid={!!errors.nachname}
          />
          {errors.nachname && (
            <p className="mt-1 text-sm text-destructive">{errors.nachname}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="strasse" className="mb-1 block text-sm font-medium text-slate-700">
          Straße & Hausnummer *
        </label>
        <Input
          id="strasse"
          name="strasse"
          value={formData.strasse}
          onChange={handleChange}
          className={cn(inputClass, errors.strasse && "border-destructive")}
          aria-invalid={!!errors.strasse}
        />
        {errors.strasse && (
          <p className="mt-1 text-sm text-destructive">{errors.strasse}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="plz" className="mb-1 block text-sm font-medium text-slate-700">
            PLZ *
          </label>
          <Input
            id="plz"
            name="plz"
            value={formData.plz}
            onChange={handleChange}
            className={cn(inputClass, errors.plz && "border-destructive")}
            aria-invalid={!!errors.plz}
          />
          {errors.plz && (
            <p className="mt-1 text-sm text-destructive">{errors.plz}</p>
          )}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="ort" className="mb-1 block text-sm font-medium text-slate-700">
            Ort *
          </label>
          <Input
            id="ort"
            name="ort"
            value={formData.ort}
            onChange={handleChange}
            className={cn(inputClass, errors.ort && "border-destructive")}
            aria-invalid={!!errors.ort}
          />
          {errors.ort && (
            <p className="mt-1 text-sm text-destructive">{errors.ort}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
            E-Mail *
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={cn(inputClass, errors.email && "border-destructive")}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="telefon" className="mb-1 block text-sm font-medium text-slate-700">
            Telefon (optional)
          </label>
          <Input
            id="telefon"
            type="tel"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <span className="mb-2 block text-sm font-medium text-slate-700">Mitgliedsart *</span>
        <div className="space-y-3">
          {MITGLIEDART_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className={cn(
                "flex cursor-pointer gap-3 rounded-lg border p-4 transition-colors text-slate-800",
                formData.mitgliedsart === opt.value
                  ? "border-amber-500 bg-amber-50"
                  : "border-slate-200 bg-slate-50/80 hover:bg-slate-100",
                errors.mitgliedsart && "border-red-500"
              )}
            >
              <input
                type="radio"
                name="mitgliedsart"
                value={opt.value}
                checked={formData.mitgliedsart === opt.value}
                onChange={handleChange}
                className="mt-1 h-4 w-4"
                aria-invalid={!!errors.mitgliedsart}
              />
              <div>
                <span className="font-medium">{opt.label}</span>
                <p className="mt-0.5 text-sm text-slate-600">
                  {opt.description}
                </p>
              </div>
            </label>
          ))}
        </div>
        {errors.mitgliedsart && (
          <p className="mt-1 text-sm text-destructive">{errors.mitgliedsart}</p>
        )}
      </div>

      <div>
        <label htmlFor="nachricht" className="mb-1 block text-sm font-medium text-slate-700">
          Nachricht an den Vorstand (optional)
        </label>
        <Textarea
          id="nachricht"
          name="nachricht"
          value={formData.nachricht}
          onChange={handleChange}
          maxLength={NACHRICHT_MAX}
          rows={4}
          className={cn(
            "resize-y rounded-xl border border-input bg-muted/50 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-amber-500",
            errors.nachricht && "border-red-500"
          )}
          aria-invalid={!!errors.nachricht}
        />
        <p className="mt-1 text-xs text-muted-foreground">
          {formData.nachricht.length} / {NACHRICHT_MAX} Zeichen
        </p>
        {errors.nachricht && (
          <p className="mt-1 text-sm text-destructive">{errors.nachricht}</p>
        )}
      </div>

      <div className="space-y-4 border-t border-slate-200 pt-6">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="checkboxAntrag"
            name="checkboxAntrag"
            checked={formData.checkboxAntrag}
            onChange={handleChange}
            className="mt-1 h-4 w-4 accent-amber-500"
            aria-invalid={!!errors.checkboxAntrag}
          />
          <label htmlFor="checkboxAntrag" className="text-sm text-slate-700">
            Ich beantrage hiermit die Mitgliedschaft im Verein. *
          </label>
        </div>
        {errors.checkboxAntrag && (
          <p className="text-sm text-destructive">{errors.checkboxAntrag}</p>
        )}

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="checkboxDatenschutz"
            name="checkboxDatenschutz"
            checked={formData.checkboxDatenschutz}
            onChange={handleChange}
            className="mt-1 h-4 w-4 accent-amber-500"
            aria-invalid={!!errors.checkboxDatenschutz}
          />
          <label htmlFor="checkboxDatenschutz" className="text-sm text-slate-700">
            Ich habe die{" "}
            <Link href="/datenschutz" className="text-amber-600 underline hover:no-underline">
              Datenschutzhinweise
            </Link>{" "}
            gelesen und bin einverstanden. *
          </label>
        </div>
        {errors.checkboxDatenschutz && (
          <p className="text-sm text-destructive">{errors.checkboxDatenschutz}</p>
        )}

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="checkboxSatzung"
            name="checkboxSatzung"
            checked={formData.checkboxSatzung}
            onChange={handleChange}
            className="mt-1 h-4 w-4 accent-amber-500"
          />
          <label htmlFor="checkboxSatzung" className="text-sm text-slate-700">
            Ich erkenne die{" "}
            <Link
              href={site.satzung.download}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 underline hover:no-underline"
            >
              Satzung
            </Link>{" "}
            an. (optional)
          </label>
        </div>
      </div>

      {submitError && (
        <p className="rounded-lg bg-destructive/10 border border-destructive/30 p-3 text-sm text-destructive">
          {submitError}
        </p>
      )}

      <Button
        type="submit"
        className="h-12 w-full rounded-xl uppercase sm:w-auto sm:min-w-[200px] bg-amber-500 text-slate-900 hover:bg-amber-400"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Wird gesendet…" : "Antrag absenden"}
      </Button>
    </form>
  );
}
