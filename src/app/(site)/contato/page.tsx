import type { Metadata } from "next";
import { agency } from "@/config/agency";
import { GoldHeading } from "@/components/GoldHeading";
import { RevealSection } from "@/components/RevealSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a LK Digital. Fale conosco pelo WhatsApp ou envie uma mensagem.",
};

export default function ContatoPage() {
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
            Fale conosco
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-text-muted leading-relaxed">
            Pronto para dar o próximo passo? Escolha a forma que preferir.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20 md:pb-28">
        <div className="grid gap-12 md:grid-cols-2">
          {/* WhatsApp */}
          <RevealSection>
            <GoldHeading as="h2">WhatsApp</GoldHeading>
            <p className="mt-4 text-text-muted leading-relaxed">
              A forma mais rápida de falar conosco. Resposta em até 24 horas em
              dias úteis.
            </p>
            <div className="mt-6">
              <WhatsAppButton label="Abrir WhatsApp" />
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                E-mail
              </h3>
              <a
                href={`mailto:${agency.email}`}
                className="mt-2 block text-accent hover:text-accent-hover transition-colors"
              >
                {agency.email}
              </a>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                Região atendida
              </h3>
              <p className="mt-2 text-text-muted">{agency.region}</p>
            </div>
          </RevealSection>

          {/* Contact form */}
          <RevealSection>
            <GoldHeading as="h2">Envie uma mensagem</GoldHeading>
            <p className="mt-4 text-text-muted leading-relaxed">
              Prefere escrever? Preencha o formulário e retornamos em breve.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
