import { useState, useEffect } from 'react';

/**
 * Custom hook to orchestrate smooth multi-layer parallax and scroll-driven reveal effects.
 * Optimized for 60-120fps performance using requestAnimationFrame, passive listeners,
 * hardware-accelerated 3D transforms, and graceful degradation for reduced motion.
 */
export function useScrollEffects() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // 1. Accessibility check: reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 2. Setup IntersectionObserver for reveal animations
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            // Unobserve once revealed for optimal performance
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const observeElements = () => {
      const revealEls = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
      revealEls.forEach((el) => revealObserver.observe(el));
    };

    observeElements();

    // Re-observe if dynamic content renders
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // 3. Parallax and Scroll Progress Loop
    let ticking = false;

    const updateScrollMetricsAndParallax = () => {
      const currentScrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      const maxScroll = Math.max(1, docHeight - windowHeight);
      const progress = Math.min(1, Math.max(0, currentScrollY / maxScroll));

      setScrollY(currentScrollY);
      setScrollProgress(progress);
      setIsScrolled(currentScrollY > 20);

      // Skip parallax calculations if user requested reduced motion
      if (!prefersReducedMotion) {
        // A. Image Frames Parallax
        const parallaxFrames = document.querySelectorAll('.parallax-frame');
        parallaxFrames.forEach((frame) => {
          const rect = frame.getBoundingClientRect();
          if (rect.bottom > -100 && rect.top < windowHeight + 100) {
            const centerDiff = (rect.top + rect.height / 2) - (windowHeight / 2);
            const speed = parseFloat(frame.dataset.speed || 0.12);
            const yOffset = (centerDiff * speed).toFixed(1);

            const img = frame.querySelector('.parallax-img');
            if (img) {
              img.style.transform = `translate3d(0, ${yOffset}px, 0)`;
            }
          }
        });

        // B. Floating Elements Parallax (badges, watermarks, decorative tags)
        const parallaxFloats = document.querySelectorAll('.parallax-float');
        parallaxFloats.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.bottom > -100 && rect.top < windowHeight + 100) {
            const centerDiff = (rect.top + rect.height / 2) - (windowHeight / 2);
            const speed = parseFloat(el.dataset.floatSpeed || -0.15);
            const yOffset = (centerDiff * speed).toFixed(1);
            el.style.transform = `translate3d(0, ${yOffset}px, 0)`;
          }
        });
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollMetricsAndParallax);
        ticking = true;
      }
    };

    // Initial update
    updateScrollMetricsAndParallax();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return { scrollY, scrollProgress, isScrolled };
}
