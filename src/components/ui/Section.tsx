import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'primary';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'white'
}) => {
  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
  };

  return (
    <section
      id={id}
      className={`py-20 md:py-32 lg:py-40 ${bgStyles[background]} ${className}`}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        {children}
      </div>
    </section>
  );
};

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  subtitle,
  centered = true,
  className = ''
}) => {
  const alignmentStyles = centered ? 'text-center' : '';

  return (
    <div className={`mb-16 md:mb-20 lg:mb-24 ${alignmentStyles} ${className}`}>
      {kicker && (
        <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-3">
          {kicker}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-primary-900 mb-6 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
