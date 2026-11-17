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
  jahresbeitrag: string;
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
  jahresbeitrag: "",
  nachricht: "",
  checkboxAntrag: false,
  checkboxDatenschutz: false,
  checkboxSatzung: false,
  website: "",
};

type Errors = Partial<Record<keyof FormData, string>>;

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
    if (formData.jahresbeitrag.trim()) {
      const betrag = Number(formData.jahresbeitrag.trim().replace(",", "."));
      if (!Number.isFinite(betrag) || betrag < 0) {
        e.jahresbeitrag = "Bitte den Betrag als Zahl in Euro angeben.";
      }
    }
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
          jahresbeitrag: formData.jahresbeitrag.trim() || undefined,
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
      <div className="py-8 text-center" role="status">
        <h2 className="mb-4 text-2xl font-bold">Antrag eingegangen</h2>
        <p className="text-ink-soft">
          {site.mitglieder.success}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
          <label htmlFor="vorname" className="mb-2 block text-sm font-medium">
            Vorname *
          </label>
          <Input
            id="vorname"
            name="vorname"
            value={formData.vorname}
            onChange={handleChange}
            aria-invalid={!!errors.vorname}
          />
          {errors.vorname && (
            <p className="mt-1 text-sm text-destructive">{errors.vorname}</p>
          )}
        </div>
        <div>
          <label htmlFor="nachname" className="mb-2 block text-sm font-medium">
            Nachname *
          </label>
          <Input
            id="nachname"
            name="nachname"
            value={formData.nachname}
            onChange={handleChange}
            aria-invalid={!!errors.nachname}
          />
          {errors.nachname && (
            <p className="mt-1 text-sm text-destructive">{errors.nachname}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="strasse" className="mb-2 block text-sm font-medium">
          Straße & Hausnummer *
        </label>
        <Input
          id="strasse"
          name="strasse"
          value={formData.strasse}
          onChange={handleChange}
          aria-invalid={!!errors.strasse}
        />
        {errors.strasse && (
          <p className="mt-1 text-sm text-destructive">{errors.strasse}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="plz" className="mb-2 block text-sm font-medium">
            PLZ *
          </label>
          <Input
            id="plz"
            name="plz"
            value={formData.plz}
            onChange={handleChange}
            aria-invalid={!!errors.plz}
          />
          {errors.plz && (
            <p className="mt-1 text-sm text-destructive">{errors.plz}</p>
          )}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="ort" className="mb-2 block text-sm font-medium">
            Ort *
          </label>
          <Input
            id="ort"
            name="ort"
            value={formData.ort}
            onChange={handleChange}
            aria-invalid={!!errors.ort}
          />
          {errors.ort && (
            <p className="mt-1 text-sm text-destructive">{errors.ort}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            E-Mail *
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="telefon" className="mb-2 block text-sm font-medium">
            Telefon (optional)
          </label>
          <Input
            id="telefon"
            type="tel"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <span className="mb-2 block text-sm font-medium">Mitgliedsart *</span>
        <div className="space-y-3">
          {MITGLIEDART_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className={cn(
                "flex cursor-pointer gap-3 rounded-control border p-4 transition-colors",
                formData.mitgliedsart === opt.value
                  ? "border-dome bg-dome-tint"
                  : "border-input bg-white hover:bg-mist",
                errors.mitgliedsart && "border-destructive"
              )}
            >
              <input
                type="radio"
                name="mitgliedsart"
                value={opt.value}
                checked={formData.mitgliedsart === opt.value}
                onChange={handleChange}
                className="mt-1 h-4 w-4 accent-dome"
              />
              <div>
                <span className="font-medium">{opt.label}</span>
                <p className="mt-0.5 text-sm text-ink-muted">
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
        <label htmlFor="jahresbeitrag" className="mb-2 block text-sm font-medium">
          Jahresbeitrag in Euro (freiwillig)
        </label>
        <Input
          id="jahresbeitrag"
          name="jahresbeitrag"
          inputMode="decimal"
          value={formData.jahresbeitrag}
          onChange={handleChange}
          className="sm:max-w-60"
          aria-invalid={!!errors.jahresbeitrag}
          aria-describedby="jahresbeitrag-hinweis"
        />
        <p id="jahresbeitrag-hinweis" className="mt-1 text-xs text-ink-muted">
          Den Betrag wählen Sie selbst.
        </p>
        {errors.jahresbeitrag && (
          <p className="mt-1 text-sm text-destructive">{errors.jahresbeitrag}</p>
        )}
      </div>

      <div>
        <label htmlFor="nachricht" className="mb-2 block text-sm font-medium">
          Nachricht an den Vorstand (optional)
        </label>
        <Textarea
          id="nachricht"
          name="nachricht"
          value={formData.nachricht}
          onChange={handleChange}
          maxLength={NACHRICHT_MAX}
          rows={4}
          aria-invalid={!!errors.nachricht}
        />
        <p className="mt-1 text-xs text-ink-muted">
          {formData.nachricht.length} / {NACHRICHT_MAX} Zeichen
        </p>
        {errors.nachricht && (
          <p className="mt-1 text-sm text-destructive">{errors.nachricht}</p>
        )}
      </div>

      <div className="space-y-4 border-t border-line pt-6">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="checkboxAntrag"
            name="checkboxAntrag"
            checked={formData.checkboxAntrag}
            onChange={handleChange}
            className="mt-1 h-4 w-4 accent-dome"
            aria-invalid={!!errors.checkboxAntrag}
          />
          <label htmlFor="checkboxAntrag" className="text-sm text-ink-soft">
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
            className="mt-1 h-4 w-4 accent-dome"
            aria-invalid={!!errors.checkboxDatenschutz}
          />
          <label htmlFor="checkboxDatenschutz" className="text-sm text-ink-soft">
            Ich habe die{" "}
            <Link href="/datenschutz" className="text-dome underline hover:no-underline">
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
            className="mt-1 h-4 w-4 accent-dome"
          />
          <label htmlFor="checkboxSatzung" className="text-sm text-ink-soft">
            Ich erkenne die{" "}
            <a
              href={site.satzung.download}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dome underline hover:no-underline"
            >
              Satzung
            </a>{" "}
            an. (optional)
          </label>
        </div>
      </div>

      {submitError && (
        <p className="rounded-control border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive" role="alert">
          {submitError}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto sm:min-w-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Wird gesendet…" : "Antrag absenden"}
      </Button>
    </form>
  );
}
