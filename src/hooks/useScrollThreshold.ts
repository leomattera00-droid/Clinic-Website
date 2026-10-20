import { useEffect, useState } from 'react';

/**
 * Returns a boolean that flips to true once the page has scrolled
 * past `threshold` pixels.  Drives the navbar transparent-to-solid
 * transition and is safe with Lenis (listens to scroll, not wheel).
 */
export function useScrollThreshold(threshold = 40): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
