import React from "react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing the use of the DORA Global Research website and services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms & Conditions | DORA Global Research",
    description: "Terms governing the use of the DORA Global Research website.",
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        badge="Legal"
        title="Terms & Conditions"
        description="Please read these terms carefully before using our website."
      />

      <section className="py-16 lg:py-20 bg-white">
        <Container size="md">
          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-8">
            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
              Effective Date: [TO BE CONFIRMED BY CLIENT]
            </p>

            <div>
              <h2 className="text-lg font-bold text-brand-navy-900 mb-3">1. Acceptance of Terms</h2>
              <p className="text-slate-600">
                By accessing and using the DORA Global Research website, you agree to be bound by these Terms &amp; Conditions. 
                If you do not agree, please do not use this website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-navy-900 mb-3">2. Services</h2>
              <p className="text-slate-600">
                DORA Global Research provides international market research, qualitative and quantitative fieldwork, 
                and domain-certified language solutions. Information on this website is for general informational purposes 
                and does not constitute a binding offer or contract.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-navy-900 mb-3">3. Intellectual Property</h2>
              <p className="text-slate-600">
                All content on this website — including text, branding, logos, and design — is the property of 
                DORA Global Research or its licensors and is protected by applicable intellectual property laws. 
                Reproduction without written consent is prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-navy-900 mb-3">4. Enquiry Submissions</h2>
              <p className="text-slate-600">
                By submitting an enquiry through our contact form, you confirm that the information provided is accurate 
                and that you consent to DORA Global Research processing this information for the purpose of responding 
                to your request. See our <a href="/privacy" className="text-brand-blue-700 underline">Privacy Policy</a> for details.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-navy-900 mb-3">5. Limitation of Liability</h2>
              <p className="text-slate-600">
                DORA Global Research makes no warranties regarding the accuracy or completeness of information on this website. 
                To the fullest extent permitted by law, DORA Global Research shall not be liable for any indirect, 
                incidental, or consequential damages arising from the use of this website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-navy-900 mb-3">6. Third-Party Links</h2>
              <p className="text-slate-600">
                This website may contain links to third-party websites. DORA Global Research is not responsible for 
                the content or practices of any linked third-party sites.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-navy-900 mb-3">7. Governing Law</h2>
              <p className="text-slate-600">
                These terms are governed by the laws of <strong>[JURISDICTION — TO BE CONFIRMED BY CLIENT]</strong>. 
                Any disputes shall be subject to the exclusive jurisdiction of the courts of 
                <strong> [JURISDICTION — TO BE CONFIRMED BY CLIENT]</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-navy-900 mb-3">8. Changes to These Terms</h2>
              <p className="text-slate-600">
                DORA Global Research reserves the right to update these terms at any time. 
                Continued use of the website constitutes acceptance of any changes.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-navy-900 mb-3">9. Contact</h2>
              <p className="text-slate-600">
                For questions about these terms, please contact:
              </p>
              <p className="text-slate-600 mt-2">
                <strong>DORA Global Research</strong><br />
                Email: <strong>[LEGAL CONTACT EMAIL — TO BE CONFIRMED]</strong><br />
                Address: <strong>[REGISTERED ADDRESS — TO BE CONFIRMED]</strong>
              </p>
            </div>

            <div className="border-t border-slate-200 pt-6 mt-8">
              <p className="text-xs text-slate-500">
                Items marked with [TO BE CONFIRMED] require client review and legal approval before publication.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
