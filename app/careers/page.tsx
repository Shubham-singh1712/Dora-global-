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
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers & Linguistic Specialist Network",
  description:
    "Explore practice leadership positions and accredited freelance linguistic network opportunities with DORA Global Research.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers & Linguistic Network | DORA Global Research",
    description:
      "Join a disciplined international team dedicated to cross-border research integrity, rigorous localization, and multilingual excellence.",
    url: "/careers",
  },
};

export default function CareersPage() {
  const whyWorkWithUs = [
    {
      title: "High-Consequence Projects",
      description:
        "Contribute to international litigation arbitrations, medical regulatory filings, and global investor disclosures where precision truly matters.",
    },
    {
      title: "Global Collaboration",
      description:
        "Collaborate daily with certified linguists, senior research directors, and subject-matter specialists situated across major continents.",
    },
    {
      title: "Professional Standards",
      description:
        "We value accredited human domain expertise over algorithmic shortcuts, honoring professional terminology management and methodology.",
    },
    {
      title: "Flexible & Distributed Work",
      description:
        "Enjoy project-based and distributed work opportunities designed for specialized translators, interpreters, and qualitative analysts.",
    },
  ];

  return (
    <>
      <PageHeader
        badge="Talent & Linguistic Network"
        title="Careers at DORA Global Research"
        description="Join a disciplined international team dedicated to cross-border research integrity, rigorous localization, and multilingual excellence."
      />

      {/* Why Work With Us */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700 block mb-2">
              Our Professional Culture
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy-900 tracking-tight">
              Why Work With DORA
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              We cultivate an environment of analytical rigor, linguistic precision, and mutual respect for specialized domain knowledge.
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
              Active Talent Openings
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy-900 tracking-tight">
              Current Areas of Opportunity
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
              We continually seek experienced project managers, domain-certified linguists, and qualitative survey analysts to expand our practice groups.
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
                      Apply / Inquire
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
                Are You a Certified Translator or Conference Interpreter?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Submit your credentials and domain accreditation to join our vetted freelance specialist roster.
              </p>
            </div>
            <Button
              href="/contact?subject=Linguist+Network+Application"
              variant="primary"
              size="sm"
            >
              Submit Credentials
            </Button>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
