import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  badge?: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
  visual?: React.ReactNode;
  showCurve?: boolean;
}

export function PageHeader({
  badge,
  title,
  description,
  breadcrumbs = [{ label: "Home", href: "/" }],
  className,
  visual,
  showCurve = false,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "relative pt-10 sm:pt-12 lg:pt-14 overflow-hidden bg-gradient-to-b from-slate-50/90 via-brand-surface-subtle/50 to-white",
        visual ? "pb-10 sm:pb-12 lg:pb-14" : "pb-8 sm:pb-9 lg:pb-10",
        className
      )}
    >
      {/* Restrained, smooth, softly rounded periwinkle background shape */}
      {showCurve && (
        <div
          className="absolute top-0 right-0 w-[42%] max-w-xl h-full pointer-events-none overflow-hidden z-0 hidden sm:block"
          aria-hidden="true"
        >
          <svg
            className="absolute top-0 right-0 h-full w-full text-brand-blue-600/[0.045]"
            viewBox="0 0 400 400"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M 400 0 L 160 0 C 80 140 120 280 400 400 Z" />
          </svg>
        </div>
      )}

      {/* Subtle ambient lighting accent */}
      <div
        className="absolute top-0 right-0 w-80 h-56 bg-brand-blue-600/[0.035] rounded-full blur-3xl pointer-events-none -translate-y-12 translate-x-12"
        aria-hidden="true"
      />

      <Container className={cn("relative z-10", visual ? "max-w-6xl" : "max-w-7xl")}>
        {/* Breadcrumb Bar */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center space-x-1.5 text-xs text-slate-500 mb-4 sm:mb-5 font-medium overflow-hidden"
        >
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-brand-blue-700 transition-colors shrink-0"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-brand-navy-900 font-semibold shrink-0">
                  {crumb.label}
                </span>
              )}
              {idx < breadcrumbs.length - 1 && (
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              )}
            </React.Fragment>
          ))}
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          {/* min-w-0 is required for truncate to work inside a flex container */}
          <span className="text-brand-navy-900 font-semibold truncate min-w-0" aria-current="page">
            {title}
          </span>
        </nav>

        <div className={visual ? "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center" : "max-w-3xl"}>
          <div className={visual ? "min-w-0" : undefined}>
            {badge && (
              <div className="mb-3 sm:mb-4">
                <Badge variant="blue" size="md" dot>
                  {badge}
                </Badge>
              </div>
            )}

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-normal text-brand-navy-900 leading-[1.15] sm:leading-[1.12]">
              {title}
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              {description}
            </p>
          </div>

          {visual && (
            <div className="mt-8 lg:mt-0 min-w-0 flex justify-center lg:justify-end w-full">
              {visual}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
