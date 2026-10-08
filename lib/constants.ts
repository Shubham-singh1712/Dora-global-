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
}

export const SERVICES_NAV_ITEMS: SubNavItem[] = [
  {
    label: "Primary Research",
    href: "/services/primary-research",
    description: "Direct respondent insights and customized primary intelligence.",
  },
  {
    label: "Qualitative Research",
    href: "/services/qualitative-research",
    description: "In-depth moderation, focus groups, and directional insights.",
  },
  {
    label: "Quantitative Research",
    href: "/services/quantitative-research",
    description: "Statistically robust surveys, market sizing, and data analytics.",
  },
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
    label: "Banking and Finance",
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

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    description: "Global research methodologies & intelligence",
    children: SERVICES_NAV_ITEMS,
  },
  {
    label: "Industries",
    href: "/industries",
    description: "Specialized sector market intelligence",
    children: INDUSTRIES_NAV_ITEMS,
  },
  { label: "About", href: "/about", description: "Mission, vision, and corporate principles" },
  { label: "Locations", href: "/locations", description: "Global operational coverage" },
  { label: "Blog", href: "/blog", description: "Perspectives and methodology briefings" },
  { label: "Careers", href: "/careers", description: "Professional opportunities" },
  { label: "Contact", href: "/contact", description: "Connect with our advisory team" },
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
    id: "multi-market-research",
    title: "Multi-Market Qualitative Research",
    category: "Primary Intelligence",
    description: "In-depth executive interviews, stakeholder panels, and native-language moderations across target international territories.",
    deliverables: ["Key Opinion Leader (KOL) moderation", "Cross-regional thematic analysis", "Synchronized multilingual transcripts"],
    href: "/services",
  },
  {
    id: "quantitative-fieldwork",
    title: "Cross-Border Quantitative Fieldwork",
    category: "Market Validation",
    description: "Rigorous sample design, localized questionnaire translation, and high-integrity data collection across B2B and institutional audiences.",
    deliverables: ["Verified enterprise panel recruitment", "Statistical variance modeling", "Multivariate cross-tabulations"],
    href: "/services",
  },
  {
    id: "language-localization",
    title: "Specialized Language Solutions",
    category: "Linguistic Precision",
    description: "Domain-specific translation and cultural adaptation delivered by certified subject-matter linguists for high-stakes regulatory and corporate communications.",
    deliverables: ["Certified technical & legal translation", "Subject-matter expert review", "Terminology memory governance"],
    href: "/services",
  },
  {
    id: "market-due-diligence",
    title: "Commercial Due Diligence Support",
    category: "Strategic Advisory",
    description: "Independent ground-level validation for cross-border mergers, competitive landscape mapping, and market entry feasibility studies.",
    deliverables: ["Competitor benchmarking", "Regulatory barrier assessments", "Channel partner audit trails"],
    href: "/services",
  },
];

export interface IndustryItem {
  id: string;
  title: string;
  focus: string;
  description: string;
  keyAreas: string[];
}

export const FEATURED_INDUSTRIES: IndustryItem[] = [
  {
    id: "life-sciences",
    title: "Life Sciences & Healthcare",
    focus: "Regulatory & Clinical",
    description: "Protocol localization, patient cohort surveys, and clinical trial participant recruitment with strict adherence to GxP and HIPAA guidelines.",
    keyAreas: ["Clinical trial documentation", "Physician advisory boards", "Medical device compliance"],
  },
  {
    id: "financial-services",
    title: "Banking & Financial Services",
    focus: "Institutional Research",
    description: "Macroeconomic sentiment tracking, investor perception studies, and confidential pre-deal investigative research.",
    keyAreas: ["Fintech regulatory analysis", "Institutional investor surveys", "Cross-border compliance"],
  },
  {
    id: "technology",
    title: "Technology & Enterprise Software",
    focus: "Digital Infrastructure",
    description: "Evaluation of enterprise buying cycles, CIO/CTO stakeholder interviews, and localized product adoption assessments across Tier 1 and emerging economies.",
    keyAreas: ["Enterprise software adoption", "Developer ecosystem research", "AI & cloud infrastructure studies"],
  },
  {
    id: "legal-regulatory",
    title: "Legal, Risk & Compliance",
    focus: "Jurisdictional Insight",
    description: "Multi-jurisdiction policy tracking, sworn and notarized legal translations, and international dispute support.",
    keyAreas: ["Cross-border litigation support", "Antitrust & trade policy analysis", "Certified evidentiary translation"],
  },
];

// ==========================================
// 7 CORE LANGUAGE SERVICES
// ==========================================
export interface LanguageService {
  id: string;
  title: string;
  iconName: "FileText" | "Headphones" | "Users" | "HandMetal" | "Mic" | "Binary" | "Globe";
  description: string;
  useCase: string;
  ctaText: string;
  ctaHref: string;
}

