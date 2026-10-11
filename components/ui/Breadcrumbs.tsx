import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center space-x-1.5 text-xs text-slate-500 font-medium overflow-hidden ${className}`}
    >
      <Link href="/" className="hover:text-brand-blue-700 transition-colors shrink-0">
        Home
      </Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-brand-blue-700 transition-colors shrink-0"
            >
              {item.label}
            </Link>
          ) : (
            // Current page: allow truncation so it never overflows the viewport.
            // min-w-0 is required for truncate to work inside a flex container.
            <span
              className="text-brand-navy-900 font-semibold truncate min-w-0"
              aria-current="page"
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
