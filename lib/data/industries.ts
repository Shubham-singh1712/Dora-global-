export interface IndustryDetail {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  overviewTitle: string;
  overviewDescription: string[];
  researchAreas: { title: string; description: string }[];
  keyQuestions: { question: string; description: string }[];
  benefits: { title: string; description: string }[];
  ctaTitle: string;
}

export const INDUSTRIES_DATA: Record<string, IndustryDetail> = {
  automotives: {
    id: "automotives",
    slug: "automotives",
    title: "Automotives",
    shortDescription:
      "Market research supporting vehicle manufacturers, EV innovators, and mobility providers in understanding buyer preferences and market trends.",
    heroBadge: "Automotive & Mobility Sector",
    heroTitle: "Automotive Market Intelligence for Evolving Mobility",
    heroDescription:
      "Understand changing vehicle purchase behavior, electric vehicle adoption, brand perception, and connected mobility expectations.",
    overviewTitle: "Automotive Industry Intelligence Overview",
    overviewDescription: [
      "The automotive sector is undergoing rapid transformation driven by electrification, digital cockpits, autonomous safety features, and shifting ownership models.",
      "Our research helps automotive brands, original equipment manufacturers (OEMs), and tier-1 suppliers gain clarity into consumer preferences, dealership experience, and brand sentiment.",
    ],
    researchAreas: [
      {
        title: "Consumer Vehicle Preferences",
        description: "Evaluating buyer priorities regarding drivetrain choices, safety features, range, interior tech, and pricing.",
      },
      {
        title: "Electric Vehicle (EV) Adoption",
        description: "Assessing charging infrastructure perceptions, EV battery range concerns, and incentive awareness.",
      },
      {
        title: "Mobility & Ownership Models",
        description: "Tracking shifts between traditional vehicle ownership, leasing, subscription models, and shared mobility.",
      },
      {
        title: "Brand Perception & Evaluation",
        description: "Measuring brand consideration, loyalty drivers, and brand switching behavior across vehicle segments.",
      },
      {
        title: "In-Car Experience & Infotainment",
        description: "Gathering consumer feedback on digital dashboard interfaces, connectivity features, and driver assistance tools.",
      },
    ],
    keyQuestions: [
      {
        question: "What factors drive EV adoption in key markets?",
        description: "Evaluating price sensitivity, charging access, and range expectations among prospective vehicle buyers.",
      },
      {
        question: "How are consumer brand preferences shifting?",
        description: "Understanding how legacy brands compare against new electric and mobility market entrants.",
      },
      {
        question: "What features matter most to car buyers?",
        description: "Prioritizing connected car capabilities, cabin comfort, safety suites, and software features.",
      },
    ],
    benefits: [
      {
        title: "Buyer & Owner Segmentation",
        description: "Screen verified vehicle owners, EV prospective buyers, fleet operators, and brand considerers.",
      },
      {
        title: "Feature & Tech Prioritization",
        description: "Evaluate which safety, charging, and connectivity features directly motivate vehicle purchase choices.",
      },
      {
        title: "Cross-Market Automotive Studies",
        description: "Execute qualitative and quantitative studies across key automotive consumer territories.",
      },
    ],
    ctaTitle: "Discuss Automotive Research",
  },
  "energy-utilities": {
    id: "energy-utilities",
    slug: "energy-utilities",
    title: "Energy & Utilities",
    shortDescription:
      "Research insights into consumer energy usage habits, sustainability attitudes, smart utility adoption, and grid transition sentiment.",
    heroBadge: "Energy & Utilities Sector",
    heroTitle: "Energy & Utility Market Insights for the Clean Energy Transition",
    heroDescription:
      "Gain clear visibility into consumer energy consumption patterns, renewable adoption sentiment, smart meter perceptions, and utility customer experience.",
    overviewTitle: "Energy & Utilities Industry Overview",
    overviewDescription: [
      "Energy markets are balancing decarbonization imperatives, grid modernization, and shifting consumer expectations around energy costs and sustainability.",
      "We provide utility providers, renewable energy developers, and clean tech providers with empirical research to understand consumer choices, billing sentiment, and green technology adoption.",
    ],
    researchAreas: [
      {
        title: "Consumer Energy Usage & Behavior",
        description: "Analyzing household and commercial electricity consumption habits, peak-time usage awareness, and efficiency practices.",
      },
      {
        title: "Sustainability & Renewable Attitudes",
        description: "Measuring willingness to pay for green tariffs, rooftop solar interest, and clean energy brand affinity.",
      },
      {
        title: "Smart Meter & Tech Adoption",
        description: "Evaluating consumer feedback on smart thermostat installations, home energy apps, and time-of-use pricing.",
      },
      {
        title: "Utility Customer Experience (CX)",
        description: "Assessing satisfaction across billing clarity, digital portal usage, outage communication, and customer support.",
      },
      {
        title: "Decarbonization Sentiment",
        description: "Tracking public perception of heat pumps, home battery storage, and residential solar solutions.",
      },
    ],
    keyQuestions: [
      {
        question: "How do consumers perceive renewable energy options?",
        description: "Quantifying interest in green energy tariffs and barriers to rooftop solar adoption.",
      },
      {
        question: "What drives satisfaction with energy providers?",
        description: "Identifying key satisfaction drivers across billing, service reliability, and digital communication.",
      },
      {
        question: "How can utilities encourage demand-side management?",
        description: "Understanding consumer responsiveness to time-of-use pricing and smart appliance integration.",
      },
    ],
    benefits: [
      {
        title: "Broad Representative Sampling",
        description: "Reach diverse residential ratepayer and commercial account decision-makers.",
      },
      {
        title: "Regulatory & Policy Awareness",
        description: "Design research frameworks cognizant of regional utility governance and compliance requirements.",
      },
      {
        title: "Clear Consumer Segmentation",
        description: "Identify distinct ratepayer segments based on environmental attitude and price sensitivity.",
      },
    ],
    ctaTitle: "Discuss Energy Sector Research",
  },
  "banking-finance": {
    id: "banking-finance",
    slug: "banking-finance",
    title: "Banking & Finance",
    shortDescription:
      "Consumer and institutional research illuminating financial product adoption, digital banking experiences, and investor perception.",
    heroBadge: "Financial Services Sector",
    heroTitle: "Financial Research Grounded in Customer Trust & Sentiment",
    heroDescription:
      "Understand financial customer behavior, digital banking friction, wealth management expectations, and emerging fintech adoption.",
    overviewTitle: "Banking & Finance Sector Overview",
    overviewDescription: [
      "Financial institutions face intense competition from digital-first challenger banks, shifting consumer loyalty, and evolving regulatory expectations.",
      "Our research equips retail banks, wealth managers, insurers, and fintech platforms with data-backed insights to refine customer onboarding, product design, and brand trust.",
    ],
    researchAreas: [
      {
        title: "Digital Banking & App Experience",
        description: "Evaluating mobile app usability, self-service feature adoption, and digital onboarding friction.",
      },
      {
        title: "Financial Product Perception",
        description: "Assessing consumer demand and feature priorities for savings accounts, credit cards, mortgages, and loans.",
      },
      {
        title: "Customer Trust & Loyalty",
        description: "Measuring brand reputation, security perceptions, and net promoter scores across retail banking.",
      },
      {
        title: "Wealth & Investment Preferences",
        description: "Understanding high-net-worth individual (HNWI) expectations, advisory preferences, and ESG investment criteria.",
      },
      {
        title: "Fintech & Payment Trends",
        description: "Tracking adoption rates of digital wallets, buy-now-pay-later (BNPL), and contactless payment solutions.",
      },
    ],
    keyQuestions: [
      {
        question: "Why do banking customers switch providers?",
        description: "Pinpointing key triggers for account migration, fee frustration, and service dissatisfaction.",
      },
      {
        question: "What features drive mobile app adoption?",
        description: "Evaluating customer interest in budget management tools, instant transfers, and AI financial assistants.",
      },
      {
        question: "How do consumers evaluate financial security?",
        description: "Understanding how privacy policies and security features influence brand trust.",
      },
    ],
    benefits: [
      {
        title: "High-Value Respondent Access",
        description: "Recruit verified retail banking customers, small business owners, and corporate finance executives.",
      },
      {
        title: "Strict Data Confidentiality",
        description: "Enterprise-grade data security protocols designed for sensitive financial insights.",
      },
      {
        title: "Benchmarking Precision",
        description: "Compare your customer experience metrics directly against key category competitors.",
      },
    ],
    ctaTitle: "Discuss Banking & Finance Research",
  },
  "food-beverage": {
    id: "food-beverage",
    slug: "food-beverage",
    title: "Food & Beverage",
    shortDescription:
      "Consumer insights guiding CPG brands and food service operators in product positioning, flavor trends, and packaging perception.",
    heroBadge: "Food & Beverage Sector",
    heroTitle: "Consumer Research for Food & Beverage Brands",
    heroDescription:
      "Uncover changing dietary preferences, health conscious purchasing habits, brand switching triggers, and package design sentiment.",
    overviewTitle: "Food & Beverage Sector Overview",
    overviewDescription: [
      "The food and beverage landscape is shaped by changing dietary choices, sustainability demands, premiumization, and rapid e-commerce channel growth.",
      "We help consumer packaged goods (CPG) brands, beverage manufacturers, and restaurant operators uncover consumer tastes, brand loyalty, and shopping habits.",
    ],
    researchAreas: [
      {
        title: "Consumer Flavor & Product Testing",
        description: "Gathering consumer feedback on new flavor profiles, formulation changes, and product concepts.",
      },
      {
        title: "Health & Wellness Trends",
        description: "Tracking consumer interest in organic, plant-based, low-sugar, and functional ingredient claims.",
      },
      {
        title: "Package Design & Shelf Impact",
        description: "Evaluating package aesthetics, label clarity, eco-friendly packaging perception, and shelf appeal.",
      },
      {
        title: "Grocery Shopping & Channel Behavior",
        description: "Analyzing consumer decision-making across physical grocery, direct-to-consumer, and quick-commerce delivery.",
      },
      {
        title: "Brand Perception & Loyalty",
        description: "Measuring brand awareness, repeat purchase drivers, and private-label competitive dynamics.",
      },
    ],
    keyQuestions: [
      {
        question: "What influences grocery purchase decisions?",
        description: "Analyzing how price, nutritional labels, brand trust, and packaging influence product choice.",
      },
      {
        question: "How are consumer dietary preferences shifting?",
        description: "Measuring adoption vectors for functional beverages, plant-based options, and clean-label foods.",
      },
      {
        question: "What package messaging resonates best?",
        description: "Testing front-of-pack sustainability claims and nutritional callouts with core target demographics.",
      },
    ],
    benefits: [
      {
        title: "Diverse Shopper Demographics",
        description: "Access primary household grocery buyers, Gen Z trends, and specialized health-focused consumer panels.",
      },
      {
        title: "Concept & Prototype Evaluation",
        description: "Evaluate product formulations, packaging prototypes, and price points before full retail rollout.",
      },
      {
        title: "Sensory & Shelf Feedback",
        description: "Translate consumer taste tests and packaging reactions into clear product development guidance.",
      },
    ],
    ctaTitle: "Discuss Food & Beverage Research",
  },
  transportation: {
    id: "transportation",
    slug: "transportation",
    title: "Transportation",
    shortDescription:
      "Research solutions illuminating passenger preferences, freight & logistics trends, public transit usage, and travel behavior.",
    heroBadge: "Transportation & Logistics Sector",
    heroTitle: "Transportation Research for Evolving Passenger & Freight Mobility",
    heroDescription:
      "Understand commuter travel behavior, passenger satisfaction, airline and rail service expectations, and supply chain logistics priorities.",
    overviewTitle: "Transportation & Logistics Industry Overview",
    overviewDescription: [
      "Transportation systems—from commercial airlines and passenger rail to urban transit and freight logistics—are modernizing to meet digital expectations and decarbonization goals.",
      "Our research helps transport operators, logistics providers, and mobility platforms capture passenger feedback, route preferences, and service satisfaction.",
    ],
    researchAreas: [
      {
        title: "Passenger Travel Behavior",
        description: "Understanding trip frequency, mode choice, booking channel preferences, and fare sensitivity.",
      },
      {
        title: "Service Experience & Satisfaction",
        description: "Evaluating on-time reliability perceptions, cabin/vehicle comfort, station amenities, and staff interactions.",
      },
      {
        title: "Digital Booking & Ticketing Apps",
        description: "Assessing user satisfaction with transport booking apps, contactless boarding, and real-time transit updates.",
      },
      {
        title: "Urban Mobility & Micromobility",
        description: "Tracking adoption of ride-hailing services, e-scooter networks, bike-share, and integrated transit passes.",
      },
      {
        title: "Freight & Commercial Logistics",
        description: "Gathering insights from shippers, logistics managers, and fleet operators regarding carrier performance and tracking tech.",
      },
    ],
    keyQuestions: [
      {
        question: "What drives transport mode selection?",
        description: "Comparing cost, speed, convenience, and environmental considerations across travel options.",
      },
      {
        question: "How can digital ticketing apps improve satisfaction?",
        description: "Identifying friction points in mobile booking, trip planning, and digital payment methods.",
      },
      {
        question: "What expectations do corporate shippers hold?",
        description: "Evaluating B2B logistics decision-making across freight reliability, transparency, and pricing.",
      },
    ],
    benefits: [
      {
        title: "Multimodal Passenger Panels",
        description: "Reach frequent commuters, business travelers, leisure tourists, and freight decision-makers.",
      },
      {
        title: "Metropolitan & Route Coverage",
        description: "Gather regional transportation insights across commuter corridors and international transit routes.",
      },
      {
        title: "Service Experience Benchmarking",
        description: "Benchmark customer satisfaction, punctuality perception, and digital booking friction.",
      },
    ],
    ctaTitle: "Discuss Transportation Research",
  },
  "media-entertainment": {
    id: "media-entertainment",
    slug: "media-entertainment",
    title: "Media & Entertainment",
    shortDescription:
      "Audience intelligence examining media consumption habits, streaming content preferences, gaming behavior, and brand engagement.",
    heroBadge: "Media & Entertainment Sector",
    heroTitle: "Audience Research for Media, Streaming & Digital Entertainment",
    heroDescription:
      "Understand audience content preferences, subscription streaming habits, gaming engagement, and digital media sentiment.",
    overviewTitle: "Media & Entertainment Industry Overview",
    overviewDescription: [
      "Media consumption patterns have fragmented across video streaming platforms, social media, podcasts, interactive gaming, and live events.",
      "We help media networks, streaming platforms, content creators, and entertainment brands analyze viewer behavior, subscription churn, and content resonance.",
    ],
    researchAreas: [
      {
        title: "Audience Media Consumption",
        description: "Tracking daily time allocation across streaming services, social video, podcasts, and linear television.",
      },
      {
        title: "Subscription Streaming & Churn",
        description: "Understanding subscription tier preferences, ad-supported vs. ad-free choices, and churn triggers.",
      },
      {
        title: "Content & Genre Resonance",
        description: "Evaluating audience reactions to story concepts, cast selection, series formats, and localized content.",
      },
      {
        title: "Gaming & Interactive Media",
        description: "Assessing gamer demographics, in-game purchasing attitudes, platform preferences, and esports engagement.",
      },
      {
        title: "Advertising & Sponsorship Impact",
        description: "Measuring ad recall, message resonance, and brand sentiment across digital video and podcast sponsorships.",
      },
    ],
    keyQuestions: [
      {
        question: "What drives streaming service subscriptions?",
        description: "Analyzing the role of exclusive content, pricing, ad tiers, and user interface in service retention.",
      },
      {
        question: "How do audiences engage with short-form vs. long-form video?",
        description: "Understanding attention spans and platform preferences across demographic cohorts.",
      },
      {
        question: "How effective are brand sponsorships in media?",
        description: "Quantifying brand lift and viewer sentiment following integrated content partnerships.",
      },
    ],
    benefits: [
      {
        title: "Targeted Audience Sampling",
        description: "Access diverse demographic groups, digital gamers, subscription streaming viewers, and podcast listeners.",
      },
      {
        title: "Concept & Creative Testing",
        description: "Test entertainment concepts, trailers, title options, and campaign artwork prior to release.",
      },
      {
        title: "Generational Habit Analysis",
        description: "Unpack behavioral differences in content consumption between Gen Z, Millennials, and mature audiences.",
      },
    ],
    ctaTitle: "Discuss Media Sector Research",
  },
};

export const INDUSTRIES_LIST = Object.values(INDUSTRIES_DATA);
