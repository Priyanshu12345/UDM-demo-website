import React, { useState, useEffect } from 'react';

/**
 * Minimalist Brand Preloader for Urban District Market
 * - Only the brand loading logo centered on screen
 * - Precision SVG HexMark stroke drawing & honey-gold inner hexagon bloom
 * - Cormorant Garamond display wordmark & tracked "MARKET · CLT" descriptor
 * - Smooth luxury curtain lift reveal (transform: translateY(-100%))
 * - Click / Escape key skip capability
 */
export default function Preloader({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Lock scroll on mount
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Hold logo animation for 1.4s then initiate fade-out
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1400);

    // Complete transition after smooth fade-out (650ms)
    const doneTimer = setTimeout(() => {
      document.body.style.overflow = originalOverflow;
      setIsDone(true);
      if (onComplete) onComplete();
    }, 2050);

    const handleKeyDown = (e) => {
      if ((e.key === 'Escape' || e.key === ' ') && !isExiting) {
        skipLoading();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const skipLoading = () => {
    setIsExiting(true);
    setTimeout(() => {
      document.body.style.overflow = '';
      setIsDone(true);
      if (onComplete) onComplete();
    }, 450);
  };

  if (isDone) return null;

  return (
    <aside
      className={`preloader-curtain ${isExiting ? 'is-exiting' : ''}`}
      onClick={skipLoading}
      aria-label="Urban District Market Loading Screen"
      role="status"
      aria-live="polite"
    >
      <div className="preloader-noise" />

      <div className="preloader-content">
        {/* Exact UDM Brand Loading Logo */}
        <div className="preloader-logo-wrap">
          {/* HexMark Symbol */}
          <div className="preloader-mark">
            <svg
              width="60"
              height="60"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="preloader-svg"
            >
              {/* Outer regular hexagon path with stroke animation */}
              <path
                className="preloader-hex-path"
                d="M 18,3.5 L 30.56,10.75 L 30.56,25.25 L 18,32.5 L 5.44,25.25 L 5.44,10.75 Z"
                stroke="#0E0E0C"
                strokeWidth="1.65"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                pathLength="100"
              />
              {/* Inner solid honey-yellow hexagon with smooth bloom */}
              <polygon
                className="preloader-hex-inner"
                points="18,13.2 22.16,15.6 22.16,20.4 18,22.8 13.84,20.4 13.84,15.6"
                fill="#F2B01E"
              />
            </svg>
          </div>

          {/* Wordmark and Descriptor */}
          <div className="preloader-text">
            <span className="preloader-wordmark">Urban District</span>
            <span className="preloader-descriptor">MARKET &middot; CLT</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
