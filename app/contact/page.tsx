import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactFormClient } from "@/components/sections/ContactFormClient";
import { COMPANY_INFO } from "@/lib/constants";
import { Lock, Clock, Mail, Phone, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries",
  description:
    "Direct institutional practice desk for commissioning multi-market qualitative research, quantitative fieldwork, and accredited linguistic services.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact DORA Global Research | Enterprise Practice Desk",
    description:
      "Submit your methodological brief, language requirements, or tender documentation to our sector coordinators.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Direct Enterprise Practice Desk"
        title="Contact DORA Global Research"
        description="Submit your methodological brief, language requirements, or tender documentation to our sector coordinators."
      />

      <section className="py-16 sm:py-24 bg-brand-surface-subtle border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Practice Information & Guarantees */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700 block mb-2">
                  Institutional Consultation
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy-900 tracking-tight leading-tight">
                  Engage With an Assigned Practice Lead
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                  All enterprise inquiries are reviewed by our senior practice directors rather than sales intermediaries. You receive a direct evaluation of timeline, resource availability, and technical parameters.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-white border border-slate-200/90 rounded-lg shadow-subtle hover:border-slate-300 transition-all duration-200">
                  <div className="flex items-center gap-2 mb-2 text-brand-navy-900 font-semibold text-sm">
                    <Lock className="w-4 h-4 text-brand-blue-600" />
                    Institutional Confidentiality
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Prior to reviewing proprietary data rooms, patent briefs, or patient dossiers, our compliance office can execute a mutual bilateral NDA promptly.
                  </p>
                </div>

                <div className="p-5 bg-white border border-slate-200/90 rounded-lg shadow-subtle hover:border-slate-300 transition-all duration-200">
                  <div className="flex items-center gap-2 mb-2 text-brand-navy-900 font-semibold text-sm">
                    <Clock className="w-4 h-4 text-brand-blue-600" />
                    Methodological Feasibility Assessment
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We deliver transparent methodological feasibility, itemized cost estimates, and linguistic team accreditation profiles for every scoped engagement.
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
                    <Phone className="w-3.5 h-3.5 text-brand-blue-400" />
                    <span className="font-mono">{COMPANY_INFO.contacts.support}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-brand-blue-400" />
                    <span>Coverage Hubs: {COMPANY_INFO.contacts.headquarters}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactFormClient />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
