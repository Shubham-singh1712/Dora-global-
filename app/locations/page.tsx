import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { GLOBAL_CAPABILITY_LOCATIONS } from "@/lib/constants";
import {
  Globe,
  MapPin,
  Mail,
  Shield,
  Layers,
  Info,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Global Capabilities & Operational Hubs",
  description:
    "Worldwide capability hubs and decentralized operational field coordination network across 40+ international jurisdictions.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Global Capabilities & Coordination Network | DORA Global Research",
    description:
      "Decentralized in-market linguistic expertise, timezone synchronization, and native fieldwork oversight across international territories.",
    url: "/locations",
  },
};

export default function LocationsPage() {
  return (
    <>
      <PageHeader
        badge="Multilateral Operational Coverage"
        title="Global Capabilities & Coordination Network"
        description="Providing decentralized in-market linguistic expertise, timezone synchronization, and native fieldwork oversight across international territories."
      />

      {/* Global Framework Overview */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <Container>
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700 block mb-2">
              Decentralized Field Model
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy-900 tracking-tight">
              Capability Directory & Field Coordination Units
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
              Rather than maintaining redundant bureaucratic infrastructure, DORA Global Research operates through specialized regional capability hubs and an audited network of certified in-market linguists and fieldwork coordinators.
            </p>
          </div>

          {/* Editable Structure Guidance Box */}
          <div className="mt-8 p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
            <Info className="w-4 h-4 text-brand-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-800 block mb-0.5">
                Editable Regional Capability Registry
              </strong>
              The directory below structures operational capability coverage by Country, City, Service Coverage, and Dedicated Contact Desk. Additional market nodes can be configured as operational needs expand.
            </div>
          </div>

          {/* Structured Directory Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {GLOBAL_CAPABILITY_LOCATIONS.map((loc) => (
              <Card
                key={loc.id}
                variant="default"
                padding="md"
                className="border-slate-200/90 hover:border-slate-300 hover:shadow-subtle transition-all duration-200 bg-white flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: City, Country, Status */}
                  <div className="flex items-start justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brand-blue-600 shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-brand-navy-900 leading-none">
                          {loc.city}
                        </h3>
                        <span className="text-xs text-slate-500 font-medium">
                          {loc.country}
                        </span>
                      </div>
                    </div>
                    <Badge
                      variant={loc.status === "Active Capability Hub" ? "blue" : "neutral"}
                      size="sm"
                    >
                      {loc.status}
                    </Badge>
                  </div>

                  {/* Service Coverage Specification */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Service Coverage
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {loc.serviceCoverage}
                    </p>
                  </div>
                </div>

                {/* Contact Coordination Link */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-mono text-[11px]">{loc.contactLead}</span>
                  </div>
                  <Button
                    href={`/contact?territory=${encodeURIComponent(loc.city + ", " + loc.country)}`}
                    variant="ghost"
                    size="sm"
                    className="text-xs text-brand-blue-700 hover:text-brand-blue-800 p-0 h-auto"
                  >
                    Direct Inquiry →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Global Standards Banner */}
      <section className="py-16 bg-brand-surface-subtle border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="p-5 bg-white border border-slate-200/90 rounded-lg hover:border-slate-300 hover:shadow-subtle transition-all duration-200">
              <h4 className="font-semibold text-brand-navy-900 text-sm mb-1.5">
                Timezone Synchronization
              </h4>
              <p className="leading-relaxed">
                Dedicated regional managers coordinate project handovers across London, New York, Tokyo, and Singapore timezones without latency.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200/90 rounded-lg hover:border-slate-300 hover:shadow-subtle transition-all duration-200">
              <h4 className="font-semibold text-brand-navy-900 text-sm mb-1.5">
                Native Idiomatic Moderation
              </h4>
              <p className="leading-relaxed">
                All in-market qualitative moderations and survey coding are performed by accredited native speakers residing within the target market.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200/90 rounded-lg hover:border-slate-300 hover:shadow-subtle transition-all duration-200">
              <h4 className="font-semibold text-brand-navy-900 text-sm mb-1.5">
                Centralized Quality Control
              </h4>
              <p className="leading-relaxed">
                Regardless of the fieldwork territory, all terminology review and final deliverable sign-offs are governed by centralized quality protocols.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
