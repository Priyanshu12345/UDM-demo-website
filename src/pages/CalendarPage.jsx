import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

// All events data — combining recurring series + one-off events across 2 months
const ALL_EVENTS = [
  // October
  {
    id: "oct-28",
    date: 28,
    month: "OCTOBER",
    monthKey: "2026-10",
    day: "Tuesday",
    fullDate: "October 28, 2026",
    time: "6:30 PM – 9:30 PM",
    title: "Weekly Board Game Night",
    category: "GAMES & SOCIAL",
    tag: "Recurring",
    tagColor: "honey",
    desc: "Casual tabletop games, draft beer specials and friendly community competition. Bring your crew or make new ones.",
    img: "/images/event-game.jpg",
    link: "#",
    free: true,
  },
  {
    id: "oct-29",
    date: 29,
    month: "OCTOBER",
    monthKey: "2026-10",
    day: "Wednesday",
    fullDate: "October 29, 2026",
    time: "6:00 PM – 10:00 PM",
    title: "Fiesta Friday (Early Edition)",
    category: "FIESTA FRIDAY",
    tag: "Free Entry",
    tagColor: "green",
    desc: "Latin beats, artisanal margaritas and street tacos every Friday — this week moved to Wednesday for Halloween.",
    img: "/images/mosaic-patio.jpg",
    link: "/fiesta-friday",
    free: true,
  },
  {
    id: "oct-31",
    date: 31,
    month: "OCTOBER",
    monthKey: "2026-10",
    day: "Friday",
    fullDate: "October 31, 2026",
    time: "7:00 PM – 11:00 PM",
    title: "A Haunt Night",
    category: "SPECIAL EVENT",
    tag: "Tickets",
    tagColor: "dark",
    desc: "Halloween special at UDM. Costume contest, themed cocktails at LaBARatory, spooky décor throughout the market.",
    img: "/images/event-music.jpg",
    link: "#",
    free: false,
  },
  // November
  {
    id: "nov-01",
    date: 1,
    month: "NOVEMBER",
    monthKey: "2026-11",
    day: "Saturday",
    fullDate: "November 1, 2026",
    time: "11:00 AM – 3:00 PM",
    title: "Themed Brunch: Insom-nia",
    category: "THEMED BRUNCH",
    tag: "Tickets",
    tagColor: "dark",
    desc: "Night-owl brunch meets sleepy Sunday vibes. Mochi donuts, matcha lattes and bao breakfast buns.",
    img: "/images/event-trivia.jpg",
    link: "/themed-brunch",
    free: false,
  },
  {
    id: "nov-02",
    date: 2,
    month: "NOVEMBER",
    monthKey: "2026-11",
    day: "Sunday",
    fullDate: "November 2, 2026",
    time: "11:00 AM – 3:00 PM",
    title: "Themed Brunch: Insom-nia",
    category: "THEMED BRUNCH",
    tag: "Tickets",
    tagColor: "dark",
    desc: "Night-owl brunch meets sleepy Sunday vibes. Mochi donuts, matcha lattes and bao breakfast buns.",
    img: "/images/event-trivia.jpg",
    link: "/themed-brunch",
    free: false,
  },
  {
    id: "nov-04",
    date: 4,
    month: "NOVEMBER",
    monthKey: "2026-11",
    day: "Tuesday",
    fullDate: "November 4, 2026",
    time: "6:30 PM – 9:30 PM",
    title: "Game Night",
    category: "GAMES & SOCIAL",
    tag: "Recurring",
    tagColor: "honey",
    desc: "Weekly board game meetup — all skill levels welcome. Board games, draft beer specials and friendly competition.",
    img: "/images/event-game.jpg",
    link: "#",
    free: true,
  },
  {
    id: "nov-07",
    date: 7,
    month: "NOVEMBER",
    monthKey: "2026-11",
    day: "Friday",
    fullDate: "November 7, 2026",
    time: "6:00 PM – 10:00 PM",
    title: "Fiesta Friday",
    category: "FIESTA FRIDAY",
    tag: "Free Entry",
    tagColor: "green",
    desc: "Kick off your weekend with Latin tunes, artisanal margaritas, fresh street tacos and patio vibes.",
    img: "/images/mosaic-patio.jpg",
    link: "/fiesta-friday",
    free: true,
  },
  {
    id: "nov-09",
    date: 9,
    month: "NOVEMBER",
    monthKey: "2026-11",
    day: "Sunday",
    fullDate: "November 9, 2026",
    time: "12:00 PM – 5:00 PM",
    title: "Themed Brunch &amp; Sip",
    category: "THEMED BRUNCH",
    tag: "Tickets",
    tagColor: "dark",
    desc: "Sunday brunch with a twist. Weekend morning rendezvous with bottomless mimosa add-on available.",
    img: "/images/mosaic-bar.jpg",
    link: "/themed-brunch",
    free: false,
  },
  {
    id: "nov-11",
    date: 11,
    month: "NOVEMBER",
    monthKey: "2026-11",
    day: "Tuesday",
    fullDate: "November 11, 2026",
    time: "6:30 PM – 9:30 PM",
    title: "Game Night",
    category: "GAMES & SOCIAL",
    tag: "Recurring",
    tagColor: "honey",
    desc: "Weekly board game meetup. Bring your crew or make new ones. Draft beer specials included.",
    img: "/images/event-game.jpg",
    link: "#",
    free: true,
  },
  {
    id: "nov-14",
    date: 14,
    month: "NOVEMBER",
    monthKey: "2026-11",
    day: "Friday",
    fullDate: "November 14, 2026",
    time: "6:00 PM – 10:00 PM",
    title: "Asian Night Market",
    category: "ASIAN NIGHT MARKET",
    tag: "Free Entry",
    tagColor: "green",
    desc: "An evening celebration inspired by night markets of Taipei, Tokyo and Seoul. Guest chefs, bubble tea and live entertainment.",
    img: "/images/lifestyle-night.jpg",
    link: "/asian-night-market",
    free: true,
  },
  {
    id: "nov-15",
    date: 15,
    month: "NOVEMBER",
    monthKey: "2026-11",
    day: "Saturday",
    fullDate: "November 15, 2026",
    time: "11:00 AM – 3:00 PM",
    title: "Themed Brunch: Encanto",
    category: "THEMED BRUNCH",
    tag: "Tickets",
    tagColor: "dark",
    desc: "Magical Colombian-inspired brunch set. Tropical flavors, vibrant aesthetics and cocktail pairings.",
    img: "/images/event-trivia.jpg",
    link: "/themed-brunch",
    free: false,
  },
  {
    id: "nov-16",
    date: 16,
    month: "NOVEMBER",
    monthKey: "2026-11",
    day: "Sunday",
    fullDate: "November 16, 2026",
    time: "11:00 AM – 3:00 PM",
    title: "Themed Brunch: Encanto",
    category: "THEMED BRUNCH",
    tag: "Tickets",
    tagColor: "dark",
    desc: "Magical Colombian-inspired brunch set. Tropical flavors, vibrant aesthetics and cocktail pairings.",
    img: "/images/event-trivia.jpg",
    link: "/themed-brunch",
    free: false,
  },
  {
    id: "nov-18",
    date: 18,
    month: "NOVEMBER",
    monthKey: "2026-11",
    day: "Tuesday",
    fullDate: "November 18, 2026",
    time: "7:00 PM – 9:00 PM",
    title: "Queen City Pub Trivia Night",
    category: "TRIVIA SERIES",
    tag: "Free Entry",
    tagColor: "green",
    desc: "Test your knowledge with local quizmasters. Prizes for top 3 teams, drink specials all night.",
    img: "/images/event-trivia.jpg",
    link: "#",
    free: true,
  },
  {
    id: "nov-21",
    date: 21,
    month: "NOVEMBER",
    monthKey: "2026-11",
    day: "Friday",
    fullDate: "November 21, 2026",
    time: "6:00 PM – 10:00 PM",
    title: "Fiesta Friday",
    category: "FIESTA FRIDAY",
    tag: "Free Entry",
    tagColor: "green",
    desc: "Kick off your weekend with Latin beats and artisanal margaritas on the courtyard patio.",
    img: "/images/mosaic-patio.jpg",
    link: "/fiesta-friday",
    free: true,
  },
  {
    id: "nov-22",
    date: 22,
    month: "NOVEMBER",
    monthKey: "2026-11",
    day: "Saturday",
    fullDate: "November 22, 2026",
    time: "12:00 PM – 5:00 PM",
    title: "Mill District Makers Market",
    category: "ARTISAN POP-UP",
    tag: "Free Entry",
    tagColor: "green",
    desc: "25+ regional Charlotte makers. Ceramics, art prints, jewelry and handcrafted goods across the event lawn.",
    img: "/images/event-makers.jpg",
    link: "#",
    free: true,
  },
  {
    id: "nov-25",
    date: 25,
    month: "NOVEMBER",
    monthKey: "2026-11",
    day: "Tuesday",
    fullDate: "November 25, 2026",
    time: "6:30 PM – 9:30 PM",
    title: "Game Night",
    category: "GAMES & SOCIAL",
    tag: "Recurring",
    tagColor: "honey",
    desc: "Pre-Thanksgiving board game night. Warm up before the holiday with your favorite games.",
    img: "/images/event-game.jpg",
    link: "#",
    free: true,
  },
  {
    id: "nov-28",
    date: 28,
    month: "NOVEMBER",
    monthKey: "2026-11",
    day: "Friday",
    fullDate: "November 28, 2026",
    time: "5:00 PM – 10:00 PM",
    title: "Black Friday Social",
    category: "SPECIAL EVENT",
    tag: "Free Entry",
    tagColor: "green",
    desc: "Skip the mall chaos. Come hang at UDM with all 10 kitchens open, live music and LaBARatory cocktails.",
    img: "/images/lifestyle-exterior.jpg",
    link: "#",
    free: true,
  },
  {
    id: "nov-29",
    date: 29,
    month: "NOVEMBER",
    monthKey: "2026-11",
    day: "Saturday",
    fullDate: "November 29, 2026",
    time: "11:00 AM – 3:00 PM",
    title: "Themed Brunch: Sunkiss",
    category: "THEMED BRUNCH",
    tag: "Tickets",
    tagColor: "dark",
    desc: "Spring vibes in November. Fresh juices, pastel aesthetics and a sunlit brunch spread.",
    img: "/images/mosaic-food.jpg",
    link: "/themed-brunch",
    free: false,
  },
  {
    id: "nov-30",
    date: 30,
    month: "NOVEMBER",
    monthKey: "2026-11",
    day: "Sunday",
    fullDate: "November 30, 2026",
    time: "11:00 AM – 3:00 PM",
    title: "Themed Brunch: Sunkiss",
    category: "THEMED BRUNCH",
    tag: "Tickets",
    tagColor: "dark",
    desc: "Spring vibes in November. Fresh juices, pastel aesthetics and a sunlit brunch spread.",
    img: "/images/mosaic-food.jpg",
    link: "/themed-brunch",
    free: false,
  },
];

