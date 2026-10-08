import React from "react";
import { ServiceDetail } from "@/lib/data/services";
import { Container } from "@/components/ui/Container";
import { CheckCircle2, Shield, Compass, FileSpreadsheet } from "lucide-react";

interface ServiceOverviewProps {
  service: ServiceDetail;
}

export function ServiceOverview({ service }: ServiceOverviewProps) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-16">
            {/* Section 1: Overview */}
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-blue-700 font-bold block mb-2">
                Overview & Context
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy-900 mb-6">
                {service.whatIsTitle}
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                {service.whatIsDescription.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Section 2: What We Help You Understand */}
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-blue-700 font-bold block mb-2">
                Core Objectives
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy-900 mb-8">
                {service.understandTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.understandPoints.map((pt, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-lg bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Compass className="w-5 h-5 text-brand-blue-700 shrink-0" />
                      <h3 className="font-bold text-brand-navy-900 text-base">
                        {pt.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Methods (Qualitative) or Research Areas (Quantitative) */}
            {service.methods && service.methods.length > 0 && (
              <div>
                <span className="text-xs uppercase tracking-widest text-brand-blue-700 font-bold block mb-2">
                  Methodological Approaches
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy-900 mb-8">
                  {service.methodsTitle || "Methods & Approaches"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.methods.map((method, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-lg bg-brand-surface-subtle border border-slate-200"
                    >
                      <h3 className="font-bold text-brand-navy-900 text-base mb-2">
                        {method.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {method.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 4: Typical Use Cases */}
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-blue-700 font-bold block mb-2">
                Real-World Applications
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy-900 mb-8">
                {service.useCasesTitle}
              </h2>
              <div className="space-y-4">
                {service.useCases.map((useCase, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-lg border border-slate-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-subtle transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <FileSpreadsheet className="w-5 h-5 text-brand-blue-700 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-brand-navy-900 text-base mb-1">
                          {useCase.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {useCase.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column: Why DORA */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 p-8 rounded-xl bg-brand-navy-950 text-white shadow-card space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-blue-400 block mb-1">
                  The DORA Advantage
                </span>
                <h3 className="text-xl font-bold text-white">Why DORA Global Research</h3>
              </div>

              <div className="space-y-5">
                {service.whyDoraPoints.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue-400 shrink-0" />
                      <h4 className="text-sm font-semibold text-slate-100">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pl-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-brand-navy-800">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-brand-blue-400 shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">
                    Corporate Quality Governance & Privacy Protection
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
