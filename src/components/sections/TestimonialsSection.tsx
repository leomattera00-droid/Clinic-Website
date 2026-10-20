import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '@/config/testimonials';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function TestimonialsSection() {
  const [activeId, setActiveId] = useState(testimonials[0].id);

  const active = testimonials.find((t) => t.id === activeId) ?? testimonials[0];
  const activeIndex = testimonials.findIndex((t) => t.id === activeId);

  return (
    <section className="relative bg-espresso-900 py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <span className="label-eyebrow text-sage-300">Testimonianze</span>
          <h2 className="mt-5 font-serif text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.05] tracking-tight text-ivory-50">
            Chi ha iniziato<br />
            <span className="italic text-sage-200">il percorso.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: active testimonial */}
          <div className="lg:col-span-8">
            <Quote
              size={40}
              strokeWidth={1}
              className="text-sage-300"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: easeOutExpo }}
              >
                <blockquote className="mt-6 font-serif text-2xl font-light leading-relaxed text-ivory-50 lg:text-[2rem] lg:leading-[1.4]">
                  "{active.quote}"
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <span className="font-serif text-lg font-medium text-ivory-50">
                    {active.author}
                  </span>
                  <span className="h-px w-8 bg-stone-300" />
                  <span className="label-eyebrow text-ivory-100/40">
                    {active.context}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: testimonial selector */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-3">
              {testimonials.map((t, i) => {
                const isActive = t.id === activeId;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveId(t.id)}
                    className={`group flex items-start gap-4 rounded-sm p-4 text-left transition-all duration-300 ${
                      isActive
                        ? 'bg-espresso-800'
                        : 'hover:bg-espresso-800/40'
                    }`}
                  >
                    <span
                      className={`label-eyebrow mt-1 shrink-0 transition-colors ${
                        isActive ? 'text-sage-300' : 'text-ivory-100/25'
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`text-sm font-light leading-relaxed transition-colors ${
                        isActive ? 'text-ivory-100/80' : 'text-ivory-100/35'
                      }`}
                    >
                      {t.quote.length > 80
                        ? t.quote.slice(0, 80) + '...'
                        : t.quote}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="mt-12 flex items-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActiveId(t.id)}
              className={`h-px transition-all duration-300 ${
                i === activeIndex
                  ? 'w-12 bg-sage-300'
                  : 'w-6 bg-ivory-100/15 hover:bg-ivory-100/25'
              }`}
              aria-label={`Testimonianza ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