export const CORE_LANGUAGE_SERVICES: LanguageService[] = [
  {
    id: "translation",
    title: "Translation",
    iconName: "FileText",
    description: "Rigorous document, regulatory, and technical translation delivered by accredited subject-matter linguists with double-pass editorial review.",
    useCase: "Regulatory drug dossiers, cross-border legal contracts, audited financial disclosures, and corporate compliance filings.",
    ctaText: "Request Translation Scope",
    ctaHref: "/contact?service=Translation",
  },
  {
    id: "remote-interpretation",
    title: "Remote Interpretation",
    iconName: "Headphones",
    description: "High-definition Simultaneous and Consecutive Remote Interpretation (RSI) across video conferences, multinational panels, and virtual hearings.",
    useCase: "Multilingual investor calls, virtual cross-border depositions, multinational board meetings, and telemedicine consultations.",
    ctaText: "Book Remote Interpreters",
    ctaHref: "/contact?service=Remote+Interpretation",
  },
  {
    id: "on-site-interpretation",
    title: "On-Site Interpretation",
    iconName: "Users",
    description: "In-person professional conference and diplomatic interpreters deployed globally with complete audiovisual and booth logistics coordination.",
    useCase: "International trade summits, bilateral arbitration hearings, executive shareholder assemblies, and facility inspections.",
    ctaText: "Inquire for On-Site Coverage",
    ctaHref: "/contact?service=On-Site+Interpretation",
  },
  {
    id: "sign-language-interpretation",
    title: "Sign Language Interpretation",
    iconName: "HandMetal",
    description: "Certified sign language interpreters across regional sign varieties (ASL, BSL, IS, and regional variants) ensuring compliance and accessibility.",
    useCase: "Public stakeholder broadcasts, corporate town halls, judicial proceedings, and inclusive patient encounters.",
    ctaText: "Arrange Accessibility Support",
    ctaHref: "/contact?service=Sign+Language+Interpretation",
  },
  {
    id: "transcription",
    title: "Transcription",
    iconName: "Mic",
    description: "Verbatim, intelligent-verbatim, and time-stamped audio/video transcription paired with direct translation across complex acoustic conditions.",
    useCase: "In-depth research interviews, courtroom recordings, multilingual focus group recordings, and regulatory investigative hearings.",
    ctaText: "Submit Media for Transcription",
    ctaHref: "/contact?service=Transcription",
  },
  {
    id: "in-language-coding",
    title: "In-Language Coding",
    iconName: "Binary",
    description: "Native-language qualitative verbatim categorization, codeframe development, and sentiment mapping executed directly in the source idiom.",
    useCase: "Open-ended survey responses, international brand perception audits, and public sentiment tracking without translation skew.",
    ctaText: "Commission Coding Protocols",
    ctaHref: "/contact?service=In-Language+Coding",
  },
  {
    id: "website-globalization",
    title: "Website Globalization",
    iconName: "Globe",
    description: "End-to-end linguistic localization, CMS translation connectors, UI string testing, and multilingual SEO for multinational digital properties.",
    useCase: "Global enterprise web portals, international e-commerce platforms, customer self-service portals, and web app software.",
    ctaText: "Globalize Digital Platforms",
    ctaHref: "/contact?service=Website+Globalization",
  },
];

// ==========================================
// 7 TARGET INDUSTRIES
// ==========================================
export interface IndustrySupport {
  id: string;
  title: string;
  tagline: string;
  challenge: string;
  solution: string;
  keyApplications: string[];
}

