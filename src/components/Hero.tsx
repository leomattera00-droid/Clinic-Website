import { useRef, useEffect, useCallback } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { brandConfig } from '@/config/brand';
import { contactConfig } from '@/config/contact';
import { MagneticButton } from '@/components/ui/MagneticButton';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ).current;

  // Scroll-driven transforms for the exit choreography
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.4, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]);
  // Ivory wipe layer — starts invisible, reveals from bottom as you scroll
  const wipeClipPath = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ['inset(100% 0% 0% 0%)', 'inset(50% 0% 0% 0%)', 'inset(0% 0% 0% 0%)']
  );
  const reducedWipeOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  // Subtle slow scale drift on the image (idle, not scroll-driven)
  const driftScale = useMotionValue(1.03);
  const driftSpring = useSpring(driftScale, {
    stiffness: 20,
    damping: 30,
    mass: 2,
  });

  useEffect(() => {
    if (prefersReducedMotion) return;
    let frame = 0;
    let elapsed = 0;
    const animate = () => {
      elapsed += 0.005;
      driftScale.set(1.03 + Math.sin(elapsed) * 0.015);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [driftScale, prefersReducedMotion]);

  const scrollToSection = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  const heroImage = brandConfig.heroImage;

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-espresso-950"
    >
      {/* Background image with parallax + scale drift */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          scale: prefersReducedMotion ? 1.05 : imageScale,
          opacity: imageOpacity,
        }}
      >
        <motion.img
          src={heroImage.src}
          alt={heroImage.alt}
          className="h-full w-full object-cover"
          style={{ scale: prefersReducedMotion ? 1 : driftSpring }}
          loading="eager"
        />
        {/* Dark gradient scrim for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-950/40 via-espresso-950/30 to-espresso-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-950/50 via-transparent to-transparent" />
      </motion.div>

      {/* Ivory wipe layer — reveals next section as you scroll out */}
      <motion.div
        className="absolute inset-0 z-10 bg-ivory-50"
        style={
          prefersReducedMotion
            ? { clipPath: 'inset(100% 0% 0% 0%)', opacity: reducedWipeOpacity }
            : { clipPath: wipeClipPath }
        }
      />

      {/* Hero content */}
      <motion.div
        className="relative z-20 flex h-full flex-col justify-center px-6 lg:px-10"
        style={{
          y: prefersReducedMotion ? 0 : contentY,
          opacity: contentOpacity,
        }}
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOutExpo, delay: 0.5 }}
            className="mb-6"
          >
            <span className="label-eyebrow text-ivory-100/60">
              {brandConfig.fullName}
            </span>
          </motion.div>

          {/* Headline — asymmetric editorial layout */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-9">
              <h1 className="font-serif text-[clamp(3.5rem,11vw,9rem)] font-light leading-[0.95] tracking-tight text-ivory-50 text-balance">
                <motion.span
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: easeOutExpo, delay: 0.6 }}
                  className="block"
                >
                  Rimettiti
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: easeOutExpo, delay: 0.75 }}
                  className="block italic text-sage-200"
                >
                  in asse.
                </motion.span>
              </h1>
            </div>
          </div>

          {/* Supporting line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOutExpo, delay: 1 }}
            className="mt-8 max-w-md text-sm font-light leading-relaxed text-ivory-100/70 lg:text-base"
          >
            {brandConfig.supportingLine}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOutExpo, delay: 1.15 }}
            className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
          >
            <MagneticButton
              onClick={() => scrollToSection('#contatti')}
              className="group flex items-center gap-3 rounded-full bg-sage-500 px-7 py-4 text-sm font-medium text-ivory-50 transition-colors hover:bg-sage-600"
            >
              {contactConfig.bookingCtaLabel}
              <ArrowRight
                size={18}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </MagneticButton>

            <button
              onClick={() => scrollToSection('#trattamenti')}
              className="group flex items-center gap-2 text-sm font-medium text-ivory-100/80 transition-colors hover:text-ivory-50"
            >
              Scopri i trattamenti
              <span className="relative block h-[1px] w-12 bg-ivory-100/40 transition-all duration-300 group-hover:w-16 group-hover:bg-ivory-50" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="label-eyebrow text-ivory-100/40">Scorri</span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} strokeWidth={1.5} className="text-ivory-100/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