const TAG_COLORS = {
  honey: { bg: "#fdf4de", color: "#8f5d00", border: "#f2b01e" },
  green: { bg: "#edf7f0", color: "#1a6b3c", border: "#5bbb7b" },
  dark: { bg: "#0e0e0c", color: "#f7f6f2", border: "#0e0e0c" },
};

const CATEGORIES = ["ALL", "GAMES & SOCIAL", "FIESTA FRIDAY", "THEMED BRUNCH", "ASIAN NIGHT MARKET", "TRIVIA SERIES", "ARTISAN POP-UP", "SPECIAL EVENT"];

export default function CalendarPage({ onExploreClick }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [activeFilter, setActiveFilter] = useState("ALL");
  const [activeMonth, setActiveMonth] = useState("ALL");

  const months = ["ALL", "OCTOBER", "NOVEMBER"];

  const filtered = ALL_EVENTS.filter((e) => {
    const matchCat = activeFilter === "ALL" || e.category === activeFilter;
    const matchMonth = activeMonth === "ALL" || e.month === activeMonth;
    return matchCat && matchMonth;
  });

  // Group by month
  const grouped = {};
  filtered.forEach((e) => {
    if (!grouped[e.month]) grouped[e.month] = [];
    grouped[e.month].push(e);
  });

  return (
    <div className="page-root">
      <main>
        {/* Hero */}
        <section className="cal-hero">
          <div className="site-container">
            <span className="label-editorial" style={{ marginBottom: "1.25rem", display: "block" }}>EVENTS CALENDAR</span>
            <h1 className="cal-hero-title">
              Upcoming<br />
              <em className="font-display-italic" style={{ color: "var(--honey-deep, #8f5d00)" }}>UDM events.</em>
            </h1>
            <div className="cal-hero-meta">
              <p className="cal-hero-desc">
                Something on almost every week at Urban District Market. From weekly recurring events
                to special one-night editions — find what moves you.
              </p>
              <div className="cal-hero-links">
                <span className="label-editorial">RECURRING SERIES</span>
                <div className="cal-hero-tags">
                  <Link to="/fiesta-friday" className="cal-series-chip">Fiesta Friday</Link>
                  <Link to="/themed-brunch" className="cal-series-chip">Themed Brunch</Link>
                  <Link to="/asian-night-market" className="cal-series-chip">Asian Night Market</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <div className="cal-filter-bar">
          <div className="site-container">
            <div className="cal-filters-row">
              <div className="cal-filter-group">
                <span className="cal-filter-label">FILTER BY</span>
                <div className="cal-filter-chips">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      className={`cal-chip ${activeFilter === cat ? "active" : ""}`}
                      onClick={() => setActiveFilter(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div className="cal-filter-group">
                <span className="cal-filter-label">MONTH</span>
                <div className="cal-filter-chips">
                  {months.map((m) => (
                    <button
                      key={m}
                      className={`cal-chip ${activeMonth === m ? "active" : ""}`}
                      onClick={() => setActiveMonth(m)}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Events List */}
        <section className="cal-events-section">
          <div className="site-container">
            {Object.keys(grouped).length === 0 ? (
              <div className="cal-empty">
                <p>No events match the selected filters.</p>
                <button className="btn-pill-dark" onClick={() => { setActiveFilter("ALL"); setActiveMonth("ALL"); }}>
                  <span>Clear Filters</span>
                </button>
              </div>
            ) : (
              Object.entries(grouped).map(([month, events]) => (
                <div key={month} className="cal-month-group">
                  <div className="cal-month-header">
                    <span className="cal-month-label">{month} 2026</span>
                    <div className="cal-month-line" />
                  </div>

                  <div className="cal-events-list">
                    {events.map((evt) => {
                      const tc = TAG_COLORS[evt.tagColor] || TAG_COLORS.dark;
                      const isExternal = evt.link === "#" || evt.link.startsWith("http");
                      return (
                        <article key={evt.id} className="cal-event-row">
                          {/* Left: Date block */}
                          <div className="cal-event-date">
                            <span className="cal-event-day-num">{evt.date}</span>
                            <span className="cal-event-day-name">{evt.day.slice(0, 3).toUpperCase()}</span>
                          </div>

                          {/* Center left: Thumbnail */}
                          <div className="cal-event-img-wrap">
                            <img src={evt.img} alt={evt.title} loading="lazy" />
                          </div>

                          {/* Center: Info */}
                          <div className="cal-event-info">
                            <div className="cal-event-meta-row">
                              <span className="cal-event-cat">{evt.category}</span>
                              <span className="cal-event-time">{evt.time}</span>
                            </div>
                            <h3 className="cal-event-title" dangerouslySetInnerHTML={{ __html: evt.title }} />
                            <p className="cal-event-desc">{evt.desc}</p>
                          </div>

                          {/* Right: CTA */}
                          <div className="cal-event-cta">
                            {evt.free ? (
                              isExternal ? (
                                <span className="cal-tag-pill" style={{ background: tc.bg, color: tc.color, borderColor: tc.border }}>
                                  {evt.tag}
                                </span>
                              ) : (
                                <Link to={evt.link} className="cal-tag-pill" style={{ background: tc.bg, color: tc.color, borderColor: tc.border }}>
                                  {evt.tag}
                                </Link>
                              )
                            ) : (
                              <a
                                href="https://www.eventbrite.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cal-tag-pill"
                                style={{ background: tc.bg, color: tc.color, borderColor: tc.border }}
                              >
                                {evt.tag}
                              </a>
                            )}
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="inner-page-cta-banner">
          <div className="site-container">
            <p className="cta-banner-text font-display">
              Host your own<br />
              <em className="font-display-italic" style={{ fontStyle: "italic", color: "var(--honey)" }}>event here.</em>
            </p>
            <div className="cta-banner-actions">
              <Link to="/private-events" className="btn-pill-dark" style={{ backgroundColor: "var(--honey)", color: "var(--ink)", borderColor: "var(--honey)" }}>
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
