"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { enquirySchema } from "@/lib/validations/enquiry";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RefreshCw,
} from "lucide-react";

export interface ContactSubmissionPayload {
  full_name: string;
  email: string;
  organization: string;
  service: string;
  target_market: string;
  project_scope: string;
  message: string;
}

interface FormErrors {
  full_name?: string;
  email?: string;
  organization?: string;
  service?: string;
  target_market?: string;
  project_scope?: string;
  message?: string;
}

interface ConfirmedEnquiry {
  id?: string;
  name: string;
  email: string;
  service: string;
  organization?: string;
}

export function ContactFormClient() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState<ContactSubmissionPayload>({
    full_name: "",
    email: "",
    organization: "",
    service: "Primary Research",
    target_market: "",
    project_scope: "One-Off Study",
    message: "",
  });

  // Prepopulate from query parameters if available
  useEffect(() => {
    if (!searchParams) return;
    const preService = searchParams.get("service");
    const preIndustry = searchParams.get("industry");
    const preSubject = searchParams.get("subject");
    const preTerritory = searchParams.get("territory");

    setFormData((prev) => ({
      ...prev,
      service: preService || prev.service,
      target_market: preTerritory || prev.target_market,
      message: preSubject
        ? `Subject: ${preSubject}\n\n${prev.message}`
        : preIndustry
        ? `Industry Focus: ${preIndustry}\n\n${prev.message}`
        : prev.message,
    }));
  }, [searchParams]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [confirmedEnquiry, setConfirmedEnquiry] = useState<ConfirmedEnquiry | null>(null);

  /**
   * Client-side validation
   */
  const validate = (): boolean => {
    const validationResult = enquirySchema.safeParse({
      name: formData.full_name,
      company: formData.organization || null,
      email: formData.email,
      service: formData.service,
      industry: formData.project_scope || null,
      project_type: formData.project_scope || null,
      message: formData.target_market
        ? `Target Market/Geography: ${formData.target_market}\n\n${formData.message}`
        : formData.message,
      source: "website-contact-page",
    });

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      const formattedErrors: FormErrors = {};

      if (fieldErrors.name) formattedErrors.full_name = fieldErrors.name[0];
      if (fieldErrors.email) formattedErrors.email = fieldErrors.email[0];
      if (fieldErrors.service) formattedErrors.service = fieldErrors.service[0];
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

    // 1. Validate on client
    if (!validate()) {
      return;
    }

    // 2. Disable button & show loading state
    setIsSubmitting(true);

    try {
      // 3. Send POST request to existing real backend
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.full_name,
          company: formData.organization,
          email: formData.email,
          service: formData.service,
          industry: formData.project_scope,
          project_type: formData.project_scope,
          message: formData.target_market
            ? `Target Market/Geography: ${formData.target_market}\n\n${formData.message}`
            : formData.message,
          source: "website-contact-page",
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(
          responseData.error ||
            "Unable to submit research enquiry. Please check your details and retry."
        );
      }

      // 4. Registration successful
      setConfirmedEnquiry({
        id: responseData.data?.id || `ENQ-${Math.floor(100000 + Math.random() * 900000)}`,
        name: formData.full_name,
        email: formData.email,
        service: formData.service,
        organization: formData.organization,
      });

      setIsSubmitted(true);
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setSubmissionError(
        err instanceof Error
          ? err.message
          : "We encountered an unexpected connection issue. Your details have been preserved. Please try submitting again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      full_name: "",
      email: "",
      organization: "",
      service: "Primary Research",
      target_market: "",
      project_scope: "One-Off Study",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmissionError(null);
    setConfirmedEnquiry(null);
  };

  return (
    <Card variant="default" padding="lg" className="bg-white border-slate-200/90 shadow-elevated">
      {/* SUCCESS STATE */}
      {isSubmitted && confirmedEnquiry ? (
        <div className="py-8 text-center space-y-6">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <Badge variant="blue" size="md">
              Enquiry Registered
            </Badge>
            <h3 className="text-2xl font-bold text-brand-navy-900">
              Thank You, {confirmedEnquiry.name}
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Your research enquiry has been received. A senior research lead will review your project parameters and get in touch with you shortly.
            </p>
          </div>

          {confirmedEnquiry.id && (
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg max-w-sm mx-auto text-left text-xs space-y-1 font-mono text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Reference:</span>
                <span className="font-bold text-brand-navy-900">{confirmedEnquiry.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service:</span>
                <span>{confirmedEnquiry.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact:</span>
                <span>{confirmedEnquiry.email}</span>
              </div>
            </div>
          )}

          <div className="pt-4">
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={resetForm}
              icon={<RefreshCw className="w-4 h-4" />}
            >
              Submit Another Enquiry
            </Button>
          </div>
        </div>
      ) : (
        /* ACTIVE FORM - RENDERS IMMEDIATELY */
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-bold text-brand-navy-900">
                Research Project Enquiry
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Provide your research scope for a direct evaluation.
              </p>
            </div>
            <Badge variant="blue" size="sm">
              Direct Research Desk
            </Badge>
          </div>

          {/* ERROR STATE BANNER */}
          {submissionError && (
            <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3 text-xs text-red-800">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block mb-0.5">Submission Error</strong>
                <span>{submissionError}</span>
              </div>
            </div>
          )}

          {/* Field 1 & 2: Full Name & Corporate Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              id="full_name"
              label="Full Name"
              placeholder="e.g. Eleanor Vance"
              required
              value={formData.full_name}
              error={errors.full_name}
              onChange={(e) => {
                setFormData({ ...formData, full_name: e.target.value });
                if (errors.full_name) setErrors({ ...errors, full_name: undefined });
              }}
            />

            <Input
              id="email"
              label="Corporate Email"
              type="email"
              placeholder="e.vance@company.com"
              required
              value={formData.email}
              error={errors.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
            />
          </div>

          {/* Field 3 & 4: Organization & Research Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              id="organization"
              label="Organization"
              placeholder="e.g. Apex Global Strategy"
              value={formData.organization}
              onChange={(e) => {
                setFormData({ ...formData, organization: e.target.value });
              }}
            />

            <div>
              <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Research Service <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                className={`w-full px-3.5 py-2.5 bg-white text-slate-900 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-600 focus:border-brand-blue-600 transition-colors ${
                  errors.service ? "border-red-500" : "border-slate-300"
                }`}
                value={formData.service}
                onChange={(e) => {
                  setFormData({ ...formData, service: e.target.value });
                  if (errors.service) setErrors({ ...errors, service: undefined });
                }}
              >
                <option value="Primary Research">Primary Research</option>
                <option value="Qualitative Research">Qualitative Research</option>
                <option value="Quantitative Research">Quantitative Research</option>
                <option value="Custom Market Advisory">Custom Market Advisory</option>
              </select>
              {errors.service && (
                <p className="mt-1 text-xs text-red-600 font-medium">{errors.service}</p>
              )}
            </div>
          </div>

          {/* Field 5 & 6: Target Market / Geography & Project Scope */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              id="target_market"
              label="Target Market / Geography"
              placeholder="e.g. North America, DACH, Japan, Pan-European"
              value={formData.target_market}
              onChange={(e) => {
                setFormData({ ...formData, target_market: e.target.value });
              }}
              helperText="Specify key countries or target demographics."
            />

            <div>
              <label htmlFor="project_scope" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Project Scope
              </label>
              <select
                id="project_scope"
                className="w-full px-3.5 py-2.5 bg-white text-slate-900 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-600 focus:border-brand-blue-600 transition-colors"
                value={formData.project_scope}
                onChange={(e) => {
                  setFormData({ ...formData, project_scope: e.target.value });
                }}
              >
                <option value="One-Off Study">One-Off Study</option>
                <option value="Multi-Market Tracking">Multi-Market Tracking</option>
                <option value="Exploratory Scoping">Exploratory Scoping</option>
                <option value="Ongoing Program">Ongoing Program</option>
              </select>
            </div>
          </div>

          {/* Field 7: Message */}
          <div>
            <Textarea
              id="message"
              label="Message"
              placeholder="Describe your research questions, target audience profile, estimated sample size, or timeline expectations..."
              required
              rows={4}
              value={formData.message}
              error={errors.message}
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
              {isSubmitting ? "Submitting Enquiry..." : "Submit Research Enquiry"}
            </Button>
          </div>
        </form>
      )}
    </Card>
  );
}
