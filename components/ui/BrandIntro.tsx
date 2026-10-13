"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cormorantGaramond, inter } from "@/lib/fonts";

/**
 * BrandIntro
 * Cinematic full-screen brand introduction for DORA Global Research.
 *
 * Typography:
 * - DORA: Cormorant Garamond, weight 500, uppercase, large elegant high-contrast serif, tracking-[0.16em]
 * - GLOBAL RESEARCH: Inter, weight 400, uppercase, generous letter spacing tracking-[0.42em]
 * - PEOPLE | MARKETS | PERSPECTIVES: Inter, weight 400, uppercase, smaller size, moderate tracking-[0.24em]
 * - Subtle thin blue divider and soft silver/white palette
 */
export function BrandIntro() {
  const [stage, setStage] = useState<"init" | "dora" | "full" | "fading" | "hidden">("init");

  useEffect(() => {
    // 1. Session and motion preference check
    try {
      const urlParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
      const forceIntro = urlParams?.has("intro") || urlParams?.has("preview");
      const pauseIntro = urlParams?.has("pause");
      const alreadySeen = sessionStorage.getItem("dora_intro_seen");
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!forceIntro && (alreadySeen || prefersReducedMotion)) {
        setStage("hidden");
        return;
      }

      if (pauseIntro) {
        setStage("full");
        return;
      }
    } catch {
      // Proceed safely if storage is blocked
    }

    // 2. Lock body scroll during intro sequence
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 3. Animation Sequence Timeline (total ~2.4 seconds)
    // 0ms: Initial cinematic canvas ready
    // 90ms: DORA wordmark glides in smoothly
    // 520ms: GLOBAL RESEARCH & tagline fade in
    // 1850ms: Begin smooth fade out
    // 2450ms: Unmount overlay, restore body scroll, record session
    const t1 = setTimeout(() => {
      setStage("dora");
    }, 90);

    const t2 = setTimeout(() => {
      setStage("full");
    }, 520);

    const t3 = setTimeout(() => {
      setStage("fading");
    }, 1850);

    const t4 = setTimeout(() => {
      setStage("hidden");
      document.body.style.overflow = originalOverflow;
      try {
        sessionStorage.setItem("dora_intro_seen", "true");
      } catch {}
    }, 2450);

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
      className={`fixed inset-0 z-[9999] flex flex-col justify-between bg-[#040812] select-none transition-opacity duration-600 ease-out overflow-hidden ${
        stage === "fading" ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
    >
      {/* 1. Cinematic Earth Horizon Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/earth-intro.jpg"
          alt="DORA Global Research Earth Horizon"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom md:object-[center_60%] lg:object-bottom scale-[1.02]"
        />

        {/* Ambient Dark Vignette & Upper Sky Contrast Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#040812]/85 via-[#040812]/35 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Subtle Bottom Vignette */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#040812]/90 via-[#040812]/40 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Top spacer to balance vertical layout */}
      <div className="w-full h-8 sm:h-12 pointer-events-none z-10" />

      {/* 2. Centered Brand Identity Container */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto flex flex-col items-center pt-8 sm:pt-0">
        {/* Step 1: DORA Wordmark — Cormorant Garamond, Weight 500, Uppercase */}
        <h1
          className={`${cormorantGaramond.className} text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-[0.16em] sm:tracking-[0.18em] text-white leading-none transition-all duration-700 ease-out drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] ${
            stage !== "init"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ fontFamily: `${cormorantGaramond.style.fontFamily}, 'Cormorant Garamond', Georgia, serif` }}
        >
          DORA
        </h1>

        {/* Step 2: GLOBAL RESEARCH Subtitle — Inter, Weight 400, Uppercase, Generous Spacing */}
        <p
          className={`${inter.className} text-xs sm:text-sm md:text-base font-normal uppercase tracking-[0.38em] sm:tracking-[0.44em] text-[#D8E1ED] mt-3 sm:mt-3.5 leading-none transition-all duration-700 delay-100 ease-out drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] ${
            stage === "full" || stage === "fading"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
          }`}
          style={{ fontFamily: `${inter.style.fontFamily}, 'Inter', sans-serif` }}
        >
          Global Research
        </p>

        {/* Restrained Thin Blue Divider */}
        <div
          className={`w-14 sm:w-20 h-[1.5px] bg-brand-blue-400/90 my-3.5 sm:my-4 transition-all duration-700 delay-200 ease-out shadow-[0_0_8px_rgba(96,165,250,0.6)] ${
            stage === "full" || stage === "fading"
              ? "opacity-100 scale-x-100"
              : "opacity-0 scale-x-50"
          }`}
          aria-hidden="true"
        />

        {/* Step 3: Practice Tagline — Inter, Weight 400, Uppercase, Smaller Size, Moderate Spacing */}
        <p
          className={`${inter.className} text-[9px] sm:text-[10px] md:text-[11px] font-normal uppercase tracking-[0.24em] sm:tracking-[0.28em] text-slate-300/90 transition-all duration-700 delay-250 ease-out drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] ${
            stage === "full" || stage === "fading"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }`}
          style={{ fontFamily: `${inter.style.fontFamily}, 'Inter', sans-serif` }}
        >
          People <span className="text-brand-blue-400 mx-1">|</span> Markets{" "}
          <span className="text-brand-blue-400 mx-1">|</span> Perspectives
        </p>
      </div>

      {/* 3. Subtle Dual-Pill Indicator at Bottom */}
      <div className="relative z-10 pb-6 sm:pb-8 flex justify-center items-center pointer-events-none">
        <div
          className={`flex items-center gap-1.5 transition-opacity duration-700 delay-300 ${
            stage === "full" || stage === "fading" ? "opacity-75" : "opacity-0"
          }`}
        >
          <span className="w-6 h-[2px] rounded-full bg-brand-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
          <span className="w-6 h-[2px] rounded-full bg-slate-600/80" />
        </div>
      </div>
    </aside>
  );
}
