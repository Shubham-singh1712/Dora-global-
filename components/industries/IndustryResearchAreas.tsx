import React from "react";
import { IndustryDetail } from "@/lib/data/industries";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, HelpCircle, Lightbulb, ShieldCheck } from "lucide-react";

interface IndustryResearchAreasProps {
  industry: IndustryDetail;
}

export function IndustryResearchAreas({ industry }: IndustryResearchAreasProps) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Overview */}
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-blue-700 font-bold block mb-2">
                Industry Context
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy-900 mb-6">
                {industry.overviewTitle}
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                {industry.overviewDescription.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Research Areas */}
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-blue-700 font-bold block mb-2">
                Key Focus Domains
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy-900 mb-8">
                Target Research Areas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {industry.researchAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-lg bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Lightbulb className="w-5 h-5 text-brand-blue-700 shrink-0" />
                      <h3 className="font-bold text-brand-navy-900 text-base">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Customer / Business Questions */}
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-blue-700 font-bold block mb-2">
                Strategic Inquiry
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy-900 mb-8">
                Critical Questions We Help Answer
              </h2>
              <div className="space-y-4">
                {industry.keyQuestions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-lg border border-slate-200 bg-white flex flex-col sm:flex-row sm:items-start gap-4 hover:shadow-subtle transition-shadow"
                  >
                    <HelpCircle className="w-5 h-5 text-brand-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-brand-navy-900 text-base mb-1">
                        {q.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {q.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 p-8 rounded-xl bg-brand-navy-950 text-white shadow-card space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-blue-400 block mb-1">
                  Sector Advantage
                </span>
                <h3 className="text-xl font-bold text-white">How Research Supports Decisions</h3>
              </div>

              <div className="space-y-5">
                {industry.benefits.map((b, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue-400 shrink-0" />
                      <h4 className="text-sm font-semibold text-slate-100">{b.title}</h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pl-6">
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-brand-navy-800">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-blue-400 shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">
                    Strict Respondent Quality Controls & Verification
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
