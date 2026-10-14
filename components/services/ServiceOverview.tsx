import React from "react";
import Link from "next/link";
import { ServiceDetail } from "@/lib/data/services";
import { Container } from "@/components/ui/Container";
import {
  CheckCircle2,
  Shield,
  Compass,
  FileSpreadsheet,
  ArrowRight,
  HelpCircle,
  Clock,
  FileCheck,
} from "lucide-react";

interface ServiceOverviewProps {
  service: ServiceDetail;
}

export function ServiceOverview({ service }: ServiceOverviewProps) {
  return (
    <section className="pt-10 sm:pt-12 lg:pt-14 pb-16 sm:pb-20 lg:pb-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-16">
            {/* Section 1: Overview & Context (Anchor #overview) */}
            <div id="overview" className="scroll-mt-24 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy-900 mb-5">
                  {service.whatIsTitle}
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                  {service.whatIsDescription.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Distinction Block */}
              {service.serviceDistinction && (
                <div className="p-5 sm:p-6 rounded-lg bg-slate-50 border-l-4 border-brand-blue-700 border-y border-r border-slate-200/80">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand-navy-900 mb-2">
                    How This Practice Differs
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {service.serviceDistinction}
                  </p>
                </div>
              )}
            </div>

            {/* Section 2: Questions This Service Helps Answer (Anchor #questions) */}
            {service.questionsAnswered && service.questionsAnswered.length > 0 && (
              <div id="questions" className="scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy-900 mb-3">
                  Questions This Practice Helps Answer
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mb-6 max-w-2xl">
                  Prospective research clients frequently commission this service to address specific commercial, operational, and stakeholder questions:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.questionsAnswered.map((question, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-lg bg-slate-50/70 border border-slate-200/80 flex items-start gap-3.5 hover:border-slate-300 transition-colors"
                    >
                      <span className="text-xs font-mono font-bold text-brand-blue-700 bg-brand-blue-50 px-2 py-0.5 rounded shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                        {question}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 3: How the Engagement Works (Anchor #workflow) */}
            {service.workflow && service.workflow.length > 0 && (
              <div id="workflow" className="scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy-900 mb-3">
                  How the Engagement Works
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mb-6 max-w-2xl">
                  A structured sequence adapted to the methodological requirements and quality checkpoints of this practice:
                </p>
                <div className="space-y-4">
                  {service.workflow.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-lg bg-white border border-slate-200/90 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 hover:shadow-subtle transition-shadow"
                    >
                      <div className="shrink-0">
                        <span className="inline-block text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-700 bg-brand-blue-50 px-2.5 py-1 rounded">
                          Phase {item.step}
                        </span>
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <h3 className="font-bold text-brand-navy-900 text-base">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 4: Methodological Approaches (if methods exist) */}
            {service.methods && service.methods.length > 0 && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy-900 mb-3">
                  {service.methodsTitle || "Methodological Approaches & Focus Areas"}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mb-6 max-w-2xl">
                  Core protocols and techniques utilized to capture reliable data:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {service.methods.map((method, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-lg bg-slate-50 border border-slate-200/80"
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

            {/* Section 5: Core Objectives / What We Help You Understand */}
            {service.understandPoints && service.understandPoints.length > 0 && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy-900 mb-6">
                  {service.understandTitle}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {service.understandPoints.map((pt, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-lg bg-brand-surface-subtle border border-slate-200"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <Compass className="w-4 h-4 text-brand-blue-700 shrink-0" />
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
            )}

            {/* Section 6: Confirmed Outputs & Deliverables (Anchor #deliverables) */}
            {service.deliverables && service.deliverables.length > 0 && (
              <div id="deliverables" className="scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy-900 mb-3">
                  Confirmed Outputs & Deliverables
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mb-6 max-w-2xl">
                  Outputs prepared and verified by our research and language leads:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-3.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-blue-700 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 7: Typical Use Cases */}
            {service.useCases && service.useCases.length > 0 && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy-900 mb-6">
                  {service.useCasesTitle}
                </h2>
                <div className="space-y-3.5">
                  {service.useCases.map((useCase, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-lg border border-slate-200 bg-white flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-start gap-3.5">
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
            )}

            {/* Section 8: Related Services */}
            {service.relatedServices && service.relatedServices.length > 0 && (
              <div className="pt-8 border-t border-slate-200">
                <h2 className="text-xl sm:text-2xl font-bold text-brand-navy-900 mb-2">
                  Related Practices & Solutions
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-2xl">
                  Complementary research methodologies and language solutions frequently paired with this practice:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.relatedServices.map((rel, idx) => (
                    <Link
                      key={idx}
                      href={`/services/${rel.slug}`}
                      className="group p-5 rounded-lg border border-slate-200 bg-white hover:border-brand-blue-500 hover:shadow-subtle transition-all flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="font-bold text-brand-navy-900 text-sm group-hover:text-brand-blue-700 transition-colors mb-2">
                          {rel.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {rel.description}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-blue-700">
                        <span>View practice</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Column: Why DORA & Practical Inquiries */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-7 rounded-xl bg-brand-navy-950 text-white shadow-card space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-blue-400 block mb-1">
                  Quality Assurance
                </span>
                <h3 className="text-xl font-bold text-white">Why DORA Global Research</h3>
              </div>

              <div className="space-y-4">
                {service.whyDoraPoints.map((item, idx) => (
                  <div key={idx} className="space-y-1">
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

              <div className="pt-5 border-t border-brand-navy-800">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-brand-blue-400 shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">
                    Corporate Quality Governance & Privacy Protection
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Consultation Box */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue-700 block mb-1">
                  Advisory & Scoping
                </span>
                <h4 className="text-base font-bold text-brand-navy-900">
                  Discuss Study Parameters
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Review audience feasibility, moderation methodology, quota structures, or translation timelines with our senior research team.
              </p>
              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-brand-navy-900 hover:bg-brand-navy-800 text-white text-xs font-semibold tracking-wide transition-colors"
              >
                Request Practice Scoping
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
