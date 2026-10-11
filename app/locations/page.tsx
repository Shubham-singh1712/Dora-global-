import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { GLOBAL_RESEARCH_COVERAGE } from "@/lib/constants";
import {
  Globe,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Compass,
  Layers,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Global Research Coverage | Cross-Market Capability",
  description:
    "Explore DORA Global Research's cross-market research capability across the Americas, EMEA, and Asia-Pacific regions.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Global Research Coverage | DORA Global Research",
    description:
      "Cross-market research capabilities delivering localized qualitative moderation and quantitative survey execution across international commercial regions.",
    url: "/locations",
  },
};

export default function LocationsPage() {
  return (
    <>
      <PageHeader
        badge="Cross-Market Reach"
        title="Global Research Coverage"
        description="Delivering multi-market qualitative moderation and quantitative survey execution with localized language and cultural understanding."
      />

      {/* Global Coverage Overview */}
      <section className="pt-8 sm:pt-9 lg:pt-10 pb-16 sm:pb-20 bg-white border-b border-slate-200">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700 block mb-2">
              Cross-Border Research Capability
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy-900 tracking-tight">
              Executing Research Across Key Commercial Regions
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
              Market dynamics, consumer sentiment, and regulatory environments differ across territories. DORA Global Research coordinates qualitative and quantitative research programs across major international markets, providing localized context while maintaining centralized methodological rigor.
            </p>
          </div>

          {/* Structured Regional Coverage Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {GLOBAL_RESEARCH_COVERAGE.map((region) => (
              <Card
                key={region.id}
                variant="default"
                padding="lg"
                className="border-slate-200/90 hover:border-slate-300 hover:shadow-subtle transition-all duration-200 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-brand-blue-600 shrink-0" />
                      <h3 className="text-lg font-bold text-brand-navy-900">
                        {region.region}
                      </h3>
                    </div>
                    <Badge variant="blue" size="sm">
                      Active Coverage
                    </Badge>
                  </div>

                  <p className="text-xs font-semibold text-brand-navy-800 mb-2">
                    {region.focus}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {region.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Core Regional Capabilities
                    </span>
                    <ul className="space-y-1.5">
                      {region.capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue-600 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Button
                    href={`/contact?territory=${encodeURIComponent(region.region)}`}
                    variant="outline"
                    size="sm"
                    fullWidth
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Inquire for {region.region}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Cross-Market Delivery Pillars */}
      <section className="py-16 bg-brand-surface-subtle border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700 block mb-2">
              Our Methodology Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy-900 tracking-tight">
              Consistent Standards Across Every Territory
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="p-6 bg-white border border-slate-200/90 rounded-lg hover:border-slate-300 hover:shadow-subtle transition-all duration-200 space-y-2">
              <h4 className="font-semibold text-brand-navy-900 text-sm">
                Localized In-Market Context
              </h4>
              <p className="leading-relaxed">
                Qualitative moderations and survey translations are adapted to local idioms and cultural conventions, avoiding skewed sentiment or direct literal translation errors.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200/90 rounded-lg hover:border-slate-300 hover:shadow-subtle transition-all duration-200 space-y-2">
              <h4 className="font-semibold text-brand-navy-900 text-sm">
                Centralized Quality Governance
              </h4>
              <p className="leading-relaxed">
                Fieldwork parameters, screening criteria, and analytical codeframes are managed through a unified quality framework to ensure comparability across markets.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200/90 rounded-lg hover:border-slate-300 hover:shadow-subtle transition-all duration-200 space-y-2">
              <h4 className="font-semibold text-brand-navy-900 text-sm">
                Verified Respondent Recruitment
              </h4>
              <p className="leading-relaxed">
                Multi-step qualification protocols filter participants to ensure genuine representation of target B2B stakeholders, decision-makers, and consumer cohorts.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
