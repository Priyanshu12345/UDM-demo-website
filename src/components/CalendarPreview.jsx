import React from 'react';

export default function CalendarPreview({ onSelectEvent }) {
  const events = [
    {
      id: 'event-1',
      date: 'OCT 28',
      category: 'GAMES & SOCIAL',
      title: 'Weekly Board Game Meetup',
      desc: 'Casual tabletop games, draft beer specials & friendly community competition.',
      img: '/images/event-game.jpg',
      fullDate: 'Tuesday, October 28 · 6:30 PM – 9:30 PM',
      location: 'Main Food Hall & Beer Garden'
    },
    {
      id: 'event-2',
      date: 'NOV 03',
      category: 'LIVE MUSIC',
      title: 'First Friday Beats & Bites',
      desc: 'Resident DJs spinning vinyl alongside craft drinks and all 10 street food stalls.',
      img: '/images/event-music.jpg',
      fullDate: 'Friday, November 3 · 7:00 PM – 11:00 PM',
      location: 'LaBARatory & Central Courtyard'
    },
    {
      id: 'event-3',
      date: 'NOV 12',
      category: 'ARTISAN POP-UP',
      title: 'Mill District Makers Market',
      desc: '25+ regional Charlotte makers featuring ceramics, art prints, jewelry & goods.',
      img: '/images/event-makers.jpg',
      fullDate: 'Sunday, November 12 · 12:00 PM – 5:00 PM',
      location: 'Outdoor Event Lawn'
    },
    {
      id: 'event-4',
      date: 'NOV 18',
      category: 'TRIVIA SERIES',
      title: 'Queen City Pub Trivia Night',
      desc: 'Test your knowledge with local quizmasters, prizes for top 3 teams & drink deals.',
      img: '/images/event-trivia.jpg',
      fullDate: 'Tuesday, November 18 · 7:00 PM – 9:00 PM',
      location: 'Main Dining Hall'
    }
  ];

  const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];

  return (
    <section id="calendar" className="section-canvas-alt calendar-section">
      <div className="site-container">
        {/* Top Header Bar with Scroll Reveal */}
        <div className="calendar-top-bar reveal-on-scroll">
          <div>
            <span className="label-editorial">05 / HAPPENINGS</span>
            <h2 className="mosaic-title">On the calendar.</h2>
          </div>

          <button
            type="button"
            className="btn-circle-arrow-link"
            onClick={() => onSelectEvent(events[0])}
            aria-label="View full events calendar"
          >
            <span>Full calendar</span>
            <span className="circle-arrow-icon">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M2 12L12 2M12 2H4M12 2V10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>

        {/* 4 Compact Event Cards with Staggered Scroll Reveals */}
        <div className="calendar-grid">
          {events.map((evt, idx) => (
            <article
              key={evt.id}
              className={`calendar-card reveal-on-scroll ${delays[idx] || ''}`}
              onClick={() => onSelectEvent(evt)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectEvent(evt)}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${evt.title}`}
            >
              <div className="calendar-img-frame">
                <img src={evt.img} alt={evt.title} loading="lazy" />
                <span className="calendar-date-badge">{evt.date}</span>
              </div>

              <div className="calendar-card-body">
                <span className="calendar-category">{evt.category}</span>
                <h3 className="calendar-card-title">{evt.title}</h3>
                <p className="calendar-card-desc">{evt.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
