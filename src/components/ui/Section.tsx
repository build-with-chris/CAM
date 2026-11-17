import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** white: Standard. gray: abgesetzte Fläche. primary: vollflächig DOME Blue mit weißer Schrift. */
  background?: 'white' | 'gray' | 'primary';
}

const bgStyles = {
  white: 'bg-background',
  gray: 'bg-mist',
  primary: 'bg-dome text-white',
};

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  background = 'white',
}) => {
  return (
    <section id={id} className={cn('py-16 md:py-24', bgStyles[background], className)}>
      <div className="wrap">{children}</div>
    </section>
  );
};

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  /** h1 für den Seitentitel, sonst h2. */
  as?: 'h1' | 'h2';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  subtitle,
  centered = false,
  as: Heading = 'h2',
  className,
}) => {
  return (
    <div className={cn('mb-10 md:mb-12', centered && 'text-center', className)}>
      {kicker && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-dome">
          {kicker}
        </p>
      )}
      <Heading
        className={cn(
          'font-bold',
          Heading === 'h1' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-[2.75rem]'
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p className={cn('mt-4 max-w-2xl text-lg text-ink-muted', centered && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
