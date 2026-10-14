"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { X, ChevronDown, ArrowRight } from "lucide-react";
import {
  NAV_ITEMS,
  COMPANY_INFO,
  SERVICES_NAV_ITEMS,
  LANGUAGE_SOLUTIONS_NAV_ITEMS,
  INDUSTRIES_NAV_ITEMS,
  INSIGHTS_NAV_ITEMS,
} from "@/lib/constants";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activePath: string;
}

export function MobileNav({ isOpen, onClose, activePath }: MobileNavProps) {
  // Initialize accordion states based on active path
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    Services: false,
    Industries: false,
    Insights: false,
  });

  // When activePath changes or menu opens, expand the relevant section if visiting a sub-route
  useEffect(() => {
    if (isOpen) {
      setExpandedItems({
        Services: activePath.startsWith("/services"),
        Industries: activePath.startsWith("/industries"),
        Insights: activePath.startsWith("/blog"),
      });
    }
  }, [isOpen, activePath]);

  // Lock background scroll reliably when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* 1. Backdrop */}
      <div
        className="fixed inset-0 bg-brand-navy-950/60 backdrop-blur-[2px] transition-opacity duration-200 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* 2. Slide-in Drawer */}
      <div
        className="fixed inset-y-0 right-0 w-full max-w-[340px] sm:max-w-[380px] bg-white flex flex-col z-10 shadow-2xl animate-slide-in-right overflow-hidden border-l border-slate-200/80"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200/80 shrink-0 bg-white">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600 rounded-sm"
            aria-label="DORA Global Research Home"
          >
            <div className="w-8 h-8 rounded-sm bg-brand-navy-900 flex items-center justify-center text-white font-bold text-base shrink-0">
              D
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[15px] tracking-tight text-brand-navy-900 leading-none">
                DORA
              </span>
              <span className="text-[9px] uppercase tracking-[0.16em] text-slate-500 font-semibold mt-1 leading-none">
                Global Research
              </span>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-sm text-slate-500 hover:text-brand-navy-900 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <nav
          className="flex-1 overflow-y-auto px-5 py-3 divide-y divide-slate-100"
          aria-label="Mobile Navigation Links"
        >
          {NAV_ITEMS.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isGroupActive =
              item.href === "/"
                ? activePath === "/"
                : activePath.startsWith(item.href);
            const isExpanded = !!expandedItems[item.label];
            const accordionId = `mobile-accordion-${item.label.toLowerCase()}`;

            // Accordion Items (Services, Industries, Insights)
            if (hasChildren) {
              return (
                <div key={item.label} className="py-1">
                  <div className="flex items-center justify-between min-h-[44px]">
                    <button
                      type="button"
                      id={`btn-${accordionId}`}
                      aria-controls={accordionId}
                      aria-expanded={isExpanded}
                      onClick={() => toggleExpand(item.label)}
                      className="w-full flex items-center justify-between py-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600 rounded-sm"
                    >
                      <span
                        className={`text-[15px] font-medium tracking-tight transition-colors ${
                          isGroupActive
                            ? "text-brand-blue-700 font-semibold"
                            : "text-brand-navy-900 hover:text-brand-blue-700"
                        }`}
                      >
                        {item.label}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 mr-1 ${
                          isExpanded ? "rotate-180 text-brand-blue-700" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Expanded Accordion Panel */}
                  {isExpanded && (
                    <div
                      id={accordionId}
                      role="region"
                      aria-labelledby={`btn-${accordionId}`}
                      className="pl-3.5 pr-1 pt-1 pb-2 space-y-3"
                    >
                      {/* Custom Grouped Layout for Services */}
                      {item.label === "Services" ? (
                        <>
                          {/* Group A: Market Research */}
                          <div>
                            <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-slate-400 block pb-1 border-b border-slate-100">
                              Market Research
                            </span>
                            <div className="mt-1 flex flex-col">
                              {SERVICES_NAV_ITEMS.map((sub) => {
                                const isSubActive = activePath === sub.href;
                                return (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={onClose}
                                    className={`min-h-[40px] flex items-center text-[13.5px] transition-colors py-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-blue-600 rounded-sm ${
                                      isSubActive
                                        ? "text-brand-blue-700 font-semibold"
                                        : "text-slate-600 hover:text-brand-navy-900"
                                    }`}
                                  >
                                    {sub.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>

                          {/* Subtle Separator */}
                          <div className="border-t border-slate-100 my-1.5" />

                          {/* Group B: Language Solutions */}
                          <div>
                            <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                              <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-slate-400 block">
                                Language Solutions
                              </span>
                              <Link
                                href="/services/language-solutions"
                                onClick={onClose}
                                className="text-[11px] font-medium text-brand-blue-700 hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-blue-600 rounded-sm"
                              >
                                Overview
                              </Link>
                            </div>
                            <div className="mt-1 flex flex-col">
                              {LANGUAGE_SOLUTIONS_NAV_ITEMS.map((sub) => {
                                const isSubActive = activePath === sub.href;
                                return (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={onClose}
                                    className={`min-h-[40px] flex items-center text-[13.5px] transition-colors py-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-blue-600 rounded-sm ${
                                      isSubActive
                                        ? "text-brand-blue-700 font-semibold"
                                        : "text-slate-600 hover:text-brand-navy-900"
                                    }`}
                                  >
                                    {sub.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>

                          {/* Overview Link for Services */}
                          <div className="pt-2 border-t border-slate-100">
                            <Link
                              href="/services"
                              onClick={onClose}
                              className="inline-flex items-center gap-1 text-[12px] font-medium text-brand-blue-700 hover:underline py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-blue-600 rounded-sm"
                            >
                              <span>All Research Services</span>
                              <span aria-hidden="true">&rarr;</span>
                            </Link>
                          </div>
                        </>
                      ) : (
                        /* Grouped Layout for Industries & Insights */
                        <div className="flex flex-col">
                          {item.children?.map((sub) => {
                            const isSubActive = activePath === sub.href;
                            return (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={onClose}
                                className={`min-h-[40px] flex items-center text-[13.5px] transition-colors py-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-blue-600 rounded-sm ${
                                  isSubActive
                                    ? "text-brand-blue-700 font-semibold"
                                    : "text-slate-600 hover:text-brand-navy-900"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            );
                          })}

                          {item.label === "Industries" && (
                            <div className="pt-2 mt-1 border-t border-slate-100">
                              <Link
                                href="/industries"
                                onClick={onClose}
                                className="inline-flex items-center gap-1 text-[12px] font-medium text-brand-blue-700 hover:underline py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-blue-600 rounded-sm"
                              >
                                <span>Explore All Industries</span>
                                <span aria-hidden="true">&rarr;</span>
                              </Link>
                            </div>
                          )}

                          {item.label === "Insights" && (
                            <div className="pt-2 mt-1 border-t border-slate-100">
                              <Link
                                href="/blog"
                                onClick={onClose}
                                className="inline-flex items-center gap-1 text-[12px] font-medium text-brand-blue-700 hover:underline py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-blue-600 rounded-sm"
                              >
                                <span>All Perspectives &amp; Briefings</span>
                                <span aria-hidden="true">&rarr;</span>
                              </Link>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            }

            // Direct Leaf Links (Home, About, Contact)
            const isActive =
              item.href === "/"
                ? activePath === "/"
                : activePath === item.href;

            return (
              <div key={item.label} className="py-1">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`min-h-[44px] flex items-center text-[15px] font-medium tracking-tight transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600 rounded-sm ${
                    isActive
                      ? "text-brand-blue-700 font-semibold"
                      : "text-brand-navy-900 hover:text-brand-blue-700"
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* 3. Footer Action & Direct Contact */}
        <div className="p-5 border-t border-slate-200/80 bg-slate-50/70 shrink-0 space-y-3">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full min-h-[44px] flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-navy-900 hover:bg-brand-blue-700 active:bg-brand-blue-800 text-white text-sm font-semibold tracking-tight rounded-sm transition-colors shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600 focus-visible:ring-offset-2"
          >
            <span>Discuss a Project</span>
            <ArrowRight className="w-4 h-4 text-white/90" />
          </Link>

          <div className="pt-0.5 text-xs text-slate-500 flex items-center justify-between">
            <span className="text-[11.5px] text-slate-500">Inquiries:</span>
            <a
              href={`mailto:${COMPANY_INFO.contacts.email}`}
              className="text-[11.5px] font-medium text-brand-blue-700 hover:underline"
            >
              {COMPANY_INFO.contacts.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
