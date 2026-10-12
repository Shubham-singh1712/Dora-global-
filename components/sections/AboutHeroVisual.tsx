import React from "react";
import Image from "next/image";

export function AboutHeroVisual() {
  return (
    <div className="relative group w-full max-w-[460px] mr-2 mb-2 sm:mr-2.5 sm:mb-2.5">
      {/* Architectural offset frame accent matching DORA hero design language */}
      <div
        className="absolute inset-0 bg-brand-navy-950/5 border border-brand-navy-900/10 pointer-events-none transform translate-x-2 translate-y-2 sm:translate-x-2.5 sm:translate-y-2.5 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5"
        aria-hidden="true"
      />

      {/* Main Photographic Visual Container */}
      <div className="relative aspect-[4/3] bg-brand-navy-950 overflow-hidden border border-slate-300 shadow-card">
        <Image
          src="/images/about-research-hero.jpg"
          alt="DORA Global Research Practice — Strategy, Quantitative Modeling & Market Intelligence"
          fill
          priority
          className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 460px"
        />

        {/* Ambient top-left practice status indicator */}
        <div className="absolute top-3 left-3 z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-subtle text-brand-navy-900">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-600" />
            <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-700">
              Strategic Research
            </span>
          </div>
        </div>

        {/* Editorial Overlay Caption */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy-950/95 via-brand-navy-950/65 to-transparent pt-12 pb-3.5 px-4 sm:px-4.5 text-white">
          <div className="flex items-end justify-between gap-3">
            <div className="space-y-0.5">
              <span className="text-[11px] uppercase tracking-wider text-brand-blue-300 block font-medium">
                Primary &bull; Qualitative &bull; Quantitative
              </span>
              <p className="text-xs sm:text-[13px] font-semibold text-slate-100 leading-snug">
                Empirical Intelligence &amp; Defensible Direction
              </p>
            </div>
            <span className="text-[11px] text-slate-300 px-2 py-0.5 bg-brand-navy-900/80 border border-slate-700/80 rounded shrink-0 hidden sm:inline-block">
              Global Scope
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
