"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { enquirySchema } from "@/lib/validations/enquiry";
import { CheckCircle2, Send, Compass, Layers, AlertCircle, Loader2 } from "lucide-react";

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
    serviceType: "Primary Research",
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
        serviceType: "Primary Research",
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
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-brand-surface-subtle">
      <Container size="lg" className="max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Context and Scope Guidelines */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-blue-600" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue-700">
                  Research Inquiry
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-brand-navy-900 leading-[1.2]">
                Discuss Your Research Project
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-3 max-w-xl">
                Connect with our research team to discuss methodology fit, target audience feasibility, and project timelines.
              </p>
            </div>

            <div className="space-y-3 pt-1">
              <div className="p-4 bg-white border border-slate-200/90 rounded-lg shadow-subtle hover:border-slate-300 transition-all duration-200">
                <div className="flex items-center gap-2 mb-1.5 text-brand-navy-900 font-semibold text-sm">
                  <Compass className="w-4 h-4 text-brand-blue-600 shrink-0" />
                  Structured Methodology Review
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  We review your business questions to recommend the optimal primary, qualitative, or quantitative approach.
                </p>
              </div>

              <div className="p-4 bg-white border border-slate-200/90 rounded-lg shadow-subtle hover:border-slate-300 transition-all duration-200">
                <div className="flex items-center gap-2 mb-1.5 text-brand-navy-900 font-semibold text-sm">
                  <Layers className="w-4 h-4 text-brand-blue-600 shrink-0" />
                  Cross-Market Feasibility
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  Clear sample size estimates, screening feasibility, and realistic timelines across your target geographies.
                </p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 bg-white border border-slate-200/90 rounded-xl shadow-elevated">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy-900">
                    Enquiry Registered
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you. Your research scoping inquiry has been received. A senior research lead will review your requirements and respond shortly.
                  </p>
                  {confirmedId && (
                    <p className="text-xs font-mono text-slate-500 bg-slate-50 py-1.5 px-3 rounded inline-block border border-slate-200">
                      Tracking Reference: {confirmedId}
                    </p>
                  )}
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
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="text-sm sm:text-base font-semibold text-brand-navy-900">
                      Research Scoping Form
                    </h3>
                    <Badge variant="blue" size="sm">
                      Direct Research Desk
                    </Badge>
                  </div>

                  {submissionError && (
                    <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2.5 text-xs text-red-800">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{submissionError}</span>
                    </div>
                  )}

                  {/* Hidden Honeypot Spam Protection Field */}
                  <input
                    type="text"
                    name="website_url"
                    tabIndex={-1}
                    autoComplete="off"
                    value=""
                    onChange={() => {}}
                    className="hidden absolute -left-[9999px]"
                    aria-hidden="true"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <Input
                      label="Full Name"
                      placeholder="Your full name"
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
                      placeholder="name@company.com"
                      required
                      value={formData.workEmail}
                      error={errors.email}
                      onChange={(e) => {
                        setFormData({ ...formData, workEmail: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <Input
                      label="Organization"
                      placeholder="Your organization name"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                    />

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                        Research Service <span className="text-red-500">*</span>
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
                        <optgroup label="Market Research">
                          <option value="Primary Research">Primary Research</option>
                          <option value="Qualitative Research">Qualitative Research</option>
                          <option value="Quantitative Research">Quantitative Research</option>
                          <option value="Custom Market Advisory">Custom Market Advisory</option>
                        </optgroup>
                        <optgroup label="Language Solutions">
                          <option value="Translation for Market Research">Translation for Market Research</option>
                          <option value="On-Site Interpretation">On-Site Interpretation</option>
                          <option value="Remote Interpretation">Remote Interpretation</option>
                          <option value="Transcription">Transcription</option>
                          <option value="In-Language Coding">In-Language Coding</option>
                          <option value="Survey Translation and Localization">Survey Translation and Localization</option>
                        </optgroup>
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-xs text-red-600 font-medium">{errors.service}</p>
                      )}
                    </div>
                  </div>

                  <Input
                    label="Target Market / Geography"
                    placeholder="e.g. North America, DACH, Japan, Pan-European"
                    value={formData.targetMarkets}
                    onChange={(e) =>
                      setFormData({ ...formData, targetMarkets: e.target.value })
                    }
                    helperText="Specify key countries, regions, or audience segments."
                  />

                  <Textarea
                    label="Project Scope / Research Objectives"
                    placeholder="Describe your research questions, target audience profile, estimated sample size, or timeline expectations..."
                    required
                    rows={3}
                    value={formData.projectBrief}
                    error={errors.message}
                    onChange={(e) => {
                      setFormData({ ...formData, projectBrief: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                  />

                  <div className="pt-1.5">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
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
                      {isSubmitting ? "Submitting Inquiry..." : "Submit Research Enquiry"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
