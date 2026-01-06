import { cn } from "@/lib/utils";
import { site } from "@/content/site";

import { Badge } from "@/components/ui/badge";

interface Faq6Props {
  className?: string;
}

const Faq6 = ({ className }: Faq6Props) => {
  const faqs = site.spenden.faq;

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="text-center">
          <Badge className="text-xs font-medium">FAQ</Badge>
          <h1 className="mt-4 text-4xl font-semibold">
            Häufige Fragen
          </h1>
          <p className="mt-6 font-medium text-muted-foreground">
            Finde Antworten auf die häufigsten Fragen zu Spenden und Unterstützung.
          </p>
        </div>
        <div className="mx-auto mt-14 grid gap-8 md:grid-cols-2 md:gap-12">
          {faqs.map((faq, index) => (
            <div key={index} className="flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{faq.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Faq6 };
