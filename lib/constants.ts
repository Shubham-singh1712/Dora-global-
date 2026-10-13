export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: SubNavItem[];
}

export interface SubNavItem {
  label: string;
  href: string;
  description: string;
  section?: "market-research" | "language-solutions";
}

export const SERVICES_NAV_ITEMS: SubNavItem[] = [
  {
    label: "Primary Research",
    href: "/services/primary-research",
    description: "Direct respondent insights and customized primary intelligence.",
    section: "market-research",
  },
  {
    label: "Qualitative Research",
    href: "/services/qualitative-research",
    description: "In-depth moderation, focus groups, and directional insights.",
    section: "market-research",
  },
  {
    label: "Quantitative Research",
    href: "/services/quantitative-research",
    description: "Statistically robust surveys, market sizing, and data analytics.",
    section: "market-research",
  },
];

export const LANGUAGE_SOLUTIONS_NAV_ITEMS: SubNavItem[] = [
  {
    label: "Translation",
    href: "/services/translation",
    description: "Surveys, guides, stimulus materials, and reporting translation.",
    section: "language-solutions",
  },
  {
    label: "On-Site Interpretation",
    href: "/services/on-site-interpretation",
    description: "In-person simultaneous & consecutive interpreters for facility sessions.",
    section: "language-solutions",
  },
  {
    label: "Remote Interpretation",
    href: "/services/remote-interpretation",
    description: "Real-time simultaneous interpretation across virtual platforms.",
    section: "language-solutions",
  },
  {
    label: "Transcription",
    href: "/services/transcription",
    description: "Verbatim and time-stamped audio/video transcription with direct translation.",
    section: "language-solutions",
  },
  {
    label: "In-Language Coding",
    href: "/services/in-language-coding",
    description: "Categorizing open-ended survey verbatims directly in source idioms.",
    section: "language-solutions",
  },
  {
    label: "Survey Translation & Localization",
    href: "/services/survey-localization",
    description: "Cultural adaptation and cognitive calibration of survey instruments.",
    section: "language-solutions",
  },
];

export const ALL_SERVICES_NAV_ITEMS: SubNavItem[] = [
  ...SERVICES_NAV_ITEMS,
  ...LANGUAGE_SOLUTIONS_NAV_ITEMS,
];

export const INDUSTRIES_NAV_ITEMS: SubNavItem[] = [
  {
    label: "Automotives",
    href: "/industries/automotives",
    description: "EV adoption, buyer behavior, and mobility market intelligence.",
  },
  {
    label: "Energy & Utilities",
    href: "/industries/energy-utilities",
    description: "Ratepayer sentiment, renewable energy, and grid transition.",
  },
  {
    label: "Banking & Finance",
    href: "/industries/banking-finance",
    description: "Financial product adoption, digital banking CX, and investor trust.",
  },
  {
    label: "Food & Beverage",
    href: "/industries/food-beverage",
    description: "CPG taste testing, dietary trends, and package design impact.",
  },
  {
    label: "Transportation",
    href: "/industries/transportation",
    description: "Passenger travel habits, ticketing apps, and freight logistics.",
  },
  {
    label: "Media & Entertainment",
    href: "/industries/media-entertainment",
    description: "Audience streaming habits, gaming engagement, and media trends.",
  },
];

export const ABOUT_NAV_ITEMS: SubNavItem[] = [
  {
    label: "About DORA",
    href: "/about",
    description: "Our mission, research philosophy, and governance principles.",
  },
  {
    label: "Global Coverage",
    href: "/locations",
    description: "Fieldwork reach across the Americas, EMEA, and Asia-Pacific.",
  },
  {
    label: "Careers",
    href: "/careers",
    description: "Opportunities across quantitative, qualitative, and operations.",
  },
];

