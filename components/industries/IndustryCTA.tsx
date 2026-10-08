import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, MessageSquare } from "lucide-react";

interface IndustryCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export function IndustryCTA({
  title = "Discuss Your Research Requirement",
  description = "Speak directly with our research leads to scope sector-specific studies, target sample profiles, and project timelines.",
  buttonText = "Contact Us",
}: IndustryCTAProps) {
  return (
    <section className="py-16 sm:py-20 bg-brand-navy-950 text-white relative overflow-hidden">
      {/* Soft glowing radial background */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(30,58,138,0.25)_0%,rgba(11,21,40,0.85)_60%,transparent_100%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-900/60 border border-brand-blue-700/50 text-brand-blue-300 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Sector Advisory & Scoping</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              {buttonText}
            </Button>
            <Button
              href="/industries"
              variant="outline"
              size="lg"
              className="text-white border-slate-700 hover:bg-slate-800"
            >
              Explore Industries
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
