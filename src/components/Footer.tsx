import Link from "next/link";
import { agency, whatsappUrl } from "@/config/agency";

export function Footer() {
  return (
    <footer className="border-t border-bg-card bg-bg-dark">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-heading text-xl font-bold text-text-primary">
              {agency.name}
            </p>
            <p className="mt-2 text-sm text-text-muted max-w-xs">
              Sites premium e sistemas de marketing para pequenos negócios que
              querem crescer com presença digital de verdade.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
              Navegação
            </p>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/sobre", label: "Sobre" },
                { href: "/servicos", label: "Serviços" },
                { href: "/trabalhos", label: "Trabalhos" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
              Contato
            </p>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${agency.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {agency.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-bg-card pt-6 text-center text-xs text-text-muted">
          &copy; {new Date().getFullYear()} {agency.name}. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
