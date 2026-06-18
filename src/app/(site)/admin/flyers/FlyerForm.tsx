"use client";

import { useState } from "react";

const siteUrl =
  typeof window !== "undefined"
    ? window.location.origin
    : process.env.NEXT_PUBLIC_SITE_URL || "";

const PRESETS = [
  {
    label: "Dentistas — Geral",
    headline: "Seu consultório precisa de pacientes, não de um site bonito.",
    subline: "Site premium para dentistas — pronto em dias, você mesmo atualiza.",
    segment: "Dentistas",
    price: "2.000",
    features: "Design sob medida|Agendamento via WhatsApp|SEO para Google e IA|Conforme normas CFO/CRO",
  },
  {
    label: "Advogados — Geral",
    headline: "Seu escritório merece presença digital à altura.",
    subline: "Site institucional discreto e profissional — pronto em dias.",
    segment: "Advogados",
    price: "2.000",
    features: "Design institucional premium|Contato via WhatsApp|SEO + visibilidade IA|Conforme normas OAB",
  },
  {
    label: "E-commerce — Geral",
    headline: "Venda enquanto dorme.",
    subline: "Loja virtual rápida, otimizada para conversão.",
    segment: "E-commerce",
    price: "3.500",
    features: "Loja rápida e profissional|WhatsApp integrado|SEO para seus produtos|Você gerencia sozinho",
  },
  {
    label: "Negócios — Geral",
    headline: "Seus clientes conseguem te encontrar?",
    subline: "Site premium para pequenos negócios — pronto em dias.",
    segment: "Negócios",
    price: "2.000",
    features: "Site profissional e rápido|Contato via WhatsApp|Apareça no Google e IA|Você mesmo atualiza",
  },
  {
    label: "Oferta Geral",
    headline: "Site Premium a partir de R$ 2.000",
    subline: "50 vagas com preço de lançamento — até 30 de junho.",
    segment: "",
    price: "2.000",
    features: "",
  },
];

