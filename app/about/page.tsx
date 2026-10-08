import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import {
  Compass,
  Eye,
  Shield,
  Layers,
  CheckCircle2,
  ArrowRight,
  Globe,
  FileCheck,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & Corporate Governance",
  description:
    "Corporate profile, mission, vision, values, and rigorous methodology standards of DORA Global Research.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About DORA Global Research | Institutional Profile & Governance",
    description:
      "Bridging cross-border complexity with linguistic authority and verified field intelligence for multinational enterprises.",
    url: "/about",
  },
};

export default function AboutPage() {
  const corporateValues = [
    {
      title: "Linguistic & Methodological Rigor",
      description:
        "We believe quality begins with accredited subject-matter expertise rather than automated shortcuts. Every translated clause and research finding is subjected to multi-tiered review.",
    },
    {
      title: "Uncompromising Confidentiality",
      description:
        "Operating with sensitive clinical trials, litigation discovery, and pre-deal intelligence requires institutional-grade data privacy, non-disclosure protocols, and secure storage.",
    },
    {
      title: "Cultural & Idiomatic Precision",
      description:
        "Language cannot be separated from cultural nuance. We employ native in-market linguists to preserve intent, emotional nuance, and legal certainty.",
    },
    {
      title: "Operational Transparency",
      description:
        "Clear scoping, transparent delivery milestones, verified audit trails, and accountable project managers on every engagement.",
    },
  ];

  const whyChoosePoints = [
    {
      title: "Native In-Market Linguistic Network",
      description:
        "Our coordinators deploy native speakers and certified interpreters who live and work within the target jurisdictions, ensuring local colloquial accuracy.",
    },
    {
      title: "Subject-Matter Specialization",
      description:
        "Linguists are matched specifically to their domain—medical doctors for pharmacological documents, patent attorneys for legal briefs, and quantitative analysts for survey coding.",
    },
    {
      title: "Agile Project Coordination",
      description:
        "Dedicated project managers orchestrate complex multilingual timelines, emergency court interpretation requests, and continuous software localization pipelines.",
    },
    {
      title: "Secure Data Workflows",
      description:
        "Institutional protocols ensure complete data segregation, encrypted file handling, and mutual non-disclosure agreements before project commencement.",
    },
  ];

  return (
    <>
      <PageHeader
        badge="Corporate Profile"
        title="About DORA Global Research"
        description="Delivering international field intelligence, cross-border research, and specialized multilingual solutions to global organizations."
      />

      {/* Company Introduction Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue-600" />
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700">
                  Institutional Background
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-brand-navy-900 leading-tight">
                Bridging Cross-Border Complexity with Linguistic Authority
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                DORA Global Research serves multinational enterprises, law practices, healthcare institutions, and advisory firms that require verified cross-border field intelligence and high-stakes language services.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                From high-consequence regulatory filings to simultaneous diplomatic interpretation, we combine localized fieldwork capability with centralized quality governance. We believe clear, accurate international communication is a prerequisite for sound commercial decision-making.
              </p>

              {/* Editable Facts & Parameters Notice */}
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <span className="font-semibold text-slate-800 block mb-1">
                  Corporate Governance Note
                </span>
                Corporate registration details, formal operational histories, and audited disclosures are available directly upon formal enterprise inquiry.
              </div>
            </div>

            <div className="lg:col-span-5 bg-brand-surface-subtle p-8 rounded-lg border border-slate-200 space-y-6">
              <h3 className="text-base font-semibold text-brand-navy-900 pb-3 border-b border-slate-200">
                Operational Tenets
              </h3>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-brand-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-navy-900">Multilateral Reach</strong>
                    Coordinating linguistic resources across major international timezones.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileCheck className="w-4 h-4 text-brand-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-navy-900">Dual-Pass Verification</strong>
                    Translation workflows structured with primary translation and independent subject-matter review.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lock className="w-4 h-4 text-brand-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-navy-900">Institutional Confidentiality</strong>
                    Protected under mutual NDAs, secure transfer pipelines, and access-controlled repositories.
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <Button href="/contact" variant="primary" size="sm" fullWidth>
                  Consult Our Advisory Team
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-24 bg-brand-surface-subtle border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <Card variant="default" padding="lg" className="border-slate-200 bg-white shadow-subtle">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shadow-subtle">
                  <Compass className="w-5 h-5 text-brand-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy-900">Our Mission</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                To provide multinational enterprises and advisory practices with uncompromising linguistic precision and verified ground-level field intelligence, eliminating the risks of cross-border miscommunication in high-stakes environments.
              </p>
            </Card>

            {/* Vision */}
            <Card variant="default" padding="lg" className="border-slate-200 bg-white shadow-subtle">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shadow-subtle">
                  <Eye className="w-5 h-5 text-brand-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy-900">Our Vision</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                To serve as the trusted international language solutions and research partner for global institutions, setting the benchmark for domain rigor, technological resilience, and verified methodological integrity.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Corporate Values */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700 block mb-2">
              Foundational Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy-900 tracking-tight">
              Values That Drive Our Delivery
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every deliverable from DORA Global Research is grounded in four non-negotiable operational principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {corporateValues.map((value, idx) => (
              <Card
                key={idx}
                variant="flat"
                padding="md"
                className="bg-slate-50/70 border-slate-200/80"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs text-brand-blue-700 font-bold">
                    0{idx + 1}.
                  </span>
                  <h3 className="text-base font-semibold text-brand-navy-900">
                    {value.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why DORA Section */}
      <section className="py-16 sm:py-24 bg-brand-surface-subtle border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700 block mb-2">
              Competitive Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy-900 tracking-tight">
              Why Global Enterprises Partner With DORA
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              In an era of automated translations and generic agencies, we differentiate through verifiable human domain competence and structured coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChoosePoints.map((point, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-subtle transition-all duration-200 flex items-start gap-4"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-semibold text-brand-navy-900 mb-1.5">
                    {point.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Page CTA */}
      <CTASection />
    </>
  );
}
