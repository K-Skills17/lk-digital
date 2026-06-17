import { segments } from "@/config/segments";
import { LandingPage } from "@/components/landing/LandingPage";
import { ogMetadata } from "@/lib/og-metadata";

const segment = segments.dentistas;

export const metadata = ogMetadata({
  title: segment.title,
  description: segment.metaDescription,
  ogTitle: segment.hero.headline,
  ogSubtitle: "Site premium para dentistas — pronto em dias.",
  segment: "Dentistas",
});

export default function DentistasPage() {
  return <LandingPage segment={segment} />;
}
