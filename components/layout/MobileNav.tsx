"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight, ChevronDown } from "lucide-react";
import {
  NAV_ITEMS,
  COMPANY_INFO,
  SERVICES_NAV_ITEMS,
  LANGUAGE_SOLUTIONS_NAV_ITEMS,
} from "@/lib/constants";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activePath: string;
}

export function MobileNav({ isOpen, onClose, activePath }: MobileNavProps) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    Services: true,
    Industries: false,
    About: false,
    Insights: false,
  });

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-navy-950/70 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-elevated flex flex-col z-10 overflow-y-auto animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-slate-200">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600 rounded-sm"
            aria-label="DORA Global Research Home"
          >
            <div className="w-8 h-8 rounded-sm bg-brand-navy-900 flex items-center justify-center text-white font-bold text-base shadow-sm shrink-0">
              D
            </div>
            <div className="flex flex-col">
              <span className="block font-bold text-[15px] tracking-tight text-brand-navy-900 leading-none">
                DORA
              </span>
              <span className="block text-[9px] uppercase tracking-[0.16em] text-slate-500 font-semibold mt-1 leading-none">
                Global Research
              </span>
            </div>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-sm text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 px-5 py-5 space-y-1.5" aria-label="Mobile Navigation">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-3 px-2">
            Navigation
          </p>
          {NAV_ITEMS.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isGroupActive =
              item.href === "/"
                ? activePath === "/"
                : activePath.startsWith(item.href);
            const isExpanded = !!expandedItems[item.label];

            if (hasChildren) {
              return (
                <div key={item.label} className="space-y-1">
                  <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`text-sm font-semibold tracking-tight ${
                        isGroupActive
                          ? "text-brand-blue-700 font-bold"
                          : "text-brand-navy-900 hover:text-brand-blue-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleExpand(item.label)}
                      className="p-1 text-slate-500 hover:text-slate-900 focus:outline-none"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={isExpanded}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isExpanded ? "rotate-180 text-brand-blue-700" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pl-3 pr-1 py-1 space-y-2 border-l-2 border-slate-200 ml-3">
                      {/* Services Custom 2-Group Layout */}
                      {item.label === "Services" ? (
                        <>
                          <div className="pt-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue-700 px-2 block">
                              Market Research
                            </span>
                            <div className="mt-1 space-y-0.5">
                              {SERVICES_NAV_ITEMS.map((sub) => {
                                const isSubActive = activePath === sub.href;
                                return (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={onClose}
                                    className={`flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                                      isSubActive
                                        ? "bg-brand-blue-50 text-brand-blue-700 font-semibold"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-brand-navy-900"
                                    }`}
                                  >
                                    <span>{sub.label}</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                                  </Link>
                                );
                              })}
                            </div>
                          </div>

                          <div className="pt-2 border-t border-slate-100">
                            <div className="flex items-center justify-between px-2">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue-700 block">
                                Language Solutions
                              </span>
                              <Link
                                href="/services/language-solutions"
                                onClick={onClose}
                                className="text-[10px] font-semibold text-brand-blue-700 hover:underline"
                              >
                                Overview &rarr;
                              </Link>
                            </div>
                            <div className="mt-1 space-y-0.5">
                              {LANGUAGE_SOLUTIONS_NAV_ITEMS.map((sub) => {
                                const isSubActive = activePath === sub.href;
                                return (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={onClose}
                                    className={`flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                                      isSubActive
                                        ? "bg-brand-blue-50 text-brand-blue-700 font-semibold"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-brand-navy-900"
                                    }`}
                                  >
                                    <span>{sub.label}</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                                  </Link>
                                );
                              })}
                            </div>
                          </div>

                          <div className="pt-1.5 border-t border-slate-100 px-2">
                            <Link
                              href="/services"
                              onClick={onClose}
                              className="text-[11px] font-semibold text-brand-blue-700 hover:underline flex items-center justify-between py-1"
                            >
                              <span>All Research Services</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </>
                      ) : (
                        <>
                          {item.children?.map((sub) => {
                            const isSubActive = activePath === sub.href;
                            return (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={onClose}
                                className={`flex items-center justify-between px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                                  isSubActive
                                    ? "bg-brand-blue-50 text-brand-blue-700 font-semibold"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-brand-navy-900"
                                }`}
                              >
                                <span>{sub.label}</span>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                              </Link>
                            );
                          })}

                          {item.label === "Industries" && (
                            <div className="pt-1.5 border-t border-slate-100 px-2">
                              <Link
                                href="/industries"
                                onClick={onClose}
                                className="text-[11px] font-semibold text-brand-blue-700 hover:underline flex items-center justify-between py-1"
                              >
                                <span>Explore All Industries</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          )}

                          {item.label === "Insights" && (
                            <div className="pt-1.5 border-t border-slate-100 px-2">
                              <Link
                                href="/blog"
                                onClick={onClose}
                                className="text-[11px] font-semibold text-brand-blue-700 hover:underline flex items-center justify-between py-1"
                              >
                                <span>All Perspectives &amp; Briefings</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = activePath === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-sm text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-brand-blue-50/70 text-brand-blue-700 font-semibold border-l-2 border-brand-blue-600"
                    : "text-slate-700 hover:bg-slate-50 hover:text-brand-navy-900"
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            );
          })}
        </nav>

        {/* CTA and Corporate details */}
        <div className="p-5 border-t border-slate-200 bg-slate-50/70 space-y-3">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-blue-600 hover:bg-brand-blue-700 active:bg-brand-blue-800 text-white text-sm font-semibold tracking-tight rounded-sm transition-all duration-150 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600 focus-visible:ring-offset-2"
          >
            <span>Discuss a Project</span>
            <ArrowRight className="w-4 h-4 text-white/90" />
          </Link>

          <div className="pt-1 text-xs text-slate-600 flex items-center justify-between px-1">
            <span className="text-[11px] text-slate-500 font-medium">Inquiries:</span>
            <a
              href={`mailto:${COMPANY_INFO.contacts.email}`}
              className="text-[11px] hover:underline text-brand-blue-700 font-semibold"
            >
              {COMPANY_INFO.contacts.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
