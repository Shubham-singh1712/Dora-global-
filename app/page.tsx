import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteInquirySection } from "@/components/sections/QuoteInquirySection";
import {
  ArrowRight,
  Globe,
  Compass,
  CheckCircle2,
  Layers,
  FileText,
  Search,
  Users,
  BarChart3,
} from "lucide-react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "DORA Global Research | International Market Research & Intelligence",
  description:
    "Delivering primary research, qualitative moderation, and quantitative studies to guide confident business decisions across international markets.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DORA Global Research | Intelligence Without Borders",
    description:
      "Primary research, qualitative moderation, and quantitative measurement for organizations navigating complex markets.",
    url: "/",
    siteName: "DORA Global Research",
  },
};

const SERVICE_ROWS = [
  {
    number: "01",
    title: "PRIMARY RESEARCH",
    description: "Original data collection gathered directly from target stakeholders and buyers.",
    href: "/services/primary-research",
  },
  {
    number: "02",
    title: "QUALITATIVE RESEARCH",
    description: "Understand motivations, attitudes, and decision drivers through expert moderation.",
    href: "/services/qualitative-research",
  },
  {
    number: "03",
    title: "QUANTITATIVE RESEARCH",
    description: "Statistically robust measurement, audience segmentation, and market sizing.",
    href: "/services/quantitative-research",
  },
];

