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
  stat: string;
  statLabel: string;
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
    fullDescription: "We help technology companies harness the full potential of artificial intelligence. From AI readiness assessment to custom model development and deployment, we provide end-to-end AI solutions that drive innovation and competitive advantage.",
    icon: Brain,
    category: "AI & Technology",
    stat: "10x",
    statLabel: "Faster Insights",
    isNew: true,
    whatWeSolve: "Lack of AI expertise, failed AI implementations, unstructured data chaos",
    howWeHelp: [
      "AI readiness assessment and strategy roadmap",
      "Custom ML model development for your specific use case",
      "Data preparation, labeling, and pipeline setup",
      "AI model deployment, monitoring, and retraining",
      "Responsible AI implementation with bias detection"
    ],
    tags: ["Chatbots", "Recommendation Engines", "Document Processing", "Predictive Models", "Computer Vision"],
    services: ["AI & Machine Learning", "Generative AI Solutions", "Agentic AI, Agents & Tools"],
    heroImage: aiTechHero,
    caseStudies: [
      {
        company: "TechVenture Labs",
        challenge: "Struggling to integrate AI capabilities into their existing SaaS platform.",
        solution: "Developed a comprehensive AI strategy and implemented custom ML models for predictive analytics.",
        results: [
          "10x faster data insights",
          "40% increase in user engagement",
          "New AI-powered features launched in 3 months",
          "$2M additional ARR from AI features"
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
    fullDescription: "Transform your outdated systems into AI-powered platforms without disrupting your operations. We specialize in gradual modernization that extracts value from your existing investments while preparing you for the AI-driven future.",
    icon: RefreshCw,
    category: "AI & Technology",
    stat: "60%",
    statLabel: "Process Automation",
    isNew: true,
    whatWeSolve: "Outdated systems that can't support AI, data trapped in legacy databases, slow manual processes",
    howWeHelp: [
      "Legacy system audit and AI opportunity mapping",
      "Data extraction and migration from legacy databases",
      "API layer creation to connect old systems with AI tools",
      "Gradual AI integration without full system replacement",
      "Change management and team upskilling"
    ],
    tags: ["Assessment", "Data Prep", "Pilot AI Project", "Scale", "Optimize"],
    services: ["AI Process Automation", "Cloud Migration", "DevOps & CI/CD"],
    heroImage: legacyTransformHero,
    caseStudies: [
      {
        company: "Industrial Corp",
        challenge: "30-year-old ERP system couldn't support modern analytics or AI.",
        solution: "Created API bridges and data pipelines to enable AI without replacing core systems.",
        results: [
          "60% of manual processes automated",
          "Real-time analytics on legacy data",
          "Zero downtime during transformation",
          "$5M saved vs full system replacement"
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
    fullDescription: "We deliver cutting-edge technology solutions for banks, credit unions, payment processors, and fintech startups. From real-time payment systems to AI-powered fraud detection, we help financial institutions stay competitive and compliant.",
    icon: CreditCard,
    category: "Finance",
    stat: "$2T+",
    statLabel: "Transactions Processed",
    whatWeSolve: "Slow transaction processing, fraud vulnerabilities, regulatory complexity",
    howWeHelp: [
      "Real-time payment processing and settlement systems",
      "Fraud detection using machine learning models",
      "KYC/AML compliance automation",
      "Digital banking and mobile wallet platforms",
      "Blockchain-based secure transaction ledgers"
    ],
    tags: ["Banks", "Credit Unions", "Payment Processors", "Insurance", "Lending Platforms"],
    services: ["AI & Machine Learning", "Custom App Development", "Cloud Solutions"],
    heroImage: fintechHero,
    caseStudies: [
      {
        company: "Regional Bank Network",
        challenge: "Fraud losses increasing 30% year-over-year with existing rule-based system.",
        solution: "Implemented ML-based fraud detection with real-time transaction scoring.",
        results: [
          "85% reduction in fraud losses",
          "False positive rate reduced by 60%",
          "Real-time detection in under 100ms",
          "$10M saved in first year"
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
    fullDescription: "We build high-performance solutions for real estate investment, private equity, asset management, and securities trading. Our platforms handle complex financial operations with the speed, security, and reliability that capital markets demand.",
    icon: Landmark,
    category: "Finance",
    stat: "$500B+",
    statLabel: "Assets Managed",
    isNew: true,
    whatWeSolve: "Complex trading operations, regulatory compliance burden, fragmented financial data",
    howWeHelp: [
      "Investment platform development for real estate and private equity",
      "Trading systems with real-time market data integration",
      "Asset management and portfolio tracking solutions",
      "Regulatory compliance and reporting automation",
      "High-performance systems for securities operations"
    ],
    tags: ["Real Estate", "Private Equity", "Asset Management", "Securities Firms", "Trading Platforms"],
    services: ["Custom App Development", "AI & Machine Learning", "Data & Analytics"],
    heroImage: capitalMarketsHero,
    caseStudies: [
      {
        company: "Global Asset Partners",
        challenge: "Manual portfolio reporting taking 40+ hours per quarter.",
        solution: "Built automated reporting platform with real-time data aggregation.",
        results: [
          "Reporting time reduced by 95%",
          "Real-time portfolio visibility",
          "Investor satisfaction increased 50%",
          "Compliance reporting automated"
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
        answer: "We design for low-latency and high-throughput from the start. Our trading systems achieve sub-millisecond latency where required, with 99.99% uptime SLAs."
      }
    ]
  },
  {
    slug: "healthcare-tech",
    name: "Healthcare Tech",
    shortDescription: "Healthcare systems & medical technology for better patient outcomes.",
    fullDescription: "We develop HIPAA-compliant healthcare solutions that improve patient outcomes, streamline operations, and reduce costs. From telemedicine platforms to AI-assisted diagnostics, we help healthcare organizations embrace digital transformation.",
    icon: Heart,
    category: "Public Sector",
    stat: "10M+",
    statLabel: "Patients Served",
    whatWeSolve: "Fragmented patient data, manual workflows, diagnostic delays",
    howWeHelp: [
      "Electronic health record (EHR) integration and optimization",
      "Telemedicine platforms with secure video consultations",
      "AI-assisted diagnostics and medical imaging analysis",
      "Patient scheduling and workflow automation",
      "HIPAA-compliant data storage and security"
    ],
    tags: ["Hospitals", "Clinics", "Telehealth Providers", "Pharmaceutical", "Medical Devices"],
    services: ["Custom App Development", "AI & Machine Learning", "Cloud Solutions"],
    heroImage: healthcareHero,
    caseStudies: [
      {
        company: "Metro Health System",
        challenge: "Long patient wait times and inefficient scheduling across 12 facilities.",
        solution: "Implemented AI-powered scheduling optimization with predictive no-show modeling.",
        results: [
          "Wait times reduced by 40%",
          "No-show rate decreased 25%",
          "Provider utilization up 30%",
          "$3M annual savings"
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
    fullDescription: "We help government agencies modernize their technology infrastructure and improve citizen services. Our solutions are designed for the unique requirements of public sector organizations, including FedRAMP compliance and accessibility standards.",
    icon: Landmark,
    category: "Public Sector",
    stat: "50+",
    statLabel: "Agencies Served",
    whatWeSolve: "Legacy system limitations, citizen service delays, data silos across agencies",
    howWeHelp: [
      "Citizen portal and digital service platforms",
      "Legacy system modernization to cloud",
      "Interagency data sharing and integration",
      "Document digitization and workflow automation",
      "FedRAMP and compliance-ready infrastructure"
    ],
    tags: ["Federal Agencies", "State & Local Government", "Public Services"],
    services: ["Cloud Migration", "Custom App Development", "AI Process Automation"],
    heroImage: governmentHero,
    caseStudies: [
      {
        company: "State Department of Revenue",
        challenge: "Paper-based tax filing causing 6-week processing delays.",
        solution: "Built digital filing platform with automated document processing.",
        results: [
          "Processing time reduced to 3 days",
          "80% of filings now digital",
          "Error rate decreased 70%",
          "Annual savings of $15M"
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
    fullDescription: "We create engaging educational technology that improves learning outcomes for K-12, higher education, and corporate training. Our platforms combine modern UX with AI-powered personalization to make learning more effective and accessible.",
    icon: GraduationCap,
    category: "Public Sector",
    stat: "500M+",
    statLabel: "Learners Impacted",
    whatWeSolve: "Student engagement, administrative inefficiencies, outdated learning systems",
    howWeHelp: [
      "Learning management systems (LMS) with AI-powered personalization",
      "Virtual classroom and live collaboration platforms",
      "Student performance tracking and predictive analytics",
      "Automated grading and assessment tools",
      "Mobile-first learning apps for accessibility"
    ],
    tags: ["K-12", "Higher Education", "Corporate Training", "Online Course Platforms"],
    services: ["Custom App Development", "AI & Machine Learning", "Mobile Development"],
    heroImage: edutechHero,
    caseStudies: [
      {
        company: "National Learning Academy",
        challenge: "50% course completion rates and poor student engagement.",
        solution: "Developed AI-powered adaptive learning platform with gamification.",
        results: [
          "Completion rates increased to 85%",
          "Student engagement up 200%",
          "Learning outcomes improved 40%",
          "Enrollment grew 60%"
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
    fullDescription: "We help retailers and e-commerce businesses create seamless shopping experiences across all channels. From AI-powered recommendations to real-time inventory management, we build solutions that drive sales and customer loyalty.",
    icon: ShoppingCart,
    category: "Commerce & Industry",
    stat: "99.9%",
    statLabel: "Uptime Guaranteed",
    whatWeSolve: "Inventory mismanagement, poor customer personalization, disconnected sales channels",
    howWeHelp: [
      "Omnichannel commerce platform integration",
      "AI-powered product recommendations and search",
      "Real-time inventory tracking and demand forecasting",
      "Customer loyalty and personalization engines",
      "Headless commerce architecture for flexibility"
    ],
    tags: ["Online Retailers", "Brick-and-Mortar Stores", "Marketplaces", "D2C Brands"],
    services: ["Custom App Development", "AI & Machine Learning", "Cloud Solutions"],
    heroImage: retailHero,
    caseStudies: [
      {
        company: "Fashion Forward Retail",
        challenge: "Cart abandonment at 75% with generic product recommendations.",
        solution: "Implemented AI-powered personalization across web and mobile.",
        results: [
          "Cart abandonment reduced to 45%",
          "Average order value up 35%",
          "Conversion rate doubled",
          "$20M additional annual revenue"
        ]
      }
    ],
    faqs: [
      {
        question: "How do you handle high-traffic sales events?",
        answer: "We design for scale with auto-scaling cloud infrastructure, CDN optimization, and load testing. Our e-commerce platforms have handled 100x traffic spikes during Black Friday events."
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
    fullDescription: "We enable smart manufacturing with IoT, AI, and automation solutions. From predictive maintenance to quality control, we help manufacturers increase efficiency, reduce downtime, and improve product quality.",
    icon: Factory,
    category: "Commerce & Industry",
    stat: "40%",
    statLabel: "Efficiency Gains",
    whatWeSolve: "Production inefficiencies, equipment downtime, supply chain blind spots",
    howWeHelp: [
      "IoT-enabled predictive maintenance systems",
      "Real-time production monitoring dashboards",
      "Supply chain visibility and optimization",
      "Quality control automation with computer vision",
      "Digital twin simulations for process improvement"
    ],
    tags: ["Automotive", "Electronics", "Consumer Goods", "Industrial Equipment"],
    services: ["AI & Machine Learning", "IoT Solutions", "Data & Analytics"],
    heroImage: manufacturingHero,
    caseStudies: [
      {
        company: "Precision Manufacturing Co",
        challenge: "Unplanned equipment downtime costing $2M annually.",
        solution: "Deployed IoT sensors with AI-powered predictive maintenance.",
        results: [
          "Unplanned downtime reduced 80%",
          "Maintenance costs down 30%",
          "Equipment lifespan extended 25%",
          "$1.5M annual savings"
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
    fullDescription: "We optimize logistics and supply chain operations with AI-powered planning, real-time visibility, and automation. Our solutions help 3PLs, freight companies, and shippers reduce costs and improve service levels.",
    icon: Truck,
    category: "Commerce & Industry",
    stat: "25%",
    statLabel: "Cost Reduction",
    whatWeSolve: "Shipment visibility gaps, route inefficiencies, warehouse bottlenecks",
    howWeHelp: [
      "End-to-end shipment tracking and visibility platforms",
      "Route optimization using AI algorithms",
      "Warehouse management system (WMS) implementation",
      "Demand forecasting and inventory optimization",
      "Carrier management and freight audit automation"
    ],
    tags: ["3PLs", "Freight Forwarders", "Warehousing", "Last-Mile Delivery"],
    services: ["Custom App Development", "AI & Machine Learning", "Mobile Development"],
    heroImage: logisticsHero,
    caseStudies: [
      {
        company: "National Logistics Partners",
        challenge: "Manual route planning costing 20% more than optimal.",
        solution: "Built AI-powered route optimization with real-time traffic integration.",
        results: [
          "Fuel costs reduced 25%",
          "On-time delivery improved to 98%",
          "Driver utilization up 30%",
          "$8M annual savings"
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
    fullDescription: "We help energy and utility companies modernize their infrastructure with smart grid technology, predictive maintenance, and renewable energy integration. Our solutions improve reliability, reduce costs, and support sustainability goals.",
    icon: Bolt,
    category: "Commerce & Industry",
    stat: "30%",
    statLabel: "Energy Savings",
    whatWeSolve: "Grid instability, energy waste, aging infrastructure",
    howWeHelp: [
      "Smart grid monitoring and management systems",
      "Renewable energy integration and optimization",
      "Predictive maintenance for utility infrastructure",
      "Customer usage analytics and demand response",
      "SCADA system modernization and security"
    ],
    tags: ["Electric Utilities", "Oil & Gas", "Renewable Energy", "Water & Wastewater"],
    services: ["IoT Solutions", "AI & Machine Learning", "Cloud Solutions"],
    heroImage: energyHero,
    caseStudies: [
      {
        company: "Regional Power Authority",
        challenge: "Grid instability during peak demand causing outages.",
        solution: "Implemented smart grid monitoring with AI-powered demand prediction.",
        results: [
          "Outages reduced 70%",
          "Peak demand managed 30% better",
          "Energy waste reduced 25%",
          "Customer satisfaction up 45%"
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
    fullDescription: "We pioneer quantum computing applications that solve problems beyond classical computing limits. From quantum algorithm development to hybrid quantum-classical systems, we help forward-thinking organizations harness the power of quantum mechanics for optimization, simulation, and cryptography.",
    icon: Atom,
    category: "AI & Technology",
    stat: "1000x",
    statLabel: "Faster Optimization",
    isNew: true,
    whatWeSolve: "Intractable optimization problems, cryptographic vulnerabilities, complex molecular simulations",
    howWeHelp: [
      "Quantum readiness assessment and use case identification",
      "Quantum algorithm development for specific business problems",
      "Hybrid quantum-classical system architecture",
      "Post-quantum cryptography implementation",
      "Quantum simulation for drug discovery and materials science"
    ],
    tags: ["Quantum Algorithms", "Optimization", "Cryptography", "Simulation", "Hybrid Computing"],
    services: ["AI & Machine Learning", "Custom App Development", "Data & Analytics"],
    heroImage: quantumComputingHero,
    caseStudies: [
      {
        company: "Global Logistics Corp",
        challenge: "Route optimization across 10,000+ delivery points taking days with classical methods.",
        solution: "Developed quantum-inspired optimization algorithm with hybrid quantum-classical architecture.",
        results: [
          "Optimization time reduced from 72 hours to 4 minutes",
          "15% improvement in route efficiency",
          "Annual fuel savings of $12M",
          "Carbon footprint reduced by 20%"
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
