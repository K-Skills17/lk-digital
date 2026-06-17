import { ogMetadata } from "@/lib/og-metadata";
import { FlyerForm } from "./FlyerForm";

export const metadata = ogMetadata({
  title: "Gerador de Flyers",
  description: "Ferramenta interna para gerar flyers de marketing.",
  ogTitle: "Gerador de Flyers — LK Digital",
});

export default function FlyersPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-heading text-2xl font-bold">Gerador de Flyers</h1>
      <p className="mt-2 text-sm text-text-muted">
        Ferramenta interna — gere imagens de marketing com a identidade da marca.
      </p>
      <div className="mt-8">
        <FlyerForm />
      </div>
    </div>
  );
}
