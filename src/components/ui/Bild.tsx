import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

type BildProps = Omit<ImageProps, 'alt' | 'width' | 'height'> & {
  /** Beschreibt, was auf dem Bild zu sehen ist. Am Bild geschrieben, nicht am Dateinamen. */
  alt: string;
  /** Maße der Datei, am Bild ausgelesen. Damit springt beim Laden nichts. */
  width: number;
  height: number;
  /** Name der Fotografin oder des Fotografen. Bleibt leer, bis er vorliegt. */
  credit?: string;
  /** Bildausschnitt, zum Beispiel "50% 80%". */
  fokus?: string;
  /** Klassen für den Rahmen. Er bestimmt Größe und Seitenverhältnis, das Bild füllt ihn. */
  rahmenClassName?: string;
};

/** Inhaltsbild über next/image. Der Rahmen gibt die Form vor, das Bild wird passend beschnitten. */
export function Bild({ alt, credit, fokus, rahmenClassName, className, style, ...props }: BildProps) {
  return (
    <figure className={cn('relative overflow-hidden', rahmenClassName)}>
      <Image
        alt={alt}
        className={cn('h-full w-full object-cover', className)}
        style={fokus ? { objectPosition: fokus, ...style } : style}
        {...props}
      />
      {credit ? (
        <figcaption className="absolute bottom-0 right-0 rounded-tl-md bg-night/70 px-2 py-1 text-xs text-white">
          Foto: {credit}
        </figcaption>
      ) : null}
    </figure>
  );
}
