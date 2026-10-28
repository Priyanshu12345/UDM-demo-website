import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const SvgLogos = {
  momos: (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="52" r="26" stroke="#0e0e0c" strokeWidth="2"/>
      <path d="M38 50 Q60 28 82 50" stroke="#0e0e0c" strokeWidth="2" fill="none"/>
      <path d="M42 56 Q60 70 78 56" stroke="#0e0e0c" strokeWidth="1.5" fill="none"/>
      <circle cx="53" cy="47" r="3" fill="#0e0e0c"/>
      <circle cx="67" cy="47" r="3" fill="#0e0e0c"/>
      <text x="60" y="96" textAnchor="middle" fontFamily="Georgia,serif" fontSize="9" fill="#0e0e0c" fontWeight="500" letterSpacing="1">MOMOS &amp; MORE</text>
    </svg>
  ),
  dumpling: (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="56" rx="30" ry="20" stroke="#c0392b" strokeWidth="2"/>
      <path d="M33 52 Q46 40 60 42 Q74 40 87 52" stroke="#c0392b" strokeWidth="1.5" fill="none"/>
      <path d="M36 60 Q60 70 84 60" stroke="#c0392b" strokeWidth="1" strokeDasharray="3,2" fill="none"/>
      <text x="60" y="90" textAnchor="middle" fontFamily="Georgia,serif" fontSize="10" fill="#0e0e0c" fontWeight="600" letterSpacing="1">DUMPLING</text>
      <text x="60" y="102" textAnchor="middle" fontFamily="Georgia,serif" fontSize="9" fill="#888" letterSpacing="1">STATION</text>
    </svg>
  ),
  bopbop: (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="38" width="76" height="44" rx="22" fill="#f4a74215"/>
      <rect x="22" y="38" width="76" height="44" rx="22" stroke="#f4a742" strokeWidth="2"/>
      <text x="60" y="56" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="15" fill="#0e0e0c" fontWeight="900">BOP</text>
      <text x="60" y="73" textAnchor="middle" fontFamily="Arial Black,sans-serif" fontSize="15" fill="#f4a742" fontWeight="900">BOP</text>
      <text x="60" y="100" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#888" letterSpacing="2">KOREAN BOWLS</text>
    </svg>
  ),
  andcoffee: (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="60" y="72" textAnchor="middle" fontFamily="Georgia,serif" fontSize="56" fill="#5c8a72" fontStyle="italic">&amp;</text>
      <text x="60" y="96" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#0e0e0c" letterSpacing="3">COFFEE</text>
    </svg>
  ),
  testkitchen: (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="22" width="76" height="76" stroke="#0e0e0c" strokeWidth="1.5"/>
      <rect x="30" y="30" width="60" height="60" stroke="#0e0e0c" strokeWidth="0.5"/>
      <text x="60" y="55" textAnchor="middle" fontFamily="Georgia,serif" fontSize="9" fill="#0e0e0c" letterSpacing="2">TEST</text>
      <text x="60" y="67" textAnchor="middle" fontFamily="Georgia,serif" fontSize="9" fill="#0e0e0c" letterSpacing="2">KITCHEN</text>
      <line x1="38" y1="75" x2="82" y2="75" stroke="#0e0e0c" strokeWidth="0.75"/>
      <text x="60" y="84" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#888" letterSpacing="1">INCUBATOR</text>
    </svg>
  ),
};

