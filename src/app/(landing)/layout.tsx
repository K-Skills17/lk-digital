import { agency, whatsappUrl } from "@/config/agency";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="px-6 py-4">
        <p className="font-heading text-lg font-bold text-text-primary">
          {agency.name}
        </p>
      </div>
      <main>{children}</main>
      <footer className="border-t border-bg-card bg-bg-dark px-6 py-8 text-center">
        <p className="text-sm text-text-muted">
          {agency.name} &middot;{" "}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            WhatsApp
          </a>
        </p>
      </footer>
    </>
  );
}
