import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { SEED_BLOG_ARTICLES } from "@/lib/constants";
import { ArrowLeft, Calendar, Clock, Sparkles, CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SEED_BLOG_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = SEED_BLOG_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found | DORA Global Research" };
  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${article.title} | DORA Global Research`,
      description: article.summary,
      url: `/blog/${slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = SEED_BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <PageHeader
        badge={article.category}
        title={article.title}
        description={article.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <Container size="md">
          {/* Demo disclaimer */}
          <div className="mb-8 p-3 rounded-lg bg-amber-50 border border-amber-200 flex items-center gap-2 text-xs text-amber-800 shadow-subtle">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              This is a demonstration seed briefing illustrating corporate editorial layout and typography.
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500 font-medium pb-6 border-b border-slate-100 mb-8">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {article.readTime}
            </span>
          </div>

          {/* Article Editorial Content */}
          <article className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <h2 className="text-xl sm:text-2xl font-semibold text-brand-navy-900 tracking-tight">
              Executive Summary & Scope
            </h2>
            <p>
              In multi-jurisdiction research and cross-border commercial disputes, linguistic inaccuracy introduces operational and legal exposure. Establishing auditable quality controls ensures that translations, transcripts, and qualitative moderations withstand regulatory scrutiny.
            </p>

            <h3 className="text-lg font-semibold text-brand-navy-900 tracking-tight mt-6">
              Methodological Pillars
            </h3>
            <ul className="space-y-3 list-none p-0">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue-700 shrink-0 mt-1" />
                <span>
                  <strong>Dual-Linguist Verification:</strong> Independent secondary pass by an accredited subject-matter expert to reconcile regional nuances and domain terminology.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue-700 shrink-0 mt-1" />
                <span>
                  <strong>Terminology Memory Governance:</strong> Centralized translation memory maintaining strict consistency across long-term enterprise engagements.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue-700 shrink-0 mt-1" />
                <span>
                  <strong>Encrypted Chain of Custody:</strong> Secure transfer pipelines adhering to strict enterprise confidentiality and non-disclosure standards.
                </span>
              </li>
            </ul>

            <div className="mt-10 p-6 rounded bg-slate-50 border border-slate-200">
              <h4 className="text-sm font-semibold text-brand-navy-900 mb-2">
                Need Technical Guidance on Similar Projects?
              </h4>
              <p className="text-xs text-slate-600 mb-4">
                Consult with our practice directors to review sample feasibility, timeline parameters, and methodology design.
              </p>
              <Button href="/contact" variant="primary" size="sm">
                Discuss Your Requirements
              </Button>
            </div>
          </article>

          {/* Back to Blog */}
          <div className="mt-12 pt-6 border-t border-slate-200">
            <Link
              href="/blog"
              className="inline-flex items-center text-xs font-semibold tracking-wider uppercase text-slate-600 hover:text-brand-blue-700 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
              Return to All Insights
            </Link>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
