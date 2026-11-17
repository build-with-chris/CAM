'use client';

import { useState } from 'react';
import { CircleCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input, Select } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { site } from '@/content/site';

const LEER = {
  name: '',
  unternehmen: '',
  email: '',
  budget: '',
  nachricht: '',
  website: '', // Honeypot-Feld (sollte leer bleiben)
};

const KEINE_FEHLER = { name: '', unternehmen: '', email: '', nachricht: '' };

export function SponsoringForm() {
  const [formData, setFormData] = useState(LEER);
  const [errors, setErrors] = useState(KEINE_FEHLER);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = (): boolean => {
    const newErrors = { ...KEINE_FEHLER };

    if (!formData.name.trim()) {
      newErrors.name = 'Bitte gib deinen Namen ein.';
    }

    if (!formData.unternehmen.trim()) {
      newErrors.unternehmen = 'Bitte gib dein Unternehmen ein.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Bitte gib deine E-Mail-Adresse ein.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte gib eine gültige E-Mail-Adresse ein.';
    }

    if (!formData.nachricht.trim()) {
      newErrors.nachricht = 'Bitte schreib uns eine Nachricht.';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Unternehmen und Budget stehen in der Nachricht, damit die Route /api/contact unverändert bleibt.
      const message = [
        `Unternehmen: ${formData.unternehmen.trim()}`,
        `Budget: ${formData.budget || 'keine Angabe'}`,
        '',
        formData.nachricht.trim(),
      ].join('\n');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: 'Sponsoring',
          message,
          website: formData.website, // Honeypot
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Fehler beim Senden der Anfrage.');
      }

      setSubmitted(true);
      setFormData(LEER);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Fehler beim Senden der Anfrage. Bitte versuche es später erneut.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  if (submitted) {
    return (
      <div className="py-8 text-center" role="status">
        <CircleCheck aria-hidden="true" className="mx-auto mb-4 size-14 text-dome" />
        <h3 className="mb-2 text-2xl font-bold">Danke!</h3>
        <p className="text-ink-soft">{site.sponsoring.kontakt.success}</p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
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
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Name *
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          required
        />
        {errors.name && (
          <p className="mt-2 text-sm text-destructive" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="unternehmen" className="mb-2 block text-sm font-medium">
          Unternehmen *
        </label>
        <Input
          type="text"
          id="unternehmen"
          name="unternehmen"
          autoComplete="organization"
          value={formData.unternehmen}
          onChange={handleChange}
          aria-invalid={!!errors.unternehmen}
          required
        />
        {errors.unternehmen && (
          <p className="mt-2 text-sm text-destructive" role="alert">
            {errors.unternehmen}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          E-Mail *
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          required
        />
        {errors.email && (
          <p className="mt-2 text-sm text-destructive" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="budget" className="mb-2 block text-sm font-medium">
          Budget
        </label>
        <Select id="budget" name="budget" value={formData.budget} onChange={handleChange}>
          <option value="">Bitte wählen</option>
          <option value="< 2.500 €">{'< 2.500 €'}</option>
          <option value="2.500–7.500 €">2.500–7.500 €</option>
          <option value="7.500–15.000 €">7.500–15.000 €</option>
          <option value="> 15.000 €">{'> 15.000 €'}</option>
          <option value="individuell">individuell</option>
        </Select>
      </div>

      <div>
        <label htmlFor="nachricht" className="mb-2 block text-sm font-medium">
          Nachricht *
        </label>
        <Textarea
          id="nachricht"
          name="nachricht"
          rows={5}
          value={formData.nachricht}
          onChange={handleChange}
          aria-invalid={!!errors.nachricht}
          required
        />
        {errors.nachricht && (
          <p className="mt-2 text-sm text-destructive" role="alert">
            {errors.nachricht}
          </p>
        )}
      </div>

      {submitError && (
        <p className="rounded-control border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive" role="alert">
          {submitError}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
      </Button>
    </form>
  );
}
