import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { AboutHeroVisual } from "@/components/sections/AboutHeroVisual";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import {
  Globe,
  Layers,
  Search,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  FileText,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | International Market Research & Intelligence",
  description:
    "Learn about DORA Global Research: our research philosophy, qualitative and quantitative methodologies, sector depth, and cross-market capabilities.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About DORA Global Research | Research Practice & Methodologies",
    description:
      "Delivering evidence-based market intelligence, qualitative context, and quantitative validation across international markets.",
    url: "/about",
  },
};

export default function AboutPage() {
  const researchPhilosophy = [
    {
      step: "01",
      title: "Rigorous by Design",
      description:
        "Every study starts with a clear research question. We build the right methodology, screen participants carefully, and structure data collection to produce reliable findings.",
      focus: "Research Rigor",
    },
    {
      step: "02",
      title: "Context Matters",
      description:
        "Consumer decisions are shaped by culture, market conditions, and everyday realities. We look beyond the numbers to understand what drives people's choices.",
      focus: "Local Understanding",
    },
    {
      step: "03",
      title: "From Findings to Action",
      description:
        "We turn interviews, survey results, and market evidence into clear insights that help businesses evaluate opportunities and make informed decisions.",
      focus: "Business Impact",
    },
    {
      step: "04",
      title: "Built Around Your Questions",
      description:
        "We work with clients from the initial brief to the final presentation, keeping the research focused on the questions their business needs to answer.",
      focus: "Client Partnership",
    },
  ];

  const approachSteps = [
    {
      step: "01",
      phase: "Define the Question",
      title: "Scoping & Hypothesis Framing",
      description:
        "Defining core business objectives, target audience profiles, key hypotheses, and the optimal methodological mix.",
      deliverable: "Scoping Matrix & Hypothesis Plan",
    },
    {
      step: "02",
      phase: "Design the Methodology",
      title: "Sample & Instrument Design",
      description:
        "Developing structured discussion guides or survey instruments with precise screening criteria and bias mitigation.",
      deliverable: "Validated Screener & Discussion Guide",
    },
    {
      step: "03",
      phase: "Gather Evidence",
      title: "Fieldwork & In-Market Execution",
      description:
        "Conducting native-language moderations, stakeholder interviews, or survey data collection across target territories.",
      deliverable: "In-Market Moderation & Verbatim Audio",
    },
    {
      step: "04",
      phase: "Interpret Findings",
      title: "Analysis & Strategic Briefing",
      description:
        "Synthesizing qualitative themes and quantitative cross-tabulations into clear executive briefings and strategic recommendations.",
      deliverable: "Executive Briefing & Strategic Report",
    },
  ];

  const corePractices = [
    {
      icon: Search,
      title: "Primary Research",
      tag: "Original Field Data",
      description:
        "Bespoke studies gathering original, first-hand data straight from verified target buyers, industry specialists, and commercial decision-makers.",
      deliverables: [
        "Target Stakeholder Identification",
        "Original Fieldwork Execution",
        "Empirical Validation",
      ],
    },
    {
      icon: Users,
      title: "Qualitative Research",
      tag: "In-Depth Context",
      description:
        "In-depth interviews (IDIs), focus group sessions, and exploratory studies designed to unpack attitudes, underlying motivations, and decision triggers.",
      deliverables: [
        "Executive 1-on-1 IDIs",
        "Cross-Market Focus Groups",
        "Contextual Behavior Mapping",
      ],
    },
    {
      icon: BarChart3,
      title: "Quantitative Research",
      tag: "Statistical Rigor",
      description:
        "Representative survey design, audience segmentation, market sizing models, and longitudinal tracking to validate market opportunities.",
      deliverables: [
        "Representative Sample Frameworks",
        "Cross-Tabulation Analysis",
        "Market Sizing Models",
      ],
    },
  ];

  return (
    <>
      {/* 1. Hero Section with Visual Anchor & Signature Curve */}
      <PageHeader
        badge="About Our Practice"
        title="About DORA Global Research"
        description="Delivering structured market intelligence, qualitative context, and quantitative research to guide strategic decision-making across complex markets."
        visual={<AboutHeroVisual />}
        showCurve={true}
      />

      {/* 2. Who We Are & What We Do (Refined Editorial Layout) */}
      <section className="pt-10 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 bg-white">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Narrative Editorial Presentation */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue-600" />
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700">
                  Who We Are
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-brand-navy-900 leading-tight">
                Research Designed for Clarity in Complex Markets
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                DORA Global Research is an international market research and market intelligence practice. We help organizations understand customer behavior, evaluate market opportunities, and make confident commercial decisions.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Through customized primary research, expert qualitative moderation, and robust quantitative measurement, we bridge the gap between high-level business questions and grounded, empirical evidence across international markets.
              </p>

              {/* Refined Editorial Quote Callout */}
              <blockquote className="my-6 pl-5 sm:pl-6 border-l-2 border-brand-blue-600 py-1 space-y-2">
                <p className="text-sm sm:text-base font-serif italic text-brand-navy-900 leading-relaxed">
                  &ldquo;Evidence-based decision-making requires both statistical rigor and in-market cultural context. We treat research as strategic infrastructure, not commoditized data collection.&rdquo;
                </p>
                <footer className="text-xs uppercase tracking-wider text-slate-500 font-semibold block">
                  DORA Practice Standard &bull; Grounded Intelligence
                </footer>
              </blockquote>
            </div>

            {/* Right Column: Practice Architecture Dossier Panel */}
            <div className="lg:col-span-5 rounded-xl border border-slate-200 overflow-hidden shadow-subtle bg-white">
              {/* Architectural Tab Header */}
              <div className="bg-brand-navy-900 text-white px-5 sm:px-6 py-3.5 flex items-center justify-between border-b border-brand-navy-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-blue-400" />
                  <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-slate-200">
                    Practice Architecture
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-blue-300">
                  Global Reach
                </span>
              </div>

              {/* Panel Content */}
              <div className="p-5 sm:p-6 space-y-5 bg-slate-50/60">
                <div>
                  <h3 className="text-base font-bold text-brand-navy-900">
                    Core Research Capabilities
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Structured research architecture across key international commercial zones.
                  </p>
                </div>

                <div className="space-y-3.5 text-xs text-slate-700">
                  <div className="p-3.5 rounded-lg bg-white border border-slate-200/90 space-y-1.5 shadow-xs">
                    <div className="flex items-center gap-2 text-brand-navy-900 font-bold">
                      <Globe className="w-4 h-4 text-brand-blue-600 shrink-0" />
                      <span>Cross-Market Coverage</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[11.5px] pl-6 font-normal">
                      Multi-market study design with localized language and cultural context across North America, Europe, APAC, and emerging territories.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white border border-slate-200/90 space-y-1.5 shadow-xs">
                    <div className="flex items-center gap-2 text-brand-navy-900 font-bold">
                      <Layers className="w-4 h-4 text-brand-blue-600 shrink-0" />
                      <span>Sector-Focused Depth</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[11.5px] pl-6 font-normal">
                      Tailored research frameworks for automotive, energy, finance, consumer goods, technology, and healthcare.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white border border-slate-200/90 space-y-1.5 shadow-xs">
                    <div className="flex items-center gap-2 text-brand-navy-900 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue-600 shrink-0" />
                      <span>Empirical Rigor</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[11.5px] pl-6 font-normal">
                      Structured screening, verified respondent recruitment, audit-ready dataframes, and clear analytical reporting.
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 space-y-3">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    fullWidth
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Discuss a Project
                  </Button>
                  <div className="flex items-center justify-between text-xs pt-1 px-1 text-slate-500">
                    <Link
                      href="/locations"
                      className="hover:text-brand-blue-700 font-medium text-slate-600 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Global Locations</span>
                      <span>&rarr;</span>
                    </Link>
                    <Link
                      href="/careers"
                      className="hover:text-brand-blue-700 font-medium text-slate-600 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Careers at DORA</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Visual Research Approach (Connected Sequence Flow) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-surface-subtle">
        <Container>
          <div className="max-w-3xl mb-12 sm:mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700 block mb-2">
              Structured Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-navy-900 tracking-tight">
              How We Approach Research Engagements
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              From initial scoping to final deliverable, our structured methodology ensures disciplined execution, transparent milestones, and defensible results.
            </p>
          </div>

          {/* Desktop Horizontal Process Sequence */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-6 relative">
              {approachSteps.map((step, idx) => (
                <div key={idx} className="relative group">
                  {/* Step Card with Top Connector Node */}
                  <div className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-subtle h-full flex flex-col justify-between hover:border-brand-blue-300 transition-all duration-200">
                    <div className="space-y-3.5">
                      {/* Top Step Header with Connecting Arrow */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-brand-blue-700 bg-brand-blue-50 border border-brand-blue-200/60 px-2.5 py-1 rounded">
                          Phase {step.step}
                        </span>
                        {idx < approachSteps.length - 1 ? (
                          <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-brand-blue-500 transition-colors" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        )}
                      </div>

                      {/* Phase Category Tag */}
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-brand-navy-900">
                        {step.phase}
                      </span>

                      {/* Step Title */}
                      <h3 className="text-base font-bold text-brand-navy-900 leading-snug">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>

                    {/* Deliverable Badge */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2 text-[11.5px] text-slate-600">
                      <FileText className="w-3.5 h-3.5 text-brand-blue-600 shrink-0" />
                      <span className="font-medium text-slate-700">{step.deliverable}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet Vertical Process Sequence */}
          <div className="lg:hidden relative pl-6 border-l-2 border-brand-blue-200 ml-3 space-y-6">
            {approachSteps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Milestone Node on the Track */}
                <div className="absolute -left-[35px] top-4 w-7 h-7 rounded-full bg-white border-2 border-brand-blue-600 text-brand-blue-700 font-mono text-xs font-bold flex items-center justify-center">
                  {step.step}
                </div>

                <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-subtle space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-brand-blue-700">
                      Phase {step.step} &bull; {step.phase}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-brand-navy-900">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>

                  <div className="pt-2.5 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
                    <FileText className="w-3.5 h-3.5 text-brand-blue-600 shrink-0" />
                    <span className="font-medium text-slate-700">{step.deliverable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Core Practices (Primary Research Methodologies) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700 block mb-2">
              Our Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy-900 tracking-tight">
              Primary Research Methodologies
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We design custom research programs around your specific business questions rather than forcing one-size-fits-all methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {corePractices.map((practice, idx) => {
              const Icon = practice.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-7 shadow-subtle hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center text-brand-blue-700">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold px-2 py-0.5 bg-slate-50 border border-slate-100 rounded">
                        {practice.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-brand-navy-900 mb-2">
                        {practice.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {practice.description}
                      </p>
                    </div>

                    {/* Deliverables List */}
                    <div className="pt-3.5 border-t border-slate-100 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-semibold">
                        Key Deliverables
                      </span>
                      {practice.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue-600 shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. Research Philosophy (Refined Principles) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-surface-subtle">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700 block mb-2">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy-900 tracking-tight">
              Our Research Philosophy
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Our work is guided by four core commitments: asking the right questions, respecting local context, delivering useful insights, and working closely with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {researchPhilosophy.map((phil, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-white border border-slate-200/90 shadow-subtle space-y-3 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-brand-blue-700 px-2.5 py-1 bg-brand-blue-50 border border-brand-blue-200/50 rounded">
                    Principle {phil.step}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 font-medium">
                    {phil.focus}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-brand-navy-900">
                  {phil.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {phil.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Practice Leadership */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container className="max-w-6xl">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700 block mb-2">
              Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy-900 tracking-tight">
              Practice Leadership
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Executive direction grounded in research rigor, methodological integrity, and defensible intelligence.
            </p>
          </div>

          <div className="max-w-2xl bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Neutral Executive Visual */}
            <div className="w-16 h-16 rounded-xl bg-brand-navy-950 text-white font-bold text-2xl flex items-center justify-center shrink-0 tracking-tight shadow-card border border-brand-navy-800">
              V
            </div>

            <div className="space-y-1.5 flex-1">
              <div className="inline-flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-brand-blue-700 font-bold bg-brand-blue-50 border border-brand-blue-200/60 px-2 py-0.5 rounded">
                  Executive Practice Lead
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  Chandigarh, India
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-brand-navy-900 tracking-tight">
                Vishal — Founder &amp; CEO
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
                Directs practice strategy and methodology standards across primary, qualitative, and quantitative research engagements, ensuring evidence-based clarity for enterprise client decisions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Page CTA */}
      <CTASection />
    </>
  );
}
