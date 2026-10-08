"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { enquirySchema } from "@/lib/validations/enquiry";
import { CheckCircle2, Send, ShieldCheck, Lock, AlertCircle, Loader2 } from "lucide-react";

interface FormErrors {
  name?: string;
  email?: string;
  organization?: string;
  service?: string;
  message?: string;
}

export function QuoteInquirySection() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    organization: "",
    serviceType: "Translation",
    targetMarkets: "",
    projectBrief: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [confirmedId, setConfirmedId] = useState<string | null>(null);

  const validate = (): boolean => {
    const result = enquirySchema.safeParse({
      name: formData.fullName,
      company: formData.organization || null,
      email: formData.workEmail,
      service: formData.serviceType,
      message: formData.targetMarkets
        ? `Target Markets: ${formData.targetMarkets}\n\n${formData.projectBrief}`
        : formData.projectBrief,
      source: "website-homepage-quote",
    });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const formattedErrors: FormErrors = {};

      if (fieldErrors.name) formattedErrors.name = fieldErrors.name[0];
      if (fieldErrors.email) formattedErrors.email = fieldErrors.email[0];
      if (fieldErrors.service) formattedErrors.service = fieldErrors.service[0];
      if (fieldErrors.message) formattedErrors.message = fieldErrors.message[0];

      setErrors(formattedErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          company: formData.organization,
          email: formData.workEmail,
          service: formData.serviceType,
          message: formData.targetMarkets
            ? `Target Markets: ${formData.targetMarkets}\n\n${formData.projectBrief}`
            : formData.projectBrief,
          source: "website-homepage-quote",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to submit your enquiry at this time. Please try again."
        );
      }

      setConfirmedId(result.data?.id || "ENQ-" + Math.floor(100000 + Math.random() * 900000));
      setFormData({
        fullName: "",
        workEmail: "",
        organization: "",
        serviceType: "Translation",
        targetMarkets: "",
        projectBrief: "",
      });
      setErrors({});
      setSubmitted(true);
    } catch (err: unknown) {
      setSubmissionError(
        err instanceof Error
          ? err.message
          : "We encountered an issue submitting your enquiry. Your entered details have been preserved. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-surface-subtle border-t border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Context and Scope Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="Formal RFP & Quote Request"
              title="Initiate Project Scoping"
              description="Connect with our practice leads to evaluate field methodology, sample feasibility, and multi-territory delivery timelines."
              className="mb-8"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white border border-slate-200/90 rounded-lg shadow-subtle hover:border-slate-300 transition-all duration-200">
                <div className="flex items-center gap-2 mb-2 text-brand-navy-900 font-semibold text-sm">
                  <Lock className="w-4 h-4 text-brand-blue-600" />
                  Institutional Confidentiality
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All shared project briefs, respondent profiles, and scope documentation are protected under strict non-disclosure terms prior to formal engagement.
                </p>
              </div>

              <div className="p-5 bg-white border border-slate-200/90 rounded-lg shadow-subtle hover:border-slate-300 transition-all duration-200">
                <div className="flex items-center gap-2 mb-2 text-brand-navy-900 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-brand-blue-600" />
                  What You Receive
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue-600 shrink-0" />
                    <span>Detailed methodological specification & feasibility audit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue-600 shrink-0" />
                    <span>Itemized pricing schedule and milestone timeline</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue-600 shrink-0" />
                    <span>Assigned senior director and linguistic quality lead</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <Card variant="default" padding="lg" className="bg-white border-slate-200 shadow-card">
              {submitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-14 h-14 bg-blue-50 text-brand-blue-700 rounded-full flex items-center justify-center mx-auto border border-blue-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <Badge variant="blue" size="sm" dot>
                      Enquiry Confirmed
                    </Badge>
                    <h3 className="text-2xl font-semibold text-brand-navy-900 tracking-tight">
                      Thank you for reaching out.
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Your enquiry has been received. Our team will review your requirements and get back to you.
                    </p>
                    {confirmedId && (
                      <p className="text-xs text-slate-500 font-mono pt-1">
                        Reference ID: {confirmedId}
                      </p>
                    )}
                  </div>
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="text-base font-semibold text-brand-navy-900">
                      Project Specification Form
                    </h3>
                    <Badge variant="blue" size="sm">
                      Direct RFQ
                    </Badge>
                  </div>

                  {submissionError && (
                    <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2.5 text-xs text-red-800">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{submissionError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      placeholder="e.g. Dr. Alistair Vance"
                      required
                      value={formData.fullName}
                      error={errors.name}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                    />
                    <Input
                      label="Corporate Email"
                      type="email"
                      placeholder="name@enterprise.com"
                      required
                      value={formData.workEmail}
                      error={errors.email}
                      onChange={(e) => {
                        setFormData({ ...formData, workEmail: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Organization / Practice"
                      placeholder="e.g. Vanguard Strategy Partners"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                    />

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Primary Capability Needed <span className="text-red-500">*</span>
                      </label>
                      <select
                        className={`w-full px-3.5 py-2.5 bg-white text-slate-900 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-600 focus:border-brand-blue-600 transition-colors ${
                          errors.service ? "border-red-500" : "border-slate-300"
                        }`}
                        value={formData.serviceType}
                        onChange={(e) => {
                          setFormData({ ...formData, serviceType: e.target.value });
                          if (errors.service) setErrors({ ...errors, service: undefined });
                        }}
                      >
                        <option value="Translation">Translation</option>
                        <option value="Remote Interpretation">Remote Interpretation</option>
                        <option value="On-Site Interpretation">On-Site Interpretation</option>
                        <option value="Sign Language Interpretation">Sign Language Interpretation</option>
                        <option value="Transcription">Transcription</option>
                        <option value="In-Language Coding">In-Language Coding</option>
                        <option value="Website Globalization">Website Globalization</option>
                        <option value="Multi-Market Qualitative Research">Multi-Market Qualitative Research</option>
                        <option value="Cross-Border Quantitative Fieldwork">Cross-Border Quantitative Fieldwork</option>
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-xs text-red-600 font-medium">{errors.service}</p>
                      )}
                    </div>
                  </div>

                  <Input
                    label="Target Countries / Language Markets"
                    placeholder="e.g. Germany, Japan, Brazil, UK"
                    value={formData.targetMarkets}
                    onChange={(e) =>
                      setFormData({ ...formData, targetMarkets: e.target.value })
                    }
                    helperText="Specify regions, languages, or regulatory jurisdictions required."
                  />

                  <Textarea
                    label="Project Scope / Methodology Requirements"
                    placeholder="Describe your research objectives, sample criteria, timeline, or translation volume..."
                    required
                    rows={4}
                    value={formData.projectBrief}
                    error={errors.message}
                    onChange={(e) => {
                      setFormData({ ...formData, projectBrief: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                  />

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                      icon={
                        isSubmitting ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Send className="w-4 h-4" />
                        )
                      }
                    >
                      {isSubmitting ? "Submitting Enquiry..." : "Request Methodological Quote"}
                    </Button>
                    <p className="mt-2 text-[11px] text-slate-500 text-center">
                      Protected by 256-bit encryption. Strict corporate non-disclosure protocols apply.
                    </p>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
