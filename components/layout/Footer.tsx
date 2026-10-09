"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO, NAV_ITEMS, FEATURED_SERVICES, INDUSTRIES_NAV_ITEMS } from "@/lib/constants";
import { Globe, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  const pathname = usePathname();
  const currentYear = 2026;

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-brand-navy-950 text-slate-300 hairline-t border-brand-navy-900 pt-16 pb-12">
      <Container>
        {/* Top Tier: Brand, Brief, Contact CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-brand-navy-900">
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-none bg-white text-brand-navy-900 flex items-center justify-center font-bold text-lg">
                D
              </div>
              <div>
                <span className="block font-bold text-lg tracking-tight text-white leading-none">
                  {COMPANY_INFO.name}
                </span>
                <span className="block text-[11px] uppercase tracking-widest text-slate-400 font-medium mt-1">
                  {COMPANY_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.description}
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-blue-400 shrink-0" />
                <span>{COMPANY_INFO.contacts.headquarters}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-blue-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contacts.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.contacts.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Columns */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Research Practices
            </p>
            <ul className="space-y-2.5 text-sm">
              {FEATURED_SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Inquiry CTA Block */}
          <div className="lg:col-span-3 bg-brand-navy-900/80 p-6 rounded-none border border-brand-navy-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue-400 block mb-2">
              Research Consultation
            </span>
            <h4 className="text-sm font-semibold text-white">
              Planning a Research Study?
            </h4>
            <p className="text-xs text-slate-400 mt-2 mb-4 leading-relaxed">
              Connect with our team to evaluate methodologies, sample parameters, and delivery timelines.
            </p>
            <Button
              href="/contact"
              variant="white"
              size="sm"
              fullWidth
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Start a Conversation
            </Button>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} DORA Global Research. All rights reserved.</p>

          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
