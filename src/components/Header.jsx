import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './site/Logo';

export default function Header({ onExploreClick, isScrolled = false, scrollProgress = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const isHome = location.pathname === '/';

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* Top Reading / Scroll Progress Bar */}
      <div
        className="header-scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      <div className="site-container header-inner">
        {/* Left: Brand Mark & Wordmark */}
        <Link to="/" className="header-brand" aria-label="Urban District Market Homepage">
          <Logo size="medium" />
        </Link>

        {/* Center: Delicate Editorial Navigation */}
        <nav className="header-nav" aria-label="Main Navigation">
          <a
            href="#stalls"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              onExploreClick();
            }}
          >
            STALLS
          </a>
          <Link
            to={isHome ? "#calendar" : "/#calendar"}
            className="nav-link"
            onClick={(e) => {
              if (isHome) {
                const el = document.getElementById('calendar');
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          >
            CALENDAR
          </Link>
          <Link
            to="/private-events"
            className={`nav-link ${location.pathname === '/private-events' ? 'active-link' : ''}`}
          >
            PRIVATE EVENTS
          </Link>
          <Link
            to="/asian-night-market"
            className={`nav-link ${location.pathname === '/asian-night-market' ? 'active-link' : ''}`}
          >
            NIGHT MARKET
          </Link>
          <Link
            to="/fiesta-friday"
            className={`nav-link ${location.pathname === '/fiesta-friday' ? 'active-link' : ''}`}
          >
            FIESTA FRIDAY
          </Link>
          <Link
            to="/themed-brunch"
            className={`nav-link ${location.pathname === '/themed-brunch' ? 'active-link' : ''}`}
          >
            BRUNCH
          </Link>
          <Link
            to="/photos"
            className={`nav-link ${location.pathname === '/photos' ? 'active-link' : ''}`}
          >
            PHOTOS
          </Link>
        </nav>

        {/* Right: Dark Pill CTA & Mobile Toggle */}
        <div className="header-cta-wrap">
          <Link
            to={isHome ? "#visit" : "/#visit"}
            className="btn-pill-dark"
            style={{ padding: '0.55rem 1.15rem', fontSize: '0.75rem' }}
            onClick={(e) => {
              if (isHome) {
                const el = document.getElementById('visit');
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          >
            <span>VISIT US</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="menu-toggle-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" id="mobile-menu">
          <div className="mobile-nav-links">
            <Link to="/" className="mobile-nav-item" onClick={closeMobileMenu}>
              Home
            </Link>
            <a
              href="#stalls"
              className="mobile-nav-item"
              onClick={(e) => {
                e.preventDefault();
                closeMobileMenu();
                onExploreClick();
              }}
            >
              Ten Stalls
            </a>
            <Link to="/private-events" className="mobile-nav-item" onClick={closeMobileMenu}>
              Private Events
            </Link>
            <Link to="/asian-night-market" className="mobile-nav-item" onClick={closeMobileMenu}>
              Asian Night Market
            </Link>
            <Link to="/fiesta-friday" className="mobile-nav-item" onClick={closeMobileMenu}>
              Fiesta Friday
            </Link>
            <Link to="/themed-brunch" className="mobile-nav-item" onClick={closeMobileMenu}>
              Themed Brunch
            </Link>
            <Link to="/photos" className="mobile-nav-item" onClick={closeMobileMenu}>
              Photos Gallery
            </Link>
            <Link
              to={isHome ? "#philosophy" : "/#philosophy"}
              className="mobile-nav-item"
              onClick={closeMobileMenu}
            >
              Our Philosophy
            </Link>
            <Link
              to={isHome ? "#calendar" : "/#calendar"}
              className="mobile-nav-item"
              onClick={closeMobileMenu}
            >
              Events Calendar
            </Link>
            <Link
              to={isHome ? "#visit" : "/#visit"}
              className="mobile-nav-item"
              onClick={closeMobileMenu}
            >
              Location &amp; Hours
            </Link>
          </div>

          <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border-fine)' }}>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              2315 N Davidson St, Charlotte, NC 28205
            </p>
            <Link
              to={isHome ? "#visit" : "/#visit"}
              className="btn-pill-dark"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={closeMobileMenu}
            >
              <span>PLAN YOUR VISIT</span>
              <span className="btn-dot-gold" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
