import React from 'react';

export default function StallsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const stalls = [
    {
      name: 'KaUdon',
      type: 'Authentic Japanese Udon & Tempura',
      desc: 'Handmade, scratch-pulled udon noodles served in piping hot house-simmered dashi broths and rich curry, paired with delicate vegetable and shrimp tempura.',
      specialty: 'Kitsune Udon & Ebi Tempura'
    },
    {
      name: 'Ragoon Sushi',
      type: 'Artisanal Sushi & Poke',
      desc: 'Made-to-order sushi rolls, fresh sashimi, vibrant poke bowls, and unique street food specialties influenced by Thai and Burmese coastal flavors.',
      specialty: 'Spicy Tuna Crunch Roll & Rainbow Poke'
    },
    {
      name: 'Crispy Patty',
      type: 'Japanese Katsu Sandwiches & Bowls',
      desc: 'Crispy golden panko-crusted cutlets served on soft milk bread or over seasoned sushi rice with shredded cabbage and tangy house katsu sauce.',
      specialty: 'Tonkatsu Pork Katsu Sando & Crispy Chicken'
    },
    {
      name: 'Momos & More',
      type: 'Nepali Street Comfort Food',
      desc: 'Authentic Himalayan steamed and chili-fried momos stuffed with spiced meats or seasonal vegetables, served with roasted tomato timur chutney.',
      specialty: 'Steamed Chicken Momos & Jhol Dumplings'
    },
    {
      name: 'Dumpling Station',
      type: 'Handmade Global Dumplings',
      desc: 'Pan-fried potstickers, delicate soup dumplings (Xiao Long Bao), and crispy wontons filled with savory herbs, ginger, and aromatic broths.',
      specialty: 'Pork & Chive Pan-Fried Potstickers'
    },
    {
      name: 'Bop Bop',
      type: 'Korean Rice Bowls (Bibimbap)',
      desc: 'Steaming hot rice bowls piled high with tender bulgogi beef, spicy gochujang pork, fried egg, fresh vegetables, kimchi, and savory seaweed.',
      specialty: 'Signature Bulgogi Bop Bowl'
    },
    {
      name: '& Coffee',
      type: 'Artisanal Coffee & Mochi Pastries',
      desc: 'Specialty espresso, ceremonial matcha lattes, Korean-style croffles, shaved milk bingsoo, and freshly glazed chewy mochi donuts.',
      specialty: 'Brown Sugar Mochi Donut & Ube Latte'
    },
    {
      name: 'LaBARatory',
      type: 'Central Craft Bar & Libations',
      desc: 'The vibrant heart of the food hall. Featuring regional craft drafts on 24 taps, creative craft cocktails, natural wines, and zero-proof elixirs.',
      specialty: 'Queen City Honey Mule & Local IPA'
    },
    {
      name: 'UDM SUPER',
      type: 'Asian Bodega & Grocer',
      desc: 'An on-site specialty grocery shop stocked with imported snacks, sauces, ramen packages, specialty drinks, and curated Asian culinary staples.',
      specialty: 'Imported Snacks & Pantry Goods'
    },
    {
      name: 'Test Kitchen / Incubator',
      type: 'Rotating Pop-Up Chef Stall',
      desc: 'A dedicated culinary platform for emerging Charlotte chefs and underground pop-up cooks to test bold new concepts with the community.',
      specialty: 'Rotating Seasonal Chef Series'
    }
  ];

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="stalls-modal-title"
    >
      <div
        className="modal-content-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 1L13 13M1 13L13 1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <span className="label-editorial" style={{ marginBottom: '0.5rem' }}>THE FOOD HALL VENDORS</span>
        <h2 id="stalls-modal-title" className="mosaic-title" style={{ fontSize: '2.25rem', marginBottom: '0.75rem' }}>
          Ten Kitchens. One <span className="italic-serif gold-text">hive.</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginBottom: '2.5rem', maxWidth: '600px' }}>
          Explore our collection of ten independent culinary stalls, central craft cocktail bar, and Asian bodega—all under one roof at 2315 N Davidson St.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {stalls.map((stall, idx) => (
            <div
              key={stall.name}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-fine)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                    {stall.name}
                  </h3>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--accent-orange, #ea580c)', fontWeight: 700, letterSpacing: '0.08em' }}>
                    0{idx + 1}
                  </span>
                </div>
                <span style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>
                  {stall.type}
                </span>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {stall.desc}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-fine)', paddingTop: '0.75rem', fontSize: '0.75rem' }}>
                <span style={{ color: 'var(--text-tertiary)' }}>Must Try: </span>
                <strong style={{ color: 'var(--text-primary)' }}>{stall.specialty}</strong>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <button
            type="button"
            className="btn-pill-dark"
            onClick={onClose}
          >
            <span>Back to Homepage</span>
            <span className="btn-dot-gold" />
          </button>
        </div>
      </div>
    </div>
  );
}
