import {
  Code2, Cloud, Server, RefreshCw, TestTube, Headphones, Settings, Database,
  Gauge, Network, GitBranch, Container,
  LucideIcon
} from "lucide-react";

export interface SolutionDetail {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  features: string[];
  benefits: string[];
  technologies: string[];
  caseStudies: { company: string; industry: string; challenge: string; solution: string; results: string[] }[];
  faqs: { question: string; answer: string }[];
}

export const solutionsData: SolutionDetail[] = [
  {
    slug: "custom-app-development",
    name: "Custom Software Development",
    shortDescription: "Tailored web, mobile, and enterprise applications built for your unique business needs.",
    fullDescription: "We design, build, and deploy custom software solutions that align with your business goals. From responsive web applications and cross-platform mobile apps to complex enterprise systems, our engineering teams deliver scalable, maintainable software using modern architectures and agile methodologies.",
    icon: Code2,
    features: [
      "Full-stack web application development",
      "Cross-platform mobile app development (React Native, Flutter)",
      "Enterprise application modernization",
      "API design and microservices architecture",
      "UI/UX design and prototyping",
      "Progressive Web Apps (PWA)",
      "Third-party integrations and middleware",
      "Legacy system re-engineering"
    ],
    benefits: [
      "Solutions tailored to your exact business requirements",
      "Faster time-to-market with agile sprints",
      "Scalable architecture that grows with your business",
      "Reduced operational costs through automation",
      "Improved user engagement and retention",
      "Full ownership of intellectual property"
    ],
    technologies: ["React", "Node.js", "TypeScript", "Python", "Java", "Spring Boot", ".NET", "Flutter", "React Native", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Azure"],
    caseStudies: [
      {
        company: "FinServe Global",
        industry: "Financial Services",
        challenge: "Legacy loan processing system causing 48-hour turnaround times and frequent errors.",
        solution: "Built a modern web application with automated workflows, real-time status tracking, and integrated compliance checks.",
        results: ["Processing time reduced to 4 hours", "98% reduction in manual errors", "30% increase in loan throughput", "Improved customer satisfaction scores"]
      },
      {
        company: "HealthBridge Systems",
        industry: "Healthcare",
        challenge: "Fragmented patient data across multiple systems with no unified view.",
        solution: "Developed a unified patient portal with real-time data aggregation, appointment scheduling, and secure messaging.",
        results: ["Single view of patient data", "40% reduction in administrative overhead", "HIPAA-compliant architecture", "50% faster patient onboarding"]
      }
    ],
    faqs: [
      { question: "What is the typical timeline for a custom software project?", answer: "Timelines vary based on complexity. A typical MVP takes 8-12 weeks, while full enterprise applications may take 4-8 months. We use agile sprints to deliver incremental value throughout." },
      { question: "Do you provide post-launch support?", answer: "Yes. We offer dedicated support and maintenance packages including bug fixes, feature enhancements, performance monitoring, and SLA-backed response times." },
      { question: "Can you work with our existing tech stack?", answer: "Absolutely. Our teams are proficient across a wide range of technologies and can integrate with your existing systems, APIs, and infrastructure." },
      { question: "How do you handle project management?", answer: "We follow agile methodologies with dedicated project managers, sprint planning, daily standups, and regular stakeholder demos to ensure transparency and alignment." }
    ]
  },
  {
    slug: "cloud-migration",
    name: "Cloud Migration & Deployment",
    shortDescription: "Seamless transition from legacy systems to modern, scalable cloud infrastructure.",
    fullDescription: "We help organizations migrate workloads to the cloud with minimal disruption. Our structured approach covers assessment, planning, migration execution, and post-migration optimization — ensuring your applications run efficiently on modern cloud platforms.",
    icon: Cloud,
    features: [
      "Cloud readiness assessment and strategy",
      "Lift-and-shift and re-platforming migrations",
      "Cloud-native application refactoring",
      "Multi-cloud and hybrid cloud architecture",
      "Database migration and optimization",
      "Disaster recovery and business continuity",
      "Cost optimization and FinOps",
      "Security and compliance configuration"
    ],
    benefits: [
      "Reduced infrastructure costs by up to 40%",
      "Improved application performance and scalability",
      "Enhanced security and compliance posture",
      "Faster deployment cycles",
      "Elimination of hardware management overhead",
      "Built-in high availability and disaster recovery"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "CloudFormation", "Kubernetes", "Docker", "Ansible", "Jenkins", "GitHub Actions", "Datadog", "CloudWatch"],
    caseStudies: [
      {
        company: "RetailMax Corp",
        industry: "Retail & E-commerce",
        challenge: "On-premise infrastructure unable to handle seasonal traffic spikes, causing frequent outages during peak sales.",
        solution: "Migrated entire e-commerce platform to AWS with auto-scaling, CDN, and managed databases. Implemented blue-green deployments.",
        results: ["99.99% uptime during Black Friday", "60% reduction in infrastructure costs", "3x faster page load times", "Zero downtime deployments"]
      }
    ],
    faqs: [
      { question: "How long does a typical cloud migration take?", answer: "It depends on the complexity and number of workloads. Simple migrations can take 4-8 weeks, while large enterprise migrations may span 3-6 months with phased rollouts." },
      { question: "Will there be downtime during migration?", answer: "We plan migrations to minimize or eliminate downtime using techniques like blue-green deployments, data replication, and staged cutover strategies." },
      { question: "Which cloud providers do you work with?", answer: "We are certified partners with AWS, Microsoft Azure, and Google Cloud Platform, and can also design multi-cloud or hybrid architectures." },
      { question: "How do you ensure data security during migration?", answer: "We use encrypted data transfers, VPN tunnels, and follow industry-standard security protocols. All migrations include security audits and compliance validation." }
    ]
  },
  {
    slug: "it-infrastructure",
    name: "IT Infrastructure Management",
    shortDescription: "End-to-end monitoring, management, and optimization of your technology infrastructure.",
    fullDescription: "Our IT infrastructure management services provide comprehensive monitoring, proactive maintenance, and strategic optimization of your entire technology ecosystem — from servers and networks to cloud resources and security systems.",
    icon: Server,
    features: [
      "24/7 infrastructure monitoring and alerting",
      "Server and network administration",
      "Capacity planning and performance optimization",
      "Patch management and security updates",
      "Backup and disaster recovery management",
      "Vendor management and procurement",
      "IT asset lifecycle management",
      "Compliance and audit support"
    ],
    benefits: [
      "99.9%+ uptime guarantee with proactive monitoring",
      "Reduced IT operational costs by 30-50%",
      "Faster incident resolution with dedicated NOC",
      "Predictable monthly costs with managed services",
      "Focus internal teams on strategic initiatives",
      "Improved security posture and compliance"
    ],
    technologies: ["VMware", "Hyper-V", "Cisco", "Palo Alto", "Fortinet", "Nagios", "Zabbix", "SolarWinds", "ServiceNow", "Jira", "Splunk", "ELK Stack"],
    caseStudies: [
      {
        company: "MedTech Solutions",
        industry: "Healthcare Technology",
        challenge: "Growing infrastructure complexity with frequent unplanned outages affecting patient-facing applications.",
        solution: "Implemented 24/7 NOC operations with proactive monitoring, automated remediation, and structured incident management.",
        results: ["99.95% uptime achieved", "70% reduction in incident volume", "Mean time to resolution reduced by 60%", "Annual savings of $500K"]
      }
    ],
    faqs: [
      { question: "Do you manage on-premise, cloud, or hybrid environments?", answer: "We manage all three. Our teams are equipped to handle on-premise data centers, cloud environments (AWS, Azure, GCP), and hybrid architectures seamlessly." },
      { question: "What SLAs do you offer?", answer: "We offer tiered SLAs based on criticality — from 99.9% to 99.99% uptime with defined response and resolution times for different severity levels." },
      { question: "Can you integrate with our existing ITSM tools?", answer: "Yes, we integrate with popular ITSM platforms like ServiceNow, Jira Service Management, and Zendesk for unified ticket management and reporting." }
    ]
  },
  {
    slug: "technology-modernization",
    name: "Technology Modernization",
    shortDescription: "Transform legacy systems into modern, maintainable, and high-performing platforms.",
    fullDescription: "We help organizations break free from legacy constraints by modernizing applications, databases, and architectures. Our approach balances business continuity with progressive transformation — delivering modern, cloud-ready systems without disrupting operations.",
    icon: RefreshCw,
    features: [
      "Legacy application assessment and roadmapping",
      "Monolith to microservices decomposition",
      "Database modernization and migration",
      "Frontend and UI modernization",
      "API-first architecture redesign",
      "Technical debt reduction",
      "Automated testing and CI/CD implementation",
      "Documentation and knowledge transfer"
    ],
    benefits: [
      "Reduced maintenance costs by up to 60%",
      "Faster feature delivery and time-to-market",
      "Improved system reliability and performance",
      "Better developer experience and talent retention",
      "Enhanced security with modern frameworks",
      "Future-proof architecture for growth"
    ],
    technologies: ["React", "Angular", "Spring Boot", "Node.js", ".NET Core", "Kubernetes", "Docker", "Kafka", "RabbitMQ", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
    caseStudies: [
      {
        company: "InsureFirst",
        industry: "Insurance",
        challenge: "20-year-old COBOL-based claims processing system with no vendor support and inability to add new features.",
        solution: "Phased modernization from COBOL to Java/Spring Boot microservices with React frontend, maintaining data integrity throughout.",
        results: ["Claims processing 5x faster", "70% reduction in maintenance costs", "New features deployed weekly", "Zero data loss during migration"]
      }
    ],
    faqs: [
      { question: "How do you minimize risk during modernization?", answer: "We use a strangler fig pattern — gradually replacing legacy components while keeping the system running. Each phase is thoroughly tested before cutover." },
      { question: "Can you modernize without a complete rewrite?", answer: "Absolutely. We often recommend incremental modernization — wrapping legacy systems with APIs, modernizing the UI layer, or extracting high-value modules as microservices." },
      { question: "What about data migration?", answer: "Data integrity is paramount. We implement comprehensive data migration strategies with validation checks, rollback procedures, and parallel-run periods." }
    ]
  },
  {
    slug: "qa-testing",
    name: "Quality Assurance & Test Automation",
    shortDescription: "Comprehensive QA strategies with automated testing pipelines for reliable releases.",
    fullDescription: "Our QA and test automation services ensure your software meets the highest quality standards. We build robust testing frameworks, implement CI/CD-integrated test pipelines, and provide end-to-end coverage across functional, performance, and security testing.",
    icon: TestTube,
    features: [
      "Test strategy and planning",
      "Automated functional testing (UI, API, integration)",
      "Performance and load testing",
      "Security testing and vulnerability assessments",
      "Mobile app testing (iOS, Android)",
      "Regression test suite development",
      "CI/CD pipeline integration",
      "Test environment management"
    ],
    benefits: [
      "80% faster regression testing with automation",
      "Earlier defect detection reducing fix costs",
      "Consistent quality across releases",
      "Faster release cycles with confidence",
      "Comprehensive test coverage and reporting",
      "Reduced production incidents"
    ],
    technologies: ["Selenium", "Cypress", "Playwright", "JMeter", "Gatling", "Appium", "Postman", "SonarQube", "Jenkins", "GitHub Actions", "TestRail", "Allure", "K6"],
    caseStudies: [
      {
        company: "TravelEase",
        industry: "Travel & Hospitality",
        challenge: "Manual testing cycles taking 3 weeks per release, causing delayed feature launches and frequent production bugs.",
        solution: "Built a comprehensive test automation framework with 85% coverage, integrated into CI/CD pipeline with parallel execution.",
        results: ["Testing cycle reduced to 2 days", "90% reduction in production bugs", "Release frequency increased 4x", "Annual savings of $300K in QA costs"]
      }
    ],
    faqs: [
      { question: "What testing tools do you use?", answer: "We select tools based on your tech stack. Common choices include Selenium, Cypress, and Playwright for UI testing; JMeter and K6 for performance; and Postman for API testing." },
      { question: "How do you integrate testing with CI/CD?", answer: "We configure automated test suites to run as pipeline gates — unit tests on every commit, integration tests on PRs, and full regression suites before releases." },
      { question: "Can you work with our existing test framework?", answer: "Yes. We can enhance and scale your existing framework or help migrate to a more modern, maintainable solution based on your needs." }
    ]
  },
  {
    slug: "production-support",
    name: "Production Support & Monitoring",
    shortDescription: "24/7 application monitoring, incident management, and performance optimization.",
    fullDescription: "Our production support services provide round-the-clock monitoring, rapid incident response, and continuous optimization of your applications and infrastructure. We ensure your business-critical systems stay performant, available, and secure.",
    icon: Headphones,
    features: [
      "24/7/365 application monitoring",
      "L1, L2, L3 support tiers",
      "Incident management and escalation",
      "Root cause analysis (RCA)",
      "Performance tuning and optimization",
      "Release and change management",
      "Runbook automation",
      "Monthly health reports and SLA tracking"
    ],
    benefits: [
      "Guaranteed SLA response and resolution times",
      "Reduced mean time to resolution (MTTR)",
      "Proactive issue detection before user impact",
      "Lower total cost of ownership",
      "Knowledge base and documentation",
      "Seamless handoff and onboarding"
    ],
    technologies: ["PagerDuty", "Datadog", "New Relic", "Splunk", "Grafana", "Prometheus", "ELK Stack", "ServiceNow", "Jira", "Opsgenie", "Slack", "Teams"],
    caseStudies: [
      {
        company: "PayStream Inc",
        industry: "Financial Technology",
        challenge: "Critical payment processing platform experiencing frequent outages with slow incident response from existing support team.",
        solution: "Deployed dedicated 24/7 support team with automated monitoring, alerting, and structured incident management processes.",
        results: ["MTTR reduced from 4 hours to 30 minutes", "99.99% platform availability", "Zero critical incidents in 6 months", "40% reduction in support costs"]
      }
    ],
    faqs: [
      { question: "What support coverage models do you offer?", answer: "We offer flexible models — 24/7, business hours, or follow-the-sun coverage. Support tiers (L1-L3) can be customized based on your needs." },
      { question: "How quickly can you onboard our applications?", answer: "Typical onboarding takes 2-4 weeks, including documentation review, knowledge transfer, runbook creation, and monitoring setup." },
      { question: "Do you provide root cause analysis?", answer: "Yes, every P1/P2 incident includes a detailed RCA with corrective and preventive actions. We also track recurring issues to drive systematic improvements." }
    ]
  },
  {
    slug: "devops-sre",
    name: "DevOps & Site Reliability Engineering",
    shortDescription: "CI/CD pipelines, infrastructure as code, Kubernetes, and observability at scale.",
    fullDescription: "We help engineering teams adopt DevOps practices and SRE principles to deliver software faster, more reliably, and at scale. From CI/CD pipeline design to Kubernetes orchestration and full-stack observability, we build the foundation for engineering excellence.",
    icon: Settings,
    features: [
      "CI/CD pipeline design and implementation",
      "Infrastructure as Code (IaC) with Terraform/Pulumi",
      "Kubernetes cluster setup and management",
      "Container orchestration and service mesh",
      "Observability stack (metrics, logs, traces)",
      "SLO/SLI definition and error budgets",
      "Chaos engineering and resilience testing",
      "GitOps workflows and release automation"
    ],
    benefits: [
      "10x faster deployment frequency",
      "Reduced change failure rate below 5%",
      "Sub-hour lead time for changes",
      "Automated infrastructure provisioning",
      "Full visibility into system health",
      "Culture of shared ownership and reliability"
    ],
    technologies: ["Kubernetes", "Docker", "Terraform", "Pulumi", "Helm", "ArgoCD", "Jenkins", "GitHub Actions", "GitLab CI", "Prometheus", "Grafana", "Jaeger", "Istio", "Ansible"],
    caseStudies: [
      {
        company: "StreamMedia",
        industry: "Media & Entertainment",
        challenge: "Manual deployments taking days, frequent rollback failures, and no visibility into production system health.",
        solution: "Implemented GitOps-based CI/CD with ArgoCD, Kubernetes clusters with auto-scaling, and full observability with Prometheus/Grafana.",
        results: ["Deployments reduced from days to minutes", "Zero-downtime releases", "95% reduction in rollback time", "Complete system observability"]
      }
    ],
    faqs: [
      { question: "Do you follow any specific DevOps framework?", answer: "We draw from DORA metrics, Google SRE principles, and the DevOps Research and Assessment (DORA) framework to measure and improve engineering performance." },
      { question: "Can you work with our existing CI/CD tools?", answer: "Yes. We integrate with Jenkins, GitHub Actions, GitLab CI, CircleCI, Azure DevOps, and other popular platforms." },
      { question: "What is SRE and how does it differ from DevOps?", answer: "SRE (Site Reliability Engineering) is an implementation of DevOps principles with a focus on reliability. It introduces concepts like SLOs, error budgets, and toil reduction to balance feature velocity with system stability." }
    ]
  },
  {
    slug: "data-analytics",
    name: "Data Engineering & Analytics",
    shortDescription: "Data pipelines, warehousing, BI dashboards, streaming, and governance solutions.",
    fullDescription: "We build end-to-end data solutions that turn raw data into actionable insights. From designing scalable data pipelines and warehouses to building real-time analytics dashboards, we help organizations become truly data-driven.",
    icon: Database,
    features: [
      "Data pipeline design and orchestration",
      "Data warehouse and lake architecture",
      "ETL/ELT implementation",
      "Real-time data streaming",
      "Business intelligence dashboards",
      "Data quality and governance",
      "Machine learning data preparation",
      "Data catalog and lineage tracking"
    ],
    benefits: [
      "Unified view of business data",
      "Real-time insights for faster decision-making",
      "Reduced data processing costs by up to 50%",
      "Improved data quality and trustworthiness",
      "Self-service analytics for business users",
      "Compliance with data regulations"
    ],
    technologies: ["Apache Spark", "Airflow", "Kafka", "dbt", "Snowflake", "BigQuery", "Redshift", "Databricks", "Tableau", "Power BI", "Looker", "Python", "SQL", "Fivetran"],
    caseStudies: [
      {
        company: "LogiChain Solutions",
        industry: "Supply Chain & Logistics",
        challenge: "Data scattered across 15+ systems with no unified reporting, causing delayed and inaccurate business decisions.",
        solution: "Built a modern data platform with Snowflake, dbt for transformations, Airflow for orchestration, and Tableau for executive dashboards.",
        results: ["Single source of truth for all business data", "Reporting time reduced from days to minutes", "20% improvement in supply chain efficiency", "$2M annual savings from data-driven decisions"]
      }
    ],
    faqs: [
      { question: "What data platforms do you work with?", answer: "We work with Snowflake, BigQuery, Redshift, Databricks, and traditional databases. We help you choose the right platform based on your workload, budget, and existing ecosystem." },
      { question: "Can you build real-time analytics?", answer: "Yes. We implement streaming architectures using Kafka, Spark Streaming, or Flink for real-time data processing and dashboard updates." },
      { question: "How do you handle data governance?", answer: "We implement data catalogs, lineage tracking, access controls, and quality monitoring to ensure your data is trustworthy, compliant, and well-documented." }
    ]
  },
  {
    slug: "data-management",
    name: "Data Management",
    shortDescription: "Comprehensive data management solutions including master data management, data integration, and data quality.",
    fullDescription: "Our Data Management solutions help organizations take control of their data assets. We implement master data management (MDM), data integration platforms, data quality frameworks, and metadata management systems that ensure your data is accurate, consistent, accessible, and secure across the enterprise.",
    icon: Database,
    features: [
      "Master Data Management (MDM) implementation",
      "Data integration and ETL/ELT pipelines",
      "Data quality monitoring and cleansing",
      "Metadata management and data cataloging",
      "Data lifecycle management",
      "Database administration and optimization",
      "Data migration and consolidation",
      "Data security and compliance frameworks"
    ],
    benefits: [
      "Single source of truth across the enterprise",
      "Improved data accuracy and consistency",
      "Faster data-driven decision making",
      "Reduced data silos and redundancy",
      "Regulatory compliance readiness",
      "Lower storage and management costs"
    ],
    technologies: ["Informatica", "Talend", "Apache NiFi", "Collibra", "Alation", "SQL Server", "PostgreSQL", "Oracle", "MongoDB", "Snowflake", "Databricks"],
    caseStudies: [
      {
        company: "National Insurance Group",
        industry: "Insurance",
        challenge: "Fragmented customer data across 12 legacy systems causing policy errors and compliance risks.",
        solution: "Implemented an MDM platform with automated data quality rules and a unified customer data hub.",
        results: [
          "95% improvement in data accuracy",
          "60% reduction in policy processing errors",
          "Full regulatory compliance achieved",
          "$2M annual savings from decommissioned redundant systems"
        ]
      }
    ],
    faqs: [
      { question: "What is Master Data Management?", answer: "MDM is a discipline that ensures an organization has a single, consistent, and accurate view of its critical business data — such as customers, products, and locations — across all systems." },
      { question: "How long does a data management implementation take?", answer: "Depending on scope, initial implementations typically take 3–6 months, with ongoing optimization. We use phased approaches to deliver value incrementally." },
      { question: "Can you work with our existing databases?", answer: "Absolutely. We integrate with all major database platforms including SQL Server, Oracle, PostgreSQL, MongoDB, and cloud-native databases like Snowflake and BigQuery." }
    ]
  }
];

export const getSolutionBySlug = (slug: string): SolutionDetail | undefined => {
  return solutionsData.find(s => s.slug === slug);
};
