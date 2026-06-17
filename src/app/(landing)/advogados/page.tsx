import type { Metadata } from "next";
import { segments } from "@/config/segments";
import { LandingPage } from "@/components/landing/LandingPage";

const segment = segments.advogados;

export const metadata: Metadata = {
  title: segment.title,
  description: segment.metaDescription,
  openGraph: {
    title: segment.title,
    description: segment.metaDescription,
  },
};

export default function AdvogadosPage() {
  return <LandingPage segment={segment} />;
}
