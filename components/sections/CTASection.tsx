import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Compass, Users, Layers } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-brand-navy-900 text-white py-16 lg:py-20 relative overflow-hidden">
      {/* Soft glowing radial background */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(30,58,138,0.25)_0%,rgba(11,21,40,0.85)_60%,transparent_100%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-transparent border border-slate-500 mb-6">
            <span className="w-1.5 h-1.5 rounded-none bg-brand-blue-400" />
            <span className="text-xs uppercase tracking-widest text-slate-300 font-bold">
              Research Consultation &amp; Scoping
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-balance">
            Design a Custom Research Program for Your Strategic Priorities
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Discuss your upcoming research scope, audience requirements, and target markets directly with our senior research team.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="white"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss a Project
            </Button>
            <Button
              href="/services"
              variant="dark"
              size="lg"
              className="border-brand-navy-700 bg-brand-navy-800 hover:bg-brand-navy-700 text-slate-200"
            >
              Explore Research Services
            </Button>
          </div>

          {/* Research Capability Pillars */}
          <div className="mt-14 pt-8 border-t border-brand-navy-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <Compass className="w-5 h-5 text-brand-blue-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                  Tailored Methodology
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Custom study architecture engineered precisely around your core strategic questions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-brand-blue-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                  Targeted Respondent Access
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Multi-step screening criteria to ensure authentic representation of decision-makers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Layers className="w-5 h-5 text-brand-blue-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                  Cross-Market Coverage
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Coordinated qualitative and quantitative execution across key international commercial zones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
