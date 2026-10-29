import React, { useRef, useState, useEffect } from 'react';

const QUOTE_WORDS = [
  "“Bees",
  "create",
  "something",
  "unique",
  "with",
  "simple",
  "ingredients",
  "from",
  "a",
  "flower.",
  "Our",
  "food",
  "stalls",
  "are",
  "the",
  "result",
  "of",
  "busy",
  "bees",
  "looking",
  "to",
  "create",
  "something",
  "unique",
  "to",
  "serve",
  "the",
  "Queen",
  "City.”"
];

export default function IntroStatement() {
  const quoteRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      if (!quoteRef.current) return;
      const rect = quoteRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start highlighting as the paragraph enters comfortable reading view (~85% viewport)
      // Fully dark and highlighted as it reaches ~30% viewport
      const startOffset = windowHeight * 0.85;
      const endOffset = windowHeight * 0.30;
      const totalDistance = startOffset - endOffset;

      const currentOffset = startOffset - rect.top;
      const rawProgress = currentOffset / totalDistance;
      const progress = Math.min(1, Math.max(0, rawProgress));

      setScrollProgress(progress);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section id="philosophy" className="section-canvas intro-section">
      {/* Decorative Geometric Parallax Watermark */}
      <div
        className="intro-watermark parallax-float"
        data-float-speed="0.08"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor">
          <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" strokeWidth="1" strokeDasharray="4 4" />
          <polygon points="100,45 150,75 150,125 100,155 50,125 50,75" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="16" strokeWidth="0.75" />
        </svg>
      </div>

      <div className="site-container">
        {/* Section Heading with Scroll Reveal */}
        <div className="intro-heading-wrap reveal-on-scroll">
          <h2 className="intro-philosophy-heading">
            <span className="intro-heading-badge"><span className="label-num">02</span> /</span>
            <span className="intro-heading-text">OUR PHILOSOPHY</span>
          </h2>
          <div className="reveal-accent-line" />
        </div>

        {/* Large Statement that dynamically highlights darker on downward scroll */}
        <div className="intro-statement-wrap reveal-on-scroll delay-100">
          <p
            ref={quoteRef}
            className="intro-large-quote"
            aria-label="“Bees create something unique with simple ingredients from a flower. Our food stalls are the result of busy bees looking to create something unique to serve the Queen City.”"
          >
            {QUOTE_WORDS.map((word, idx) => {
              const totalWords = QUOTE_WORDS.length;
              const wordWindow = 0.08;
              const maxTarget = 0.88;
              const start = (idx / Math.max(1, totalWords - 1)) * (maxTarget - wordWindow);
              const wordProgress = Math.min(
                1,
                Math.max(0, (scrollProgress - start) / wordWindow)
              );
              const isDark = wordProgress > 0.35;

              return (
                <span
                  key={idx}
                  className={`quote-word ${isDark ? 'is-dark' : 'is-muted'}`}
                  style={{
                    opacity: (0.24 + wordProgress * 0.76).toFixed(3),
                  }}
                >
                  {word}{' '}
                </span>
              );
            })}
          </p>
        </div>

        {/* Three Evenly Spaced Mini-Columns with Staggered Scroll Reveals */}
        <div className="intro-pillars-grid">
          {/* Pillar 01 */}
          <div className="intro-pillar-card reveal-on-scroll delay-100">
            <span className="intro-pillar-num">01 —</span>
            <h3 className="intro-pillar-title">“Bee here”</h3>
            <p className="intro-pillar-desc">
              A welcoming gathering place designed for slow lunches, remote work afternoons, and gatherings that turn into evening celebrations.
            </p>
          </div>

          {/* Pillar 02 */}
          <div className="intro-pillar-card reveal-on-scroll delay-200">
            <span className="intro-pillar-num">02 —</span>
            <h3 className="intro-pillar-title">“Bee full”</h3>
            <p className="intro-pillar-desc">
              Ten distinct kitchens serving authentic katsu, handcrafted dumplings, fresh noodles, momos, mochi donuts, and regional street foods.
            </p>
          </div>

          {/* Pillar 03 */}
          <div className="intro-pillar-card reveal-on-scroll delay-300">
            <span className="intro-pillar-num">03 —</span>
            <h3 className="intro-pillar-title">“Bee happy”</h3>
            <p className="intro-pillar-desc">
              From full-service craft cocktail bars to lively courtyard games, indoor pickleball, and weekend markets for all generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
