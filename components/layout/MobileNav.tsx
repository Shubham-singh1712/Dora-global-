"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight, Globe, Mail, Phone, ChevronDown } from "lucide-react";
import { NAV_ITEMS, COMPANY_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activePath: string;
}

export function MobileNav({ isOpen, onClose, activePath }: MobileNavProps) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    Services: true,
    Industries: true,
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
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-navy-900 flex items-center justify-center text-white font-bold text-base shadow-sm">
              D
            </div>
            <div>
              <span className="block font-semibold text-sm tracking-tight text-brand-navy-900 leading-none">
                DORA
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-medium mt-0.5">
                Global Research
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 px-6 py-6 space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-3 px-2">
            Corporate Navigation
          </p>
          {NAV_ITEMS.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isGroupActive = activePath.startsWith(item.href);
            const isExpanded = !!expandedItems[item.label];

            if (hasChildren) {
              return (
                <div key={item.label} className="space-y-1">
                  <div className="flex items-center justify-between px-3.5 py-3 rounded-lg bg-slate-50 border border-slate-200/80">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`text-sm font-bold tracking-tight ${
                        isGroupActive ? "text-brand-blue-700" : "text-brand-navy-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleExpand(item.label)}
                      className="p-1 text-slate-500 hover:text-slate-900 focus:outline-none"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-slate-200 ml-3">
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
                className={`flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-slate-100 text-brand-blue-700 font-semibold"
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
        <div className="p-6 border-t border-slate-200 bg-slate-50/70 space-y-4">
          <Button
            href="/contact"
            variant="primary"
            fullWidth
            size="lg"
            onClick={onClose}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start a Conversation
          </Button>

          <div className="pt-2 text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{COMPANY_INFO.contacts.headquarters}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <a
                href={`mailto:${COMPANY_INFO.contacts.email}`}
                className="hover:underline text-slate-700 font-medium"
              >
                {COMPANY_INFO.contacts.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
