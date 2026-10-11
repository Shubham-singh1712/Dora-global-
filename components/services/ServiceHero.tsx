import React from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { HeroDecoration, type HeroDecorationVariant } from "@/components/ui/HeroDecoration";

interface ServiceHeroProps {
  title: string;
  /** Short label for breadcrumb — defaults to title if not provided */
  breadcrumbLabel?: string;
  badge: string;
  description: string;
  slug: string;
  /** Optional visual decoration variant: "network" (default), "grid", or "none" */
  decorationVariant?: HeroDecorationVariant;
}

export function ServiceHero({
  title,
  breadcrumbLabel,
  badge,
  description,
  slug,
  decorationVariant = "network",
}: ServiceHeroProps) {
  return (
    <div className="relative lg:min-h-[calc(100vh-105px)] pt-12 sm:pt-14 lg:pt-20 pb-12 sm:pb-14 lg:pb-24 bg-gradient-to-b from-slate-50/90 via-brand-surface-subtle/50 to-white border-b border-slate-200/80 overflow-hidden">
      <HeroDecoration variant={decorationVariant} />

      <Container className="relative z-10">
        {/*
          Use the short breadcrumbLabel (e.g. "Translation for Market Research")
          rather than the full heroTitle to prevent horizontal overflow on mobile.
          The nav has overflow-hidden; the current-page span has truncate.
        */}
        <Breadcrumbs
          className="mb-4 sm:mb-5"
          items={[
            { label: "Services", href: "/services" },
            { label: breadcrumbLabel ?? title },
          ]}
        />

        <div className="max-w-3xl">
          <Badge variant="blue" size="md" className="mb-3 sm:mb-4">
            {badge}
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-navy-900 leading-[1.15]">
            {title}
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl sm:max-w-3xl">
            {description}
          </p>
        </div>
      </Container>
    </div>
  );
}
