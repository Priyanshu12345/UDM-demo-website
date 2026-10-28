import React from 'react';

export default function EventsList({ onSelectEvent }) {
  const experiences = [
    {
      num: '01',
      title: 'Asian Night Market',
      meta: 'Every Third Friday · Street Food, Pop-ups & Performances',
      desc: 'An evening celebration inspired by the vibrant night markets of Taipei, Tokyo, and Seoul. Guest chefs, specialty skewers, bubble tea, and live cultural entertainment.',
      date: 'Third Friday of Every Month · 6:00 PM – 10:00 PM'
    },
    {
      num: '02',
      title: 'Fiesta Friday',
      meta: 'Weekly 6pm – 10pm · Latin Beats & Beverage Specials',
      desc: 'Kick off your weekend with curated Latin tunes, artisanal margaritas, fresh street tacos, and great outdoor vibes on the courtyard patio.',
      date: 'Every Friday Evening · 6:00 PM – 10:00 PM'
    },
    {
      num: '03',
      title: 'Themed Brunch',
      meta: 'Sat & Sun Mornings · Specialty Coffee & Brunch Plates',
      desc: 'Weekend morning rendezvous featuring freshly baked mochi donuts, savory bao breakfast buns, specialty matcha, and brunch libations from LaBARatory.',
      date: 'Saturdays & Sundays · 11:00 AM – 3:00 PM'
    },
    {
      num: '04',
      title: 'Private Events',
      meta: 'Custom Bookings · Buyouts, Corporate & Celebrations',
      desc: 'From intimate birthday dinners in private karaoke suites to full market buyouts with 350+ capacity, custom menus, and dedicated bartending.',
      date: 'Available 7 Days a Week by Inquiry'
    }
  ];

  const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];

  return (
    <section id="experiences" className="section-canvas events-section">
      <div className="site-container">
        {/* Header with Scroll Reveal */}
        <div className="events-section-header reveal-on-scroll">
          <span className="label-editorial"><span className="label-num">04</span> / PROGRAMMING</span>
          <h2 className="events-section-title">Something on, almost every week.</h2>
        </div>

        {/* 4 Full-Width Editorial Rows with Staggered Scroll Reveals */}
        <div className="editorial-rows-list">
          {experiences.map((item, idx) => (
            <div
              key={item.num}
              className={`editorial-row reveal-on-scroll ${delays[idx] || ''}`}
              role="button"
              tabIndex={0}
              onClick={() => onSelectEvent(item)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectEvent(item)}
              aria-label={`View details for ${item.title}`}
            >
              <span className="editorial-row-num">{item.num}</span>
              <h3 className="editorial-row-title">{item.title}</h3>
              <span className="editorial-row-meta">{item.meta}</span>
              <div className="editorial-row-action">
                <span className="circle-arrow-icon" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path d="M2 12L12 2M12 2H4M12 2V10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
