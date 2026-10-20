import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Ear,
  Activity,
  ClipboardList,
  HandHeart,
  TrendingUp,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: typeof Ear;
}

const processSteps: ProcessStep[] = [
  {
    id: 'ascolto',
    number: '01',
    title: 'Ascolto',
    description:
      'Raccogliamo la tua storia clinica e il motivo della visita. Prima di qualsiasi tecnica, dedichiamo tempo ad ascoltare quando è iniziato il problema, come si manifesta e cosa significa per te.',
    icon: Ear,
  },
  {
    id: 'valutazione',
    number: '02',
    title: 'Valutazione',
    description:
      'Valutazione funzionale di postura, movimento e mobilità. Test specifici ci aiutano a identificare le restrizioni e gli squilibri che generano il disturbo, costruendo un quadro clinico chiaro.',
    icon: Activity,
  },
  {
    id: 'piano',
    number: '03',
    title: 'Piano di trattamento',
    description:
      'Un percorso costruito sulle tue esigenze specifiche. Non protocolli generici, ma un piano che tiene conto dei tuoi obiettivi, del tuo stile di vita e dei tempi del tuo corpo.',
    icon: ClipboardList,
  },
  {
    id: 'trattamento',
    number: '04',
    title: 'Trattamento',
    description:
      'Sedute mirate con tecniche manuali e/o esercizio terapeutico. Ogni seduta si adatta a come stai quel giorno — il corpo non è mai uguale a se stesso, e il trattamento non lo è di conseguenza.',
    icon: HandHeart,
  },
  {
    id: 'mantenimento',
    number: '05',
    title: 'Mantenimento',
    description:
      'Consigli ed esercizi per mantenere i risultati nel tempo. Il percorso non finisce con l\'ultima seduta: ti forniamo gli strumenti per continuare a prenderti cura del tuo corpo nella vita di ogni giorno.',
    icon: TrendingUp,
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>('.process-step');

      steps.forEach((step, i) => {
        if (i === 0) return;

        gsap.fromTo(
          step,
          {
            opacity: 0,
            y: 80,
            clipPath: 'inset(100% 0% 0% 0%)',
          },
          {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0% 0% 0% 0%)',
            ease: 'power3.out',
            duration: 1,
            scrollTrigger: {
              trigger: step,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 1,
            },
          }
        );
      });

      // Progress line animation
      const progressLine = sectionRef.current?.querySelector('.progress-line-fill');
      if (progressLine) {
        gsap.fromTo(
          progressLine,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 70%',
              end: 'bottom 80%',
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="percorso"
      className="relative bg-espresso-900 py-32 lg:py-40"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-20 max-w-2xl">
          <span className="label-eyebrow text-sage-300">Il percorso</span>
          <h2 className="mt-5 font-serif text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.05] tracking-tight text-ivory-50">
            Dall\'ascolto<br />
            <span className="italic text-sage-200">al mantenimento.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-ivory-100/50">
            Cinque tappe che compongono ogni percorso in ASSE. Non sono
            sequential in modo rigido — si adattano a te e a come evolve
            il tuo corpo durante il trattamento.
          </p>
        </div>

        {/* Steps with vertical progress line */}
        <div ref={stepsRef} className="relative">
          {/* Vertical progress line */}
          <div className="absolute left-[27px] top-0 h-full w-px bg-ivory-100/10 md:left-[31px]">
            <div className="progress-line-fill absolute inset-0 origin-top bg-sage-400" />
          </div>

          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="process-step relative flex gap-6 md:gap-8"
                >
                  {/* Number + icon circle */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ivory-100/15 bg-espresso-800 md:h-16 md:w-16">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-sage-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1 md:pt-2">
                    <div className="flex items-baseline gap-4">
                      <span className="label-eyebrow text-sage-300/50">
                        {step.number}
                      </span>
                      <h3 className="font-serif text-2xl font-light text-ivory-50 md:text-3xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-ivory-100/45 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
