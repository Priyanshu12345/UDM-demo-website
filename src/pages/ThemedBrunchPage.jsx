import React, { useEffect } from "react";
import Footer from "../components/Footer";

const monthlyThemes = [
  { month: "JANUARY",   theme: "Insom-nia",          desc: "Night-owl brunch meets sleepy Sunday", tag: "View More" },
  { month: "FEBRUARY",  theme: "Encanto",            desc: "Magical Colombian-inspired brunch set", tag: "View More" },
  { month: "MARCH",     theme: "Sunkiss Brunch",     desc: "Spring vibes with fresh juices and pastels", tag: "View More" },
  { month: "APRIL",     theme: "Visionz",            desc: "Future-forward brunch with modern pop-ups", tag: "View More" },
  { month: "MAY",       theme: "K-Pop Demon Hunters", desc: "Anime-themed brunch with J-K comfort food", tag: "View More" },
  { month: "JUNE",      theme: "Amigas",             desc: "Latin-girl summer brunch, all the besties", tag: "View More" },
  { month: "JULY",      theme: "Pajama Party",       desc: "Come as you are - loungewear welcome", tag: "View More" },
  { month: "AUGUST",    theme: "Holidays at UDM",    desc: "Summer holidays with all the fixings", tag: "View More" },
];

const archiveImgs = [
  "/images/event-game.jpg",
  "/images/event-trivia.jpg",
  "/images/event-makers.jpg",
  "/images/event-music.jpg",
  "/images/mosaic-food.jpg",
  "/images/mosaic-patio.jpg",
];

