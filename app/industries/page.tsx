import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { INDUSTRIES_LIST } from "@/lib/data/industries";
import { IndustryCard } from "@/components/industries/IndustryCard";
import { IndustryCTA } from "@/components/industries/IndustryCTA";

export const metadata: Metadata = {
  title: "Industry Sectors | DORA Global Research",
  description:
    "Sector-specific market research solutions for Automotives, Energy & Utilities, Banking & Finance, Food & Beverage, Transportation, and Media & Entertainment.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industry Sectors | DORA Global Research",
    description:
      "Sector-specific market research solutions for automotive, financial, utility, CPG, mobility, and media sectors.",
    url: "/industries",
  },
};

export default function IndustriesOverviewPage() {
  return (
    <>
      <PageHeader
        badge="Sector Specialization"
        title="Industry Insight That Drives Better Decisions"
        description="We combine deep sector knowledge with customized qualitative and quantitative research methodologies to answer mission-critical questions across major global industries."
      />

      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue-700">
              Sector Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy-900">
              Key Industry Practices
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore how our research frameworks address sector-specific challenges, consumer behavior trends, and competitive dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_LIST.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </Container>
      </section>

      <IndustryCTA
        title="Discuss Your Sector Requirement"
        description="Connect with our sector research leads to explore audience recruiting, market scoping, and custom research frameworks."
        buttonText="Contact Us"
      />
    </>
  );
}
