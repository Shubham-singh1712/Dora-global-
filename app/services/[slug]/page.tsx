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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = SERVICES_DATA[resolvedParams.slug];

  if (!service) {
    return {
      title: "Service Not Found | DORA Global Research",
    };
  }

  return {
    title: `${service.title} | DORA Global Research`,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
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
        badge={service.heroBadge}
        description={service.heroDescription}
        slug={service.slug}
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
