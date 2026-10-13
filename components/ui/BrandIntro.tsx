"use client";

import React, { useEffect, useState } from "react";

/**
 * BrandIntro
 * Polished, full-screen brand opening for DORA Global Research.
 * Plays once per browser session before the homepage appears.
 * Total duration: ~2.3 seconds with smooth fade out.
 */
export function BrandIntro() {
  // Stages:
  // "init"    -> Mounted, deep navy canvas, content hidden
  // "dora"    -> DORA wordmark and monogram glide in smoothly
  // "full"    -> GLOBAL RESEARCH descriptor and accent line appear
  // "fading"  -> Overlay gently fades out to reveal the homepage
  // "hidden"  -> Unmounted from the DOM, body scroll restored
  const [stage, setStage] = useState<"init" | "dora" | "full" | "fading" | "hidden">("init");

  useEffect(() => {
    // 1. Session check and accessibility check
    try {
      const alreadySeen = sessionStorage.getItem("dora_intro_seen");
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (alreadySeen || prefersReducedMotion) {
        setStage("hidden");
        return;
      }
    } catch {
      // If sessionStorage is blocked by browser security, proceed safely
    }

    // 2. Lock body scroll during animation sequence
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 3. Animation Sequence Timeline
    // 0ms: Initial canvas visible
    // 90ms: DORA wordmark appears
    // 550ms: GLOBAL RESEARCH descriptor appears
    // 1800ms: Begin smooth fade out
    // 2350ms: Unmount and record session completion
    const t1 = setTimeout(() => {
      setStage("dora");
    }, 90);

    const t2 = setTimeout(() => {
      setStage("full");
    }, 550);

    const t3 = setTimeout(() => {
      setStage("fading");
    }, 1800);

    const t4 = setTimeout(() => {
      setStage("hidden");
      document.body.style.overflow = originalOverflow;
      try {
        sessionStorage.setItem("dora_intro_seen", "true");
      } catch {}
    }, 2350);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (stage === "hidden") {
    return null;
  }

  return (
    <aside
      id="dora-brand-intro"
      aria-label="DORA Global Research Brand Introduction"
      aria-hidden={stage === "fading" ? "true" : undefined}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[radial-gradient(ellipse_at_top_left,#EBF3FF_0%,#F4F8FE_50%,#FFFFFF_100%)] select-none transition-opacity duration-500 ease-out overflow-hidden ${
        stage === "fading" ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
    >
      {/* Signature DORA Blue Extended Curved Background Pattern (matching Hero) */}
      <div
        className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 right-0 h-[130%] w-[75%] text-brand-blue-700/[0.18] -translate-y-[10%]"
          viewBox="0 0 700 900"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M 180 0 C -80 280 80 620 700 900 L 700 0 Z" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-xl mx-auto flex flex-col items-center">
        {/* Monogram Badge (Reused from brand identity) */}
        <div
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-sm bg-brand-navy-900 border border-brand-navy-800 flex items-center justify-center text-white font-bold text-lg sm:text-xl tracking-tight mb-5 shadow-sm transition-all duration-700 ease-out ${
            stage !== "init" ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95"
          }`}
        >
          <span>D</span>
        </div>

        {/* Primary Wordmark: DORA */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-navy-900 leading-none transition-all duration-700 ease-out ${
            stage !== "init" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          DORA
        </h1>

        {/* Restrained Brand Blue Hairline Divider */}
        <div
          className={`w-12 h-[2px] bg-brand-blue-600 my-3.5 transition-all duration-700 delay-150 ease-out ${
            stage === "full" || stage === "fading"
              ? "opacity-100 scale-x-100"
              : "opacity-0 scale-x-50"
          }`}
          aria-hidden="true"
        />

        {/* Practice Descriptor: GLOBAL RESEARCH */}
        <p
          className={`text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.28em] sm:tracking-[0.32em] text-slate-600 transition-all duration-700 ease-out ${
            stage === "full" || stage === "fading"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
          }`}
        >
          Global Research
        </p>
      </div>
    </aside>
  );
}
