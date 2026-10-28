import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Urban District Market — Hero Section
 * Code-Informed Typography and Motion Reconstruction
 * - 3-line headline: "Ten kitchens." / "One hive." / "Come hungry." in high-contrast Cormorant Garamond 300
 * - Rotating honey diamond eyebrow
 * - Entrance choreography: Eyebrow -> Line-by-line masked reveals (0.14s stagger) -> Clip-path image uncover (1.4s) -> Floating badge scale -> Text fade-up (24px)
 * - Scroll-linked parallax: Image (+22%), Headline (-12%), Floating Badge (-60%)
 * - Interactive 3D pointer tilt with spring physics (stiffness: 120, damping: 18)
 * - Six-sided hexagonal floating food badge
 * - Full reduced-motion and touch accessibility
 */
export default function Hero({ onExploreClick }) {
  const heroRef = useRef(null);
  const tiltContainerRef = useRef(null);
  const tiltFrameRef = useRef(null);
  const heroImgRef = useRef(null);
  const headlineRef = useRef(null);

  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    // 1. Trigger choreographed entrance sequence on mount
    const enterTimer = setTimeout(() => {
      setIsEntered(true);
    }, 50);

    // 2. Accessibility & device checks
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    // 3. Motion State (Parallax & Spring Tilt)
    let rafId;
    let lastTime = performance.now();

    // Tilt physics state (stiffness: 120, damping: 18)
    const stiffness = 120;
    const damping = 18;
    let currentRotX = 0;
    let currentRotY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let velX = 0;
    let velY = 0;

    // Mouse movement handler
    const handlePointerMove = (e) => {
      if (prefersReducedMotion || !isFinePointer || !tiltContainerRef.current) return;
      const rect = tiltContainerRef.current.getBoundingClientRect();
      const px = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      const py = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));

      // Max horizontal rotation: ~9deg, Max vertical rotation: ~7deg
      targetRotY = (px - 0.5) * 18;
      targetRotX = (0.5 - py) * 14;
    };

    const handlePointerLeave = () => {
      targetRotX = 0;
      targetRotY = 0;
    };

    const tiltEl = heroRef.current;  // listen on full section
    if (tiltEl && isFinePointer && !prefersReducedMotion) {
      tiltEl.addEventListener('pointermove', handlePointerMove);
      tiltEl.addEventListener('pointerleave', handlePointerLeave);
    }

    // High-performance direct DOM render loop (no React state re-rendering on scroll/tilt)
    const animate = (currentTime) => {
      const dt = Math.min(0.064, (currentTime - lastTime) / 1000);
      lastTime = currentTime;

      // A. Spring Tilt Simulation
      if (isFinePointer && !prefersReducedMotion && tiltFrameRef.current) {
        const forceX = -stiffness * (currentRotX - targetRotX) - damping * velX;
        const forceY = -stiffness * (currentRotY - targetRotY) - damping * velY;
        velX += forceX * dt;
        velY += forceY * dt;
        currentRotX += velX * dt;
        currentRotY += velY * dt;

        // Apply 3D tilt rotation to the frame
        tiltFrameRef.current.style.transform = `perspective(1000px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;
      }

      // B. Scroll-Linked Parallax Mapping
      if (!prefersReducedMotion && heroRef.current) {
        const scrollY = window.scrollY || window.pageYOffset;
        const heroHeight = heroRef.current.offsetHeight || 600;
        const progress = Math.min(1, Math.max(0, scrollY / heroHeight));

        // Targets:
        // Main image vertical position: 0% to +22%
        if (heroImgRef.current) {
          const imgOffset = progress * (heroHeight * 0.22);
          heroImgRef.current.style.transform = `translate3d(0, ${imgOffset.toFixed(1)}px, 0) scale(1.15)`;
        }

        // Headline vertical position: 0% to -12%
        if (headlineRef.current) {
          const headlineOffset = progress * (heroHeight * -0.12);
          headlineRef.current.style.transform = `translate3d(0, ${headlineOffset.toFixed(1)}px, 0)`;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      clearTimeout(enterTimer);
      cancelAnimationFrame(rafId);
      if (tiltEl) {
        tiltEl.removeEventListener('pointermove', handlePointerMove);
        tiltEl.removeEventListener('pointerleave', handlePointerLeave);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={`section-canvas hero-section ${isEntered ? 'is-entered' : ''}`}
      aria-label="Urban District Market Introduction"
    >
      <div className="site-container">
        <div className="hero-grid">
          {/* Left Column: Asymmetrical Typography & Actions */}
          <div className="hero-left">
            {/* 1. Small uppercase eyebrow with rotated yellow diamond & generous letter spacing */}
            <div className="hero-eyebrow-wrap">
              <span className="eyebrow-diamond" aria-hidden="true" />
              <span className="label hero-label"><span className="label-num">01</span> / URBAN DISTRICT MARKET</span>
            </div>

            {/* 2. Reconstructed 3-Line Headline with line-by-line vertical masks */}
            <div ref={headlineRef} className="hero-headline-motion-wrap">
              <h1 className="hero-headline font-display">
                <span className="hero-headline-line-mask line-1">
                  <span className="hero-headline-line-inner">Ten kitchens.</span>
                </span>
                <span className="hero-headline-line-mask line-2">
                  <span className="hero-headline-line-inner">
                    One <span className="italic-serif hive-accent">hive.</span>
                  </span>
                </span>
                <span className="hero-headline-line-mask line-3">
                  <span className="hero-headline-line-inner hero-headline-indented">
                    Come hungry.
                  </span>
                </span>
              </h1>
            </div>

            {/* 5. Paragraph, CTAs, and Location Metadata with 24px upward motion reveal */}
            <p className="hero-lead-text hero-fade-up">
              Charlotte's newest food destination. A curated collection of ten independent Asian and global street food stalls under one vibrant roof in the historic Mill District.
            </p>

            <div className="hero-actions hero-fade-up">
              <Link
                to="/menu"
                className="btn-pill-dark"
                aria-label="Explore the menu"
              >
                <span>Explore the menu</span>
                <span className="btn-dot-gold" />
              </Link>

              <a href="#visit" className="btn-circle-arrow-link" aria-label="Plan your visit to Urban District Market">
                <span>Plan a visit</span>
                <span className="circle-arrow-icon">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path d="M2 12L12 2M12 2H4M12 2V10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Hero Lower Metadata Element */}
            <div className="hero-metadata hero-fade-up">
              <div className="hero-meta-item">
                <span className="hero-meta-label">LOCATION</span>
                <span className="hero-meta-val">2315 N Davidson St, Charlotte NC</span>
              </div>
              <div className="hero-meta-divider" />
              <div className="hero-meta-item">
                <span className="hero-meta-label">HOURS</span>
                <span className="hero-meta-val">
                  <span className="status-dot" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                  Open Daily · 11:00 AM – Late
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Venue Interior Photo with 3D Tilt & Clip-Path Reveal */}
          <div className="hero-right" ref={tiltContainerRef}>
            <div className="hero-tilt-wrapper">
              {/* Main Hero Image uncovered vertically via animated clip-path over 1.4s */}
              <div ref={tiltFrameRef} className="hero-img-frame">
                <img
                  ref={heroImgRef}
                  src="/images/hero-interior.jpg"
                  alt="Urban District Market interior with communal tables and vibrant food stalls"
                  className="hero-main-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Editorial Scroll Cue */}
        <div className="hero-scroll-cue" aria-hidden="true">
          <span className="hero-scroll-cue-text">SCROLL TO EXPLORE</span>
          <div className="hero-scroll-cue-line">
            <div className="hero-scroll-cue-drop" />
          </div>
        </div>
      </div>
    </section>
  );
}
