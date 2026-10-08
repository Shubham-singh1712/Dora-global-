import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteInquirySection } from "@/components/sections/QuoteInquirySection";
import {
  ArrowRight,
  Globe,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  LockKeyhole,
  FileText,
} from "lucide-react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "DORA Global Research | International Market Intelligence & Research",
  description:
    "Delivering primary research, qualitative moderation, and quantitative studies to guide confident business decisions across international markets.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DORA Global Research | Intelligence Without Borders",
    description:
      "Primary research, qualitative moderation, and quantitative measurement for multinational enterprises and advisory leads.",
    url: "/",
    siteName: "DORA Global Research",
  },
};

const SERVICE_ROWS = [
  {
    number: "01",
    title: "PRIMARY RESEARCH",
    description: "Direct access to the questions that matter most.",
    href: "/services/primary-research",
  },
  {
    number: "02",
    title: "QUALITATIVE RESEARCH",
    description: "Understand motivations, behaviours and perceptions.",
    href: "/services/qualitative-research",
  },
  {
    number: "03",
    title: "QUANTITATIVE RESEARCH",
    description: "Turn market signals into measurable insight.",
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
      {/* 1. HERO EXPERIENCE 2.0 */}
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
              We combine rigorous research methodologies, localized market understanding and disciplined analysis to help organizations understand people, markets and opportunities.
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
                Specialized market research solutions tailored to sector-specific dynamics and audience requirements.
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

      {/* 4. WHY DORA & QUALITY GOVERNANCE */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue-700">
                THE DORA STANDARD
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy-900">
                Disciplined Execution Across Markets
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                We combine direct in-market access with rigorous methodological controls to ensure every study delivers clear, defensible evidence.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-brand-navy-900 text-sm">Verified Respondent Panels</h4>
                    <p className="text-xs text-slate-600">Multi-step screening to validate buyer and decision-maker profiles.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-brand-navy-900 text-sm">ESOMAR Ethical Standards</h4>
                    <p className="text-xs text-slate-600">Strict adherence to international research governance and privacy rules.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <LockKeyhole className="w-5 h-5 text-brand-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-brand-navy-900 text-sm">Data Security &amp; Confidentiality</h4>
                    <p className="text-xs text-slate-600">Encrypted data processing pipelines safeguarding proprietary research.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#FAF8F5] p-8 sm:p-12 border border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-brand-navy-900">40+</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Global Hubs</div>
                  <p className="text-xs text-slate-600">Coverage across EMEA, Americas, and APAC.</p>
                </div>

                <div className="space-y-2">
                  <div className="text-3xl font-bold text-brand-navy-900">100%</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">First-Hand Data</div>
                  <p className="text-xs text-slate-600">Direct respondent sampling with zero broker reliance.</p>
                </div>

                <div className="space-y-2">
                  <div className="text-3xl font-bold text-brand-navy-900">Native</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Field Directors</div>
                  <p className="text-xs text-slate-600">In-country moderators capturing local context.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. GLOBAL REACH SECTION */}
      <section id="locations" className="py-20 lg:py-28 bg-brand-navy-950 text-white relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="blue" size="sm">
                Global Footprint
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Global Reach, Local Nuance
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                Our global operational desks coordinate multi-market research across key commercial regions without timezone delays.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">London &amp; Frankfurt</h4>
                    <p className="text-xs text-slate-400">EMEA Research &amp; Market Intelligence Hub</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">New York</h4>
                    <p className="text-xs text-slate-400">Americas Practice &amp; Corporate Advisory</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Singapore &amp; Tokyo</h4>
                    <p className="text-xs text-slate-400">Asia-Pacific Fieldwork &amp; Quantitative Units</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-brand-navy-900 border border-brand-navy-800 p-8 sm:p-10">
              <div className="flex items-center justify-between pb-6 border-b border-brand-navy-800 mb-6">
                <div>
                  <h3 className="text-base font-semibold text-white">In-Market Research Infrastructure</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Audited quality standards</p>
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
                    Audited cohort validation for B2B executives, consumers, and specialized sector participants.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <FileText className="w-4 h-4 text-brand-blue-400" />
                    Native Idiomatic Analysis
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Qualitative coding and synthesis conducted directly in source languages to preserve sentiment nuance.
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
