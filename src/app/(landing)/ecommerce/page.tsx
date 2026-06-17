import { segments } from "@/config/segments";
import { LandingPage } from "@/components/landing/LandingPage";
import { ogMetadata } from "@/lib/og-metadata";

const segment = segments.ecommerce;

export const metadata = ogMetadata({
  title: segment.title,
  description: segment.metaDescription,
  ogTitle: segment.hero.headline,
  ogSubtitle: "Loja virtual premium — rápida e otimizada para conversão.",
  segment: "E-commerce",
});

export default function EcommercePage() {
  return <LandingPage segment={segment} />;
}
