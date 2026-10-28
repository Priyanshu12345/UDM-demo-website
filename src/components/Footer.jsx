import React from 'react';
import Logo from './site/Logo';

export default function Footer({ onExploreClick }) {
  return (
    <footer className="site-footer">
      <div className="site-container">
        {/* Top Grid */}
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <a href="#" className="footer-brand-link" aria-label="Urban District Market Home">
              <Logo size="medium" />
            </a>

            <p className="footer-tagline">
              Ten independent kitchens, craft drinks, and room for everyone under one hive in Charlotte's historic Mill District.
            </p>

            <div className="footer-social-links">
              <a
                href="https://www.instagram.com/urbandistrictmarket/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/urbandistrictmarket/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href="https://www.eventbrite.com/o/the-mob-group-inc-63811031213"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Eventbrite Calendar"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 1: Stalls */}
          <div>
            <h4 className="footer-col-title">THE FOOD HALL</h4>
            <ul className="footer-links-list">
              <li>
                <button
                  type="button"
                  className="footer-nav-link"
                  onClick={onExploreClick}
                >
                  Explore All 10 Stalls
                </button>
              </li>
              <li>
                <a href="#market" className="footer-nav-link">
                  LaBARatory Cocktail Bar
                </a>
              </li>
              <li>
                <a href="#market" className="footer-nav-link">
                  UDM Super Bodega
                </a>
              </li>
              <li>
                <a href="#philosophy" className="footer-nav-link">
                  Vendor Opportunities
                </a>
              </li>
              <li>
                <a href="#visit" className="footer-nav-link">
                  Catering & Group Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Experiences */}
          <div>
            <h4 className="footer-col-title">HAPPENINGS</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#experiences" className="footer-nav-link">
                  Asian Night Market
                </a>
              </li>
              <li>
                <a href="#experiences" className="footer-nav-link">
                  Fiesta Friday Live
                </a>
              </li>
              <li>
                <a href="#experiences" className="footer-nav-link">
                  Weekend Themed Brunch
                </a>
              </li>
              <li>
                <a href="#calendar" className="footer-nav-link">
                  Tabletop Game Meetups
                </a>
              </li>
              <li>
                <a href="#experiences" className="footer-nav-link">
                  Private Karaoke & Buyouts
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Visit & Contact */}
          <div>
            <h4 className="footer-col-title">FIND THE HIVE</h4>
            <ul className="footer-links-list">
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem' }}>
                2315 N Davidson St
                <br />
                Charlotte, NC 28205
              </li>
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem', paddingTop: '0.25rem' }}>
                Daily: 11:00 AM – Late
              </li>
              <li style={{ paddingTop: '0.5rem' }}>
                <a href="mailto:info@udmmilldistrict.com" className="footer-nav-link">
                  info@udmmilldistrict.com
                </a>
              </li>
              <li>
                <a href="tel:7045550199" className="footer-nav-link">
                  (704) 555-0199
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Fine Horizontal Divider & Legal */}
        <div className="footer-bottom-bar">
          <div>
            <span>© 2026 Urban District Market. All rights reserved.</span>
          </div>

          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#accessibility">Accessibility</a>
            <span>Art-directed for the Queen City</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
