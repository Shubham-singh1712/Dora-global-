import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { CAREER_AREAS } from "@/lib/constants";
import {
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers & Research Opportunities",
  description:
    "Explore career opportunities, practice leadership roles, and research specialist positions with DORA Global Research.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers at DORA Global Research",
    description:
      "Join an international team dedicated to methodological rigor, qualitative depth, and empirical market intelligence.",
    url: "/careers",
  },
};

export default function CareersPage() {
  const whyWorkWithUs = [
    {
      title: "Impactful Research Programs",
      description:
        "Lead and contribute to high-stakes market research studies guiding commercial expansion, product launches, and strategic investments.",
    },
    {
      title: "Cross-Market Collaboration",
      description:
        "Work collaboratively with senior research directors, qualitative moderators, and data analysts across diverse international markets.",
    },
    {
      title: "Methodological Integrity",
      description:
        "We prioritize sound research design, rigorous sample screening, and transparent data analysis over superficial metrics.",
    },
    {
      title: "Flexible Working Environment",
      description:
        "Enjoy distributed and flexible project opportunities designed for seasoned research professionals, moderators, and analysts.",
    },
  ];

  return (
    <>
      <PageHeader
        badge="Join Our Practice"
        title="Careers at DORA Global Research"
        description="Join an international team dedicated to methodological rigor, qualitative depth, and evidence-based market intelligence."
      />

      {/* Why Work With Us */}
      <section className="pt-8 sm:pt-9 lg:pt-10 pb-16 sm:pb-20 lg:pb-24 bg-white border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mb-10 sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700 block mb-2">
              Our Professional Culture
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy-900 tracking-tight">
              Why Work With DORA
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              We foster an environment of intellectual curiosity, analytical rigor, and collaborative problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyWorkWithUs.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 hover:shadow-subtle transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-subtle">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue-700" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-brand-navy-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Areas of Opportunity */}
      <section className="py-16 sm:py-24 bg-brand-surface-subtle border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700 block mb-2">
              Active Opportunities
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy-900 tracking-tight">
              Current Practice Openings
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              We continually welcome experienced research leads, qualitative moderators, and data analysts to collaborate on active client engagements.
            </p>
          </div>

          <div className="space-y-4">
            {CAREER_AREAS.map((job) => (
              <Card
                key={job.id}
                variant="default"
                padding="md"
                className="bg-white border-slate-200 hover:border-slate-300 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-brand-navy-900">
                        {job.title}
                      </h3>
                      <Badge variant="blue" size="sm">
                        {job.department}
                      </Badge>
                    </div>

                    <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-slate-500 pt-1 font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {job.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 pt-2 sm:pt-0">
                    <Button
                      href={`/contact?subject=${encodeURIComponent("Application: " + job.title)}`}
                      variant="outline"
                      size="sm"
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      Inquire / Apply
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* General Application Callout */}
          <div className="mt-12 p-6 rounded-lg bg-white border border-slate-200 shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold text-brand-navy-900">
                Experienced Research Moderator or Data Analyst?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Share your background and sector experience to explore upcoming research collaborations.
              </p>
            </div>
            <Button
              href="/contact?subject=Research+Specialist+Network"
              variant="primary"
              size="sm"
            >
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
