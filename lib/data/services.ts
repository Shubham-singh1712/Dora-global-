export interface ServiceWorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface RelatedServiceItem {
  title: string;
  slug: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  category: "Core Research Practice" | "Linguistic Solution for Research";
  practiceHighlights: string[];
  serviceDistinction: string;
  whatIsTitle: string;
  whatIsDescription: string[];
  questionsAnswered: string[];
  workflow: ServiceWorkflowStep[];
  deliverables: string[];
  relatedServices: RelatedServiceItem[];
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
    category: "Core Research Practice",
    practiceHighlights: [
      "Proprietary first-hand stakeholder data",
      "Multi-market fieldwork coordination",
      "Decision-focused strategic synthesis",
    ],
    serviceDistinction:
      "Unlike secondary desk research or syndicated industry reports, primary research collects original, custom data directly from verified market participants tailored specifically to your organization's unique commercial questions.",
    whatIsTitle: "What is Primary Research?",
    whatIsDescription: [
      "Primary research involves collecting original, tailored data directly from target audiences rather than relying on existing secondary reports or syndicated studies.",
      "By interacting directly with verified respondents, organizations gain exclusive insights customized precisely to their strategic questions, product roadmaps, or market entry hypotheses.",
    ],
    questionsAnswered: [
      "What unmet customer needs exist in our target segment that competitors currently overlook?",
      "How do enterprise buyers and procurement leads evaluate alternatives when selecting vendors?",
      "What regional, cultural, or logistical factors will impact our upcoming market entry?",
      "Which value propositions, messaging pillars, and feature sets resonate most effectively with high-value prospects?",
    ],
    workflow: [
      {
        step: "01",
        title: "Scope & Objective Framing",
        description:
          "Collaborating with your team to frame core business questions, define target respondent profiles, and agree on decision criteria.",
      },
      {
        step: "02",
        title: "Methodology & Instrument Design",
        description:
          "Developing tailored discussion guides, structured questionnaires, or hybrid protocols engineered around your research objectives.",
      },
      {
        step: "03",
        title: "Targeted Fieldwork Execution",
        description:
          "Engaging vetted participants across target markets with multi-tier screening to ensure verified professional and demographic criteria.",
      },
      {
        step: "04",
        title: "Synthesis & Executive Briefing",
        description:
          "Translating raw data and qualitative observations into clear executive briefings, cross-market comparisons, and strategic recommendations.",
      },
    ],
    deliverables: [
      "Executive findings presentation with strategic implications",
      "Verified respondent demographic and professional profile audit",
      "Cross-market comparison matrix highlighting regional nuances",
      "Summary briefing outlining commercial risks and opportunities",
    ],
    relatedServices: [
      {
        title: "Qualitative Research",
        slug: "qualitative-research",
        description:
          "Explore the deeper motivations, attitudes, and contextual reasons behind stakeholder decisions.",
      },
      {
        title: "Quantitative Research",
        slug: "quantitative-research",
        description:
          "Validate hypotheses with statistically robust sample sizing, incidence rates, and market measurement.",
      },
      {
        title: "Translation for Market Research",
        slug: "translation",
        description:
          "Ensure study materials, questionnaires, and discussion guides are linguistically harmonized across international markets.",
      },
    ],
    understandTitle: "What We Help You Understand",
    understandPoints: [
      {
        title: "Direct Respondent Insights",
        description:
          "Unfiltered feedback directly from target buyers, key opinion leaders, and industry specialists.",
      },
      {
        title: "Customer & Buyer Behaviour",
        description:
          "Clear visibility into decision triggers, purchase criteria, and brand evaluation processes.",
      },
      {
        title: "Market Exploration & Entry",
        description:
          "First-hand evaluation of emerging market dynamics, customer demand, and competitive white space.",
      },
      {
        title: "Decision Support & Validation",
        description:
          "Empirical validation for strategic investments, capital allocation, and commercial expansion.",
      },
      {
        title: "Custom Research Architecture",
        description:
          "Tailored methodologies engineered specifically around your organization's unique research objectives.",
      },
    ],
    useCasesTitle: "Typical Use Cases",
    useCases: [
      {
        title: "Market Entry & Expansion Feasibility",
        description:
          "Evaluating target market size, buyer readiness, and channel dynamics before committing capital.",
      },
      {
        title: "Competitive Landscape Mapping",
        description:
          "Understanding competitor positioning, pricing expectations, and buyer sentiment.",
      },
      {
        title: "Product & Concept Validation",
        description:
          "Testing product concepts, messaging, and feature prioritization directly with prospective end users.",
      },
      {
        title: "Executive & B2B Stakeholder Audits",
        description:
          "Conducting specialized research with C-suite executives, procurement leads, and domain experts.",
      },
    ],
    whyDoraPoints: [
      {
        title: "Rigorous Respondent Verification",
        description:
          "Multi-step screening to ensure all respondents strictly match target professional and demographic profiles.",
      },
      {
        title: "Cross-Market Execution",
        description:
          "Coordinated fieldwork execution across international markets with localized understanding.",
      },
      {
        title: "Clear Strategic Output",
        description:
          "Synthesis of primary findings into clear executive briefings focused on practical commercial decisions.",
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
    category: "Core Research Practice",
    practiceHighlights: [
      "Native-language moderation",
      "B2B stakeholder & consumer depth",
      "Structured thematic coding",
    ],
    serviceDistinction:
      "While quantitative surveys establish scale and statistical incidence, qualitative research unpacks the 'why'—exploring the behavioral motivations, emotional triggers, and contextual hesitations that guide consumer and B2B decisions.",
    whatIsTitle: "What Qualitative Research Helps Reveal",
    whatIsDescription: [
      "While quantitative data indicates scale and frequency, qualitative research provides essential context—explaining why customers hold specific attitudes or choose one solution over another.",
      "Through structured open-ended dialogue, qualitative research captures unarticulated needs, subtle friction points, and deep brand perceptions that standardized surveys often miss.",
    ],
    questionsAnswered: [
      "Why do target buyers hesitate or drop off at the final purchase evaluation stage?",
      "What emotional associations, habits, or misperceptions influence customer loyalty?",
      "How do users naturally interact with early concept prototypes and where do friction points arise?",
      "What unspoken priorities and decision criteria influence senior executive or clinical stakeholders?",
    ],
    workflow: [
      {
        step: "01",
        title: "Guide Calibration & Stimulus Design",
        description:
          "Developing structured discussion frameworks, projective techniques, and stimulus materials that encourage natural, candid responses.",
      },
      {
        step: "02",
        title: "Participant Vetting & Setup",
        description:
          "Screening specialized consumer or B2B respondents against strict qualification criteria to ensure authentic category experience.",
      },
      {
        step: "03",
        title: "Expert Moderation & Live Observation",
        description:
          "Conducting in-depth interviews or group sessions with experienced native moderators, while enabling client teams to observe in real time.",
      },
      {
        step: "04",
        title: "Thematic Coding & Insight Synthesis",
        description:
          "Analyzing transcripts and session recordings to extract recurring behavioral patterns, verbatim quotes, and actionable implications.",
      },
    ],
    deliverables: [
      "Comprehensive thematic synthesis deck with strategic takeaways",
      "Curated verbatim quote compendium organized by research theme",
      "High-fidelity session audio/video recordings and speaker-coded transcripts",
      "Persona journey maps and customer friction point summaries",
    ],
    relatedServices: [
      {
        title: "Primary Research",
        slug: "primary-research",
        description:
          "Ground qualitative findings within a broader strategic market intelligence framework.",
      },
      {
        title: "On-Site Interpretation",
        slug: "on-site-interpretation",
        description:
          "Equip client viewing suites with simultaneous spoken interpretation during live focus groups.",
      },
      {
        title: "Remote Interpretation",
        slug: "remote-interpretation",
        description:
          "Enable distributed teams to follow virtual interviews and digital focus groups in real time.",
      },
    ],
    understandTitle: "Why Qualitative Insight Matters",
    understandPoints: [
      {
        title: "Uncovering Deep Motivations",
        description:
          "Understanding the emotional and contextual reasons guiding customer choices and brand loyalty.",
      },
      {
        title: "Contextual Decision Drivers",
        description:
          "Identifying real-world friction points, evaluation criteria, and trade-off considerations.",
      },
      {
        title: "Testing & Refining Concepts",
        description:
          "Exploring immediate reactions to new service models, messaging frameworks, or value propositions.",
      },
      {
        title: "In-Depth Stakeholder Perspectives",
        description:
          "Gaining rich, qualitative narratives from key decision-makers and specialized consumer segments.",
      },
    ],
    methodsTitle: "Methods & Approaches",
    methods: [
      {
        name: "In-Depth Interviews (IDIs)",
        description:
          "One-on-one sessions led by senior moderators to explore detailed individual experiences and perspectives.",
      },
      {
        name: "Focus Groups & Panels",
        description:
          "Interactive group sessions designed to observe group dynamics, consensus, and contrasting viewpoints.",
      },
      {
        name: "Consumer Discussions",
        description:
          "Structured qualitative dialogues designed to explore daily habits, brand perceptions, and usage patterns.",
      },
      {
        name: "Exploratory Research",
        description:
          "Open-ended inquiry used at the initial phase of project scoping to formulate precise hypotheses.",
      },
    ],
    useCasesTitle: "Typical Applications",
    useCases: [
      {
        title: "Brand Health & Perception Audits",
        description:
          "Exploring how target audiences truly view your brand relative to market alternatives.",
      },
      {
        title: "Message & Narrative Testing",
        description:
          "Evaluating how positioning language resonates across key audience segments before campaign launch.",
      },
      {
        title: "User Experience & Journey Mapping",
        description:
          "Identifying qualitative friction points across the customer onboarding and engagement journey.",
      },
      {
        title: "Pre-Launch Concept Evaluation",
        description:
          "Gathering detailed qualitative feedback on early product definitions and service packages.",
      },
    ],
    whyDoraPoints: [
      {
        title: "Expert Moderation",
        description:
          "Seasoned moderators skilled at probing beneath surface-level answers while remaining strictly neutral.",
      },
      {
        title: "Nuanced Thematic Analysis",
        description:
          "Structured coding and synthesis that turns hours of conversation into distilled strategic takeaways.",
      },
      {
        title: "Native Idiomatic Understanding",
        description:
          "Conducting interviews in respondents' native language to capture authentic cultural nuances.",
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
    category: "Core Research Practice",
    practiceHighlights: [
      "Rigorous sample & quota design",
      "Multivariate statistical analysis",
      "Clean tabular & visual data exports",
    ],
    serviceDistinction:
      "Quantitative research provides numerical precision and statistical confidence, allowing teams to test hypotheses across representative sample sizes and measure market size, segment distribution, and brand metrics over time.",
    whatIsTitle: "What Quantitative Research Helps Measure",
    whatIsDescription: [
      "Quantitative research provides numerical precision and statistical confidence, allowing teams to validate hypotheses across statistically representative sample populations.",
      "Through structured surveys and data analysis, quantitative research measures market size, segment distribution, preference rankings, and trend benchmarks.",
    ],
    questionsAnswered: [
      "What is the statistically verified addressable market size across our target expansion territories?",
      "Which product feature combinations deliver the highest utility and willingness to pay?",
      "How do brand awareness, customer satisfaction, and Net Promoter Scores benchmark against competitors?",
      "What distinct behavioral or demographic clusters exist within our target customer population?",
    ],
    workflow: [
      {
        step: "01",
        title: "Sample Architecture & Quota Design",
        description:
          "Defining target populations, margin-of-error parameters, quota matrices, and screening criteria.",
      },
      {
        step: "02",
        title: "Questionnaire Engineering & QA",
        description:
          "Drafting balanced question flows, randomized rating scales, and logical branching optimized to prevent respondent fatigue.",
      },
      {
        step: "03",
        title: "Controlled Fieldwork & Data Hygiene",
        description:
          "Executing data collection with continuous real-time quality audits to remove fraudulent responses, speeders, and straight-liners.",
      },
      {
        step: "04",
        title: "Statistical Modeling & Cross-Tabulation",
        description:
          "Running significance testing, multivariate analyses, and cross-tabulations to generate executive-ready presentations and datasets.",
      },
    ],
    deliverables: [
      "Cleaned and weighted survey data files (SPSS, CSV, Excel)",
      "Comprehensive banner cross-tabulation tables with statistical significance markers",
      "Executive summary presentation with visual charts and strategic conclusions",
      "Segmentation profiles and key driver analysis models",
    ],
    relatedServices: [
      {
        title: "Survey Translation and Localization",
        slug: "survey-localization",
        description:
          "Calibrate rating scales and demographic categories for cross-market statistical comparability.",
      },
      {
        title: "In-Language Coding",
        slug: "in-language-coding",
        description:
          "Categorize open-ended survey verbatims directly in source languages without losing nuance.",
      },
      {
        title: "Primary Research",
        slug: "primary-research",
        description:
          "Combine quantitative measurement with tailored qualitative and stakeholder intelligence.",
      },
    ],
    understandTitle: "Research Areas & Measurement Capabilities",
    understandPoints: [
      {
        title: "Structured Surveys",
        description:
          "Meticulously designed survey instruments optimized for high completion rates and data accuracy.",
      },
      {
        title: "Measurable Consumer Responses",
        description:
          "Quantifying audience attitudes, feature preferences, price tolerance, and satisfaction levels.",
      },
      {
        title: "Market Sizing & Share Estimates",
        description:
          "Building empirical models to estimate addressable market size, penetration, and growth vector.",
      },
      {
        title: "Trend Measurement & Tracking",
        description:
          "Establishing longitudinal baselines to measure sentiment changes and brand health metrics over time.",
      },
      {
        title: "Audience Segmentation",
        description:
          "Clustering survey respondents into distinct, actionable behavioral and demographic segments.",
      },
      {
        title: "Comparative Analysis",
        description:
          "Benchmarking performance, satisfaction, and awareness metrics against competitors or historic baselines.",
      },
    ],
    useCasesTitle: "Typical Applications",
    useCases: [
      {
        title: "Customer Satisfaction & NPS Tracking",
        description:
          "Measuring customer loyalty, retention indicators, and service benchmarks across touchpoints.",
      },
      {
        title: "Market Opportunity Sizing",
        description:
          "Quantifying potential demand and adoption intent for new products or geographic markets.",
      },
      {
        title: "Price Sensitivity & Willingness to Pay",
        description:
          "Using structured pricing models to analyze optimal price points and revenue potential.",
      },
      {
        title: "Feature Prioritization & Trade-Off Analysis",
        description:
          "Ranking product features and service enhancements according to consumer utility.",
      },
    ],
    whyDoraPoints: [
      {
        title: "Verified Sample Integrity",
        description:
          "Multi-layered panel validation to filter fraudulent responses and guarantee data quality.",
      },
      {
        title: "Methodological Precision",
        description:
          "Survey flow design engineered to minimize response bias, fatigue, and framing effects.",
      },
      {
        title: "Clear Data Visualization",
        description:
          "Delivering clean cross-tabulations and executive dashboards ready for stakeholder presentation.",
      },
    ],
    ctaTitle: "Talk to Our Research Team",
    ctaButtonText: "Schedule a Quantitative Scoping Call",
  },

  "translation": {
    id: "translation",
    slug: "translation",
    title: "Translation for Market Research",
    shortDescription:
      "Methodologically faithful translation of surveys, discussion guides, stimulus boards, and executive findings across language markets.",
    heroBadge: "Linguistic Precision",
    heroTitle: "Translation for Market Research Built for Methodological Equivalence",
    heroDescription:
      "Translate questionnaires, discussion guides, stimulus concepts, and research materials with rigorous semantic precision and cross-cultural consistency.",
    category: "Linguistic Solution for Research",
    practiceHighlights: [
      "Methodological equivalence protocols",
      "Research-specialist linguists",
      "Longitudinal glossary tracking",
    ],
    serviceDistinction:
      "Unlike generic corporate translation, market research translation is tailored specifically to questionnaires, discussion guides, stimulus boards, and executive decks to ensure respondents interpret questions identically across every target language.",
    whatIsTitle: "What is Translation for Market Research?",
    whatIsDescription: [
      "Market research translation requires specialized linguistic adaptation tailored specifically to questionnaires, qualitative discussion guides, concept stimulus boards, and executive intelligence briefings.",
      "Unlike generalized corporate translation, market research translation demands semantic precision, scale consistency, and conversational naturalness so that respondents in every international market interpret questions identically and provide comparable data.",
    ],
    questionsAnswered: [
      "How can we ensure multi-country questionnaires measure identical cognitive concepts without cultural distortion?",
      "Are qualitative discussion guides phrased with the natural idiomatic cadence needed for moderators to build rapport?",
      "Will translated product concept stimulus boards preserve our core brand nuance in overseas markets?",
      "How do we maintain terminology harmonization across multiple waves of longitudinal tracking surveys?",
    ],
    workflow: [
      {
        step: "01",
        title: "Instrument Review & Glossary Alignment",
        description:
          "Reviewing survey routing, scale polarity, brand terminology, and technical concepts to establish an approved project glossary.",
      },
      {
        step: "02",
        title: "Research-Specialist Translation",
        description:
          "Executing forward translation by native linguists experienced in market research questionnaire conventions and scale logic.",
      },
      {
        step: "03",
        title: "Reconciliation & Back-Translation Audit",
        description:
          "Cross-reviewing localized files against source intent to eliminate ambiguities and preserve measurement consistency.",
      },
      {
        step: "04",
        title: "Formatted Delivery & Platform Handoff",
        description:
          "Delivering localized files mapped directly to questionnaire numbering, survey tool tables, or stimulus layouts.",
      },
    ],
    deliverables: [
      "Fieldwork-ready questionnaires mapped to source logic and question numbers",
      "Harmonized research glossary for multi-wave tracking consistency",
      "Localized qualitative discussion guides and moderator briefing notes",
      "Reconciliation audit notes documenting semantic decisions and cultural adaptations",
    ],
    relatedServices: [
      {
        title: "Survey Translation and Localization",
        slug: "survey-localization",
        description:
          "Comprehensive calibration of rating scales, demographic brackets, and in-tool platform testing.",
      },
      {
        title: "In-Language Coding",
        slug: "in-language-coding",
        description:
          "Analyze open-ended survey verbatims in their original language without translation distortion.",
      },
      {
        title: "Transcription",
        slug: "transcription",
        description:
          "Convert recorded qualitative sessions into structured, speaker-attributed transcripts.",
      },
    ],
    understandTitle: "How Translation Supports Global Research",
    understandPoints: [
      {
        title: "Questionnaire & Screener Translation",
        description:
          "Adapting complex quantitative survey logic, screening filters, and rating options for authentic local comprehension.",
      },
      {
        title: "Discussion Guides & Moderator Notes",
        description:
          "Equipping local qualitative moderators with natural idiomatic phrasing that facilitates conversational rapport and probing.",
      },
      {
        title: "Stimulus & Concept Testing Materials",
        description:
          "Translating product concept statements, brand boards, packaging claims, and storyboards while maintaining core brand intent.",
      },
      {
        title: "Open-Ended Verbatims & Reporting",
        description:
          "Translating qualitative participant narratives and full research decks into structured English for multinational project stakeholders.",
      },
      {
        title: "Harmonized Research Glossaries",
        description:
          "Maintaining study-specific terminology across multi-wave trackers and multi-country research programs.",
      },
      {
        title: "Cultural Appropriateness Screening",
        description:
          "Evaluating proposed brand names, survey wording, and concepts against local cultural sensitivities and linguistic nuances.",
      },
    ],
    methodsTitle: "Quality & Review Methodologies",
    methods: [
      {
        name: "Forward & Back-Translation",
        description:
          "Independent forward translation followed by blind back-translation to audit semantic fidelity and uncover ambiguities.",
      },
      {
        name: "Dual-Linguist Reconciliation",
        description:
          "Two experienced research linguists independently translating and reconciling findings with research leads.",
      },
      {
        name: "Cognitive Pre-Testing Review",
        description:
          "Reviewing translated survey questions against respondent processing tendencies to ensure conversational clarity.",
      },
      {
        name: "Terminology Harmonization",
        description:
          "Constructing and maintaining central glossaries to protect longitudinal trend comparisons across tracking waves.",
      },
    ],
    useCasesTitle: "Typical Use Cases",
    useCases: [
      {
        title: "Multi-Country Quantitative Tracking Studies",
        description:
          "Harmonizing questionnaires across recurring tracking waves to ensure historical trend comparability.",
      },
      {
        title: "Global Concept & Product Innovation Testing",
        description:
          "Translating descriptive concept sheets and benefit ladders for international consumer evaluation.",
      },
      {
        title: "Healthcare & B2B Decision-Maker IDIs",
        description:
          "Translating highly technical discussion guides for key opinion leaders, clinical specialists, and procurement heads.",
      },
      {
        title: "Cross-Market Brand Perception Audits",
        description:
          "Translating qualitative probe materials and findings presentations for corporate leadership teams.",
      },
    ],
    whyDoraPoints: [
      {
        title: "Research-Specific Linguistic Protocol",
        description:
          "Workflows engineered around survey routing, skip logic, and qualitative moderation needs rather than generic prose.",
      },
      {
        title: "Defensible Cross-Market Equivalence",
        description:
          "Rigorous quality controls verifying that questions test identical underlying constructs across every language market.",
      },
      {
        title: "Fieldwork-Aligned Agility",
        description:
          "Turnaround milestones scheduled to support fast-paced fieldwork launch dates and programming deadlines.",
      },
    ],
    ctaTitle: "Discuss Your Research Translation Needs",
    ctaButtonText: "Request Translation Scoping",
  },

  "on-site-interpretation": {
    id: "on-site-interpretation",
    slug: "on-site-interpretation",
    title: "On-Site Interpretation",
    shortDescription:
      "Simultaneous and consecutive professional interpretation supporting in-person focus groups, IDIs, and facility sessions.",
    heroBadge: "In-Person Research Support",
    heroTitle: "On-Site Interpretation for Immersive Fieldwork & Focus Groups",
    heroDescription:
      "Provide real-time interpretation for international observers, moderators, and stakeholders during in-person qualitative sessions, focus groups, and facility testing.",
    category: "Linguistic Solution for Research",
    practiceHighlights: [
      "Facility & CLT specialization",
      "Multichannel wireless observer headsets",
      "Confidential observer support",
    ],
    serviceDistinction:
      "On-site interpretation embeds professional spoken interpreters directly within qualitative viewing facilities, central location tests (CLTs), and focus group suites, giving visiting client teams real-time spoken access to live respondent discussions.",
    whatIsTitle: "What is On-Site Interpretation in Market Research?",
    whatIsDescription: [
      "On-site interpretation delivers live, in-person spoken language facilitation for qualitative research environments such as viewing facilities, central location tests (CLT), in-facility focus groups, and in-depth interviews.",
      "Client observers behind two-way mirrors or in backroom suites hear real-time simultaneous interpretation through dedicated wireless headsets, allowing immediate comprehension of respondent discussions, reactions, and non-verbal cues.",
    ],
    questionsAnswered: [
      "How can our visiting brand and research directors observe live consumer focus groups without language barriers?",
      "Can client observers pass real-time probing queries to the local moderator during session intermissions?",
      "How are sensory and central location taste tests interpreted accurately in high-tempo facility settings?",
      "What setup guarantees isolated audio channel recordings for retrospective team review?",
    ],
    workflow: [
      {
        step: "01",
        title: "Study Briefing & Terminology Review",
        description:
          "Reviewing discussion guides, brand objectives, stimulus concepts, and technical terminology with the assigned interpreter.",
      },
      {
        step: "02",
        title: "Facility Audiovisual Coordination",
        description:
          "Testing multichannel wireless transmitters, observer headsets, and isolated recording lines prior to participant arrival.",
      },
      {
        step: "03",
        title: "Live Simultaneous Interpretation",
        description:
          "Delivering real-time spoken interpretation throughout focus group discussions, preserving emotional inflection and pacing.",
      },
      {
        step: "04",
        title: "Moderator Debrief & Audio Handoff",
        description:
          "Interpreting immediate client-moderator debriefs and handing over verified multichannel session audio recordings.",
      },
    ],
    deliverables: [
      "Real-time simultaneous spoken interpretation for client viewing suites",
      "Immediate spoken facilitation for observer-moderator intermission debriefs",
      "Multi-channel audio file separation (source conversation and interpreted feed)",
      "On-site linguistic briefing notes on cultural nuances and idioms observed",
    ],
    relatedServices: [
      {
        title: "Qualitative Research",
        slug: "qualitative-research",
        description:
          "Full-service study design, moderation, and thematic synthesis for in-person focus groups.",
      },
      {
        title: "Remote Interpretation",
        slug: "remote-interpretation",
        description:
          "Virtual spoken facilitation for digital focus groups and web-based video interviews.",
      },
      {
        title: "Transcription",
        slug: "transcription",
        description:
          "Transform recorded session audio into speaker-attributed, time-coded written transcripts.",
      },
    ],
    understandTitle: "How On-Site Interpretation Supports Research Teams",
    understandPoints: [
      {
        title: "Real-Time Client Backroom Access",
        description:
          "International clients and brand teams observe live discussions without language barriers, hearing nuances as they unfold.",
      },
      {
        title: "Spontaneous Probing & Observer Input",
        description:
          "Enabling observers to pass timely follow-up probes to the local moderator through interpreted debriefs between session blocks.",
      },
      {
        title: "Emotional Nuance & Tone Capture",
        description:
          "Capturing sarcasm, hesitation, excitement, and subtle inflection that written summaries often omit.",
      },
      {
        title: "Immediate Post-Session Debriefs",
        description:
          "Facilitating instant dialogue between client observers and local moderators immediately following each group discussion.",
      },
      {
        title: "Facility Audio & Technical Alignment",
        description:
          "Direct synchronization with facility wireless receiver headsets, observer audio channels, and master recording equipment.",
      },
    ],
    methodsTitle: "Interpretation Formats & Approaches",
    methods: [
      {
        name: "Simultaneous Interpretation with Headsets",
        description:
          "Real-time interpretation delivered directly to client viewing suites via multichannel wireless audio transmitters.",
      },
      {
        name: "Consecutive Interpretation for Executive IDIs",
        description:
          "Spoken translation delivered during natural conversation pauses, ideal for high-level B2B or clinical stakeholder interviews.",
      },
      {
        name: "Whisper Interpretation (Chuchotage)",
        description:
          "Discreet, mobile interpretation suitable for in-home ethnographies, shop-alongs, and facility walkthroughs.",
      },
      {
        name: "Dedicated Audio Channel Recording",
        description:
          "Capturing separate source and interpreted audio tracks for retrospective analysis and video compilation.",
      },
    ],
    useCasesTitle: "Typical Use Cases",
    useCases: [
      {
        title: "Multi-Market Consumer Focus Groups",
        description:
          "Enabling multinational brand managers to observe live consumer reactions across regional viewing facilities.",
      },
      {
        title: "Central Location Sensory & Taste Testing (CLT)",
        description:
          "Facilitating real-time verbal feedback and prompt clarification during structured in-person product evaluations.",
      },
      {
        title: "Key Opinion Leader & Healthcare Interviews",
        description:
          "Delivering precise consecutive interpretation during specialized interviews with physicians, engineers, or executives.",
      },
      {
        title: "Retail & In-Home Ethnographic Fieldwork",
        description:
          "Providing mobile language support as researchers observe consumer habits in their authentic environments.",
      },
    ],
    whyDoraPoints: [
      {
        title: "Qualitative Research Acumen",
        description:
          "Interpreters accustomed to qualitative moderation dynamics, subtle probing styles, and backroom confidentiality protocols.",
      },
      {
        title: "Uncompromising Discretion",
        description:
          "Strict confidentiality and non-disclosure standards safeguarding proprietary prototypes and unreleased concepts.",
      },
      {
        title: "Turnkey Logistics Coordination",
        description:
          "Coordinated technical handoffs with research viewing facilities and audiovisual technicians.",
      },
    ],
    ctaTitle: "Plan On-Site Interpretation for Your Upcoming Study",
    ctaButtonText: "Discuss On-Site Interpretation",
  },

  "remote-interpretation": {
    id: "remote-interpretation",
    slug: "remote-interpretation",
    title: "Remote Interpretation",
    shortDescription:
      "Simultaneous and consecutive remote interpretation across digital focus groups, virtual IDIs, and web-enabled qualitative platforms.",
    heroBadge: "Virtual Qualitative Insights",
    heroTitle: "Remote Interpretation for Global Virtual Research Sessions",
    heroDescription:
      "Connect distributed research teams to international participants through crystal-clear simultaneous interpretation across web-enabled interviews and online focus groups.",
    category: "Linguistic Solution for Research",
    practiceHighlights: [
      "Virtual qualitative platform fluency",
      "Dual-channel audio separation",
      "Cross-timezone scheduling flexibility",
    ],
    serviceDistinction:
      "Remote interpretation facilitates live spoken interpretation across digital video platforms and web-enabled qualitative portals, enabling distributed global stakeholders to listen in real time without international travel costs.",
    whatIsTitle: "What is Remote Interpretation for Market Research?",
    whatIsDescription: [
      "Remote interpretation provides live, real-time spoken language facilitation for virtual qualitative research conducted over digital platforms, video conferencing software, and specialized qualitative portals.",
      "Whether using platform-native audio channels (such as Zoom interpretation) or dedicated qualitative research streaming suites, remote interpreters enable global clients, moderators, and observers to participate in real time regardless of geography.",
    ],
    questionsAnswered: [
      "How do distributed multinational stakeholders observe online focus groups across disparate timezones in real time?",
      "Can virtual interview platforms provide isolated dual-channel audio so respondents converse naturally in native languages?",
      "How do we handle technical rehearsals and interpreter handoffs during extended multi-hour virtual IDI blocks?",
      "What protocols safeguard participant privacy and confidential product stimulus during digital broadcast?",
    ],
    workflow: [
      {
        step: "01",
        title: "Platform Setup & Channel Configuration",
        description:
          "Configuring dedicated language channels on Zoom, Civicom, FocusVision, Discuss.io, or enterprise collaboration suites.",
      },
      {
        step: "02",
        title: "Pre-Flight Sound & Rehearsal Check",
        description:
          "Auditing interpreter microphone levels, audio latency, and observer backchannel chat before participant login.",
      },
      {
        step: "03",
        title: "Live Virtual Interpretation",
        description:
          "Providing continuous simultaneous interpretation, using paired interpreter rotations on extended sessions to preserve accuracy.",
      },
      {
        step: "04",
        title: "Observer Debrief & Multi-Track Export",
        description:
          "Facilitating virtual team debriefs and exporting isolated source and interpreted audio tracks for subsequent analysis.",
      },
    ],
    deliverables: [
      "Live virtual channel simultaneous interpretation for distributed observers",
      "Direct integration with primary qualitative video portals",
      "Dual-track audio recordings (native speaker and simultaneous interpreted stream)",
      "Technical session monitoring and observer backchannel protocol support",
    ],
    relatedServices: [
      {
        title: "Qualitative Research",
        slug: "qualitative-research",
        description:
          "Expert virtual moderation, discussion guide design, and qualitative synthesis.",
      },
      {
        title: "On-Site Interpretation",
        slug: "on-site-interpretation",
        description:
          "In-person spoken facilitation for viewing facilities, CLT testing, and local fieldwork.",
      },
      {
        title: "Transcription",
        slug: "transcription",
        description:
          "Convert virtual session audio into structured, searchable transcripts.",
      },
    ],
    understandTitle: "Key Advantages for Virtual Fieldwork",
    understandPoints: [
      {
        title: "Global Observer Participation",
        description:
          "Distributed brand and research stakeholders join from anywhere in the world and listen to localized conversations live.",
      },
      {
        title: "Independent Audio Channels",
        description:
          "Dual-audio channel separation allows observers to listen to the interpreted stream while the moderator and respondent converse naturally in source language.",
      },
      {
        title: "Flexible Cross-Timezone Fieldwork",
        description:
          "Agile scheduling accommodating qualitative fieldwork across diverse timezones with minimal operational overhead.",
      },
      {
        title: "Backchannel Collaboration",
        description:
          "Supporting observer backchannel chat and live probing without interrupting the respondent flow.",
      },
      {
        title: "Dual-Track Archival Recording",
        description:
          "Recording isolated audio feeds for both native conversation and interpreted commentary for subsequent review.",
      },
    ],
    methodsTitle: "Platform & Delivery Capabilities",
    methods: [
      {
        name: "Platform-Native Channel Integration",
        description:
          "Direct configuration of language channels within Zoom, Teams, Google Meet, and enterprise collaboration suites.",
      },
      {
        name: "Specialized Research Suite Support",
        description:
          "Familiarity with dedicated qualitative platforms including Civicom, FocusVision, Recollective, and Discuss.io.",
      },
      {
        name: "Pre-Flight Technical Checks",
        description:
          "Pre-session verification of interpreter audio equipment, microphone latency, and channel isolation prior to respondent arrival.",
      },
      {
        name: "Paired Interpreter Relays",
        description:
          "Deploying rotation teams for extended multi-hour virtual sessions to guarantee consistent cognitive stamina and accuracy.",
      },
    ],
    useCasesTitle: "Typical Use Cases",
    useCases: [
      {
        title: "Multi-Country Online Focus Groups (OFGs)",
        description:
          "Connecting corporate observers with consumer groups across disparate international markets simultaneously.",
      },
      {
        title: "Web-Enabled Executive & B2B Interviews",
        description:
          "Conducting in-depth interviews with specialized overseas stakeholders, procurement leads, and technology decision-makers.",
      },
      {
        title: "Digital Diary & Asynchronous Debriefs",
        description:
          "Providing live interpretation for video debriefs following mobile diary studies and asynchronous consumer communities.",
      },
      {
        title: "Multi-Market Virtual Co-Creation Sessions",
        description:
          "Supporting interactive digital workshops and product innovation ideation sessions across multilingual participant groups.",
      },
    ],
    whyDoraPoints: [
      {
        title: "Virtual Research Platform Fluency",
        description:
          "Interpreters familiar with online whiteboard tools, screen sharing, stimulus reveals, and virtual breakout mechanics.",
      },
      {
        title: "Redundant Connectivity Safeguards",
        description:
          "Backup audio bridges and secondary communication lines minimizing risk of session interruption.",
      },
      {
        title: "Strict Data Privacy & NDA Governance",
        description:
          "Encrypted transmission protocols and rigorous confidentiality governance protecting pre-market concepts.",
      },
    ],
    ctaTitle: "Equip Your Virtual Fieldwork with Remote Interpretation",
    ctaButtonText: "Discuss Remote Interpretation",
  },

  "transcription": {
    id: "transcription",
    slug: "transcription",
    title: "Transcription",
    shortDescription:
      "Verbatim, intelligent-verbatim, and time-stamped audio/video transcription paired with direct translation for qualitative analysis.",
    heroBadge: "Audio & Video Intelligence",
    heroTitle: "Research Transcription Engineered for Analytical Depth",
    heroDescription:
      "Transform audio and video recordings of focus groups, IDIs, and ethnographic sessions into structured, searchable transcripts formatted for qualitative coding.",
    category: "Linguistic Solution for Research",
    practiceHighlights: [
      "Rigorous speaker attribution",
      "Time-coded reference tags",
      "Qualitative software export compatibility",
    ],
    serviceDistinction:
      "Unlike automated speech-to-text engines that fail on overlapping dialogue and heavy accents, research transcription delivers human-audited transcripts structured specifically for qualitative analysis, coding software, and quote extraction.",
    whatIsTitle: "What is Market Research Transcription?",
    whatIsDescription: [
      "Market research transcription converts spoken qualitative audio and video into structured, accurate written documentation. Unlike automated machine transcription, specialized research transcription captures multi-speaker overlap, technical terminology, and contextual nuance.",
      "High-quality transcripts form the essential evidentiary foundation for thematic coding, verbatim quote extraction, client highlight reels, and compliance audits across qualitative studies.",
    ],
    questionsAnswered: [
      "How do we convert hours of multi-speaker focus group recordings into structured, speaker-attributed transcripts?",
      "Can transcripts be time-coded and formatted directly for qualitative coding software such as NVivo or MAXQDA?",
      "Is it possible to combine verbatim audio transcription and English translation into a single consolidated workflow?",
      "How are specialized medical, technical, or regional dialect terms verified against project glossaries?",
    ],
    workflow: [
      {
        step: "01",
        title: "Media File Audit & Ingestion",
        description:
          "Logging audio/video recordings, auditing sound clarity, identifying speaker counts, and reviewing project glossaries.",
      },
      {
        step: "02",
        title: "In-Language Human Transcription",
        description:
          "Transcribing dialogue with precise speaker tags, timestamps, and chosen verbatim level (full or intelligent).",
      },
      {
        step: "03",
        title: "Senior Auditor Quality Review",
        description:
          "Cross-checking transcript text against the master audio recording to verify proper names, acronyms, and subtle speech.",
      },
      {
        step: "04",
        title: "Structured Analytical Formatting",
        description:
          "Delivering finalized transcripts in client-specified formats, including side-by-side English translations or subtitle files.",
      },
    ],
    deliverables: [
      "Speaker-attributed transcripts in Word, Excel, or PDF formats",
      "Synchronized time-coded reference tags (every 30 or 60 seconds)",
      "Dual-language side-by-side transcripts (source dialogue + English translation)",
      "Subtitles and closed-caption formats (SRT, VTT) for video highlight reels",
    ],
    relatedServices: [
      {
        title: "In-Language Coding",
        slug: "in-language-coding",
        description:
          "Transform open-ended transcript verbatims into structured thematic codeframes.",
      },
      {
        title: "Qualitative Research",
        slug: "qualitative-research",
        description:
          "Full-service exploratory research, moderation, and thematic synthesis.",
      },
      {
        title: "Translation for Market Research",
        slug: "translation",
        description:
          "Translate full research findings, questionnaires, and presentation decks.",
      },
    ],
    understandTitle: "Core Deliverables & Transcription Options",
    understandPoints: [
      {
        title: "Precise Speaker Attribution",
        description:
          "Clear identification of moderators, individual respondents, and co-participants throughout dynamic group exchanges.",
      },
      {
        title: "Verbatim vs. Intelligent Verbatim",
        description:
          "Choice between full verbatim (including filler words and pauses) or clean intelligent verbatim (edited for reading clarity).",
      },
      {
        title: "Time-Stamped Reference Points",
        description:
          "Periodic time coding (e.g. every 30 or 60 seconds) enabling rapid verification against video and audio recordings.",
      },
      {
        title: "Integrated Dual-Language Transcripts",
        description:
          "Side-by-side or translated transcripts converting non-English recordings directly into structured English text.",
      },
      {
        title: "Qualitative Software Compatibility",
        description:
          "Formatted outputs tailored for immediate import into NVivo, Atlas.ti, MAXQDA, and spreadsheet analysis templates.",
      },
      {
        title: "Terminology & Acronym Verification",
        description:
          "Contextual checking of industry-specific jargon, medical terms, and brand names against project glossaries.",
      },
    ],
    methodsTitle: "Output Formats & Quality Assurance",
    methods: [
      {
        name: "Multi-Tier Quality Review",
        description:
          "Initial transcript generation followed by audio cross-audit by a senior linguist to eliminate omissions and verify speaker tags.",
      },
      {
        name: "Time-Coded Subtitle & Caption Files",
        description:
          "Generating SRT and VTT files for client presentations and video montage clip editing.",
      },
      {
        name: "Direct Source-to-English Translation",
        description:
          "Combining transcription and translation into a single consolidated workflow to accelerate qualitative analysis.",
      },
      {
        name: "Custom Template Alignment",
        description:
          "Structuring transcript layouts to match client-specific formatting, speaker codes, and font conventions.",
      },
    ],
    useCasesTitle: "Typical Use Cases",
    useCases: [
      {
        title: "In-Depth Interview (IDI) Series Analysis",
        description:
          "Generating comprehensive text records of lengthy one-on-one stakeholder, clinician, or executive interviews.",
      },
      {
        title: "Multi-Speaker Focus Group Documentation",
        description:
          "Capturing fast-paced group discussions with distinct speaker tracking and participant agreement dynamics.",
      },
      {
        title: "Ethnographic Journey & Mobile Video Logs",
        description:
          "Transcribing consumer self-recorded video diaries and in-home product usage demonstrations.",
      },
      {
        title: "Executive Report Evidence & Quote Compilations",
        description:
          "Providing searchable verbatims for executive presentations and thematic insight decks.",
      },
    ],
    whyDoraPoints: [
      {
        title: "Researcher-Friendly Formatting",
        description:
          "Templates designed with clear speaker differentiation and time tags optimized for thematic coding.",
      },
      {
        title: "Confidentiality & Data Protection",
        description:
          "Secure file transfer protocols and strict adherence to international respondent privacy regulations.",
      },
      {
        title: "Flexible Delivery Turnarounds",
        description:
          "Standard, rush, and overnight delivery options aligned with tight reporting and debrief milestones.",
      },
    ],
    ctaTitle: "Convert Research Recordings into Usable Intelligence",
    ctaButtonText: "Discuss Transcription Services",
  },

  "in-language-coding": {
    id: "in-language-coding",
    slug: "in-language-coding",
    title: "In-Language Coding",
    shortDescription:
      "Categorizing and analyzing open-ended survey verbatims directly in their native language to safeguard cultural sentiment and nuance.",
    heroBadge: "Verbatim Intelligence",
    heroTitle: "In-Language Coding for Multilingual Open-Ended Analysis",
    heroDescription:
      "Analyze and classify open-ended survey responses directly in their original language, preserving authentic sentiment, idioms, and cultural context.",
    category: "Linguistic Solution for Research",
    practiceHighlights: [
      "Native verbatim classification",
      "Unified hierarchical codeframe nets",
      "Software-ready tabular exports",
    ],
    serviceDistinction:
      "In-language coding classifies open-ended survey responses directly in their original language using standardized codeframes, avoiding the loss of nuance, irony, and cultural subtext that occurs when verbatims are translated prior to coding.",
    whatIsTitle: "What is In-Language Coding?",
    whatIsDescription: [
      "In-language coding is the practice of categorizing open-ended survey verbatims directly in their original source language using standardized codeframes, rather than translating raw responses prior to analysis.",
      "By coding in the native idiom, research teams avoid the distortion, loss of subtle sentiment, and bias that often occurs when slang, cultural metaphors, or regional idioms are translated literally into English before classification.",
    ],
    questionsAnswered: [
      "How do we categorize open-ended survey verbatims across multiple international markets without losing native sentiment?",
      "Can centralized, standardized codeframes be applied across 10+ languages to yield comparable cross-tabulations?",
      "How do we capture emerging local customer themes that were not anticipated in closed-ended survey options?",
      "What quality controls guarantee inter-coder reliability and consistency across multi-analyst teams?",
    ],
    workflow: [
      {
        step: "01",
        title: "Codeframe Architecture & Net Design",
        description:
          "Developing hierarchical codeframes aligned with key business questions, establishing clear net categories and exclusion rules.",
      },
      {
        step: "02",
        title: "Native Coder Calibration & Briefing",
        description:
          "Briefing native-speaker research coders on net boundaries, multiple-response rules, and project-specific terminology.",
      },
      {
        step: "03",
        title: "In-Language Classification & Auditing",
        description:
          "Assigning numerical codes directly from native verbatim text with ongoing supervisor audits for inter-coder reliability.",
      },
      {
        step: "04",
        title: "Harmonized Export & Quote Synthesis",
        description:
          "Delivering coded datasets ready for banner cross-tabulation, accompanied by translated representative illustrative quotes.",
      },
    ],
    deliverables: [
      "Fully coded quantitative data files (SPSS, CSV, Excel) mapped to respondent IDs",
      "Hierarchical codeframe reference dictionary with primary nets and sub-codes",
      "Verbatim frequency distributions and net summary tables",
      "Curated sample of translated illustrative quotes per thematic net",
    ],
    relatedServices: [
      {
        title: "Quantitative Research",
        slug: "quantitative-research",
        description:
          "Statistical surveys, banner cross-tabulations, and market measurement.",
      },
      {
        title: "Survey Translation and Localization",
        slug: "survey-localization",
        description:
          "Ensure open-ended survey questions are culturally calibrated from launch.",
      },
      {
        title: "Transcription",
        slug: "transcription",
        description:
          "Generate written verbatims from qualitative focus groups and interview recordings.",
      },
    ],
    understandTitle: "Why In-Language Coding Protects Data Quality",
    understandPoints: [
      {
        title: "Preservation of Authentic Sentiment",
        description:
          "Capturing nuanced consumer attitudes, humor, irony, and cultural subtext that direct translation can dilute.",
      },
      {
        title: "Consistent Centralized Codeframes",
        description:
          "Applying unified thematic categories across multiple languages, ensuring cross-country statistical comparability.",
      },
      {
        title: "Discovery of Emerging Themes",
        description:
          "Identifying unanticipated local consumer priorities and brand perceptions that might otherwise go unflagged.",
      },
      {
        title: "Conversion to Quantitative Datasets",
        description:
          "Transforming unstructured qualitative narrative text into structured numerical codes for cross-tabulation and statistical modeling.",
      },
      {
        title: "Elimination of Translation Overhead",
        description:
          "Streamlining data processing by eliminating the requirement to translate thousands of raw open-ended strings prior to coding.",
      },
    ],
    methodsTitle: "Methodology & Coding Architecture",
    methods: [
      {
        name: "Standardized Codeframe Development",
        description:
          "Collaborative design of structured, mutually exclusive codeframes aligned with key project research questions.",
      },
      {
        name: "Native-Speaker Coding Execution",
        description:
          "Trained market research coders reviewing responses in their primary language to ensure accurate category assignment.",
      },
      {
        name: "Hierarchical Net & Sub-Net Categorization",
        description:
          "Structuring thematic categories into primary nets and granular sub-codes for layered analytical reporting.",
      },
      {
        name: "Inter-Coder Reliability Audits",
        description:
          "Conducting systematic cross-coder audits to guarantee categorization consistency and statistical reliability.",
      },
    ],
    useCasesTitle: "Typical Use Cases",
    useCases: [
      {
        title: "Multi-Market Net Promoter Score (NPS) Open-Ends",
        description:
          "Analyzing promoter and detractor rationales across global markets to identify regional customer satisfaction drivers.",
      },
      {
        title: "Unprompted Brand & Advertising Recall",
        description:
          "Categorizing spontaneous brand mentions and campaign takeaways across disparate language environments.",
      },
      {
        title: "Product Experience & Pain Point Mapping",
        description:
          "Classifying consumer feedback regarding product usability, customer service, or feature requests.",
      },
      {
        title: "Consumer Perception & Packaging Feedback",
        description:
          "Evaluating open-ended respondent reactions to newly launched packaging designs and advertising creative.",
      },
    ],
    whyDoraPoints: [
      {
        title: "Methodological Discipline",
        description:
          "Strict coding conventions, net thresholds, and consistency guidelines established for market research standards.",
      },
      {
        title: "Cross-Market Harmonization",
        description:
          "Supervised alignment ensuring that codeframes applied across international language markets remain analytically equivalent.",
      },
      {
        title: "Software-Ready Datasets",
        description:
          "Delivery in clean SPSS, CSV, or Excel formats ready for immediate tabulations, banner cuts, and dashboard ingestion.",
      },
    ],
    ctaTitle: "Extract Deeper Meaning from Multilingual Open-Ends",
    ctaButtonText: "Discuss In-Language Coding",
  },

  "survey-localization": {
    id: "survey-localization",
    slug: "survey-localization",
    title: "Survey Translation and Localization",
    shortDescription:
      "Cultural adaptation and cognitive calibration of survey instruments, rating scales, and demographics to ensure measurement validity.",
    heroBadge: "Measurement Validity",
    heroTitle: "Survey Translation & Localization for Reliable Global Measurement",
    heroDescription:
      "Adapt survey questions, rating scales, instructions, and demographic categories to target cultural contexts while safeguarding cross-market statistical comparability.",
    category: "Linguistic Solution for Research",
    practiceHighlights: [
      "Measurement construct equivalence",
      "Rating scale & Likert calibration",
      "In-tool platform quality testing",
    ],
    serviceDistinction:
      "Survey localization goes beyond language translation to calibrate rating scales, demographic brackets, and survey tool logic, guaranteeing that questions test identical underlying psychological constructs across cultural contexts.",
    whatIsTitle: "What is Survey Translation & Localization?",
    whatIsDescription: [
      "Survey localization extends far beyond literal translation. It is the comprehensive cultural, cognitive, and linguistic adaptation of survey instruments, response options, rating scales, and demographic categories to match local respondent expectations.",
      "When a survey is inadequately localized, cultural response biases, misunderstood scales, or confusing terminology skew statistical results. Methodological localization ensures every question measures the exact same underlying construct across all markets.",
    ],
    questionsAnswered: [
      "How should Likert agreement scales and rating matrices be calibrated to prevent cultural acquiescence bias?",
      "Are demographic categories (income bands, education credentials, job roles) accurately adapted to local conventions?",
      "How do we verify survey logic, character limits, and dynamic text piping directly within survey platforms?",
      "What steps ensure translated survey questionnaires achieve cross-market measurement equivalence for global tracking?",
    ],
    workflow: [
      {
        step: "01",
        title: "Questionnaire & Scale Cultural Audit",
        description:
          "Auditing source survey instruments for cultural ambiguities, idioms, and scale formats that may introduce measurement bias.",
      },
      {
        step: "02",
        title: "Cognitive Adaptation & Scale Calibration",
        description:
          "Adapting question phrasing, Likert endpoints, income ranges, and education categories to local market realities.",
      },
      {
        step: "03",
        title: "In-Tool Linguistic Quality Assurance (LQA)",
        description:
          "Testing programmed surveys directly inside platforms (Qualtrics, Decipher, Confirmit) for UI fit and dynamic text piping.",
      },
      {
        step: "04",
        title: "Fieldwork-Ready Signoff & Archive",
        description:
          "Delivering validated survey files and establishing locked master glossaries for multi-wave tracking consistency.",
      },
    ],
    deliverables: [
      "Fieldwork-ready survey instruments mapped to platform variable names",
      "Demographic and rating scale calibration reference documentation",
      "In-platform linguistic QA audit log (UI display, character limits, text piping)",
      "Longitudinal translation memory and terminology glossary for future waves",
    ],
    relatedServices: [
      {
        title: "Quantitative Research",
        slug: "quantitative-research",
        description:
          "Statistical survey design, sample management, and cross-tabulation analysis.",
      },
      {
        title: "Translation for Market Research",
        slug: "translation",
        description:
          "Linguistic translation for qualitative discussion guides and concept stimulus.",
      },
      {
        title: "In-Language Coding",
        slug: "in-language-coding",
        description:
          "Categorize open-ended survey responses directly in source languages.",
      },
    ],
    understandTitle: "Key Pillars of Survey Localization",
    understandPoints: [
      {
        title: "Conceptual & Semantic Equivalence",
        description:
          "Ensuring survey questions probe identical cognitive concepts regardless of cultural and linguistic variations.",
      },
      {
        title: "Rating Scale Calibration",
        description:
          "Harmonizing Likert scales, agreement matrices, and numerical endpoints to mitigate cultural acquiescence or extreme response bias.",
      },
      {
        title: "Demographic Category Adaptation",
        description:
          "Adapting income bands, education credentials, employment categories, and regional geographies to local standards.",
      },
      {
        title: "Instructional Clarity & Flow",
        description:
          "Crafting clear, intuitive survey guidance that minimizes respondent cognitive fatigue and reduces drop-off rates.",
      },
      {
        title: "Survey Platform Overlay QA",
        description:
          "Reviewing programmed surveys within online survey tools to verify character display, button wrapping, and routing logic.",
      },
    ],
    methodsTitle: "Localization Protocols",
    methods: [
      {
        name: "Forward & Back-Translation Audit",
        description:
          "Rigorous forward translation with independent back-translation to uncover potential semantic divergences.",
      },
      {
        name: "Cognitive Pre-Testing Debriefs",
        description:
          "Assessing respondent question processing and interpretation to verify that localized wording functions as expected.",
      },
      {
        name: "In-Tool Linguistic Quality Assurance (LQA)",
        description:
          "Testing translated surveys directly inside survey engines (Qualtrics, Decipher, Confirmit) for UI fit and dynamic text piping.",
      },
      {
        name: "Cultural Sensitivity & Bias Screening",
        description:
          "Screening survey content for culturally inappropriate phrasing or taboos that could provoke respondent non-response.",
      },
    ],
    useCasesTitle: "Typical Use Cases",
    useCases: [
      {
        title: "Global Brand Equity & Health Trackers",
        description:
          "Deploying multi-country survey trackers that yield statistically reliable cross-market benchmark comparisons.",
      },
      {
        title: "Cross-Border Customer Experience (CX) Programs",
        description:
          "Localizing touchpoint satisfaction surveys across international operational markets.",
      },
      {
        title: "New Product Concept & Pricing Surveys",
        description:
          "Calibrating feature trade-off and price sensitivity questions to local currency norms and spending habits.",
      },
      {
        title: "Multinational Employee & Stakeholder Audits",
        description:
          "Adapting organizational sentiment surveys to regional workplace culture and terminology.",
      },
    ],
    whyDoraPoints: [
      {
        title: "Survey Science Grounding",
        description:
          "Linguistic adaptation informed by questionnaire design principles, measurement psychology, and data integrity.",
      },
      {
        title: "Survey Platform Compatibility",
        description:
          "Familiarity with online survey tools, XML/CSV export formats, question types, and piping protocols.",
      },
      {
        title: "Defensible Cross-Market Comparability",
        description:
          "Enabling research teams to benchmark findings across international markets with statistical confidence.",
      },
    ],
    ctaTitle: "Ensure Cross-Market Validity in Your Next Survey",
    ctaButtonText: "Schedule Localization Scoping",
  },
};

export const CORE_RESEARCH_SERVICES = [
  SERVICES_DATA["primary-research"],
  SERVICES_DATA["qualitative-research"],
  SERVICES_DATA["quantitative-research"],
];

export const LANGUAGE_SERVICES = [
  SERVICES_DATA["translation"],
  SERVICES_DATA["on-site-interpretation"],
  SERVICES_DATA["remote-interpretation"],
  SERVICES_DATA["transcription"],
  SERVICES_DATA["in-language-coding"],
  SERVICES_DATA["survey-localization"],
];

export const SERVICES_LIST = Object.values(SERVICES_DATA);
