import type { Metadata } from "next";
import { GoldHeading } from "@/components/GoldHeading";
import { RevealSection } from "@/components/RevealSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Sites premium, manutenção contínua e sistemas de marketing para pequenos negócios. Conheça nossos serviços.",
};

const services = [
  {
    title: "Desenvolvimento de sites",
    description:
      "Sites sob medida com design premium, código limpo e performance otimizada. Mobile-first, SEO técnico, integração com WhatsApp e conformidade com normas profissionais.",
    includes: [
      "Design personalizado para seu negócio",
      "Desenvolvimento responsivo (mobile-first)",
      "Otimização para Google (SEO técnico)",
      "Integração com WhatsApp para contato direto",
      "Sistema de conteúdo auto-atualizável",
      "Configuração de domínio próprio",
      "Conformidade com normas de publicidade",
    ],
  },
  {
    title: "Manutenção e suporte",
    description:
      "Hospedagem, atualizações de segurança, suporte técnico e monitoramento contínuo. Você foca no negócio, nós cuidamos da parte técnica.",
    includes: [
      "Hospedagem em infraestrutura de alta performance",
      "Atualizações de segurança e manutenção",
      "Suporte técnico por WhatsApp",
      "Monitoramento de uptime e performance",
      "Backups regulares",
      "Certificado SSL incluso",
    ],
  },
  {
    title: "Sistemas de marketing",
    description:
      "Automações, landing pages e ferramentas que transformam visitantes em clientes. Do tráfego orgânico à conversão por WhatsApp.",
    includes: [
      "Landing pages otimizadas para conversão",
      "Estrutura de conteúdo para SEO",
      "Integração com redes sociais",
      "Formulários de contato e captura de leads",
      "Análise de performance e métricas",
      "Estratégia de presença digital",
    ],
  },
];

export default function ServicosPage() {
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
            Nossos serviços
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-text-muted leading-relaxed">
            Do desenvolvimento ao suporte contínuo — tudo que seu negócio
            precisa para ter presença digital de verdade.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <RevealSection
          key={service.title}
          className={i % 2 === 0 ? "bg-bg-card" : ""}
        >
          <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
            <GoldHeading>{service.title}</GoldHeading>
            <p className="mt-6 text-text-muted leading-relaxed max-w-2xl">
              {service.description}
            </p>
            <ul className="mt-8 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-text-muted">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>
      ))}

      {/* How engagement works */}
      <RevealSection className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <GoldHeading>Como funciona o engajamento</GoldHeading>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Conversa inicial",
              text: "Entendemos seu negócio, público e objetivos em uma conversa sem compromisso.",
            },
            {
              number: "02",
              title: "Proposta e desenvolvimento",
              text: "Apresentamos escopo, prazo e investimento. Após aprovação, desenvolvemos seu projeto.",
            },
            {
              number: "03",
              title: "Entrega e suporte",
              text: "Entregamos o projeto pronto e seguimos com manutenção e suporte contínuo.",
            },
          ].map((step) => (
            <div key={step.number} className="relative pl-16">
              <span className="absolute left-0 top-0 font-heading text-4xl font-bold text-accent/30">
                {step.number}
              </span>
              <h3 className="font-heading text-lg font-bold">{step.title}</h3>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* CTA */}
      <section className="bg-accent">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-on-accent">
            Vamos conversar sobre seu projeto?
          </h2>
          <p className="mt-4 text-text-on-accent/80">
            Conte-nos o que precisa — sem compromisso.
          </p>
          <div className="mt-8">
            <WhatsAppButton
              label="Fale Conosco"
              message="Olá! Gostaria de saber mais sobre os serviços da LK Digital."
              variant="primary"
              className="!bg-bg-dark !text-text-primary hover:!bg-bg-card"
            />
          </div>
        </div>
      </section>
    </>
  );
}