export const INSIGHTS_NAV_ITEMS: SubNavItem[] = [
  {
    label: "Blog & Perspectives",
    href: "/blog",
    description: "Methodology perspectives, briefing papers, and research practice notes.",
  },
  {
    label: "Qualitative Research Design",
    href: "/blog/evaluating-regulatory-translation-protocols",
    description: "Multi-market qualitative studies and cross-cultural moderation frameworks.",
  },
  {
    label: "Quantitative Sample Integrity",
    href: "/blog/remote-simultaneous-interpretation-standards",
    description: "Safeguarding statistical validity in cross-border survey research.",
  },
  {
    label: "In-Language Qualitative Coding",
    href: "/blog/in-language-coding-vs-translated-verbatims",
    description: "Analyzing verbatims in source idioms to prevent sentiment distortion.",
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    description: "Global research methodologies & language solutions",
    children: ALL_SERVICES_NAV_ITEMS,
  },
  {
    label: "Industries",
    href: "/industries",
    description: "Specialized sector market intelligence",
    children: INDUSTRIES_NAV_ITEMS,
  },
  {
    label: "About",
    href: "/about",
    description: "Mission, research philosophy, and governance principles",
  },
  {
    label: "Insights",
    href: "/blog",
    description: "Methodology perspectives, briefings, and articles",
    children: INSIGHTS_NAV_ITEMS,
  },
  { label: "Contact", href: "/contact", description: "Connect with our research team" },
];

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  href: string;
}

export const FEATURED_SERVICES: ServiceItem[] = [
  {
    id: "primary-research",
    title: "Primary Research",
    category: "Market Intelligence",
    description: "Original data collection gathered directly from target audiences, decision-makers, and industry participants to answer specific strategic questions.",
    deliverables: ["Direct stakeholder feedback", "Custom study architecture", "Actionable executive synthesis"],
    href: "/services/primary-research",
  },
  {
    id: "qualitative-research",
    title: "Qualitative Research",
    category: "Depth & Context",
    description: "In-depth moderation, exploratory interviews, and focus groups uncovering the attitudes, motivations, and perceptions that drive behavior.",
    deliverables: ["In-Depth Interviews (IDIs)", "Focus group moderation", "Thematic perception mapping"],
    href: "/services/qualitative-research",
  },
  {
    id: "quantitative-research",
    title: "Quantitative Research",
    category: "Data & Scale",
    description: "Statistically robust measurement and data analysis to quantify market demand, validate hypotheses, and benchmark performance.",
    deliverables: ["Survey design & execution", "Audience segmentation", "Market sizing & trend analysis"],
    href: "/services/quantitative-research",
  },
];

export const FEATURED_LANGUAGE_SERVICES: ServiceItem[] = [
  {
    id: "translation",
    title: "Translation for Market Research",
    category: "Linguistic Precision",
    description: "Methodologically faithful translation of surveys, discussion guides, stimulus concepts, and reporting materials across language markets.",
    deliverables: ["Questionnaire & guide translation", "Stimulus & concept adaptation", "Harmonized terminology glossaries"],
    href: "/services/translation",
  },
  {
    id: "on-site-interpretation",
    title: "On-Site Interpretation",
    category: "In-Person Fieldwork",
    description: "Simultaneous and consecutive interpretation for viewing facility focus groups, IDIs, central location tests, and client backrooms.",
    deliverables: ["Multichannel headset audio", "Live client backroom interpretation", "Immediate post-session debriefs"],
    href: "/services/on-site-interpretation",
  },
  {
    id: "remote-interpretation",
    title: "Remote Interpretation",
    category: "Virtual Fieldwork",
    description: "High-definition remote simultaneous interpretation for online focus groups, web-enabled IDIs, and virtual collaboration portals.",
    deliverables: ["Platform channel routing", "Dual-interpreter relays", "Isolated audio channel recording"],
    href: "/services/remote-interpretation",
  },
  {
    id: "transcription",
    title: "Transcription",
    category: "Audio & Video",
    description: "Verbatim and time-stamped transcription of qualitative recordings paired with direct English or multi-language translation.",
    deliverables: ["Time-stamped transcripts", "Speaker-attributed dialog", "Qualitative software-ready outputs"],
    href: "/services/transcription",
  },
  {
    id: "in-language-coding",
    title: "In-Language Coding",
    category: "Verbatim Intelligence",
    description: "Categorizing and classifying open-ended survey verbatims directly in source idioms to safeguard authentic sentiment.",
    deliverables: ["Unified multilingual codeframes", "Net & sub-net hierarchies", "SPSS / Excel-ready datasets"],
    href: "/services/in-language-coding",
  },
  {
    id: "survey-localization",
    title: "Survey Translation and Localization",
    category: "Measurement Validity",
    description: "Cultural and cognitive adaptation of survey questionnaires, rating scales, and demographic measures ensuring cross-market comparability.",
    deliverables: ["Rating scale calibration", "Cognitive pre-testing audits", "In-tool survey platform overlay QA"],
    href: "/services/survey-localization",
  },
];

