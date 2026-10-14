import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArrowRight, CheckCircle2, Sparkles, Layers } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  breadcrumbLabel?: string;
  badge?: string;
  description: string;
  slug: string;
  category?: string;
  practiceHighlights?: string[];
}

export function ServiceHero({
  title,
  breadcrumbLabel,
  description,
  slug,
  category = "Research Practice",
  practiceHighlights = [],
}: ServiceHeroProps) {
  const isResearch = slug.includes("research");

  return (
    <div className="relative pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12 lg:pb-14 bg-gradient-to-b from-slate-50/90 via-brand-surface-subtle/30 to-white overflow-hidden border-b border-slate-100">
      {/* Subtle brand geometry in the background - restrained scale */}
      <div
        className="absolute top-0 right-0 w-[40%] h-full pointer-events-none overflow-hidden opacity-[0.04]"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 right-0 h-[140%] w-full text-brand-blue-700"
          viewBox="0 0 500 600"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M 150 0 C -60 180 60 420 500 600 L 500 0 Z" />
        </svg>
      </div>

      <Container className="relative z-10">
        <Breadcrumbs
          className="mb-4 sm:mb-5"
          items={[
            { label: "Services", href: "/services" },
            { label: breadcrumbLabel ?? title },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Title & Description Column */}
          <div className="lg:col-span-7 xl:col-span-8">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-normal text-brand-navy-900 leading-[1.18] text-balance">
              {title}
            </h1>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              {description}
            </p>

            {/* Quick in-page jump links for fast navigation */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
              <span className="text-slate-600 font-medium mr-1">On this page:</span>
              <a
                href="#overview"
                className="px-2.5 py-1 rounded bg-slate-100/80 hover:bg-slate-200/80 text-slate-600 hover:text-brand-navy-900 transition-colors"
              >
                Overview & Context
              </a>
              <a
                href="#questions"
                className="px-2.5 py-1 rounded bg-slate-100/80 hover:bg-slate-200/80 text-slate-600 hover:text-brand-navy-900 transition-colors"
              >
                Questions Answered
              </a>
              <a
                href="#workflow"
                className="px-2.5 py-1 rounded bg-slate-100/80 hover:bg-slate-200/80 text-slate-600 hover:text-brand-navy-900 transition-colors"
              >
                How We Work
              </a>
              <a
                href="#deliverables"
                className="px-2.5 py-1 rounded bg-slate-100/80 hover:bg-slate-200/80 text-slate-600 hover:text-brand-navy-900 transition-colors"
              >
                Deliverables
              </a>
            </div>
          </div>

          {/* Right Column: Restrained Practice Snapshot Panel */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="relative rounded-xl bg-white/95 border border-slate-200/90 p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] overflow-hidden">
              {/* Restrained decorative telemetry accent - small scale (120px) */}
              <div
                className="absolute -right-6 -bottom-6 w-32 h-32 pointer-events-none text-brand-blue-600/10"
                aria-hidden="true"
              >
                {isResearch ? (
                  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" />
                    <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                    <rect x="15" y="15" width="70" height="70" stroke="currentColor" strokeWidth="1" rx="8" />
                    <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  </svg>
                )}
              </div>

              <div className="relative z-10 space-y-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-blue-700 block">
                    Practice Scope
                  </span>
                  <p className="text-sm font-bold text-brand-navy-900 mt-0.5">
                    {category}
                  </p>
                </div>

                {practiceHighlights.length > 0 && (
                  <div className="space-y-2.5 pt-1">
                    {practiceHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue-700 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-600 font-medium">
                    Custom scoping available
                  </span>
                  <Link
                    href={`/contact?service=${encodeURIComponent(breadcrumbLabel ?? title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue-700 hover:text-brand-navy-900 transition-colors"
                  >
                    <span>Discuss</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
