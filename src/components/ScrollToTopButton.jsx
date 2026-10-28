import React from 'react';

/**
 * Floating Back-to-Top Button with dynamic circular SVG scroll progress indicator.
 * Appears seamlessly when scrolling down, allowing instant return to top.
 */
export default function ScrollToTopButton({ scrollY, scrollProgress }) {
  const isVisible = scrollY > 350;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG circle calculations for 44px circle
  const size = 46;
  const strokeWidth = 2.5;
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <button
      type="button"
      className={`scroll-to-top-btn ${isVisible ? 'is-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <svg
        width={size}
        height={size}
        className="scroll-progress-ring"
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Track circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="scroll-progress-track"
          strokeWidth={strokeWidth}
        />
        {/* Progress indicator circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="scroll-progress-bar-circle"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>

      {/* Upward arrow icon */}
      <span className="scroll-to-top-icon" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 11V3M7 3L3 7M7 3L11 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  );
}
