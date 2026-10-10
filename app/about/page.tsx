import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import {
  Compass,
  Eye,
  CheckCircle2,
  Globe,
  Layers,
  Search,
  Users,
  BarChart3,
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
      title: "Methodological Integrity",
      description:
        "Every study is built upon sound research architecture—from robust questionnaire design and screening criteria to structured moderation and statistically valid sample frames.",
    },
    {
      title: "Contextual Depth",
      description:
        "We believe market intelligence requires understanding the cultural, commercial, and operational nuance behind consumer and stakeholder decisions.",
    },
    {
      title: "Actionable Synthesis",
      description:
        "We focus on turning raw qualitative dialogue and complex survey datasets into clear, defensible executive insights that directly inform strategic decisions.",
    },
    {
      title: "Collaborative Engagement",
      description:
        "We work closely with client stakeholders from initial scoping through final presentation, ensuring research parameters precisely align with core business questions.",
    },
  ];

  const approachSteps = [
    {
      step: "01",
      title: "Scoping & Hypothesis Framing",
      description:
        "Defining core business objectives, target audience profiles, key hypotheses, and the optimal methodological mix.",
    },
    {
      step: "02",
      title: "Sample & Instrument Design",
      description:
        "Developing structured discussion guides or survey instruments with precise screening criteria and bias mitigation.",
    },
    {
      step: "03",
      title: "Fieldwork & In-Market Execution",
      description:
        "Conducting native-language moderations, stakeholder interviews, or survey data collection across target territories.",
    },
    {
      step: "04",
      title: "Analysis & Strategic Briefing",
      description:
        "Synthesizing qualitative themes and quantitative cross-tabulations into clear executive briefings and strategic recommendations.",
    },
  ];

  const corePractices = [
    {
      icon: Search,
      title: "Primary Research",
      description:
        "Bespoke studies gathering original, first-hand data straight from verified target buyers, industry specialists, and commercial decision-makers.",
    },
    {
      icon: Users,
      title: "Qualitative Research",
      description:
        "In-depth interviews (IDIs), focus group sessions, and exploratory studies designed to unpack attitudes, underlying motivations, and decision triggers.",
    },
    {
      icon: BarChart3,
      title: "Quantitative Research",
      description:
        "Statistically robust survey design, audience segmentation, market sizing models, and longitudinal tracking to validate market opportunities.",
    },
  ];

  return (
    <>
      <PageHeader
        badge="About Our Practice"
        title="About DORA Global Research"
        description="Delivering structured market intelligence, qualitative context, and quantitative research to guide strategic decision-making across complex markets."
      />

      {/* 1. Who We Are & What We Do */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                DORA Global Research is an international market research and market intelligence practice. We help organizations understand customer behavior, evaluate market opportunities, and make confident commercial decisions.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Through customized primary research, expert qualitative moderation, and robust quantitative measurement, we bridge the gap between high-level business questions and grounded, empirical evidence across international markets.
              </p>
            </div>

            <div className="lg:col-span-5 bg-brand-surface-subtle p-8 rounded-lg border border-slate-200 space-y-6">
              <h3 className="text-base font-semibold text-brand-navy-900 pb-3 border-b border-slate-200">
                Core Research Capabilities
              </h3>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-brand-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-navy-900">Cross-Market Coverage</strong>
                    Multi-market study design with localized language and cultural context.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Layers className="w-4 h-4 text-brand-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-navy-900">Sector-Focused Depth</strong>
                    Tailored research frameworks for automotive, energy, finance, food & beverage, transportation, and media.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-navy-900">Empirical Rigor</strong>
                    Structured screening, verified respondent recruitment, and clear analytical reporting.
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 space-y-2.5">
                <Button href="/contact" variant="primary" size="sm" fullWidth>
                  Discuss a Project
                </Button>
                <div className="flex items-center justify-between text-xs pt-1 px-1 text-slate-500">
                  <Link
                    href="/locations"
                    className="hover:text-brand-blue-700 font-medium text-slate-600 transition-colors"
                  >
                    Global Locations &rarr;
                  </Link>
                  <Link
                    href="/careers"
                    className="hover:text-brand-blue-700 font-medium text-slate-600 transition-colors"
                  >
                    Careers at DORA &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Core Practices */}
      <section className="py-16 sm:py-24 bg-brand-surface-subtle border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700 block mb-2">
              Our Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy-900 tracking-tight">
              Primary Research Methodologies
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We design custom research programs around your specific business questions rather than forcing one-size-fits-all methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corePractices.map((practice, idx) => {
              const Icon = practice.icon;
              return (
                <Card
                  key={idx}
                  variant="default"
                  padding="lg"
                  className="bg-white border-slate-200/90 shadow-subtle hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-brand-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-navy-900 mb-2">
                      {practice.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {practice.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Research Philosophy */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700 block mb-2">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy-900 tracking-tight">
              Our Research Philosophy
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Our work is guided by fundamental commitments to quality, analytical clarity, and actionable business relevance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {researchPhilosophy.map((phil, idx) => (
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
                    {phil.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {phil.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. How We Approach Research */}
      <section className="py-16 sm:py-24 bg-brand-surface-subtle border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700 block mb-2">
              Structured Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy-900 tracking-tight">
              How We Approach Research Engagements
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              From initial scoping to final deliverable, our structured methodology ensures seamless execution, transparent milestones, and defensible results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-white border border-slate-200/90 shadow-subtle space-y-3"
              >
                <span className="font-mono text-xs font-bold text-brand-blue-700 px-2.5 py-1 bg-brand-blue-50 border border-brand-blue-200/50 rounded inline-block">
                  Step {step.step}
                </span>
                <h4 className="text-base font-semibold text-brand-navy-900">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
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
