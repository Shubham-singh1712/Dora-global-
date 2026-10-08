export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  whatIsTitle: string;
  whatIsDescription: string[];
  understandTitle: string;
  understandPoints: { title: string; description: string }[];
  methodsTitle?: string;
  methods?: { name: string; description: string }[];
  researchAreasTitle?: string;
  researchAreas?: { title: string; description: string }[];
  useCasesTitle: string;
  useCases: { title: string; description: string }[];
  whyDoraPoints: { title: string; description: string }[];
  ctaTitle: string;
  ctaButtonText: string;
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  "primary-research": {
    id: "primary-research",
    slug: "primary-research",
    title: "Primary Research",
    shortDescription:
      "First-hand market intelligence gathered directly from target stakeholders, decision-makers, and industry participants.",
    heroBadge: "Primary Intelligence",
    heroTitle: "Primary Research That Turns Questions Into Strategic Clarity",
    heroDescription:
      "Gather direct, unbiased insights straight from target market audiences, industry leaders, and consumers to guide high-stakes business decisions.",
    whatIsTitle: "What is Primary Research?",
    whatIsDescription: [
      "Primary research involves collecting original, tailored data directly from target audiences rather than relying on existing secondary reports or syndicated studies.",
      "By interacting directly with verified respondents, organizations gain exclusive insights customized precisely to their strategic questions, product roadmaps, or market entry hypotheses.",
    ],
    understandTitle: "What We Help You Understand",
    understandPoints: [
      {
        title: "Direct Respondent Insights",
        description: "Unfiltered feedback directly from target buyers, key opinion leaders, and industry specialists.",
      },
      {
        title: "Customer & Buyer Behaviour",
        description: "Clear visibility into decision triggers, purchase criteria, and brand evaluation processes.",
      },
      {
        title: "Market Exploration & Entry",
        description: "First-hand evaluation of emerging market dynamics, customer demand, and competitive white space.",
      },
      {
        title: "Decision Support & Validation",
        description: "Empirical validation for strategic investments, capital allocation, and commercial expansion.",
      },
      {
        title: "Custom Research Architecture",
        description: "Tailored methodologies engineered specifically around your organization's unique research objectives.",
      },
    ],
    useCasesTitle: "Typical Use Cases",
    useCases: [
      {
        title: "Market Entry & Expansion Feasibility",
        description: "Evaluating target market size, buyer readiness, and channel dynamics before committing capital.",
      },
      {
        title: "Competitive Landscape Mapping",
        description: "Understanding competitor positioning, pricing expectations, and buyer sentiment.",
      },
      {
        title: "Product & Concept Validation",
        description: "Testing product concepts, messaging, and feature prioritization directly with prospective end users.",
      },
      {
        title: "Executive & B2B Stakeholder Audits",
        description: "Conducting specialized research with C-suite executives, procurement leads, and domain experts.",
      },
    ],
    whyDoraPoints: [
      {
        title: "Rigorous Respondent Verification",
        description: "Multi-step screening to ensure all respondents strictly match target professional and demographic profiles.",
      },
      {
        title: "Global Reach & Local Execution",
        description: "Seamless fieldwork execution across global hubs with native-language understanding.",
      },
      {
        title: "Actionable Strategic Output",
        description: "Synthesis of primary findings into clear executive briefings focused on practical commercial decisions.",
      },
    ],
    ctaTitle: "Start a Research Conversation",
    ctaButtonText: "Discuss Your Primary Research Needs",
  },
  "qualitative-research": {
    id: "qualitative-research",
    slug: "qualitative-research",
    title: "Qualitative Research",
    shortDescription:
      "Deep directional insights uncovering underlying motivations, attitudes, and decision drivers through expert moderation.",
    heroBadge: "Depth & Context",
    heroTitle: "Qualitative Research That Reveals the 'Why' Behind Behaviour",
    heroDescription:
      "Uncover nuanced perceptions, emotional drivers, and decision-making context through structured interviews, focus discussions, and exploratory studies.",
    whatIsTitle: "What Qualitative Research Helps Reveal",
    whatIsDescription: [
      "While quantitative data indicates scale and frequency, qualitative research provides essential context—explaining why customers hold specific attitudes or choose one solution over another.",
      "Through structured open-ended dialogue, qualitative research captures unarticulated needs, subtle friction points, and deep brand perceptions that standardized surveys often miss.",
    ],
    understandTitle: "Why Qualitative Insight Matters",
    understandPoints: [
      {
        title: "Uncovering Deep Motivations",
        description: "Understanding the emotional and contextual reasons guiding customer choices and brand loyalty.",
      },
      {
        title: "Contextual Decision Drivers",
        description: "Identifying real-world friction points, evaluation criteria, and trade-off considerations.",
      },
      {
        title: "Testing & Refining Concepts",
        description: "Exploring immediate reactions to new service models, messaging frameworks, or value propositions.",
      },
      {
        title: "In-Depth Stakeholder Perspectives",
        description: "Gaining rich, qualitative narratives from key decision-makers and specialized consumer segments.",
      },
    ],
    methodsTitle: "Methods & Approaches",
    methods: [
      {
        name: "In-Depth Interviews (IDIs)",
        description: "One-on-one sessions led by senior moderators to explore detailed individual experiences and perspectives.",
      },
      {
        name: "Focus Groups & Panels",
        description: "Interactive group sessions designed to observe group dynamics, consensus, and contrasting viewpoints.",
      },
      {
        name: "Consumer Discussions",
        description: "Structured qualitative dialogues designed to explore daily habits, brand perceptions, and usage patterns.",
      },
      {
        name: "Exploratory Research",
        description: "Open-ended inquiry used at the initial phase of project scoping to formulate precise hypotheses.",
      },
    ],
    useCasesTitle: "Typical Applications",
    useCases: [
      {
        title: "Brand Health & Perception Audits",
        description: "Exploring how target audiences truly view your brand relative to market alternatives.",
      },
      {
        title: "Message & Narrative Testing",
        description: "Evaluating how positioning language resonates across key audience segments before campaign launch.",
      },
      {
        title: "User Experience & Journey Mapping",
        description: "Identifying qualitative friction points across the customer onboarding and engagement journey.",
      },
      {
        title: "Pre-Launch Concept Evaluation",
        description: "Gathering detailed qualitative feedback on early product definitions and service packages.",
      },
    ],
    whyDoraPoints: [
      {
        title: "Expert Moderation",
        description: "Seasoned moderators skilled at probing beneath surface-level answers while remaining strictly neutral.",
      },
      {
        title: "Nuanced Thematic Analysis",
        description: "Structured coding and synthesis that turns hours of conversation into distilled strategic takeaways.",
      },
      {
        title: "Native Idiomatic Understanding",
        description: "Conducting interviews in respondents' native language to capture authentic cultural nuances.",
      },
    ],
    ctaTitle: "Discuss Your Research Need",
    ctaButtonText: "Connect with Our Qualitative Leads",
  },
  "quantitative-research": {
    id: "quantitative-research",
    slug: "quantitative-research",
    title: "Quantitative Research",
    shortDescription:
      "Statistically robust measurement and data-driven analysis to validate market sizing, trends, and segment preferences.",
    heroBadge: "Data & Scale",
    heroTitle: "Quantitative Research Built for Statistical Precision",
    heroDescription:
      "Measure market demand, quantify consumer sentiment, and validate strategic hypotheses with statistically sound survey design and analysis.",
    whatIsTitle: "What Quantitative Research Helps Measure",
    whatIsDescription: [
      "Quantitative research provides numerical precision and statistical confidence, allowing teams to validate hypotheses across statistically representative sample populations.",
      "Through structured surveys and data analysis, quantitative research measures market size, segment distribution, preference rankings, and trend benchmarks.",
    ],
    understandTitle: "Research Areas & Measurement Capabilities",
    understandPoints: [
      {
        title: "Structured Surveys",
        description: "Meticulously designed survey instruments optimized for high completion rates and data accuracy.",
      },
      {
        title: "Measurable Consumer Responses",
        description: "Quantifying audience attitudes, feature preferences, price tolerance, and satisfaction levels.",
      },
      {
        title: "Market Sizing & Share Estimates",
        description: "Building empirical models to estimate addressable market size, penetration, and growth vector.",
      },
      {
        title: "Trend Measurement & Tracking",
        description: "Establishing longitudinal baselines to measure sentiment changes and brand health metrics over time.",
      },
      {
        title: "Audience Segmentation",
        description: "Clustering survey respondents into distinct, actionable behavioral and demographic segments.",
      },
      {
        title: "Comparative Analysis",
        description: "Benchmarking performance, satisfaction, and awareness metrics against competitors or historic baselines.",
      },
    ],
    useCasesTitle: "Typical Applications",
    useCases: [
      {
        title: "Customer Satisfaction & NPS Tracking",
        description: "Measuring customer loyalty, retention indicators, and service benchmarks across touchpoints.",
      },
      {
        title: "Market Opportunity Sizing",
        description: "Quantifying potential demand and adoption intent for new products or geographic markets.",
      },
      {
        title: "Price Sensitivity & Willingness to Pay",
        description: "Using structured pricing models to analyze optimal price points and revenue potential.",
      },
      {
        title: "Feature Prioritization & Trade-Off Analysis",
        description: "Ranking product features and service enhancements according to consumer utility.",
      },
    ],
    whyDoraPoints: [
      {
        title: "Verified Sample Integrity",
        description: "Multi-layered panel validation to filter fraudulent responses and guarantee data quality.",
      },
      {
        title: "Methodological Precision",
        description: "Survey flow design engineered to minimize response bias, fatigue, and framing effects.",
      },
      {
        title: "Clear Data Visualization",
        description: "Delivering clean cross-tabulations and executive dashboards ready for stakeholder presentation.",
      },
    ],
    ctaTitle: "Talk to Our Research Team",
    ctaButtonText: "Schedule a Quantitative Scoping Call",
  },
};

export const SERVICES_LIST = Object.values(SERVICES_DATA);
