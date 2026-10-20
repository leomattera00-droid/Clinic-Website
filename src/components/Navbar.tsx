import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { brandConfig, navLinks } from '@/config/brand';
import { contactConfig } from '@/config/contact';
import { useScrollThreshold } from '@/hooks/useScrollThreshold';

export function Navbar() {
  const scrolled = useScrollThreshold(40);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = useCallback((href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent,
    href: string
  ) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled
            ? 'bg-ivory-50/85 backdrop-blur-md border-b border-stone-200/60'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className={`font-serif text-2xl font-medium tracking-tight transition-colors duration-500 ${
              scrolled ? 'text-espresso-900' : 'text-ivory-50'
            }`}
          >
            {brandConfig.name}
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`label-eyebrow transition-colors duration-300 hover:text-sage-400 ${
                  scrolled
                    ? 'text-espresso-800/70'
                    : 'text-ivory-100/70 hover:text-ivory-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contatti"
              onClick={(e) => handleLinkClick(e, '#contatti')}
              className={`hidden rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-500 lg:inline-block ${
                scrolled
                  ? 'bg-sage-500 text-ivory-50 hover:bg-sage-600'
                  : 'border border-ivory-100/40 text-ivory-50 hover:bg-ivory-50/10'
              }`}
            >
              {contactConfig.bookingCtaLabel}
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              className={`lg:hidden transition-colors duration-500 ${
                scrolled ? 'text-espresso-900' : 'text-ivory-50'
              }`}
              aria-label="Apri menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile slide-in sheet */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-espresso-950/40 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Sheet */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-ivory-50 px-8 py-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl font-medium text-espresso-900">
                  {brandConfig.name}
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-espresso-800"
                  aria-label="Chiudi menu"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>

              <div className="mt-12 flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                    className="font-serif text-2xl font-light text-espresso-800 transition-colors hover:text-sage-500"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto">
                <a
                  href="#contatti"
                  onClick={(e) => handleLinkClick(e, '#contatti')}
                  className="block rounded-full bg-sage-500 px-6 py-3.5 text-center text-sm font-medium text-ivory-50 transition-colors hover:bg-sage-600"
                >
                  {contactConfig.bookingCtaLabel}
                </a>
                <p className="mt-4 text-center text-sm text-stone-400">
                  {contactConfig.phone}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
