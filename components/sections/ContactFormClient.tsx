"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { COMPANY_INFO } from "@/lib/constants";
import { enquirySchema } from "@/lib/validations/enquiry";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

export interface ContactSubmissionPayload {
  full_name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  industry: string;
  project_type: string;
  message: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  industry?: string;
  projectType?: string;
  message?: string;
}

interface ConfirmedEnquiry {
  id?: string;
  name: string;
  email: string;
  service: string;
  industry: string;
  company?: string;
}

function ContactFormInner() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState<ContactSubmissionPayload>({
    full_name: "",
    company: "",
    email: "",
    phone: "",
    service: "Translation",
    industry: "Healthcare & Life Sciences",
    project_type: "One-Off Project Scope",
    message: "",
  });

  // Prepopulate from query parameters if available
  useEffect(() => {
    const preService = searchParams.get("service");
    const preIndustry = searchParams.get("industry");
    const preSubject = searchParams.get("subject");
    const preTerritory = searchParams.get("territory");

    setFormData((prev) => ({
      ...prev,
      service: preService || prev.service,
      industry: preIndustry || prev.industry,
      message: preTerritory
        ? `Inquiry regarding operational coverage in ${preTerritory}.\n\n`
        : preSubject
        ? `Subject: ${preSubject}\n\n`
        : prev.message,
    }));
  }, [searchParams]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [confirmedEnquiry, setConfirmedEnquiry] = useState<ConfirmedEnquiry | null>(null);

  /**
   * Client-side validation powered by Zod schema
   */
  const validate = (): boolean => {
    const validationResult = enquirySchema.safeParse({
      name: formData.full_name,
      company: formData.company || null,
      email: formData.email,
      phone: formData.phone || null,
      service: formData.service,
      industry: formData.industry || null,
      project_type: formData.project_type || null,
      message: formData.message,
      source: "website",
    });

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      const formattedErrors: FormErrors = {};

      if (fieldErrors.name) formattedErrors.name = fieldErrors.name[0];
      if (fieldErrors.company) formattedErrors.company = fieldErrors.company[0];
      if (fieldErrors.email) formattedErrors.email = fieldErrors.email[0];
      if (fieldErrors.phone) formattedErrors.phone = fieldErrors.phone[0];
      if (fieldErrors.service) formattedErrors.service = fieldErrors.service[0];
      if (fieldErrors.industry) formattedErrors.industry = fieldErrors.industry[0];
      if (fieldErrors.project_type) formattedErrors.projectType = fieldErrors.project_type[0];
      if (fieldErrors.message) formattedErrors.message = fieldErrors.message[0];

      setErrors(formattedErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  /**
   * Submit handler sending POST /api/enquiries to the real backend
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError(null);

    // 1. Validate on client using Zod
    if (!validate()) {
      return;
    }

    // 2. Disable button & show loading state
    setIsSubmitting(true);

    try {
      // 3. Send POST request
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.full_name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          industry: formData.industry,
          project_type: formData.project_type,
          message: formData.message,
          source: "website",
        }),
      });

      const result = await response.json();

      // 4. Handle failed response
      if (!response.ok) {
        if (result.details) {
          const serverFieldErrors: FormErrors = {};
          if (result.details.name) serverFieldErrors.name = result.details.name[0];
          if (result.details.company) serverFieldErrors.company = result.details.company[0];
          if (result.details.email) serverFieldErrors.email = result.details.email[0];
          if (result.details.phone) serverFieldErrors.phone = result.details.phone[0];
          if (result.details.service) serverFieldErrors.service = result.details.service[0];
          if (result.details.message) serverFieldErrors.message = result.details.message[0];
          setErrors(serverFieldErrors);
        }

        throw new Error(
          result.error ||
            "Unable to complete your request at this time. Please check your information and try again, or reach us at " +
              COMPANY_INFO.contacts.email
        );
      }

      // 5. If successful: record confirmed summary, clear form, show polished success state
      setConfirmedEnquiry({
        id: result.data?.id || "ENQ-" + Math.floor(100000 + Math.random() * 900000),
        name: formData.full_name,
        email: formData.email,
        service: formData.service,
        industry: formData.industry,
        company: formData.company || undefined,
      });

      // Clear the form
      setFormData({
        full_name: "",
        company: "",
        email: "",
        phone: "",
        service: "Translation",
        industry: "Healthcare & Life Sciences",
        project_type: "One-Off Project Scope",
        message: "",
      });
      setErrors({});
      setIsSubmitted(true);
    } catch (err: unknown) {
      setSubmissionError(
        err instanceof Error
          ? err.message
          : "We encountered an issue submitting your enquiry. Your entered details have been preserved. Please verify the fields and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setConfirmedEnquiry(null);
    setErrors({});
    setSubmissionError(null);
  };

  return (
    <Card variant="default" padding="lg" className="bg-white border-slate-200 shadow-card">
      {/* Premium Success State UI */}
      {isSubmitted ? (
        <div className="py-8 text-center space-y-6">
          <div className="w-16 h-16 bg-blue-50 text-brand-blue-700 rounded-full flex items-center justify-center mx-auto border border-blue-200 shadow-subtle">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-3 max-w-lg mx-auto">
            <Badge variant="blue" size="md" dot>
              Enquiry Confirmed
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy-900 tracking-tight">
              Thank you for reaching out.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Your enquiry has been received. Our team will review your requirements and get back to you with relevant methodological and technical specifications.
            </p>
          </div>

          {/* Enquiry Confirmation Card */}
          {confirmedEnquiry && (
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg shadow-subtle text-left text-xs text-slate-700 max-w-md mx-auto space-y-2.5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-slate-500 font-mono text-[11px]">
                <span>REFERENCE</span>
                <span className="font-semibold text-slate-800">{confirmedEnquiry.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact:</span>
                <span className="font-medium text-slate-900">{confirmedEnquiry.name}</span>
              </div>
              {confirmedEnquiry.company && (
                <div className="flex justify-between">
                  <span className="text-slate-500">Organization:</span>
                  <span className="font-medium text-slate-900">{confirmedEnquiry.company}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-slate-500">Registered Email:</span>
                <span className="font-mono text-slate-800">{confirmedEnquiry.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Practice:</span>
                <span className="font-medium text-brand-blue-700">{confirmedEnquiry.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Target Industry:</span>
                <span className="font-medium text-slate-900">{confirmedEnquiry.industry}</span>
              </div>
            </div>
          )}

          <div className="pt-2">
            <Button variant="outline" size="md" onClick={handleReset}>
              Submit Another Enquiry
            </Button>
          </div>
        </div>
      ) : (
        /* Form Inputs */
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-semibold text-brand-navy-900">
                Corporate Project Enquiry Form
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Fields marked with <span className="text-red-500">*</span> are required
              </p>
            </div>
            <Badge variant="blue" size="sm">
              Direct Practice RFQ
            </Badge>
          </div>

          {/* Submission General Error Banner */}
          {submissionError && (
            <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3 text-xs text-red-800">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold">Unable to submit enquiry</p>
                <p>{submissionError}</p>
              </div>
            </div>
          )}

          {/* Row 1: Name and Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              id="full_name"
              label="Name"
              placeholder="e.g. Katherine Sterling"
              required
              value={formData.full_name}
              error={errors.name}
              onChange={(e) => {
                setFormData({ ...formData, full_name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
            />

            <Input
              id="company"
              label="Company"
              placeholder="e.g. BioVance Therapeutics Ltd."
              value={formData.company}
              error={errors.company}
              onChange={(e) => {
                setFormData({ ...formData, company: e.target.value });
                if (errors.company) setErrors({ ...errors, company: undefined });
              }}
            />
          </div>

          {/* Row 2: Email and Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              id="email"
              type="email"
              label="Email"
              placeholder="corporate.email@enterprise.com"
              required
              value={formData.email}
              error={errors.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
            />

            <Input
              id="phone"
              type="tel"
              label="Phone"
              placeholder="+1 (555) 019-2834"
              value={formData.phone}
              error={errors.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: undefined });
              }}
            />
          </div>

          {/* Row 3: Service & Industry Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="service-select"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Service <span className="text-red-500">*</span>
              </label>
              <select
                id="service-select"
                className={`w-full px-3.5 py-2.5 bg-white text-slate-900 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-600 focus:border-brand-blue-600 transition-colors ${
                  errors.service ? "border-red-500" : "border-slate-300"
                }`}
                value={formData.service}
                onChange={(e) => {
                  setFormData({ ...formData, service: e.target.value });
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

            <div>
              <label
                htmlFor="industry-select"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Industry
              </label>
              <select
                id="industry-select"
                className="w-full px-3.5 py-2.5 bg-white text-slate-900 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-600 focus:border-brand-blue-600 transition-colors"
                value={formData.industry}
                onChange={(e) =>
                  setFormData({ ...formData, industry: e.target.value })
                }
              >
                <option value="Healthcare & Life Sciences">Healthcare & Life Sciences</option>
                <option value="Finance & Banking">Finance & Banking</option>
                <option value="Technology & Software">Technology & Software</option>
                <option value="Legal & Regulatory">Legal & Regulatory</option>
                <option value="Retail & E-commerce">Retail & E-commerce</option>
                <option value="Education & Publishing">Education & Publishing</option>
                <option value="Media & Entertainment">Media & Entertainment</option>
                <option value="Other / Cross-Sector">Other / Cross-Sector</option>
              </select>
            </div>
          </div>

          {/* Row 4: Project Type */}
          <div>
            <label
              htmlFor="project-type-select"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
            >
              Project Type
            </label>
            <select
              id="project-type-select"
              className="w-full px-3.5 py-2.5 bg-white text-slate-900 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-600 focus:border-brand-blue-600 transition-colors"
              value={formData.project_type}
              onChange={(e) =>
                setFormData({ ...formData, project_type: e.target.value })
              }
            >
              <option value="One-Off Project Scope">One-Off Project Scope</option>
              <option value="Ongoing Master Services Retainer">Ongoing Master Services Retainer</option>
              <option value="Urgent / High-Priority Turnaround">Urgent / High-Priority Turnaround</option>
              <option value="Formal Enterprise RFP / Tender">Formal Enterprise RFP / Tender</option>
              <option value="General Capability Consultation">General Capability Consultation</option>
            </select>
          </div>

          {/* Row 5: Message */}
          <div>
            <Textarea
              id="message"
              label="Message"
              placeholder="Outline project specifications, target language pairs, document volume, or timeline requirements..."
              required
              rows={4}
              value={formData.message}
              error={errors.message}
              helperText="Protected by 256-bit encryption. Strict corporate non-disclosure protocols apply."
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: undefined });
              }}
            />
          </div>

          {/* Submit Action & Loading State */}
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
              {isSubmitting ? "Submitting Enquiry..." : "Submit Enquiry"}
            </Button>
          </div>
        </form>
      )}
    </Card>
  );
}

export function ContactFormClient() {
  return (
    <Suspense
      fallback={
        <div className="p-12 text-center text-sm text-slate-500 bg-white border border-slate-200 rounded-lg shadow-subtle">
          Loading project enquiry interface...
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