export function FlyerForm() {
  const [headline, setHeadline] = useState("Seu consultório precisa de pacientes, não de um site bonito.");
  const [subline, setSubline] = useState("Site premium para dentistas — pronto em dias, você mesmo atualiza.");
  const [cta, setCta] = useState("Chame no WhatsApp");
  const [segment, setSegment] = useState("Dentistas");
  const [price, setPrice] = useState("2.000");
  const [features, setFeatures] = useState("Design sob medida|Agendamento via WhatsApp|SEO para Google e IA|Conforme normas CFO/CRO");
  const [format, setFormat] = useState<"square" | "story">("square");
  const [style, setStyle] = useState<"photo" | "split" | "minimal">("photo");
  const [customBg, setCustomBg] = useState("");

  function applyPreset(index: number) {
    const p = PRESETS[index];
    setHeadline(p.headline);
    setSubline(p.subline);
    setSegment(p.segment);
    setPrice(p.price);
    setFeatures(p.features);
  }

  const params = new URLSearchParams({
    headline,
    subline,
    cta,
    format,
    style,
    ...(segment ? { segment } : {}),
    ...(price ? { price } : {}),
    ...(features ? { features } : {}),
    ...(customBg ? { bg: customBg } : {}),
  });

  const flyerUrl = `${siteUrl}/api/flyer?${params.toString()}`;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Form */}
      <div className="space-y-5">
        {/* Presets */}
        <div>
          <label className="block text-sm font-medium text-text-muted mb-2">
            Presets
          </label>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => applyPreset(i)}
                className="px-3 py-1.5 rounded-sm border border-bg-card-hover text-xs text-text-muted hover:border-accent hover:text-accent transition-colors"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="headline" className="block text-sm font-medium text-text-muted mb-1.5">
            Headline
          </label>
          <input
            id="headline"
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full rounded-sm border border-bg-card-hover bg-bg-card px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="subline" className="block text-sm font-medium text-text-muted mb-1.5">
            Subline
          </label>
          <input
            id="subline"
            type="text"
            value={subline}
            onChange={(e) => setSubline(e.target.value)}
            className="w-full rounded-sm border border-bg-card-hover bg-bg-card px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="cta" className="block text-sm font-medium text-text-muted mb-1.5">
              CTA
            </label>
            <input
              id="cta"
              type="text"
              value={cta}
              onChange={(e) => setCta(e.target.value)}
              className="w-full rounded-sm border border-bg-card-hover bg-bg-card px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-text-muted mb-1.5">
              Preço (opcional)
            </label>
            <input
              id="price"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="2.000"
              className="w-full rounded-sm border border-bg-card-hover bg-bg-card px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
        </div>

        <div>
          <label htmlFor="features" className="block text-sm font-medium text-text-muted mb-1.5">
            Features (separar com |)
          </label>
          <input
            id="features"
            type="text"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            placeholder="Feature 1|Feature 2|Feature 3"
            className="w-full rounded-sm border border-bg-card-hover bg-bg-card px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="segment" className="block text-sm font-medium text-text-muted mb-1.5">
              Segmento
            </label>
            <select
              id="segment"
              value={segment}
              onChange={(e) => setSegment(e.target.value)}
              className="w-full rounded-sm border border-bg-card-hover bg-bg-card px-4 py-3 text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="">Nenhum</option>
              <option value="Dentistas">Dentistas</option>
              <option value="Advogados">Advogados</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Negócios">Negócios</option>
            </select>
          </div>
          <div>
            <label htmlFor="customBg" className="block text-sm font-medium text-text-muted mb-1.5">
              Imagem de fundo (URL)
            </label>
            <input
              id="customBg"
              type="text"
              value={customBg}
              onChange={(e) => setCustomBg(e.target.value)}
              placeholder="https://unsplash.com/..."
              className="w-full rounded-sm border border-bg-card-hover bg-bg-card px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>
        </div>

        {/* Style selector */}
        <div>
          <label className="block text-sm font-medium text-text-muted mb-2">
            Estilo
          </label>
          <div className="flex gap-3">
            {(["photo", "split", "minimal"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStyle(s)}
                className={`px-4 py-2 rounded-sm border text-sm font-medium transition-colors ${
                  style === s
                    ? "border-accent bg-accent text-text-on-accent"
                    : "border-bg-card-hover text-text-muted hover:border-accent"
                }`}
              >
                {s === "photo" ? "Foto" : s === "split" ? "Split" : "Minimal"}
              </button>
            ))}
          </div>
        </div>

        {/* Format selector */}
        <div>
          <label className="block text-sm font-medium text-text-muted mb-2">
            Formato
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setFormat("square")}
              className={`px-4 py-2 rounded-sm border text-sm font-medium transition-colors ${
                format === "square"
                  ? "border-accent bg-accent text-text-on-accent"
                  : "border-bg-card-hover text-text-muted hover:border-accent"
              }`}
            >
              Quadrado (1080x1080)
            </button>
            <button
              type="button"
              onClick={() => setFormat("story")}
              className={`px-4 py-2 rounded-sm border text-sm font-medium transition-colors ${
                format === "story"
                  ? "border-accent bg-accent text-text-on-accent"
                  : "border-bg-card-hover text-text-muted hover:border-accent"
              }`}
            >
              Story (1080x1920)
            </button>
          </div>
        </div>

        <a
          href={flyerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-text-on-accent hover:bg-accent-hover transition-colors"
        >
          Abrir imagem (salvar com botão direito)
        </a>
      </div>

      {/* Preview */}
      <div>
        <p className="text-sm font-medium text-text-muted mb-3">Preview</p>
        <div
          className={`rounded-sm border border-bg-card-hover overflow-hidden ${
            format === "story" ? "max-w-[270px]" : "max-w-[400px]"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={flyerUrl}
            src={flyerUrl}
            alt="Preview do flyer"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
