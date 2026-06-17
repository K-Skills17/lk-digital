import { segments } from "@/config/segments";
import { LandingPage } from "@/components/landing/LandingPage";
import { ogMetadata } from "@/lib/og-metadata";

const segment = segments.negocios;

export const metadata = ogMetadata({
  title: segment.title,
  description: segment.metaDescription,
  ogTitle: segment.hero.headline,
  ogSubtitle: "Site premium para pequenos negócios — pronto em dias.",
  segment: "Negócios",
});

export default function NegociosPage() {
  return <LandingPage segment={segment} />;
}
