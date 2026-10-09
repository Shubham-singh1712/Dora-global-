"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight, Globe, ChevronDown } from "lucide-react";
import { NAV_ITEMS, COMPANY_INFO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      {/* Top Utility Bar for Corporate International Presence */}
      <div className="hidden lg:block bg-brand-navy-950 text-slate-300 text-xs py-2 hairline-b border-brand-navy-900">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 font-medium tracking-wide">
                <Globe className="w-3.5 h-3.5 text-brand-blue-400" />
                Global Research Coverage: Americas &bull; EMEA &bull; Asia-Pacific
              </span>
            </div>
            <div className="flex items-center gap-6 text-slate-400">
              <span className="font-mono text-[11px] tracking-wider uppercase text-slate-400">
                Market Research &amp; Intelligence
              </span>
              <span className="text-slate-600">|</span>
              <a
                href={`mailto:${COMPANY_INFO.contacts.email}`}
                className="hover:text-white transition-colors"
              >
                {COMPANY_INFO.contacts.email}
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-300 py-3.5 shadow-subtle"
            : "bg-white border-b border-slate-200 py-5"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Brand Identity / Wordmark */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="DORA Global Research Home"
            >
              <div className="w-9 h-9 rounded-none bg-brand-navy-900 flex items-center justify-center text-white font-bold text-lg tracking-tight group-hover:bg-brand-blue-700 transition-colors">
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
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
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
                      className="relative group"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href={item.href}
                        className={`inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors tracking-normal ${
                          isActive
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
                          <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-navy-900 animate-fade-in" />
                        )}
                      </Link>

                      {/* Dropdown Menu Box */}
                      {isOpen && (
                        <div
                          className="absolute top-full left-0 w-72 pt-2 z-50 animate-fade-in"
                          onMouseEnter={() => handleMouseEnter(item.label)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-2 space-y-1">
                            {item.children?.map((sub) => {
                              const isSubActive = pathname === sub.href;
                              return (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className={`block p-2.5 rounded-md transition-colors ${
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
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative px-3.5 py-2 text-sm font-medium transition-colors tracking-normal hover:text-brand-blue-700 ${
                      isActive
                        ? "text-brand-navy-900 font-semibold"
                        : "text-slate-600 hover:text-brand-navy-900"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-navy-900 animate-fade-in" />
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
                className="hidden sm:inline-flex"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Get a Quote
              </Button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-navy-900 transition-colors"
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
