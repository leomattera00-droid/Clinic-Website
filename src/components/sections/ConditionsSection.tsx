import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { conditions } from '@/config/conditions';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function ConditionsSection() {
  return (
    <section className="relative bg-ivory-50 py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <span className="label-eyebrow text-sage-500">Disturbi trattati</span>
          <h2 className="mt-5 font-serif text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.05] tracking-tight text-espresso-900">
            Quando chiedere<br />
            <span className="italic text-sage-600">una mano.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-stone-400">
            Condizioni comuni per le cui persone costruiamo percorsi di
            trattamento. Non è una lista esaustiva — se il tuo disturbo non
            è tra questi, scrivici e valuteremo insieme come aiutarti.
          </p>
        </div>

        {/* Conditions — large editorial typography grid */}
        <div className="grid grid-cols-1 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((cond, i) => (
            <motion.div
              key={cond.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: easeOutExpo, delay: (i % 3) * 0.1 }}
              className="group border-t border-stone-200 py-8 pr-4 sm:pr-8"
            >
              <span className="label-eyebrow text-stone-300">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-serif text-2xl font-light text-espresso-900 transition-colors duration-300 group-hover:text-sage-600 lg:text-3xl">
                {cond.name}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-stone-400">
                {cond.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Honest note */}
        <div className="mt-16 flex items-start gap-3 rounded-sm border border-stone-200 bg-ivory-50 p-6">
          <AlertCircle
            size={20}
            strokeWidth={1.5}
            className="mt-0.5 shrink-0 text-sage-500"
          />
          <p className="text-sm font-light leading-relaxed text-stone-400">
            Le cure offerte in ASSE hanno natura supportiva e riabilitativa e
            non sostituiscono il parere del medico curante né il pronto soccorso
            in caso di urgenza. Per sintomi acuti, traumi recenti o situazioni
            di emergenza contatta la guardia medica o il 112.
          </p>
        </div>
      </div>
    </section>
  );
}
