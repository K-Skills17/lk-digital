"use client";

import { useState } from "react";

const siteUrl =
  typeof window !== "undefined"
    ? window.location.origin
    : process.env.NEXT_PUBLIC_SITE_URL || "";

export function FlyerForm() {
  const [headline, setHeadline] = useState("Site Premium para Seu Negócio");
  const [subline, setSubline] = useState("Pronto em dias. Você mesmo atualiza.");
  const [cta, setCta] = useState("Chame no WhatsApp");
  const [segment, setSegment] = useState("");
  const [format, setFormat] = useState<"square" | "story">("square");

  const params = new URLSearchParams({
    headline,
    subline,
    cta,
    format,
    ...(segment ? { segment } : {}),
  });

  const flyerUrl = `${siteUrl}/api/flyer?${params.toString()}`;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Form */}
      <div className="space-y-5">
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
          <label htmlFor="segment" className="block text-sm font-medium text-text-muted mb-1.5">
            Segmento (opcional)
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
          <label className="block text-sm font-medium text-text-muted mb-1.5">
            Formato
          </label>
          <div className="flex gap-4">
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
