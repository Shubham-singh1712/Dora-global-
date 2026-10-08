import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { SERVICES_LIST } from "@/lib/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata: Metadata = {
  title: "Research Services | DORA Global Research",
  description:
    "Primary research, qualitative moderation, and quantitative survey solutions delivering robust market intelligence for corporate and institutional leaders.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Research Services | DORA Global Research",
    description:
      "Primary research, qualitative moderation, and quantitative survey solutions delivering robust market intelligence.",
    url: "/services",
  },
};

export default function ServicesOverviewPage() {
  return (
    <>
      <PageHeader
        badge="Core Practice Areas"
        title="Research That Turns Questions Into Direction"
        description="DORA Global Research delivers end-to-end primary market research, qualitative depth, and quantitative measurement to guide complex corporate decisions across international markets."
      />

      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue-700">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy-900">
              Specialized Research Methodologies
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore our core research disciplines designed to capture authentic market signals, unearth qualitative insights, and measure quantitative trends with statistical confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES_LIST.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <ServiceCTA
        title="Discuss Your Research Requirement"
        description="Partner with our research leads to design custom qualitative and quantitative studies tailored to your strategic questions."
        buttonText="Contact Us"
      />
    </>
  );
}
