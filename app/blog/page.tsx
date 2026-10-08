import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { BlogCard } from "@/components/ui/BlogCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { SEED_BLOG_ARTICLES } from "@/lib/constants";
import { Sparkles, Info, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Methodologies & Research Insights",
  description:
    "Executive briefings, technical perspectives, and operational frameworks examining cross-border research design and multilingual compliance.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Methodologies & Industry Insights | DORA Global Research",
    description:
      "Expert analyses, regulatory translation protocols, and technical perspectives examining language solutions and multi-market fieldwork.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        badge="Perspectives & Technical Briefings"
        title="Research Methodologies & Industry Insights"
        description="Analyses, operational checklists, and technical perspectives examining language solutions, quantitative fieldwork, and cross-border compliance."
      />

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          {/* Transparent Demonstration Disclaimer Notice */}
          <div className="mb-12 p-4 rounded-lg bg-amber-50/70 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900 shadow-subtle">
            <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold block mb-0.5">
                Editorial Demonstration Notice
              </strong>
              The articles displayed below are seed and demo briefings configured to illustrate layout hierarchy, categorization, and metadata formatting. They represent sample topical coverage rather than verified corporate publications.
            </div>
          </div>

          {/* Featured Seed Insight Banner */}
          <div className="mb-14">
            <Card
              variant="default"
              padding="lg"
              className="bg-brand-navy-950 text-white border-brand-navy-900 relative overflow-hidden"
            >
              <div className="max-w-3xl space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="blue" size="sm">
                    Featured Briefing
                  </Badge>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/80">
                    Seed Demo
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
                  The Multi-Market Regulatory Compliance Mandate: Establishing Auditable Dual-Pass Translation
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                  A foundational examination of regulatory linguistic audit trails, back-translation protocols, and glossary governance required for cross-jurisdictional compliance filings in clinical and financial sectors.
                </p>

                <div className="pt-2 flex items-center gap-4 text-xs text-slate-400 font-mono">
                  <span>October 2026</span>
                  <span>•</span>
                  <span>8 min read</span>
                  <span>•</span>
                  <span>Clinical & Legal Practice</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Grid of Seed Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SEED_BLOG_ARTICLES.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>

          {/* Newsletter / Briefing Subscription Box */}
          <div className="mt-20 p-8 rounded-lg bg-brand-surface-subtle border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue-700 block mb-1">
                Executive Intelligence
              </span>
              <h3 className="text-lg font-semibold text-brand-navy-900">
                Receive Quarterly Methodology Briefings
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Direct insights on cross-border research design, terminology governance, and international regulatory shifts delivered to institutional subscribers.
              </p>
            </div>
            <div className="shrink-0">
              <Button href="/contact" variant="primary" size="md">
                Subscribe to Briefings
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