const STALLS = [
  {
    id:"super", num:"01", name:"UDM SUPER", type:"Asian Bodega & Grocer",
    desc:"An on-site specialty grocery shop stocked with imported snacks, artisanal sauces, ramen packages, specialty drinks, and curated Asian culinary staples you won't find anywhere else in Charlotte.",
    specialty:"Imported Snacks · Pantry Goods · Specialty Beverages",
    tag:"GROCERY", tagBg:"#eef5ec", tagColor:"#2e5928",
    logoImg:"/images/logo-super.jpg", menuUrl:"#",
  },
  {
    id:"laboratory", num:"02", name:"LaBARatory", type:"Central Craft Bar & Libations",
    desc:"The vibrant, beating heart of the food hall. Featuring regional craft drafts on 24 rotating taps, inventive craft cocktails, natural wines, sakes, and zero-proof elixirs crafted by in-house mixologists.",
    specialty:"Queen City Honey Mule · Local IPA · Seasonal Cocktails",
    tag:"BAR", tagBg:"#1a1a18", tagColor:"#f7f6f2",
    logoImg:"/images/logo-laboratory.jpg", menuUrl:"#",
  },
  {
    id:"ragoon", num:"03", name:"Ragoon Sushi", type:"Artisanal Sushi & Poke",
    desc:"Made-to-order sushi rolls, fresh sashimi sliced daily, vibrant poke bowls, and unique street food specialties influenced by Thai and Burmese coastal flavors. Every dish built on premium sustainable seafood.",
    specialty:"Spicy Tuna Crunch Roll · Rainbow Poke · Dragon Roll",
    tag:"JAPANESE", tagBg:"#eef0f8", tagColor:"#1a3057",
    logoImg:"/images/logo-ragoon.jpg", menuUrl:"#",
  },
  {
    id:"kaudon", num:"04", name:"KaUdon", type:"Authentic Japanese Udon & Tempura",
    desc:"Handmade scratch-pulled udon noodles served in piping-hot house-simmered dashi broths and rich curry sauces, each bowl paired with delicate seasonal vegetable and tiger shrimp tempura.",
    specialty:"Kitsune Udon · Ebi Tempura · Curry Udon",
    tag:"JAPANESE", tagBg:"#eef0f8", tagColor:"#1a3057",
    logoImg:"/images/logo-kaudon.jpg", menuUrl:"#",
  },
  {
    id:"crispypatty", num:"05", name:"Crispy Patty", type:"Japanese Katsu Sandwiches & Bowls",
    desc:"Crispy golden panko-crusted cutlets served on cloud-soft milk bread or over seasoned sushi rice with shredded cabbage and a tangy house katsu sauce. The most satisfying crunch in the building.",
    specialty:"Tonkatsu Pork Katsu Sando · Crispy Chicken · Katsu Don",
    tag:"JAPANESE", tagBg:"#eef0f8", tagColor:"#1a3057",
    logoImg:"/images/logo-crispypatty.jpg", menuUrl:"#",
  },
  {
    id:"momos", num:"06", name:"Momos & More", type:"Nepali Street Comfort Food",
    desc:"Authentic Himalayan steamed and chili-fried momos stuffed with spiced meats or seasonal vegetables, served with roasted tomato timur chutney. Street food that warms the soul.",
    specialty:"Steamed Chicken Momos · Jhol Dumplings · Thenthuk Soup",
    tag:"HIMALAYAN", tagBg:"#fdf0ed", tagColor:"#8B2500",
    logoSvg:"momos", menuUrl:"#",
  },
  {
    id:"dumpling", num:"07", name:"Dumpling Station", type:"Handmade Global Dumplings",
    desc:"Pan-fried potstickers, delicate soup dumplings (Xiao Long Bao), and crispy wontons filled with savory herbs, fresh ginger, and aromatic broths. Each wrapper folded by hand every morning.",
    specialty:"Pork & Chive Potstickers · Xiao Long Bao · Wonton Soup",
    tag:"CHINESE", tagBg:"#fdeeed", tagColor:"#8B1000",
    logoSvg:"dumpling", menuUrl:"#",
  },
  {
    id:"bopbop", num:"08", name:"Bop Bop", type:"Korean Rice Bowls & Bibimbap",
    desc:"Steaming hot stone bowls piled high with tender bulgogi beef, spicy gochujang pork, a perfectly fried egg, fresh seasonal vegetables, kimchi, and savory toasted seaweed. Bold flavors, balanced bites.",
    specialty:"Signature Bulgogi Bop Bowl · Spicy Pork · Veggie Bibimbap",
    tag:"KOREAN", tagBg:"#fef4ea", tagColor:"#7a3800",
    logoSvg:"bopbop", menuUrl:"#",
  },
  {
    id:"andcoffee", num:"09", name:"& Coffee", type:"Artisanal Coffee & Mochi Pastries",
    desc:"Specialty espresso sourced from small-batch roasters, ceremonial matcha lattes, Korean-style croffles, shaved milk bingsoo topped with seasonal fruits, and freshly glazed chewy mochi donuts all day.",
    specialty:"Brown Sugar Mochi Donut · Ube Latte · Hojicha Croffle",
    tag:"CAFÉ", tagBg:"#eef5f0", tagColor:"#1c4a32",
    logoSvg:"andcoffee", menuUrl:"#",
  },
  {
    id:"testkitchen", num:"10", name:"Test Kitchen", type:"Rotating Pop-Up Chef Incubator",
    desc:"A dedicated culinary platform for emerging Charlotte chefs and underground pop-up cooks to test bold new food concepts directly with the community. The menu changes — the quality never does.",
    specialty:"Rotating Seasonal Chef Series — check @udm_clt for updates",
    tag:"POP-UP", tagBg:"#f4f4f4", tagColor:"#555",
    logoSvg:"testkitchen", menuUrl:"#",
  },
];

