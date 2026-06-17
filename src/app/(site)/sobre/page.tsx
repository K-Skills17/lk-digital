import type { Metadata } from "next";
import { GoldHeading } from "@/components/GoldHeading";
import { RevealSection } from "@/components/RevealSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a LK Digital — quem somos, nossa filosofia e por que construímos sites premium para pequenos negócios.",
};

export default function SobrePage() {
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
            Sobre a LK Digital
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-text-muted leading-relaxed">
            Construímos presença digital de verdade para pequenos negócios —
            com intenção, qualidade e resultado.
          </p>
        </div>
      </section>

      {/* Story */}
      <RevealSection className="bg-bg-card">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <GoldHeading>Nossa história</GoldHeading>
          <div className="mt-8 space-y-6 text-text-muted leading-relaxed max-w-2xl">
            <p>
              A LK Digital nasceu de uma convicção simples: pequenos negócios merecem
              a mesma qualidade digital que grandes empresas têm acesso. Não templates
              genéricos, não soluções improvisadas — sites pensados, construídos e
              otimizados com o mesmo rigor que se espera de projetos premium.
            </p>
            <p>
              Somos uma agência enxuta e intencional. Cada projeto recebe atenção
              dedicada porque acreditamos que menos projetos bem feitos valem mais do
              que dezenas de entregas medianas.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* Philosophy */}
      <RevealSection className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <GoldHeading>Nossa filosofia</GoldHeading>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {[
            {
              title: "Trabalho intencional",
              text: "Cada decisão de design e código serve a um propósito. Nada é decorativo sem razão — tudo contribui para a experiência e conversão.",
            },
            {
              title: "Qualidade sem atalhos",
              text: "Código limpo, performance otimizada, SEO técnico correto desde o primeiro dia. Os fundamentos importam.",
            },
            {
              title: "Autonomia para o cliente",
              text: "Entregamos sites que você consegue atualizar sozinho. Sua presença digital não pode depender eternamente de um desenvolvedor.",
            },
            {
              title: "Conformidade levada a sério",
              text: "Sites que respeitam as normas de publicidade da sua profissão. Construímos dentro das regras — sem riscos desnecessários.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-sm border border-bg-card-hover bg-bg-card"
            >
              <h3 className="font-heading text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* What makes us different */}
      <RevealSection className="bg-bg-card">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <GoldHeading>O que nos diferencia</GoldHeading>
          <div className="mt-8 space-y-6 text-text-muted leading-relaxed max-w-2xl">
            <p>
              Não somos uma fábrica de sites. Não usamos templates prontos.
              Não prometemos resultados mágicos. O que oferecemos é trabalho
              sólido, transparente e bem executado.
            </p>
            <p>
              Cada site que entregamos é construído sob medida, com atenção aos
              detalhes que fazem diferença: velocidade de carregamento, estrutura
              para SEO, acessibilidade, conformidade com normas profissionais e
              um design que comunica confiança.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* CTA */}
      <section className="bg-accent">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-on-accent">
            Vamos construir juntos?
          </h2>
          <p className="mt-4 text-text-on-accent/80">
            Conte-nos sobre seu negócio e descubra como podemos ajudar.
          </p>
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
