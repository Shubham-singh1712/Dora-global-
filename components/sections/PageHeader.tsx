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
        "relative py-14 sm:py-20 bg-[radial-gradient(ellipse_at_top_right,#EBF3FF_0%,#F4F8FE_45%,#FFFFFF_100%)] border-b border-slate-200 overflow-hidden",
        className
      )}
    >
      {/* Soft decorative blue curve accent top-right */}
      <div
        className="absolute top-0 right-0 w-[50%] h-full pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 right-0 h-[160%] w-full text-brand-blue-700/[0.08] -translate-y-[20%]"
          viewBox="0 0 500 600"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M 150 0 C -60 180 60 420 500 600 L 500 0 Z" />
        </svg>
      </div>

      <Container className="relative z-10">
        {/* Breadcrumb Bar */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center space-x-1.5 text-xs text-slate-500 mb-6 font-medium"
        >
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-brand-blue-700 transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-brand-navy-900 font-semibold">
                  {crumb.label}
                </span>
              )}
              {idx < breadcrumbs.length - 1 && (
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              )}
            </React.Fragment>
          ))}
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-brand-navy-900 font-semibold" aria-current="page">
            {title}
          </span>
        </nav>

        <div className="max-w-4xl">
          {badge && (
            <div className="mb-4">
              <Badge variant="blue" size="md" dot>
                {badge}
              </Badge>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-brand-navy-900 leading-[1.15]">
            {title}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl">
            {description}
          </p>
        </div>
      </Container>
    </div>
  );
}
