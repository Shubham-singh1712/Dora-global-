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
  "Primary Research",
  "Qualitative Research",
  "Quantitative Research",
  "Custom Market Advisory",
  "Translation for Market Research",
  "On-Site Interpretation",
  "Remote Interpretation",
  "Transcription",
  "In-Language Coding",
  "Survey Translation and Localization",
];

const MOCK_INDUSTRIES = [
  "Automotives",
  "Energy & Utilities",
  "Banking and Finance",
  "Food & Beverage",
  "Transportation",
  "Media & Entertainment",
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
    "Eleanor Vance",
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
    "Apex Mobility Group",
    "Horizon Energy Partners",
    "TechSphere Global",
    "Meridian Financial Group",
    "Quantix Analytics",
    "Synapse Strategy",
    "Vantage Consumer Brands",
    "Clarion Logistics",
    "Nordic Utilities AS",
    "Pinnacle Media Networks",
    "Luminary Automotive",
    "Al-Rashid Consulting",
    "Global Transit Solutions",
    "Pacific Rim Investments",
    "Artisan Foods Int.",
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
      "One-Off Study",
      "Multi-Market Tracking",
      "Exploratory Scoping",
      "Ongoing Program",
    ][i % 4],
    message: `Enquiry ${i + 1}: We are scoping a ${MOCK_SERVICES[i % MOCK_SERVICES.length].toLowerCase()} study in the ${MOCK_INDUSTRIES[i % MOCK_INDUSTRIES.length]} sector. Please advise on methodology recommendations and indicative timing.`,
    source: "website",
    status: MOCK_STATUSES[i % MOCK_STATUSES.length],
    created_at: new Date(Date.now() - i * 86400000 * 1.5).toISOString(),
    updated_at: new Date(Date.now() - i * 43200000).toISOString(),
  }));
}

export function getMockEnquiriesStore(): MockEnquiry[] {
  if (!global.__doraMockEnquiries) {
    global.__doraMockEnquiries = generateInitialMockEnquiries();
  }
  return global.__doraMockEnquiries;
}

export function addMockEnquiry(
  payload: Omit<MockEnquiry, "id" | "created_at" | "updated_at" | "status">
): MockEnquiry {
  const store = getMockEnquiriesStore();
  const newEnquiry: MockEnquiry = {
    ...payload,
    id: `mock-${String(store.length + 1).padStart(3, "0")}`,
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
  if (!target) return null;
  target.status = status;
  target.updated_at = new Date().toISOString();
  return target;
}
