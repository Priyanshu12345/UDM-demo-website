import React from 'react';

export default function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
    >
      <div
        className="modal-content-panel"
        style={{ maxWidth: '640px' }}
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

        {event.img && (
          <div style={{ width: '100%', height: '220px', overflow: 'hidden', marginBottom: '1.5rem', borderRadius: '2px' }}>
            <img src={event.img} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}

        <span className="label-editorial" style={{ marginBottom: '0.5rem' }}>
          {event.category || 'COMMUNITY EVENT'}
        </span>

        <h2 id="event-modal-title" className="mosaic-title" style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>
          {event.title}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', padding: '1rem', backgroundColor: 'var(--bg-canvas-alt)', borderRadius: '2px' }}>
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8125rem' }}>
            <strong style={{ minWidth: '80px', color: 'var(--text-secondary)' }}>WHEN:</strong>
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{event.fullDate || event.date || event.meta}</span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8125rem' }}>
            <strong style={{ minWidth: '80px', color: 'var(--text-secondary)' }}>WHERE:</strong>
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{event.location || 'Urban District Market · 2315 N Davidson St, Charlotte NC'}</span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8125rem' }}>
            <strong style={{ minWidth: '80px', color: 'var(--text-secondary)' }}>ADMISSION:</strong>
            <span style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>Free Entry & Open to Public</span>
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '2rem' }}>
          {event.desc}
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="https://www.eventbrite.com/o/the-mob-group-inc-63811031213"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-dark"
          >
            <span>RSVP via Eventbrite</span>
            <span className="btn-dot-gold" />
          </a>

          <button
            type="button"
            className="btn-circle-arrow-link"
            onClick={onClose}
          >
            <span>Close Window</span>
          </button>
        </div>
      </div>
    </div>
  );
}
