'use client';

import React, { useState } from 'react';
import { Modal } from './Modal';
import Image from 'next/image';

interface Angebot {
  id: string;
  title: string;
  teaser: string;
  details: string;
  bullets: readonly string[];
  image: string;
  volltext?: string;
  cta?: string;
  ctaLink?: string;
}

interface AngebotModalProps {
  angebot: Angebot;
  children: React.ReactNode;
}

export const AngebotModal: React.FC<AngebotModalProps> = ({ angebot, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)}>
        {children}
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={angebot.title}>
        <div className="space-y-6">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src={angebot.image}
              alt={angebot.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed text-lg">
              {angebot.details}
            </p>
            {angebot.volltext && (
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  {angebot.volltext}
                </p>
              </div>
            )}
            <div>
              <h3 className="text-lg font-medium text-primary-900 mb-3">Was wir bieten:</h3>
              <ul className="space-y-2">
                {angebot.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-gray-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

