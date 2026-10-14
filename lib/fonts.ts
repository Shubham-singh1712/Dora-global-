import { Cormorant_Garamond, Inter } from "next/font/google";

/**
 * Inter - Primary Sans-Serif Typography System
 * Applied site-wide for body copy (400), navigation/buttons/labels (500),
 * and section headings / card titles (600).
 * Bundles WOFF2 fonts with Next.js build optimization for zero layout shift
 * and complete protection against local mobile system font substitution.
 */
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

/**
 * Cormorant Garamond - Editorial Display Serif
 * Reserved for major hero headlines and selected prominent page titles.
 * Provides high-contrast, elegant proportions suited for an international
 * market research consultancy.
 */
export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "Cambria", "Times New Roman", "serif"],
});