export interface IndustryItem {
  id: string;
  title: string;
  focus: string;
  description: string;
  keyAreas: string[];
  href: string;
}

export const FEATURED_INDUSTRIES: IndustryItem[] = [
  {
    id: "automotives",
    title: "Automotives",
    focus: "Mobility & EV Adoption",
    description: "Buyer behavior, electric vehicle adoption, and in-car digital experience research for vehicle manufacturers and mobility providers.",
    keyAreas: ["EV adoption trends", "Connected cockpit feedback", "Brand consideration audits"],
    href: "/industries/automotives",
  },
  {
    id: "energy-utilities",
    title: "Energy & Utilities",
    focus: "Clean Energy Transition",
    description: "Ratepayer sentiment, renewable energy adoption, smart meter feedback, and utility customer experience studies.",
    keyAreas: ["Renewable energy sentiment", "Smart utility adoption", "Ratepayer customer experience"],
    href: "/industries/energy-utilities",
  },
  {
    id: "banking-finance",
    title: "Banking and Finance",
    focus: "Financial Customer Insights",
    description: "Customer onboarding, mobile banking usability, wealth management expectations, and fintech trend analysis.",
    keyAreas: ["Digital banking CX", "Financial product perception", "Trust & loyalty benchmarking"],
    href: "/industries/banking-finance",
  },
  {
    id: "food-beverage",
    title: "Food & Beverage",
    focus: "Consumer CPG & Taste Trends",
    description: "Flavor testing, wellness trends, packaging perception, and channel shopping behavior across consumer markets.",
    keyAreas: ["Flavor & concept testing", "Health & wellness trends", "Package design evaluation"],
    href: "/industries/food-beverage",
  },
  {
    id: "transportation",
    title: "Transportation",
    focus: "Passenger & Freight Mobility",
    description: "Commuter behavior, digital booking satisfaction, airline and rail service expectations, and logistics feedback.",
    keyAreas: ["Passenger travel habits", "Digital ticketing app UX", "Commercial freight priorities"],
    href: "/industries/transportation",
  },
  {
    id: "media-entertainment",
    title: "Media & Entertainment",
    focus: "Audience & Streaming Habits",
    description: "Streaming consumption, gaming engagement, content concept testing, and media sentiment analysis.",
    keyAreas: ["Streaming subscription trends", "Gaming & interactive media", "Concept & trailer evaluation"],
    href: "/industries/media-entertainment",
  },
];

// ==========================================
// GLOBAL RESEARCH COVERAGE REGIONS
// ==========================================
export interface CoverageRegion {
  id: string;
  region: string;
  focus: string;
  description: string;
  capabilities: string[];
}

export const GLOBAL_RESEARCH_COVERAGE: CoverageRegion[] = [
  {
    id: "americas",
    region: "Americas",
    focus: "North & South American Markets",
    description: "Consumer, enterprise B2B, and sector-specific research coverage across North American and Latin American commercial markets.",
    capabilities: ["B2B decision-maker interviews", "Consumer sentiment surveys", "Cross-regional concept testing"],
  },
  {
    id: "emea",
    region: "Europe, Middle East & Africa",
    focus: "EMEA Commercial Jurisdictions",
    description: "Multi-market research design addressing diverse regulatory landscapes, language nuances, and mature commercial sectors.",
    capabilities: ["Multi-country qualitative studies", "Cross-border market sizing", "Sector policy & utility insight"],
  },
  {
    id: "apac",
    region: "Asia-Pacific",
    focus: "APAC Growth & Consumer Hubs",
    description: "Deep qualitative moderation and large-scale quantitative survey capability tailored to diverse Asian consumer and industrial dynamics.",
    capabilities: ["Localized qualitative moderation", "Mobile & digital consumer surveys", "Emerging market trend tracking"],
  },
];

