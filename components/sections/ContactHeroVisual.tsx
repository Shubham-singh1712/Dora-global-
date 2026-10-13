import React from "react";
import { UserCheck, Compass, ShieldCheck, Clock, Users, Mail } from "lucide-react";

export function ContactHeroVisual() {
  return (
    <div className="w-full max-w-[460px] bg-white rounded-xl border border-slate-200/90 shadow-card p-5 sm:p-5.5 relative overflow-hidden select-none">
      {/* Soft ambient gradient backdrop */}
      <div
        className="absolute top-0 right-0 w-44 h-44 bg-brand-blue-500/[0.04] rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Header bar */}
      <div className="relative z-10 pb-3 mb-3 border-b border-slate-100">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-blue-50 border border-brand-blue-200/70 text-brand-blue-700 text-xs font-semibold">
            <Users className="w-3.5 h-3.5" />
            <span>Direct Client Advisory</span>
          </span>
          <span className="text-[11px] text-slate-500 font-medium">
            Confidential Consultation
          </span>
        </div>

        <h3 className="text-base font-bold text-brand-navy-900 mt-2.5 tracking-tight">
          How We Support Your Research
        </h3>
        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
          Direct collaboration with senior research leads from initial scoping to final briefing.
        </p>
      </div>

      {/* Advisory Commitments */}
      <div className="space-y-2.5 relative z-10">
        <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50/80 border border-slate-200/70 transition-all hover:border-brand-blue-300 hover:bg-white">
          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-md bg-brand-blue-50 text-brand-blue-700 flex items-center justify-center shrink-0 mt-0.5">
              <UserCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-brand-navy-900">
                Senior Practice Leadership
              </h4>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-snug font-normal">
                Consult directly with experienced practice leads who understand your industry.
              </p>
            </div>
          </div>
        </div>

        <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50/80 border border-slate-200/70 transition-all hover:border-brand-blue-300 hover:bg-white">
          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-md bg-brand-blue-50 text-brand-blue-700 flex items-center justify-center shrink-0 mt-0.5">
              <Compass className="w-3.5 h-3.5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-brand-navy-900">
                Tailored Global Methodologies
              </h4>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-snug font-normal">
                Custom qualitative, quantitative, and linguistic frameworks for your priorities.
              </p>
            </div>
          </div>
        </div>

        <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50/80 border border-slate-200/70 transition-all hover:border-brand-blue-300 hover:bg-white">
          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-md bg-brand-blue-50 text-brand-blue-700 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-brand-navy-900">
                Strict Enterprise Confidentiality
              </h4>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-snug font-normal">
                Comprehensive non-disclosure protections and respondent privacy safeguards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 relative z-10">
        <div className="flex items-center gap-1.5 font-medium text-slate-600 text-[11px]">
          <Clock className="w-3 h-3 text-brand-blue-600 shrink-0" />
          <span>Direct consultation response</span>
        </div>
        <a
          href="mailto:doraglobal23@gmail.com"
          className="inline-flex items-center gap-1 text-brand-blue-700 hover:text-brand-blue-800 font-semibold text-[11px] transition-colors"
        >
          <Mail className="w-2.5 h-2.5" />
          <span>doraglobal23@gmail.com</span>
        </a>
      </div>
    </div>
  );
}
