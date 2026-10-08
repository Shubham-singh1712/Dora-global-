import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://doraglobalresearch.com"
  ),
  title: {
    default: "DORA Global Research | International Market Intelligence & Language Solutions",
    template: "%s | DORA Global Research",
  },
  description:
    "Delivering verified multi-market qualitative moderation, institutional quantitative fieldwork, and domain-certified language solutions for multinational enterprises.",
  keywords: [
    "global market research",
    "international qualitative research",
    "b2b quantitative fieldwork",
    "language solutions",
    "market due diligence",
    "medical translation",
    "corporate intelligence",
    "cross-border research",
  ],
  authors: [{ name: "DORA Global Research" }],
  creator: "DORA Global Research",
  publisher: "DORA Global Research",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://doraglobalresearch.com",
    siteName: "DORA Global Research",
    title: "DORA Global Research | International Market Intelligence & Language Solutions",
    description:
      "Delivering verified multi-market qualitative moderation, institutional quantitative fieldwork, and domain-certified language solutions for multinational enterprises.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DORA Global Research",
    description:
      "Delivering verified multi-market qualitative moderation, institutional quantitative fieldwork, and domain-certified language solutions for multinational enterprises.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-900 bg-white selection:bg-brand-navy-900 selection:text-white">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