export const TARGET_INDUSTRIES: IndustrySupport[] = [
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    tagline: "Clinical accuracy, patient safety, and multi-jurisdiction compliance",
    challenge: "Clinical trials and patient outcomes demand zero margin for error across multilingual protocols, consent forms, and regulatory filings.",
    solution: "DORA deploys medically certified linguists and physicians who specialize in clinical documentation, pharmacological labeling, and patient communication.",
    keyApplications: [
      "Clinical trial protocols & ICFs",
      "Investigator brochures & regulatory submissions",
      "Medical device IFUs & CE-mark labeling",
      "Telemedicine & bedside medical interpretation",
    ],
  },
  {
    id: "finance-banking",
    title: "Finance & Banking",
    tagline: "Audit-ready financial disclosure and real-time market communications",
    challenge: "Capital markets, institutional lenders, and asset managers operate under unforgiving disclosure deadlines and confidential transaction parameters.",
    solution: "Our teams deliver high-precision translation of SEC filings, M&A due diligence rooms, and simultaneous interpretation for quarterly earnings calls.",
    keyApplications: [
      "Annual reports, prospectuses & KIIDs",
      "Multilingual earnings calls & investor webcasts",
      "Cross-border M&A virtual data room translation",
      "Anti-Money Laundering (AML) documentation",
    ],
  },
  {
    id: "technology",
    title: "Technology & Software",
    tagline: "Agile product localization, UI string validation, and developer documentation",
    challenge: "Fast continuous-deployment cycles require seamless translation workflows that integrate directly with codebases and cloud repositories.",
    solution: "We provide automated CMS connectors, pseudo-localization testing, and specialized software localization engineers to accelerate global software releases.",
    keyApplications: [
      "Software UI, app strings & error catalogues",
      "API documentation & developer portals",
      "Continuous CI/CD localization pipelines",
      "Multilingual technical support repositories",
    ],
  },
  {
    id: "legal",
    title: "Legal & Regulatory",
    tagline: "Evidentiary integrity, sworn translations, and courtroom interpretation",
    challenge: "Disputes, cross-border arbitrations, and international antitrust investigations require sworn linguistic accuracy that withstands judicial scrutiny.",
    solution: "Certified legal linguists and court-accredited interpreters deliver notarized translations, evidentiary discovery transcription, and hearing interpretation.",
    keyApplications: [
      "Certified & notarized evidentiary translations",
      "Cross-border litigation & e-discovery coding",
      "Simultaneous arbitration & deposition interpretation",
      "International trade contracts & joint venture agreements",
    ],
  },
  {
    id: "retail-ecommerce",
    title: "Retail & E-commerce",
    tagline: "Culturally resonant transcreation, catalogue translation, and localized conversions",
    challenge: "Direct literal translation damages conversion rates; brands need localized tone of voice, currency conventions, and local buying incentives.",
    solution: "DORA provides transcreation, localized product catalogues, marketplace optimization, and customer service localization tailored to local purchase habits.",
    keyApplications: [
      "Product description & catalogue localization",
      "Multilingual search engine optimization (SEO)",
      "Checkout flows, terms of service & return policies",
      "Omnichannel marketing campaigns & digital copy",
    ],
  },
  {
    id: "education",
    title: "Education & Academic Publishing",
    tagline: "Academic rigor, accessible e-learning, and international student engagement",
    challenge: "Pedagogical content must maintain academic precision while accommodating diverse cultural references and reading comprehension levels.",
    solution: "We adapt curricula, scientific research papers, LMS courseware, and university admissions collateral for international student bodies and faculties.",
    keyApplications: [
      "Higher education curriculum & textbook translation",
      "Multilingual LMS courseware & instructional video subtitling",
      "Academic journal peer-review translation",
      "International student recruitment & credential evaluation",
    ],
  },
  {
    id: "media",
    title: "Media & Entertainment",
    tagline: "Subtitling, voiceover, dubbing, and culturally adapted storytelling",
    challenge: "Audiovisual media requires precise timecoding, lip-sync adaptation, and preservation of comedic, emotional, and dramatic nuances.",
    solution: "Our multimedia studio handles studio-grade voiceover, timed subtitling, audio description, and cultural sensitivity review across streaming and broadcast formats.",
    keyApplications: [
      "Broadcast & OTT subtitling and closed captioning",
      "Voiceover casting & synchronized dubbing",
      "Audio description & accessibility services",
      "Press releases, syndication articles & podcasts",
    ],
  },
];

// ==========================================
// LOCATIONS & CAPABILITIES
// ==========================================
export interface LocationEntry {
  id: string;
  country: string;
  city: string;
  serviceCoverage: string;
  contactLead: string;
  status: "Active Capability Hub" | "Coordinated Field Network";
}

