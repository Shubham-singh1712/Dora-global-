import React from "react";
import { CheckCircle2, Shield, MessageSquare, Globe2 } from "lucide-react";

export function ContactHeroVisual() {
  return (
    <div className="w-full max-w-[440px] bg-white/95 rounded-xl border border-slate-200/90 shadow-elevated p-5 sm:p-5.5 relative overflow-hidden backdrop-blur-sm select-none">
      {/* Subtle telemetry linework in background */}
      <div className="absolute inset-0 pointer-events-none opacity-30 overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 320 280"
          className="w-full h-full text-brand-blue-700/[0.10]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Orbital telemetry paths */}
          <circle cx="280" cy="40" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
          <circle cx="280" cy="40" r="70" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
          {/* Coordinate crosshairs */}
          <line x1="275" y1="40" x2="285" y2="40" stroke="currentColor" strokeWidth="1" />
          <line x1="280" y1="35" x2="280" y2="45" stroke="currentColor" strokeWidth="1" />
          {/* Grid lines */}
          <path d="M 0 160 L 320 160" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 6" />
          <path d="M 120 0 L 120 280" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 6" />
        </svg>
      </div>

      {/* Decorative ambient background accents */}
      <div
        className="absolute -top-10 -right-10 w-36 h-36 bg-brand-blue-500/[0.04] rounded-full blur-xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-100 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10.5px] font-bold tracking-wider text-brand-navy-900 uppercase">
            Practice Intake Active
          </span>
        </div>
        <span className="font-mono text-[9.5px] text-slate-400 uppercase tracking-widest font-medium">
          Direct Evaluation
        </span>
      </div>

      {/* Scoping Intake Pillars */}
      <div className="space-y-2.5 relative z-10 text-xs">
        <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50/90 border border-slate-200/80 transition-all hover:border-brand-blue-300">
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-6 h-6 rounded bg-brand-blue-100 text-brand-blue-700 flex items-center justify-center shrink-0">
              <MessageSquare className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-brand-navy-900 text-xs">
              01. Scoping &amp; Methodology Alignment
            </span>
          </div>
          <p className="text-[11px] text-slate-600 leading-snug pl-8.5 font-normal">
            Review business objectives, target buyer profiles, and evaluate qualitative or quantitative feasibility.
          </p>
        </div>

        <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50/90 border border-slate-200/80 transition-all hover:border-brand-blue-300">
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-6 h-6 rounded bg-brand-blue-100 text-brand-blue-700 flex items-center justify-center shrink-0">
              <Globe2 className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-brand-navy-900 text-xs">
              02. Territory &amp; Sample Calibration
            </span>
          </div>
          <p className="text-[11px] text-slate-600 leading-snug pl-8.5 font-normal">
            Assess target market geography, respondent screening criteria, sample quotas, and multilingual reach.
          </p>
        </div>

        <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50/90 border border-slate-200/80 transition-all hover:border-brand-blue-300">
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-6 h-6 rounded bg-brand-blue-100 text-brand-blue-700 flex items-center justify-center shrink-0">
              <Shield className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-brand-navy-900 text-xs">
              03. Confidentiality &amp; Mutual NDA
            </span>
          </div>
          <p className="text-[11px] text-slate-600 leading-snug pl-8.5 font-normal">
            Strict commercial data protection, respondent privacy safeguards, and mutual non-disclosure compliance.
          </p>
        </div>
      </div>

      {/* Footer metadata */}
      <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400 relative z-10">
        <span>DESK // SENIOR RESEARCH LEADS</span>
        <div className="flex items-center gap-1 text-emerald-600 font-semibold">
          <CheckCircle2 className="w-3 h-3" />
          <span>SCOPING READY</span>
        </div>
      </div>
    </div>
  );
}
