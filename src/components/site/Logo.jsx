import React from 'react';

/**
 * HexMark: Clean regular hexagon outline in near-black (#0E0E0C)
 * with a small, optically centered solid honey-yellow (#F2B01E) hexagon inside.
 */
export function HexMark({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`logo-hexmark ${className}`}
      aria-hidden="true"
    >
      {/* Outer regular hexagon outline */}
      <polygon
        points="18,3.5 30.56,10.75 30.56,25.25 18,32.5 5.44,25.25 5.44,10.75"
        stroke="#0E0E0C"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      {/* Inner solid honey-yellow hexagon */}
      <polygon
        points="18,13.2 22.16,15.6 22.16,20.4 18,22.8 13.84,20.4 13.84,15.6"
        fill="#F2B01E"
      />
    </svg>
  );
}

/**
 * Urban District Market Logo:
 * - Symbol on left: HexMark
 * - Wordmark on right: "Urban District" (Cormorant Garamond, regular weight)
 * - Descriptor centered below: "MARKET · CLT" (Outfit, uppercase, #55544F, 0.36em tracking)
 */
export default function Logo({ size = 'medium', className = '' }) {
  return (
    <div className={`udm-logo udm-logo--${size} ${className}`}>
      <div className="udm-logo__mark">
        <HexMark size={size === 'small' ? 26 : size === 'large' ? 40 : 32} />
      </div>
      <div className="udm-logo__text">
        <span className="udm-logo__wordmark">Urban District</span>
        <span className="udm-logo__descriptor">MARKET · CLT</span>
      </div>
    </div>
  );
}

export { Logo };