export default function MenuPage({ onExploreClick }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="page-root">
      <main>
        {/* Hero */}
        <section className="menu-hero">
          <div className="site-container">
            <span className="label-editorial" style={{ display:"block", marginBottom:"1.25rem" }}>
              THE FOOD HALL
            </span>
            <h1 className="menu-hero-title">
              Welcome to<br />
              <em className="font-display-italic" style={{ color:"var(--honey-deep, #8f5d00)" }}>
                the market.
              </em>
            </h1>
            <p className="menu-hero-desc">
              Ten independent kitchens under one roof. Charlotte's most diverse dining destination,
              built for discovery. Explore every stall below.
            </p>
          </div>
          <div className="menu-hero-img-wrap">
            <img src="/images/menu-hero.jpg" alt="UDM food spread" loading="eager" />
            <div className="menu-hero-img-overlay" />
          </div>
        </section>

        {/* Vendor Directory */}
        <section className="menu-vendors-section">
          <div className="site-container">
            <div className="menu-legend-row">
              <span className="menu-legend-item" style={{ width:"2.5rem" }}>#</span>
              <span className="menu-legend-item" style={{ width:"100px" }}>LOGO</span>
              <span className="menu-legend-item" style={{ flex:1 }}>VENDOR</span>
              <span className="menu-legend-item">MENU</span>
            </div>

            <div className="menu-vendor-list">
              {STALLS.map((stall) => (
                <article
                  key={stall.id}
                  className={`menu-vendor-row${hoveredId === stall.id ? " is-hovered" : ""}`}
                  onMouseEnter={() => setHoveredId(stall.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <span className="menu-vendor-num">{stall.num}</span>

                  <div className="menu-vendor-logo-wrap">
                    {stall.logoImg ? (
                      <img src={stall.logoImg} alt={stall.name} />
                    ) : (
                      <div className="menu-vendor-logo-svg">
                        {SvgLogos[stall.logoSvg]}
                      </div>
                    )}
                  </div>

                  <div className="menu-vendor-info">
                    <div className="menu-vendor-meta-top">
                      <span
                        className="menu-vendor-tag"
                        style={{ background: stall.tagBg, color: stall.tagColor }}
                      >
                        {stall.tag}
                      </span>
                    </div>
                    <h2 className="menu-vendor-name">{stall.name}</h2>
                    <p className="menu-vendor-type">{stall.type}</p>
                    <p className="menu-vendor-desc">{stall.desc}</p>
                    <p className="menu-vendor-specialty">
                      <span className="menu-vendor-specialty-label">Signature: </span>
                      {stall.specialty}
                    </p>
                  </div>

                  <div className="menu-vendor-cta">
                    <a href={stall.menuUrl} className="menu-view-link" aria-label={"View " + stall.name + " menu"}>
                      <span>Menu</span>
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                        <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="inner-page-cta-banner">
          <div className="site-container">
            <p className="cta-banner-text font-display">
              Host your own<br />
              <em className="font-display-italic" style={{ fontStyle:"italic", color:"var(--honey)" }}>event here.</em>
            </p>
            <div className="cta-banner-actions">
              <Link to="/private-events" className="btn-pill-dark" style={{ backgroundColor:"var(--honey)", color:"var(--ink)", borderColor:"var(--honey)" }}>
                <span>Private Events</span>
              </Link>
              <Link to="/private-events" className="btn-pill-dark">
                <span>Inquire Now</span>
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
