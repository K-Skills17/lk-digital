import type { SegmentConfig } from "@/config/segments";
import { whatsappUrl } from "@/config/agency";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { GoldHeading } from "@/components/GoldHeading";
import { RevealSection } from "@/components/RevealSection";
import { Accordion } from "./Accordion";

export function LandingPage({ segment }: { segment: SegmentConfig }) {
  const waUrl = whatsappUrl(segment.hero.whatsappMessage);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(196,150,58,0.12),transparent)]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
          <h1 className="font-heading text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.1] gold-line revealed">
            {segment.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-text-muted leading-relaxed">
            {segment.hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton
              label={segment.hero.ctaLabel}
              message={segment.hero.whatsappMessage}
            />
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-accent px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-accent hover:bg-accent-muted transition-colors duration-200"
            >
              {segment.hero.secondaryLabel}
            </a>
          </div>
          {segment.compliance && (
            <p className="mt-6 text-xs text-text-muted">
              {segment.compliance.heading}
            </p>
          )}
        </div>
      </section>

      {/* Problems */}
      <RevealSection className="bg-bg-card">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <GoldHeading>{segment.problems.heading}</GoldHeading>
          <ul className="mt-12 space-y-6">
            {segment.problems.items.map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-1 shrink-0 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                <p className="text-text-muted leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </RevealSection>

      {/* Features */}
      <RevealSection className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <GoldHeading>{segment.features.heading}</GoldHeading>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {segment.features.items.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-sm border border-bg-card-hover bg-bg-card"
            >
              <h3 className="font-heading text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* Demo */}
      <RevealSection className="bg-bg-card" id="demo">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <GoldHeading>{segment.demo.heading}</GoldHeading>
          <p className="mt-4 text-text-muted leading-relaxed">
            {segment.demo.description}
          </p>
          <div className="mt-8 rounded-sm border border-bg-card-hover overflow-hidden">
            <div className="aspect-video bg-bg-dark flex items-center justify-center">
              {/* TODO: Replace with next/image screenshot */}
              <p className="text-text-muted text-sm">{segment.demo.screenshotAlt}</p>
            </div>
          </div>
          {segment.demo.url !== "#" && (
            <a
              href={segment.demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
            >
              Visitar site ao vivo
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
        </div>
      </RevealSection>

      {/* Process */}
      <RevealSection className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <GoldHeading>{segment.process.heading}</GoldHeading>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {segment.process.steps.map((step) => (
            <div key={step.number} className="relative pl-16">
              <span className="absolute left-0 top-0 font-heading text-4xl font-bold text-accent/30">
                {step.number}
              </span>
              <h3 className="font-heading text-lg font-bold">{step.title}</h3>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* Pricing */}
      <RevealSection className="bg-bg-card">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
          <GoldHeading>{segment.pricing.heading}</GoldHeading>
          <div className="mt-12 max-w-md mx-auto rounded-sm border border-accent/30 bg-bg-dark p-8">
            <p className="text-sm text-text-muted uppercase tracking-wider">
              A partir de
            </p>
            <p className="mt-2 font-heading text-4xl font-bold text-accent">
              R$ {segment.pricing.buildFee}
            </p>
            <p className="mt-1 text-sm text-text-muted">
              {segment.pricing.paymentTerms}
            </p>
            <div className="mt-6 border-t border-bg-card-hover pt-6">
              <p className="text-sm text-text-muted">
                Manutenção mensal: <span className="text-text-primary font-semibold">R$ {segment.pricing.monthlyFee}/mês</span>
              </p>
              <p className="mt-1 text-xs text-text-muted">
                Hospedagem, suporte e sistema de atualização incluso.
              </p>
            </div>
            <div className="mt-8">
              <WhatsAppButton
                label={segment.hero.ctaLabel}
                message={segment.hero.whatsappMessage}
              />
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Compliance */}
      <RevealSection className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <GoldHeading>{segment.compliance.heading}</GoldHeading>
        <p className="mt-6 text-text-muted leading-relaxed max-w-2xl">
          {segment.compliance.text}
        </p>
      </RevealSection>

      {/* FAQ */}
      <RevealSection className="bg-bg-card">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <GoldHeading>Perguntas frequentes</GoldHeading>
          <div className="mt-12">
            <Accordion items={segment.faqs} />
          </div>
        </div>
      </RevealSection>

      {/* Final CTA band */}
      <section className="bg-accent">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-text-on-accent/70">
            {segment.finalCta.scarcity}
          </p>
          <h2 className="mt-4 font-heading text-2xl md:text-3xl font-bold text-text-on-accent">
            Comece agora — fale conosco pelo WhatsApp
          </h2>
          <div className="mt-8">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-bg-dark px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-text-primary hover:bg-bg-card transition-colors duration-200"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {segment.finalCta.ctaLabel}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
