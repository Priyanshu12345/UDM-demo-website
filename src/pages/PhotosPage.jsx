import React, { useEffect } from "react";
import Footer from "../components/Footer";

const photos = [
  { src: "/images/mosaic-main.jpg",      alt: "Interior dining area",   span: "tall" },
  { src: "/images/lifestyle-exterior.jpg", alt: "Exterior patio",       span: "normal" },
  { src: "/images/mosaic-patio.jpg",     alt: "Night patio crowd",      span: "normal" },
  { src: "/images/mosaic-food.jpg",      alt: "Authentic street food",  span: "normal" },
  { src: "/images/hero-interior.jpg",    alt: "Market hall interior",   span: "wide" },
  { src: "/images/mosaic-bar.jpg",       alt: "Craft cocktail bar",     span: "normal" },
  { src: "/images/event-music.jpg",      alt: "Live music night",       span: "tall" },
  { src: "/images/lifestyle-night.jpg",  alt: "Evening vibes",          span: "normal" },
  { src: "/images/event-game.jpg",       alt: "Game night",             span: "normal" },
  { src: "/images/event-makers.jpg",     alt: "Makers market",          span: "normal" },
  { src: "/images/event-trivia.jpg",     alt: "Trivia night",           span: "normal" },
];

export default function PhotosPage({ onExploreClick }) {
  // scroll position handled by RouteScrollManager
  return (
    <div className="page-root">
      <main>
        <section className="inner-page-hero">
          <div className="site-container">
            <span className="label-editorial" style={{ marginBottom: "1rem", display: "block" }}>PHOTOS</span>
            <h1 className="inner-page-title">
              Join the<br />
              <em className="font-display-italic" style={{ color: "var(--ink)", fontStyle: "italic" }}>buzz.</em>
            </h1>
            <div className="inner-page-hero-cols">
              <p className="inner-page-lead">
                Having a great time. We have something for everyone! From parents to kids, the social butterfly,
                or even the fly on the wall, there is room for all to have fun at UDM.
              </p>
              <p className="inner-page-aside">
                For media inquiries, please email <a href="mailto:admin-cltu@gmail.com" className="text-link">admin-cltu@gmail.com</a>
              </p>
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <div className="site-container">
            <div className="photo-masonry">
              {photos.map((p, i) => (
                <div key={i} className={`photo-masonry-item photo-masonry-${p.span}`}>
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer onExploreClick={onExploreClick} />
    </div>
  );
}

