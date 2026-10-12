import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactHeroVisual } from "@/components/sections/ContactHeroVisual";
import { ContactFormClient } from "@/components/sections/ContactFormClient";
import { COMPANY_INFO } from "@/lib/constants";
import { Mail, Globe, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Research Inquiries",
  description:
    "Connect directly with the DORA Global Research team to discuss project requirements, methodologies, and cross-market research capabilities.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact DORA Global Research | Research Practice Desk",
    description:
      "Submit your research brief, audience specifications, or project scope to our senior research coordinators.",
    url: "/contact",
  },
};

export default function ContactPage() {
  const scopingSteps = [
    {
      num: "01",
      title: "Share Your Project Scope",
      desc: "Provide your business objectives, target audience profile, and required market geographies.",
    },
    {
      num: "02",
      title: "Methodology Alignment",
      desc: "Our senior research coordinators review qualitative, quantitative, or multilingual feasibility.",
    },
    {
      num: "03",
      title: "Actionable Next Steps",
      desc: "Receive structured recommendations regarding sample feasibility, timelines, and study design.",
    },
  ];

  return (
    <>
      {/* 1. Hero Section with Visual Anchor & Signature Curve */}
      <PageHeader
        badge="Research Practice Desk"
        title="Contact DORA Global Research"
        description="Connect directly with our senior research team to evaluate methodology feasibility, sample parameters, and cross-market research timelines."
        visual={<ContactHeroVisual />}
        showCurve={true}
      />

      {/* 2. Main Enquiry Section */}
      <section className="pt-10 sm:pt-12 lg:pt-14 pb-16 sm:pb-20 lg:pb-24 bg-brand-surface-subtle/50 border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Practice Information & Scoping Steps */}
            <div className="lg:col-span-5 space-y-7">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue-700 block mb-2">
                  Project Scoping &amp; Feasibility
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy-900 tracking-tight leading-tight">
                  Discuss Your Research Requirements
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Every inquiry is evaluated directly by our senior research coordinators. We collaborate with your team to determine optimal methodology fit, calibrate screening criteria, and confirm cross-market fieldwork feasibility.
                </p>
              </div>

              {/* Three-Step Scoping Sequence with Connected Flow */}
              <div className="p-5 sm:p-6 bg-white border border-slate-200/90 rounded-xl shadow-subtle space-y-4">
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-navy-900">
                    Engagement Sequence
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                    Structured Review
                  </span>
                </div>

                <div className="space-y-4 relative">
                  {scopingSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs">
                      <span className="w-6 h-6 rounded-full bg-brand-blue-50 border border-brand-blue-200 text-brand-blue-700 font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 text-[11px]">
                        {step.num}
                      </span>
                      <div className="space-y-0.5">
                        <strong className="block text-brand-navy-900 font-semibold text-xs sm:text-[13px]">
                          {step.title}
                        </strong>
                        <span className="text-slate-600 leading-relaxed block font-normal">
                          {step.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Contact Details Card */}
              <div className="p-5 sm:p-6 bg-white border border-slate-200/90 rounded-xl shadow-subtle space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy-900 block pb-2.5 border-b border-slate-100">
                  Verified Contact Information
                </span>
                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center text-brand-blue-700 shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                        Direct Inquiries
                      </span>
                      <a
                        href={`mailto:${COMPANY_INFO.contacts.email}`}
                        className="font-semibold text-brand-navy-900 hover:text-brand-blue-700 transition-colors"
                      >
                        {COMPANY_INFO.contacts.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center text-brand-blue-700 shrink-0 mt-0.5">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                        Global Footprint
                      </span>
                      <span className="font-semibold text-brand-navy-900">
                        {COMPANY_INFO.contacts.headquarters}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center text-brand-blue-700 shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                        Evaluation Practice
                      </span>
                      <span className="font-semibold text-brand-navy-900">
                        Evaluated directly by senior research practice coordinators
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scoping Standards & Confidentiality */}
              <div className="p-4 sm:p-5 bg-slate-50/90 border border-slate-200/80 rounded-xl space-y-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  Engagement Protocol &amp; Standards
                </span>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue-700 shrink-0" />
                    <span>Rigorous methodology selection (Qual, Quant &amp; Multilingual)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue-700 shrink-0" />
                    <span>Audience recruitment feasibility and timeline assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-blue-700 shrink-0" />
                    <span>Strict commercial confidentiality and mutual NDA adherence</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <Suspense fallback={null}>
                <ContactFormClient />
              </Suspense>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
