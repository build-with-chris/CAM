'use client';

import { cn } from "@/lib/utils";
import { site } from "@/content/site";

interface About6Props {
  className?: string;
}

// Fisher-Yates Shuffle Algorithmus
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const About6 = ({ className }: About6Props) => {
  // Hole alle verfügbaren Disziplinen und wähle 6 zufällige aus
  const shuffledDisziplinen = shuffleArray([...site.disziplinen]);
  const selectedDisziplinen = shuffledDisziplinen.slice(0, 6);
  const images = selectedDisziplinen.map(d => d.image);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-center justify-start gap-6 lg:flex-row">
          <div className="flex w-full flex-col items-start justify-start gap-24 lg:w-1/2">
            <div className="pr-6">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:mb-10 lg:text-6xl">
                {site.verein.wofuerWirStehen.headline}
              </h1>
              <p className="mb-9 lg:text-xl">
                {site.verein.wofuerWirStehen.text1}
              </p>
              <p className="text-muted-foreground">
                {site.verein.wofuerWirStehen.text2}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <img
                src={images[0] || '/Cam Bilder /EinMannEinKofferEinWanndazirkus.webp'}
                alt={selectedDisziplinen[0]?.name || "Zeitgenössischer Zirkus"}
                className="aspect-[0.7] w-full rounded-lg object-cover md:w-1/2"
              />
              <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                <img
                  src={images[1] || '/Cam Bilder /Clownerie.webp'}
                  alt={selectedDisziplinen[1]?.name || "Zirkuskunst"}
                  className="aspect-[1.1] rounded-lg object-cover"
                />
                <img
                  src={images[2] || '/Cam Bilder /Tellerdrehen.webp'}
                  alt={selectedDisziplinen[2]?.name || "Artistik"}
                  className="aspect-[0.7] rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-12 pt-12 lg:w-1/2 lg:pt-48">
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <img
                src={images[3] || '/Cam Bilder /Breakdance.webp'}
                alt={selectedDisziplinen[3]?.name || "Luftartistik"}
                className="aspect-[0.9] w-full rounded-lg object-cover md:w-1/2"
              />
              <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                <img
                  src={images[4] || '/Cam Bilder /Contemporary dance.webp'}
                  alt={selectedDisziplinen[4]?.name || "Partnerakrobatik"}
                  className="aspect-[0.8] rounded-lg object-cover"
                />
                <img
                  src={images[5] || '/Cam Bilder /Chienese Pole.webp'}
                  alt={selectedDisziplinen[5]?.name || "Cyr Wheel"}
                  className="aspect-[0.9] rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="px-8">
              <h2 className="mb-8 text-2xl font-semibold lg:mb-6">
                {site.verein.wofuerWirStehen.workplace.headline}
              </h2>
              <p className="mb-9 lg:text-xl">
                {site.verein.wofuerWirStehen.workplace.text1}
              </p>
              <p className="text-muted-foreground">
                {site.verein.wofuerWirStehen.workplace.text2}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Über den Verein */}
      <div className="container mt-32">
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-normal">Über den Verein</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Name</p>
                <p className="font-medium">{site.verein.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Sitz</p>
                <p className="font-medium">{site.verein.details.sitz}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Geschäftsjahr</p>
                <p className="font-medium">{site.verein.details.geschaeftsjahr}</p>
              </div>
            </div>
            <div className="pt-6 border-t">
              <h4 className="text-lg font-medium mb-3">Selbstverständnis</h4>
              <p className="text-muted-foreground leading-relaxed">
                {site.verein.details.selbstverstaendnis}
              </p>
            </div>
          </div>

          {/* Zweck und Gemeinnützigkeit */}
          <div className="space-y-6 pt-8 border-t">
            <h3 className="text-2xl font-normal">Zweck und Gemeinnützigkeit</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-3">Gemeinnützige Zwecke</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {site.verein.details.gemeinnuetzigkeit.zweck}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">Selbstlosigkeit und Mittelverwendung</h4>
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  {site.verein.details.gemeinnuetzigkeit.selbstlosigkeit.map((punkt, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>{punkt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About6 };
