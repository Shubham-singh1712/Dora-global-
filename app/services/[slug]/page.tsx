import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/lib/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceCTA } from "@/components/services/ServiceCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

// Only allow slugs defined in SERVICES_DATA — unknown slugs return 404
// without triggering dynamic SSR (prevents the "Rendering..." overlay).
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = SERVICES_DATA[resolvedParams.slug];

  if (!service) {
    return {
      title: "Service Not Found | DORA Global Research",
    };
  }

  return {
    // Use only service.title — the layout template appends "| DORA Global Research"
    // automatically, so specifying it here would duplicate it.
    title: service.title,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      // og:title is not processed by the template, so include the full brand suffix.
      title: `${service.title} | DORA Global Research`,
      description: service.shortDescription,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const service = SERVICES_DATA[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero
        title={service.heroTitle}
        breadcrumbLabel={service.title}
        badge={service.heroBadge}
        description={service.heroDescription}
        slug={service.slug}
        category={service.category}
        practiceHighlights={service.practiceHighlights}
      />

      <ServiceOverview service={service} />

      <ServiceCTA
        title={service.ctaTitle}
        description="Connect with our research team to review study parameters, sample feasibility, moderation approaches, or language solutions."
        buttonText={service.ctaButtonText}
        buttonHref={`/contact?service=${encodeURIComponent(service.title)}`}
      />
    </>
  );
}
