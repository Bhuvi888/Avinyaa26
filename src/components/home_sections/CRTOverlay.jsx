import React from 'react';

const CRTOverlay = ({ isScrolled, isDark }) => {
  if (isScrolled) return null;

  // Define gradients based on mode
  // Dark Mode (Red Chip) -> Bright Red/Crimson
  // Light Mode (White Chip) -> Blue/Cyan (for contrast)
  const gradient = isDark
    ? 'linear-gradient(90deg, transparent, rgba(255, 0, 0, 0.4), transparent)' // Bright Red
    : 'linear-gradient(90deg, transparent, rgba(0, 50, 255, 0.08), transparent)'; // Blue

  const glow = isDark
    ? 'inset 0 0 20px rgba(255, 0, 0, 0.3)' // Bright Red Glow
    : 'inset 0 0 20px rgba(0, 50, 255, 0.1)'; // Blue Glow

  return (
    <div className="fixed inset-0 pointer-events-none z-[40] overflow-hidden">
      {/* SVG Filter Definition for Water Effect */}
      <svg className="absolute w-0 h-0">
        <filter id="water-distortion">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02 0.1"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="40"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Mode-Matched Water Scanner Wave */}
      <div
        className="absolute top-0 h-full w-[3vw]"
        style={{
          animation: 'scanline-horizontal 10s linear infinite',
          backdropFilter: 'url(#water-distortion) blur(2px)',
          WebkitBackdropFilter: 'url(#water-distortion) blur(2px)',
          background: gradient,
          boxShadow: glow
        }}
      >
        {/* No inner div - pure liquid wave */}
      </div>

      <style>{`
        @keyframes scanline-horizontal {
          0% {
            left: -10%;
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            left: 110%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CRTOverlay;
