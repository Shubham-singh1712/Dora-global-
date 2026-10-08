import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: "#0B1528",
            50: "#F1F5F9",
            100: "#E2E8F0",
            200: "#CBD5E1",
            300: "#94A3B8",
            400: "#64748B",
            500: "#475569",
            600: "#334155",
            700: "#1E293B",
            800: "#111C30",
            900: "#0B1528",
            950: "#060C17",
          },
          blue: {
            DEFAULT: "#1D4ED8",
            50: "#EFF6FF",
            100: "#DBEAFE",
            200: "#BFDBFE",
            300: "#93C5FD",
            400: "#60A5FA",
            500: "#3B82F6",
            600: "#1D4ED8",
            700: "#1E40AF",
            800: "#1E3A8A",
            900: "#172554",
          },
          gold: {
            DEFAULT: "#B48B30",
            light: "#FDF8E8",
            muted: "#946E20",
          },
          surface: {
            DEFAULT: "#FFFFFF",
            subtle: "#F8FAFC",
            muted: "#F1F5F9",
          },
          border: {
            DEFAULT: "#E2E8F0",
            strong: "#CBD5E1",
            subtle: "#F1F5F9",
          },
          text: {
            primary: "#0F172A",
            secondary: "#475569",
            muted: "#64748B",
            inverse: "#FFFFFF",
          },
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        serif: [
          "var(--font-serif)",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
      },
      letterSpacing: {
        widest: "0.15em",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(11, 21, 40, 0.04), 0 1px 2px -1px rgba(11, 21, 40, 0.04)",
        card: "0 2px 8px -2px rgba(11, 21, 40, 0.06), 0 1px 4px -1px rgba(11, 21, 40, 0.04)",
        elevated: "0 12px 24px -6px rgba(11, 21, 40, 0.08), 0 4px 12px -2px rgba(11, 21, 40, 0.03)",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
