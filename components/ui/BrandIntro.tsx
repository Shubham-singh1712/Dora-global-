"use client";

import React, { useEffect, useState } from "react";

/**
 * BrandIntro
 * Polished, full-screen brand introduction for DORA Global Research.
 * 
 * Opening Sequence:
 * 1. Deep navy canvas appears immediately on initial paint.
 * 2. DORA wordmark fades in smoothly with a subtle upward movement.
 * 3. GLOBAL RESEARCH appears just below it with a gentle fade.
 * 4. Complete brand mark holds briefly so visitors can read it.
 * 5. Intro screen fades away smoothly revealing the homepage (~2.2-2.4s total).
 * 
 * Plays once per browser session via sessionStorage. Respects prefers-reduced-motion.
 */
export function BrandIntro() {
  const [stage, setStage] = useState<"init" | "dora" | "full" | "fading" | "hidden">("init");

  useEffect(() => {
    // 1. Session and motion preference check
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
      // Proceed safely if storage is blocked
    }

    // 2. Lock body scroll during intro sequence
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 3. Animation Sequence Timeline (total ~2.3 seconds)
    // 0ms: Deep navy canvas visible immediately
    // 90ms: DORA wordmark fades in smoothly with upward glide
    // 520ms: GLOBAL RESEARCH appears just below it
    // 1750ms: Begin smooth fade out
    // 2350ms: Complete transition, restore scroll, record session
    const t1 = setTimeout(() => {
      setStage("dora");
    }, 90);

    const t2 = setTimeout(() => {
      setStage("full");
    }, 520);

    const t3 = setTimeout(() => {
      setStage("fading");
    }, 1750);

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
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#070E1C] select-none transition-opacity duration-600 ease-out overflow-hidden ${
        stage === "fading" ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
    >
      {/* Deep, restrained ambient radial depth */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.14)_0%,rgba(7,14,28,0.92)_65%,#070E1C_100%)]"
        aria-hidden="true"
      />

      {/* Brand Mark Focus */}
      <div className="relative z-10 text-center px-6 max-w-xl mx-auto flex flex-col items-center">
        {/* Step 1: DORA Wordmark */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none transition-all duration-700 ease-out ${
            stage !== "init"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          DORA
        </h1>

        {/* Restrained Brand Blue Accent Hairline */}
        <div
          className={`w-12 sm:w-16 h-[2px] bg-brand-blue-500 my-4 sm:my-5 transition-all duration-700 delay-100 ease-out ${
            stage === "full" || stage === "fading"
              ? "opacity-100 scale-x-100"
              : "opacity-0 scale-x-50"
          }`}
          aria-hidden="true"
        />

        {/* Step 2: GLOBAL RESEARCH */}
        <p
          className={`text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.3em] sm:tracking-[0.36em] text-slate-300 leading-none transition-all duration-700 ease-out ${
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
