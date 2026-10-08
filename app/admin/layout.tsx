import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Admin — DORA Global Research",
  description: "Protected admin panel for managing enquiries.",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="admin-root min-h-screen bg-slate-50">{children}</div>;
}
