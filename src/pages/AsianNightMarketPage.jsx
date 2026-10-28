import React, { useEffect } from "react";
import Footer from "../components/Footer";

const highlights = [
  { img: "/images/event-music.jpg",    caption: "Live cultural entertainment" },
  { img: "/images/mosaic-food.jpg",    caption: "Guest chefs & specialty dishes" },
  { img: "/images/mosaic-patio.jpg",   caption: "Outdoor night market atmosphere" },
  { img: "/images/lifestyle-night.jpg",caption: "Evening festivities under the lights" },
];

const press = [
  { outlet: "Charlotte Magazine",  headline: "The Best Night Out in Charlotte" },
  { outlet: "CLT Blog",            headline: "Places to Go" },
  { outlet: "Soul Night?",         headline: "Charlotte's Hottest Night Market" },
  { outlet: "Now Accepting at Urban District Market", headline: "Vendor Sign-ups" },
  { outlet: "Saturday",            headline: "Weekly Market Returns" },
];

export default function AsianNightMarketPage({ onExploreClick }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="page-root">
      <main>
        {/* Hero */}
        <section className="inner-page-hero">
          <div className="site-container">
            <span className="label-editorial" style={{ marginBottom: "1rem", display: "block" }}>ASIAN NIGHT MARKET</span>
            <h1 className="inner-page-title" style={{ maxWidth: "14ch" }}>
              Asian<br />
              <em className="font-display-italic" style={{ fontStyle: "italic" }}>Night Market.</em>
            </h1>
            <div className="inner-page-hero-cols">
              <p className="inner-page-lead">
                An evening celebration inspired by the vibrant night markets of Taipei, Tokyo, and Seoul.
                Guest chefs, specialty skewers, bubble tea, and live cultural entertainment every third Friday.
              </p>
              <div className="event-detail-stats">
                <div className="event-stat"><span className="event-stat-label">WHEN</span><span className="event-stat-value">Third Friday of Every Month</span></div>
                <div className="event-stat"><span className="event-stat-label">HOURS</span><span className="event-stat-value">6:00 PM - 10:00 PM</span></div>
                <div className="event-stat"><span className="event-stat-label">ADMISSION</span><span className="event-stat-value">Free Entry</span></div>
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
              <img src="/images/lifestyle-night.jpg" alt="Asian Night Market" />
            </div>
          </div>
        </section>

        {/* Photo grid highlights */}
        <section className="section-canvas">
          <div className="site-container">
            <span className="label-editorial" style={{ display: "block", marginBottom: "2rem" }}>HIGHLIGHTS</span>
            <h2 className="section-title-display" style={{ marginBottom: "2.5rem" }}>
              What Draws you to Come.
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

        {/* Press / Read More */}
        <section className="section-canvas" style={{ backgroundColor: "var(--bg-canvas-alt)" }}>
          <div className="site-container">
            <div className="press-grid">
              <div>
                <span className="label-editorial" style={{ display: "block", marginBottom: "1.5rem" }}>READ MORE</span>
                <div className="press-list">
                  {press.map((p, i) => (
                    <div key={i} className="press-item">
                      <a href="#" className="press-link">
                        <span className="press-outlet">{p.outlet}</span>
                        <span className="press-headline">{p.headline}</span>
                        <span className="press-arrow">&rarr;</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="label-editorial" style={{ display: "block", marginBottom: "1.5rem" }}>ZARA COOK</span>
                <div className="press-feature-card">
                  <div className="press-feature-img">
                    <img src="/images/event-trivia.jpg" alt="Featured article" />
                  </div>
                  <div className="press-feature-body">
                    <span className="label-editorial" style={{ display: "block", marginBottom: "0.5rem" }}>FEATURED REVIEW</span>
                    <h3 className="press-feature-title font-display">
                      "The atmosphere alone is worth the trip."
                    </h3>
                    <p className="press-feature-text">
                      A genuine night market experience transplanted to Charlotte's Mill District. The scent of
                      grilled skewers hits you first, then the glow of lanterns, and then the sound of live
                      traditional music.
                    </p>
                    <a href="#" className="text-link">Read full review &rarr;</a>
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
                <span className="label-editorial" style={{ display: "block", marginBottom: "0.75rem" }}>JOIN THE NEWSLETTER</span>
                <h2 className="section-title-display">Join in the buzz.</h2>
                <p style={{ marginTop: "0.75rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  Be first to know about upcoming Night Market themes, guest chefs, and ticket drops.
                </p>
              </div>
              <div className="newsletter-form">
                <div className="newsletter-input-row">
                  <input type="email" placeholder="Add your email here..." className="newsletter-input" />
                  <button type="button" className="btn-pill-dark"><span>Subscribe</span><span className="btn-dot-gold" /></button>
                </div>
                <div className="newsletter-freq-list">
                  <span>Once a Month</span>
                  <span>&bull;</span>
                  <span>Event Previews</span>
                  <span>&bull;</span>
                  <span>Know Before You Go</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA banner */}
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
                <a href="https://www.facebook.com/urbandistrictmarket/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
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
