import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { OrganizationJsonLd } from "@/components/JsonLd";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LK Digital — Sites Premium para Pequenos Negócios",
    template: "%s | LK Digital",
  },
  description:
    "Desenvolvemos sites premium e sistemas de marketing para pequenos negócios que querem crescer com presença digital de verdade.",
  metadataBase: new URL("https://lkdigitalbrasil.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "LK Digital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
