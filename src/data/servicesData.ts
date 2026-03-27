import { 
  Code2, Cloud, Server, RefreshCw, TestTube, Headphones, Settings, Database,
  Shield, Smartphone, Brain, Layers, Zap, Users, BarChart3, Lock,
  LucideIcon, Bot, Sparkles, MessageSquare, Eye, FileText, Workflow, AlertTriangle,
  UserCheck, ClipboardList, Briefcase, Monitor, Phone, Cog, Globe, BookOpen, Building2, UserPlus, GraduationCap, Target,
  HeartPulse, DollarSign, FileCheck
} from "lucide-react";

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  logo?: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  category: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  pricing: PricingTier[];
  caseStudies: CaseStudy[];
  faqs: { question: string; answer: string }[];
}

// Standard pricing approach for all services
const createContactPricing = (serviceName: string): PricingTier[] => [
  {
    name: "Starter",
    price: "Contact Us",
    description: "For small teams getting started",
    features: [
      "Scoped project assessment",
      "Tailored implementation plan",
      "Core functionality delivery",
      "Documentation & handoff",
      "Post-launch support"
    ]
  },
  {
    name: "Growth",
    price: "Contact Us",
    description: "For growing businesses",
    features: [
      "Comprehensive solution design",
      "Full implementation",
      "Integrations included",
      "Extended support period",
      "Training & knowledge transfer"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    description: "For large organizations",
    features: [
      "Custom architecture",
      "Dedicated team",
      "Priority support",
      "Ongoing optimization",
      "Strategic consulting"
    ]
  }
];

export const servicesData: ServiceDetail[] = [
  // ==================== ARTIFICIAL INTELLIGENCE ====================
  {
    slug: "ai-machine-learning",
    name: "AI & Machine Learning",
    shortDescription: "Intelligent solutions powered by cutting-edge AI and ML technologies.",
    fullDescription: "Harness the power of artificial intelligence to automate processes, gain insights, and create innovative products that transform how your business operates. Our AI/ML team builds custom models and implements proven AI solutions that deliver measurable business outcomes across industries. For businesses, AI-powered automation typically delivers 3-5x ROI within the first year through reduced manual effort, improved accuracy, and faster decision-making. From predictive analytics and recommendation engines to anomaly detection and computer vision, we cover the full spectrum of ML capabilities. Our MLOps practices ensure models maintain accuracy over time with continuous monitoring and retraining. We leverage cutting-edge frameworks and AI-accelerated development to build production-ready ML systems — turning your data into intelligent applications that drive competitive advantage.",
    icon: Brain,
    category: "Artificial Intelligence",
    features: [
      "Custom ML model development",
      "Predictive analytics & forecasting",
      "Recommendation engines",
      "Anomaly detection systems",
      "Object detection and image classification",
      "Video analytics and real-time processing",
      "Quality inspection automation",
      "Model serving APIs (REST & gRPC)",
      "Containerized model deployment",
      "Auto-scaling inference infrastructure",
      "A/B testing and canary releases",
      "Model versioning and rollback"
    ],
    benefits: [
      "Automate repetitive tasks",
      "Make data-driven decisions",
      "Personalize customer experiences",
      "Gain competitive insights",
      "Improve operational efficiency"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Langchain", "Hugging Face", "AWS SageMaker", "Azure ML"],
    pricing: createContactPricing("AI & Machine Learning"),
    caseStudies: [
      {
        company: "Insurance Client",
        industry: "Insurance",
        challenge: "Manual claims processing taking too long and prone to errors.",
        solution: "Implemented AI-powered claims processing with document OCR and fraud detection.",
        results: [
          "Significantly faster claims processing",
          "Improved fraud detection accuracy",
          "Reduced operational overhead",
          "Better customer satisfaction scores"
        ]
      }
    ],
    faqs: [
      {
        question: "Do I need a lot of data to implement AI?",
        answer: "It depends on the use case. Pre-trained models can work with minimal data, while custom models typically need substantial datasets. We can help assess your data readiness and augment if needed."
      },
      {
        question: "How do you ensure AI model accuracy?",
        answer: "We use rigorous validation methodologies, continuous monitoring, and feedback loops. Models are tested extensively before deployment and monitored for drift in production."
      }
    ]
  },
  {
    slug: "generative-ai-solutions",
    name: "Generative AI Solutions",
    shortDescription: "Build intelligent applications powered by GPT, Claude, and other large language models.",
    fullDescription: "Leverage the latest generative AI technologies to transform your business operations at scale. From custom chatbots and content generation systems to RAG-powered knowledge assistants, we help you harness the power of large language models to automate complex tasks, enhance customer experiences, and drive innovation. For businesses, generative AI can automate 60-70% of knowledge work — from drafting documents and analyzing contracts to answering customer queries with human-like accuracy. Our RAG architectures ground AI responses in your proprietary data, ensuring accurate and relevant outputs. Prompt engineering and safety guardrails ensure responsible AI usage aligned with brand voice and compliance. We leverage cutting-edge LLM technologies and AI-powered quality monitoring to build enterprise-grade generative AI solutions — augmenting your workforce with capabilities that drive productivity and innovation.",
    icon: Sparkles,
    category: "Artificial Intelligence",
    features: [
      "Custom LLM integration (GPT-4, Claude, Gemini)",
      "RAG (Retrieval-Augmented Generation) systems",
      "Fine-tuning for domain-specific tasks",
      "Prompt engineering and optimization",
      "AI-powered content generation",
      "Multi-channel chatbots (web, mobile, voice)",
      "Natural language understanding and sentiment analysis",
      "Live agent handoff and CRM integration",
      "Multi-language support",
      "AI safety and guardrails"
    ],
    benefits: [
      "Accelerate content creation workflows",
      "Automate customer support interactions",
      "Extract insights from unstructured data",
      "Scale personalized communications",
      "Improve research and development efficiency"
    ],
    technologies: ["OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "Langchain", "LlamaIndex", "Pinecone", "Weaviate", "Hugging Face"],
    pricing: createContactPricing("Generative AI Solutions"),
    caseStudies: [
      {
        company: "Legal Services Client",
        industry: "Legal",
        challenge: "Legal team spending significant time on document review and research.",
        solution: "Built an AI-powered legal research assistant with RAG for document analysis and case law retrieval.",
        results: [
          "Faster research turnaround",
          "Improved document review efficiency",
          "Better accuracy in case preparation",
          "More time for strategic legal work"
        ]
      }
    ],
    faqs: [
      {
        question: "Which LLM should we use for our project?",
        answer: "The choice depends on your specific needs. GPT-4 excels at general tasks, Claude is great for long documents and safety, and open-source models offer more control. We help you evaluate and select the best fit."
      },
      {
        question: "How do you ensure AI responses are accurate?",
        answer: "We implement RAG systems grounded in your data, add verification layers, use prompt engineering for consistency, and build feedback loops for continuous improvement."
      }
    ]
  },
  {
    slug: "ai-process-automation",
    name: "AI Process Automation",
    shortDescription: "Intelligent automation combining AI with RPA for end-to-end process optimization.",
    fullDescription: "Go beyond traditional automation with AI-powered intelligent process automation that combines robotic process automation (RPA) with machine learning to create smart workflows that learn, adapt, and make decisions autonomously. We transform complex business processes from manual and error-prone to intelligent and self-optimizing. For businesses, intelligent automation delivers 40-60% cost reduction in process operations while improving accuracy to near-perfect levels. Document processing, email triage, and decision workflows that once required human judgment can now be handled by AI with appropriate oversight. Our solutions integrate seamlessly with existing enterprise systems without disruptive rearchitecture. We leverage AI-powered workflow optimization, intelligent document processing, and adaptive decision engines to build automation that continuously improves — delivering operational excellence that scales with your business growth.",
    icon: Workflow,
    category: "Artificial Intelligence",
    features: [
      "Intelligent document processing",
      "Email and communication automation",
      "Decision automation with ML",
      "Process mining and discovery",
      "Exception handling with AI",
      "Workflow orchestration",
      "Integration with existing RPA tools",
      "Continuous process improvement"
    ],
    benefits: [
      "Automate manual processes effectively",
      "Reduce processing errors significantly",
      "Free employees for higher-value work",
      "Achieve faster turnaround times",
      "Scale operations efficiently"
    ],
    technologies: ["UiPath", "Automation Anywhere", "Blue Prism", "Power Automate", "Python", "TensorFlow", "AWS Textract", "Azure Form Recognizer"],
    pricing: createContactPricing("AI Process Automation"),
    caseStudies: [
      {
        company: "Financial Services Client",
        industry: "Banking",
        challenge: "Loan processing taking too long with extensive manual document review.",
        solution: "Implemented intelligent document processing with automated data extraction and decision support.",
        results: [
          "Faster loan processing turnaround",
          "High document processing accuracy",
          "Improved staff productivity",
          "Reduced operational overhead"
        ]
      }
    ],
    faqs: [
      {
        question: "How is this different from traditional RPA?",
        answer: "Traditional RPA follows rigid rules and breaks when things change. AI-powered automation understands documents, makes decisions, handles exceptions, and improves over time through learning."
      },
      {
        question: "Which processes should we automate first?",
        answer: "We recommend starting with high-volume, rule-based processes with clear ROI. We conduct process discovery to identify and prioritize the best automation candidates."
      }
    ]
  },
  {
    slug: "agentic-ai-agents-tools",
    name: "Agentic AI, Agents & Tools",
    shortDescription: "Autonomous AI systems, intelligent assistants, and MLOps infrastructure for enterprise AI.",
    fullDescription: "Build and deploy the full spectrum of AI capabilities—from autonomous agents that reason and act independently, to specialized assistants that augment your team, to the MLOps infrastructure that powers it all. We deliver end-to-end AI solutions that scale from prototype to production.",
    icon: Bot,
    category: "Artificial Intelligence",
    features: [
      "Autonomous multi-agent orchestration",
      "Task planning and goal-oriented execution",
      "Tool use, function calling, and API integration",
      "Domain-specific AI assistants",
      "Voice, text, and multi-modal interactions",
      "Human-in-the-loop workflows and escalation",
      "MLOps platform and CI/CD for models",
      "Experiment tracking and model registry",
      "Feature stores and data labeling",
      "Guardrails, governance, and audit trails"
    ],
    benefits: [
      "Automate complex multi-step workflows",
      "Deploy 24/7 intelligent assistants",
      "Scale expertise across your organization",
      "Accelerate ML development cycles",
      "Reduce manual oversight requirements"
    ],
    technologies: ["LangGraph", "CrewAI", "OpenAI Assistants", "Anthropic Claude", "MLflow", "Kubeflow", "Weights & Biases", "Langchain", "Vercel AI SDK"],
    pricing: createContactPricing("Agentic AI, Agents & Tools"),
    caseStudies: [
      {
        company: "Analytics Client",
        industry: "Business Intelligence",
        challenge: "Data analysts spending too much time on repetitive report generation.",
        solution: "Deployed autonomous AI agents that investigate data anomalies, generate reports, and proactively surface insights with full MLOps infrastructure.",
        results: [
          "Faster report generation",
          "Analysts focus on strategic work",
          "More proactive insights surfaced",
          "Streamlined model deployment process"
        ]
      }
    ],
    faqs: [
      {
        question: "How do you ensure agentic AI systems are safe?",
        answer: "We implement multiple safety layers including human-in-the-loop for critical actions, action boundaries and sandboxing, comprehensive logging, and rollback capabilities. Agents operate within defined guardrails while maintaining autonomy."
      },
      {
        question: "Can AI agents learn our specific products and processes?",
        answer: "Yes, we train agents on your documentation, knowledge bases, and historical interactions. Agents become domain experts while we maintain mechanisms for continuous learning and improvement."
      },
      {
        question: "Do we need a large team to benefit from these tools?",
        answer: "Not at all. Proper tooling helps smaller teams work efficiently. We scale solutions to your team size, and good practices early prevent technical debt as you grow."
      }
    ]
  },
  // ==================== DEVELOPMENT & ENGINEERING ====================
  {
    slug: "custom-app-development",
    name: "Custom App Development",
    shortDescription: "Tailored web and enterprise applications built to solve your unique business challenges.",
    fullDescription: "We design and develop custom applications that perfectly align with your business processes and goals. From internal tools to customer-facing platforms, our team creates scalable, secure, and user-friendly applications that drive efficiency and growth.",
    icon: Code2,
    category: "Development & Engineering",
    features: [
      "Enterprise software solutions",
      "SaaS platform development",
      "Internal tools and dashboards",
      "E-commerce and marketplace platforms",
      "Real-time collaboration tools",
      "Workflow automation systems",
      "Third-party system integration",
      "Scalable architecture design"
    ],
    benefits: [
      "Solve unique business challenges",
      "Improve operational efficiency",
      "Gain competitive advantage",
      "Full ownership of your solution",
      "Scalable architecture for growth"
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "Redis", "GraphQL", "AWS", "Docker"],
    pricing: createContactPricing("Custom App Development"),
    caseStudies: [
      {
        company: "Logistics Client",
        industry: "Logistics",
        challenge: "Managing fleet operations across multiple locations with outdated spreadsheets.",
        solution: "Built a custom fleet management platform with real-time tracking, route optimization, and driver management.",
        results: [
          "Reduced fuel costs",
          "Improved delivery times",
          "Real-time visibility across fleet",
          "Better driver productivity"
        ]
      }
    ],
    faqs: [
      {
        question: "What's the difference between custom and off-the-shelf software?",
        answer: "Custom software is built specifically for your needs, offering perfect fit, flexibility, and competitive advantage. Off-the-shelf is faster to deploy but may require workarounds and lacks differentiation."
      },
      {
        question: "How do you ensure the application scales with our business?",
        answer: "We design with scalability in mind from day one, using cloud-native architecture, microservices where appropriate, and performance testing to ensure your app grows with you."
      }
    ]
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    shortDescription: "Native and cross-platform mobile applications for iOS and Android.",
    fullDescription: "Create powerful mobile experiences that engage your users and drive business growth. Our mobile development team specializes in both native and cross-platform solutions, ensuring your app delivers exceptional performance and user experience on every device.",
    icon: Smartphone,
    category: "Development & Engineering",
    features: [
      "React Native & Flutter development",
      "Native iOS (Swift) and Android (Kotlin)",
      "App Store optimization",
      "Push notifications & analytics",
      "Offline-first architecture",
      "Biometric authentication",
      "Payment integration",
      "Real-time synchronization"
    ],
    benefits: [
      "Reach customers on their preferred devices",
      "Increase user engagement",
      "Generate new revenue streams",
      "Build brand loyalty through mobile presence",
      "Collect valuable user behavior data"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL", "Redux", "App Store Connect"],
    pricing: createContactPricing("Mobile App Development"),
    caseStudies: [
      {
        company: "Retail Client",
        industry: "Retail",
        challenge: "Needed a mobile commerce platform to compete with larger retailers.",
        solution: "Built a cross-platform shopping app with personalized recommendations and seamless checkout.",
        results: [
          "Strong app downloads post-launch",
          "Meaningful portion of sales from mobile",
          "High app store ratings",
          "Improved customer retention"
        ]
      }
    ],
    faqs: [
      {
        question: "Should I choose native or cross-platform development?",
        answer: "Cross-platform (React Native/Flutter) is cost-effective and faster for most apps. Native development is recommended for apps requiring complex animations, AR/VR features, or maximum performance."
      },
      {
        question: "How long does it take to get an app on the App Store?",
        answer: "Development typically takes 3-6 months. App Store review takes 1-3 days for iOS and 1-7 days for Google Play. We handle the entire submission process."
      }
    ]
  },
  {
    slug: "cloud-migration",
    name: "Cloud Migration & Deployment",
    shortDescription: "Seamless transition from legacy systems to modern cloud infrastructure.",
    fullDescription: "Accelerate your digital transformation with comprehensive cloud migration services that minimize risk and maximize the benefits of cloud computing. We help you move to the cloud strategically — from assessment and planning to execution and optimization — ensuring improved scalability, cost optimization, and enhanced performance. For businesses, cloud migration eliminates capital expenditure on aging hardware and provides elastic scalability that matches demand in real-time. Our Well-Architected reviews ensure every migrated workload meets security, reliability, and cost benchmarks. Automated discovery tools map dependencies to prevent migration surprises. We leverage AI-powered migration planning, intelligent resource sizing, and automated testing to reduce migration timelines by up to 50% — delivering seamless cloud transitions with zero data loss and minimal downtime.",
    icon: Cloud,
    category: "Cloud & Infrastructure",
    features: [
      "Readiness assessment & planning",
      "AWS, Azure, and GCP expertise",
      "Zero-downtime transitions",
      "Cost optimization strategies",
      "Multi-cloud and hybrid architectures",
      "Containerization with Docker & Kubernetes",
      "Data migration and validation",
      "Post-migration optimization"
    ],
    benefits: [
      "Reduce infrastructure costs",
      "Improve application performance",
      "Enable global scalability",
      "Enhance disaster recovery capabilities",
      "Increase deployment speed"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes", "Docker", "Ansible", "CloudFormation"],
    pricing: createContactPricing("Cloud Migration & Deployment"),
    caseStudies: [
      {
        company: "Media Client",
        industry: "Media & Entertainment",
        challenge: "On-premise infrastructure couldn't handle streaming traffic spikes during popular events.",
        solution: "Migrated to AWS with auto-scaling architecture and global CDN implementation.",
        results: [
          "Handles traffic spikes seamlessly",
          "Reduced infrastructure costs",
          "High uptime achieved",
          "Improved global latency"
        ]
      }
    ],
    faqs: [
      {
        question: "How long does a typical cloud migration take?",
        answer: "Simple migrations can be completed in 4-8 weeks. Complex enterprise migrations may take 6-12 months. We provide detailed timelines during the assessment phase."
      },
      {
        question: "Will there be downtime during migration?",
        answer: "We specialize in zero-downtime migrations using techniques like blue-green deployments and gradual traffic shifting. Critical systems remain operational throughout."
      }
    ]
  },
  {
    slug: "it-infrastructure-management",
    name: "IT Infrastructure Management",
    shortDescription: "24/7 monitoring and management of your critical IT infrastructure.",
    fullDescription: "Keep your infrastructure running at peak performance with our comprehensive management services. Our team provides round-the-clock monitoring, proactive maintenance, and rapid incident response to ensure your systems are always available and secure.",
    icon: Server,
    category: "Cloud & Infrastructure",
    features: [
      "Proactive system monitoring",
      "Server & network administration",
      "Disaster recovery & business continuity",
      "Vendor coordination & management",
      "Capacity planning & forecasting",
      "Performance tuning & optimization",
      "Patch management & updates",
      "Backup & restore operations"
    ],
    benefits: [
      "99.9%+ uptime guarantee",
      "Reduce IT operational costs",
      "Proactive issue prevention",
      "Focus on core business",
      "Access to expert IT team"
    ],
    technologies: ["Datadog", "Prometheus", "Grafana", "PagerDuty", "Ansible", "Nagios", "VMware", "Veeam"],
    pricing: createContactPricing("IT Infrastructure Management"),
    caseStudies: [
      {
        company: "Logistics Client",
        industry: "Logistics",
        challenge: "Frequent system outages affecting tracking and delivery operations.",
        solution: "Implemented comprehensive monitoring, automated failover, and 24/7 NOC support.",
        results: [
          "Improved system uptime",
          "Faster recovery times",
          "IT team freed for strategic projects",
          "Reduced downtime costs"
        ]
      }
    ],
    faqs: [
      {
        question: "What's included in 24/7 monitoring?",
        answer: "We monitor server health, network performance, application availability, security events, and resource utilization. Alerts are configured based on your priorities and our team responds immediately to critical issues."
      },
      {
        question: "Can you manage hybrid (cloud + on-premise) infrastructure?",
        answer: "Absolutely. We have expertise in managing hybrid environments across multiple cloud providers and on-premise data centers with unified monitoring and management."
      }
    ]
  },
  {
    slug: "devops-sre",
    name: "DevOps & Site Reliability Engineering",
    shortDescription: "Streamlined development operations and site reliability engineering.",
    fullDescription: "Transform your software delivery with modern DevOps practices and SRE principles. We help you build reliable, scalable systems with automated pipelines, infrastructure as code, and observability solutions that enable rapid, confident deployments.",
    icon: Settings,
    category: "Cloud & Infrastructure",
    features: [
      "Automated build & deploy pipelines",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Container orchestration",
      "SLO/SLI definition & tracking",
      "Full-stack observability",
      "GitOps workflows & practices",
      "Automated quality gates",
      "Blue-green & canary deployments"
    ],
    benefits: [
      "Deploy more frequently",
      "Reduce deployment failures",
      "Faster incident recovery",
      "Improved developer productivity",
      "Better system reliability"
    ],
    technologies: ["Jenkins", "GitHub Actions", "GitLab CI", "Terraform", "Kubernetes", "Helm", "ArgoCD", "Prometheus"],
    pricing: createContactPricing("DevOps & Site Reliability Engineering"),
    caseStudies: [
      {
        company: "SaaS Client",
        industry: "Software",
        challenge: "Infrequent releases causing extended downtime and customer complaints.",
        solution: "Implemented GitOps, Kubernetes, and comprehensive CI/CD with automated testing.",
        results: [
          "More frequent deployments",
          "Zero-downtime deployments achieved",
          "Fewer release failures",
          "Better developer satisfaction"
        ]
      }
    ],
    faqs: [
      {
        question: "How long does a DevOps transformation take?",
        answer: "Initial implementation takes 2-4 months. Full cultural adoption and maturity typically takes 6-12 months. We provide ongoing support and training throughout the journey."
      },
      {
        question: "Do you work with existing tools or recommend new ones?",
        answer: "We evaluate your current toolchain and recommend improvements where needed. We're tool-agnostic and focus on implementing practices that work best for your team and technology stack."
      }
    ]
  },
  {
    slug: "data-engineering",
    name: "Data Engineering",
    shortDescription: "Build robust data pipelines and warehousing solutions.",
    fullDescription: "Unlock the value of your data with modern data engineering solutions that transform raw information into actionable intelligence. We design and build scalable data pipelines, warehouses, and data lakes that enable real-time analytics, support AI/ML initiatives, and drive data-driven decision making across your organization. For businesses, unified data platforms eliminate costly data silos — our clients typically see 20-30% improvement in operational efficiency within months of implementation. Modern data stack approaches using dbt, Airflow, and cloud warehouses ensure data quality, governance, and self-service access. Real-time streaming architectures enable immediate business reactions to events. We leverage AI-powered data quality monitoring, automated pipeline optimization, and intelligent anomaly detection to build trustworthy data infrastructure — delivering the foundation for analytics and AI that drives measurable business outcomes.",
    icon: Database,
    category: "Data & Analytics",
    features: [
      "ETL pipeline development",
      "Data warehouse design",
      "Real-time data streaming",
      "Data governance frameworks",
      "Data quality management",
      "Lake house architecture",
      "Master data management",
      "Data catalog implementation"
    ],
    benefits: [
      "Enable real-time analytics",
      "Improve data quality and trust",
      "Reduce data silos",
      "Support AI/ML initiatives",
      "Ensure regulatory compliance"
    ],
    technologies: ["Snowflake", "BigQuery", "Redshift", "Apache Spark", "Airflow", "dbt", "Kafka", "Databricks"],
    pricing: createContactPricing("Data Engineering"),
    caseStudies: [
      {
        company: "E-commerce Client",
        industry: "Retail",
        challenge: "Data scattered across multiple systems, making reporting slow.",
        solution: "Built unified data platform with Snowflake, real-time pipelines, and self-service BI.",
        results: [
          "Faster reporting turnaround",
          "Improved data freshness",
          "Self-service analytics adoption",
          "Better marketing visibility"
        ]
      }
    ],
    faqs: [
      {
        question: "Which data warehouse should I choose?",
        answer: "It depends on your ecosystem and requirements. Snowflake offers flexibility, BigQuery integrates well with GCP, and Redshift is ideal for AWS-heavy organizations. We help you make the right choice."
      },
      {
        question: "How do you handle data security and compliance?",
        answer: "We implement encryption at rest and in transit, role-based access control, audit logging, and data masking. Our solutions are designed to meet GDPR, HIPAA, and SOC2 requirements."
      }
    ]
  },
  {
    slug: "business-intelligence",
    name: "Business Intelligence",
    shortDescription: "Transform data into actionable insights for better decision-making.",
    fullDescription: "Empower your organization with powerful business intelligence solutions that make data accessible and actionable for stakeholders at all levels. We build custom dashboards, automated reports, and self-service analytics platforms that transform complex datasets into clear, compelling visual narratives. For businesses, organizations with mature BI capabilities make decisions 5x faster and see measurable improvements in revenue and operational efficiency. Our approach democratizes data access — empowering business users to explore data independently without IT bottlenecks. Embedded analytics bring insights directly into existing workflows and customer-facing products. We leverage AI-powered insight discovery, natural language querying, and automated report generation to maximize BI adoption — turning data into a strategic asset that drives confident, timely decisions across every level of your organization.",
    icon: BarChart3,
    category: "Data & Analytics",
    features: [
      "Interactive dashboards",
      "KPI tracking & reporting",
      "Advanced data visualization",
      "Self-service analytics",
      "Embedded analytics",
      "Automated report generation",
      "Mobile-friendly solutions",
      "Executive scorecards"
    ],
    benefits: [
      "Data-driven decision making",
      "Real-time business visibility",
      "Reduced reporting effort",
      "Democratized data access",
      "Faster insights to action"
    ],
    technologies: ["Tableau", "Power BI", "Looker", "Metabase", "Superset", "Sigma", "ThoughtSpot", "Qlik"],
    pricing: createContactPricing("Business Intelligence"),
    caseStudies: [
      {
        company: "Financial Services Client",
        industry: "Banking",
        challenge: "Executives lacked real-time visibility into branch performance and customer metrics.",
        solution: "Deployed Power BI platform with real-time dashboards and mobile access.",
        results: [
          "Faster decision-making",
          "Improved performance visibility",
          "Reduced manual reporting",
          "Mobile access for executives"
        ]
      }
    ],
    faqs: [
      {
        question: "Which BI tool do you recommend?",
        answer: "It depends on your needs. Power BI is great for Microsoft shops, Tableau excels at visualization, Looker for embedded analytics, and Metabase for open-source solutions. We assess your requirements to recommend the best fit."
      },
      {
        question: "Can you connect to our existing data sources?",
        answer: "Yes, modern BI tools connect to virtually any data source including databases, cloud storage, APIs, and spreadsheets. We handle all the integration and data modeling."
      }
    ]
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity Services",
    shortDescription: "Protect your digital assets with enterprise-grade security solutions.",
    fullDescription: "Safeguard your business from evolving cyber threats with comprehensive security services that cover every aspect of your digital footprint. From vulnerability assessments and penetration testing to managed security operations and incident response, we help you build a robust security posture that protects your assets and reputation. For businesses, the average cost of a data breach exceeds $4.45 million — our proactive security approach identifies and mitigates vulnerabilities before attackers can exploit them. 24/7 SOC monitoring provides continuous threat detection with mean time to detect under 15 minutes. Employee security training reduces phishing susceptibility by up to 90%. We leverage AI-enhanced threat detection, automated incident response, and intelligent vulnerability prioritization to deliver comprehensive cybersecurity — protecting your organization while enabling confident digital transformation.",
    icon: Shield,
    category: "Security",
    features: [
      "Comprehensive security assessments",
      "Penetration testing & red teaming",
      "Vulnerability scanning & remediation",
      "SIEM deployment & tuning",
      "Zero trust architecture design",
      "Identity & access controls (SSO, MFA, RBAC)",
      "Incident response planning",
      "Security awareness programs"
    ],
    benefits: [
      "Reduce security risks",
      "Achieve compliance certification",
      "Protect brand reputation",
      "Prevent costly breaches",
      "Build customer trust"
    ],
    technologies: ["Splunk", "CrowdStrike", "Okta", "Palo Alto", "Qualys", "Snyk", "HashiCorp Vault", "AWS Security Hub"],
    pricing: createContactPricing("Cybersecurity Services"),
    caseStudies: [
      {
        company: "Healthcare Client",
        industry: "Healthcare",
        challenge: "Needed to achieve HIPAA compliance and improve security posture for regulatory approval.",
        solution: "Conducted comprehensive security assessment, implemented controls, and established security program.",
        results: [
          "HIPAA compliance achieved",
          "Regulatory approval obtained",
          "Reduced security vulnerabilities",
          "Improved security awareness"
        ]
      }
    ],
    faqs: [
      {
        question: "How often should we conduct penetration testing?",
        answer: "We recommend annual penetration testing at minimum, with additional tests after major changes. High-risk industries may require quarterly testing. Continuous vulnerability scanning should complement periodic pentests."
      },
      {
        question: "Can you help with compliance (SOC2, HIPAA, GDPR)?",
        answer: "Yes, we have deep expertise in major compliance frameworks. We help you understand requirements, implement necessary controls, prepare documentation, and support you through audits."
      }
    ]
  },
  {
    slug: "production-support",
    name: "Production Support",
    shortDescription: "24/7 application monitoring, incident response, and optimization.",
    fullDescription: "Keep your applications running smoothly with production support services backed by experienced teams and intelligent monitoring. We provide round-the-clock monitoring, rapid incident response, and continuous optimization to ensure your systems deliver consistent performance and availability. For businesses, unplanned downtime costs an average of $5,600 per minute — our proactive monitoring and structured escalation processes prevent incidents before they impact revenue and customer trust. Tiered support (L1-L3) ensures the right expertise handles each issue efficiently. Automated runbooks accelerate resolution of common scenarios. We leverage AI-enhanced incident correlation, predictive alerting, and automated root cause analysis to continuously improve service reliability — delivering production stability that gives your business the confidence to grow without technology constraints.",
    icon: Headphones,
    category: "Support & Consulting",
    features: [
      "Round-the-clock monitoring",
      "Incident management & triage",
      "Root cause analysis",
      "SLA management & reporting",
      "Performance tuning",
      "Release deployment support",
      "On-call engineering coverage",
      "Runbook automation"
    ],
    benefits: [
      "99.9%+ application uptime",
      "Faster incident resolution",
      "Reduced operational burden",
      "Predictable support costs",
      "Expert technical support"
    ],
    technologies: ["PagerDuty", "Opsgenie", "ServiceNow", "Datadog", "New Relic", "Splunk", "Jira Service Desk", "Statuspage"],
    pricing: createContactPricing("Production Support"),
    caseStudies: [
      {
        company: "FinTech Platform Client",
        industry: "Financial Services",
        challenge: "Internal team overwhelmed with support requests, impacting development velocity.",
        solution: "Implemented L1/L2 support model with 24/7 coverage and automated incident response.",
        results: [
          "Reduced developer time on support",
          "Faster issue resolution",
          "Fewer customer complaints",
          "Improved uptime"
        ]
      }
    ],
    faqs: [
      {
        question: "What's included in 24/7 support?",
        answer: "Our 24/7 support includes continuous monitoring, immediate alert response, incident triage and resolution, escalation management, and post-incident analysis. We're always available when you need us."
      },
      {
        question: "How do you handle knowledge transfer?",
        answer: "We conduct thorough onboarding including documentation review, architecture deep-dives, and shadowing periods. We maintain runbooks and continuously update our knowledge base."
      }
    ]
  },
  {
    slug: "digital-transformation-consulting",
    name: "Digital Transformation Consulting",
    shortDescription: "Strategic guidance for your digital transformation journey.",
    fullDescription: "Navigate your digital transformation with confidence. Our consultants bring deep industry expertise and technology knowledge to help you develop and execute strategies that drive meaningful business outcomes.",
    icon: Zap,
    category: "Support & Consulting",
    features: [
      "Technology roadmapping",
      "Process optimization",
      "Change management",
      "ROI analysis",
      "Vendor selection",
      "Architecture review",
      "Innovation workshops",
      "Digital maturity assessment"
    ],
    benefits: [
      "Clear transformation roadmap",
      "Reduced implementation risk",
      "Accelerated time to value",
      "Aligned technology investments",
      "Organizational readiness"
    ],
    technologies: ["Enterprise Architecture", "Agile", "Design Thinking", "OKRs", "TOGAF", "SAFe", "Lean", "Six Sigma"],
    pricing: createContactPricing("Digital Transformation Consulting"),
    caseStudies: [
      {
        company: "Manufacturing Client",
        industry: "Manufacturing",
        challenge: "Established company struggling to compete with digitally-native competitors.",
        solution: "Developed digital transformation roadmap, prioritized initiatives, and led implementation oversight.",
        results: [
          "Increased digital revenue",
          "Improved operational efficiency",
          "Reduced customer acquisition cost",
          "Stronger competitive position"
        ]
      }
    ],
    faqs: [
      {
        question: "How is consulting different from implementation?",
        answer: "Consulting focuses on strategy, planning, and guidance. We help you make the right decisions and create actionable roadmaps. Implementation is the execution of those plans, which we can also support."
      },
      {
        question: "Do you stay involved during implementation?",
        answer: "We offer various engagement models. Many clients choose to have us provide implementation oversight to ensure the strategy is executed as intended and to help navigate challenges."
      }
    ]
  },
  {
    slug: "team-augmentation",
    name: "Team Augmentation",
    shortDescription: "Scale your team with skilled professionals on demand.",
    fullDescription: "Extend your team's capabilities with our experienced professionals. Whether you need specialized skills for a project or long-term team expansion, we provide vetted experts who integrate seamlessly with your existing team and culture.",
    icon: Users,
    category: "Support & Consulting",
    features: [
      "Senior engineers and architects",
      "Flexible engagement models",
      "Domain and industry expertise",
      "Seamless team integration",
      "Rapid onboarding (under 2 weeks)",
      "Skill gap coverage",
      "Project-based or long-term options",
      "Global time zone coverage"
    ],
    benefits: [
      "Faster time to hire",
      "Reduced recruitment costs",
      "Flexible team scaling",
      "Access to specialized skills",
      "Lower overhead costs"
    ],
    technologies: ["All major tech stacks", "React", "Node.js", "Python", "Java", ".NET", "AWS", "Azure", "DevOps"],
    pricing: createContactPricing("Team Augmentation"),
    caseStudies: [
      {
        company: "Growth Startup Client",
        industry: "Technology",
        challenge: "Needed to scale engineering capacity quickly for product launch.",
        solution: "Provided senior developers and QA engineers with rapid onboarding and integration.",
        results: [
          "Team scaled quickly",
          "Product launched on schedule",
          "Cost-effective compared to local hiring",
          "Some augmented resources converted to full-time"
        ]
      }
    ],
    faqs: [
      {
        question: "How quickly can you provide resources?",
        answer: "For common skill sets, we can provide resources within 1-2 weeks. Specialized roles may take 2-4 weeks. We maintain a bench of pre-vetted professionals to enable rapid deployment."
      },
      {
        question: "How do you ensure quality and cultural fit?",
        answer: "We have a rigorous vetting process including technical assessments, soft skills evaluation, and cultural fit interviews. We also offer a 2-week replacement guarantee if the fit isn't right."
      }
    ]
  },
  {
    slug: "api-development",
    name: "API Development & Integration",
    shortDescription: "Seamless connectivity between your systems and third-party services.",
    fullDescription: "Build robust APIs and integrations that connect your systems, unlock new capabilities, and power modern digital experiences. We design and develop scalable, secure APIs using RESTful and GraphQL architectures that enable seamless data flow across your organization and partner ecosystem. For businesses, well-designed APIs accelerate partner onboarding from weeks to days and create new revenue opportunities through API monetization. Comprehensive documentation and developer portals drive external adoption. API governance frameworks ensure consistency, security, and performance as your ecosystem grows. We leverage AI-powered API design optimization, intelligent error handling, and automated performance monitoring to build robust integration platforms — connecting your business systems for seamless operations and accelerated digital transformation.",
    icon: Layers,
    category: "Development & Engineering",
    features: [
      "RESTful & GraphQL APIs",
      "Microservices architecture",
      "Third-party integrations",
      "API documentation & versioning",
      "API gateway implementation",
      "OAuth & security",
      "Rate limiting & caching",
      "Webhook implementations"
    ],
    benefits: [
      "Enable partner integrations",
      "Improve system interoperability",
      "Support mobile & web apps",
      "Monetize data and services",
      "Accelerate development"
    ],
    technologies: ["Node.js", "Python", "Go", "GraphQL", "REST", "gRPC", "Kong", "AWS API Gateway", "Swagger"],
    pricing: createContactPricing("API Development & Integration"),
    caseStudies: [
      {
        company: "FinTech Client",
        industry: "Fintech",
        challenge: "Needed to expose payment services to partners through a secure, scalable API.",
        solution: "Built comprehensive payment API with OAuth security, rate limiting, and developer portal.",
        results: [
          "Partner integrations enabled",
          "New revenue stream created",
          "High API uptime maintained",
          "Positive developer feedback"
        ]
      }
    ],
    faqs: [
      {
        question: "REST or GraphQL - which should I choose?",
        answer: "REST is simpler and widely understood, ideal for CRUD operations. GraphQL is better when clients need flexible queries or you're serving multiple client types. We help you choose based on your specific needs."
      },
      {
        question: "How do you handle API security?",
        answer: "We implement industry-standard security including OAuth 2.0, API keys, rate limiting, input validation, and encryption. Security is built into the API design from the start."
      }
    ]
  },
  {
    slug: "quality-engineering",
    name: "Quality Engineering & Assurance",
    shortDescription: "Comprehensive testing strategies to ensure software excellence.",
    fullDescription: "Deliver flawless software with our comprehensive QA services. From manual testing to fully automated test suites, we ensure your applications meet the highest quality standards before reaching your users.",
    icon: TestTube,
    category: "Development & Engineering",
    features: [
      "Automated testing frameworks",
      "Performance & load testing",
      "Security testing",
      "UAT coordination",
      "Mobile app testing",
      "API testing",
      "Accessibility testing",
      "Regression testing"
    ],
    benefits: [
      "Reduce bugs in production",
      "Faster release cycles",
      "Improved user satisfaction",
      "Lower support costs",
      "Confident deployments"
    ],
    technologies: ["Selenium", "Cypress", "Playwright", "JMeter", "Postman", "Appium", "TestRail", "JIRA"],
    pricing: createContactPricing("Quality Engineering & Assurance"),
    caseStudies: [
      {
        company: "Travel Platform Client",
        industry: "Travel",
        challenge: "Frequent production bugs damaging brand reputation and causing booking errors.",
        solution: "Implemented comprehensive test automation with Cypress, performance testing, and CI integration.",
        results: [
          "Fewer production bugs",
          "Improved release confidence",
          "Faster test execution",
          "Lower error rates"
        ]
      }
    ],
    faqs: [
      {
        question: "What percentage of tests should be automated?",
        answer: "We recommend automating 70-80% of regression tests. Exploratory testing, usability testing, and edge cases are often better suited for manual testing. We help you find the right balance."
      },
      {
        question: "How do you integrate with our development process?",
        answer: "Our QA integrates seamlessly with agile workflows. We participate in sprint planning, write tests alongside development, and ensure automated tests run in your CI/CD pipeline."
      }
    ]
  },
  {
    slug: "technology-modernization",
    name: "Technology Modernization",
    shortDescription: "Transform legacy systems into scalable, modern applications.",
    fullDescription: "Breathe new life into your legacy systems with our modernization services. We help you migrate from outdated technologies to modern architectures while preserving business logic and minimizing disruption to operations.",
    icon: RefreshCw,
    category: "Cloud & Infrastructure",
    features: [
      "Monolith to microservices migration",
      "Containerization with Docker & Kubernetes",
      "Database upgrades & optimization",
      "Technical debt remediation",
      "Code refactoring & cleanup",
      "Framework & library upgrades",
      "API-first architecture enablement",
      "Performance tuning & scalability"
    ],
    benefits: [
      "Improved system performance",
      "Reduced maintenance costs",
      "Faster feature delivery",
      "Better scalability",
      "Modern developer experience"
    ],
    technologies: ["Docker", "Kubernetes", "React", "Node.js", "PostgreSQL", "MongoDB", "Redis", "Microservices"],
    pricing: createContactPricing("Technology Modernization"),
    caseStudies: [
      {
        company: "Insurance Client",
        industry: "Insurance",
        challenge: "Legacy system difficult to maintain, modify, or find developers for.",
        solution: "Incrementally modernized to microservices with React frontend, preserving business rules.",
        results: [
          "Faster development cycles",
          "Reduced maintenance costs",
          "New features now possible",
          "Improved system reliability"
        ]
      }
    ],
    faqs: [
      {
        question: "Can you modernize without disrupting operations?",
        answer: "Yes, we use strangler fig pattern and other incremental approaches that allow gradual modernization while keeping existing systems operational. We minimize risk and disruption throughout."
      },
      {
        question: "What if we don't have documentation for legacy systems?",
        answer: "We have experience reverse-engineering undocumented systems. We analyze code, interview stakeholders, and document as we go. The modernization process often results in better documentation than before."
      }
    ]
  },
  {
    slug: "compliance-governance",
    name: "Compliance & Governance",
    shortDescription: "Navigate regulatory requirements and establish robust governance frameworks.",
    fullDescription: "Achieve and maintain compliance with industry regulations while building strong governance foundations. We help organizations navigate complex regulatory landscapes, implement compliance programs, and establish governance frameworks that protect your business and build stakeholder trust.",
    icon: FileText,
    category: "Security",
    features: [
      "SOC 2 Type I & II programs",
      "GDPR readiness & implementation",
      "HIPAA compliance frameworks",
      "PCI-DSS certification support",
      "ISO 27001 implementation",
      "Policy development & documentation",
      "Risk assessment frameworks",
      "Audit preparation & remediation"
    ],
    benefits: [
      "Achieve regulatory compliance",
      "Reduce audit preparation time",
      "Build customer and partner trust",
      "Avoid costly penalties and fines",
      "Enable enterprise sales opportunities"
    ],
    technologies: ["Vanta", "Drata", "Secureframe", "OneTrust", "ServiceNow GRC", "LogicGate", "AuditBoard", "Archer"],
    pricing: createContactPricing("Compliance & Governance"),
    caseStudies: [
      {
        company: "SaaS Startup Client",
        industry: "Technology",
        challenge: "Needed SOC 2 certification to close enterprise deals but had no compliance program.",
        solution: "Implemented comprehensive SOC 2 program with automated evidence collection and continuous monitoring.",
        results: [
          "SOC 2 certification achieved",
          "Enabled enterprise deals",
          "Reduced compliance overhead",
          "Clean audit results"
        ]
      }
    ],
    faqs: [
      {
        question: "How long does SOC 2 certification take?",
        answer: "SOC 2 Type I can be achieved in 2-3 months with proper preparation. Type II requires a 3-12 month observation period after Type I. With our accelerated approach, many clients achieve Type II within 6 months total."
      },
      {
        question: "Do we need dedicated compliance staff?",
        answer: "Not necessarily. With modern GRC platforms and our managed services, small teams can maintain compliance efficiently. We help you determine the right balance of tools, processes, and personnel for your organization."
      }
    ]
  },
  {
    slug: "data-privacy",
    name: "Data Privacy",
    shortDescription: "Protect sensitive data and ensure privacy compliance across your organization.",
    fullDescription: "Safeguard personal and sensitive data with comprehensive privacy programs that protect customer trust while enabling data-driven business operations. We help organizations implement data protection strategies, privacy-by-design principles, and compliance frameworks for GDPR, CCPA, HIPAA, and emerging privacy regulations worldwide. For businesses, privacy breaches result in an average $4.45 million in costs plus immeasurable brand damage — our proactive privacy programs prevent incidents while demonstrating commitment to customer trust. Data mapping and inventory identify all personal data across your systems. Privacy impact assessments evaluate risks before new projects launch. Consent management and data subject request automation ensure ongoing compliance. We leverage AI-powered data discovery, intelligent classification, and automated compliance monitoring to build practical privacy programs — protecting personal data while enabling the data-driven operations your business needs to compete.",
    icon: Shield,
    category: "Security",
    features: [
      "Data discovery & classification",
      "Privacy impact assessments (PIA/DPIA)",
      "Consent management platforms",
      "Automated data subject requests",
      "Retention & deletion automation",
      "Cross-border transfer mechanisms",
      "Privacy-by-design consulting",
      "Breach notification procedures"
    ],
    benefits: [
      "Protect customer trust and brand reputation",
      "Reduce data breach risk",
      "Automate privacy compliance workflows",
      "Enable global data operations",
      "Avoid regulatory penalties"
    ],
    technologies: ["OneTrust", "BigID", "Collibra", "Securiti", "TrustArc", "DataGrail", "Osano", "Transcend"],
    pricing: createContactPricing("Data Privacy"),
    caseStudies: [
      {
        company: "E-commerce Client",
        industry: "E-commerce",
        challenge: "Operating across multiple countries with varying privacy laws and struggling to manage customer data requests.",
        solution: "Implemented unified privacy platform with automated data discovery, consent management, and DSR automation.",
        results: [
          "Faster DSR response times",
          "Multi-jurisdiction compliance achieved",
          "Improved customer trust",
          "Zero privacy-related incidents"
        ]
      }
    ],
    faqs: [
      {
        question: "What's the difference between data privacy and data security?",
        answer: "Data security focuses on protecting data from unauthorized access through technical controls. Data privacy focuses on how data is collected, used, shared, and retained in compliance with regulations and customer expectations. Both are essential and complementary."
      },
      {
        question: "How do we handle privacy across multiple countries?",
        answer: "We implement a unified privacy framework that meets the strictest requirements (usually GDPR) while accommodating regional variations. This includes proper data transfer mechanisms, local consent requirements, and jurisdiction-specific retention policies."
      }
    ]
  },
  {
    slug: "cloud-security",
    name: "Cloud Security",
    shortDescription: "Secure your cloud infrastructure across AWS, Azure, and GCP environments.",
    fullDescription: "Protect your cloud workloads with comprehensive security solutions designed for modern multi-cloud environments across AWS, Azure, and Google Cloud. We help organizations secure their cloud infrastructure through architecture reviews, configuration hardening, continuous monitoring, and cloud-native security tooling. For businesses, cloud misconfigurations are the #1 cause of cloud breaches — our automated scanning identifies and remediates vulnerabilities across thousands of resources in minutes. CSPM and CWPP provide continuous posture management and runtime protection. CIS benchmark compliance ensures industry-standard hardening. We leverage AI-powered anomaly detection, automated remediation, and intelligent compliance mapping to maintain cloud security at scale — enabling rapid cloud adoption with confidence that your infrastructure meets the highest security and compliance standards.",
    icon: Cloud,
    category: "Security",
    features: [
      "Security architecture reviews",
      "Configuration & posture management",
      "Workload protection platforms",
      "Container & Kubernetes hardening",
      "Serverless security controls",
      "Cloud access broker (CASB) setup",
      "IaC security scanning",
      "Unified multi-cloud visibility"
    ],
    benefits: [
      "Reduce cloud misconfigurations",
      "Achieve cloud compliance certifications",
      "Secure containers and microservices",
      "Enable secure DevOps practices",
      "Visibility across multi-cloud environments"
    ],
    technologies: ["AWS Security Hub", "Azure Defender", "Google Security Command Center", "Prisma Cloud", "Wiz", "Lacework", "Aqua Security", "Snyk"],
    pricing: createContactPricing("Cloud Security"),
    caseStudies: [
      {
        company: "Technology Client",
        industry: "Technology",
        challenge: "Rapid cloud adoption led to security blind spots and compliance gaps across cloud environments.",
        solution: "Implemented unified cloud security platform with automated compliance monitoring, container security, and DevSecOps pipeline integration.",
        results: [
          "Reduced misconfigurations",
          "Achieved cloud compliance",
          "Improved container security",
          "Security integrated into CI/CD pipeline"
        ]
      }
    ],
    faqs: [
      {
        question: "How do you secure multi-cloud environments?",
        answer: "We implement a unified security platform that provides visibility and control across AWS, Azure, and GCP. This includes centralized policy management, consistent security controls, and aggregated monitoring across all cloud environments."
      },
      {
        question: "What about container and Kubernetes security?",
        answer: "We provide comprehensive container security including image scanning, runtime protection, network policies, and Kubernetes-native security controls. This covers the entire container lifecycle from build to runtime."
      }
    ]
  },
  // ─── Talent Management Services ───
  {
    slug: "it-staffing",
    name: "IT Staffing & Augmentation",
    shortDescription: "Scalable access to pre-vetted IT professionals across technologies and domains.",
    fullDescription: "Our IT staffing services provide on-demand access to skilled engineers, architects, and specialists who integrate seamlessly into your existing teams. Whether you need short-term augmentation for a critical project or long-term embedded resources, we source, vet, and deploy talent matched to your tech stack and culture. For businesses, this eliminates months-long hiring cycles and reduces recruitment costs by up to 50%. Our talent pool spans full-stack developers, cloud engineers, data scientists, QA specialists, and DevOps professionals across all major technologies.",
    icon: UserCheck,
    category: "Talent Management Services",
    features: [
      "On-demand access to pre-vetted IT professionals",
      "Tech-stack-matched talent sourcing",
      "Short-term and long-term engagement models",
      "Dedicated account management and performance tracking",
      "Rapid onboarding with cultural fit assessment",
      "Flexible scaling up or down based on project needs"
    ],
    benefits: [
      "Eliminate lengthy hiring cycles with ready-to-deploy talent",
      "Reduce recruitment costs by up to 50%",
      "Access niche skills without permanent headcount commitment",
      "Scale teams instantly for project surges",
      "Improve delivery velocity with experienced professionals",
      "Retain IP and knowledge through structured knowledge transfer"
    ],
    technologies: ["React", "Node.js", "Python", "Java", "AWS", "Azure", "Kubernetes", "Terraform"],
    pricing: createContactPricing("IT Staffing & Augmentation"),
    caseStudies: [
      {
        company: "TechScale Inc.",
        industry: "SaaS",
        challenge: "Needed to double their engineering team in 6 weeks for a critical product launch but couldn't hire fast enough through traditional channels.",
        solution: "Deployed 12 pre-vetted full-stack engineers with React and Node.js expertise, fully integrated within the first week.",
        results: ["Product launched on schedule", "Engineering velocity increased by 180%", "3 augmented engineers converted to full-time hires"]
      }
    ],
    faqs: [
      { question: "How quickly can you provide resources?", answer: "For common tech stacks, we can deploy pre-vetted professionals within 1-2 weeks. For niche skills, our average time-to-fill is 3-4 weeks." },
      { question: "What if a resource isn't the right fit?", answer: "We offer a replacement guarantee. If a resource doesn't meet expectations within the first 2 weeks, we provide a replacement at no additional cost." }
    ]
  },
  {
    slug: "contract-hiring",
    name: "Contract Hiring Solutions",
    shortDescription: "Flexible contract-based hiring for project-specific and seasonal workforce needs.",
    fullDescription: "Our contract hiring solutions give you workforce flexibility without long-term employment obligations. We manage the entire lifecycle — from sourcing and compliance to payroll and benefits — so you get the talent you need with minimal administrative burden. Ideal for project-based work, seasonal peaks, or specialized engagements where permanent hiring isn't practical.",
    icon: ClipboardList,
    category: "Talent Management Services",
    features: [
      "End-to-end contract lifecycle management",
      "Compliance with local labor laws and regulations",
      "Payroll, benefits, and tax administration",
      "Contract-to-hire conversion pathways",
      "Multi-geography contract support",
      "Performance monitoring and SLA tracking"
    ],
    benefits: [
      "Workforce flexibility without long-term commitments",
      "Zero administrative burden on internal HR teams",
      "Full regulatory compliance across jurisdictions",
      "Seamless conversion from contract to permanent roles",
      "Reduced legal risk through expert contract management",
      "Predictable costs with transparent pricing models"
    ],
    technologies: ["SAP SuccessFactors", "Workday", "BambooHR", "ADP"],
    pricing: createContactPricing("Contract Hiring Solutions"),
    caseStudies: [
      {
        company: "RetailMax",
        industry: "Retail & E-commerce",
        challenge: "Needed 50+ seasonal technology workers across 3 countries for a holiday platform upgrade with full compliance.",
        solution: "Managed end-to-end contract hiring across the US, UK, and India with localized compliance, payroll, and onboarding.",
        results: ["All 50 positions filled within 4 weeks", "Zero compliance incidents across 3 jurisdictions", "Platform upgrade delivered 2 weeks ahead of schedule"]
      }
    ],
    faqs: [
      { question: "Do you handle payroll and benefits?", answer: "Yes. We manage the complete employment lifecycle for contract workers including payroll processing, statutory benefits, tax withholdings, and insurance." },
      { question: "Can contractors convert to full-time?", answer: "Absolutely. We offer contract-to-hire pathways with pre-agreed conversion terms, making the transition seamless for both parties." }
    ]
  },
  {
    slug: "permanent-placement",
    name: "Permanent Placement",
    shortDescription: "End-to-end recruitment for permanent technology roles with guaranteed retention.",
    fullDescription: "Our permanent placement service combines deep industry expertise with rigorous assessment methodologies to find candidates who excel technically and thrive culturally. We go beyond resume matching — using competency frameworks, technical assessments, and behavioral interviews to ensure long-term fit. Our 90-day retention guarantee ensures your investment in talent pays off from day one.",
    icon: Briefcase,
    category: "Talent Management Services",
    features: [
      "Competency-based candidate assessment",
      "Technical skill evaluation and coding challenges",
      "Cultural fit and behavioral interviews",
      "Executive and leadership search capabilities",
      "90-day retention guarantee",
      "Post-placement integration support"
    ],
    benefits: [
      "Higher quality hires with lower attrition rates",
      "Reduced time-to-hire through dedicated sourcing teams",
      "Access to passive candidates not on job boards",
      "Guaranteed retention with replacement policy",
      "Structured onboarding support for faster productivity",
      "Deep domain expertise across technology verticals"
    ],
    technologies: ["LinkedIn Recruiter", "HackerRank", "Greenhouse", "Lever"],
    pricing: createContactPricing("Permanent Placement"),
    caseStudies: [
      {
        company: "HealthFirst Systems",
        industry: "Healthcare Tech",
        challenge: "Struggled to fill 8 senior engineering positions over 6 months with internal recruitment.",
        solution: "Engaged our dedicated search team with technical assessment frameworks and access to our passive candidate network.",
        results: ["All 8 positions filled within 10 weeks", "95% retention rate after 12 months", "Time-to-productivity reduced by 40%"]
      }
    ],
    faqs: [
      { question: "What roles do you specialize in?", answer: "We place across the full technology spectrum — software engineers, architects, data scientists, DevOps engineers, product managers, CTOs, and VP Engineering roles." },
      { question: "What's your retention guarantee?", answer: "We offer a 90-day retention guarantee. If a placed candidate leaves within 90 days, we provide a replacement search at no additional fee." }
    ]
  },
  // ─── IT Services ───
  {
    slug: "managed-it-services",
    name: "Managed IT Services",
    shortDescription: "Comprehensive IT management covering infrastructure, applications, and end-user support.",
    fullDescription: "Our managed IT services provide end-to-end ownership of your technology operations — from infrastructure monitoring and patch management to application support and vendor coordination. With proactive monitoring, defined SLAs, and a dedicated service delivery manager, we ensure your IT environment runs smoothly while you focus on core business objectives.",
    icon: Monitor,
    category: "IT Services",
    features: [
      "24/7 infrastructure monitoring and management",
      "Patch management and security updates",
      "Application performance monitoring",
      "Vendor management and coordination",
      "ITIL-aligned service delivery",
      "Monthly health reports and optimization reviews"
    ],
    benefits: [
      "Predictable IT costs with fixed monthly pricing",
      "Reduced downtime through proactive monitoring",
      "Access to enterprise-grade tools and expertise",
      "Freed internal teams for strategic projects",
      "Improved compliance posture with regular audits",
      "Scalable support that grows with your business"
    ],
    technologies: ["ServiceNow", "Datadog", "Splunk", "AWS", "Azure", "VMware", "Cisco"],
    pricing: createContactPricing("Managed IT Services"),
    caseStudies: [
      {
        company: "MidMarket Financial",
        industry: "Financial Services",
        challenge: "A 200-person firm with no dedicated IT team was experiencing frequent outages and security gaps.",
        solution: "Implemented fully managed IT services with 24/7 monitoring, automated patching, and a dedicated service delivery manager.",
        results: ["System uptime improved from 95% to 99.9%", "Security incidents reduced by 75%", "IT operational costs reduced by 35%"]
      }
    ],
    faqs: [
      { question: "What's included in managed IT services?", answer: "Our managed IT services cover infrastructure monitoring, patch management, backup management, security monitoring, help desk support, vendor management, and regular health reviews." },
      { question: "Can you manage hybrid environments?", answer: "Yes. We manage on-premises, cloud, and hybrid environments using unified monitoring platforms." }
    ]
  },
  {
    slug: "infrastructure-support-services",
    name: "Infrastructure Support Services",
    shortDescription: "Proactive management and optimization of servers, networks, and cloud infrastructure.",
    fullDescription: "Our infrastructure support services ensure your servers, networks, storage, and cloud resources are always available, secure, and optimized. We provide L1-L3 support with defined escalation paths, proactive capacity planning, and continuous performance tuning across on-premises, cloud, and hybrid environments.",
    icon: Server,
    category: "IT Services",
    features: [
      "Server and network administration",
      "Cloud infrastructure management (AWS, Azure, GCP)",
      "Storage management and optimization",
      "Capacity planning and right-sizing",
      "Disaster recovery and backup management",
      "Performance tuning and optimization"
    ],
    benefits: [
      "Maximum uptime with proactive issue prevention",
      "Optimized costs through right-sizing and reserved capacity",
      "Faster incident resolution with tiered support",
      "Improved security with hardened configurations",
      "Scalable infrastructure that adapts to demand",
      "Expert management without hiring specialized staff"
    ],
    technologies: ["AWS", "Azure", "GCP", "VMware", "Terraform", "Ansible", "Docker", "Kubernetes"],
    pricing: createContactPricing("Infrastructure Support Services"),
    caseStudies: [
      {
        company: "DataFlow Analytics",
        industry: "Data & Analytics",
        challenge: "Cloud infrastructure costs were spiraling with no visibility into resource utilization across 3 AWS accounts.",
        solution: "Implemented infrastructure support with automated right-sizing, reserved instance planning, and monthly optimization reviews.",
        results: ["Cloud costs reduced by 42% in 3 months", "Resource utilization improved from 35% to 78%", "Zero unplanned outages in 12 months"]
      }
    ],
    faqs: [
      { question: "Do you support multi-cloud environments?", answer: "Yes. Our teams hold certifications across AWS, Azure, and GCP, and we use cloud-agnostic tools for unified management." },
      { question: "How do you handle emergencies?", answer: "We provide 24/7 on-call support with defined SLAs — P1 incidents are acknowledged within 15 minutes and resolved within 4 hours." }
    ]
  },
  {
    slug: "help-desk-services",
    name: "Help Desk & End-User Support",
    shortDescription: "Multi-channel IT help desk providing fast resolution for employee technology issues.",
    fullDescription: "Our help desk services provide your employees with responsive, multi-channel IT support — via phone, email, chat, and self-service portals. With AI-powered ticket routing, knowledge base automation, and tiered escalation, we resolve issues quickly and reduce recurring tickets through root cause elimination.",
    icon: Phone,
    category: "IT Services",
    features: [
      "Multi-channel support (phone, email, chat, portal)",
      "AI-powered ticket routing and categorization",
      "Self-service knowledge base and FAQ portal",
      "Tiered escalation (L1/L2/L3)",
      "Asset management and provisioning",
      "Real-time SLA dashboards and CSAT tracking"
    ],
    benefits: [
      "Faster issue resolution with AI-assisted triage",
      "Improved employee satisfaction and productivity",
      "Reduced ticket volume through self-service automation",
      "Consistent service quality with defined SLAs",
      "Data-driven improvements through analytics",
      "Scalable support across locations and time zones"
    ],
    technologies: ["ServiceNow", "Jira Service Management", "Freshdesk", "Zendesk", "Microsoft Teams"],
    pricing: createContactPricing("Help Desk & End-User Support"),
    caseStudies: [
      {
        company: "EduGlobal University",
        industry: "Education",
        challenge: "5,000+ employees across 12 campuses with inconsistent IT support and average resolution times of 48+ hours.",
        solution: "Deployed centralized help desk with AI ticket routing, self-service portal, and follow-the-sun L1/L2 support.",
        results: ["Average resolution time reduced from 48 hours to 4 hours", "First-call resolution rate improved to 78%", "Employee satisfaction score increased from 3.2 to 4.6/5"]
      }
    ],
    faqs: [
      { question: "What channels do you support?", answer: "We provide omnichannel support via phone, email, live chat, Microsoft Teams integration, and a self-service web portal." },
      { question: "Can you support remote and hybrid workers?", answer: "Absolutely. Our help desk supports distributed workforces with remote desktop support, device provisioning, and VPN troubleshooting." }
    ]
  },
  // ─── IT Enabled Services ───
  {
    slug: "business-process-outsourcing",
    name: "Business Process Outsourcing (BPO)",
    shortDescription: "Technology-driven outsourcing of business processes for efficiency and cost optimization.",
    fullDescription: "Our BPO services combine skilled operations teams with intelligent automation to streamline your back-office and customer-facing processes. From finance and accounting to customer support and data entry, we deliver process excellence through standardization, automation, and continuous improvement.",
    icon: Cog,
    category: "IT Enabled Services",
    features: [
      "Finance & accounting process outsourcing",
      "Customer service and support operations",
      "Data entry, processing, and validation",
      "Claims processing and adjudication",
      "Order management and fulfillment support",
      "Process automation with RPA and AI"
    ],
    benefits: [
      "30-50% cost reduction through operational efficiency",
      "Improved accuracy with automated quality checks",
      "Scalable operations for seasonal demand fluctuations",
      "Access to trained process specialists",
      "Continuous process improvement through analytics",
      "Freed management bandwidth for strategic initiatives"
    ],
    technologies: ["UiPath", "Blue Prism", "Power Automate", "Salesforce", "SAP"],
    pricing: createContactPricing("Business Process Outsourcing"),
    caseStudies: [
      {
        company: "InsureCo Partners",
        industry: "Insurance",
        challenge: "Claims processing backlog of 10,000+ cases with 12-day average turnaround time.",
        solution: "Deployed BPO team with RPA-assisted claims triage, automated document extraction, and standardized adjudication workflows.",
        results: ["Claims backlog eliminated within 8 weeks", "Average turnaround reduced from 12 days to 3 days", "Processing costs reduced by 45%"]
      }
    ],
    faqs: [
      { question: "How do you ensure quality?", answer: "We implement multi-tier quality frameworks with automated checks, random sampling audits, and real-time accuracy dashboards." },
      { question: "Can you handle sensitive data?", answer: "Yes. We maintain SOC 2 Type II compliance, implement role-based access controls, and support data residency requirements." }
    ]
  },
  {
    slug: "knowledge-process-outsourcing",
    name: "Knowledge Process Outsourcing (KPO)",
    shortDescription: "High-value analytical and research services powered by domain expertise and AI.",
    fullDescription: "Our KPO services deliver specialized analytical work — market research, financial analysis, legal document review, and data science — performed by domain experts augmented with AI tools. Unlike traditional outsourcing, KPO focuses on knowledge-intensive tasks that require judgment, analysis, and domain expertise.",
    icon: BookOpen,
    category: "IT Enabled Services",
    features: [
      "Market research and competitive intelligence",
      "Financial modeling and analysis",
      "Legal document review and contract analysis",
      "Data science and advanced analytics",
      "Patent research and IP analysis",
      "Industry-specific regulatory research"
    ],
    benefits: [
      "Access to specialized domain expertise on demand",
      "Faster turnaround on research and analysis tasks",
      "AI-augmented insights for deeper analysis",
      "Reduced cost compared to in-house specialist teams",
      "Scalable analytical capacity without fixed overhead",
      "Consistent methodology and quality frameworks"
    ],
    technologies: ["Python", "R", "Tableau", "Power BI", "Bloomberg Terminal", "LexisNexis"],
    pricing: createContactPricing("Knowledge Process Outsourcing"),
    caseStudies: [
      {
        company: "Venture Capital Partners",
        industry: "Financial Services",
        challenge: "Investment team spending 60% of time on due diligence research instead of deal evaluation.",
        solution: "Deployed KPO team for market sizing, competitive analysis, and financial modeling with AI-powered data extraction.",
        results: ["Due diligence time reduced by 65%", "Deal pipeline throughput increased by 40%", "Research cost per deal reduced by 55%"]
      }
    ],
    faqs: [
      { question: "What domains do you cover?", answer: "Our KPO teams specialize in financial services, healthcare, legal, technology, and energy sectors." },
      { question: "How do you maintain confidentiality?", answer: "All KPO engagements operate under strict NDAs, with data handled in isolated environments and encrypted storage." }
    ]
  },
  {
    slug: "digital-operations",
    name: "Digital Operations",
    shortDescription: "Modernized business operations leveraging cloud platforms, automation, and analytics.",
    fullDescription: "Our digital operations services transform traditional business processes into cloud-native, data-driven workflows. We combine process reengineering with modern platforms — SaaS tools, automation frameworks, and real-time analytics — to create operations that are faster, smarter, and continuously improving.",
    icon: Globe,
    category: "IT Enabled Services",
    features: [
      "Process digitization and workflow automation",
      "Cloud-based operations platforms",
      "Real-time operational analytics and dashboards",
      "Digital document management and e-signatures",
      "Omnichannel customer engagement operations",
      "Continuous improvement through data-driven insights"
    ],
    benefits: [
      "Eliminate paper-based and manual processes",
      "Real-time visibility into operational metrics",
      "Improved customer experience with digital-first interactions",
      "Faster decision-making with live dashboards",
      "Reduced operational errors through automation",
      "Scalable operations without proportional headcount growth"
    ],
    technologies: ["Salesforce", "Microsoft 365", "ServiceNow", "Power Automate", "Zapier", "Tableau"],
    pricing: createContactPricing("Digital Operations"),
    caseStudies: [
      {
        company: "PropertyManage Co",
        industry: "Real Estate",
        challenge: "Managing 500+ properties with paper-based workflows, leading to lost documents and missed deadlines.",
        solution: "Digitized all property management workflows with cloud-based document management and automated lease processing.",
        results: ["Document processing time reduced by 80%", "Tenant satisfaction scores improved by 45%", "Operational staff reduced by 30% through automation"]
      }
    ],
    faqs: [
      { question: "How long does digital transformation take?", answer: "We follow a phased approach — quick wins in 4-6 weeks, core process digitization in 3-6 months, and full transformation in 6-12 months." },
      { question: "Do you replace existing systems?", answer: "Not necessarily. We often integrate with existing systems while adding digital layers for automation and analytics." }
    ]
  },
  // ─── Non-IT Talent Management Services ───
  {
    slug: "hr-outsourcing",
    name: "HR Outsourcing",
    shortDescription: "End-to-end human resources management including payroll, compliance, and employee lifecycle.",
    fullDescription: "Our HR outsourcing services manage the complete employee lifecycle — from recruitment and onboarding to payroll, benefits administration, compliance, and offboarding. We combine HR expertise with technology platforms to deliver consistent, compliant, and employee-friendly HR operations.",
    icon: Users,
    category: "Non-IT Talent Management Services",
    features: [
      "Payroll processing and tax compliance",
      "Benefits administration and enrollment",
      "Employee onboarding and offboarding",
      "HR policy development and compliance",
      "Employee relations and grievance handling",
      "HR analytics and workforce reporting"
    ],
    benefits: [
      "Reduced HR operational costs by 40-60%",
      "Full compliance with labor laws across jurisdictions",
      "Improved employee experience with professional HR support",
      "Scalable HR operations without fixed overhead",
      "Access to HR technology platforms and self-service portals",
      "Freed leadership bandwidth from administrative HR tasks"
    ],
    technologies: ["Workday", "BambooHR", "ADP", "SAP SuccessFactors", "Gusto"],
    pricing: createContactPricing("HR Outsourcing"),
    caseStudies: [
      {
        company: "GrowFast Startup",
        industry: "Technology",
        challenge: "Rapidly growing from 50 to 200 employees across 3 countries with no HR infrastructure.",
        solution: "Implemented full HR outsourcing covering payroll, benefits, compliance, and onboarding with localized support.",
        results: ["Zero compliance violations across 3 jurisdictions", "Employee onboarding time reduced from 2 weeks to 2 days", "HR cost per employee reduced by 55%"]
      }
    ],
    faqs: [
      { question: "Which countries do you support?", answer: "We provide HR outsourcing across 20+ countries with localized compliance expertise, covering the Americas, EMEA, and APAC regions." },
      { question: "Can you handle payroll for contractors and employees?", answer: "Yes. We manage payroll for both permanent employees and contractors, including tax withholdings and statutory contributions." }
    ]
  },
  {
    slug: "recruitment-process-outsourcing",
    name: "Recruitment Process Outsourcing (RPO)",
    shortDescription: "Scalable recruitment solutions for non-IT roles across industries and functions.",
    fullDescription: "Our RPO services take ownership of your non-IT recruitment — from job profiling and sourcing to screening, interviewing, and offer management. We deploy dedicated recruitment teams that function as an extension of your HR department, bringing process discipline, sourcing expertise, and hiring analytics.",
    icon: UserPlus,
    category: "Non-IT Talent Management Services",
    features: [
      "End-to-end recruitment lifecycle management",
      "Multi-channel sourcing and talent pipelining",
      "Screening, assessment, and interview coordination",
      "Employer branding and candidate experience management",
      "Hiring analytics and pipeline reporting",
      "Campus recruitment and graduate programs"
    ],
    benefits: [
      "Reduced cost-per-hire by 30-50%",
      "Faster time-to-fill with dedicated sourcing teams",
      "Improved candidate quality through structured assessments",
      "Scalable recruitment capacity for volume hiring",
      "Enhanced employer brand through consistent candidate experience",
      "Data-driven hiring decisions with recruitment analytics"
    ],
    technologies: ["Greenhouse", "Lever", "LinkedIn Recruiter", "HireVue", "iCIMS"],
    pricing: createContactPricing("Recruitment Process Outsourcing"),
    caseStudies: [
      {
        company: "NationalBank Corp",
        industry: "Banking",
        challenge: "Needed to hire 300+ branch and operations staff across 50 locations within 3 months.",
        solution: "Deployed RPO team with multi-channel sourcing, centralized screening, and regional interview coordination.",
        results: ["280 of 300 positions filled within 3 months", "Cost-per-hire reduced by 40%", "90-day retention rate of 92%"]
      }
    ],
    faqs: [
      { question: "What roles do you recruit for?", answer: "We recruit across all non-IT functions — finance, operations, sales, marketing, HR, legal, supply chain, customer service, and executive leadership." },
      { question: "How does RPO differ from staffing agencies?", answer: "RPO is a strategic partnership where we embed within your organization and own the full recruitment process — unlike transactional agency placements." }
    ]
  },
  {
    slug: "workforce-management",
    name: "Workforce Management",
    shortDescription: "Strategic workforce planning, scheduling, and optimization for operational efficiency.",
    fullDescription: "Our workforce management services help organizations optimize their most valuable asset — their people. We provide workforce planning, shift scheduling, time & attendance management, and productivity analytics to ensure you have the right people in the right roles at the right time.",
    icon: Target,
    category: "Non-IT Talent Management Services",
    features: [
      "Workforce planning and demand forecasting",
      "Shift scheduling and roster optimization",
      "Time & attendance tracking and compliance",
      "Productivity analytics and benchmarking",
      "Contingent workforce management",
      "Workforce cost modeling and optimization"
    ],
    benefits: [
      "Optimized labor costs through intelligent scheduling",
      "Improved workforce utilization and productivity",
      "Reduced overtime and scheduling conflicts",
      "Better compliance with labor regulations",
      "Data-driven workforce planning decisions",
      "Improved employee satisfaction with fair scheduling"
    ],
    technologies: ["Kronos", "Workday", "SAP SuccessFactors", "Deputy", "ADP Workforce Now"],
    pricing: createContactPricing("Workforce Management"),
    caseStudies: [
      {
        company: "LogiChain Solutions",
        industry: "Logistics",
        challenge: "Managing 2,000+ warehouse workers across 8 facilities with manual scheduling leading to overtime costs.",
        solution: "Implemented AI-driven workforce management with demand-based scheduling and real-time attendance tracking.",
        results: ["Overtime costs reduced by 35%", "Workforce utilization improved from 72% to 91%", "Scheduling conflicts reduced by 85%"]
      }
    ],
    faqs: [
      { question: "Can you integrate with our existing HR system?", answer: "Yes. We integrate with all major HRIS and payroll platforms including Workday, SAP, ADP, and BambooHR." },
      { question: "Do you support shift-based and gig workers?", answer: "Absolutely. Our workforce management covers full-time, part-time, shift-based, and contingent/gig workers." }
    ]
  },
  {
    slug: "medicos-staffing-augmentation",
    name: "Medicos Staffing & Augmentation",
    shortDescription: "Specialized healthcare staffing and workforce augmentation for hospitals, clinics, and health systems.",
    fullDescription: "Our Medicos Staffing & Augmentation services provide qualified healthcare professionals — from nurses and allied health specialists to physicians and administrative staff — to meet the dynamic workforce demands of hospitals, clinics, long-term care facilities, and health systems. We handle credentialing, compliance verification, and rapid deployment so your organization can maintain quality patient care without staffing gaps. Whether you need temporary coverage, permanent placements, or scalable workforce augmentation, our healthcare recruitment experts match the right talent to the right roles with speed and precision.",
    icon: HeartPulse,
    category: "Non-IT Talent Management Services",
    features: [
      "Registered nurses and specialty nursing placement",
      "Allied health professional staffing (radiology, lab, therapy)",
      "Physician and advanced practice provider recruitment",
      "Healthcare administrative and support staff",
      "Credentialing and compliance verification",
      "Rapid-response staffing for surge capacity",
      "Travel and per-diem healthcare staffing",
      "Permanent placement and direct-hire services"
    ],
    benefits: [
      "Eliminate staffing gaps that impact patient care",
      "Pre-credentialed professionals reduce onboarding time",
      "Flexible staffing models for seasonal demand",
      "Compliance with healthcare regulations and certifications",
      "Reduced recruitment costs and time-to-fill",
      "Access to a vetted network of healthcare professionals"
    ],
    technologies: ["Bullhorn", "HealthcareSource", "Symplr", "Relias", "SAP SuccessFactors", "Workday"],
    pricing: createContactPricing("Medicos Staffing & Augmentation"),
    caseStudies: [
      {
        company: "Regional Health System",
        industry: "Healthcare",
        challenge: "Critical nursing shortages across multiple facilities leading to overtime costs and staff burnout.",
        solution: "Deployed a managed staffing program with pre-credentialed nurses and allied health professionals, supported by demand forecasting.",
        results: [
          "Staffing vacancies reduced significantly",
          "Overtime costs lowered across facilities",
          "Faster time-to-fill for critical roles",
          "Improved staff satisfaction scores"
        ]
      }
    ],
    faqs: [
      { question: "What types of healthcare professionals do you staff?", answer: "We staff RNs, LPNs, CNAs, allied health professionals (radiology, lab, respiratory, physical therapy), physicians, NPs, PAs, and healthcare administrative personnel." },
      { question: "How do you handle credentialing and compliance?", answer: "We manage the full credentialing lifecycle — license verification, background checks, certifications, immunizations, and ongoing compliance monitoring — so your facility stays audit-ready." }
    ]
  },
  {
    slug: "government-operations-administrative-support",
    name: "Government Operations & Administrative Support",
    shortDescription: "Comprehensive operational and administrative support services for federal, state, and local government agencies.",
    fullDescription: "Our Government Operations & Administrative Support services provide qualified professionals to assist government agencies with day-to-day operational functions — from program coordination and records management to procurement support, constituent services, and regulatory compliance administration. We deploy skilled administrative staff, program analysts, and operations coordinators who understand the unique requirements of public-sector environments, including federal acquisition regulations, government reporting standards, and agency-specific protocols. Whether you need staff augmentation for seasonal surges, ongoing program support, or full administrative team deployment, we deliver reliable, clearance-ready talent that integrates seamlessly with your agency's mission and workflows.",
    icon: Building2,
    category: "Non-IT Talent Management Services",
    features: [
      "Program coordination and project administration",
      "Records management and document control",
      "Procurement and acquisition support",
      "Constituent and citizen services support",
      "Regulatory compliance and reporting assistance",
      "Data entry, verification, and quality assurance",
      "Meeting coordination and executive support",
      "Grant administration and financial tracking",
      "Policy research and legislative analysis support",
      "Clearance-ready and background-checked personnel",
      "Administrative Assistants",
      "Program Coordinators",
      "Office Technicians",
      "Procurement Analysts",
      "HR Assistants"
    ],
    benefits: [
      "Rapid deployment of vetted government-experienced staff",
      "Seamless integration with agency workflows and protocols",
      "Scalable staffing for seasonal or project-based surges",
      "Reduced administrative burden on core government teams",
      "Compliance with federal, state, and local regulations",
      "Cost-effective alternative to full-time hiring cycles"
    ],
    technologies: ["SharePoint", "SAP", "Oracle EBS", "Salesforce Government Cloud", "ServiceNow", "Microsoft 365 GCC", "Adobe Acrobat", "Power BI"],
    pricing: createContactPricing("Government Operations & Administrative Support"),
    caseStudies: [
      {
        company: "State Government Agency",
        industry: "Government",
        challenge: "Agency facing backlog in records processing and constituent response times due to staffing shortages.",
        solution: "Deployed a team of trained administrative professionals for records management, constituent inquiry handling, and compliance documentation.",
        results: [
          "Records processing backlog cleared within 60 days",
          "Constituent response times improved by 45%",
          "Full compliance with state audit requirements",
          "Agency leadership freed to focus on policy priorities"
        ]
      }
    ],
    faqs: [
      { question: "Do your staff have government security clearances?", answer: "Yes, we provide clearance-ready personnel and manage the full background investigation process. We staff at Public Trust, Secret, and Top Secret levels depending on agency requirements." },
      { question: "Can you support both federal and state/local agencies?", answer: "Absolutely. We have experience supporting federal civilian agencies, DoD organizations, and state, county, and city government offices with tailored administrative and operational staffing." }
    ]
  },
  {
    slug: "healthcare-public-health",
    name: "Healthcare & Public Health",
    shortDescription: "Specialized staffing and consulting for healthcare organizations and public health agencies.",
    fullDescription: "Our Healthcare & Public Health services deliver experienced professionals to hospitals, health systems, public health departments, and government health agencies. We provide clinical support staff, public health program coordinators, epidemiological analysts, community health workers, and health IT specialists who understand regulatory frameworks including HIPAA, OSHA, and CMS guidelines. From pandemic response surge staffing to ongoing public health program administration, our teams integrate with your operations to improve population health outcomes, strengthen care delivery, and maintain compliance. We handle credentialing, licensure verification, and background screening so your organization can focus on its mission.",
    icon: HeartPulse,
    category: "Non-IT Talent Management Services",
    features: [
      "Public health program coordination and administration",
      "Epidemiological data collection and analysis support",
      "Community health outreach and education staffing",
      "Health IT and EHR implementation support",
      "Clinical trial coordination and research support",
      "HIPAA compliance and privacy officer support",
      "Emergency preparedness and pandemic response staffing",
      "Health equity and social determinants of health programs",
      "Grant management and federal reporting assistance",
      "Quality improvement and accreditation support"
    ],
    benefits: [
      "Rapid deployment of credentialed healthcare professionals",
      "Deep expertise in public health regulatory frameworks",
      "Scalable staffing for surge and seasonal demands",
      "Improved population health program outcomes",
      "Reduced administrative burden on clinical teams",
      "Compliance with HIPAA, CMS, and state health regulations"
    ],
    technologies: ["Epic", "Cerner", "MEDITECH", "Salesforce Health Cloud", "REDCap", "Tableau", "Power BI", "Microsoft 365 GCC"],
    pricing: createContactPricing("Healthcare & Public Health"),
    caseStudies: [
      {
        company: "County Health Department",
        industry: "Public Health",
        challenge: "Understaffed public health department struggling to manage disease surveillance and community outreach programs simultaneously.",
        solution: "Deployed epidemiological analysts, community health workers, and program coordinators to support disease tracking and outreach initiatives.",
        results: [
          "Disease surveillance reporting turnaround improved by 50%",
          "Community vaccination program participation increased by 35%",
          "Full compliance with CDC reporting requirements",
          "Staff burnout reduced through augmented team capacity"
        ]
      }
    ],
    faqs: [
      { question: "Do your healthcare staff meet credentialing requirements?", answer: "Yes, we manage full credentialing — licensure verification, background checks, immunization records, certifications, and ongoing compliance monitoring for all healthcare personnel." },
      { question: "Can you support public health emergency response?", answer: "Absolutely. We maintain a rapid-response talent pool for pandemic preparedness, disaster response, and surge staffing scenarios, with deployment timelines as short as 48–72 hours." }
    ]
  },
  {
    slug: "global-operations-support",
    name: "24×7 Global Operations IT Support",
    shortDescription: "Round-the-clock IT operations support across time zones for uninterrupted business continuity.",
    fullDescription: "Our 24×7 Global Operations IT Support delivers always-on monitoring, incident response, and resolution services across every time zone. With follow-the-sun staffing models, dedicated NOC teams, and AI-powered incident triage, we ensure your critical systems remain operational around the clock. Our tiered support model resolves incidents faster and prevents recurrence through structured root cause analysis. We leverage AI-driven alerting and automated runbooks to reduce mean time to resolution by up to 60%.",
    icon: Headphones,
    category: "IT Services",
    features: [
      "Follow-the-sun 24×7 monitoring and incident management",
      "Tiered support (L1/L2/L3) with defined SLAs",
      "AI-powered incident triage and auto-remediation",
      "Proactive alerting and anomaly detection",
      "Structured root cause analysis and problem management",
      "Multi-cloud and hybrid infrastructure coverage",
      "Real-time dashboards and executive reporting",
      "Runbook automation for recurring incidents"
    ],
    benefits: [
      "Zero coverage gaps with follow-the-sun operations",
      "Faster incident resolution with AI-assisted triage",
      "Reduced operational costs through automation",
      "Improved SLA compliance across global deployments",
      "Predictable IT support costs with managed service pricing",
      "Freed internal teams to focus on strategic initiatives"
    ],
    technologies: ["ServiceNow", "PagerDuty", "Datadog", "Splunk", "AWS CloudWatch", "Azure Monitor", "Grafana", "Prometheus"],
    pricing: createContactPricing("24×7 Global Operations IT Support"),
    caseStudies: [
      {
        company: "GlobalTrade Corp",
        industry: "Logistics & Supply Chain",
        challenge: "Operating across 14 countries with no unified IT support, experiencing 8+ hour resolution times during off-peak periods.",
        solution: "Implemented follow-the-sun NOC with AI-powered triage, automated runbooks for top 50 recurring incidents, and real-time SLA dashboards.",
        results: ["Mean time to resolution reduced from 8 hours to 45 minutes", "99.95% uptime across all critical systems", "Annual IT support costs reduced by 35%"]
      }
    ],
    faqs: [
      { question: "How does the follow-the-sun model work?", answer: "We staff NOC teams across Americas, EMEA, and APAC so support is always handled by fully alert, on-shift engineers with seamless handoff protocols." },
      { question: "Can you support multi-cloud environments?", answer: "Yes. Our teams are certified across AWS, Azure, GCP, and hybrid environments with unified observability from a single pane of glass." }
    ]
  },
  // ==================== GOVT SERVICES — STRATEGIC ====================
  {
    slug: "govt-program-management",
    name: "Program & Project Management",
    shortDescription: "End-to-end program management for government initiatives and public sector projects.",
    fullDescription: "Deliver large-scale government programs on time and within budget. Our certified program managers bring deep public sector experience to manage complex multi-stakeholder initiatives, ensure regulatory compliance, and drive measurable outcomes for citizen-facing programs.",
    icon: ClipboardList,
    category: "Govt Strategic Consulting",
    features: [
      "Program lifecycle management",
      "Stakeholder coordination & communication",
      "Risk management & mitigation",
      "Compliance & regulatory alignment",
      "Budget tracking & financial reporting",
      "Change management & adoption",
      "Performance metrics & KPI dashboards",
      "Agile & hybrid delivery frameworks"
    ],
    benefits: [
      "On-time, on-budget program delivery",
      "Transparent stakeholder reporting",
      "Reduced project risk",
      "Regulatory compliance assurance",
      "Improved citizen outcomes"
    ],
    technologies: ["MS Project", "Jira", "ServiceNow", "Power BI", "SharePoint", "Confluence"],
    pricing: createContactPricing("Program & Project Management"),
    caseStudies: [],
    faqs: [
      { question: "What certifications do your consultants hold?", answer: "Our consultants hold PMP, PgMP, PRINCE2, and Agile certifications with extensive federal and state government experience." },
      { question: "Do you support FedRAMP and FISMA compliance?", answer: "Yes. Our teams are well-versed in federal compliance frameworks including FedRAMP, FISMA, NIST, and agency-specific requirements." }
    ]
  },
  {
    slug: "govt-business-analysis",
    name: "Business Analysis & Requirements",
    shortDescription: "Expert business analysts for government digital transformation and modernization programs.",
    fullDescription: "Bridge the gap between policy objectives and technology solutions. Our government business analysts specialize in requirements elicitation, process mapping, and gap analysis for public sector modernization initiatives, ensuring technology solutions align with mission objectives.",
    icon: FileText,
    category: "Govt Strategic Consulting",
    features: [
      "Requirements gathering & documentation",
      "Business process reengineering",
      "Gap analysis & feasibility studies",
      "User story & use case development",
      "Data flow & systems analysis",
      "Policy-to-technology translation",
      "Stakeholder workshops & JAD sessions",
      "Traceability matrix management"
    ],
    benefits: [
      "Clear, actionable requirements",
      "Reduced scope creep",
      "Faster modernization timelines",
      "Better alignment with mission goals",
      "Improved vendor coordination"
    ],
    technologies: ["Visio", "Lucidchart", "Jira", "Confluence", "Power BI", "Balsamiq"],
    pricing: createContactPricing("Business Analysis & Requirements"),
    caseStudies: [],
    faqs: [
      { question: "Do your analysts have government clearance?", answer: "We can provide analysts with appropriate clearance levels based on project requirements and agency needs." },
      { question: "What methodologies do you follow?", answer: "We adapt to agency preferences — Agile, Waterfall, or hybrid — and follow BABOK best practices for requirements management." }
    ]
  },
  {
    slug: "govt-change-management",
    name: "Change Management Consultants",
    shortDescription: "Organizational change management for government digital transformation and modernization initiatives.",
    fullDescription: "Our Change Management consultants guide federal agencies through complex organizational transitions, ensuring stakeholder adoption, minimizing disruption, and driving lasting cultural change across large-scale modernization programs.",
    icon: RefreshCw,
    category: "Govt Strategic Consulting",
    features: [
      "Organizational readiness assessments",
      "Stakeholder impact analysis & engagement",
      "Communication strategy & execution",
      "Training program design & delivery",
      "Adoption metrics & sustainment planning",
      "Prosci & ADKAR methodology expertise"
    ],
    benefits: [
      "Higher user adoption rates for new systems",
      "Reduced resistance to organizational change",
      "Smoother transitions during modernization",
      "Sustained long-term transformation outcomes"
    ],
    technologies: ["Prosci", "ServiceNow", "SharePoint", "Power BI", "MS Teams", "Confluence"],
    pricing: createContactPricing("Change Management Consultants"),
    caseStudies: [],
    faqs: [
      { question: "What change management frameworks do you use?", answer: "We primarily use Prosci ADKAR and Kotter's 8-Step model, tailored to the unique dynamics of federal agencies." },
      { question: "Can you support enterprise-wide transformations?", answer: "Yes, our consultants have led change management for agency-wide ERP, cloud, and digital transformation programs." }
    ]
  },
  {
    slug: "govt-human-capital",
    name: "Human Capital Management Specialists",
    shortDescription: "Federal human capital strategy, workforce planning, and talent management consulting.",
    fullDescription: "Our Human Capital Management specialists help federal agencies develop workforce strategies, optimize talent acquisition, and build leadership pipelines aligned with OPM guidelines and agency mission objectives.",
    icon: Users,
    category: "Govt Strategic Consulting",
    features: [
      "Workforce planning & gap analysis",
      "Talent acquisition strategy for federal roles",
      "Leadership development & succession planning",
      "Employee engagement & retention programs",
      "OPM compliance & reporting",
      "Diversity, equity & inclusion initiatives"
    ],
    benefits: [
      "Stronger talent pipelines for mission-critical roles",
      "Improved employee retention and engagement",
      "Compliance with OPM and merit system principles",
      "Data-driven workforce planning decisions"
    ],
    technologies: ["USA Staffing", "eOPF", "Workday", "SAP SuccessFactors", "Power BI", "Tableau"],
    pricing: createContactPricing("Human Capital Management"),
    caseStudies: [],
    faqs: [
      { question: "Do you align with OPM guidelines?", answer: "Yes, all our human capital strategies are built around OPM's Human Capital Framework and merit system principles." },
      { question: "Can you support federal hiring initiatives?", answer: "Absolutely. We help agencies streamline hiring through USA Staffing, direct hire authorities, and strategic recruitment campaigns." }
    ]
  },
  {
    slug: "govt-financial-management",
    name: "Financial Management Consultants",
    shortDescription: "Federal financial management, budget analysis, and fiscal compliance consulting specialists.",
    fullDescription: "Our Financial Management consultants support federal agencies with budget formulation, fiscal compliance, audit readiness, and financial system modernization aligned with OMB and Treasury guidelines.",
    icon: DollarSign,
    category: "Govt Strategic Consulting",
    features: [
      "Federal budget formulation and execution",
      "Audit readiness and OMB compliance",
      "Financial system modernization (Oracle Federal, SAP)",
      "Cost estimation and economic analysis",
      "Grants management and oversight",
      "DATA Act and FFMIA reporting compliance"
    ],
    benefits: [
      "Ensure compliance with federal financial regulations",
      "Improve audit readiness and reduce findings",
      "Modernize legacy financial management systems",
      "Better budget visibility and cost control"
    ],
    technologies: ["Oracle Federal Financials", "SAP ERP", "Power BI", "Tableau", "ServiceNow"],
    pricing: createContactPricing("Financial Management Consultants"),
    caseStudies: [],
    faqs: [
      { question: "What financial frameworks do you support?", answer: "We support OMB Circular A-123, FFMIA, DATA Act, and other federal financial management frameworks." },
      { question: "Can you help with audit readiness?", answer: "Yes, our consultants specialize in preparing agencies for financial statement audits and reducing audit findings." }
    ]
  },
  {
    slug: "govt-acquisition-procurement",
    name: "Acquisition & Procurement Specialists",
    shortDescription: "Federal acquisition, procurement strategy, and contract management consulting experts.",
    fullDescription: "Our Acquisition & Procurement specialists help government agencies streamline procurement processes, manage contracts, and ensure compliance with FAR/DFARS regulations.",
    icon: FileCheck,
    category: "Govt Strategic Consulting",
    features: [
      "Federal Acquisition Regulation (FAR/DFARS) expertise",
      "Contract lifecycle management",
      "Procurement strategy and market research",
      "Source selection and proposal evaluation",
      "Vendor performance management",
      "Small business and socioeconomic program compliance"
    ],
    benefits: [
      "Streamlined procurement timelines",
      "Reduced contract risk and compliance issues",
      "Better vendor selection and management",
      "Improved small business participation"
    ],
    technologies: ["SAM.gov", "FPDS", "GovWin", "Deltek Costpoint", "Ariba"],
    pricing: createContactPricing("Acquisition & Procurement"),
    caseStudies: [],
    faqs: [
      { question: "Do your specialists have FAR/DFARS expertise?", answer: "Yes, our procurement specialists are deeply experienced in FAR, DFARS, and agency-specific acquisition regulations." },
      { question: "Can you support the full procurement lifecycle?", answer: "Absolutely. We cover everything from market research and solicitation through award, administration, and closeout." }
    ]
  },
  // ==================== GOVT SERVICES — TECHNICAL ====================
  {
    slug: "govt-cybersecurity-compliance",
    name: "Cybersecurity & Compliance Consulting",
    shortDescription: "Specialized cybersecurity consultants for government agencies and compliance frameworks.",
    fullDescription: "Protect government systems and citizen data with expert cybersecurity consultants who understand federal compliance frameworks. From risk assessments and security architecture to continuous monitoring and incident response, we provide the specialized talent government agencies need.",
    icon: Shield,
    category: "Govt Technical Consulting",
    features: [
      "FISMA & FedRAMP compliance",
      "NIST framework implementation",
      "Security assessment & authorization (SA&A)",
      "Continuous diagnostics & monitoring",
      "Incident response planning",
      "Zero trust architecture consulting",
      "Identity & access management",
      "Security awareness training"
    ],
    benefits: [
      "Meet federal security mandates",
      "Reduce cybersecurity risk exposure",
      "Achieve & maintain ATO",
      "Protect citizen data assets",
      "Improve security posture continuously"
    ],
    technologies: ["Splunk", "CrowdStrike", "Palo Alto", "Tenable", "Okta", "Azure AD", "AWS GovCloud"],
    pricing: createContactPricing("Cybersecurity & Compliance Consulting"),
    caseStudies: [],
    faqs: [
      { question: "Can you help us achieve FedRAMP authorization?", answer: "Yes. We've guided multiple agencies and cloud service providers through the full FedRAMP authorization process, from readiness assessment to continuous monitoring." },
      { question: "Do you provide cleared cybersecurity staff?", answer: "We can provide cybersecurity professionals with appropriate clearance levels to meet your agency's requirements." }
    ]
  },
  {
    slug: "govt-data-analytics-consultants",
    name: "Data & Analytics Consultants",
    shortDescription: "Data engineers, scientists, and analysts for government data modernization initiatives.",
    fullDescription: "Transform government data into actionable insights. Our data consultants help agencies modernize data infrastructure, build analytics capabilities, and implement data governance frameworks that enable evidence-based decision making and improved public services.",
    icon: BarChart3,
    category: "Govt Technical Consulting",
    features: [
      "Data strategy & governance",
      "Data warehouse modernization",
      "Advanced analytics & visualization",
      "Data quality & master data management",
      "Open data & transparency initiatives",
      "Predictive analytics for public services",
      "Data lake architecture",
      "Reporting & compliance dashboards"
    ],
    benefits: [
      "Evidence-based policy decisions",
      "Improved public service delivery",
      "Data-driven resource allocation",
      "Enhanced transparency & accountability",
      "Compliance with data mandates"
    ],
    technologies: ["Tableau", "Power BI", "Snowflake", "Databricks", "Python", "AWS GovCloud", "Azure Government"],
    pricing: createContactPricing("Data & Analytics Consultants"),
    caseStudies: [],
    faqs: [
      { question: "Do you support CDO office initiatives?", answer: "Yes. We help Chief Data Officers establish data governance, build analytics teams, and implement enterprise data strategies aligned with federal data mandates." },
      { question: "Can you work with classified data?", answer: "We can provide appropriately cleared data professionals for projects involving sensitive or classified government data." }
    ]
  },
  {
    slug: "govt-cloud-infrastructure",
    name: "Cloud & Infrastructure Consultants",
    shortDescription: "Cloud migration and infrastructure modernization specialists for government environments.",
    fullDescription: "Modernize government IT infrastructure with cloud-first strategies. Our consultants specialize in GovCloud environments, ensuring secure, compliant cloud migrations that reduce costs, improve agility, and meet strict government security requirements.",
    icon: Cloud,
    category: "Govt Technical Consulting",
    features: [
      "Cloud migration strategy & execution",
      "GovCloud architecture design",
      "Hybrid & multi-cloud solutions",
      "Infrastructure as Code (IaC)",
      "Container orchestration & microservices",
      "Disaster recovery & business continuity",
      "Cost optimization & FinOps",
      "Legacy system modernization"
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Improved system reliability",
      "Faster deployment of new capabilities",
      "FedRAMP-compliant cloud environments",
      "Scalable infrastructure for mission needs"
    ],
    technologies: ["AWS GovCloud", "Azure Government", "Google Cloud", "Terraform", "Kubernetes", "Docker", "Ansible"],
    pricing: createContactPricing("Cloud & Infrastructure Consultants"),
    caseStudies: [],
    faqs: [
      { question: "Do you support GovCloud deployments?", answer: "Yes. We specialize in AWS GovCloud, Azure Government, and other FedRAMP-authorized cloud platforms designed for government workloads." },
      { question: "Can you modernize our legacy mainframe systems?", answer: "Absolutely. We have experience migrating legacy mainframe and on-premise systems to modern cloud architectures with minimal disruption." }
    ]
  },
  {
    slug: "govt-erp-systems-consultants",
    name: "ERP & Enterprise Systems Consultants",
    shortDescription: "SAP, Oracle, and enterprise system specialists for government agencies.",
    fullDescription: "Implement and optimize enterprise resource planning systems for government operations. Our ERP consultants bring deep expertise in government-specific configurations, financial management systems, and HR modernization to help agencies streamline operations and improve efficiency.",
    icon: Building2,
    category: "Govt Technical Consulting",
    features: [
      "SAP & Oracle implementations",
      "Financial management system modernization",
      "HR & payroll system integration",
      "Grants management systems",
      "Procurement & acquisition platforms",
      "System integration & data migration",
      "Custom configuration & development",
      "Training & change management"
    ],
    benefits: [
      "Streamlined government operations",
      "Improved financial transparency",
      "Better workforce management",
      "Reduced manual processing",
      "Compliance with federal standards"
    ],
    technologies: ["SAP S/4HANA", "Oracle Cloud", "Workday", "ServiceNow", "Salesforce Government Cloud", "MuleSoft"],
    pricing: createContactPricing("ERP & Enterprise Systems Consultants"),
    caseStudies: [],
    faqs: [
      { question: "Do you support federal financial systems?", answer: "Yes. Our consultants have experience with FFMIA-compliant financial systems and Treasury reporting requirements." },
      { question: "Can you help with ERP modernization?", answer: "We help agencies plan and execute ERP modernization from legacy systems to modern cloud-based platforms like SAP S/4HANA and Oracle Cloud." }
    ]
  },
  {
    slug: "govt-healthcare-it",
    name: "Healthcare IT Consultants (VA/CMS)",
    shortDescription: "Specialized consultants for VA, CMS, and federal healthcare IT modernization programs.",
    fullDescription: "Our Healthcare IT consultants bring deep domain expertise in VA and CMS systems, electronic health records, and federal healthcare compliance to support mission-critical modernization efforts.",
    icon: HeartPulse,
    category: "Govt Technical Consulting",
    features: [
      "VA VistA and Cerner EHR migration specialists",
      "CMS Medicare & Medicaid systems modernization",
      "HIPAA compliance and health data security",
      "Interoperability and HL7/FHIR integration",
      "Telehealth platform implementation",
      "Health data analytics and population health management"
    ],
    benefits: [
      "Deep understanding of federal healthcare regulations",
      "Experience with VA and CMS-specific platforms",
      "Faster onboarding with cleared healthcare IT talent",
      "Improved patient outcomes through modern systems"
    ],
    technologies: ["Epic", "Cerner", "VistA", "HL7/FHIR", "AWS GovCloud", "Salesforce Health Cloud"],
    pricing: createContactPricing("Healthcare IT Consultants"),
    caseStudies: [],
    faqs: [
      { question: "Do your consultants have VA/CMS experience?", answer: "Yes, our healthcare IT consultants have hands-on experience with VA VistA, Cerner, CMS QNXT, and other federal healthcare platforms." },
      { question: "Can you support HIPAA compliance?", answer: "Absolutely. Our consultants are well-versed in HIPAA, FISMA, and FedRAMP requirements specific to healthcare environments." }
    ]
  },
  {
    slug: "govt-quality-assurance",
    name: "Quality Assurance & Testing Specialists",
    shortDescription: "IV&V, quality assurance, and testing specialists for government IT programs and compliance.",
    fullDescription: "Our QA & Testing specialists provide independent verification and validation (IV&V), test automation, and quality assurance services to ensure government systems meet performance, security, and compliance standards.",
    icon: TestTube,
    category: "Govt Technical Consulting",
    features: [
      "Independent Verification & Validation (IV&V)",
      "Test strategy & planning for federal systems",
      "Automated & manual testing execution",
      "508 accessibility compliance testing",
      "Security testing & vulnerability assessments",
      "Performance & load testing"
    ],
    benefits: [
      "Reduced defects in production systems",
      "Compliance with federal testing standards",
      "Faster release cycles with test automation",
      "Improved system reliability and uptime"
    ],
    technologies: ["Selenium", "Cypress", "JIRA", "HP ALM", "SonarQube", "OWASP ZAP"],
    pricing: createContactPricing("Quality Assurance Specialists"),
    caseStudies: [],
    faqs: [
      { question: "Do you provide IV&V services?", answer: "Yes, we provide fully independent IV&V engagements aligned with IEEE and federal standards." },
      { question: "Can you support 508 compliance testing?", answer: "Absolutely. Our QA team includes certified accessibility testers experienced with Section 508 and WCAG 2.1 requirements." }
    ]
  }
];

export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
  return servicesData.find(service => service.slug === slug);
};

export const getServicesByCategory = (category: string): ServiceDetail[] => {
  return servicesData.filter(service => service.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(servicesData.map(service => service.category))];
};

// Categories shown on the Services page (Non-IT & Consulting only; IT is under Solutions)
const servicesPageCategories = [
  "Govt Strategic Consulting",
  "Govt Technical Consulting",
  "Support & Consulting",
  "Talent Management Services",
  "Non-IT Talent Management Services",
];

export const getServicesPageCategories = (): string[] => {
  return servicesPageCategories;
};
