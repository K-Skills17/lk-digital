"use client";

import { useState } from "react";
import { agency } from "@/config/agency";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(agency.contactFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          business: data.get("business"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-accent/30 bg-accent-muted p-6 text-center">
        <p className="font-semibold text-text-primary">Mensagem enviada!</p>
        <p className="mt-2 text-sm text-text-muted">
          Retornamos em breve. Obrigado pelo contato.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-text-muted mb-1.5"
        >
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-sm border border-bg-card-hover bg-bg-card px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label
          htmlFor="business"
          className="block text-sm font-medium text-text-muted mb-1.5"
        >
          Negócio
        </label>
        <input
          type="text"
          id="business"
          name="business"
          required
          className="w-full rounded-sm border border-bg-card-hover bg-bg-card px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
          placeholder="Nome do seu negócio"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-muted mb-1.5"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full rounded-sm border border-bg-card-hover bg-bg-card px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
          placeholder="Conte um pouco sobre o que precisa"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-sm bg-accent px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-text-on-accent hover:bg-accent-hover transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
      </button>
    </form>
  );
}
