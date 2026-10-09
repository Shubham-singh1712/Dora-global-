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
    default: "DORA Global Research | International Market Research & Intelligence",
    template: "%s | DORA Global Research",
  },
  description:
    "Delivering primary research, qualitative moderation, and quantitative intelligence across key global sectors to guide strategic decision-making.",
  keywords: [
    "global market research",
    "international qualitative research",
    "b2b quantitative fieldwork",
    "primary research",
    "market intelligence",
    "audience segmentation",
    "concept testing",
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
    title: "DORA Global Research | International Market Research & Intelligence",
    description:
      "Delivering primary research, qualitative moderation, and quantitative intelligence across key global sectors to guide strategic decision-making.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DORA Global Research",
    description:
      "Delivering primary research, qualitative moderation, and quantitative intelligence across key global sectors to guide strategic decision-making.",
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
