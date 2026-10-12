import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { LANGUAGE_SERVICES } from "@/lib/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { Badge } from "@/components/ui/Badge";
import {
  Languages,
  Users2,
  Headphones,
  FileText,
  Binary,
  Globe,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Compass,
  FileCheck2,
  Activity,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Language Solutions for Market Research | DORA Global Research",
  description:
    "Comprehensive linguistic and cultural solutions built specifically for international market research—including translation, on-site and remote interpretation, transcription, in-language coding, and survey localization.",
  alternates: { canonical: "/services/language-solutions" },
  openGraph: {
    title: "Language Solutions for Market Research | DORA Global Research",
    description:
      "Linguistic solutions engineered specifically for cross-border market intelligence: surveys, focus groups, IDIs, verbatims, and multi-country research studies.",
    url: "/services/language-solutions",
  },
};

const LIFECYCLE_STAGES = [
  {
    phase: "Phase 01",
    title: "Study Design & Instrument Preparation",
    description:
      "Ensuring survey questionnaires, screeners, stimulus concepts, and qualitative discussion guides are culturally calibrated and methodologically equivalent across target markets.",
    services: [
      {
        name: "Survey Translation & Localization",
        href: "/services/survey-localization",
        detail: "Scale calibration, cognitive review & overlay QA",
      },
      {
        name: "Translation for Market Research",
        href: "/services/translation",
        detail: "Discussion guides, stimulus boards & screeners",
      },
    ],
  },
  {
    phase: "Phase 02",
    title: "Fieldwork & Qualitative Moderation",
    description:
      "Enabling international client teams and research directors to observe and evaluate in-person and digital qualitative fieldwork live without language barriers.",
    services: [
      {
        name: "On-Site Interpretation",
        href: "/services/on-site-interpretation",
        detail: "Facility focus groups, backroom headsets & CLT testing",
      },
      {
        name: "Remote Interpretation",
        href: "/services/remote-interpretation",
        detail: "Online focus groups, virtual IDIs & digital portals",
      },
    ],
  },
  {
    phase: "Phase 03",
    title: "Data Processing, Coding & Synthesis",
    description:
      "Transforming recorded respondent speech into structured, searchable transcripts and coding open-ended survey narratives directly in native idioms.",
    services: [
      {
        name: "Research Transcription",
        href: "/services/transcription",
        detail: "Time-stamped, speaker-tagged & dual-language transcripts",
      },
      {
        name: "In-Language Coding",
        href: "/services/in-language-coding",
        detail: "Native verbatim categorization & unified codeframes",
      },
    ],
  },
];

export default function LanguageSolutionsPage() {
  return (
    <>
      <PageHeader
        badge="Linguistic & Cultural Solutions"
        title="Language Solutions Built for Global Market Research"
        description="International market research demands more than standard corporate translation. We deliver specialized linguistic solutions engineered around research methodology, survey measurement validity, and qualitative moderation."
      />

      {/* Overview Grid */}
      <section className="pt-8 sm:pt-9 lg:pt-10 pb-16 lg:pb-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue-700">
              Specialized Research Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy-900">
              Six Tailored Services for International Fieldwork
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Explore our core language capabilities designed to support every phase of the cross-border research lifecycle—from questionnaire adaptation to verbatim coding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LANGUAGE_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Lifecycle Integration Section */}
      <section className="py-16 lg:py-24 bg-brand-surface-subtle">
        <Container>
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue-700">
              WORKFLOW INTEGRATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy-900">
              End-to-End Alignment Across the Research Lifecycle
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Language solutions deliver the greatest methodological value when integrated smoothly across each consecutive stage of your study.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {LIFECYCLE_STAGES.map((stage) => (
              <div
                key={stage.phase}
                className="bg-white p-8 rounded-xl border border-slate-200/90 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-brand-blue-700 uppercase tracking-widest">
                    {stage.phase}
                  </span>
                  <h3 className="text-xl font-bold text-brand-navy-900 mt-2 mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 space-y-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                    Core Solutions
                  </span>
                  {stage.services.map((svc) => (
                    <Link
                      key={svc.name}
                      href={svc.href}
                      className="group block p-3 rounded-lg bg-slate-50 hover:bg-brand-blue-50/70 border border-slate-200/70 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-brand-navy-900 group-hover:text-brand-blue-700">
                        <span>{svc.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        {svc.detail}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Methodological Value & Safeguards */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue-700">
                METHODOLOGICAL INTEGRITY
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy-900">
                Why Linguistic Precision Matters in Market Research
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Generic translation or uncalibrated machine tools frequently distort survey logic, misrepresent cultural nuances, and introduce measurement error that compromises cross-country statistical equivalence.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-brand-navy-900 text-sm">
                      Cross-Market Scale Equivalence
                    </h4>
                    <p className="text-xs text-slate-600">
                      Rating scales, numerical anchors, and Likert points are calibrated to prevent regional acquiescence or severity bias from distorting benchmark comparisons.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-brand-navy-900 text-sm">
                      Authentic Respondent Rapport
                    </h4>
                    <p className="text-xs text-slate-600">
                      Discussion guides and moderation phrasing crafted in natural colloquial idioms encourage spontaneous, uninhibited qualitative feedback.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-brand-navy-900 text-sm">
                      Distortion-Free Verbatim Analysis
                    </h4>
                    <p className="text-xs text-slate-600">
                      Coding open-ended responses in the source language preserves humor, irony, and cultural metaphors that are inevitably flattened by direct translation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-brand-navy-950 text-white p-8 sm:p-10 rounded-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-brand-navy-800">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-blue-400">
                    QUALITY GOVERNANCE
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Research-Focused Quality Standards
                  </h3>
                </div>
                <ShieldCheck className="w-7 h-7 text-brand-blue-400" />
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="p-4 rounded-lg bg-brand-navy-900/90 border border-brand-navy-800">
                  <strong className="block text-white text-sm mb-1">
                    Forward & Back-Translation Audits
                  </strong>
                  Dual-blind translation workflows to systematically catch ambiguity, semantic drift, and awkward phrasing before questionnaire launch.
                </div>

                <div className="p-4 rounded-lg bg-brand-navy-900/90 border border-brand-navy-800">
                  <strong className="block text-white text-sm mb-1">
                    In-Tool Survey Platform Overlay QA
                  </strong>
                  Testing translated question text directly inside survey engines to verify text wrapping, button scaling, and conditional logic piping.
                </div>

                <div className="p-4 rounded-lg bg-brand-navy-900/90 border border-brand-navy-800">
                  <strong className="block text-white text-sm mb-1">
                    Confidentiality & Data Protection
                  </strong>
                  Strict non-disclosure agreements, encrypted transmission channels, and compliance with international respondent privacy standards.
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact?service=Language%20Solutions"
                  className="inline-flex items-center justify-center w-full py-3 px-4 rounded-lg bg-brand-blue-600 hover:bg-brand-blue-500 text-white font-semibold text-sm transition-colors text-center"
                >
                  Request a Language Solutions Consultation
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ServiceCTA
        title="Discuss Language Solutions for Your Next Global Study"
        description="Partner with our research leads to integrate translation, interpretation, transcription, or in-language coding seamlessly into your upcoming international fieldwork."
        buttonText="Discuss Your Project"
        buttonHref="/contact?service=Language%20Solutions"
      />
    </>
  );
}
