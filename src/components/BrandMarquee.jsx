import React from 'react';

export default function BrandMarquee() {
  const statement = (
    <>
      <span>Bee connected</span>
      <span className="marquee-symbol">◇</span>
      <span>Where everyone goes to play</span>
      <span className="marquee-symbol">⬡</span>
    </>
  );

  return (
    <div className="brand-marquee-section" aria-label="Brand marquee ticker">
      <div className="marquee-inner">
        {/* We repeat the group multiple times for an ultra-smooth, continuous infinite loop */}
        <div className="marquee-group">
          <div className="marquee-item">{statement}</div>
          <div className="marquee-item">{statement}</div>
          <div className="marquee-item">{statement}</div>
          <div className="marquee-item">{statement}</div>
        </div>
        <div className="marquee-group" aria-hidden="true">
          <div className="marquee-item">{statement}</div>
          <div className="marquee-item">{statement}</div>
          <div className="marquee-item">{statement}</div>
          <div className="marquee-item">{statement}</div>
        </div>
      </div>
    </div>
  );
}
