import { z } from "zod";

/**
 * Basic text sanitizer to prevent script injection and normalize whitespace.
 */
function sanitizeText(value: string): string {
  return value
    .replace(/<[^>]*>?/gm, "") // Strip HTML tags
    .trim();
}

/**
 * Zod validation schema for enquiry submissions.
 */
export const enquirySchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(120, { message: "Name cannot exceed 120 characters." })
    .transform(sanitizeText),

  company: z
    .string()
    .max(160, { message: "Company name cannot exceed 160 characters." })
    .transform(sanitizeText)
    .optional()
    .nullable()
    .transform((val) => (val && val.length > 0 ? val : null)),

  email: z
    .string()
    .email({ message: "Please provide a valid corporate email address." })
    .max(160, { message: "Email cannot exceed 160 characters." })
    .transform((val) => sanitizeText(val).toLowerCase()),

  phone: z
    .string()
    .max(50, { message: "Phone number cannot exceed 50 characters." })
    .transform(sanitizeText)
    .optional()
    .nullable()
    .transform((val) => (val && val.length > 0 ? val : null)),

  service: z
    .string()
    .min(2, { message: "Please select a service capability." })
    .max(120, { message: "Service value is too long." })
    .transform(sanitizeText),

  industry: z
    .string()
    .max(120, { message: "Industry selection is too long." })
    .transform(sanitizeText)
    .optional()
    .nullable()
    .transform((val) => (val && val.length > 0 ? val : null)),

  project_type: z
    .string()
    .max(120, { message: "Project type is too long." })
    .transform(sanitizeText)
    .optional()
    .nullable()
    .transform((val) => (val && val.length > 0 ? val : null)),

  message: z
    .string()
    .min(10, { message: "Message must contain at least 10 characters." })
    .max(4000, { message: "Message cannot exceed 4000 characters." })
    .transform(sanitizeText),

  source: z
    .string()
    .max(50)
    .transform(sanitizeText)
    .optional()
    .default("website"),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
