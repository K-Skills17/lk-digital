import { agency } from "@/config/agency";
import { workItems } from "@/config/work";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { GoldHeading } from "@/components/GoldHeading";
import { RevealSection } from "@/components/RevealSection";
import { ogMetadata } from "@/lib/og-metadata";

export const metadata = ogMetadata({
  title: "LK Digital — Sites Premium para Pequenos Negócios",
  description:
    "Desenvolvemos sites premium e sistemas de marketing para pequenos negócios que querem crescer com presença digital de verdade.",
  ogTitle: "Sites premium que transformam visitantes em clientes.",
  ogSubtitle: "Sites sob medida e sistemas de marketing para pequenos negócios.",
});

const differentiators = [
  {
    title: "Qualidade premium",
    description:
      "Cada site é construído sob medida com código limpo, design intencional e performance otimizada.",
  },
  {
    title: "Conformidade com normas",
    description:
      "Sites que respeitam as regras de publicidade da sua categoria profissional — sem surpresas.",
  },
  {
    title: "Conteúdo auto-atualizável",
    description:
      "Você mesmo atualiza textos, fotos e informações sem depender de desenvolvedor.",
  },
  {
    title: "Velocidade e performance",
    description:
      "Sites rápidos que carregam instantaneamente e posicionam melhor no Google.",
  },
];

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos seu negócio, público e objetivos para criar a estratégia certa.",
  },
  {
    number: "02",
    title: "Desenvolvimento",
    description:
      "Construímos seu site sob medida com design premium e performance otimizada.",
  },
  {
    number: "03",
    title: "Suporte contínuo",
    description:
      "Hospedagem, manutenção e suporte — você foca no negócio, nós cuidamos do site.",
  },
];

export default function HomePage() {
  const featured = workItems[0];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Gold gradient background */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(196,150,58,0.12),transparent)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h1 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] max-w-3xl gold-line revealed">
            Sites premium que transformam visitantes em clientes.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-text-muted leading-relaxed">
            Desenvolvemos sites sob medida e sistemas de marketing para pequenos
            negócios que querem crescer com presença digital de verdade.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <WhatsAppButton
              label="Fale Conosco no WhatsApp"
              message={agency.whatsapp.defaultMessage}
            />
            <a
              href="#trabalho"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-accent px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-accent hover:bg-accent-muted transition-colors duration-200"
            >
              Ver nosso trabalho
            </a>
          </div>
        </div>
      </section>

      {/* What we do */}
      <RevealSection className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <GoldHeading>O que fazemos</GoldHeading>
        <p className="mt-6 max-w-2xl text-text-muted leading-relaxed">
          Criamos sites profissionais e sistemas de marketing digital para
          pequenos negócios. Do design ao SEO, da hospedagem ao suporte — tudo
          pensado para gerar resultado real.
        </p>
      </RevealSection>

      {/* Why LK Digital */}
      <RevealSection className="bg-bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <GoldHeading>Por que a LK Digital</GoldHeading>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item.title} className="p-6 rounded-sm bg-bg-dark border border-bg-card-hover">
                <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Featured work */}
      <RevealSection className="mx-auto max-w-6xl px-6 py-20 md:py-28" id="trabalho">
        <GoldHeading>Nosso trabalho</GoldHeading>
        {featured && (
          <div className="mt-12 rounded-sm border border-bg-card-hover overflow-hidden">
            <div className="aspect-video bg-bg-card flex items-center justify-center">
              {/* TODO: Replace with actual screenshot using next/image */}
              <div className="text-center p-8">
                <p className="text-text-muted text-sm uppercase tracking-wider">
                  {featured.client}
                </p>
                <p className="mt-2 text-text-primary font-heading text-xl font-bold">
                  {featured.title}
                </p>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-text-muted leading-relaxed">
                {featured.description}
              </p>
              <a
                href={featured.url}
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
          </div>
        )}
      </RevealSection>

      {/* How we work */}
      <RevealSection className="bg-bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <GoldHeading>Como trabalhamos</GoldHeading>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
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
        </div>
      </RevealSection>

      {/* Final CTA band */}
      <section className="bg-accent">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-on-accent">
            Pronto para transformar sua presença digital?
          </h2>
          <p className="mt-4 text-text-on-accent/80">
            Vamos conversar sobre o que seu negócio precisa.
          </p>
          <div className="mt-8">
            <a
              href={`https://wa.me/${agency.whatsapp.number}?text=${encodeURIComponent(agency.whatsapp.defaultMessage)}`}
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
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
