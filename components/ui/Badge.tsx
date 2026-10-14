import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "blue" | "gold" | "dark" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  children,
  variant = "neutral",
  size = "md",
  dot = false,
  className,
  ...props
}: BadgeProps) {
  const variantStyles = {
    neutral: "bg-slate-100 text-slate-700 border-transparent",
    blue: "bg-brand-blue-50 text-brand-blue-700 border-transparent",
    gold: "bg-amber-50 text-amber-800 border-transparent",
    dark: "bg-brand-navy-900 text-white border-transparent",
    outline: "bg-transparent text-slate-700 border-slate-200",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 tracking-wider uppercase font-semibold",
    md: "text-xs px-2.5 py-1 tracking-normal font-medium",
  };

  const dotColors = {
    neutral: "bg-slate-400",
    blue: "bg-brand-blue-600",
    gold: "bg-amber-600",
    dark: "bg-emerald-400",
    outline: "bg-slate-500",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border rounded-sm font-medium leading-none whitespace-nowrap",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColors[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
