import { InstagramLogo, FacebookLogo, MapPin, EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";

const footerLinks = [
  { label: "Appartamenti", href: "#gli-appartamenti" },
  { label: "Garage", href: "#garage" },
  { label: "Business", href: "#business" },
  { label: "Recensioni", href: "#recensioni" },
  { label: "Prenota", href: "#prenota" },
];

const legalLinks = [
  { label: "Privacy Policy", page: "privacy" },
  { label: "Cookie Policy", page: "cookie" },
  { label: "Termini e Condizioni", page: "terms" },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--color-divider-soft)" }}
    >
      <div className="container-brand py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p
              className="font-display font-medium text-neutral-dark mb-3"
              style={{ fontSize: "var(--fs-h3)" }}
            >
              Appartamenti Vela Milano
            </p>
            <p className="text-small text-neutral-dark/60 mb-6">
              Un&apos;oasi verde nel cuore di Milano
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/appartamentivelamilano"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-neutral-dark/40 hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                <InstagramLogo size={20} weight="regular" />
              </a>
              <a
                href="https://facebook.com/appartamentivelamilano"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-neutral-dark/40 hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                <FacebookLogo size={20} weight="regular" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="label-micro text-neutral-dark mb-4">Esplora</p>
            <ul className="space-y-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-small text-neutral-dark/60 hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="label-micro text-neutral-dark mb-4">Contatti</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-small text-neutral-dark/60">
                <MapPin size={14} weight="regular" className="text-primary flex-shrink-0" />
                Via Vincenzo Vela, 17 · 20133 Milano
              </li>
              <li>
                <a
                  href="mailto:info@appartamentivelamilano.it"
                  className="flex items-center gap-2 text-small text-neutral-dark/60 hover:text-primary transition-colors cursor-pointer"
                >
                  <EnvelopeSimple size={14} weight="regular" className="text-primary" />
                  info@appartamentivelamilano.it
                </a>
              </li>
              <li>
                <a
                  href="tel:+390000000000"
                  className="flex items-center gap-2 text-small text-neutral-dark/60 hover:text-primary transition-colors cursor-pointer"
                >
                  <Phone size={14} weight="regular" className="text-primary" />
                  +39 000 000 0000
                </a>
              </li>
              <li className="text-small text-neutral-dark/60">
                Check-in: 12:00 – 23:59
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: "var(--color-divider-soft)" }}
        >
          <p className="text-small text-neutral-dark/40">
            © 2026 Appartamenti Vela Milano
          </p>
          <div className="flex gap-6">
            {legalLinks.map((l) => (
              <a
                key={l.page}
                href="#"
                data-page={l.page}
                className="text-small text-neutral-dark/40 hover:text-neutral-dark/70 transition-colors cursor-pointer"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
