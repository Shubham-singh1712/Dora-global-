import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col mb-12 sm:mb-16",
        isCenter ? "items-center text-center mx-auto" : "items-start text-left",
        isCenter ? "max-w-3xl" : "max-w-4xl",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span
            className={cn(
              "w-2 h-2 rounded-full",
              isDark ? "bg-brand-blue-400" : "bg-brand-blue-600"
            )}
            aria-hidden="true"
          />
          <span
            className={cn(
              "text-xs font-semibold uppercase tracking-widest",
              isDark ? "text-brand-blue-300" : "text-brand-blue-700"
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-[1.2] text-balance",
          isDark ? "text-white" : "text-brand-navy-900"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-normal",
            isDark ? "text-slate-300" : "text-slate-600",
            isCenter ? "max-w-2xl" : "max-w-3xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
