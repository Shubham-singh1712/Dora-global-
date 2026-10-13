import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How DORA Global Research collects, uses, and protects your personal information when using our website and services.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | DORA Global Research",
    description:
      "How DORA Global Research collects, uses, and protects your personal information.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        badge="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect your information."
      />

      <section className="pt-8 sm:pt-9 lg:pt-10 pb-16 lg:pb-20 bg-white">
        <Container size="md">
          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-8">
            {/* PLACEHOLDER: Client must review and approve effective date */}
            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
              Effective Date: [TO BE CONFIRMED BY CLIENT]
            </p>

            <div>
              <h2 className="text-lg font-bold text-brand-navy-900 mb-3">1. Information We Collect</h2>
              <p className="text-slate-600">
                When you submit an enquiry through our website contact form, we collect the following information:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
                <li>Full name</li>
                <li>Email address</li>
                <li>Company name (optional)</li>
                <li>Phone number (optional)</li>
                <li>Selected service interest</li>
                <li>Industry (optional)</li>
                <li>Project description / message</li>
              </ul>
              <p className="text-slate-600 mt-2">
                We do not collect information through cookies, analytics trackers, or advertising pixels unless explicitly disclosed.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-navy-900 mb-3">2. How We Use Your Information</h2>
              <p className="text-slate-600">The information you provide is used exclusively to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
                <li>Respond to your enquiry or request for proposal</li>
                <li>Provide relevant project scoping and quotations</li>
                <li>Communicate about our research and language services</li>
                <li>Maintain internal records of client communications</li>
              </ul>
              <p className="text-slate-600 mt-2">
                We do not sell, rent, or trade your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-navy-900 mb-3">3. Data Storage &amp; Processing</h2>
              <p className="text-slate-600">
                Enquiry data is stored securely in a PostgreSQL database hosted by Supabase, with data centres located in
                {" "}<strong>[REGION TO BE CONFIRMED BY CLIENT]</strong>.
                All data in transit is encrypted via TLS. Data at rest is encrypted using AES-256 encryption.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-navy-900 mb-3">4. Data Retention</h2>
              <p className="text-slate-600">
                We retain your enquiry information for as long as necessary to fulfil the purpose for which it was collected,
                or as required by applicable law. You may request deletion of your data at any time by contacting us.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-navy-900 mb-3">5. Third-Party Services</h2>
              <p className="text-slate-600">
                This website uses the following third-party services:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
                <li><strong>Supabase</strong> — database hosting and authentication</li>
                <li><strong>Vercel</strong> — website hosting and deployment</li>
              </ul>
              <p className="text-slate-600 mt-2">
                These services have their own privacy policies. We recommend reviewing them for further information.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-navy-900 mb-3">6. Your Rights</h2>
              <p className="text-slate-600">
                Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict processing of
                your personal data. To exercise these rights, contact us using the details below.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-navy-900 mb-3">7. Contact</h2>
              <p className="text-slate-600">
                For privacy-related enquiries, please contact:
              </p>
              <p className="text-slate-600 mt-2">
                <strong>DORA Global Research</strong><br />
                Email: <a href="mailto:doraglobal23@gmail.com" className="text-brand-blue-700 underline">doraglobal23@gmail.com</a><br />
                Location: Chandigarh, India
              </p>
            </div>

            <div className="border-t border-slate-200 pt-6 mt-8">
              <p className="text-xs text-slate-500">
                This privacy policy was last updated on <strong>[DATE TO BE CONFIRMED]</strong>.
                Items marked with [TO BE CONFIRMED] require client review and approval before publication.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
