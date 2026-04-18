import { InstagramLogo, FacebookLogo, EnvelopeSimple, Phone, MapPin, Clock } from '@phosphor-icons/react/dist/ssr';

const navLinks = [
  { href: '#appartamenti', label: 'Appartamenti' },
  { href: '#garage', label: 'Garage' },
  { href: '#business', label: 'Business & Fiere' },
  { href: '#prenota', label: 'Prenota' },
];

const legalLinks = [
  { href: '#', label: 'Privacy Policy', dataPage: 'privacy' },
  { href: '#', label: 'Cookie Policy', dataPage: 'cookie' },
  { href: '#', label: 'Termini e Condizioni', dataPage: 'terms' },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-vela py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-1">
              <span className="font-display italic font-normal text-[26px] leading-none text-white">
                Appartamenti
              </span>
              <span className="font-display italic font-medium text-[26px] leading-none text-primary">
                Vela
              </span>
              <span className="font-display italic font-normal text-[26px] leading-none text-white">
                Milano
              </span>
            </div>
            <p className="mt-5 max-w-[420px] text-body text-white/70">
              Un'oasi verde nel cuore di Milano. Tre appartamenti luminosi a 400 m
              dalla metro Piola.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com/appartamentivelamilano"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-accent hover:text-accent"
              >
                <InstagramLogo size={18} weight="regular" />
              </a>
              <a
                href="https://facebook.com/appartamentivelamilano"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-accent hover:text-accent"
              >
                <FacebookLogo size={18} weight="regular" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <h4 className="text-micro font-semibold uppercase tracking-[0.08em] text-accent">
              Esplora
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-body text-white/75 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="lg:col-span-4">
            <h4 className="text-micro font-semibold uppercase tracking-[0.08em] text-accent">
              Contatti
            </h4>
            <ul className="mt-5 space-y-3 text-body text-white/75">
              <li className="flex items-start gap-3">
                <MapPin size={16} weight="regular" className="mt-1 flex-shrink-0" />
                Via Vincenzo Vela 17
                <br />
                20133 Milano (MI)
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeSimple size={16} weight="regular" />
                info@appartamentivelamilano.it
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} weight="regular" />
                +39 000 000 0000
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} weight="regular" className="mt-1 flex-shrink-0" />
                Check-in 12:00–23:59
                <br />
                Check-out 01:00–10:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-small text-white/50">
            © {new Date().getFullYear()} Appartamenti Vela Milano. Tutti i diritti riservati.
          </p>
          <ul className="flex flex-wrap gap-5 text-small text-white/60">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  data-page={l.dataPage}
                  className="transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
