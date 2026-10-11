import React from "react";

export type HeroDecorationVariant = "network" | "grid" | "none";

interface HeroDecorationProps {
  variant?: HeroDecorationVariant;
  className?: string;
}

export function HeroDecoration({
  variant = "network",
  className = "",
}: HeroDecorationProps) {
  if (variant === "none") {
    return (
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
        aria-hidden="true"
      >
        {/* Preserved signature blue/periwinkle curved background */}
        <div className="absolute top-0 right-0 w-[45%] h-full pointer-events-none overflow-hidden">
          <svg
            className="absolute top-0 right-0 h-[160%] w-full text-brand-blue-700/[0.08] -translate-y-[20%]"
            viewBox="0 0 500 600"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M 150 0 C -60 180 60 420 500 600 L 500 0 Z" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Preserved signature blue/periwinkle curved background with exact geometry and position */}
      <div className="absolute top-0 right-0 w-[45%] h-full pointer-events-none overflow-hidden">
        <svg
          className="absolute top-0 right-0 h-[160%] w-full text-brand-blue-700/[0.08] -translate-y-[20%]"
          viewBox="0 0 500 600"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M 150 0 C -60 180 60 420 500 600 L 500 0 Z" />
        </svg>
      </div>

      {/* 2. Ambient soft radiance for depth behind decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-brand-blue-500/[0.035] rounded-full blur-3xl pointer-events-none" />

      {/* 3. Purposeful decorative layer inside the hero negative space */}
      {variant === "network" && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] lg:w-[620px] h-[340px] sm:h-[480px] lg:h-[620px] pointer-events-none text-brand-blue-700">
          <svg
            viewBox="0 0 640 640"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Concentric telemetry & research orbital contours */}
            <circle
              cx="360"
              cy="320"
              r="280"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 8"
              className="opacity-[0.07]"
            />
            <circle
              cx="360"
              cy="320"
              r="210"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="3 6"
              className="opacity-[0.09]"
            />
            <circle
              cx="360"
              cy="320"
              r="140"
              stroke="currentColor"
              strokeWidth="1"
              className="opacity-[0.08]"
            />
            <circle
              cx="360"
              cy="320"
              r="70"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="2 4"
              className="opacity-[0.10]"
            />

            {/* Global-network elliptical data contours (tilted market latitude paths) */}
            <ellipse
              cx="360"
              cy="320"
              rx="290"
              ry="110"
              stroke="currentColor"
              strokeWidth="1"
              className="opacity-[0.08]"
              transform="rotate(-20 360 320)"
            />
            <ellipse
              cx="360"
              cy="320"
              rx="260"
              ry="75"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5 7"
              className="opacity-[0.06]"
              transform="rotate(-20 360 320)"
            />

            {/* Coordinate grid crosshairs */}
            <g className="opacity-[0.16]">
              {/* Point 1 (220, 240) */}
              <line x1="214" y1="240" x2="226" y2="240" stroke="currentColor" strokeWidth="1" />
              <line x1="220" y1="234" x2="220" y2="246" stroke="currentColor" strokeWidth="1" />

              {/* Point 2 (470, 200) */}
              <line x1="464" y1="200" x2="476" y2="200" stroke="currentColor" strokeWidth="1" />
              <line x1="470" y1="194" x2="470" y2="206" stroke="currentColor" strokeWidth="1" />

              {/* Point 3 (490, 410) */}
              <line x1="484" y1="410" x2="496" y2="410" stroke="currentColor" strokeWidth="1" />
              <line x1="490" y1="404" x2="490" y2="416" stroke="currentColor" strokeWidth="1" />

              {/* Point 4 (250, 420) */}
              <line x1="244" y1="420" x2="256" y2="420" stroke="currentColor" strokeWidth="1" />
              <line x1="250" y1="414" x2="250" y2="426" stroke="currentColor" strokeWidth="1" />
            </g>

            {/* Interconnected intelligence data paths */}
            <path
              d="M 230 250 L 360 320 L 470 220 L 510 350 L 420 440 L 360 320 L 260 390 Z"
              stroke="currentColor"
              strokeWidth="1.2"
              className="opacity-[0.13]"
            />
            <path
              d="M 230 250 L 340 180 L 470 220"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="3 5"
              className="opacity-[0.10]"
            />
            <path
              d="M 510 350 L 360 320"
              stroke="currentColor"
              strokeWidth="1"
              className="opacity-[0.10]"
            />
            <path
              d="M 260 390 L 340 450 L 420 440"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="3 5"
              className="opacity-[0.09]"
            />

            {/* Connected intelligence nodes */}
            {/* Center Hub */}
            <circle cx="360" cy="320" r="4.5" fill="currentColor" className="opacity-[0.25]" />
            <circle
              cx="360"
              cy="320"
              r="10"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="2 3"
              className="opacity-[0.20]"
            />

            {/* Node 1: North Hub */}
            <circle cx="340" cy="180" r="3.5" fill="currentColor" className="opacity-[0.22]" />

            {/* Node 2: East-North Hub */}
            <circle cx="470" cy="220" r="4" fill="currentColor" className="opacity-[0.24]" />
            <circle
              cx="470"
              cy="220"
              r="8"
              stroke="currentColor"
              strokeWidth="1"
              className="opacity-[0.15]"
            />

            {/* Node 3: East Hub */}
            <circle cx="510" cy="350" r="3.5" fill="currentColor" className="opacity-[0.20]" />

            {/* Node 4: South-East Hub */}
            <circle cx="420" cy="440" r="4" fill="currentColor" className="opacity-[0.22]" />

            {/* Node 5: South Hub */}
            <circle cx="340" cy="450" r="3" fill="currentColor" className="opacity-[0.18]" />

            {/* Node 6: South-West Hub */}
            <circle cx="260" cy="390" r="3.5" fill="currentColor" className="opacity-[0.20]" />

            {/* Node 7: West-North Hub */}
            <circle cx="230" cy="250" r="4" fill="currentColor" className="opacity-[0.22]" />
            <circle
              cx="230"
              cy="250"
              r="8"
              stroke="currentColor"
              strokeWidth="1"
              className="opacity-[0.15]"
            />
          </svg>
        </div>
      )}

      {variant === "grid" && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] lg:w-[600px] h-[340px] sm:h-[480px] lg:h-[600px] pointer-events-none text-brand-blue-700">
          <svg
            viewBox="0 0 600 600"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Fine geometric coordinate grid */}
            <defs>
              <pattern
                id="hero-geom-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  className="opacity-[0.08]"
                />
                <circle cx="60" cy="60" r="1.5" fill="currentColor" className="opacity-[0.18]" />
              </pattern>
            </defs>
            <rect width="600" height="600" fill="url(#hero-geom-grid)" />
            <circle
              cx="300"
              cy="300"
              r="180"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 6"
              className="opacity-[0.12]"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
