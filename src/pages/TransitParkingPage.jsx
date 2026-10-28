import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import VenueMap from "../components/VenueMap";

export default function TransitParkingPage({ onExploreClick }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const googleMapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=2315+N+Davidson+St+Charlotte+NC+28205";

  const options = [
    {
      num: "01",
      title: "Free On-Site Parking",
      desc: "Over 200 dedicated free surface parking spaces on-site. Entrances located on both N Davidson St and 25th St with ADA accessible spaces adjacent to the main ramps.",
    },
    {
      num: "02",
      title: "LYNX Blue Line Light Rail",
      desc: "Arrive via CATS light rail at the 25th Street Station. From the platform, it's an easy 2-minute walk (just one block) directly into our courtyard and dining hall.",
    },
    {
      num: "03",
      title: "Cross-Charlotte Trail & Biking",
      desc: "Direct connectivity to the Cross-Charlotte Trail (XCLT). Multiple dedicated bike racks are available right by our courtyard and patio entrance.",
    },
    {
      num: "04",
      title: "Rideshare Drop-Off & Pickup",
      desc: "Catching an Uber or Lyft? Set your destination to 2315 N Davidson St. A convenient curbside drop-off zone is located right off the 25th Street side.",
    },
  ];

  return (
    <div className="page-root">
      <main>
        {/* Hero */}
        <section className="inner-page-hero">
          <div className="site-container">
            <span className="label-editorial" style={{ marginBottom: "1rem", display: "block" }}>
              VISIT & GETTING HERE
            </span>
            <h1 className="inner-page-title">
              Transit &amp;<br />
              <em className="font-display-italic" style={{ color: "var(--honey-deep, #8f5d00)", fontStyle: "italic" }}>
                parking guide.
              </em>
            </h1>
            <div className="inner-page-hero-cols">
              <p className="inner-page-lead">
                Located in Charlotte's historic Mill District right between NoDa and Villa Heights.
                Whether you're driving, taking the light rail, cycling the greenway, or walking over,
                visiting Urban District Market is easy and accessible.
              </p>
              <div className="event-detail-stats">
                <div className="event-stat">
                  <span className="event-stat-label">ADDRESS</span>
                  <span className="event-stat-value">2315 N Davidson St, Charlotte, NC 28205</span>
                </div>
                <div className="event-stat">
                  <span className="event-stat-label">PARKING</span>
                  <span className="event-stat-value">Free Dedicated 200+ Space Lot</span>
                </div>
                <div className="event-stat">
                  <span className="event-stat-label">LIGHT RAIL</span>
                  <span className="event-stat-value">25th Street Station (2-min walk)</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-dark"
                aria-label="Open directions in Google Maps"
              >
                <span>Get Driving Directions</span>
                <span className="btn-dot-gold" />
              </a>

              <a
                href="#map-section"
                className="btn-circle-arrow-link"
                style={{ padding: "0.75rem 0" }}
              >
                <span>View Venue Map</span>
                <span className="circle-arrow-icon">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path d="M2 12L12 2M12 2H4M12 2V10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* 4 Feature Cards */}
        <section className="section-canvas">
          <div className="site-container">
            <span className="label-editorial" style={{ display: "block", marginBottom: "1rem" }}>
              GETTING HERE
            </span>
            <h2 className="section-title-display" style={{ marginBottom: "2.5rem" }}>
              Ways to arrive.
            </h2>

            <div className="pe-features-grid">
              {options.map((opt) => (
                <div key={opt.num} className="pe-feature-card">
                  <span className="label-editorial" style={{ display: "block", marginBottom: "0.75rem" }}>
                    {opt.num}
                  </span>
                  <h3 className="pe-feature-title">{opt.title}</h3>
                  <p className="pe-feature-desc">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Venue Map & Hours Section */}
        <section id="map-section" className="section-canvas-alt" style={{ padding: "clamp(3.5rem, 6vw, 6rem) 0" }}>
          <div className="site-container">
            <div className="location-grid">
              {/* Map */}
              <div>
                <span className="label-editorial" style={{ display: "block", marginBottom: "1rem" }}>
                  SITE LAYOUT
                </span>
                <h2 className="section-title-display" style={{ marginBottom: "1.5rem" }}>
                  Market layout &amp; access.
                </h2>
                <p className="section-body-text" style={{ marginBottom: "1.5rem" }}>
                  Illustrated site map showing our main food hall, courtyard patio, free on-site parking lot,
                  and direct connections to N Davidson St and the LYNX Blue Line trail.
                </p>
                <div style={{ borderRadius: "4px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
                  <VenueMap />
                </div>
              </div>

              {/* Hours & Helpful Tips */}
              <div>
                <span className="label-editorial" style={{ display: "block", marginBottom: "1rem" }}>
                  HOURS &amp; ACCESS TIPS
                </span>
                <h2 className="section-title-display" style={{ marginBottom: "1.5rem" }}>
                  When to visit.
                </h2>

                <div className="visit-info-list" style={{ marginTop: "1rem" }}>
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
                    <span className="visit-info-label">PARKING COST</span>
                    <span className="visit-info-val" style={{ color: "var(--accent-gold, #c48b1a)", fontWeight: 600 }}>
                      Always Free (200+ spots)
                    </span>
                  </div>
                  <div className="visit-info-row">
                    <span className="visit-info-label">ACCESSIBILITY</span>
                    <span className="visit-info-val">Step-free ramp access &amp; ADA stalls</span>
                  </div>
                  <div className="visit-info-row">
                    <span className="visit-info-label">PETS &amp; DOGS</span>
                    <span className="visit-info-val">Welcome on all outdoor courtyard patios</span>
                  </div>
                </div>

                <div style={{ marginTop: "2rem", padding: "1.25rem", backgroundColor: "var(--paper, #ffffff)", borderLeft: "3px solid var(--accent-gold, #c48b1a)" }}>
                  <p style={{ fontSize: "0.875rem", color: "var(--stone, #666)", lineHeight: 1.6, margin: 0 }}>
                    <strong style={{ color: "var(--ink, #1a1815)" }}>Tip for busy weekend evenings:</strong> While our 200+ on-site lot has ample parking, the 25th Street light rail station offers a fast and traffic-free arrival directly from Uptown or University City.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="inner-page-cta-banner">
          <div className="site-container">
            <p className="cta-banner-text font-display">
              Hungry?<br />
              <em className="font-display-italic" style={{ fontStyle: "italic", color: "var(--honey)" }}>
                Explore all 10 kitchens.
              </em>
            </p>
            <div className="cta-banner-actions">
              <Link to="/menu" className="btn-pill-dark" style={{ backgroundColor: "var(--honey)", color: "var(--ink)", borderColor: "var(--honey)" }}>
                <span>View Food Menus</span>
              </Link>
              <Link to="/calendar" className="btn-pill-dark">
                <span>Upcoming Events</span>
                <span className="btn-dot-gold" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer onExploreClick={onExploreClick} />
    </div>
  );
}


