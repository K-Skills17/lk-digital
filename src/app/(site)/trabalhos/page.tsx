import { workItems } from "@/config/work";
import { GoldHeading } from "@/components/GoldHeading";
import { RevealSection } from "@/components/RevealSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ogMetadata } from "@/lib/og-metadata";

export const metadata = ogMetadata({
  title: "Trabalhos",
  description:
    "Veja os projetos que desenvolvemos — sites premium para pequenos negócios com foco em performance e resultado.",
  ogTitle: "Nossos Trabalhos",
  ogSubtitle: "Cada projeto é construído sob medida.",
});

export default function TrabalhosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(196,150,58,0.08),transparent)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-32">
          <h1 className="font-heading text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.1] gold-line revealed">
            Nossos trabalhos
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-text-muted leading-relaxed">
            Cada projeto é construído sob medida. Veja o que já entregamos.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="mx-auto max-w-4xl px-6 pb-20 md:pb-28">
        <div className="space-y-12">
          {workItems.map((item) => (
            <RevealSection
              key={item.slug}
              as="article"
              className="rounded-sm border border-bg-card-hover overflow-hidden"
            >
              <div className="aspect-video bg-bg-card flex items-center justify-center">
                {/* TODO: Replace with next/image screenshot */}
                <div className="text-center p-8">
                  <p className="text-text-muted text-sm uppercase tracking-wider">
                    {item.client}
                  </p>
                  <p className="mt-2 text-text-primary font-heading text-xl font-bold">
                    {item.title}
                  </p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm bg-accent-muted px-3 py-1 text-xs text-accent font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-text-muted leading-relaxed">
                  {item.description}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                >
                  Visitar site
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </RevealSection>
          ))}
        </div>

        {workItems.length === 1 && (
          <RevealSection className="mt-16 text-center">
            <p className="text-text-muted">
              Mais projetos em breve. Estamos crescendo com intenção.
            </p>
          </RevealSection>
        )}
      </section>

      {/* CTA */}
      <section className="bg-accent">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-on-accent">
            Quer um resultado assim para seu negócio?
          </h2>
          <div className="mt-8">
            <WhatsAppButton
              label="Fale Conosco"
              variant="primary"
              className="!bg-bg-dark !text-text-primary hover:!bg-bg-card"
            />
          </div>
        </div>
      </section>
    </>
  );
}
