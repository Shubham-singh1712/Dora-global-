"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight, ChevronDown } from "lucide-react";
import {
  NAV_ITEMS,
  SERVICES_NAV_ITEMS,
  LANGUAGE_SOLUTIONS_NAV_ITEMS,
  INDUSTRIES_NAV_ITEMS,
  INSIGHTS_NAV_ITEMS,
} from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Click outside to close open dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  };

  const handleToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      {/* 1. Simplified, Restrained Top Utility Bar */}
      <div className="hidden lg:block bg-brand-navy-950 text-slate-400 text-[11px] py-1.5 border-b border-brand-navy-900/60 select-none">
        <Container>
          <div className="flex items-center justify-between">
            <span className="font-medium tracking-wide text-slate-300">
              Global Research &amp; Language Solutions
            </span>
            <div className="flex items-center gap-4 text-slate-400">
              <Link
                href="/contact"
                className="hover:text-white transition-colors font-medium text-slate-300 focus:outline-none focus-visible:underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* 2. Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-300 py-2.5 shadow-subtle"
            : "bg-white border-b border-slate-200 py-3 sm:py-3.5"
        }`}
      >
        <Container>
          <div
            ref={navContainerRef}
            className="flex items-center justify-between"
          >
            {/* Brand Identity / Wordmark */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy-900 rounded"
              aria-label="DORA Global Research Home"
              onClick={() => setOpenDropdown(null)}
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-brand-navy-900 flex items-center justify-center text-white font-bold text-lg tracking-tight group-hover:bg-brand-blue-700 transition-colors">
                D
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-brand-navy-900 leading-none group-hover:text-brand-blue-700 transition-colors">
                  DORA
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-slate-500 font-semibold mt-0.5">
                  Global Research
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center space-x-1 xl:space-x-1.5"
              aria-label="Main Navigation"
            >
              {NAV_ITEMS.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                const isOpen = openDropdown === item.label;

                if (hasChildren) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        type="button"
                        onClick={() => handleToggle(item.label)}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors tracking-normal rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy-900 ${
                          isActive || isOpen
                            ? "text-brand-navy-900 font-semibold"
                            : "text-slate-600 hover:text-brand-navy-900"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-brand-blue-700" : ""
                          }`}
                        />
                        {isActive && (
                          <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-navy-900 animate-fade-in" />
                        )}
                      </button>

                      {/* Dropdown Menu Container */}
                      {isOpen && (
                        <div
                          className={`absolute top-full pt-2 z-50 animate-fade-in ${
                            item.label === "Services"
                              ? "w-[660px] -left-16"
                              : item.label === "Industries"
                              ? "w-[400px] -left-10"
                              : item.label === "Insights"
                              ? "w-[360px] -left-12"
                              : "w-72 left-0"
                          }`}
                          onMouseEnter={() => handleMouseEnter(item.label)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {/* 3. Services Dropdown (Structured 2-group layout) */}
                          {item.label === "Services" && (
                            <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-5 grid grid-cols-12 gap-6">
                              {/* Group A: MARKET RESEARCH */}
                              <div className="col-span-5 space-y-3 border-r border-slate-100 pr-5">
                                <div className="pb-1 border-b border-slate-100">
                                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue-700 block">
                                    Market Research
                                  </span>
                                  <span className="text-[10px] text-slate-400">
                                    Core Methodologies
                                  </span>
                                </div>
                                <div className="space-y-1">
                                  {SERVICES_NAV_ITEMS.map((sub) => {
                                    const isSubActive = pathname === sub.href;
                                    return (
                                      <Link
                                        key={sub.label}
                                        href={sub.href}
                                        onClick={() => setOpenDropdown(null)}
                                        className={`block p-2 rounded-lg transition-colors ${
                                          isSubActive
                                            ? "bg-slate-100 text-brand-blue-700 font-semibold"
                                            : "hover:bg-slate-50 text-slate-700 hover:text-brand-navy-900"
                                        }`}
                                      >
                                        <div className="text-xs font-bold text-brand-navy-900">
                                          {sub.label}
                                        </div>
                                        <div className="text-[11px] text-slate-500 leading-tight mt-0.5 font-normal">
                                          {sub.description}
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                                <div className="pt-2 border-t border-slate-100">
                                  <Link
                                    href="/services"
                                    onClick={() => setOpenDropdown(null)}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue-700 hover:text-brand-blue-800"
                                  >
                                    <span>All Research Services</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </Link>
                                </div>
                              </div>

                              {/* Group B: LANGUAGE SOLUTIONS */}
                              <div className="col-span-7 space-y-3">
                                <div className="pb-1 border-b border-slate-100 flex items-center justify-between">
                                  <div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue-700 block">
                                      Language Solutions
                                    </span>
                                    <span className="text-[10px] text-slate-400">
                                      Research Linguistic Support
                                    </span>
                                  </div>
                                  <Link
                                    href="/services/language-solutions"
                                    onClick={() => setOpenDropdown(null)}
                                    className="text-[11px] font-semibold text-brand-blue-700 hover:underline"
                                  >
                                    Overview &rarr;
                                  </Link>
                                </div>
                                <div className="grid grid-cols-2 gap-1.5">
                                  {LANGUAGE_SOLUTIONS_NAV_ITEMS.map((sub) => {
                                    const isSubActive = pathname === sub.href;
                                    return (
                                      <Link
                                        key={sub.label}
                                        href={sub.href}
                                        onClick={() => setOpenDropdown(null)}
                                        className={`block p-2 rounded-lg transition-colors ${
                                          isSubActive
                                            ? "bg-slate-100 text-brand-blue-700 font-semibold"
                                            : "hover:bg-slate-50 text-slate-700 hover:text-brand-navy-900"
                                        }`}
                                      >
                                        <div className="text-xs font-bold text-brand-navy-900 leading-snug">
                                          {sub.label}
                                        </div>
                                        <div className="text-[10px] text-slate-500 leading-tight mt-0.5 font-normal line-clamp-2">
                                          {sub.description}
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* 4. Industries Dropdown */}
                          {item.label === "Industries" && (
                            <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-4 space-y-3">
                              <div className="pb-1.5 border-b border-slate-100 px-1">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue-700 block">
                                  Sector Practices
                                </span>
                                <span className="text-[10px] text-slate-400">
                                  Specialized Market Intelligence
                                </span>
                              </div>
                              <div className="grid grid-cols-2 gap-1.5">
                                {INDUSTRIES_NAV_ITEMS.map((sub) => {
                                  const isSubActive = pathname === sub.href;
                                  return (
                                    <Link
                                      key={sub.label}
                                      href={sub.href}
                                      onClick={() => setOpenDropdown(null)}
                                      className={`block p-2 rounded-lg transition-colors ${
                                        isSubActive
                                          ? "bg-slate-100 text-brand-blue-700 font-semibold"
                                          : "hover:bg-slate-50 text-slate-700 hover:text-brand-navy-900"
                                      }`}
                                    >
                                      <div className="text-xs font-bold text-brand-navy-900">
                                        {sub.label}
                                      </div>
                                      <div className="text-[10px] text-slate-500 leading-tight mt-0.5 line-clamp-2">
                                        {sub.description}
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                              <div className="pt-2 border-t border-slate-100 px-1">
                                <Link
                                  href="/industries"
                                  onClick={() => setOpenDropdown(null)}
                                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue-700 hover:text-brand-blue-800"
                                >
                                  <span>Explore All Industries</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                            </div>
                          )}

                          {/* 5. Insights Dropdown */}
                          {item.label === "Insights" && (
                            <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-4 space-y-2.5">
                              <div className="pb-1.5 border-b border-slate-100 px-1 flex items-center justify-between">
                                <div>
                                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue-700 block">
                                    Research Insights
                                  </span>
                                  <span className="text-[10px] text-slate-400">
                                    Methodology Perspectives &amp; Briefings
                                  </span>
                                </div>
                                <Link
                                  href="/blog"
                                  onClick={() => setOpenDropdown(null)}
                                  className="text-[11px] font-semibold text-brand-blue-700 hover:underline"
                                >
                                  All &rarr;
                                </Link>
                              </div>
                              <div className="space-y-1">
                                {INSIGHTS_NAV_ITEMS.map((sub) => {
                                  const isSubActive = pathname === sub.href;
                                  return (
                                    <Link
                                      key={sub.label}
                                      href={sub.href}
                                      onClick={() => setOpenDropdown(null)}
                                      className={`block p-2 rounded-lg transition-colors ${
                                        isSubActive
                                          ? "bg-slate-100 text-brand-blue-700 font-semibold"
                                          : "hover:bg-slate-50 text-slate-700 hover:text-brand-navy-900"
                                      }`}
                                    >
                                      <div className="text-xs font-bold text-brand-navy-900">
                                        {sub.label}
                                      </div>
                                      <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                                        {sub.description}
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpenDropdown(null)}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors tracking-normal rounded hover:text-brand-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy-900 ${
                      isActive
                        ? "text-brand-navy-900 font-semibold"
                        : "text-slate-600 hover:text-brand-navy-900"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-navy-900 animate-fade-in" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons & Mobile Menu Trigger */}
            <div className="flex items-center gap-3">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="hidden sm:inline-flex shadow-sm"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Discuss a Project
              </Button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded focus:outline-none focus:ring-2 focus:ring-brand-navy-900 transition-colors"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activePath={pathname}
      />
    </>
  );
}
