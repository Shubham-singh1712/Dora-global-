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
}

export function PageHeader({
  badge,
  title,
  description,
  breadcrumbs = [{ label: "Home", href: "/" }],
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "relative pt-10 sm:pt-12 lg:pt-14 pb-8 sm:pb-9 lg:pb-10 bg-gradient-to-b from-slate-50/90 via-brand-surface-subtle/50 to-white border-b border-slate-200/80 overflow-hidden",
        className
      )}
    >
      {/* Subtle ambient lighting accent */}
      <div
        className="absolute top-0 right-0 w-96 h-64 bg-brand-blue-600/[0.04] rounded-full blur-3xl pointer-events-none -translate-y-12 translate-x-12"
        aria-hidden="true"
      />

      <Container className="relative z-10">
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

        <div className="max-w-3xl">
          {badge && (
            <div className="mb-3 sm:mb-4">
              <Badge variant="blue" size="md" dot>
                {badge}
              </Badge>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-navy-900 leading-[1.15]">
            {title}
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl sm:max-w-3xl">
            {description}
          </p>
        </div>
      </Container>
    </div>
  );
}
