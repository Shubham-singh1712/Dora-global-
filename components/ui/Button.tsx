import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "white" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      target,
      rel,
      icon,
      iconPosition = "right",
      fullWidth = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none tracking-tight rounded-none group/btn";

    const variantStyles = {
      primary:
        "bg-brand-blue-600 text-white hover:bg-brand-blue-700 active:bg-brand-blue-800 focus-visible:ring-brand-blue-600 border border-brand-blue-600 hover:-translate-y-0.5 transition-all",
      secondary:
        "bg-brand-navy-900 text-white hover:bg-brand-navy-800 active:bg-brand-navy-950 focus-visible:ring-brand-navy-900 border border-brand-navy-900",
      accent:
        "bg-brand-gold text-white hover:bg-amber-600 active:bg-brand-gold-muted focus-visible:ring-brand-gold border border-brand-gold hover:-translate-y-0.5 transition-all",
      outline:
        "bg-transparent border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white active:bg-slate-800 focus-visible:ring-slate-900",
      ghost:
        "bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-900",
      white:
        "bg-white text-brand-navy-900 hover:bg-slate-50 active:bg-slate-100 border border-slate-300 focus-visible:ring-slate-900",
      dark:
        "bg-slate-900 text-white hover:bg-slate-800 border border-slate-800 focus-visible:ring-slate-700",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5 font-medium",
      md: "text-sm px-5 py-2.5 gap-2 font-medium",
      lg: "text-base px-6 py-3.5 gap-2.5 font-medium",
    };

    const classes = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && "w-full",
      className
    );

    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className="shrink-0 transition-transform duration-200 group-hover/btn:-translate-x-0.5">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5">{icon}</span>
        )}
      </>
    );

    if (href) {
      const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
      if (isExternal) {
        return (
          <a
            href={href}
            target={target || (href.startsWith("http") ? "_blank" : undefined)}
            rel={rel || (href.startsWith("http") ? "noopener noreferrer" : undefined)}
            className={classes}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={props.type || "button"}
        disabled={disabled}
        className={classes}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
