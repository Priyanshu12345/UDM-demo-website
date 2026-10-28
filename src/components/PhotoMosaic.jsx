import React from 'react';

export default function PhotoMosaic({ onExploreClick }) {
  return (
    <section id="market" className="section-canvas-alt mosaic-section">
      <div className="site-container">
        {/* Header with Scroll Reveal */}
        <div className="mosaic-header reveal-on-scroll">
          <span className="label-editorial">03 / THE SPACE</span>
          <h2 className="mosaic-title">A market built for lingering.</h2>
        </div>

        {/* Asymmetrical Custom Mosaic with Multi-Speed Parallax */}
        <div className="mosaic-grid">
          {/* Left Column: Big Feature Image & Lower Split */}
          <div className="mosaic-left-col">
            {/* Main Feature: Food Hall Interior */}
            <div
              className="mosaic-main-hero parallax-frame reveal-on-scroll"
              data-speed="0.09"
            >
              <img
                src="/images/mosaic-main.jpg"
                alt="Urban District Market spacious food hall interior with dining tables"
                className="parallax-img"
              />
              <div className="mosaic-overlay-caption">
                <p>Ten kitchens local and new to Charlotte.</p>
              </div>
            </div>

            {/* Lower Split: Info Panel & Food Photo */}
            <div className="mosaic-lower-split">
              {/* Light Information Panel */}
              <div className="mosaic-info-card reveal-on-scroll delay-100">
                <div>
                  <span className="label-editorial" style={{ marginBottom: '0.75rem' }}>AT A GLANCE</span>
                  <div className="mosaic-stat-row">
                    <span className="mosaic-stat-label">KITCHENS</span>
                    <span className="mosaic-stat-val">10 Concepts</span>
                  </div>
                  <div className="mosaic-stat-row">
                    <span className="mosaic-stat-label">SEATING</span>
                    <span className="mosaic-stat-val">350+ Indoor & Patio</span>
                  </div>
                  <div className="mosaic-stat-row">
                    <span className="mosaic-stat-label">BAR</span>
                    <span className="mosaic-stat-val">Full Craft Program</span>
                  </div>
                  <div className="mosaic-stat-row">
                    <span className="mosaic-stat-label">PLAY</span>
                    <span className="mosaic-stat-val">Courtyard & Games</span>
                  </div>
                </div>
                <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-fine)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Historic Mill District, CLT</span>
                </div>
              </div>

              {/* Asian Street Food Photograph with Faster Parallax Pan */}
              <div
                className="mosaic-food-card parallax-frame reveal-on-scroll delay-200"
                data-speed="0.14"
              >
                <img
                  src="/images/mosaic-food.jpg"
                  alt="Authentic street food noodles, dumplings, and skewers"
                  className="parallax-img"
                />
                <span className="mosaic-card-label">Authentic street flavors</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bar Image, Honey Yellow Panel, & Patio Image */}
          <div className="mosaic-right-col">
            {/* Bar & Drinks Photograph */}
            <div
              className="mosaic-bar-card parallax-frame reveal-on-scroll delay-100"
              data-speed="0.08"
            >
              <img
                src="/images/mosaic-bar.jpg"
                alt="LaBARatory cocktail bar with draft beer taps"
                className="parallax-img"
              />
              <div className="mosaic-overlay-caption" style={{ padding: '1.5rem 1.25rem 1rem' }}>
                <p style={{ fontSize: '1.15rem' }}>Craft cocktails & regional drafts at LaBARatory.</p>
              </div>
            </div>

            {/* Contrasting Honey-Yellow Content Panel with Float Offset */}
            <div
              className="mosaic-yellow-panel parallax-float reveal-on-scroll delay-200"
              data-float-speed="-0.04"
              role="button"
              tabIndex={0}
              onClick={onExploreClick}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onExploreClick()}
              aria-label="View all 10 food stall concepts"
              style={{ cursor: 'pointer' }}
            >
              <div>
                <span className="mosaic-yellow-tag">STALLS & KITCHENS</span>
                <p className="mosaic-yellow-text">
                  A collection of 10 distinct food concepts.
                </p>
              </div>

              <div className="mosaic-yellow-footer">
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
                  View All Menus
                </span>
                <span className="circle-arrow-icon" style={{ borderColor: 'rgba(26, 24, 21, 0.4)', color: '#1A1815' }}>
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 12L12 2M12 2H4M12 2V10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Outdoor Patio Photograph with Distinct Parallax Speed */}
            <div
              className="mosaic-patio-card parallax-frame reveal-on-scroll delay-300"
              data-speed="0.12"
            >
              <img
                src="/images/mosaic-patio.jpg"
                alt="Spacious sunny outdoor patio with yellow cafe chairs and string lights"
                className="parallax-img"
              />
              <span className="mosaic-card-label">Spacious outdoor patio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
