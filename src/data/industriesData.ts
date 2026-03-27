import { 
  Brain, RefreshCw, Building2, CreditCard, Landmark, Users, Heart, GraduationCap, 
  ShoppingCart, Factory, Truck, Bolt, Atom, LucideIcon
} from "lucide-react";

// Hero images
import aiTechHero from "@/assets/industries/ai-tech-hero.jpg";
import legacyTransformHero from "@/assets/industries/legacy-transform-hero.jpg";
import bankingHero from "@/assets/industries/banking-hero.jpg";
import fintechHero from "@/assets/industries/fintech-hero.jpg";
import creditUnionsHero from "@/assets/industries/credit-unions-hero.jpg";
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
    fullDescription: "Whether you're exploring AI for the first time or scaling existing models, we act as your dedicated AI consulting partner. We work alongside your team to assess readiness, identify high-impact use cases, build custom models, and deploy them into production — ensuring every AI initiative ties directly to measurable business outcomes. Our hands-on approach means you get working solutions, not just slide decks. From predictive analytics and natural language processing to computer vision and generative AI, we deliver production-ready ML systems that drive measurable business impact. For businesses, AI-powered automation typically delivers significant ROI within the first year through reduced manual effort, improved accuracy, and faster processing. Our MLOps practices ensure models maintain accuracy over time with continuous monitoring and retraining. Industry-specific solutions address challenges in healthcare, finance, retail, and manufacturing. We leverage cutting-edge model architectures, automated hyperparameter tuning, and intelligent feature engineering to build AI systems that learn and improve continuously — turning your data into a sustainable competitive\u00A0advantage.",
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
    fullDescription: "Legacy systems don't have to hold you back. We specialize in bridging the gap between your existing infrastructure and modern AI capabilities — without the risk of a full rip-and-replace. Our consultants map your current architecture, identify quick-win automation opportunities, and build API layers that let AI tools talk to your legacy databases. The result: you start seeing value in weeks, not years, while your core operations keep running smoothly. We've guided organizations through gradual transformations that preserve existing investments while unlocking the power of modern analytics and machine learning. Our phased approach starts with a thorough technical audit of your current systems, followed by a prioritized roadmap that balances quick wins with long-term strategic goals. We build secure API gateways and data extraction pipelines that normalize legacy data formats for AI processing while maintaining full data integrity. Whether you're running COBOL on mainframes, legacy .NET applications, or outdated ERP systems, our engineers have the expertise to connect these systems to cloud-native AI services. Change management and team upskilling are built into every engagement, ensuring your staff can operate and extend the modernized systems\u00A0independently.",
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
    slug: "banking",
    name: "Banking & Financial Services",
    shortDescription: "Digital transformation and core modernization for banks.",
    fullDescription: "Banks face unprecedented pressure to modernize — from evolving customer expectations to tightening regulations and rising competition from digital-first challengers. We partner with retail banks, commercial banks, and financial holding companies to modernize core banking systems, digitize customer journeys, and strengthen risk and compliance infrastructure. Our consultants bring deep domain expertise in regulatory frameworks including Basel III, Dodd-Frank, and PSD2, ensuring every technology decision aligns with compliance requirements from day one. We architect secure, scalable platforms for real-time payment processing, digital account opening, and omnichannel customer engagement. Our AI-powered credit risk models analyze thousands of data points to deliver faster, more accurate lending decisions while reducing default rates. For banks modernizing legacy mainframe systems, we design phased migration strategies that minimize operational disruption and preserve institutional knowledge. From treasury management and wire transfer systems to mortgage origination platforms and wealth management portals, we deliver enterprise-grade solutions that help banks compete confidently in a digital-first\u00A0world.",
    icon: Building2,
    category: "Finance",
    whatWeSolve: "Legacy core banking limitations, slow digital transformation, regulatory compliance burden",
    howWeHelp: [
      "Core banking system modernization and migration",
      "Digital account opening and customer onboarding",
      "Real-time payment processing and settlement",
      "AI-powered credit risk assessment and scoring",
      "Regulatory compliance automation (Basel III, Dodd-Frank)",
      "Omnichannel banking platform development",
      "Treasury management and wire transfer systems",
      "Mortgage origination and loan management platforms"
    ],
    tags: ["Retail Banks", "Commercial Banks", "Regional Banks", "Community Banks", "Mortgage Lenders"],
    services: ["Custom App Development", "AI & Machine Learning", "Cloud Solutions"],
    heroImage: bankingHero,
    caseStudies: [
      {
        company: "Regional Bank Client",
        challenge: "Legacy core banking system limiting digital product launches.",
        solution: "Phased core modernization with API layer enabling rapid digital product deployment.",
        results: [
          "Digital account opening launched in weeks",
          "Processing time for loans significantly reduced",
          "Customer satisfaction scores improved",
          "Regulatory audit preparation streamlined"
        ]
      }
    ],
    faqs: [
      {
        question: "How do you handle core banking migrations?",
        answer: "We use a phased approach — building API layers around legacy systems first, then gradually migrating modules. This minimizes risk and keeps operations running smoothly throughout the transition."
      },
      {
        question: "What regulatory frameworks do you support?",
        answer: "We have experience with Basel III, Dodd-Frank, PCI-DSS, SOC 2, GDPR, and various state and federal banking regulations. Compliance is built into our development process from day one."
      }
    ]
  },
  {
    slug: "fintech",
    name: "FinTech & Digital Payments",
    shortDescription: "Scalable payment platforms and financial innovation for fintech companies.",
    fullDescription: "FinTech is rewriting the rules of finance — and you need a technology partner who moves at your speed. We work with payment processors, neobanks, lending platforms, insurtech startups, and embedded finance companies to build scalable, secure platforms that disrupt traditional financial services. From real-time payment rails and digital wallet infrastructure to AI-driven fraud detection and automated KYC/AML pipelines, we deliver production-ready systems designed for explosive growth. Our engineers understand the unique challenges of fintech — balancing rapid iteration with regulatory compliance, building for scale from day one, and integrating with complex financial ecosystems. We implement machine learning models that detect fraudulent transactions in milliseconds, reducing false positives while catching sophisticated attack patterns. For companies navigating PSD2, Open Banking, and embedded finance regulations, we build compliant API ecosystems that turn regulatory requirements into competitive advantages. Whether you're launching a new payment product, scaling a lending platform, or building the next generation of financial infrastructure, we bring the technical depth and domain expertise to help you move\u00A0fast.",
    icon: CreditCard,
    category: "Finance",
    isNew: true,
    whatWeSolve: "Scaling payment infrastructure, fraud prevention, regulatory complexity for startups",
    howWeHelp: [
      "Digital wallet and mobile payment platforms",
      "Real-time payment processing and settlement engines",
      "ML-based fraud detection and transaction scoring",
      "KYC/AML compliance automation pipelines",
      "Open Banking API integration (PSD2 compliant)",
      "Embedded finance and Banking-as-a-Service platforms",
      "Lending platform development and credit decisioning",
      "Payment gateway and processor integrations"
    ],
    tags: ["Payment Processors", "Neobanks", "Lending Platforms", "InsurTech", "Embedded Finance"],
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
        question: "Can you build for scale from day one?",
        answer: "Absolutely. We architect fintech platforms using microservices, event-driven design, and cloud-native infrastructure that can handle millions of transactions. Our systems are designed to scale horizontally as your user base grows."
      },
      {
        question: "How do you handle payment compliance?",
        answer: "We build PCI-DSS compliant systems with end-to-end encryption, tokenization, and comprehensive audit trails. We also support PSD2, Open Banking, and various regional financial regulations."
      }
    ]
  },
  {
    slug: "credit-unions",
    name: "Credit Unions",
    shortDescription: "Member-centric technology solutions for credit unions and cooperatives.",
    fullDescription: "Credit unions exist to serve their members — and your technology should reflect that mission. We partner with credit unions and financial cooperatives to build member-centric digital platforms that enhance the member experience while streamlining operations and reducing costs. Unlike big-bank technology that prioritizes profit maximization, our solutions are designed around the cooperative model — emphasizing financial inclusion, community engagement, and member lifetime value. We help credit unions modernize without losing their identity: digital member onboarding that feels personal, mobile banking apps that rival the big banks, and AI-powered financial wellness tools that help members build stronger financial futures. Our loan origination automation reduces processing time from days to minutes while maintaining the personal touch that sets credit unions apart. We implement shared branching technology, ATM network integrations, and core system modernizations specifically tailored to the NCUA regulatory framework. For credit union service organizations (CUSOs), we develop shared technology platforms that give smaller credit unions access to enterprise-grade capabilities. Every solution we build strengthens the credit union's ability to compete with larger institutions while staying true to its community-first\u00A0mission.",
    icon: Users,
    category: "Finance",
    isNew: true,
    whatWeSolve: "Limited digital capabilities, member engagement gaps, operational inefficiencies",
    howWeHelp: [
      "Digital member onboarding and account opening",
      "Mobile banking apps tailored for credit union members",
      "AI-powered financial wellness and budgeting tools",
      "Loan origination automation and decisioning",
      "Shared branching and ATM network integration",
      "Core system modernization (NCUA compliant)",
      "Member engagement and communication platforms",
      "CUSO shared technology platform development"
    ],
    tags: ["Credit Unions", "Financial Cooperatives", "CUSOs", "Community Banking", "Member Services"],
    services: ["Custom App Development", "AI & Machine Learning", "Cloud Solutions"],
    heroImage: creditUnionsHero,
    caseStudies: [
      {
        company: "Credit Union Client",
        challenge: "Low digital adoption and high operational costs from manual processes.",
        solution: "Launched mobile banking platform with automated loan origination and member self-service.",
        results: [
          "Digital adoption increased significantly",
          "Loan processing time reduced dramatically",
          "Operational costs lowered",
          "Member satisfaction scores improved"
        ]
      }
    ],
    faqs: [
      {
        question: "Do you understand credit union-specific regulations?",
        answer: "Yes, we have experience with NCUA regulations, the Federal Credit Union Act, and state-specific requirements. Our solutions are built to meet the unique compliance needs of credit unions and cooperatives."
      },
      {
        question: "Can smaller credit unions afford your solutions?",
        answer: "Absolutely. We design scalable solutions that work for credit unions of all sizes. We also build shared platforms for CUSOs that allow smaller credit unions to access enterprise-grade technology at a fraction of the cost."
      }
    ]
  },
  {
    slug: "capital-markets",
    name: "Capital Markets",
    shortDescription: "Investment platforms & trading systems for financial markets.",
    fullDescription: "Capital markets demand precision, speed, and unwavering reliability. We consult with investment firms, asset managers, and securities companies to architect trading platforms, portfolio analytics tools, and regulatory reporting systems built for the demands of modern finance. Our team understands the nuances of real-time market data, compliance workflows, and investor communication — so we deliver platforms that perform under pressure. From high-frequency trading infrastructure that requires sub-millisecond latency to sophisticated risk analytics engines that model portfolio stress scenarios, we build systems designed for the most demanding financial environments. Our automated regulatory reporting solutions cover SEC, FINRA, MiFID II, and other global frameworks, eliminating manual compliance burden while ensuring audit-ready accuracy. We integrate with leading market data providers and custodians to create unified platforms that give portfolio managers real-time visibility across asset classes. For private equity and real estate investment firms, we develop investor portals and fund administration platforms that automate capital calls, distributions, and performance reporting. Every solution is engineered with enterprise-grade security, high-availability architecture, and rigorous load testing to ensure your systems never miss a\u00A0beat.",
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
    fullDescription: "Healthcare technology is about more than software — it's about improving lives. We work closely with hospitals, clinics, telehealth providers, and medtech companies to build HIPAA-compliant platforms that streamline patient care, reduce administrative burden, and unlock the power of clinical data. From AI-assisted diagnostics to seamless EHR integrations, our consulting approach ensures every solution fits your unique clinical workflows and compliance requirements. Our telemedicine platforms support secure video consultations, remote patient monitoring, and chronic care management programs that extend care beyond the clinic walls. We implement AI-powered diagnostic tools that analyze medical imaging, pathology slides, and clinical notes to support faster, more accurate clinical decisions. Patient scheduling optimization reduces wait times and no-show rates through predictive modeling, while automated insurance claims processing accelerates revenue cycles. For clinical research organizations, we build trial data management platforms that streamline participant recruitment, data collection, and regulatory submissions. Our wearable integration capabilities connect remote monitoring devices to clinical dashboards, enabling proactive intervention before conditions escalate. Every system is built with HIPAA compliance at its core — encryption, access controls, audit logging, and regular security assessments are standard, not\u00A0optional.",
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
    fullDescription: "Government agencies face unique challenges: tight budgets, legacy systems, strict compliance requirements, and the need to serve every citizen equitably. We bring a consulting-led approach to public sector modernization — helping agencies digitize paper-based workflows, connect siloed data systems, and build citizen-facing portals that are accessible, secure, and easy to use. Our team understands FedRAMP, WCAG, and the procurement landscape. We've helped agencies at federal, state, and local levels transform service delivery through modern web portals, automated document processing, and interagency data sharing platforms. Our GIS-based mapping and analytics solutions support urban planning, emergency response, and infrastructure management with real-time spatial intelligence. For agencies managing large-scale permitting, licensing, or benefits programs, we build end-to-end digital workflows that reduce processing times from weeks to hours. Open data portals promote transparency and civic engagement while meeting compliance requirements. Our cloud migration strategies are designed specifically for government environments, supporting FedRAMP, StateRAMP, FISMA, and agency-specific security frameworks. Accessibility is built into every interface we deliver — WCAG 2.1 AA compliance, screen reader support, and keyboard navigation ensure equal access for all\u00A0citizens.",
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
    fullDescription: "Education is being reimagined — and technology is at the center of that transformation. We partner with schools, universities, and corporate training teams to build learning platforms that actually engage learners. Our consulting approach starts with understanding your pedagogy, then layering in adaptive AI, gamification, and mobile-first design to create experiences that measurably improve outcomes. Whether it's a new LMS or enhancing an existing platform, we make learning stick. Our AI-powered personalization engines adapt content difficulty, pacing, and presentation style to each individual learner's needs, creating truly customized learning paths that maximize knowledge retention. Virtual classroom platforms support live collaboration, breakout rooms, and interactive whiteboards that replicate — and often improve upon — the in-person learning experience. Predictive analytics identify at-risk students early, enabling timely interventions that improve completion rates and academic performance. Gamification engines incorporate points, badges, leaderboards, and challenge-based learning to drive intrinsic motivation. For corporate training teams, we build competency tracking systems that align learning outcomes with business objectives and career development paths. Content authoring tools empower subject matter experts to create and update course materials without developer involvement. Every platform is built with accessibility at its core — WCAG compliance, multi-language support, and offline-capable mobile apps ensure learning is available to\u00A0everyone.",
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
    fullDescription: "Retail is no longer just about storefronts or websites — it's about creating a seamless, personalized experience wherever your customers are. We consult with retailers, D2C brands, and marketplace operators to build omnichannel commerce platforms, AI-driven recommendation engines, and real-time inventory systems. Our approach connects your physical and digital channels into one unified experience that drives repeat purchases and deepens customer loyalty. Our AI-powered product recommendation engines analyze browsing behavior, purchase history, and contextual signals to surface the right products at the right time — across web, mobile, email, and in-store displays. Real-time inventory tracking integrates POS systems, warehouses, and online channels to eliminate stockouts and overselling. Dynamic pricing algorithms optimize margins while remaining competitive, adjusting in real time to demand signals and competitor pricing. For subscription and recurring order businesses, we build flexible platforms that handle billing, fulfillment, and customer self-service. Headless commerce architectures give your marketing team the freedom to create rich, branded experiences across any touchpoint without backend constraints. Our personalization engines power targeted promotions, loyalty programs, and customer segmentation that turn one-time buyers into lifelong brand advocates — all while scaling seamlessly during peak traffic\u00A0events.",
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
    fullDescription: "The factory of the future runs on data. We help manufacturers connect their shop floors to the cloud through IoT sensors, real-time monitoring dashboards, and AI-powered predictive maintenance. Our consulting team works with your operations and engineering leaders to identify bottlenecks, reduce unplanned downtime, and implement quality control automation that catches defects before they become costly. From pilot projects to full-scale Industry 4.0 rollouts, we're your technology partner on the plant floor. Our IoT-enabled predictive maintenance systems analyze vibration, temperature, and performance data from equipment sensors to predict failures before they occur, extending asset lifespans and eliminating costly unplanned downtime. Computer vision quality control systems inspect products at line speed with accuracy that exceeds manual inspection, catching micro-defects invisible to the human eye. Digital twin simulations model your production processes in virtual environments, enabling you to test process changes and optimize throughput without risking actual production. Energy consumption monitoring identifies waste and optimizes usage across facilities, reducing costs and supporting sustainability goals. Safety compliance tracking automates incident reporting and ensures adherence to OSHA and industry-specific safety standards. Our shop floor scheduling and workforce management tools balance demand with capacity, minimize changeover times, and improve overall equipment effectiveness — turning raw operational data into actionable intelligence that drives continuous\u00A0improvement.",
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
    fullDescription: "Supply chains are only as strong as the technology behind them. We work with 3PLs, freight forwarders, and shippers to build intelligent logistics platforms that provide end-to-end visibility, optimize routes with AI, and automate warehouse operations. Our consulting approach means we start by understanding your unique supply chain challenges — then design solutions that reduce costs, improve delivery performance, and give you real-time control over every shipment. Our AI-powered route optimization engines factor in traffic patterns, weather conditions, delivery windows, and vehicle capacity to minimize fuel costs and maximize on-time delivery rates. Warehouse management systems integrate with your existing infrastructure to automate receiving, putaway, picking, packing, and shipping workflows. Demand forecasting models analyze historical data, seasonal trends, and market signals to optimize inventory levels across your distribution network, reducing carrying costs while preventing stockouts. Carrier management platforms aggregate rates, track performance, and automate freight audit processes across your carrier portfolio. For last-mile delivery operations, we build driver apps with real-time navigation, proof-of-delivery capture, and dynamic re-routing capabilities. Cold chain monitoring ensures temperature-sensitive shipments maintain compliance throughout the journey, with automated alerts and audit trails. Our reverse logistics solutions streamline returns processing, reducing cycle times and recovering value from returned\u00A0inventory.",
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
    fullDescription: "The energy sector is undergoing its biggest transformation in a century. We partner with utilities, renewable energy companies, and oil & gas operators to modernize aging infrastructure with smart grid monitoring, predictive maintenance, and sustainability analytics. Our consultants bring deep understanding of SCADA systems, grid operations, and regulatory requirements to help you transition to a cleaner, more resilient, and data-driven energy future. Smart grid monitoring systems provide real-time visibility into generation, transmission, and distribution networks, enabling rapid response to outages and load imbalances. Our predictive maintenance solutions analyze sensor data from transformers, turbines, and transmission lines to forecast equipment failures and optimize maintenance schedules. For renewable energy operators, we build optimization platforms that maximize solar and wind output through weather prediction, panel/turbine performance analytics, and grid integration planning. Customer usage analytics and demand response programs help utilities manage peak loads, reduce infrastructure strain, and engage customers in energy conservation. Carbon footprint tracking and ESG reporting dashboards give organizations the data they need to meet sustainability targets and regulatory obligations. SCADA system modernization connects operational technology to modern IT infrastructure securely, enabling advanced analytics without compromising critical infrastructure security. Our automated meter reading and billing platforms improve revenue accuracy while reducing operational costs — transforming traditional utilities into data-driven energy\u00A0companies.",
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
    fullDescription: "Quantum computing isn't science fiction — it's becoming a practical tool for solving problems that classical computers simply can't handle. We consult with forward-thinking organizations to identify where quantum and quantum-inspired approaches can deliver real business value today. From optimization challenges in logistics and finance to post-quantum cryptography readiness, our team bridges the gap between cutting-edge research and practical enterprise applications. Our quantum readiness assessments evaluate your computational challenges against current quantum capabilities, identifying use cases where quantum advantage is achievable now versus those better suited for near-term quantum-inspired algorithms. We develop hybrid quantum-classical architectures that leverage the best of both paradigms — using quantum processors for specific optimization subroutines while classical systems handle the rest. For financial institutions, we build quantum-powered portfolio optimization and risk simulation models that explore solution spaces exponentially faster than traditional methods. In drug discovery and materials science, our quantum simulation capabilities model molecular interactions at a level of fidelity impossible with classical computation. Post-quantum cryptography implementation ensures your organization's encryption remains secure against future quantum attacks, with migration plans that minimize operational disruption. Our quantum machine learning prototypes explore novel approaches to pattern recognition and classification that push beyond the limits of classical\u00A0AI.",
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
