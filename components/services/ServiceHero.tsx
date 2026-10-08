import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

interface ServiceHeroProps {
  title: string;
  badge: string;
  description: string;
  slug: string;
}

export function ServiceHero({ title, badge, description, slug }: ServiceHeroProps) {
  return (
    <div className="relative py-14 sm:py-20 bg-[radial-gradient(ellipse_at_top_right,#EBF3FF_0%,#F4F8FE_45%,#FFFFFF_100%)] border-b border-slate-200 overflow-hidden">
      {/* Soft blue curve accent */}
      <div
        className="absolute top-0 right-0 w-[45%] h-full pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 right-0 h-[160%] w-full text-brand-blue-700/[0.08] -translate-y-[20%]"
          viewBox="0 0 500 600"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M 150 0 C -60 180 60 420 500 600 L 500 0 Z" />
        </svg>
      </div>

      <Container className="relative z-10">
        <Breadcrumbs
          className="mb-6"
          items={[
            { label: "Services", href: "/services" },
            { label: title },
          ]}
        />

        <div className="max-w-3xl">
          <Badge variant="blue" size="md" className="mb-4">
            {badge}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-navy-900 leading-[1.15]">
            {title}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {description}
          </p>
        </div>
      </Container>
    </div>
  );
}
