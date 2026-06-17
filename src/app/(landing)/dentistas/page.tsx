import type { Metadata } from "next";
import { segments } from "@/config/segments";
import { LandingPage } from "@/components/landing/LandingPage";

const segment = segments.dentistas;

export const metadata: Metadata = {
  title: segment.title,
  description: segment.metaDescription,
  openGraph: {
    title: segment.title,
    description: segment.metaDescription,
  },
};

export default function DentistasPage() {
  return <LandingPage segment={segment} />;
}