export const GLOBAL_CAPABILITY_LOCATIONS: LocationEntry[] = [
  {
    id: "uk-london",
    country: "United Kingdom",
    city: "London",
    serviceCoverage: "EMEA Regional Management, Financial Translation, Legal Depositions, Remote Interpretation",
    contactLead: "emea-operations@doraresearch.com",
    status: "Active Capability Hub",
  },
  {
    id: "usa-newyork",
    country: "United States",
    city: "New York",
    serviceCoverage: "Americas Enterprise Solutions, Regulatory Filings, Sign Language Coordination, Life Sciences",
    contactLead: "americas-operations@doraresearch.com",
    status: "Active Capability Hub",
  },
  {
    id: "sg-singapore",
    country: "Singapore",
    city: "Singapore",
    serviceCoverage: "APAC Financial Hub, Cross-Border Transcription, In-Language Coding, Multilingual Fieldwork",
    contactLead: "apac-operations@doraresearch.com",
    status: "Active Capability Hub",
  },
  {
    id: "jp-tokyo",
    country: "Japan",
    city: "Tokyo",
    serviceCoverage: "East Asia Technology Localization, Technical Translation, Executive On-Site Interpretation",
    contactLead: "tokyo-desk@doraresearch.com",
    status: "Active Capability Hub",
  },
  {
    id: "de-frankfurt",
    country: "Germany",
    city: "Frankfurt",
    serviceCoverage: "Continental Europe Legal & Banking Support, Automotive & Industrial Terminology",
    contactLead: "frankfurt-desk@doraresearch.com",
    status: "Coordinated Field Network",
  },
  {
    id: "fr-paris",
    country: "France",
    city: "Paris",
    serviceCoverage: "Luxury, Retail & European Institutional Communications, Certified Translation",
    contactLead: "paris-desk@doraresearch.com",
    status: "Coordinated Field Network",
  },
  {
    id: "br-saopaulo",
    country: "Brazil",
    city: "São Paulo",
    serviceCoverage: "Latin America Field Research Coordination, Brazilian Portuguese & Spanish Localization",
    contactLead: "latam-operations@doraresearch.com",
    status: "Coordinated Field Network",
  },
  {
    id: "ae-dubai",
    country: "United Arab Emirates",
    city: "Dubai",
    serviceCoverage: "Middle East & North Africa (MENA) Arabic Translation, Conference Interpretation",
    contactLead: "mena-operations@doraresearch.com",
    status: "Coordinated Field Network",
  },
];

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
    title: "Methodological Checklists for Regulatory Life Science Translations",
    summary: "A practical framework examining dual-linguist validation, back-translation protocols, and audit trails required for GxP-compliant dossier submissions.",
    category: "Methodology Briefing",
    readTime: "6 min read",
    date: "October 2026",
    isDemo: true,
  },
  {
    id: "demo-art-2",
    slug: "remote-simultaneous-interpretation-standards",
    title: "Technical Resilience in High-Stakes Remote Simultaneous Interpretation",
    summary: "Analyzing audio fidelity standards, latency thresholds, and interpreter handover redundancies in hybrid multilateral conferences.",
    category: "Technical Report",
    readTime: "5 min read",
    date: "September 2026",
    isDemo: true,
  },
  {
    id: "demo-art-3",
    slug: "in-language-coding-vs-translated-verbatims",
    title: "In-Language Coding vs. Machine Pre-Translation in International Surveys",
    summary: "Why direct qualitative coding in native idiomatic source prevents nuanced sentiment distortion in emerging market respondent samples.",
    category: "Research Practice",
    readTime: "7 min read",
    date: "September 2026",
    isDemo: true,
  },
  {
    id: "demo-art-4",
    slug: "sign-language-accessibility-compliance-corporate",
    title: "Best Practices for Enterprise Sign Language Interpretation Integration",
    summary: "Guiding compliance officers on choosing between ASL, BSL, and International Sign for global annual general meetings and public disclosures.",
    category: "Accessibility & Governance",
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
    id: "proj-mgr-translation",
    title: "Senior Translation Project Manager",
    department: "Linguistic Operations",
    location: "London / Remote Flexible",
    type: "Full-Time",
    description: "Lead multi-market translation delivery, TMS workflow configuration, and quality audit trails for enterprise clientele.",
  },
  {
    id: "interpretation-coordinator",
    title: "Simultaneous Interpretation Coordinator",
    department: "Events & Remote Services",
    location: "New York / Remote Flexible",
    type: "Full-Time",
    description: "Manage technical RSI platform setups, interpreter booth logistics, and simultaneous interpreter scheduling globally.",
  },
  {
    id: "in-language-coding-analyst",
    title: "Multilingual Qualitative Coding Specialist",
    department: "Research & Analytics",
    location: "Global Remote",
    type: "Contract / Project-Based",
    description: "Develop robust codeframes, execute native-language sentiment tagging, and categorize open-ended survey datasets across target languages.",
  },
  {
    id: "accredited-court-interpreter",
    title: "Certified Conference & Legal Interpreters",
    department: "Global Network",
    location: "Various Global Locations",
    type: "Freelance Network",
    description: "Join our roster of certified conference, deposition, and medical interpreters across specialized technical domain pairs.",
  },
];

// ==========================================
// COMPANY CONSTANTS
// ==========================================
export const COMPANY_INFO = {
  name: "DORA Global Research",
  tagline: "International Market Intelligence & Precision Language Solutions",
  description:
    "DORA Global Research delivers rigorous international market intelligence, cross-border fieldwork, and specialized linguistic solutions to global enterprises, institutional investors, and advisory firms.",
  contacts: {
    email: "inquiries@doraresearch.com",
    headquarters: "London • New York • Singapore • Tokyo",
    support: "+1 (800) 412-DORA",
  },
  accreditations: [
    "ESOMAR Corporate Member Standards",
    "ISO 17100 Certified Translation Management",
    "ISO 27001 Information Security Governance",
  ],
};