export default function ThemedBrunchPage({ onExploreClick }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="page-root">
      <main>
        {/* Hero */}
        <section className="inner-page-hero">
          <div className="site-container">
            <span className="label-editorial" style={{ marginBottom: "1rem", display: "block" }}>THEMED BRUNCH</span>
            <h1 className="inner-page-title">
              <em className="font-display-italic" style={{ fontStyle: "italic" }}>"For the fans!"</em>
            </h1>
            <div className="inner-page-hero-cols">
              <p className="inner-page-lead">
                A different theme every month. Weekend morning rendezvous featuring freshly baked mochi donuts,
                savory bao breakfast buns, specialty matcha, and brunch libations from LaBARatory.
              </p>
              <div className="event-detail-stats">
                <div className="event-stat"><span className="event-stat-label">WHEN</span><span className="event-stat-value">Saturdays &amp; Sundays</span></div>
                <div className="event-stat"><span className="event-stat-label">HOURS</span><span className="event-stat-value">11:00 AM - 3:00 PM</span></div>
                <div className="event-stat"><span className="event-stat-label">THEMED</span><span className="event-stat-value">New Theme Every Month</span></div>
              </div>
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <a href="https://www.eventbrite.com" target="_blank" rel="noopener noreferrer" className="btn-pill-dark">
                <span>Get Tickets</span>
                <span className="btn-dot-gold" />
              </a>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section className="inner-page-full-img">
          <div className="site-container">
            <div className="inner-hero-image-frame">
              <img src="/images/hero-interior.jpg" alt="Themed Brunch" />
            </div>
          </div>
        </section>

        {/* Sold-out highlight + stats */}
        <section className="section-canvas">
          <div className="site-container">
            <div className="brunch-sold-out-grid">
              <div className="brunch-sold-out-badge">
                <div className="sold-out-inner">
                  <span className="sold-out-label">SOLD OUT</span>
                  <div style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1.1 }}>K-POP DEMON HUNTERS BRUNCH</div>
                  <div style={{ fontSize: "0.8125rem", marginTop: "0.5rem", opacity: 0.8 }}>February 14-15, 2026</div>
                  <a href="#" className="btn-pill-dark" style={{ marginTop: "1.5rem", backgroundColor: "white", color: "var(--ink)", borderColor: "white" }}>
                    <span>Join Waitlist</span>
                  </a>
                </div>
              </div>
              <div className="brunch-sold-out-info">
                <span className="label-editorial" style={{ display: "block", marginBottom: "1.5rem" }}>THIS MONTH'S BRUNCH</span>
                <h2 className="section-title-display">Themed Brunch</h2>
                <div className="pe-pricing-list" style={{ marginTop: "2rem" }}>
                  <div className="pe-pricing-row">
                    <span className="pe-pricing-name">Early Bird</span>
                    <span className="pe-pricing-desc">First 30 tickets &bull; Includes mimosa</span>
                    <span className="pe-pricing-price font-display">$25</span>
                  </div>
                  <div className="pe-pricing-row">
                    <span className="pe-pricing-name">General</span>
                    <span className="pe-pricing-desc">Standard admission</span>
                    <span className="pe-pricing-price font-display">$35</span>
                  </div>
                  <div className="pe-pricing-row">
                    <span className="pe-pricing-name">VIP Table</span>
                    <span className="pe-pricing-desc">Reserved table, bottle service for 4</span>
                    <span className="pe-pricing-price font-display">$120</span>
                  </div>
                </div>
                <p style={{ marginTop: "1.5rem", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  Download for your <a href="#" className="text-link">single event ticket</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Monthly Themes List */}
        <section className="section-canvas" style={{ backgroundColor: "var(--bg-canvas-alt)" }}>
          <div className="site-container">
            <span className="label-editorial" style={{ display: "block", marginBottom: "2rem" }}>MONTHLY CALENDAR</span>
            <h2 className="section-title-display" style={{ marginBottom: "3rem" }}>A theme for every month.</h2>
            <div className="brunch-themes-list">
              {monthlyThemes.map((t, i) => (
                <div key={i} className="brunch-theme-row">
                  <span className="brunch-theme-month">{t.month}</span>
                  <h3 className="brunch-theme-name font-display">{t.theme}</h3>
                  <span className="brunch-theme-desc">{t.desc}</span>
                  <a href="#" className="brunch-theme-cta">{t.tag} &rarr;</a>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <a href="https://www.eventbrite.com" target="_blank" rel="noopener noreferrer" className="btn-pill-dark">
                <span>View All on Eventbrite</span><span className="btn-dot-gold" />
              </a>
            </div>
          </div>
        </section>

        {/* Archive */}
        <section className="section-canvas">
          <div className="site-container">
            <span className="label-editorial" style={{ display: "block", marginBottom: "1.5rem" }}>FROM THE ARCHIVE</span>
            <h2 className="section-title-display" style={{ marginBottom: "2.5rem" }}>From the archive.</h2>
            <div className="archive-grid">
              {archiveImgs.map((src, i) => (
                <div key={i} className="archive-grid-item">
                  <img src={src} alt={`Brunch archive ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="section-canvas">
          <div className="site-container">
            <div className="newsletter-block">
              <div>
                <span className="label-editorial" style={{ display: "block", marginBottom: "0.75rem" }}>JOIN THE NEWSLETTER</span>
                <h2 className="section-title-display">Join in the buzz.</h2>
              </div>
              <div className="newsletter-form">
                <div className="newsletter-input-row">
                  <input type="email" placeholder="Add your email here..." className="newsletter-input" />
                  <button type="button" className="btn-pill-dark"><span>Subscribe</span><span className="btn-dot-gold" /></button>
                </div>
                <div className="newsletter-freq-list"><span>Monthly Theme Drops</span><span>&bull;</span><span>Early Access Tickets</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom banner */}
        <section className="inner-page-cta-banner">
          <div className="site-container">
            <p className="cta-banner-text font-display">
              The <em className="font-display-italic" style={{ fontStyle: "italic" }}>vibe you want</em> is waiting at your posts.
            </p>
            <div className="cta-banner-actions">
              <a href="https://www.eventbrite.com" target="_blank" rel="noopener noreferrer" className="btn-pill-dark">
                <span>Get Tickets</span><span className="btn-dot-gold" />
              </a>
              <div className="cta-social-links">
                <a href="https://www.instagram.com/urbandistrictmarket/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer onExploreClick={onExploreClick} />
    </div>
  );
}
