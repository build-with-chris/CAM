'use client';

import React, { useState, useEffect } from 'react';
import { Section, SectionHeader } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
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
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const subjectParam = params.get('subject');
    if (subjectParam) {
      setSubject(decodeURIComponent(subjectParam));
    }
  }, []);

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
      newErrors.privacy = 'Bitte bestätige, dass du die Datenschutzhinweise gelesen hast.';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  return (
    <Section id="kontakt" background="white">
      <SectionHeader
        kicker="Kontakt"
        title="Schreib uns"
        subtitle="Wir melden uns zeitnah zurück."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Form */}
        <Card>
          {submitted ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-primary-900 mb-2">Danke!</h3>
              <p className="text-gray-700">Deine Nachricht ist bei uns gelandet (Demo).</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded transition-colors ${
                    errors.name ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-primary-700 focus:border-primary-700'
                  }`}
                  placeholder="Dein Name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded transition-colors ${
                    errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-primary-700 focus:border-primary-700'
                  }`}
                  placeholder="deine@email.de"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Betreff *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary-700 focus:border-primary-700 transition-colors"
                >
                  <option value="Allgemein">Allgemein</option>
                  <option value="Mitgliedschaft">Mitgliedschaft</option>
                  <option value="Unterstützen">Unterstützen</option>
                  <option value="Kooperation">Kooperation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded transition-colors resize-none ${
                    errors.message ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-2 focus:ring-primary-700 focus:border-primary-700'
                  }`}
                  placeholder="Deine Nachricht an uns..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              <div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-primary-900 focus:ring-primary-700 border-gray-300 rounded"
                    aria-invalid={!!errors.privacy}
                    aria-describedby={errors.privacy ? 'privacy-error' : undefined}
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-700">
                    Ich habe die <a href="#datenschutz" className="text-primary-900 hover:text-primary-700 underline">Datenschutzhinweise</a> gelesen. *
                  </label>
                </div>
                {errors.privacy && (
                  <p id="privacy-error" className="mt-2 text-sm text-red-600">
                    {errors.privacy}
                  </p>
                )}
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Nachricht senden
              </Button>
            </form>
          )}
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <Card>
            <h3 className="text-xl font-bold text-primary-900 mb-4">Direkter Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">E-Mail</p>
                  <a href="mailto:info@circus-akademie-muenchen.de" className="text-primary-700 hover:text-primary-800 focus:outline-none focus:underline">
                    info@circus-akademie-muenchen.de
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Adresse</p>
                  <p className="text-gray-700">
                    Pepe Dome / Geodom<br />
                    Ostpark<br />
                    81735 München
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-primary-50">
            <h3 className="text-xl font-bold text-primary-900 mb-3">Öffnungszeiten</h3>
            <p className="text-gray-700 mb-4">
              Unsere Trainingszeiten variieren je nach Programm.
              Bitte kontaktiere uns für aktuelle Zeiten oder schaue in unserem Trainingsplan nach.
            </p>
            <p className="text-sm text-gray-600 italic">
              Termine außerhalb der regulären Zeiten sind nach Vereinbarung möglich.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
};
