import React from 'react';

export default function VenueMap() {
  return (
    <div className="venue-map-container" style={{ aspectRatio: '16 / 10.5', position: 'relative' }}>
      <svg
        viewBox="0 0 800 520"
        style={{ width: '100%', height: '100%', display: 'block' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Canvas */}
        <rect width="800" height="520" fill="#E8A62A" />

        {/* Subtle grid pattern / architectural texture */}
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#DCA022" strokeWidth="0.75" opacity="0.6" />
          </pattern>
          <pattern id="hatch" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#231F1A" strokeWidth="1" opacity="0.15" />
          </pattern>
        </defs>
        <rect width="800" height="520" fill="url(#grid)" />

        {/* LYNX Blue Line Track & Cross-Charlotte Trail */}
        <g opacity="0.8">
          <path
            d="M 50 490 Q 220 380 340 300 T 560 170 T 750 70"
            fill="none"
            stroke="#231F1A"
            strokeWidth="3.5"
            strokeDasharray="6,4"
          />
          <text x="180" y="375" transform="rotate(-30 180 375)" fill="#231F1A" fontSize="9" letterSpacing="2" fontFamily="'Outfit', sans-serif" fontWeight="600">
            LYNX BLUE LINE & TRAIL ──────
          </text>
        </g>

        {/* N Davidson Street */}
        <path
          d="M 60 70 L 740 70"
          stroke="#231F1A"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 60 70 L 740 70"
          stroke="#FAF8F5"
          strokeWidth="1.5"
          strokeDasharray="16,10"
          fill="none"
        />
        <text x="320" y="55" fill="#231F1A" fontSize="11" letterSpacing="3" fontFamily="'Outfit', sans-serif" fontWeight="700">
          N. DAVIDSON STREET
        </text>

        {/* 25th Street Intersection */}
        <path
          d="M 680 70 L 680 480"
          stroke="#231F1A"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        <text x="696" y="260" transform="rotate(90 696 260)" fill="#231F1A" fontSize="10" letterSpacing="3" fontFamily="'Outfit', sans-serif" fontWeight="700">
          E. 25TH STREET
        </text>

        {/* Parking Lot Area */}
        <rect x="470" y="110" width="180" height="150" fill="#E29F24" stroke="#231F1A" strokeWidth="2" rx="3" />
        <line x1="470" y1="160" x2="650" y2="160" stroke="#231F1A" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="470" y1="210" x2="650" y2="210" stroke="#231F1A" strokeWidth="1" strokeDasharray="4,4" />
        
        {/* Parking P Icon */}
        <circle cx="560" cy="180" r="18" fill="#231F1A" />
        <text x="560" y="186" textAnchor="middle" fill="#E8A62A" fontSize="16" fontFamily="'Outfit', sans-serif" fontWeight="800">
          P
        </text>
        <text x="560" y="240" textAnchor="middle" fill="#231F1A" fontSize="8.5" letterSpacing="1.5" fontFamily="'Outfit', sans-serif" fontWeight="600">
          FREE GUEST LOT (200+ SPACES)
        </text>

        {/* Outdoor Courtyard & Lawn */}
        <rect x="180" y="140" width="260" height="140" fill="#E8A62A" stroke="#231F1A" strokeWidth="2" strokeDasharray="3,3" />
        <text x="310" y="195" textAnchor="middle" fill="#231F1A" fontSize="9.5" letterSpacing="2" fontFamily="'Outfit', sans-serif" fontWeight="700">
          SHARED OUTDOOR COURTYARD
        </text>
        <text x="310" y="215" textAnchor="middle" fill="#231F1A" fontSize="8" fontFamily="'Outfit', sans-serif" opacity="0.8">
          Games · Picnic Tables · Dog Friendly · Festoon Lights
        </text>

        {/* Trees in Courtyard */}
        <circle cx="210" cy="170" r="10" fill="#231F1A" opacity="0.3" />
        <circle cx="210" cy="170" r="6" fill="#231F1A" />
        <circle cx="410" cy="170" r="10" fill="#231F1A" opacity="0.3" />
        <circle cx="410" cy="170" r="6" fill="#231F1A" />
        <circle cx="310" cy="155" r="8" fill="#231F1A" opacity="0.3" />
        <circle cx="310" cy="155" r="5" fill="#231F1A" />

        {/* Building 1: Urban District Market (Food Hall) */}
        <g>
          <rect x="140" y="300" width="300" height="150" fill="#231F1A" rx="4" />
          <rect x="146" y="306" width="288" height="138" fill="#E8A62A" />
          <rect x="146" y="306" width="288" height="138" fill="url(#hatch)" />

          {/* Main Entrance Arrow */}
          <path d="M 290 280 L 290 305" stroke="#231F1A" strokeWidth="3" markerEnd="url(#arrow)" />
          <polygon points="286,298 290,307 294,298" fill="#231F1A" />

          <text x="290" y="355" textAnchor="middle" fill="#231F1A" fontSize="14" letterSpacing="2" fontFamily="'Outfit', sans-serif" fontWeight="800">
            URBAN DISTRICT MARKET
          </text>
          <text x="290" y="380" textAnchor="middle" fill="#231F1A" fontSize="10.5" letterSpacing="1" fontFamily="'Outfit', sans-serif" fontWeight="600">
            10 KITCHENS · LaBARatory · UDM SUPER
          </text>
          <text x="290" y="405" textAnchor="middle" fill="#231F1A" fontSize="9" letterSpacing="1.5" fontFamily="'Outfit', sans-serif" opacity="0.85">
            2315 N. DAVIDSON ST · SUITE 100
          </text>
        </g>

        {/* Building 2: Seoul Food Meat Co */}
        <g>
          <rect x="470" y="280" width="180" height="170" fill="#231F1A" rx="4" />
          <rect x="475" y="285" width="170" height="160" fill="#E8A62A" />
          <text x="560" y="350" textAnchor="middle" fill="#231F1A" fontSize="12" letterSpacing="1.5" fontFamily="'Outfit', sans-serif" fontWeight="700">
            SEOUL FOOD
          </text>
          <text x="560" y="370" textAnchor="middle" fill="#231F1A" fontSize="12" letterSpacing="1.5" fontFamily="'Outfit', sans-serif" fontWeight="700">
            MEAT CO.
          </text>
          <text x="560" y="400" textAnchor="middle" fill="#231F1A" fontSize="8" letterSpacing="1" fontFamily="'Outfit', sans-serif">
            Karaoke · Playground
          </text>
        </g>

        {/* North Compass Rose */}
        <g transform="translate(730, 440)">
          <circle cx="0" cy="0" r="24" fill="none" stroke="#231F1A" strokeWidth="1.5" />
          <polygon points="0,-18 5,-2 0,2 -5,-2" fill="#231F1A" />
          <polygon points="0,18 5,2 0,-2 -5,2" fill="#231F1A" opacity="0.4" />
          <text x="0" y="-24" textAnchor="middle" fill="#231F1A" fontSize="11" fontFamily="'Outfit', sans-serif" fontWeight="800">
            N
          </text>
        </g>

        {/* Mill District Tag */}
        <rect x="50" y="110" width="105" height="42" fill="#231F1A" rx="2" />
        <text x="102" y="128" textAnchor="middle" fill="#FAF8F5" fontSize="8" letterSpacing="1.5" fontFamily="'Outfit', sans-serif" fontWeight="700">
          MILL DISTRICT
        </text>
        <text x="102" y="142" textAnchor="middle" fill="#E8A62A" fontSize="7.5" letterSpacing="1" fontFamily="'Outfit', sans-serif" fontWeight="600">
          CHARLOTTE, NC
        </text>
      </svg>
    </div>
  );
}
