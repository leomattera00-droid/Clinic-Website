import { brandConfig, navLinks } from '@/config/brand';
import { contactConfig } from '@/config/contact';
import { treatments } from '@/config/treatments';

export function Footer() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-stone-200 bg-ivory-100 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top section */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-12 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-4">
            <p className="font-serif text-3xl font-medium tracking-tight text-espresso-900">
              {brandConfig.name}
            </p>
            <p className="mt-3 max-w-xs text-sm font-light leading-relaxed text-stone-400">
              {brandConfig.fullName}
            </p>
            <p className="mt-2 font-serif text-sm italic font-light text-sage-600">
              {brandConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <p className="label-eyebrow text-stone-400">Navigazione</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm font-light text-espresso-800/70 transition-colors hover:text-sage-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trattamenti */}
          <div className="lg:col-span-3">
            <p className="label-eyebrow text-stone-400">Trattamenti</p>
            <ul className="mt-4 space-y-2.5">
              {treatments.map((t) => (
                <li key={t.id}>
                  <a
                    href="#trattamenti"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#trattamenti');
                    }}
                    className="text-sm font-light text-espresso-800/70 transition-colors hover:text-sage-600"
                  >
                    {t.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3">
            <p className="label-eyebrow text-stone-400">Contatti</p>
            <div className="mt-4 space-y-2.5">
              <p className="text-sm font-light text-espresso-800/70">
                {contactConfig.address.street}
                <br />
                {contactConfig.address.city}
              </p>
              <a
                href={contactConfig.phoneHref}
                className="block text-sm font-light text-espresso-800/70 transition-colors hover:text-sage-600"
              >
                {contactConfig.phone}
              </a>
              <a
                href={contactConfig.emailHref}
                className="block text-sm font-light text-espresso-800/70 transition-colors hover:text-sage-600"
              >
                {contactConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-stone-200 pt-8 sm:flex-row">
          <p className="text-xs font-light text-stone-400">
            © {new Date().getFullYear()} {brandConfig.fullName}. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs font-light text-stone-400 transition-colors hover:text-espresso-800"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs font-light text-stone-400 transition-colors hover:text-espresso-800"
            >
              Cookie Policy
            </a>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 text-stone-400 transition-colors hover:border-sage-400 hover:text-sage-500"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 text-stone-400 transition-colors hover:border-sage-400 hover:text-sage-500"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
