import { 
  Code2, Cloud, Server, RefreshCw, TestTube, Headphones, Settings, Database,
  Shield, Smartphone, Brain, Layers, Zap, Users, BarChart3, Lock,
  LucideIcon, Bot, Sparkles, MessageSquare, Eye, FileText, Workflow, AlertTriangle
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
    fullDescription: "Harness the power of artificial intelligence to automate processes, gain insights, and create innovative products. Our AI/ML team builds custom models and implements proven AI solutions that deliver measurable business outcomes.",
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
    fullDescription: "Leverage the latest generative AI technologies to transform your business operations. From custom chatbots to content generation systems, we help you harness the power of LLMs to automate complex tasks, enhance customer experiences, and drive innovation.",
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
    fullDescription: "Go beyond traditional automation with AI-powered intelligent process automation. We combine robotic process automation (RPA) with machine learning to create smart workflows that learn, adapt, and make decisions, transforming complex business processes.",
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
    fullDescription: "Accelerate your digital transformation with our comprehensive cloud migration services. We help you move to the cloud strategically, minimizing risk and maximizing the benefits of cloud computing including scalability, cost optimization, and improved performance.",
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
    fullDescription: "Unlock the value of your data with modern data engineering solutions. We design and build scalable data pipelines, warehouses, and lakes that enable real-time analytics and support data-driven decision making across your organization.",
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
    fullDescription: "Empower your organization with powerful business intelligence solutions. We build custom dashboards, reports, and analytics platforms that make data accessible and actionable for stakeholders at all levels.",
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
    fullDescription: "Safeguard your business from evolving cyber threats with our comprehensive security services. From vulnerability assessments to managed security operations, we help you build a robust security posture that protects your assets and reputation.",
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
    fullDescription: "Keep your applications running smoothly with our production support services. Our experienced team provides round-the-clock monitoring, rapid incident response, and continuous optimization to ensure your systems deliver consistent performance.",
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
    fullDescription: "Build robust APIs and integrations that connect your systems and unlock new capabilities. We design and develop scalable, secure APIs that enable seamless data flow and power modern applications.",
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
    fullDescription: "Safeguard personal and sensitive data with comprehensive privacy programs. We help organizations implement data protection strategies, privacy-by-design principles, and compliance frameworks that protect customer trust while enabling data-driven business operations.",
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
    fullDescription: "Protect your cloud workloads with comprehensive security solutions designed for modern cloud environments. We help organizations secure their AWS, Azure, and Google Cloud infrastructure through architecture reviews, configuration hardening, continuous monitoring, and cloud-native security tooling.",
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
