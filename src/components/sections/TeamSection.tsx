import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, ArrowRight } from 'lucide-react';
import { team, type TeamMember } from '@/config/team';
import { contactConfig } from '@/config/contact';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function TeamSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const expandedMember = team.find((m) => m.id === expandedId) ?? null;

  const handleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="team"
      className="relative bg-ivory-100 py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-20 max-w-2xl">
          <span className="label-eyebrow text-sage-500">Il team</span>
          <h2 className="mt-5 font-serif text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.05] tracking-tight text-espresso-900">
            Chi ti accoglie<br />
            <span className="italic text-sage-600">in studio.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-stone-400">
            Professionisti con formazione riconosciuta e un approccio che mette
            l\'ascolto al centro. Clicca su un profilo per conoscere il percorso
            e la filosofia di ciascuno.
          </p>
        </div>

        {/* Team portraits — editorial overlapping composition */}
        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">
          {team.map((member, i) => {
            const isExpanded = expandedId === member.id;
            const isDimmed = expandedId !== null && !isExpanded;

            return (
              <div
                key={member.id}
                className={`group relative transition-all duration-500 ${
                  i === 1 ? 'lg:mt-16' : i === 2 ? 'lg:mt-32' : ''
                } ${isDimmed ? 'opacity-40' : 'opacity-100'}`}
              >
                {/* Portrait */}
                <button
                  onClick={() => handleExpand(member.id)}
                  className="block w-full overflow-hidden rounded-sm bg-stone-200"
                  aria-label={`Apri profilo di ${member.name}`}
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                    {/* Expand icon */}
                    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-ivory-50/40 bg-espresso-950/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-ivory-50/90">
                      <Plus
                        size={16}
                        strokeWidth={1.5}
                        className="text-ivory-50 transition-colors duration-300 group-hover:text-espresso-900"
                      />
                    </div>
                  </div>
                </button>

                {/* Name, role, specialization — in its own clear space below the photo */}
                <div className="mt-5 max-w-[90%]">
                  <h3 className="font-serif text-xl font-light text-espresso-900 lg:text-2xl">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-sage-600">
                    {member.role}
                  </p>
                  <p className="mt-2 text-xs font-light leading-relaxed text-stone-400">
                    {member.specialization}
                  </p>
                  <p className="mt-3 font-serif text-sm italic font-light text-espresso-800/60">
                    "{member.philosophy}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded profile — AnimatePresence mode="wait" so collapsed fully exits first */}
        <AnimatePresence mode="wait">
          {expandedMember && (
            <motion.div
              key={expandedMember.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: easeOutExpo }}
              className="overflow-hidden"
            >
              <div className="mt-12 border-t border-stone-200 pt-10">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                  {/* Photo */}
                  <div className="lg:col-span-4">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-stone-200">
                      <img
                        src={expandedMember.photo}
                        alt={expandedMember.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-8">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="label-eyebrow text-sage-500">
                          Profilo
                        </span>
                        <h3 className="mt-3 font-serif text-3xl font-light text-espresso-900 lg:text-4xl">
                          {expandedMember.name}
                        </h3>
                        <p className="mt-2 text-sm font-medium text-sage-600">
                          {expandedMember.role}
                        </p>
                      </div>
                      <button
                        onClick={() => setExpandedId(null)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 text-espresso-800 transition-colors hover:bg-stone-200"
                        aria-label="Chiudi profilo"
                      >
                        <X size={18} strokeWidth={1.5} />
                      </button>
                    </div>

                    <p className="mt-6 text-base font-light leading-relaxed text-espresso-800/75">
                      {expandedMember.bio}
                    </p>

                    <div className="mt-6">
                      <p className="label-eyebrow text-stone-400">Specializzazioni</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {expandedMember.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="rounded-full border border-stone-200 px-3.5 py-1.5 text-xs font-light text-espresso-800/70"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => scrollToSection('#contatti')}
                      className="group mt-8 flex items-center gap-2 text-sm font-medium text-espresso-900 transition-colors hover:text-sage-600"
                    >
                      Prenota una visita con {expandedMember.name.split(' ')[0]}
                      <ArrowRight
                        size={16}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
