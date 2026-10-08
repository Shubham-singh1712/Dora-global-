import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRIES_DATA } from "@/lib/data/industries";
import { IndustryHero } from "@/components/industries/IndustryHero";
import { IndustryResearchAreas } from "@/components/industries/IndustryResearchAreas";
import { IndustryCTA } from "@/components/industries/IndustryCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "automotives" },
    { slug: "energy-utilities" },
    { slug: "banking-finance" },
    { slug: "food-beverage" },
    { slug: "transportation" },
    { slug: "media-entertainment" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const industry = INDUSTRIES_DATA[resolvedParams.slug];

  if (!industry) {
    return {
      title: "Industry Not Found | DORA Global Research",
    };
  }

  // Format custom SEO title based on sector
  let seoTitle = `${industry.title} Market Research | DORA Global Research`;
  if (industry.slug === "banking-finance") {
    seoTitle = "Banking & Financial Market Research | DORA Global Research";
  }

  return {
    title: seoTitle,
    description: industry.shortDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: seoTitle,
      description: industry.shortDescription,
      url: `/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const industry = INDUSTRIES_DATA[resolvedParams.slug];

  if (!industry) {
    notFound();
  }

  return (
    <>
      <IndustryHero
        title={industry.heroTitle}
        badge={industry.heroBadge}
        description={industry.heroDescription}
        slug={industry.slug}
      />

      <IndustryResearchAreas industry={industry} />

      <IndustryCTA
        title={industry.ctaTitle}
        description="Connect with our sector specialists to design targeted research initiatives tailored to your commercial priorities."
        buttonText="Discuss Your Requirements"
      />
    </>
  );
}
