import { 
  Code2, Cloud, Server, RefreshCw, TestTube, Headphones, Settings, Database,
  Shield, Smartphone, Brain, Layers, Zap, Users, BarChart3, Lock,
  LucideIcon, Bot, Sparkles, MessageSquare, Eye, FileText, Workflow
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
      "Natural language processing",
      "Computer vision solutions",
      "Predictive analytics",
      "Recommendation engines",
      "Chatbots and virtual assistants",
      "Anomaly detection",
      "Document processing and OCR"
    ],
    benefits: [
      "Automate repetitive tasks",
      "Make data-driven decisions",
      "Personalize customer experiences",
      "Predict market trends",
      "Reduce operational costs"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Langchain", "Hugging Face", "AWS SageMaker", "Azure ML"],
    pricing: [
      {
        name: "AI Starter",
        price: "$20,000",
        description: "Basic AI implementation",
        features: [
          "Pre-trained model integration",
          "Basic NLP or vision task",
          "API development",
          "Documentation",
          "30 days support"
        ]
      },
      {
        name: "Custom AI",
        price: "$75,000",
        description: "Custom model development",
        features: [
          "Custom model training",
          "Data pipeline setup",
          "Model optimization",
          "A/B testing framework",
          "90 days support",
          "Performance monitoring"
        ],
        popular: true
      },
      {
        name: "AI Enterprise",
        price: "Custom",
        description: "Enterprise AI transformation",
        features: [
          "Multiple AI solutions",
          "MLOps infrastructure",
          "Continuous learning",
          "Dedicated AI team",
          "24/7 support",
          "Strategy consulting"
        ]
      }
    ],
    caseStudies: [
      {
        company: "InsureTech Global",
        industry: "Insurance",
        challenge: "Manual claims processing taking weeks and prone to errors.",
        solution: "Implemented AI-powered claims processing with document OCR and fraud detection.",
        results: [
          "Claims processing time reduced from 2 weeks to 2 hours",
          "Fraud detection accuracy improved by 85%",
          "$5M saved in fraudulent claims annually",
          "Customer satisfaction increased by 40%"
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
      "Semantic search implementation",
      "Multi-modal AI applications",
      "AI safety and guardrails"
    ],
    benefits: [
      "Reduce content creation time by 80%",
      "Automate customer support interactions",
      "Extract insights from unstructured data",
      "Scale personalized communications",
      "Accelerate research and development"
    ],
    technologies: ["OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "Langchain", "LlamaIndex", "Pinecone", "Weaviate", "Hugging Face"],
    pricing: [
      {
        name: "GenAI Starter",
        price: "$15,000",
        description: "Basic LLM integration",
        features: [
          "Single LLM API integration",
          "Basic chatbot or assistant",
          "Prompt library development",
          "Documentation",
          "30 days support"
        ]
      },
      {
        name: "GenAI Pro",
        price: "$50,000",
        description: "Advanced RAG systems",
        features: [
          "Custom RAG implementation",
          "Vector database setup",
          "Fine-tuning pipeline",
          "Multi-model orchestration",
          "90 days support",
          "Performance optimization"
        ],
        popular: true
      },
      {
        name: "GenAI Enterprise",
        price: "Custom",
        description: "Enterprise AI platform",
        features: [
          "Full AI platform development",
          "Custom model training",
          "Enterprise security & compliance",
          "Dedicated AI team",
          "24/7 support",
          "Ongoing optimization"
        ]
      }
    ],
    caseStudies: [
      {
        company: "LegalPro Services",
        industry: "Legal",
        challenge: "Lawyers spending 60% of time on document review and research.",
        solution: "Built an AI-powered legal research assistant with RAG for document analysis and case law retrieval.",
        results: [
          "Research time reduced by 75%",
          "Document review 10x faster",
          "$2M saved annually in billable hours",
          "Accuracy improved by 40%"
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
    slug: "conversational-ai",
    name: "Conversational AI & Chatbots",
    shortDescription: "Intelligent chatbots and virtual assistants that understand and respond naturally.",
    fullDescription: "Create sophisticated conversational experiences that delight customers and streamline operations. Our conversational AI solutions go beyond simple rule-based bots to deliver truly intelligent, context-aware interactions across multiple channels.",
    icon: MessageSquare,
    category: "Artificial Intelligence",
    features: [
      "Multi-channel deployment (web, mobile, voice)",
      "Natural language understanding",
      "Context and memory management",
      "Sentiment analysis",
      "Live agent handoff",
      "Multi-language support",
      "Integration with CRM and ticketing systems",
      "Analytics and conversation insights"
    ],
    benefits: [
      "24/7 customer support availability",
      "Reduce support costs by 60%",
      "Handle 80% of queries automatically",
      "Improve customer satisfaction scores",
      "Scale support without hiring"
    ],
    technologies: ["Dialogflow", "Amazon Lex", "Azure Bot Service", "Rasa", "OpenAI", "Twilio", "Intercom", "Zendesk"],
    pricing: [
      {
        name: "Bot Starter",
        price: "$12,000",
        description: "Basic chatbot implementation",
        features: [
          "Single channel deployment",
          "Up to 50 intents",
          "FAQ automation",
          "Basic analytics",
          "30 days support"
        ]
      },
      {
        name: "Bot Pro",
        price: "$35,000",
        description: "Multi-channel intelligent bot",
        features: [
          "Multi-channel deployment",
          "Unlimited intents",
          "CRM integration",
          "Sentiment analysis",
          "90 days support",
          "Custom training"
        ],
        popular: true
      },
      {
        name: "Bot Enterprise",
        price: "Custom",
        description: "Enterprise conversational platform",
        features: [
          "Full platform deployment",
          "Voice and text channels",
          "Advanced analytics",
          "Custom AI models",
          "24/7 support",
          "Dedicated team"
        ]
      }
    ],
    caseStudies: [
      {
        company: "TravelEasy",
        industry: "Travel & Hospitality",
        challenge: "Support team overwhelmed with booking inquiries and common questions.",
        solution: "Deployed an AI chatbot handling bookings, FAQs, and complex itinerary changes across web and WhatsApp.",
        results: [
          "70% of inquiries handled automatically",
          "Support costs reduced by 55%",
          "Customer satisfaction up 25%",
          "24/7 availability achieved"
        ]
      }
    ],
    faqs: [
      {
        question: "Can the chatbot handle complex conversations?",
        answer: "Yes, our conversational AI maintains context across multiple turns, remembers user preferences, and can handle complex multi-step workflows while seamlessly escalating to humans when needed."
      },
      {
        question: "How do you train the chatbot for our business?",
        answer: "We work with your team to understand your use cases, gather training data from past interactions, and iteratively improve the bot through testing and real-world feedback."
      }
    ]
  },
  {
    slug: "computer-vision",
    name: "Computer Vision & Image AI",
    shortDescription: "Visual recognition, object detection, and image analysis solutions.",
    fullDescription: "Transform how your business processes visual information with cutting-edge computer vision technology. From quality control in manufacturing to medical image analysis, we build custom vision solutions that see, understand, and act on visual data.",
    icon: Eye,
    category: "Artificial Intelligence",
    features: [
      "Object detection and tracking",
      "Image classification",
      "Facial recognition",
      "OCR and document processing",
      "Video analytics",
      "Quality inspection automation",
      "Medical image analysis",
      "Real-time visual processing"
    ],
    benefits: [
      "Automate visual inspection tasks",
      "Reduce manual review errors by 95%",
      "Process images 1000x faster than humans",
      "Enable new product capabilities",
      "Improve safety and compliance"
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenCV", "YOLO", "AWS Rekognition", "Google Vision AI", "Azure Computer Vision", "NVIDIA CUDA"],
    pricing: [
      {
        name: "Vision Starter",
        price: "$25,000",
        description: "Basic vision implementation",
        features: [
          "Single use case (classification or detection)",
          "Pre-trained model adaptation",
          "API integration",
          "Documentation",
          "30 days support"
        ]
      },
      {
        name: "Vision Pro",
        price: "$80,000",
        description: "Custom vision solution",
        features: [
          "Custom model development",
          "Multi-task vision system",
          "Edge deployment option",
          "Real-time processing",
          "90 days support",
          "Model retraining"
        ],
        popular: true
      },
      {
        name: "Vision Enterprise",
        price: "Custom",
        description: "Enterprise vision platform",
        features: [
          "Multiple vision applications",
          "Video analytics",
          "Custom hardware integration",
          "MLOps infrastructure",
          "24/7 support",
          "Ongoing optimization"
        ]
      }
    ],
    caseStudies: [
      {
        company: "AutoParts Manufacturing",
        industry: "Manufacturing",
        challenge: "Manual quality inspection missing defects and creating bottlenecks.",
        solution: "Implemented AI-powered visual inspection system detecting defects in real-time on the production line.",
        results: [
          "Defect detection rate improved to 99.5%",
          "Inspection time reduced by 90%",
          "Quality returns decreased by 80%",
          "$3M saved annually in defect costs"
        ]
      }
    ],
    faqs: [
      {
        question: "What kind of camera or hardware do we need?",
        answer: "Requirements depend on the use case. Many solutions work with standard cameras. For specialized needs like manufacturing inspection, we recommend industrial cameras. We help specify the right hardware for your project."
      },
      {
        question: "Can this work in real-time?",
        answer: "Yes, we optimize models for real-time performance. Depending on requirements, we can deploy on cloud, edge devices, or specialized hardware like NVIDIA GPUs to achieve sub-second response times."
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
      "Automate 80% of manual processes",
      "Reduce processing errors by 90%",
      "Free employees for higher-value work",
      "Achieve faster turnaround times",
      "Scale operations without proportional costs"
    ],
    technologies: ["UiPath", "Automation Anywhere", "Blue Prism", "Power Automate", "Python", "TensorFlow", "AWS Textract", "Azure Form Recognizer"],
    pricing: [
      {
        name: "IPA Starter",
        price: "$30,000",
        description: "Single process automation",
        features: [
          "One process automation",
          "Document processing AI",
          "Basic exception handling",
          "Process documentation",
          "30 days support"
        ]
      },
      {
        name: "IPA Pro",
        price: "$100,000",
        description: "Multi-process automation",
        features: [
          "Up to 5 process automations",
          "AI-powered decision making",
          "Process orchestration",
          "Advanced analytics",
          "90 days support",
          "Training included"
        ],
        popular: true
      },
      {
        name: "IPA Enterprise",
        price: "Custom",
        description: "Enterprise automation platform",
        features: [
          "Unlimited automations",
          "Full process mining",
          "Center of Excellence setup",
          "Custom AI models",
          "24/7 support",
          "Dedicated team"
        ]
      }
    ],
    caseStudies: [
      {
        company: "GlobalBank Financial",
        industry: "Banking",
        challenge: "Loan processing taking 2 weeks with extensive manual document review.",
        solution: "Implemented intelligent document processing with automated data extraction and decision support.",
        results: [
          "Loan processing time reduced to 2 days",
          "Document processing accuracy at 98%",
          "Staff productivity increased 300%",
          "$10M saved in operational costs"
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
  // ==================== DEVELOPMENT & ENGINEERING ====================
  {
    slug: "custom-app-development",
    name: "Custom App Development",
    shortDescription: "Tailored web and enterprise applications built to solve your unique business challenges.",
    fullDescription: "We design and develop custom applications that perfectly align with your business processes and goals. From internal tools to customer-facing platforms, our team creates scalable, secure, and user-friendly applications that drive efficiency and growth.",
    icon: Code2,
    category: "Development & Engineering",
    features: [
      "Web application development",
      "Enterprise software solutions",
      "SaaS platform development",
      "Internal tools and dashboards",
      "E-commerce and marketplace platforms",
      "Real-time collaboration tools",
      "Workflow automation systems",
      "Integration with existing systems"
    ],
    benefits: [
      "Solve unique business challenges",
      "Improve operational efficiency by 50%",
      "Gain competitive advantage",
      "Full ownership of your solution",
      "Scalable architecture for growth"
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "Redis", "GraphQL", "AWS", "Docker"],
    pricing: [
      {
        name: "Starter App",
        price: "$20,000",
        description: "Small-scale applications",
        features: [
          "Up to 4 months development",
          "Single developer",
          "Core functionality",
          "Basic integrations",
          "30 days support"
        ]
      },
      {
        name: "Business App",
        price: "$60,000",
        description: "Mid-sized applications",
        features: [
          "Up to 8 months development",
          "Team of 2-4 developers",
          "Advanced features",
          "Multiple integrations",
          "90 days support",
          "Performance optimization"
        ],
        popular: true
      },
      {
        name: "Enterprise App",
        price: "Custom",
        description: "Large-scale platforms",
        features: [
          "Unlimited timeline",
          "Full dedicated team",
          "Complex integrations",
          "Enterprise security",
          "24/7 support",
          "Ongoing development"
        ]
      }
    ],
    caseStudies: [
      {
        company: "LogiTrack Solutions",
        industry: "Logistics",
        challenge: "Managing fleet operations across multiple locations with outdated spreadsheets.",
        solution: "Built a custom fleet management platform with real-time tracking, route optimization, and driver management.",
        results: [
          "Fuel costs reduced by 25%",
          "Delivery times improved by 35%",
          "Real-time visibility across 500+ vehicles",
          "Driver productivity increased by 40%"
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
      "Increase user engagement by 60%",
      "Generate new revenue streams",
      "Build brand loyalty through mobile presence",
      "Collect valuable user behavior data"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL", "Redux", "App Store Connect"],
    pricing: [
      {
        name: "Single Platform",
        price: "$25,000",
        description: "iOS or Android app",
        features: [
          "One platform (iOS or Android)",
          "Up to 10 screens",
          "Basic analytics",
          "Push notifications",
          "App store submission"
        ]
      },
      {
        name: "Cross-Platform",
        price: "$40,000",
        description: "Both iOS and Android",
        features: [
          "iOS and Android apps",
          "Up to 20 screens",
          "Advanced analytics",
          "Push notifications",
          "App store optimization",
          "Backend API included"
        ],
        popular: true
      },
      {
        name: "Enterprise Mobile",
        price: "Custom",
        description: "Complex enterprise apps",
        features: [
          "All platforms",
          "Unlimited screens",
          "Enterprise integrations",
          "Advanced security",
          "Dedicated support team",
          "Custom features"
        ]
      }
    ],
    caseStudies: [
      {
        company: "RetailMax",
        industry: "Retail",
        challenge: "Needed a mobile commerce platform to compete with larger retailers.",
        solution: "Built a cross-platform shopping app with personalized recommendations and seamless checkout.",
        results: [
          "1M+ downloads in first year",
          "35% of total sales from mobile",
          "4.8 star rating on both stores",
          "Customer retention up 45%"
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
      "Migration readiness assessment",
      "AWS, Azure, and Google Cloud",
      "Zero-downtime migration",
      "Cost optimization strategies",
      "Multi-cloud and hybrid solutions",
      "Containerization and orchestration",
      "Data migration and validation",
      "Security and compliance setup"
    ],
    benefits: [
      "Reduce infrastructure costs by 30-50%",
      "Improve application performance",
      "Enable global scalability",
      "Enhance disaster recovery capabilities",
      "Increase deployment speed"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes", "Docker", "Ansible", "CloudFormation"],
    pricing: [
      {
        name: "Assessment",
        price: "$5,000",
        description: "Cloud readiness evaluation",
        features: [
          "Infrastructure audit",
          "Cost analysis",
          "Migration roadmap",
          "Risk assessment",
          "Recommendations report"
        ]
      },
      {
        name: "Standard Migration",
        price: "$35,000",
        description: "Small to medium workloads",
        features: [
          "Up to 10 servers/services",
          "Data migration",
          "Basic automation",
          "Security setup",
          "Documentation",
          "30 days hypercare"
        ],
        popular: true
      },
      {
        name: "Enterprise Migration",
        price: "Custom",
        description: "Large-scale transformations",
        features: [
          "Unlimited workloads",
          "Re-architecture options",
          "Advanced automation",
          "24/7 migration support",
          "Extended hypercare",
          "Ongoing optimization"
        ]
      }
    ],
    caseStudies: [
      {
        company: "MediaStream Inc",
        industry: "Media & Entertainment",
        challenge: "On-premise infrastructure couldn't handle streaming traffic spikes during popular events.",
        solution: "Migrated to AWS with auto-scaling architecture and global CDN implementation.",
        results: [
          "Handled 10x traffic spikes seamlessly",
          "45% reduction in infrastructure costs",
          "99.99% uptime achieved",
          "Global latency reduced by 60%"
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
      "24/7 infrastructure monitoring",
      "Server & network administration",
      "Disaster recovery planning",
      "Vendor management",
      "Capacity planning",
      "Performance optimization",
      "Security patching",
      "Backup management"
    ],
    benefits: [
      "99.9%+ uptime guarantee",
      "Reduce IT operational costs",
      "Proactive issue prevention",
      "Focus on core business",
      "Access to expert IT team"
    ],
    technologies: ["Datadog", "Prometheus", "Grafana", "PagerDuty", "Ansible", "Nagios", "VMware", "Veeam"],
    pricing: [
      {
        name: "Basic",
        price: "$2,500/mo",
        description: "Essential monitoring",
        features: [
          "Up to 10 servers",
          "8x5 monitoring",
          "Email alerts",
          "Monthly reports",
          "Basic support"
        ]
      },
      {
        name: "Professional",
        price: "$7,500/mo",
        description: "Comprehensive management",
        features: [
          "Up to 50 servers",
          "24/7 monitoring",
          "Incident response",
          "Weekly reports",
          "Priority support",
          "Backup management"
        ],
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "Full IT outsourcing",
        features: [
          "Unlimited infrastructure",
          "Dedicated team",
          "Custom SLAs",
          "On-site support option",
          "Strategic consulting",
          "Complete IT management"
        ]
      }
    ],
    caseStudies: [
      {
        company: "LogiTrans Shipping",
        industry: "Logistics",
        challenge: "Frequent system outages affecting tracking and delivery operations.",
        solution: "Implemented comprehensive monitoring, automated failover, and 24/7 NOC support.",
        results: [
          "Uptime improved from 95% to 99.95%",
          "Mean time to recovery reduced by 80%",
          "IT team freed for strategic projects",
          "Annual savings of $500K in downtime costs"
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
      "CI/CD pipeline implementation",
      "Infrastructure as Code",
      "Kubernetes orchestration",
      "SLO/SLI management",
      "Observability stack setup",
      "GitOps workflows",
      "Automated testing",
      "Release management"
    ],
    benefits: [
      "Deploy 10x more frequently",
      "Reduce deployment failures by 60%",
      "Faster incident recovery",
      "Improved developer productivity",
      "Better system reliability"
    ],
    technologies: ["Jenkins", "GitHub Actions", "GitLab CI", "Terraform", "Kubernetes", "Helm", "ArgoCD", "Prometheus"],
    pricing: [
      {
        name: "Pipeline Setup",
        price: "$15,000",
        description: "Basic CI/CD implementation",
        features: [
          "CI/CD pipeline design",
          "Automated testing setup",
          "Basic IaC templates",
          "Documentation",
          "Team training"
        ]
      },
      {
        name: "DevOps Transformation",
        price: "$50,000",
        description: "Complete DevOps adoption",
        features: [
          "Full CI/CD implementation",
          "Infrastructure as Code",
          "Kubernetes setup",
          "Monitoring & alerting",
          "SRE practices",
          "3 months support"
        ],
        popular: true
      },
      {
        name: "Managed DevOps",
        price: "Custom",
        description: "Ongoing DevOps support",
        features: [
          "Dedicated DevOps engineers",
          "Continuous improvement",
          "24/7 on-call support",
          "Platform maintenance",
          "Capacity planning",
          "Cost optimization"
        ]
      }
    ],
    caseStudies: [
      {
        company: "SaaS Dynamics",
        industry: "Software",
        challenge: "Monthly releases causing extended downtime and customer complaints.",
        solution: "Implemented GitOps, Kubernetes, and comprehensive CI/CD with automated testing.",
        results: [
          "Deployments increased from monthly to daily",
          "Zero-downtime deployments achieved",
          "Release failures reduced by 90%",
          "Developer satisfaction improved significantly"
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
    pricing: [
      {
        name: "Data Pipeline",
        price: "$25,000",
        description: "Basic data integration",
        features: [
          "Up to 5 data sources",
          "ETL pipeline setup",
          "Basic scheduling",
          "Data quality checks",
          "Documentation"
        ]
      },
      {
        name: "Data Platform",
        price: "$80,000",
        description: "Complete data infrastructure",
        features: [
          "Unlimited data sources",
          "Data warehouse setup",
          "Real-time streaming",
          "Data governance",
          "Self-service analytics",
          "90 days support"
        ],
        popular: true
      },
      {
        name: "Enterprise Data",
        price: "Custom",
        description: "Enterprise-scale solutions",
        features: [
          "Enterprise architecture",
          "Advanced governance",
          "ML feature store",
          "Dedicated data team",
          "24/7 support",
          "Strategic consulting"
        ]
      }
    ],
    caseStudies: [
      {
        company: "E-Commerce Giant",
        industry: "Retail",
        challenge: "Data scattered across 15+ systems, making reporting take weeks.",
        solution: "Built unified data platform with Snowflake, real-time pipelines, and self-service BI.",
        results: [
          "Reporting time reduced from weeks to minutes",
          "Data freshness improved to near real-time",
          "Self-service analytics adopted by 500+ users",
          "Marketing ROI visibility increased 3x"
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
      "Custom BI dashboards",
      "KPI tracking & reporting",
      "Data visualization",
      "Self-service analytics",
      "Embedded analytics",
      "Automated reporting",
      "Mobile BI solutions",
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
    pricing: [
      {
        name: "Dashboard Starter",
        price: "$10,000",
        description: "Basic BI implementation",
        features: [
          "Up to 5 dashboards",
          "Single data source",
          "Standard visualizations",
          "User training",
          "30 days support"
        ]
      },
      {
        name: "BI Platform",
        price: "$35,000",
        description: "Comprehensive BI solution",
        features: [
          "Unlimited dashboards",
          "Multiple data sources",
          "Custom visualizations",
          "Self-service analytics",
          "Embedded analytics",
          "90 days support"
        ],
        popular: true
      },
      {
        name: "Enterprise BI",
        price: "Custom",
        description: "Enterprise-wide analytics",
        features: [
          "Enterprise deployment",
          "Advanced governance",
          "Custom development",
          "Dedicated support",
          "Analytics COE setup",
          "Ongoing optimization"
        ]
      }
    ],
    caseStudies: [
      {
        company: "National Bank",
        industry: "Banking",
        challenge: "Executives lacked real-time visibility into branch performance and customer metrics.",
        solution: "Deployed Power BI platform with real-time dashboards and mobile access for 200+ executives.",
        results: [
          "Decision-making time reduced by 70%",
          "Branch performance visibility improved 10x",
          "Manual reporting eliminated",
          "Mobile access for all executives"
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
    category: "Quality & Security",
    features: [
      "Security audits & assessments",
      "Penetration testing",
      "Compliance management",
      "Incident response planning",
      "Security awareness training",
      "Vulnerability management",
      "SIEM implementation",
      "Zero trust architecture"
    ],
    benefits: [
      "Reduce security risks",
      "Achieve compliance certification",
      "Protect brand reputation",
      "Prevent costly breaches",
      "Build customer trust"
    ],
    technologies: ["Splunk", "CrowdStrike", "Okta", "Palo Alto", "Qualys", "Snyk", "HashiCorp Vault", "AWS Security Hub"],
    pricing: [
      {
        name: "Security Assessment",
        price: "$15,000",
        description: "Comprehensive security audit",
        features: [
          "Vulnerability assessment",
          "Penetration testing",
          "Risk analysis",
          "Compliance gap analysis",
          "Remediation roadmap"
        ]
      },
      {
        name: "Security Program",
        price: "$45,000",
        description: "Security implementation",
        features: [
          "Security architecture design",
          "Tool implementation",
          "Policy development",
          "Team training",
          "Incident response plan",
          "90 days support"
        ],
        popular: true
      },
      {
        name: "Managed Security",
        price: "Custom",
        description: "24/7 security operations",
        features: [
          "Dedicated security team",
          "24/7 SOC monitoring",
          "Threat hunting",
          "Incident response",
          "Continuous assessment",
          "Executive reporting"
        ]
      }
    ],
    caseStudies: [
      {
        company: "MedicalDevices Co",
        industry: "Healthcare",
        challenge: "Needed to achieve HIPAA compliance and improve security posture for FDA approval.",
        solution: "Conducted comprehensive security assessment, implemented controls, and established security program.",
        results: [
          "HIPAA compliance achieved",
          "FDA approval obtained",
          "Security vulnerabilities reduced by 95%",
          "Security awareness across organization"
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
      "24/7 monitoring & alerting",
      "Incident management",
      "Root cause analysis",
      "SLA management",
      "Performance tuning",
      "Release support",
      "On-call engineering",
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
    pricing: [
      {
        name: "Basic Support",
        price: "$3,000/mo",
        description: "Business hours support",
        features: [
          "8x5 monitoring",
          "Email support",
          "4-hour response SLA",
          "Monthly reporting",
          "Up to 5 applications"
        ]
      },
      {
        name: "Premium Support",
        price: "$10,000/mo",
        description: "24/7 comprehensive support",
        features: [
          "24/7 monitoring",
          "Phone & chat support",
          "1-hour response SLA",
          "Incident management",
          "Weekly reporting",
          "Up to 20 applications"
        ],
        popular: true
      },
      {
        name: "Enterprise Support",
        price: "Custom",
        description: "Dedicated support team",
        features: [
          "Dedicated engineers",
          "15-min response SLA",
          "Proactive optimization",
          "On-site support option",
          "Custom SLAs",
          "Unlimited applications"
        ]
      }
    ],
    caseStudies: [
      {
        company: "Trading Platform X",
        industry: "Financial Services",
        challenge: "Internal team overwhelmed with support requests, impacting development velocity.",
        solution: "Implemented L1/L2 support model with 24/7 coverage and automated incident response.",
        results: [
          "Developer time on support reduced by 70%",
          "Mean time to resolution improved by 60%",
          "Customer complaints reduced by 80%",
          "99.99% uptime achieved"
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
    pricing: [
      {
        name: "Strategy Sprint",
        price: "$25,000",
        description: "2-week intensive engagement",
        features: [
          "Stakeholder interviews",
          "Current state assessment",
          "Vision & roadmap",
          "Quick wins identification",
          "Executive presentation"
        ]
      },
      {
        name: "Transformation Program",
        price: "$100,000",
        description: "Comprehensive consulting",
        features: [
          "Full digital assessment",
          "Multi-year roadmap",
          "Business case development",
          "Vendor evaluation",
          "Implementation oversight",
          "Change management"
        ],
        popular: true
      },
      {
        name: "Advisory Retainer",
        price: "Custom",
        description: "Ongoing strategic guidance",
        features: [
          "Executive advisory",
          "Board presentations",
          "Continuous assessment",
          "Technology radar",
          "Peer benchmarking",
          "On-demand expertise"
        ]
      }
    ],
    caseStudies: [
      {
        company: "Century Manufacturing",
        industry: "Manufacturing",
        challenge: "100-year-old company struggling to compete with digitally-native competitors.",
        solution: "Developed 3-year digital transformation roadmap, prioritized initiatives, and led implementation oversight.",
        results: [
          "Digital revenue grew from 5% to 35%",
          "Operational efficiency improved by 45%",
          "Customer acquisition cost reduced by 40%",
          "Company valuation increased 2x"
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
      "Dedicated developers",
      "Flexible engagement models",
      "Domain expertise",
      "Seamless integration",
      "Rapid onboarding",
      "Skill gap coverage",
      "Project-based or long-term",
      "Multiple time zone coverage"
    ],
    benefits: [
      "Faster time to hire",
      "Reduced recruitment costs",
      "Flexible team scaling",
      "Access to specialized skills",
      "Lower overhead costs"
    ],
    technologies: ["All major tech stacks", "React", "Node.js", "Python", "Java", ".NET", "AWS", "Azure", "DevOps"],
    pricing: [
      {
        name: "Single Resource",
        price: "$8,000/mo",
        description: "One dedicated professional",
        features: [
          "Full-time dedication",
          "Direct communication",
          "Flexible skills",
          "2-week replacement guarantee",
          "Monthly billing"
        ]
      },
      {
        name: "Team Extension",
        price: "$30,000/mo",
        description: "Pod of 4-5 professionals",
        features: [
          "Complete pod (devs, QA, PM)",
          "Self-sufficient team",
          "Established processes",
          "Daily standups",
          "Sprint delivery",
          "Volume discount"
        ],
        popular: true
      },
      {
        name: "Dedicated Center",
        price: "Custom",
        description: "Your offshore team",
        features: [
          "10+ dedicated resources",
          "Your branding optional",
          "Custom facilities",
          "Dedicated management",
          "Full HR support",
          "Maximum cost savings"
        ]
      }
    ],
    caseStudies: [
      {
        company: "FastGrow Startup",
        industry: "Technology",
        challenge: "Needed to triple engineering capacity in 3 months for product launch.",
        solution: "Provided 8 senior developers and 2 QA engineers with rapid onboarding and integration.",
        results: [
          "Team scaled in 3 weeks",
          "Product launched on schedule",
          "70% cost savings vs. local hiring",
          "4 augmented resources converted to full-time"
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
    pricing: [
      {
        name: "API Development",
        price: "$20,000",
        description: "Custom API development",
        features: [
          "API design & development",
          "Up to 20 endpoints",
          "Documentation (Swagger/OpenAPI)",
          "Basic security",
          "30 days support"
        ]
      },
      {
        name: "Integration Suite",
        price: "$50,000",
        description: "Multiple integrations",
        features: [
          "Up to 5 integrations",
          "Custom API development",
          "Data transformation",
          "Error handling",
          "Monitoring setup",
          "90 days support"
        ],
        popular: true
      },
      {
        name: "Enterprise APIs",
        price: "Custom",
        description: "Enterprise API platform",
        features: [
          "API platform setup",
          "Unlimited integrations",
          "Developer portal",
          "Analytics & monetization",
          "Dedicated support",
          "SLA guarantees"
        ]
      }
    ],
    caseStudies: [
      {
        company: "PaymentsPro",
        industry: "Fintech",
        challenge: "Needed to expose payment services to partners through a secure, scalable API.",
        solution: "Built comprehensive payment API with OAuth security, rate limiting, and developer portal.",
        results: [
          "50+ partner integrations in first year",
          "New revenue stream of $2M annually",
          "99.99% API uptime",
          "Developer NPS score of 72"
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
      "Reduce bugs in production by 80%",
      "Faster release cycles",
      "Improved user satisfaction",
      "Lower support costs",
      "Confident deployments"
    ],
    technologies: ["Selenium", "Cypress", "Playwright", "JMeter", "Postman", "Appium", "TestRail", "JIRA"],
    pricing: [
      {
        name: "Test Automation",
        price: "$20,000",
        description: "Automated test suite setup",
        features: [
          "Test framework setup",
          "Up to 100 test cases",
          "CI/CD integration",
          "Documentation",
          "Team training"
        ]
      },
      {
        name: "QA Partnership",
        price: "$8,000/mo",
        description: "Ongoing QA services",
        features: [
          "Dedicated QA engineer",
          "Manual & automated testing",
          "Performance testing",
          "Continuous improvement",
          "Weekly reports"
        ],
        popular: true
      },
      {
        name: "Enterprise QA",
        price: "Custom",
        description: "Full QA outsourcing",
        features: [
          "Dedicated QA team",
          "Full test coverage",
          "All testing types",
          "24/7 availability",
          "Custom tools & processes",
          "QA consulting"
        ]
      }
    ],
    caseStudies: [
      {
        company: "TravelBook",
        industry: "Travel",
        challenge: "Frequent production bugs damaging brand reputation and causing booking errors.",
        solution: "Implemented comprehensive test automation with Cypress, performance testing, and CI integration.",
        results: [
          "Production bugs reduced by 85%",
          "Release confidence improved dramatically",
          "Test execution time reduced from days to hours",
          "Booking error rate dropped to near zero"
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
      "Monolith to microservices",
      "Containerization (Docker/K8s)",
      "Database modernization",
      "Technical debt reduction",
      "Code refactoring",
      "Framework upgrades",
      "API enablement",
      "Performance optimization"
    ],
    benefits: [
      "Improved system performance",
      "Reduced maintenance costs",
      "Faster feature delivery",
      "Better scalability",
      "Modern developer experience"
    ],
    technologies: ["Docker", "Kubernetes", "React", "Node.js", "PostgreSQL", "MongoDB", "Redis", "Microservices"],
    pricing: [
      {
        name: "Assessment",
        price: "$10,000",
        description: "Modernization roadmap",
        features: [
          "Code & architecture review",
          "Technical debt analysis",
          "Modernization options",
          "Risk assessment",
          "Prioritized roadmap"
        ]
      },
      {
        name: "Modernization",
        price: "$75,000",
        description: "System transformation",
        features: [
          "Architecture redesign",
          "Incremental migration",
          "Database modernization",
          "Testing & validation",
          "Documentation",
          "90 days support"
        ],
        popular: true
      },
      {
        name: "Enterprise Modernization",
        price: "Custom",
        description: "Large-scale transformation",
        features: [
          "Multi-system modernization",
          "Dedicated team",
          "Phased approach",
          "Change management",
          "Extended support",
          "Training included"
        ]
      }
    ],
    caseStudies: [
      {
        company: "Insurance Legacy Corp",
        industry: "Insurance",
        challenge: "30-year-old COBOL system impossible to maintain, modify, or find developers for.",
        solution: "Incrementally modernized to microservices with React frontend, preserving 20 years of business rules.",
        results: [
          "Development speed increased 5x",
          "Maintenance costs reduced by 60%",
          "New features now possible",
          "System reliability improved 3x"
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
    slug: "identity-access-management",
    name: "Identity & Access Management",
    shortDescription: "Secure authentication and authorization for your applications.",
    fullDescription: "Protect your applications and data with robust identity management. We implement enterprise-grade authentication, authorization, and access control solutions that secure your systems while providing seamless user experiences.",
    icon: Lock,
    category: "Quality & Security",
    features: [
      "SSO implementation",
      "Multi-factor authentication",
      "Role-based access control",
      "Identity governance",
      "Directory services",
      "Privileged access management",
      "Federation & SAML",
      "User lifecycle management"
    ],
    benefits: [
      "Enhanced security posture",
      "Simplified user experience",
      "Reduced password fatigue",
      "Compliance enablement",
      "Centralized access control"
    ],
    technologies: ["Okta", "Auth0", "Azure AD", "Ping Identity", "ForgeRock", "Keycloak", "LDAP", "SAML", "OAuth"],
    pricing: [
      {
        name: "SSO Implementation",
        price: "$15,000",
        description: "Single sign-on setup",
        features: [
          "SSO for up to 5 apps",
          "MFA implementation",
          "User directory setup",
          "Basic RBAC",
          "Documentation & training"
        ]
      },
      {
        name: "IAM Platform",
        price: "$50,000",
        description: "Complete IAM solution",
        features: [
          "Enterprise SSO",
          "Advanced MFA options",
          "Complete RBAC",
          "User provisioning",
          "Audit logging",
          "90 days support"
        ],
        popular: true
      },
      {
        name: "Enterprise IAM",
        price: "Custom",
        description: "Full identity program",
        features: [
          "Enterprise-wide IAM",
          "Identity governance",
          "Privileged access mgmt",
          "Custom integrations",
          "Managed services",
          "Strategic consulting"
        ]
      }
    ],
    caseStudies: [
      {
        company: "GlobalCorp",
        industry: "Conglomerate",
        challenge: "50+ applications with separate logins causing security risks and user frustration.",
        solution: "Implemented Okta-based SSO with MFA across all applications and automated user provisioning.",
        results: [
          "Single sign-on for all apps",
          "Password reset tickets reduced by 90%",
          "Security incidents reduced by 75%",
          "Onboarding time reduced from days to hours"
        ]
      }
    ],
    faqs: [
      {
        question: "Which IAM solution do you recommend?",
        answer: "It depends on your environment. Okta and Auth0 are excellent cloud-native options, Azure AD is ideal for Microsoft shops, and Keycloak is great for open-source preference. We assess your needs to recommend the best fit."
      },
      {
        question: "How long does SSO implementation take?",
        answer: "Basic SSO for a few applications can be done in 2-4 weeks. Enterprise-wide implementation with many applications typically takes 2-4 months, depending on complexity and integration requirements."
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
