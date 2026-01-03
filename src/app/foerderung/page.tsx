'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { site } from '@/content/site';
import Link from 'next/link';
import { useState } from 'react';

export default function FoerderungPage() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    nachricht: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    organisation: '',
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
      organisation: '',
      email: '',
      nachricht: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Bitte gib deinen Namen ein.';
    }

    if (!formData.organisation.trim()) {
      newErrors.organisation = 'Bitte gib deine Organisation ein.';
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
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          organisation: '',
          email: '',
          nachricht: '',
        });
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
              {site.foerderung.hero.headline}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              {site.foerderung.hero.lead}
            </p>
            <Link href={site.foerderung.hero.cta.href}>
              <Button size="lg" variant="primary">
                {site.foerderung.hero.cta.text}
              </Button>
            </Link>
          </div>
        </section>

        {/* Öffentlicher Mehrwert */}
        <Section id="mehrwert" background="gray">
          <SectionHeader
            title="Öffentlicher Mehrwert"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {site.foerderung.mehrwert.map((punkt, index) => (
              <Card key={index} hover>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <p className="text-gray-700 leading-relaxed">{punkt}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Finanzplan 2026 */}
        <Section id="finanzplan" background="white">
          <SectionHeader
            title={site.foerderung.finanzplan.ueberschrift}
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                {site.foerderung.finanzplan.items.map((item, index) => (
                  <div key={index} className="flex items-start justify-between pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                    <div className="flex-1">
                      <p className="font-medium text-primary-900">{item.kategorie}</p>
                      {item.beschreibung && (
                        <p className="text-sm text-gray-600 mt-1">{item.beschreibung}</p>
                      )}
                    </div>
                    <p className="text-xl font-bold text-primary-600 ml-4">{item.betrag}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-gray-600 italic max-w-2xl mx-auto">
              {site.foerderung.finanzplan.zusatztext}
            </p>
          </div>
        </Section>

        {/* Wofür Förderung eingesetzt wird */}
        <Section id="einsatz" background="gray">
          <SectionHeader
            title="Wofür Förderung konkret eingesetzt wird"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {site.foerderung.einsatz.map((item, index) => (
                <Card key={index}>
                  <h4 className="text-lg font-medium text-primary-900 mb-3">
                    {item.kategorie}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.beschreibung}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Unterlagen */}
        <Section id="unterlagen" background="white">
          <SectionHeader
            title="Unterlagen"
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {site.foerderung.unterlagen.map((unterlage, index) => (
                <Card key={index} hover className="cursor-pointer">
                  <Link href={unterlage.link} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <svg className="w-8 h-8 text-primary-600 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      <span className="text-gray-700 font-medium">{unterlage.titel}</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Kontakt */}
        <Section id="kontakt" background="gray">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-normal text-primary-900 mb-4">
                Kontakt
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {site.foerderung.kontakt.text}
              </p>
            </div>
            <Card>
              {submitted ? (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">Danke!</h3>
                  <p className="text-gray-700">Wir melden uns kurzfristig.</p>
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
                    <label htmlFor="organisation" className="block text-sm font-medium text-gray-700 mb-2">
                      Organisation *
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded transition-colors focus:outline-none focus:ring-2 ${
                        errors.organisation ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary-700 focus:border-primary-700'
                      }`}
                      required
                    />
                    {errors.organisation && (
                      <p className="mt-2 text-sm text-red-600" role="alert">
                        {errors.organisation}
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
                    Nachricht senden
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
