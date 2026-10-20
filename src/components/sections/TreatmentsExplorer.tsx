import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, User, Layers, ArrowRight } from 'lucide-react';
import { treatments, treatmentCategories } from '@/config/treatments';
import { contactConfig } from '@/config/contact';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function TreatmentsExplorer() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeTreatmentId, setActiveTreatmentId] = useState<string>('osteopatia');

  const filteredTreatments = useMemo(() => {
    if (activeCategory === 'all') return treatments;
    return treatments.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  // When the category changes, auto-select the first treatment in that category
  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    const firstInCategory =
      catId === 'all'
        ? treatments[0]
        : treatments.find((t) => t.category === catId);
    if (firstInCategory) {
      setActiveTreatmentId(firstInCategory.id);
    }
  };

  const activeTreatment =
    filteredTreatments.find((t) => t.id === activeTreatmentId) ??
    filteredTreatments[0];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="trattamenti"
      className="relative bg-ivory-50 pt-32 pb-24 lg:pt-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-12 max-w-3xl">
          <span className="label-eyebrow text-sage-500">I trattamenti</span>
          <h2 className="mt-5 font-serif text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.05] tracking-tight text-espresso-900">
            Cura su misura,<br />
            <span className="italic text-sage-600">non protocolli standard.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-stone-400">
            Ogni percorso nasce dall\'ascolto e dalla valutazione. Esplora i
            trattamenti per capire quale si avvicina alle tue esigenze — il
            piano reale lo costruiamo insieme.
          </p>
        </div>

        {/* Category filter row — its own separate sticky layer */}
        <div className="sticky top-[72px] z-30 -mx-6 mb-12 border-y border-stone-200/50 bg-ivory-50/90 px-6 py-4 backdrop-blur-md lg:-mx-10 lg:px-10">
          <div className="no-scrollbar flex items-center gap-2 overflow-x-auto">
            {treatmentCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`label-eyebrow whitespace-nowrap rounded-full px-4 py-2.5 transition-all duration-300 ${
                    isActive
                      ? 'bg-espresso-900 text-ivory-50'
                      : 'text-stone-400 hover:text-espresso-800'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main explorer: content side + image side */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left: treatment content */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTreatment.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: easeOutExpo }}
              >
                {/* Treatment name */}
                <h3 className="font-serif text-3xl font-light leading-tight text-espresso-900 lg:text-4xl">
                  {activeTreatment.name}
                </h3>

                {/* Short description */}
                <p className="mt-4 text-base font-light leading-relaxed text-stone-400">
                  {activeTreatment.shortDescription}
                </p>

                {/* Full description */}
                <p className="mt-5 text-sm font-light leading-relaxed text-espresso-800/70">
                  {activeTreatment.fullDescription}
                </p>

                {/* Metadata grid */}
                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-3">
                    <User
                      size={18}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-sage-500"
                    />
                    <div>
                      <p className="label-eyebrow text-stone-400">Per chi è indicato</p>
                      <p className="mt-1.5 text-sm font-light leading-relaxed text-espresso-800/80">
                        {activeTreatment.whoItsFor}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock
                      size={18}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-sage-500"
                    />
                    <div>
                      <p className="label-eyebrow text-stone-400">Durata</p>
                      <p className="mt-1.5 text-sm font-light text-espresso-800/80">
                        {activeTreatment.duration}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Layers
                      size={18}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-sage-500"
                    />
                    <div>
                      <p className="label-eyebrow text-stone-400">Tecniche</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {activeTreatment.techniques.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-stone-200 px-3 py-1.5 text-xs font-light text-espresso-800/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => scrollToSection('#contatti')}
                  className="group mt-10 flex items-center gap-2 text-sm font-medium text-espresso-900 transition-colors hover:text-sage-600"
                >
                  Prenota una visita per questo trattamento
                  <ArrowRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: large photographic area + treatment selector */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTreatment.id + '-img'}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: easeOutExpo }}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-stone-100 lg:aspect-[4/5]"
              >
                <img
                  src={activeTreatment.image}
                  alt={activeTreatment.name}
                  className="h-full w-full object-cover"
                />
                {/* Subtle gradient at bottom for treatment name overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <span className="label-eyebrow text-ivory-50/80">
                    {activeTreatment.name}
                  </span>
                  <span className="label-eyebrow text-ivory-50/50">
                    0{filteredTreatments.findIndex((t) => t.id === activeTreatment.id) + 1} / 0{filteredTreatments.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Treatment selector dots — clickable, below the image */}
            <div className="mt-5 flex flex-wrap gap-2">
              {filteredTreatments.map((t) => {
                const isActive = t.id === activeTreatmentId;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTreatmentId(t.id)}
                    className={`group flex items-center gap-2.5 rounded-full border px-4 py-2.5 transition-all duration-300 ${
                      isActive
                        ? 'border-espresso-900 bg-espresso-900 text-ivory-50'
                        : 'border-stone-200 text-stone-400 hover:border-stone-300 hover:text-espresso-800'
                    }`}
                  >
                    <span className="text-xs font-medium">{t.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
