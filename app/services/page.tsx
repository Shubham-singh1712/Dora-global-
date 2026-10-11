import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { CORE_RESEARCH_SERVICES, LANGUAGE_SERVICES } from "@/lib/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ArrowRight, Compass, Languages } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities | DORA Global Research",
  description:
    "Explore our core market research methodologies and specialized language solutions—primary research, qualitative moderation, quantitative surveys, translation, interpretation, and verbatim coding.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services & Capabilities | DORA Global Research",
    description:
      "Primary research, qualitative moderation, quantitative surveys, and language solutions for global market research.",
    url: "/services",
  },
};

export default function ServicesOverviewPage() {
  return (
    <>
      <PageHeader
        badge="Core Practice Areas & Language Solutions"
        title="Research That Turns Questions Into Direction"
        description="DORA Global Research delivers end-to-end primary market research, qualitative depth, quantitative measurement, and specialized language solutions to guide strategic decisions across international markets."
      />

      {/* SECTION A: MARKET RESEARCH */}
      <section id="market-research" className="pt-8 sm:pt-9 lg:pt-10 pb-16 lg:pb-24 bg-white border-b border-slate-200">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue-700">
                <Compass className="w-4 h-4" />
                <span>PRACTICE AREA A &bull; MARKET RESEARCH</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy-900">
                Core Research Methodologies
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Our primary, qualitative, and quantitative practices capture authentic stakeholder signals, unearth behavioral context, and measure market trends with statistical confidence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_RESEARCH_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION B: LANGUAGE SOLUTIONS FOR RESEARCH */}
      <section id="language-solutions" className="py-16 lg:py-24 bg-brand-surface-subtle border-b border-slate-200">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue-700">
                <Languages className="w-4 h-4" />
                <span>PRACTICE AREA B &bull; LANGUAGE SOLUTIONS FOR RESEARCH</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy-900">
                Linguistic Solutions for International Studies
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Specialized language solutions tailored specifically for market research workflows—enabling seamless multi-market surveys, focus group observation, and verbatim analysis.
              </p>
            </div>
            <Link
              href="/services/language-solutions"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brand-navy-900 hover:text-brand-blue-700 transition-colors shrink-0"
            >
              <span>Explore Overview</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LANGUAGE_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <ServiceCTA
        title="Discuss Your Research Requirement"
        description="Partner with our research leads to design custom qualitative, quantitative, or language-enabled studies tailored to your strategic questions."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