const INDUSTRY_LIST = [
  {
    number: "01",
    title: "AUTOMOTIVES",
    description: "EV adoption, buyer behavior, and mobility market intelligence.",
    href: "/industries/automotives",
  },
  {
    number: "02",
    title: "ENERGY & UTILITIES",
    description: "Ratepayer sentiment, renewable energy, and grid transition.",
    href: "/industries/energy-utilities",
  },
  {
    number: "03",
    title: "BANKING & FINANCE",
    description: "Financial product adoption, digital banking CX, and investor trust.",
    href: "/industries/banking-finance",
  },
  {
    number: "04",
    title: "FOOD & BEVERAGE",
    description: "CPG taste testing, dietary trends, and package design impact.",
    href: "/industries/food-beverage",
  },
  {
    number: "05",
    title: "TRANSPORTATION",
    description: "Passenger travel habits, ticketing apps, and freight logistics.",
    href: "/industries/transportation",
  },
  {
    number: "06",
    title: "MEDIA & ENTERTAINMENT",
    description: "Audience streaming habits, gaming engagement, and media trends.",
    href: "/industries/media-entertainment",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO EXPERIENCE */}
      <HeroSection />

      {/* 2. WHAT WE DO (EDITORIAL SERVICE ROWS) */}
      <section id="what-we-do" className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue-700">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-navy-900 leading-tight">
              Insight begins with the right question.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We combine structured methodologies, localized market understanding, and disciplined analysis to help organizations understand audiences, validate hypotheses, and navigate opportunities.
            </p>
          </div>

          {/* Editorial Service Rows */}
          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {SERVICE_ROWS.map((row) => (
              <Link
                key={row.number}
                href={row.href}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-8 px-4 sm:px-6 hover:bg-[#FAF8F5] transition-colors duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
                  <span className="text-sm font-mono text-slate-400 group-hover:text-brand-blue-700 font-bold transition-colors">
                    {row.number}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-navy-900 group-hover:text-brand-blue-700 transition-colors tracking-tight">
                      {row.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 font-normal">
                      {row.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 sm:mt-0 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy-900 group-hover:text-brand-blue-700 transition-colors">
                  <span>Explore Practice</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. RESEARCH ACROSS INDUSTRIES (EDITORIAL INDUSTRY LIST) */}
      <section id="industries" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-slate-200">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue-700">
                SECTOR DEPTH
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-navy-900">
                RESEARCH ACROSS INDUSTRIES
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Specialized market research frameworks tailored to sector-specific dynamics and audience requirements.
              </p>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brand-navy-900 hover:text-brand-blue-700 transition-colors shrink-0"
            >
              <span>View All Sectors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Interactive Editorial Industry List */}
          <div className="divide-y divide-slate-300/70 border-t border-b border-slate-300/70">
            {INDUSTRY_LIST.map((ind) => (
              <Link
                key={ind.number}
                href={ind.href}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 px-4 sm:px-6 hover:bg-white transition-colors duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
                  <span className="text-xs font-mono text-slate-400 group-hover:text-brand-blue-700 font-semibold transition-colors">
                    {ind.number}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-brand-navy-900 group-hover:text-brand-blue-700 transition-colors tracking-tight">
                      {ind.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      {ind.description}
                    </p>
                  </div>
                </div>

                <div className="mt-3 sm:mt-0 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy-900 group-hover:text-brand-blue-700 transition-colors">
                  <span>Explore Sector</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. METHODOLOGICAL RIGOR & STANDARDS */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue-700">
                RESEARCH RIGOR
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy-900">
                Disciplined Methodologies Built for Defensible Decisions
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                We design custom research programs around your specific business questions, applying structured screening, localized moderation, and transparent analytical controls.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-brand-navy-900 text-sm">Targeted Sample Screening</h4>
                    <p className="text-xs text-slate-600">Multi-step qualification to reach relevant decision-makers and verified consumer profiles.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-brand-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-brand-navy-900 text-sm">Methodological Integrity</h4>
                    <p className="text-xs text-slate-600">Structured interview guides, survey instruments, and analytical frameworks mitigating bias.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Layers className="w-5 h-5 text-brand-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-brand-navy-900 text-sm">Cross-Market Alignment</h4>
                    <p className="text-xs text-slate-600">Coordinated fieldwork protocols ensuring comparable findings across regional markets.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#FAF8F5] p-8 sm:p-10 border border-slate-200 space-y-6">
              <h3 className="text-base font-bold text-brand-navy-900 pb-3 border-b border-slate-200">
                Our Research Approach
              </h3>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <Search className="w-4 h-4 text-brand-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-navy-900 text-sm">Custom Study Architecture</strong>
                    Every project is designed around your unique hypotheses and commercial objectives.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-brand-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-navy-900 text-sm">Localized Moderation</strong>
                    In-depth discussions conducted with native cultural context and idiom understanding.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BarChart3 className="w-4 h-4 text-brand-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-brand-navy-900 text-sm">Actionable Executive Synthesis</strong>
                    Distilling complex qualitative narratives and survey data into clear strategic takeaways.
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <Button href="/services" variant="primary" size="sm" fullWidth>
                  Explore Methodologies
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. GLOBAL RESEARCH COVERAGE */}
      <section id="locations" className="py-20 lg:py-28 bg-brand-navy-950 text-white relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="blue" size="sm">
                Cross-Market Capability
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Global Research Coverage
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                Coordinated qualitative and quantitative execution across major international regions with localized language and cultural understanding.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-brand-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Americas</h4>
                    <p className="text-xs text-slate-400">North American &amp; Latin American consumer and B2B markets</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-brand-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Europe, Middle East &amp; Africa</h4>
                    <p className="text-xs text-slate-400">EMEA commercial jurisdictions and diverse market environments</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-brand-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Asia-Pacific</h4>
                    <p className="text-xs text-slate-400">APAC consumer trends, industrial sectors, and emerging markets</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-brand-navy-900 border border-brand-navy-800 p-8 sm:p-10">
              <div className="flex items-center justify-between pb-6 border-b border-brand-navy-800 mb-6">
                <div>
                  <h3 className="text-base font-semibold text-white">Cross-Border Research Capability</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Structured multi-market execution</p>
                </div>
                <Globe className="w-6 h-6 text-brand-blue-400" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-300">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue-400" />
                    Targeted Sample Recruitment
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Qualification protocols tailored to reach verified decision-makers, consumers, and specialized sector participants.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <FileText className="w-4 h-4 text-brand-blue-400" />
                    Localized Language Context
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Qualitative moderation and survey analysis conducted in native idioms to preserve nuanced sentiment and intent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. CTA SECTION */}
      <CTASection />

      {/* 7. QUOTE/ENQUIRY SECTION */}
      <QuoteInquirySection />
    </>
  );
}
