import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://lk-digital.vercel.app";

export function ogMetadata({
  title,
  description,
  ogTitle,
  ogSubtitle,
  segment,
}: {
  title: string;
  description: string;
  ogTitle?: string;
  ogSubtitle?: string;
  segment?: string;
}): Metadata {
  const params = new URLSearchParams();
  params.set("title", ogTitle || title);
  if (ogSubtitle) params.set("subtitle", ogSubtitle);
  if (segment) params.set("segment", segment);

  const ogImageUrl = `${siteUrl}/api/og?${params.toString()}`;

  return {
    title,
    description,
    openGraph: {
      title: ogTitle || title,
      description,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle || title,
      description,
      images: [ogImageUrl],
    },
  };
}
