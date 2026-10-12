import React from "react";
import { UserCheck, Compass, ShieldCheck, Clock, Users, Mail } from "lucide-react";

export function ContactHeroVisual() {
  return (
    <div className="w-full max-w-[450px] bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 sm:p-7 relative overflow-hidden select-none">
      {/* Soft ambient gradient backdrop */}
      <div
        className="absolute top-0 right-0 w-48 h-48 bg-brand-blue-500/[0.04] rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Header bar */}
      <div className="relative z-10 pb-4 mb-4 border-b border-slate-100">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-blue-50 border border-brand-blue-200/70 text-brand-blue-700 text-xs font-semibold">
            <Users className="w-3.5 h-3.5" />
            <span>Direct Client Advisory</span>
          </span>
          <span className="text-xs text-slate-500 font-medium">
            Confidential Consultation
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-brand-navy-900 mt-3 tracking-tight">
          How We Support Your Research
        </h3>
        <p className="text-xs sm:text-[13px] text-slate-600 mt-1 leading-relaxed">
          Direct collaboration with senior research leads from initial scoping through final executive briefing.
        </p>
      </div>

      {/* Advisory Commitments */}
      <div className="space-y-3 relative z-10">
        <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 transition-all hover:border-brand-blue-300 hover:bg-white">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-brand-blue-50 text-brand-blue-700 flex items-center justify-center shrink-0 mt-0.5">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-[13px] font-bold text-brand-navy-900">
                Senior Practice Leadership
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-normal">
                Consult directly with practice leads who bring deep sector experience—not sales reps or automated queues.
              </p>
            </div>
          </div>
        </div>

        <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 transition-all hover:border-brand-blue-300 hover:bg-white">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-brand-blue-50 text-brand-blue-700 flex items-center justify-center shrink-0 mt-0.5">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-[13px] font-bold text-brand-navy-900">
                Tailored Global Methodologies
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-normal">
                Custom qualitative, quantitative, and linguistic frameworks engineered around your strategic priorities.
              </p>
            </div>
          </div>
        </div>

        <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 transition-all hover:border-brand-blue-300 hover:bg-white">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-brand-blue-50 text-brand-blue-700 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-[13px] font-bold text-brand-navy-900">
                Strict Enterprise Confidentiality
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-normal">
                Comprehensive non-disclosure protections and respondent privacy safeguards across all discussions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500 relative z-10">
        <div className="flex items-center gap-1.5 font-medium text-slate-600">
          <Clock className="w-3.5 h-3.5 text-brand-blue-600 shrink-0" />
          <span>Response within 24 business hours</span>
        </div>
        <a
          href="mailto:info@doraglobalresearch.com"
          className="inline-flex items-center gap-1 text-brand-blue-700 hover:text-brand-blue-800 font-semibold transition-colors"
        >
          <Mail className="w-3 h-3" />
          <span>info@doraglobalresearch.com</span>
        </a>
      </div>
    </div>
  );
}
