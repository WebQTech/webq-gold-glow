import { 
  Brain, RefreshCw, CreditCard, Landmark, Heart, GraduationCap, 
  ShoppingCart, Factory, Truck, Bolt, Atom, LucideIcon
} from "lucide-react";

// Hero images
import aiTechHero from "@/assets/industries/ai-tech-hero.jpg";
import legacyTransformHero from "@/assets/industries/legacy-transform-hero.jpg";
import fintechHero from "@/assets/industries/fintech-hero.jpg";
import capitalMarketsHero from "@/assets/industries/capital-markets-hero.jpg";
import healthcareHero from "@/assets/industries/healthcare-hero.jpg";
import governmentHero from "@/assets/industries/government-hero.jpg";
import edutechHero from "@/assets/industries/edutech-hero.jpg";
import retailHero from "@/assets/industries/retail-hero.jpg";
import manufacturingHero from "@/assets/industries/manufacturing-hero.jpg";
import logisticsHero from "@/assets/industries/logistics-hero.jpg";
import energyHero from "@/assets/industries/energy-hero.jpg";
import quantumComputingHero from "@/assets/industries/quantum-computing-hero.jpg";

export interface IndustryCaseStudy {
  company: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface IndustryDetail {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  category: string;
  isNew?: boolean;
  whatWeSolve: string;
  howWeHelp: string[];
  tags: string[];
  services: string[];
  heroImage: string;
  caseStudies: IndustryCaseStudy[];
  faqs: { question: string; answer: string }[];
}

export const industriesData: IndustryDetail[] = [
  {
    slug: "ai-solutions",
    name: "AI-Centric Digital Innovation",
    shortDescription: "AI strategy, implementation & optimization for technology companies.",
    fullDescription: "Whether you're exploring AI for the first time or scaling existing models, we act as your dedicated AI consulting partner. We work alongside your team to assess readiness, identify high-impact use cases, build custom models, and deploy them into production — ensuring every AI initiative ties directly to measurable business outcomes. Our hands-on approach means you get working solutions, not just slide decks.",
    icon: Brain,
    category: "AI & Technology",
    isNew: true,
    whatWeSolve: "Lack of AI expertise, failed AI implementations, unstructured data chaos",
    howWeHelp: [
      "AI readiness assessment and strategy roadmap",
      "Custom ML model development for your specific use case",
      "Data preparation, labeling, and pipeline setup",
      "AI model deployment, monitoring, and retraining",
      "Responsible AI implementation with bias detection",
      "Natural language processing for chatbots and document analysis",
      "Computer vision solutions for image and video processing",
      "AI-powered business process automation"
    ],
    tags: ["Chatbots", "Recommendation Engines", "Document Processing", "Predictive Models", "Computer Vision"],
    services: ["AI & Machine Learning", "Generative AI Solutions", "Agentic AI, Agents & Tools"],
    heroImage: aiTechHero,
    caseStudies: [
      {
        company: "SaaS Platform Client",
        challenge: "Struggling to integrate AI capabilities into their existing platform.",
        solution: "Developed a comprehensive AI strategy and implemented custom ML models for predictive analytics.",
        results: [
          "Reduced data processing time noticeably",
          "Improved user engagement and retention",
          "AI-powered features launched on schedule",
          "Early positive ROI observed"
        ]
      }
    ],
    faqs: [
      {
        question: "Do we need to have AI expertise in-house?",
        answer: "No, we can work with your existing team or provide end-to-end AI development. We also offer training and knowledge transfer to build your internal AI capabilities over time."
      },
      {
        question: "How long does it take to implement AI solutions?",
        answer: "It depends on complexity. Simple integrations can take 4-6 weeks, while custom model development typically takes 3-6 months. We provide clear timelines during our assessment phase."
      }
    ]
  },
  {
    slug: "legacy-to-ai-transformation",
    name: "Legacy to AI Transformation",
    shortDescription: "Modernize legacy systems with AI integration for future-ready operations.",
    fullDescription: "Legacy systems don't have to hold you back. We specialize in bridging the gap between your existing infrastructure and modern AI capabilities — without the risk of a full rip-and-replace. Our consultants map your current architecture, identify quick-win automation opportunities, and build API layers that let AI tools talk to your legacy databases. The result: you start seeing value in weeks, not years, while your core operations keep running smoothly.",
    icon: RefreshCw,
    category: "AI & Technology",
    isNew: true,
    whatWeSolve: "Outdated systems that can't support AI, data trapped in legacy databases, slow manual processes",
    howWeHelp: [
      "Legacy system audit and AI opportunity mapping",
      "Data extraction and migration from legacy databases",
      "API layer creation to connect old systems with AI tools",
      "Gradual AI integration without full system replacement",
      "Change management and team upskilling",
      "Microservices migration from monolithic architectures",
      "Cloud-native re-platforming for scalability"
    ],
    tags: ["Assessment", "Data Prep", "Pilot AI Project", "Scale", "Optimize"],
    services: ["AI Process Automation", "Cloud Migration", "DevOps & CI/CD"],
    heroImage: legacyTransformHero,
    caseStudies: [
      {
        company: "Manufacturing Client",
        challenge: "Legacy ERP system couldn't support modern analytics or AI.",
        solution: "Created API bridges and data pipelines to enable AI without replacing core systems.",
        results: [
          "Key manual processes automated",
          "Real-time analytics now available",
          "Zero downtime during transformation",
          "Significant cost savings vs full replacement"
        ]
      }
    ],
    faqs: [
      {
        question: "Do we need to replace our entire legacy system?",
        answer: "Usually not. We specialize in gradual transformation that preserves your existing investments while adding AI capabilities. Full replacement is rarely necessary or cost-effective."
      },
      {
        question: "How do you handle data in legacy formats?",
        answer: "We have extensive experience with legacy data formats and databases. We create extraction pipelines that normalize data for AI processing while maintaining data integrity."
      }
    ]
  },
  {
    slug: "banks-fintech",
    name: "Banks & FinTech",
    shortDescription: "Financial services & payment solutions for modern banking.",
    fullDescription: "Financial services move fast — and your technology needs to move faster. We partner with banks, credit unions, payment processors, and fintech startups to build secure, scalable platforms that handle everything from real-time payments to AI-driven fraud detection. As a consulting-first team, we bring deep domain knowledge in regulatory compliance, open banking standards, and modern financial architecture to help you compete confidently.",
    icon: CreditCard,
    category: "Finance",
    whatWeSolve: "Slow transaction processing, fraud vulnerabilities, regulatory complexity",
    howWeHelp: [
      "Digital banking and mobile wallet platforms",
      "Real-time payment processing and settlement systems",
      "Fraud detection using machine learning models",
      "KYC/AML compliance automation",
      "Blockchain-based secure transaction ledgers",
      "Open banking API integration (PSD2 / Open Banking)",
      "Core banking system modernization",
      "Customer onboarding and identity verification workflows"
    ],
    tags: ["Banks", "Credit Unions", "Payment Processors", "Insurance", "Lending Platforms"],
    services: ["AI & Machine Learning", "Custom App Development", "Cloud Solutions"],
    heroImage: fintechHero,
    caseStudies: [
      {
        company: "FinTech Client",
        challenge: "Fraud losses increasing with existing rule-based system.",
        solution: "Implemented ML-based fraud detection with real-time transaction scoring.",
        results: [
          "Notable reduction in fraud losses",
          "Fewer false positives flagged",
          "Real-time detection capability enabled",
          "Improved customer trust and retention"
        ]
      }
    ],
    faqs: [
      {
        question: "How do you handle banking compliance requirements?",
        answer: "Our solutions are built with compliance in mind from day one. We have experience with PCI-DSS, SOC 2, GDPR, and various banking regulations. We work closely with your compliance team throughout the project."
      },
      {
        question: "Can you integrate with our existing core banking system?",
        answer: "Yes, we have experience integrating with major core banking platforms including FIS, Fiserv, Jack Henry, and Temenos. We use standard APIs and custom integrations as needed."
      }
    ]
  },
  {
    slug: "capital-markets",
    name: "Capital Markets",
    shortDescription: "Investment platforms & trading systems for financial markets.",
    fullDescription: "Capital markets demand precision, speed, and unwavering reliability. We consult with investment firms, asset managers, and securities companies to architect trading platforms, portfolio analytics tools, and regulatory reporting systems built for the demands of modern finance. Our team understands the nuances of real-time market data, compliance workflows, and investor communication — so we deliver platforms that perform under pressure.",
    icon: Landmark,
    category: "Finance",
    isNew: true,
    whatWeSolve: "Complex trading operations, regulatory compliance burden, fragmented financial data",
    howWeHelp: [
      "Investment platform development for real estate and private equity",
      "Trading systems with real-time market data integration",
      "Asset management and portfolio tracking solutions",
      "Regulatory compliance and reporting automation",
      "High-performance systems for securities operations",
      "Risk analytics and portfolio stress testing tools",
      "Investor reporting and communication portals"
    ],
    tags: ["Real Estate", "Private Equity", "Asset Management", "Securities Firms", "Trading Platforms"],
    services: ["Custom App Development", "AI & Machine Learning", "Data & Analytics"],
    heroImage: capitalMarketsHero,
    caseStudies: [
      {
        company: "Investment Firm Client",
        challenge: "Manual portfolio reporting consuming significant team hours.",
        solution: "Built automated reporting platform with real-time data aggregation.",
        results: [
          "Reporting time reduced meaningfully",
          "Real-time portfolio visibility achieved",
          "Improved investor satisfaction",
          "Compliance reporting streamlined"
        ]
      }
    ],
    faqs: [
      {
        question: "What regulatory requirements do you support?",
        answer: "We support SEC, FINRA, MiFID II, and various other regulatory frameworks. Our solutions include built-in audit trails, reporting capabilities, and compliance monitoring."
      },
      {
        question: "How do you ensure system performance for trading?",
        answer: "We design for low-latency and high-throughput from the start, targeting sub-millisecond latency where required, with high-availability architecture and rigorous load testing."
      }
    ]
  },
  {
    slug: "healthcare-tech",
    name: "Healthcare Tech",
    shortDescription: "Healthcare systems & medical technology for better patient outcomes.",
    fullDescription: "Healthcare technology is about more than software — it's about improving lives. We work closely with hospitals, clinics, telehealth providers, and medtech companies to build HIPAA-compliant platforms that streamline patient care, reduce administrative burden, and unlock the power of clinical data. From AI-assisted diagnostics to seamless EHR integrations, our consulting approach ensures every solution fits your unique clinical workflows and compliance requirements.",
    icon: Heart,
    category: "Public Sector",
    whatWeSolve: "Fragmented patient data, manual workflows, diagnostic delays",
    howWeHelp: [
      "Electronic health record (EHR) integration and optimization",
      "Telemedicine platforms with secure video consultations",
      "AI-assisted diagnostics and medical imaging analysis",
      "Patient scheduling and workflow automation",
      "HIPAA-compliant data storage and security",
      "Remote patient monitoring and wearable integration",
      "Clinical trial data management platforms",
      "Automated insurance claims processing"
    ],
    tags: ["Hospitals", "Clinics", "Telehealth Providers", "Pharmaceutical", "Medical Devices"],
    services: ["Custom App Development", "AI & Machine Learning", "Cloud Solutions"],
    heroImage: healthcareHero,
    caseStudies: [
      {
        company: "Healthcare Network Client",
        challenge: "Long patient wait times and inefficient scheduling across facilities.",
        solution: "Implemented AI-powered scheduling optimization with predictive no-show modeling.",
        results: [
          "Noticeably shorter patient wait times",
          "Fewer missed appointments",
          "Better provider utilization",
          "Meaningful operational cost savings"
        ]
      }
    ],
    faqs: [
      {
        question: "How do you ensure HIPAA compliance?",
        answer: "HIPAA compliance is built into our development process. We implement encryption, access controls, audit logging, and regular security assessments. All team members are HIPAA trained."
      },
      {
        question: "Can you integrate with existing EHR systems?",
        answer: "Yes, we have experience with Epic, Cerner, Allscripts, and other major EHR platforms. We use HL7 FHIR and custom integrations to connect systems seamlessly."
      }
    ]
  },
  {
    slug: "government",
    name: "Government",
    shortDescription: "Public sector & civic technology for efficient government services.",
    fullDescription: "Government agencies face unique challenges: tight budgets, legacy systems, strict compliance requirements, and the need to serve every citizen equitably. We bring a consulting-led approach to public sector modernization — helping agencies digitize paper-based workflows, connect siloed data systems, and build citizen-facing portals that are accessible, secure, and easy to use. Our team understands FedRAMP, WCAG, and the procurement landscape.",
    icon: Landmark,
    category: "Public Sector",
    whatWeSolve: "Legacy system limitations, citizen service delays, data silos across agencies",
    howWeHelp: [
      "Citizen portal and digital service platforms",
      "Legacy system modernization to cloud",
      "Interagency data sharing and integration",
      "Document digitization and workflow automation",
      "FedRAMP and compliance-ready infrastructure",
      "Open data portals for public transparency",
      "GIS-based mapping and analytics for urban planning"
    ],
    tags: ["Federal Agencies", "State & Local Government", "Public Services"],
    services: ["Cloud Migration", "Custom App Development", "AI Process Automation"],
    heroImage: governmentHero,
    caseStudies: [
      {
        company: "Government Agency Client",
        challenge: "Paper-based filing causing significant processing delays.",
        solution: "Built digital filing platform with automated document processing.",
        results: [
          "Faster processing turnaround",
          "High digital adoption among staff",
          "Reduced manual error rates",
          "Improved citizen satisfaction scores"
        ]
      }
    ],
    faqs: [
      {
        question: "Do you have experience with government procurement?",
        answer: "Yes, we are familiar with federal and state procurement processes, including GSA Schedule contracts. We can work within existing contract vehicles or through competitive bidding."
      },
      {
        question: "What security certifications do you support?",
        answer: "We support FedRAMP, StateRAMP, FISMA, and various state-specific security requirements. Our cloud deployments can be configured for government-specific compliance levels."
      }
    ]
  },
  {
    slug: "edutech",
    name: "EduTech",
    shortDescription: "Learning platforms & educational technology for modern education.",
    fullDescription: "Education is being reimagined — and technology is at the center of that transformation. We partner with schools, universities, and corporate training teams to build learning platforms that actually engage learners. Our consulting approach starts with understanding your pedagogy, then layering in adaptive AI, gamification, and mobile-first design to create experiences that measurably improve outcomes. Whether it's a new LMS or enhancing an existing platform, we make learning stick.",
    icon: GraduationCap,
    category: "Public Sector",
    whatWeSolve: "Student engagement, administrative inefficiencies, outdated learning systems",
    howWeHelp: [
      "Learning management systems (LMS) with AI-powered personalization",
      "Virtual classroom and live collaboration platforms",
      "Student performance tracking and predictive analytics",
      "Automated grading and assessment tools",
      "Mobile-first learning apps for accessibility",
      "Gamification engines to boost learner engagement",
      "Content authoring and curriculum management tools",
      "Alumni engagement and placement tracking portals"
    ],
    tags: ["K-12", "Higher Education", "Corporate Training", "Online Course Platforms"],
    services: ["Custom App Development", "AI & Machine Learning", "Mobile Development"],
    heroImage: edutechHero,
    caseStudies: [
      {
        company: "EdTech Platform Client",
        challenge: "Low course completion rates and poor student engagement.",
        solution: "Developed AI-powered adaptive learning platform with gamification.",
        results: [
          "Higher course completion rates",
          "Stronger student engagement observed",
          "Measurably better learning outcomes",
          "Increased platform retention"
        ]
      }
    ],
    faqs: [
      {
        question: "How do you ensure accessibility compliance?",
        answer: "We build to WCAG 2.1 AA standards and test with assistive technologies. Our platforms support screen readers, keyboard navigation, and various accessibility accommodations."
      },
      {
        question: "Can you integrate with existing LMS platforms?",
        answer: "Yes, we support LTI integration with Canvas, Blackboard, Moodle, and other major LMS platforms. We can also build custom integrations for proprietary systems."
      }
    ]
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    shortDescription: "Digital commerce & inventory systems for modern retail.",
    fullDescription: "Retail is no longer just about storefronts or websites — it's about creating a seamless, personalized experience wherever your customers are. We consult with retailers, D2C brands, and marketplace operators to build omnichannel commerce platforms, AI-driven recommendation engines, and real-time inventory systems. Our approach connects your physical and digital channels into one unified experience that drives repeat purchases and deepens customer loyalty.",
    icon: ShoppingCart,
    category: "Commerce & Industry",
    whatWeSolve: "Inventory mismanagement, poor customer personalization, disconnected sales channels",
    howWeHelp: [
      "Omnichannel commerce platform integration",
      "AI-powered product recommendations and search",
      "Real-time inventory tracking and demand forecasting",
      "Customer loyalty and personalization engines",
      "Headless commerce architecture for flexibility",
      "Dynamic pricing and promotion management",
      "Subscription and recurring order platforms",
      "Return & exchange automation workflows"
    ],
    tags: ["Online Retailers", "Brick-and-Mortar Stores", "Marketplaces", "D2C Brands"],
    services: ["Custom App Development", "AI & Machine Learning", "Cloud Solutions"],
    heroImage: retailHero,
    caseStudies: [
      {
        company: "E-commerce Client",
        challenge: "High cart abandonment with generic product recommendations.",
        solution: "Implemented AI-powered personalization across web and mobile.",
        results: [
          "Reduced cart abandonment rate",
          "Improved average order value",
          "Better overall conversion rates",
          "Stronger customer lifetime value"
        ]
      }
    ],
    faqs: [
      {
        question: "How do you handle high-traffic sales events?",
        answer: "We design for scale with auto-scaling cloud infrastructure, CDN optimization, and load testing. Our e-commerce platforms are built to handle significant traffic spikes during peak events."
      },
      {
        question: "Can you integrate with our existing inventory system?",
        answer: "Yes, we integrate with SAP, Oracle, NetSuite, and various WMS platforms. We create real-time sync to ensure inventory accuracy across all channels."
      }
    ]
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    shortDescription: "Industrial automation & IoT for smart manufacturing.",
    fullDescription: "The factory of the future runs on data. We help manufacturers connect their shop floors to the cloud through IoT sensors, real-time monitoring dashboards, and AI-powered predictive maintenance. Our consulting team works with your operations and engineering leaders to identify bottlenecks, reduce unplanned downtime, and implement quality control automation that catches defects before they become costly. From pilot projects to full-scale Industry 4.0 rollouts, we're your technology partner on the plant floor.",
    icon: Factory,
    category: "Commerce & Industry",
    whatWeSolve: "Production inefficiencies, equipment downtime, supply chain blind spots",
    howWeHelp: [
      "IoT-enabled predictive maintenance systems",
      "Real-time production monitoring dashboards",
      "Supply chain visibility and optimization",
      "Quality control automation with computer vision",
      "Digital twin simulations for process improvement",
      "Energy consumption monitoring and optimization",
      "Safety compliance tracking and incident reporting",
      "Shop floor scheduling and workforce management"
    ],
    tags: ["Automotive", "Electronics", "Consumer Goods", "Industrial Equipment"],
    services: ["AI & Machine Learning", "IoT Solutions", "Data & Analytics"],
    heroImage: manufacturingHero,
    caseStudies: [
      {
        company: "Manufacturing Client",
        challenge: "Unplanned equipment downtime affecting production.",
        solution: "Deployed IoT sensors with AI-powered predictive maintenance.",
        results: [
          "Fewer unplanned downtime events",
          "Lower maintenance costs overall",
          "Extended equipment lifespan",
          "Smoother production workflows"
        ]
      }
    ],
    faqs: [
      {
        question: "What IoT platforms do you work with?",
        answer: "We work with AWS IoT, Azure IoT Hub, Google Cloud IoT, and various industrial platforms including Siemens MindSphere and PTC ThingWorx."
      },
      {
        question: "How do you handle connectivity in factory environments?",
        answer: "We design for challenging industrial environments with edge computing, mesh networks, and offline-capable solutions. We work with your IT/OT teams to ensure reliable connectivity."
      }
    ]
  },
  {
    slug: "logistics-supply-chain",
    name: "Logistics & Supply Chain",
    shortDescription: "Transportation & distribution systems for efficient logistics.",
    fullDescription: "Supply chains are only as strong as the technology behind them. We work with 3PLs, freight forwarders, and shippers to build intelligent logistics platforms that provide end-to-end visibility, optimize routes with AI, and automate warehouse operations. Our consulting approach means we start by understanding your unique supply chain challenges — then design solutions that reduce costs, improve delivery performance, and give you real-time control over every shipment.",
    icon: Truck,
    category: "Commerce & Industry",
    whatWeSolve: "Shipment visibility gaps, route inefficiencies, warehouse bottlenecks",
    howWeHelp: [
      "End-to-end shipment tracking and visibility platforms",
      "Route optimization using AI algorithms",
      "Warehouse management system (WMS) implementation",
      "Demand forecasting and inventory optimization",
      "Carrier management and freight audit automation",
      "Last-mile delivery coordination and driver apps",
      "Cold chain monitoring and compliance tracking",
      "Reverse logistics and returns management"
    ],
    tags: ["3PLs", "Freight Forwarders", "Warehousing", "Last-Mile Delivery"],
    services: ["Custom App Development", "AI & Machine Learning", "Mobile Development"],
    heroImage: logisticsHero,
    caseStudies: [
      {
        company: "Logistics Client",
        challenge: "Manual route planning leading to inefficiencies.",
        solution: "Built AI-powered route optimization with real-time traffic integration.",
        results: [
          "Lower fuel costs achieved",
          "Improved on-time delivery rates",
          "Better driver utilization",
          "Measurable operational savings"
        ]
      }
    ],
    faqs: [
      {
        question: "Can you integrate with our existing TMS?",
        answer: "Yes, we integrate with Oracle TMS, SAP TM, Blue Yonder, and other major transportation management systems. We also support EDI and API-based carrier integrations."
      },
      {
        question: "How do you handle multi-carrier environments?",
        answer: "We build unified platforms that aggregate data from multiple carriers, enabling consistent tracking and analytics regardless of carrier. We support all major carrier APIs."
      }
    ]
  },
  {
    slug: "energy-utilities",
    name: "Energy & Utilities",
    shortDescription: "Smart grid & resource management for modern utilities.",
    fullDescription: "The energy sector is undergoing its biggest transformation in a century. We partner with utilities, renewable energy companies, and oil & gas operators to modernize aging infrastructure with smart grid monitoring, predictive maintenance, and sustainability analytics. Our consultants bring deep understanding of SCADA systems, grid operations, and regulatory requirements to help you transition to a cleaner, more resilient, and data-driven energy future.",
    icon: Bolt,
    category: "Commerce & Industry",
    whatWeSolve: "Grid instability, energy waste, aging infrastructure",
    howWeHelp: [
      "Smart grid monitoring and management systems",
      "Renewable energy integration and optimization",
      "Predictive maintenance for utility infrastructure",
      "Customer usage analytics and demand response",
      "SCADA system modernization and security",
      "Carbon footprint tracking and ESG reporting",
      "Distributed energy resource management",
      "Automated meter reading and billing platforms"
    ],
    tags: ["Electric Utilities", "Oil & Gas", "Renewable Energy", "Water & Wastewater"],
    services: ["IoT Solutions", "AI & Machine Learning", "Cloud Solutions"],
    heroImage: energyHero,
    caseStudies: [
      {
        company: "Utility Client",
        challenge: "Grid instability during peak demand causing outages.",
        solution: "Implemented smart grid monitoring with AI-powered demand prediction.",
        results: [
          "Fewer outage incidents reported",
          "Better peak demand management",
          "Reduced energy waste",
          "Improved customer satisfaction"
        ]
      }
    ],
    faqs: [
      {
        question: "How do you handle NERC CIP compliance?",
        answer: "We design solutions with NERC CIP requirements in mind, including access controls, system monitoring, and incident response. Our team includes engineers with utility industry experience."
      },
      {
        question: "Can you integrate with legacy SCADA systems?",
        answer: "Yes, we specialize in connecting modern IT systems with legacy OT infrastructure. We use secure gateways and protocol converters to enable data flow while maintaining security."
      }
    ]
  },
  {
    slug: "quantum-computing",
    name: "Quantum Computing",
    shortDescription: "Quantum solutions for complex computational challenges.",
    fullDescription: "Quantum computing isn't science fiction — it's becoming a practical tool for solving problems that classical computers simply can't handle. We consult with forward-thinking organizations to identify where quantum and quantum-inspired approaches can deliver real business value today. From optimization challenges in logistics and finance to post-quantum cryptography readiness, our team bridges the gap between cutting-edge research and practical enterprise applications.",
    icon: Atom,
    category: "AI & Technology",
    isNew: true,
    whatWeSolve: "Intractable optimization problems, cryptographic vulnerabilities, complex molecular simulations",
    howWeHelp: [
      "Quantum readiness assessment and use case identification",
      "Quantum algorithm development for specific business problems",
      "Hybrid quantum-classical system architecture",
      "Post-quantum cryptography implementation",
      "Quantum simulation for drug discovery and materials science",
      "Quantum machine learning model prototyping",
      "Quantum-safe security audits and migration plans"
    ],
    tags: ["Quantum Algorithms", "Optimization", "Cryptography", "Simulation", "Hybrid Computing"],
    services: ["AI & Machine Learning", "Custom App Development", "Data & Analytics"],
    heroImage: quantumComputingHero,
    caseStudies: [
      {
        company: "Enterprise Client",
        challenge: "Complex optimization problems taking too long with classical methods.",
        solution: "Developed quantum-inspired optimization algorithm with hybrid quantum-classical architecture.",
        results: [
          "Dramatically faster optimization times",
          "Improved route efficiency",
          "Meaningful operational cost reduction",
          "Reduced carbon footprint"
        ]
      }
    ],
    faqs: [
      {
        question: "Is quantum computing ready for production use?",
        answer: "While universal fault-tolerant quantum computers are still developing, specific applications in optimization, simulation, and cryptography can deliver real value today using hybrid quantum-classical approaches and quantum-inspired algorithms."
      },
      {
        question: "What kind of problems benefit from quantum computing?",
        answer: "Quantum excels at combinatorial optimization (logistics, scheduling), molecular simulation (drug discovery, materials), cryptography, machine learning, and financial modeling where classical computers hit fundamental limits."
      }
    ]
  }
];

export const getIndustryBySlug = (slug: string): IndustryDetail | undefined => {
  return industriesData.find(industry => industry.slug === slug);
};

export const getAllIndustryCategories = (): string[] => {
  return [...new Set(industriesData.map(industry => industry.category))];
};

export const getIndustriesByCategory = (category: string): IndustryDetail[] => {
  return industriesData.filter(industry => industry.category === category);
};
