import React from 'react';
import { Link } from 'react-router-dom';

export default function LifestyleSection({ onExploreClick }) {
  return (
    <section className="section-canvas lifestyle-section">
      <div className="site-container">
        <div className="lifestyle-grid">
          {/* Left: Tall Evening Market Atmosphere Photograph with Parallax Pan */}
          <div className="lifestyle-col-left">
            <Link
              to="/photos"
              className="lifestyle-tall-img parallax-frame reveal-on-scroll"
              data-speed="0.13"
              aria-label="View photo gallery"
              style={{ display: 'block', textDecoration: 'none', cursor: 'pointer' }}
            >
              <img
                src="/images/lifestyle-night.jpg"
                alt="People enjoying an outdoor evening gathering under festoon string lights"
                className="parallax-img"
              />
            </Link>
          </div>

          {/* Middle: Editorial Text & Dark Pill CTA with Scroll Reveal */}
          <div className="lifestyle-col-mid reveal-on-scroll delay-100">
            <span className="label-editorial">COMMUNITY & PLAY</span>

            <p className="lifestyle-statement">
              From parents to kids, the kids-at-heart, to even the dogs on the patio — there is room for all to have{' '}
              <span className="italic-serif">fun on the wall.</span>
            </p>

            <div>
              <Link
                to="/photos"
                className="btn-pill-dark"
                aria-label="Explore the food hall and photos"
              >
                <span>Explore the hall</span>
                <span className="btn-dot-gold" />
              </Link>
            </div>
          </div>

          {/* Right: Asymmetrical Offset Exterior Photograph with Counter Parallax */}
          <div className="lifestyle-col-right">
            <Link
              to="/photos"
              className="lifestyle-exterior-img parallax-frame reveal-on-scroll delay-200"
              data-speed="-0.09"
              aria-label="View photo gallery"
              style={{ display: 'block', textDecoration: 'none', cursor: 'pointer' }}
            >
              <img
                src="/images/lifestyle-exterior.jpg"
                alt="Historic red brick exterior of Urban District Market in Charlotte"
                className="parallax-img"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