// Compatibility alias for existing components
export const GLOBAL_CAPABILITY_LOCATIONS = GLOBAL_RESEARCH_COVERAGE.map((c) => ({
  id: c.id,
  country: c.region,
  city: c.focus,
  serviceCoverage: c.description,
  contactLead: "Regional Inquiries Welcome",
  status: "Active Coverage Region" as const,
}));

// ==========================================
// BLOG SEED ARTICLES (MARKED AS DEMO / SEED)
// ==========================================
export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  date: string;
  isDemo: true;
}

export const SEED_BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "demo-art-1",
    slug: "evaluating-regulatory-translation-protocols",
    title: "Designing Multi-Market Qualitative Research Programs",
    summary: "A practical framework examining moderation guidelines, cross-cultural nuance, and synthesis models for international qualitative studies.",
    category: "Methodology Briefing",
    readTime: "5 min read",
    date: "October 2026",
    isDemo: true,
  },
  {
    id: "demo-art-2",
    slug: "remote-simultaneous-interpretation-standards",
    title: "Ensuring Sample Integrity in Cross-Border Quantitative Studies",
    summary: "Exploring multi-step screening methods and survey design structures that safeguard statistical validity in international research.",
    category: "Technical Report",
    readTime: "5 min read",
    date: "September 2026",
    isDemo: true,
  },
  {
    id: "demo-art-3",
    slug: "in-language-coding-vs-translated-verbatims",
    title: "In-Language Qualitative Coding vs. Direct Translation in Survey Analysis",
    summary: "Why analyzing qualitative verbatims directly in source idioms prevents nuanced sentiment distortion in emerging market respondent samples.",
    category: "Research Practice",
    readTime: "6 min read",
    date: "September 2026",
    isDemo: true,
  },
  {
    id: "demo-art-4",
    slug: "sign-language-accessibility-compliance-corporate",
    title: "Capturing Emerging Consumer Preferences in Fast-Moving Sectors",
    summary: "How agile research methodologies help organizations track rapid shifts in buyer behavior, sustainability expectations, and digital engagement.",
    category: "Sector Insights",
    readTime: "4 min read",
    date: "August 2026",
    isDemo: true,
  },
];

// ==========================================
// CAREERS OPPORTUNITIES
// ==========================================
export interface CareerArea {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export const CAREER_AREAS: CareerArea[] = [
  {
    id: "sr-quant-lead",
    title: "Senior Quantitative Research Lead",
    department: "Quantitative Practice",
    location: "Remote Flexible",
    type: "Full-Time",
    description: "Lead questionnaire architecture, statistical sample design, and analytical reporting for complex multi-market survey initiatives.",
  },
  {
    id: "qual-moderator",
    title: "Qualitative Research Moderator",
    department: "Qualitative Practice",
    location: "Remote Flexible",
    type: "Project-Based / Contract",
    description: "Conduct in-depth stakeholder interviews and focus group sessions, delivering synthesized thematic findings and strategic recommendations.",
  },
  {
    id: "research-ops-coordinator",
    title: "Research Operations Coordinator",
    department: "Operations & Delivery",
    location: "Remote Flexible",
    type: "Full-Time",
    description: "Manage project timelines, fieldwork coordination, quality assurance checkpoints, and client communications across active studies.",
  },
  {
    id: "market-analyst",
    title: "Market Intelligence Analyst",
    department: "Sector Insights",
    location: "Remote Flexible",
    type: "Full-Time",
    description: "Synthesize primary research datasets into clear executive briefings, category dashboards, and strategic presentations.",
  },
];

// ==========================================
// COMPANY CONSTANTS
// ==========================================
export const COMPANY_INFO = {
  name: "DORA Global Research",
  tagline: "International Market Research & Intelligence",
  description:
    "DORA Global Research delivers primary research, qualitative moderation, and quantitative intelligence across key global sectors to guide strategic decision-making.",
  contacts: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "doraglobal23@gmail.com",
    headquarters: "Chandigarh, India",
    support: "Online Inquiry & Consultations",
  },
  leadership: {
    founderAndCeo: "Vishal",
    display: "Vishal — Founder & CEO",
  },
};

