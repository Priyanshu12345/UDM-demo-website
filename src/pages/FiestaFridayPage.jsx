import React, { useEffect } from "react";
import Footer from "../components/Footer";

const highlights = [
  { img: "/images/event-music.jpg",     caption: "Live Latin music sets" },
  { img: "/images/mosaic-food.jpg",     caption: "Fresh street tacos & bites" },
  { img: "/images/mosaic-patio.jpg",    caption: "Patio party vibes" },
  { img: "/images/mosaic-bar.jpg",      caption: "Artisanal margarita bar" },
];

const standingMenu = [
  { item: "Classic Margarita",   price: "$12" },
  { item: "Spicy Mango Marg",    price: "$14" },
  { item: "Street Taco Flight",  price: "$16" },
  { item: "Horchata Espresso",   price: "$7"  },
];

export default function FiestaFridayPage({ onExploreClick }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="page-root">
      <main>
        {/* Hero */}
        <section className="inner-page-hero">
          <div className="site-container">
            <span className="label-editorial" style={{ marginBottom: "1rem", display: "block" }}>FIESTA FRIDAY</span>
            <h1 className="inner-page-title">
              Let's have<br />
              <em className="font-display-italic" style={{ fontStyle: "italic" }}>a fiesta!</em>
            </h1>
            <div className="inner-page-hero-cols">
              <p className="inner-page-lead">
                Kick off your weekend with curated Latin tunes, artisanal margaritas, fresh street tacos,
                and great outdoor vibes on the courtyard patio. Every Friday night.
              </p>
              <div className="event-detail-stats">
                <div className="event-stat"><span className="event-stat-label">WHEN</span><span className="event-stat-value">Every Friday Evening</span></div>
                <div className="event-stat"><span className="event-stat-label">HOURS</span><span className="event-stat-value">6:00 PM - 10:00 PM</span></div>
                <div className="event-stat"><span className="event-stat-label">ENTRY</span><span className="event-stat-value">Free Admission</span></div>
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
              <img src="/images/mosaic-patio.jpg" alt="Fiesta Friday patio" />
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="section-canvas">
          <div className="site-container">
            <span className="label-editorial" style={{ display: "block", marginBottom: "2rem" }}>THE EXPERIENCE</span>
            <h2 className="section-title-display" style={{ marginBottom: "2.5rem" }}>
              Music, food &amp; dancing.
            </h2>
            <div className="event-highlights-grid">
              {highlights.map((h, i) => (
                <div key={i} className={`event-highlight-card ${i === 2 ? "event-highlight-wide" : ""}`}>
                  <div className="event-highlight-img">
                    <img src={h.img} alt={h.caption} />
                  </div>
                  <span className="event-highlight-caption">{h.caption}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standing menu */}
        <section className="section-canvas" style={{ backgroundColor: "var(--bg-canvas-alt)" }}>
          <div className="site-container">
            <div className="pe-pricing-header">
              <span className="label-editorial" style={{ display: "block", marginBottom: "0.75rem" }}>STANDING MENU</span>
              <h2 className="section-title-display">Standing on Fridays.</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginTop: "1.5rem" }}>
                <div className="event-stat"><span className="event-stat-label">DRINKS</span><span className="event-stat-value">Rotating</span></div>
                <div className="event-stat"><span className="event-stat-label">FOOD</span><span className="event-stat-value">All 10 Kitchens</span></div>
                <div className="event-stat"><span className="event-stat-label">MUSIC</span><span className="event-stat-value">Live DJ</span></div>
              </div>
            </div>
            <div className="pe-pricing-list" style={{ marginTop: "3rem" }}>
              {standingMenu.map((item, i) => (
                <div key={i} className="pe-pricing-row">
                  <span className="pe-pricing-name font-display">{item.item}</span>
                  <span className="pe-pricing-desc">Featured item &bull; Fiesta Friday exclusive</span>
                  <span className="pe-pricing-price font-display">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press / In the news */}
        <section className="section-canvas">
          <div className="site-container">
            <div className="press-grid">
              <div>
                <span className="label-editorial" style={{ display: "block", marginBottom: "1.5rem" }}>IN THE NEWS</span>
                <div className="press-list">
                  {["Charlotte Observer - A Party Worth Joining", "CLT Weekend Guide - Best Friday Night Spots",
                    "QC Life - Top Spots for Latin Flavor"].map((p, i) => (
                    <div key={i} className="press-item">
                      <a href="#" className="press-link">
                        <span className="press-headline">{p}</span>
                        <span className="press-arrow">&rarr;</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="press-feature-card">
                  <div className="press-feature-img">
                    <img src="/images/lifestyle-exterior.jpg" alt="Fiesta Friday crowd" />
                  </div>
                  <div className="press-feature-body">
                    <h3 className="press-feature-title font-display">"Charlotte has never felt this alive on a Friday night."</h3>
                    <p className="press-feature-text">The patio fills up fast. Come early, stay late. The margaritas are worth fighting for a seat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="section-canvas">
          <div className="site-container">
            <div className="newsletter-block">
              <div>
                <span className="label-editorial" style={{ display: "block", marginBottom: "0.75rem" }}>MAKE THE PLAN</span>
                <h2 className="section-title-display">Join in the buzz.</h2>
                <p style={{ marginTop: "0.75rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  Get weekly reminders, event previews, and first-access specials delivered to your inbox.
                </p>
              </div>
              <div className="newsletter-form">
                <div className="newsletter-input-row">
                  <input type="email" placeholder="Add your email here..." className="newsletter-input" />
                  <button type="button" className="btn-pill-dark"><span>Subscribe</span><span className="btn-dot-gold" /></button>
                </div>
                <div className="newsletter-freq-list">
                  <span>Every Week</span><span>&bull;</span><span>Bar News, Drink Specials</span>
                </div>
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
