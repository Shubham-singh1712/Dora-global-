import { EnquiryStatus } from "@/lib/supabase/types";

export interface MockEnquiry {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string | null;
  service: string;
  industry: string | null;
  project_type: string | null;
  message: string;
  source: string;
  status: EnquiryStatus;
  created_at: string;
  updated_at: string;
}

declare global {
  // eslint-disable-next-line no-var
  var __doraMockEnquiries: MockEnquiry[] | undefined;
}

const MOCK_SERVICES = [
  "Translation",
  "Remote Interpretation",
  "On-Site Interpretation",
  "Sign Language Interpretation",
  "Transcription",
  "In-Language Coding",
  "Website Globalization",
];

const MOCK_INDUSTRIES = [
  "Healthcare & Life Sciences",
  "Finance & Banking",
  "Technology & Software",
  "Legal & Regulatory",
  "Retail & E-commerce",
  "Education & Publishing",
];

const MOCK_STATUSES: EnquiryStatus[] = [
  "new",
  "new",
  "new",
  "contacted",
  "in_progress",
  "closed",
];

function generateInitialMockEnquiries(): MockEnquiry[] {
  const names = [
    "Dr. Elena Vasquez",
    "James Okonkwo",
    "Mei-Ling Chen",
    "Stefan Hartmann",
    "Priya Nair",
    "Carlos Delgado",
    "Anya Petrova",
    "Kwame Asante",
    "Lena Brandt",
    "Ravi Krishnamurthy",
    "Sophie Lefebvre",
    "Omar Al-Rashid",
    "Ingrid Holmberg",
    "Chen Wei",
    "Fatima Al-Zahra",
    "Marco Bianchi",
  ];
  const companies = [
    "BioVance Therapeutics",
    "Horizon Capital Partners",
    "TechSphere Global",
    "Lex International LLP",
    "MediQuant AG",
    "Synapse Research",
    "Vantage Analytics",
    "Clarion Publishing",
    "Nordic Pharma AS",
    "Meridian Financial Group",
    "Luminary Tech",
    "Al-Rashid Consulting",
    "Scandinavian Research Institute",
    "Pacific Rim Investments",
    "Crescent Medical",
    "Romano & Partners",
  ];

  return names.map((name, i) => ({
    id: `mock-${String(i + 1).padStart(3, "0")}`,
    name,
    company: companies[i % companies.length],
    email: `${name.split(" ").pop()!.toLowerCase().replace(/[^a-z]/g, "")}@${companies[i % companies.length].toLowerCase().replace(/[^a-z]/g, "")}.com`,
    phone:
      i % 3 === 0
        ? null
        : `+${44 + i} ${700 + i} ${String(100000 + i * 7).slice(0, 6)}`,
    service: MOCK_SERVICES[i % MOCK_SERVICES.length],
    industry: MOCK_INDUSTRIES[i % MOCK_INDUSTRIES.length],
    project_type: [
      "One-Off Project Scope",
      "Ongoing Master Services Retainer",
      "Urgent / High-Priority Turnaround",
      "Formal Enterprise RFP / Tender",
    ][i % 4],
    message: `Enquiry ${i + 1}: We require specialized ${MOCK_SERVICES[i % MOCK_SERVICES.length].toLowerCase()} services for a multi-market engagement spanning Q${(i % 4) + 1}. Please advise on availability, accredited resource profiles, and indicative timelines for scoping.`,
    source: "website",
    status: MOCK_STATUSES[i % MOCK_STATUSES.length],
    created_at: new Date(Date.now() - i * 86400000 * 1.5).toISOString(),
    updated_at: new Date(Date.now() - i * 43200000).toISOString(),
  }));
}

export function getMockEnquiriesStore(): MockEnquiry[] {
  if (!globalThis.__doraMockEnquiries) {
    globalThis.__doraMockEnquiries = generateInitialMockEnquiries();
  }
  return globalThis.__doraMockEnquiries;
}

export function addMockEnquiry(
  payload: Omit<MockEnquiry, "id" | "status" | "created_at" | "updated_at">
): MockEnquiry {
  const store = getMockEnquiriesStore();
  const newEnquiry: MockEnquiry = {
    ...payload,
    id: `enq-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
    status: "new",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
  store.unshift(newEnquiry);
  return newEnquiry;
}

export function updateMockEnquiryStatus(
  id: string,
  status: EnquiryStatus
): MockEnquiry | null {
  const store = getMockEnquiriesStore();
  const target = store.find((e) => e.id === id);
  if (target) {
    target.status = status;
    target.updated_at = new Date().toISOString();
    return target;
  }
  return null;
}
