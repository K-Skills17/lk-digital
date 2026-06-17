import { segments } from "@/config/segments";
import { LandingPage } from "@/components/landing/LandingPage";
import { ogMetadata } from "@/lib/og-metadata";

const segment = segments.advogados;

export const metadata = ogMetadata({
  title: segment.title,
  description: segment.metaDescription,
  ogTitle: segment.hero.headline,
  ogSubtitle: "Site institucional para advogados — discreto e profissional.",
  segment: "Advogados",
});

export default function AdvogadosPage() {
  return <LandingPage segment={segment} />;
}
