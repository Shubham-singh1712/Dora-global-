import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative lg:min-h-[calc(100vh-105px)] flex flex-col justify-center pt-12 sm:pt-16 lg:pt-16 pb-12 sm:pb-16 lg:pb-16 bg-[radial-gradient(ellipse_at_top_left,#EBF3FF_0%,#F4F8FE_50%,#FFFFFF_100%)] overflow-hidden">

      {/* Signature DORA Blue Extended Curved Background Pattern */}
      <div
        className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 right-0 h-[130%] w-[75%] text-brand-blue-700/[0.18] -translate-y-[10%]"
          viewBox="0 0 700 900"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M 180 0 C -80 280 80 620 700 900 L 700 0 Z" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: 55-60% (7 cols out of 12) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue-50 border border-brand-blue-200/60 rounded-none text-brand-blue-700 text-xs font-semibold uppercase tracking-wider">
              Global Market Research
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-brand-navy-900 leading-[1.12]">
              Research That Moves <br className="hidden sm:inline" />
              Decisions Forward.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              DORA Global Research delivers market intelligence, qualitative and quantitative research, and localized expertise to help organizations make confident decisions across markets.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                href="/services"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Research
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-slate-300 text-brand-navy-900 hover:bg-slate-100"
                icon={<ArrowUpRight className="w-4 h-4 text-brand-blue-700" />}
              >
                Discuss a Project
              </Button>
            </div>
          </div>

          {/* RIGHT: 40-45% (5 cols out of 12) */}
          <div className="lg:col-span-5 relative group">
            {/* Subtle background frame border accent */}
            <div className="absolute -inset-2 bg-brand-navy-950/5 border border-brand-navy-900/10 pointer-events-none transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />

            {/* Visual Container */}
            <div className="relative aspect-[4/3] bg-brand-navy-950 overflow-hidden border border-slate-300 shadow-card">
              <Image
                src="/images/hero.jpg"
                alt="DORA Global Research Executive Intelligence"
                fill
                priority
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              {/* Minimal Editorial Overlay Caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy-950/90 via-brand-navy-950/50 to-transparent p-6 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-brand-blue-300 font-medium">
                    Primary &bull; Qualitative &bull; Quantitative
                  </span>
                  <span className="text-[10px] font-semibold text-slate-300">
                    Global Practice
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
