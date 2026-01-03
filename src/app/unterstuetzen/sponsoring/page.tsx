'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';
import Link from 'next/link';
import { useState } from 'react';

export default function SponsoringPage() {
  const [formData, setFormData] = useState({
    name: '',
    unternehmen: '',
    email: '',
    budget: '',
    nachricht: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    unternehmen: '',
    email: '',
    nachricht: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors = {
      name: '',
      unternehmen: '',
      email: '',
      nachricht: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Bitte gib deinen Namen ein.';
    }

    if (!formData.unternehmen.trim()) {
      newErrors.unternehmen = 'Bitte gib dein Unternehmen ein.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Bitte gib deine E-Mail-Adresse ein.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Bitte gib eine gültige E-Mail-Adresse ein.';
    }

    if (!formData.nachricht.trim()) {
      newErrors.nachricht = 'Bitte schreib uns eine Nachricht.';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form Data:', formData);
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          unternehmen: '',
          email: '',
          budget: '',
          nachricht: '',
        });
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  return (
    <main className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header />
      <div id="main-content">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-white pt-24 pb-20">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-primary-900 leading-tight tracking-tight mb-6">
              {site.sponsoring.hero.headline}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              {site.sponsoring.hero.lead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={site.sponsoring.hero.cta1.href}>
                <Button size="lg" variant="primary">
                  {site.sponsoring.hero.cta1.text}
                </Button>
              </Link>
              <Link href={site.sponsoring.hero.cta2.href}>
                <Button size="lg" variant="outline">
                  {site.sponsoring.hero.cta2.text}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Warum Sponsoring? */}
        <Section id="warum" background="gray">
          <SectionHeader
            title="Warum Sponsoring?"
          />
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {site.sponsoring.warum.map((punkt, index) => (
                <li key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 leading-relaxed">{punkt}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Sponsoring-Pakete */}
        <Section id="pakete" background="white">
          <SectionHeader
            title="Sponsoring-Pakete"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {site.sponsoring.pakete.map((paket, index) => (
              <Card key={index} className="border-2 flex flex-col">
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-semibold text-primary-900">{paket.name}</h3>
                    <span className="text-primary-600 font-medium">{paket.betrag}</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {paket.inhalt.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary-600 mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 italic max-w-2xl mx-auto">
            {site.sponsoring.paketeHinweis}
          </p>
        </Section>

        {/* Bestehende Unterstützung */}
        <Section id="unterstuetzer" background="gray">
          <SectionHeader
            title={site.sponsoring.unterstuetzer.ueberschrift}
            subtitle={site.sponsoring.unterstuetzer.text}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-400 text-xs">Logo {index + 1}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Kontaktformular */}
        <Section id="kontakt" background="white">
          <SectionHeader
            title="Sponsoring anfragen"
            subtitle={site.sponsoring.kontakt.text}
          />
          <div className="max-w-2xl mx-auto">
            <Card>
              {submitted ? (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">Danke!</h3>
                  <p className="text-gray-700">{site.sponsoring.kontakt.success}</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
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
                      className={`w-full px-4 py-3 border rounded transition-colors focus:outline-none focus:ring-2 ${
                        errors.name ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary-700 focus:border-primary-700'
                      }`}
                      required
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="unternehmen" className="block text-sm font-medium text-gray-700 mb-2">
                      Unternehmen *
                    </label>
                    <input
                      type="text"
                      id="unternehmen"
                      name="unternehmen"
                      value={formData.unternehmen}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded transition-colors focus:outline-none focus:ring-2 ${
                        errors.unternehmen ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary-700 focus:border-primary-700'
                      }`}
                      required
                    />
                    {errors.unternehmen && (
                      <p className="mt-2 text-sm text-red-600" role="alert">
                        {errors.unternehmen}
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
                      className={`w-full px-4 py-3 border rounded transition-colors focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary-700 focus:border-primary-700'
                      }`}
                      required
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-700 focus:border-primary-700 transition-colors"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="< 2.500">{"< 2.500 €"}</option>
                      <option value="2.500–7.500">2.500–7.500 €</option>
                      <option value="7.500–15.000">7.500–15.000 €</option>
                      <option value="> 15.000">{"> 15.000 €"}</option>
                      <option value="individuell">individuell</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="nachricht" className="block text-sm font-medium text-gray-700 mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      rows={5}
                      value={formData.nachricht}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded transition-colors resize-none focus:outline-none focus:ring-2 ${
                        errors.nachricht ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary-700 focus:border-primary-700'
                      }`}
                      required
                    />
                    {errors.nachricht && (
                      <p className="mt-2 text-sm text-red-600" role="alert">
                        {errors.nachricht}
                      </p>
                    )}
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Anfrage senden
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </Section>
      </div>
      <Footer />
    </main>
  );
}
