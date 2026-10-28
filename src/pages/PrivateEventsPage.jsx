import React, { useEffect } from "react";
import Footer from "../components/Footer";

const packages = [
  { name: "Happy Hour",  price: "$200+", desc: "2-hour private access, basic bar package, up to 30 guests" },
  { name: "Party",       price: "$400+", desc: "4-hour private access, full craft bar, up to 75 guests" },
  { name: "Buyout",      price: "$500+", desc: "Full market buyout, custom menus, 350+ capacity, dedicated staff" },
  { name: "Corporate",   price: "$400+", desc: "Team events, catered lunch/dinner, A/V setup, breakout space" },
];

const features = [
  { title: "Private Karaoke Suites",   desc: "Soundproofed private rooms with professional karaoke systems, seating for 8-16, and dedicated bar service." },
  { title: "Full Market Buyouts",      desc: "Reserve the entire 15,000 sq ft market floor for your celebration, with access to all 10 kitchens and LaBARatory." },
  { title: "Custom Menus",             desc: "Work directly with our kitchen partners to craft a curated menu perfect for your dietary needs and preferences." },
  { title: "Courtyard & Games",        desc: "Open-air patio with lawn games, string lights, and a separate bar station - ideal for daytime gatherings and receptions." },
];

export default function PrivateEventsPage({ onExploreClick }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="page-root">
      <main>
        {/* Hero */}
        <section className="inner-page-hero">
          <div className="site-container">
            <span className="label-editorial" style={{ marginBottom: "1rem", display: "block" }}>PRIVATE EVENTS</span>
            <h1 className="inner-page-title">
              Host your next<br />
              <em className="font-display-italic" style={{ fontStyle: "italic" }}>gathering here.</em>
            </h1>
            <div className="inner-page-hero-cols">
              <p className="inner-page-lead">
                From intimate birthday dinners in private karaoke suites to full market buyouts with 350+ capacity,
                custom menus, and dedicated bartending - UDM is Charlotte's most versatile event destination.
              </p>
              <div className="event-detail-stats">
                <div className="event-stat"><span className="event-stat-label">CAPACITY</span><span className="event-stat-value">Up to 350+ Guests</span></div>
                <div className="event-stat"><span className="event-stat-label">AVAILABLE</span><span className="event-stat-value">7 Days a Week</span></div>
                <div className="event-stat"><span className="event-stat-label">SPACE</span><span className="event-stat-value">15,000 sq ft Market Floor</span></div>
              </div>
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <a href="#contact-form" className="btn-pill-dark">
                <span>Inquire Now</span>
                <span className="btn-dot-gold" />
              </a>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="inner-page-full-img">
          <div className="site-container">
            <div className="inner-hero-image-frame">
              <img src="/images/hero-interior.jpg" alt="Market event space" />
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="section-canvas">
          <div className="site-container">
            <div className="pe-features-grid">
              {features.map((f, i) => (
                <div key={i} className="pe-feature-card">
                  <span className="label-editorial" style={{ display: "block", marginBottom: "0.75rem" }}>0{i + 1}</span>
                  <h3 className="pe-feature-title">{f.title}</h3>
                  <p className="pe-feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
            {/* Photo strip */}
            <div className="pe-photo-strip">
              <div className="pe-photo-strip-item pe-photo-wide">
                <img src="/images/event-makers.jpg" alt="Event space" />
              </div>
              <div className="pe-photo-strip-item">
                <img src="/images/mosaic-bar.jpg" alt="Bar setup" />
              </div>
              <div className="pe-photo-strip-item">
                <img src="/images/event-game.jpg" alt="Games" />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-canvas" style={{ backgroundColor: "var(--bg-canvas-alt)" }}>
          <div className="site-container">
            <div className="pe-pricing-header">
              <span className="label-editorial" style={{ display: "block", marginBottom: "0.75rem" }}>INVESTMENT</span>
              <h2 className="section-title-display">Simple, hourly.</h2>
              <p className="section-body-text" style={{ maxWidth: "38ch", marginTop: "0.75rem" }}>
                Flexible packages that scale with your headcount. All rates include setup, teardown, and a dedicated event host.
              </p>
            </div>
            <div className="pe-pricing-list">
              {packages.map((pkg, i) => (
                <div key={i} className="pe-pricing-row">
                  <span className="pe-pricing-name font-display">{pkg.name}</span>
                  <span className="pe-pricing-desc">{pkg.desc}</span>
                  <span className="pe-pricing-price font-display">{pkg.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Every reason to gather */}
        <section className="section-canvas">
          <div className="site-container">
            <span className="label-editorial" style={{ display: "block", marginBottom: "1.5rem" }}>PERFECT FOR</span>
            <h2 className="section-title-display" style={{ marginBottom: "2rem" }}>Every reason to gather.</h2>
            <div className="pe-tags-row">
              {["Birthday Parties", "Corporate Team Outings", "Holiday Gatherings", "Rehearsal Dinners", "The District Showcase",
                "Pop-Up Markets", "Charity Fundraisers", "Alumni Meetups", "Launch Parties", "Family Reunions", "Graduation Celebrations"].map((t, i) => (
                <span key={i} className="pe-tag">{t}</span>
              ))}
            </div>
            <div className="pe-gallery-row" style={{ marginTop: "3rem" }}>
              <div className="pe-gallery-img"><img src="/images/mosaic-patio.jpg" alt="Outdoor gathering" /></div>
              <div className="pe-gallery-img"><img src="/images/event-music.jpg" alt="Music event" /></div>
              <div className="pe-gallery-img pe-gallery-img-tall"><img src="/images/lifestyle-night.jpg" alt="Night gathering" /></div>
            </div>
          </div>
        </section>

        {/* Contact form CTA */}
        <section id="contact-form" className="section-canvas" style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}>
          <div className="site-container">
            <div className="pe-contact-grid">
              <div>
                <span className="label-editorial" style={{ display: "block", marginBottom: "0.75rem", color: "var(--honey)" }}>GET IN TOUCH</span>
                <h2 className="section-title-display" style={{ color: "var(--paper)" }}>Let's plan your event.</h2>
                <p style={{ marginTop: "1rem", fontSize: "0.9375rem", lineHeight: 1.7, color: "rgba(247,246,242,0.7)", maxWidth: "40ch" }}>
                  Tell us about your vision and we'll respond within one business day with availability and a custom quote.
                </p>
              </div>
              <div className="pe-contact-form">
                <div className="pe-form-row">
                  <input type="text" placeholder="Your name" className="pe-input" />
                  <input type="email" placeholder="Email address" className="pe-input" />
                </div>
                <input type="text" placeholder="Event type & estimated headcount" className="pe-input" style={{ width: "100%" }} />
                <textarea placeholder="Tell us about your event..." className="pe-input pe-textarea" rows={4} />
                <button type="button" className="btn-pill-dark" style={{ marginTop: "0.5rem", backgroundColor: "var(--honey)", color: "var(--ink)", borderColor: "var(--honey)" }}>
                  <span>Send Inquiry</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer onExploreClick={onExploreClick} />
    </div>
  );
}
