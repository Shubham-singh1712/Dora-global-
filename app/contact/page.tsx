import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactFormClient } from "@/components/sections/ContactFormClient";
import { COMPANY_INFO } from "@/lib/constants";
import { FileSearch, Clock, Mail, Globe, Layers } from "lucide-react";

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
  return (
    <>
      <PageHeader
        badge="Research Practice Desk"
        title="Contact DORA Global Research"
        description="Connect directly with our research leads to discuss your upcoming studies, sample parameters, and target markets."
      />

      <section className="py-16 sm:py-24 bg-brand-surface-subtle border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Practice Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700 block mb-2">
                  Project Scoping & Consultation
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy-900 tracking-tight leading-tight">
                  Discuss Your Research Requirements
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                  Every inquiry is reviewed directly by our research team. We work with you to evaluate methodology fit, sample feasibility, and project timelines tailored to your strategic questions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-white border border-slate-200/90 rounded-lg shadow-subtle hover:border-slate-300 transition-all duration-200">
                  <div className="flex items-center gap-2 mb-2 text-brand-navy-900 font-semibold text-sm">
                    <FileSearch className="w-4 h-4 text-brand-blue-600" />
                    Structured Methodology Review
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We evaluate your research objectives to recommend the most suitable qualitative, quantitative, or blended primary research approach.
                  </p>
                </div>

                <div className="p-5 bg-white border border-slate-200/90 rounded-lg shadow-subtle hover:border-slate-300 transition-all duration-200">
                  <div className="flex items-center gap-2 mb-2 text-brand-navy-900 font-semibold text-sm">
                    <Clock className="w-4 h-4 text-brand-blue-600" />
                    Responsive Scoping & Feasibility
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Receive clear feasibility assessments, audience recruitment parameters, and realistic fieldwork delivery schedules.
                  </p>
                </div>

                <div className="p-5 bg-white border border-slate-200/90 rounded-lg shadow-subtle hover:border-slate-300 transition-all duration-200">
                  <div className="flex items-center gap-2 mb-2 text-brand-navy-900 font-semibold text-sm">
                    <Layers className="w-4 h-4 text-brand-blue-600" />
                    Cross-Market Coordination
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Capability to execute coordinated studies across key international regions with localized language and cultural context.
                  </p>
                </div>
              </div>

              {/* Direct Communication Points */}
              <div className="p-5 bg-brand-navy-950 text-white rounded-lg shadow-elevated space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Direct Inquiries
                </h3>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-brand-blue-400" />
                    <a
                      href={`mailto:${COMPANY_INFO.contacts.email}`}
                      className="hover:underline font-mono"
                    >
                      {COMPANY_INFO.contacts.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-brand-blue-400" />
                    <span>{COMPANY_INFO.contacts.headquarters}</span>
                  </div>
                </div>
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
