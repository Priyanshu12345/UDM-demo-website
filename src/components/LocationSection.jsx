import React from 'react';
import VenueMap from './VenueMap';

export default function LocationSection() {
  const googleMapsUrl = 'https://www.google.com/maps/dir/?api=1&destination=2315+N+Davidson+St+Charlotte+NC+28205';

  return (
    <section id="visit" className="section-canvas section-divider-top location-section">
      <div className="site-container">
        <div className="location-grid">
          {/* Left Column: Address, Visitor Copy & CTAs with Scroll Reveal */}
          <div className="location-left reveal-on-scroll">
            <span className="label-editorial">VISIT & GETTING HERE</span>

            <h2 className="location-address">
              <span>2315 N Davidson St</span>
              <br />
              <span>Charlotte, NC 28205</span>
            </h2>

            <p className="location-desc">
              Located in Charlotte's historic Mill District right between NoDa and Villa Heights. Just steps from the 25th Street Station on the LYNX Blue Line and directly connected to the Cross-Charlotte Trail.
            </p>

            <div className="location-actions">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-dark"
                aria-label="Get driving directions to Urban District Market on Google Maps"
              >
                <span>Get directions</span>
                <span className="btn-dot-gold" />
              </a>

              <a
                href="#hours"
                className="btn-circle-arrow-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('visit-hours-table')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Transit & parking</span>
                <span className="circle-arrow-icon">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path d="M2 12L12 2M12 2H4M12 2V10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>

            <div style={{ padding: '1.25rem', backgroundColor: 'var(--bg-canvas-alt)', borderLeft: '2px solid var(--accent-gold)', marginTop: '1.5rem', maxWidth: '440px' }}>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Free Parking:</strong> Dedicated 200+ vehicle lot on-site accessible from N Davidson St and 25th St.
              </p>
            </div>
          </div>

          {/* Right Column: Illustrated Yellow Venue Map & Hours Table with Scroll Reveal */}
          <div className="location-right reveal-on-scroll delay-100">
            {/* Architectural Vector Map */}
            <VenueMap />

            {/* Clean Compact Visit Details & Hours */}
            <div id="visit-hours-table" className="visit-info-list">
              <div className="visit-info-row">
                <span className="visit-info-label">MONDAY – THURSDAY</span>
                <span className="visit-info-val">11:00 AM – 9:00 PM</span>
              </div>
              <div className="visit-info-row">
                <span className="visit-info-label">FRIDAY – SATURDAY</span>
                <span className="visit-info-val">11:00 AM – 10:00 PM</span>
              </div>
              <div className="visit-info-row">
                <span className="visit-info-label">SUNDAY</span>
                <span className="visit-info-val">11:00 AM – 8:00 PM</span>
              </div>
              <div className="visit-info-row">
                <span className="visit-info-label">PARKING</span>
                <span className="visit-info-val">Free on-site 200+ lot & street</span>
              </div>
              <div className="visit-info-row">
                <span className="visit-info-label">DOGS / PETS</span>
                <span className="visit-info-val">Welcome on all outdoor patios</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
