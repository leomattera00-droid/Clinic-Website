import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Car, Train } from 'lucide-react';
import { contactConfig } from '@/config/contact';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function StudioSection() {
  return (
    <section id="studio" className="relative bg-ivory-50 py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <span className="label-eyebrow text-sage-500">Lo studio</span>
          <h2 className="mt-5 font-serif text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.05] tracking-tight text-espresso-900">
            Dove ci trovi,<br />
            <span className="italic text-sage-600">come raggiungerci.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: info */}
          <div className="lg:col-span-5">
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-sage-500" />
              <div>
                <p className="label-eyebrow text-stone-400">Indirizzo</p>
                <p className="mt-2 text-base font-light text-espresso-900">
                  {contactConfig.address.street}
                  <br />
                  {contactConfig.address.city}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-8 flex items-start gap-3">
              <Clock size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-sage-500" />
              <div>
                <p className="label-eyebrow text-stone-400">Orari di apertura</p>
                <div className="mt-2 space-y-1.5">
                  {contactConfig.hours.map((h) => (
                    <div key={h.day} className="flex items-center gap-4 text-sm font-light text-espresso-800/80">
                      <span className="w-24 text-stone-400">{h.day}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="mt-8 flex items-start gap-3">
              <Phone size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-sage-500" />
              <div>
                <p className="label-eyebrow text-stone-400">Telefono</p>
                <a
                  href={contactConfig.phoneHref}
                  className="mt-2 block text-base font-light text-espresso-900 transition-colors hover:text-sage-600"
                >
                  {contactConfig.phone}
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3">
              <Mail size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-sage-500" />
              <div>
                <p className="label-eyebrow text-stone-400">Email</p>
                <a
                  href={contactConfig.emailHref}
                  className="mt-2 block text-base font-light text-espresso-900 transition-colors hover:text-sage-600"
                >
                  {contactConfig.email}
                </a>
              </div>
            </div>

            {/* Parking & transport */}
            <div className="mt-10 space-y-4 border-t border-stone-200 pt-8">
              <div className="flex items-start gap-3">
                <Car size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-stone-400" />
                <div>
                  <p className="label-eyebrow text-stone-400">Parcheggio</p>
                  <p className="mt-2 text-sm font-light leading-relaxed text-stone-400">
                    Parcheggio custodito in Via Brera 16 e parcheggi a raso
                    in zona. Disponibile anche sosta a pagamento in zona ZTL.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Train size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-stone-400" />
                <div>
                  <p className="label-eyebrow text-stone-400">Mezzi pubblici</p>
                  <p className="mt-2 text-sm font-light leading-relaxed text-stone-400">
                    Metropolitana M2 Lanza, tram 12-14, autobus 61.
                    Lo studio si trova a 5 minuti a piedi dalla fermata.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: visual map treatment */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-espresso-900"
            >
              {/* Stylized map background — CSS grid pattern with location pin */}
              <div className="absolute inset-0">
                {/* Grid lines */}
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(247, 243, 236, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(247, 243, 236, 1) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                  }}
                />
                {/* Diagonal streets */}
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                  <line x1="0%" y1="30%" x2="100%" y2="50%" stroke="rgba(247, 243, 236, 0.12)" strokeWidth="2" />
                  <line x1="10%" y1="100%" x2="90%" y2="0%" stroke="rgba(247, 243, 236, 0.08)" strokeWidth="1.5" />
                  <line x1="0%" y1="70%" x2="100%" y2="80%" stroke="rgba(247, 243, 236, 0.1)" strokeWidth="1" />
                  <line x1="40%" y1="0%" x2="50%" y2="100%" stroke="rgba(247, 243, 236, 0.08)" strokeWidth="1.5" />
                </svg>

                {/* Location pin */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    {/* Pulse ring */}
                    <div className="absolute inset-0 h-12 w-12 animate-ping rounded-full bg-sage-400/30" />
                    {/* Pin dot */}
                    <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-sage-400 ring-4 ring-espresso-900">
                      <MapPin size={10} strokeWidth={2.5} className="text-espresso-900" />
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="label-eyebrow text-ivory-100/30">ASSE Studio</p>
                  <p className="mt-1 font-serif text-lg font-light text-ivory-50">
                    {contactConfig.address.full}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactConfig.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-sage-300 transition-colors hover:text-sage-200"
                  >
                    Apri in Google Maps
                    <MapPin size={14} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
