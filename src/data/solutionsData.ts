import {
  Code2, Cloud, Server, RefreshCw, TestTube, Headphones, Settings, Database,
  Gauge, Network, GitBranch, Container, Zap, Shield, Wrench, ClipboardList,
  BarChart3, Brain, Smartphone, Plug, Lock, ShieldCheck, FileCode, CloudCog, KeyRound,
  ShieldAlert, Scale, PackageSearch, HardDriveDownload, Layers, Activity, DollarSign, CloudLightning, Cog, Accessibility, Blocks, Palette, Bot, Workflow, FlaskConical, Building2, Users, Cable, RotateCcw, TabletSmartphone, Truck, FileStack, BookCheck, Warehouse, ArrowRightLeft, ShoppingCart, FileText, HardDrive, LucideIcon
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
  },
  {
    slug: "cloud-optimization",
    name: "Cloud Cost Optimization",
    shortDescription: "Maximize cloud ROI with cost analysis, rightsizing, and FinOps best practices.",
    fullDescription: "Our Cloud Cost Optimization services help organizations reduce cloud spend while maintaining performance. We analyze your cloud footprint, identify waste, implement rightsizing strategies, and establish FinOps practices for ongoing cost governance across AWS, Azure, and GCP.",
    icon: Gauge,
    features: [
      "Cloud spend analysis and cost attribution",
      "Resource rightsizing and auto-scaling optimization",
      "Reserved instance and savings plan management",
      "FinOps framework implementation",
      "Multi-cloud cost governance dashboards",
      "Idle resource detection and cleanup"
    ],
    benefits: [
      "30–50% reduction in cloud costs",
      "Full visibility into cloud spending",
      "Optimized resource utilization",
      "Predictable budgeting with FinOps practices",
      "Automated cost anomaly detection"
    ],
    technologies: ["AWS Cost Explorer", "Azure Cost Management", "GCP Billing", "CloudHealth", "Spot.io", "Kubecost", "Terraform", "Infracost"],
    caseStudies: [
      {
        company: "Digital Media Corp",
        industry: "Media & Entertainment",
        challenge: "Cloud costs growing 40% year-over-year with limited visibility into spend drivers.",
        solution: "Implemented FinOps practices, rightsized instances, and automated scheduling for non-production environments.",
        results: ["42% reduction in monthly cloud spend", "Real-time cost dashboards for engineering teams", "Automated savings of $15K/month from idle resources"]
      }
    ],
    faqs: [
      { question: "How quickly can we see cost savings?", answer: "Quick wins like idle resource cleanup and rightsizing typically deliver 15–25% savings within the first month. Long-term optimization through reserved instances and architectural changes follow." },
      { question: "Do you support multi-cloud environments?", answer: "Yes, we optimize across AWS, Azure, and GCP with unified dashboards and governance policies." }
    ]
  },
  {
    slug: "hybrid-multi-cloud",
    name: "Hybrid & Multi-Cloud Solutions",
    shortDescription: "Unified management of hybrid and multi-cloud environments for flexibility and resilience.",
    fullDescription: "We design and implement hybrid and multi-cloud architectures that give you the flexibility to run workloads wherever they perform best. Our solutions ensure seamless connectivity, consistent security, and unified management across on-premises, private cloud, and public cloud environments.",
    icon: Network,
    features: [
      "Hybrid cloud architecture design",
      "Multi-cloud workload orchestration",
      "Cross-cloud networking and connectivity",
      "Unified identity and access management",
      "Disaster recovery across cloud providers",
      "Cloud-agnostic container orchestration"
    ],
    benefits: [
      "Avoid vendor lock-in",
      "Optimized workload placement",
      "Enhanced disaster recovery and resilience",
      "Consistent security posture across clouds",
      "Flexibility to leverage best-of-breed services"
    ],
    technologies: ["Kubernetes", "Anthos", "Azure Arc", "AWS Outposts", "Terraform", "Consul", "Istio", "HashiCorp Vault"],
    caseStudies: [
      {
        company: "Global Trading Firm",
        industry: "Financial Services",
        challenge: "Needed low-latency workloads on-premises with burst capacity to cloud during peak trading hours.",
        solution: "Designed a hybrid architecture with Kubernetes-based workload portability and automated burst-to-cloud during peak periods.",
        results: ["99.99% uptime achieved", "60% cost reduction during off-peak periods", "Sub-millisecond latency for critical workloads"]
      }
    ],
    faqs: [
      { question: "Is hybrid cloud more expensive than single cloud?", answer: "Not necessarily. Hybrid cloud lets you place workloads where they're most cost-effective, often reducing overall spend while improving performance." },
      { question: "How do you handle security across multiple clouds?", answer: "We implement unified IAM, network segmentation, and centralized security monitoring across all environments using tools like HashiCorp Vault and cloud-native security services." }
    ]
  },
  {
    slug: "ci-cd-automation",
    name: "CI/CD Automation",
    shortDescription: "Automated build, test, and deployment pipelines for faster, reliable software delivery.",
    fullDescription: "Our CI/CD Automation services streamline your software delivery lifecycle from code commit to production deployment. We design and implement automated pipelines that build, test, and deploy your applications with speed, consistency, and reliability — reducing manual effort and accelerating time to market.",
    icon: GitBranch,
    features: [
      "Automated build and deployment pipelines",
      "Automated testing integration (unit, integration, E2E)",
      "Blue-green and canary deployment strategies",
      "GitOps-based workflow implementation",
      "Artifact management and versioning",
      "Pipeline security scanning (SAST/DAST)"
    ],
    benefits: [
      "10x faster release cycles",
      "Reduced deployment failures and rollbacks",
      "Consistent, repeatable deployments",
      "Early bug detection through automated testing",
      "Improved developer productivity"
    ],
    technologies: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps", "ArgoCD", "Tekton", "SonarQube", "Artifactory", "Docker", "Helm"],
    caseStudies: [
      {
        company: "FinTech Startup",
        industry: "Financial Services",
        challenge: "Manual deployments taking 4+ hours with frequent rollbacks and production incidents.",
        solution: "Built fully automated CI/CD pipelines with GitOps, canary deployments, and integrated security scanning.",
        results: ["Deployments reduced from 4 hours to 12 minutes", "Zero-downtime releases achieved", "90% reduction in production incidents", "50+ deployments per week"]
      }
    ],
    faqs: [
      { question: "Can you work with our existing CI/CD tools?", answer: "Yes, we integrate with all major CI/CD platforms including Jenkins, GitHub Actions, GitLab CI, and Azure DevOps. We can also help you migrate to a more modern toolchain." },
      { question: "How do you handle database migrations in CI/CD?", answer: "We implement automated database migration strategies using tools like Flyway or Liquibase, integrated into the pipeline with rollback capabilities." }
    ]
  },
  {
    slug: "infrastructure-as-code",
    name: "Infrastructure as Code",
    shortDescription: "Manage and provision infrastructure through code for consistency, speed, and auditability.",
    fullDescription: "We help organizations adopt Infrastructure as Code (IaC) practices to manage cloud and on-premises infrastructure through version-controlled, repeatable code. This eliminates manual configuration drift, enables rapid environment provisioning, and provides a complete audit trail of infrastructure changes.",
    icon: Container,
    features: [
      "Terraform and Pulumi implementation",
      "Cloud infrastructure templating",
      "Configuration management (Ansible, Chef)",
      "Environment provisioning automation",
      "Drift detection and remediation",
      "IaC testing and validation frameworks"
    ],
    benefits: [
      "Eliminate configuration drift",
      "Provision environments in minutes, not days",
      "Full audit trail of infrastructure changes",
      "Consistent environments across dev, staging, and production",
      "Reduced operational overhead"
    ],
    technologies: ["Terraform", "Pulumi", "AWS CloudFormation", "Azure Bicep", "Ansible", "Crossplane", "Terragrunt", "Checkov", "tfsec"],
    caseStudies: [
      {
        company: "Healthcare SaaS Provider",
        industry: "Healthcare",
        challenge: "Manual infrastructure provisioning taking weeks, with configuration inconsistencies across environments causing production bugs.",
        solution: "Implemented Terraform modules with automated testing, GitOps workflows, and drift detection across 200+ cloud resources.",
        results: ["Environment provisioning reduced from 2 weeks to 30 minutes", "Zero configuration drift incidents", "100% infrastructure audit compliance", "40% reduction in infrastructure team workload"]
      }
    ],
    faqs: [
      { question: "Which IaC tool should we use?", answer: "It depends on your stack. Terraform is ideal for multi-cloud, Pulumi if your team prefers general-purpose languages, and CloudFormation/Bicep for single-cloud AWS/Azure shops. We help you choose and implement the right tool." },
      { question: "Can IaC work with existing manually created infrastructure?", answer: "Yes, we can import existing resources into Terraform state and gradually bring your infrastructure under code management without disruption." }
    ]
  },
  {
    slug: "performance-testing",
    name: "Performance & Load Testing",
    shortDescription: "Ensure your applications perform flawlessly under any load with comprehensive performance engineering.",
    fullDescription: "Our performance testing services identify bottlenecks, validate scalability, and ensure your applications deliver exceptional user experiences under peak traffic. We combine automated load testing with deep performance analysis to optimize response times, throughput, and resource utilization.",
    icon: Zap,
    features: [
      "Load, stress, and endurance testing",
      "Scalability and capacity planning",
      "Application performance monitoring (APM)",
      "Database query optimization",
      "Front-end performance auditing",
      "API response time benchmarking",
      "Cloud auto-scaling validation",
      "Performance regression testing in CI/CD"
    ],
    benefits: [
      "Identify bottlenecks before they impact users",
      "Confidently handle traffic spikes and growth",
      "Optimize infrastructure costs with right-sizing",
      "Improve user satisfaction with faster load times",
      "Data-driven capacity planning decisions",
      "Reduced downtime from performance failures"
    ],
    technologies: ["JMeter", "Gatling", "K6", "Locust", "BlazeMeter", "Datadog APM", "New Relic", "Lighthouse", "WebPageTest", "Grafana", "InfluxDB"],
    caseStudies: [
      {
        company: "ShopStream",
        industry: "E-Commerce",
        challenge: "Platform crashes during seasonal sales events, losing millions in revenue due to inability to handle 10x normal traffic.",
        solution: "Implemented comprehensive performance testing suite simulating peak loads, identified critical database and caching bottlenecks, and established auto-scaling strategies.",
        results: ["Handled 15x normal traffic during Black Friday", "Page load time reduced from 4.2s to 1.1s", "Zero downtime during peak sales", "$2.5M additional revenue captured"]
      }
    ],
    faqs: [
      { question: "When should we start performance testing?", answer: "Ideally, performance testing begins early in development with component-level benchmarks. Full load testing should happen before every major release and capacity changes." },
      { question: "How do you simulate realistic load?", answer: "We analyze production traffic patterns, user journeys, and data volumes to create realistic test scenarios that mirror actual usage, including geographic distribution and device mix." },
      { question: "Can you test cloud auto-scaling?", answer: "Yes, we validate that auto-scaling policies trigger correctly, scale fast enough, and handle scale-down gracefully — ensuring cost efficiency and availability." }
    ]
  },
  {
    slug: "security-testing",
    name: "Security Testing & Compliance",
    shortDescription: "Protect your applications with thorough security assessments, penetration testing, and compliance validation.",
    fullDescription: "Our security testing services help organizations identify vulnerabilities, validate security controls, and achieve compliance with industry standards. We combine automated scanning with manual penetration testing to provide comprehensive coverage across your application stack.",
    icon: Shield,
    features: [
      "Penetration testing (web, mobile, API)",
      "OWASP Top 10 vulnerability assessment",
      "Static and dynamic application security testing (SAST/DAST)",
      "Compliance validation (SOC 2, HIPAA, PCI DSS, GDPR)",
      "Security code review",
      "Cloud security posture assessment",
      "Third-party dependency scanning",
      "Security awareness training"
    ],
    benefits: [
      "Identify and remediate vulnerabilities proactively",
      "Achieve and maintain regulatory compliance",
      "Protect customer data and brand reputation",
      "Reduce risk of costly data breaches",
      "Security-first development culture",
      "Comprehensive audit-ready documentation"
    ],
    technologies: ["Burp Suite", "OWASP ZAP", "SonarQube", "Snyk", "Veracode", "Checkmarx", "Nessus", "Qualys", "AWS Security Hub", "Trivy", "Dependabot"],
    caseStudies: [
      {
        company: "MedSecure Health",
        industry: "Healthcare",
        challenge: "Needed to achieve HIPAA compliance for a new patient portal while addressing multiple security vulnerabilities found in a previous audit.",
        solution: "Conducted comprehensive penetration testing, implemented SAST/DAST in CI/CD pipeline, remediated all critical findings, and established ongoing security monitoring.",
        results: ["100% of critical vulnerabilities remediated", "HIPAA compliance achieved in 8 weeks", "Passed external audit with zero findings", "50% reduction in security incidents year-over-year"]
      }
    ],
    faqs: [
      { question: "How often should we conduct penetration testing?", answer: "We recommend at least annually, plus after significant application changes. Continuous automated scanning should complement periodic manual testing." },
      { question: "What compliance frameworks do you support?", answer: "We support SOC 2, HIPAA, PCI DSS, GDPR, ISO 27001, and FedRAMP. Our team tailors assessments to your specific regulatory requirements." },
      { question: "Do you provide remediation support?", answer: "Yes, we don't just find vulnerabilities — we help your team fix them with detailed remediation guidance, code-level recommendations, and verification retesting." }
    ]
  },
  {
    slug: "managed-services",
    name: "Managed IT Services",
    shortDescription: "End-to-end management of your IT infrastructure, applications, and cloud environments.",
    fullDescription: "Our managed services provide comprehensive, ongoing management of your technology landscape. From infrastructure and cloud to applications and databases, we take ownership of day-to-day operations so your team can focus on innovation and business growth.",
    icon: Wrench,
    features: [
      "Infrastructure management (on-prem & cloud)",
      "Application management and support",
      "Database administration (DBA as a Service)",
      "Patch management and updates",
      "Backup and disaster recovery",
      "Capacity planning and optimization",
      "Vendor management and coordination",
      "Monthly reporting and strategic reviews"
    ],
    benefits: [
      "Predictable monthly IT costs",
      "Access to certified expert teams",
      "Reduced operational burden on internal staff",
      "Improved system reliability and uptime",
      "Scalable resources on demand",
      "Strategic IT guidance and roadmap planning"
    ],
    technologies: ["AWS", "Azure", "GCP", "VMware", "Oracle", "SQL Server", "PostgreSQL", "MongoDB", "Ansible", "Terraform", "ServiceNow", "Zabbix"],
    caseStudies: [
      {
        company: "Midwest Manufacturing Co.",
        industry: "Manufacturing",
        challenge: "Small IT team overwhelmed by maintaining 200+ servers, multiple databases, and legacy ERP systems while trying to drive digital transformation.",
        solution: "Transitioned infrastructure and database management to our managed services team, freeing internal staff to focus on strategic initiatives.",
        results: ["35% reduction in IT operational costs", "99.95% system uptime achieved", "Internal team refocused on digital initiatives", "Successful ERP modernization completed on schedule"]
      }
    ],
    faqs: [
      { question: "What's included in managed services?", answer: "Our managed services cover monitoring, maintenance, patching, performance tuning, incident response, backup management, and strategic reviews — customized to your environment." },
      { question: "Can you manage hybrid environments?", answer: "Yes, we manage complex hybrid environments spanning on-premises data centers, private clouds, and multiple public cloud providers as a unified service." },
      { question: "How do you handle knowledge transfer?", answer: "We maintain comprehensive documentation, runbooks, and architecture diagrams. All knowledge is shared transparently, ensuring no vendor lock-in." }
    ]
  },
  {
    slug: "it-service-management",
    name: "IT Service Management (ITSM)",
    shortDescription: "Streamline IT operations with ITIL-aligned service management processes and automation.",
    fullDescription: "Our ITSM solutions help organizations establish structured, efficient IT service delivery. We implement ITIL best practices, deploy service management platforms, and automate workflows to improve service quality, reduce costs, and enhance user satisfaction.",
    icon: ClipboardList,
    features: [
      "ITIL process design and implementation",
      "Service desk setup and optimization",
      "Incident, problem, and change management",
      "Service catalog and request fulfillment",
      "Configuration management (CMDB)",
      "Knowledge management systems",
      "SLA management and reporting",
      "Workflow automation and self-service portals"
    ],
    benefits: [
      "Standardized and repeatable IT processes",
      "Faster incident resolution and fewer escalations",
      "Improved user satisfaction scores",
      "Better visibility into IT operations",
      "Reduced manual effort through automation",
      "Data-driven continuous improvement"
    ],
    technologies: ["ServiceNow", "Jira Service Management", "Freshservice", "BMC Helix", "PagerDuty", "Confluence", "Power Automate", "Zapier", "Slack", "Teams"],
    caseStudies: [
      {
        company: "National Credit Union",
        industry: "Financial Services",
        challenge: "Inconsistent IT service delivery across 50 branches with no centralized ticketing, leading to poor user satisfaction and untracked SLAs.",
        solution: "Implemented ServiceNow-based ITSM platform with automated workflows, self-service portal, and comprehensive reporting across all branches.",
        results: ["User satisfaction improved from 62% to 91%", "First-call resolution increased to 78%", "Mean time to resolve reduced by 45%", "Full SLA visibility across all branches"]
      }
    ],
    faqs: [
      { question: "Do we need to adopt all ITIL processes at once?", answer: "No, we recommend a phased approach starting with incident and request management, then expanding to problem, change, and other processes as maturity grows." },
      { question: "Which ITSM platform do you recommend?", answer: "It depends on your scale and needs. ServiceNow is ideal for large enterprises, Jira Service Management for agile teams, and Freshservice for mid-market organizations." },
      { question: "Can you integrate ITSM with our existing tools?", answer: "Absolutely. We integrate ITSM platforms with monitoring tools, CI/CD pipelines, cloud providers, and communication platforms for seamless operations." }
    ]
  },
  {
    slug: "it-asset-management",
    name: "IT Asset Management",
    shortDescription: "Gain full visibility into hardware, software, and cloud assets with lifecycle tracking, license optimization, and compliance reporting.",
    fullDescription: "Our IT Asset Management services provide end-to-end visibility and control over your technology investments. From procurement to retirement, we help you track hardware, software, and cloud assets, optimize license spend, ensure compliance, and make data-driven decisions about your IT estate.",
    icon: PackageSearch,
    features: [
      "Hardware asset discovery and inventory",
      "Software license management and optimization",
      "Cloud asset tracking and cost management",
      "Asset lifecycle management (procure to retire)",
      "License compliance and audit readiness",
      "Vendor contract management",
      "Automated asset provisioning and deprovisioning",
      "CMDB integration and data enrichment"
    ],
    benefits: [
      "Eliminate wasted spend on unused licenses",
      "Full visibility into IT asset estate",
      "Audit-ready compliance reporting",
      "Reduced risk of shadow IT",
      "Optimized hardware refresh cycles",
      "Data-driven procurement decisions"
    ],
    technologies: ["ServiceNow ITAM", "Flexera", "Snow Software", "Lansweeper", "Oomnitza", "Microsoft Intune", "Jamf", "AWS Cost Explorer", "Azure Cost Management", "Cloudability"],
    caseStudies: [
      {
        company: "Continental Logistics",
        industry: "Logistics & Transportation",
        challenge: "A logistics company with 5,000+ endpoints had no centralized asset tracking, leading to over-provisioned software licenses and surprise audit penalties.",
        solution: "Deployed ServiceNow ITAM with automated discovery, integrated Flexera for license optimization, and established lifecycle workflows from procurement to disposal.",
        results: ["$1.2M annual savings from license reclamation", "100% asset visibility across all locations", "Software audit penalties eliminated", "Hardware refresh cycle optimized, extending useful life by 18 months"]
      }
    ],
    faqs: [
      { question: "How do you discover assets across our environment?", answer: "We use agentless and agent-based discovery tools that scan your network, cloud environments, and endpoints to build a comprehensive inventory — including shadow IT and unauthorized software." },
      { question: "Can you help with software audit defense?", answer: "Yes. We establish effective license positions (ELPs) for major vendors like Microsoft, Oracle, and Adobe, ensuring you're audit-ready with documented proof of compliance." },
      { question: "How does ITAM integrate with our existing ITSM?", answer: "ITAM and ITSM work best together. We integrate asset data with your service desk so technicians see asset details on tickets, and changes are automatically reflected in the CMDB." }
    ]
  },
  {
    slug: "disaster-recovery",
    name: "Disaster Recovery & Business Continuity",
    shortDescription: "Protect your operations with comprehensive disaster recovery planning, automated failover, and business continuity strategies.",
    fullDescription: "Our Disaster Recovery and Business Continuity services ensure your organization can withstand and rapidly recover from any disruption — whether cyberattack, natural disaster, or infrastructure failure. We design, implement, and test comprehensive DR strategies that minimize downtime and data loss.",
    icon: HardDriveDownload,
    features: [
      "Business impact analysis (BIA)",
      "Disaster recovery plan design and documentation",
      "Automated failover and failback solutions",
      "Cloud-based disaster recovery (DRaaS)",
      "Backup strategy design and implementation",
      "Recovery time objective (RTO) optimization",
      "Recovery point objective (RPO) minimization",
      "DR testing and simulation exercises",
      "Ransomware recovery planning",
      "Multi-region redundancy architecture"
    ],
    benefits: [
      "Minimize business downtime during disruptions",
      "Protect against data loss with tested backup strategies",
      "Meet regulatory requirements for business continuity",
      "Reduce recovery costs with automated failover",
      "Confidence through regular DR testing",
      "Ransomware resilience with immutable backups"
    ],
    technologies: ["AWS Elastic Disaster Recovery", "Azure Site Recovery", "Veeam", "Zerto", "Commvault", "Druva", "Rubrik", "VMware SRM", "Cloudflare", "HashiCorp Terraform"],
    caseStudies: [
      {
        company: "MediCare Systems",
        industry: "Healthcare",
        challenge: "A healthcare provider had no formal DR plan and experienced a ransomware attack that caused 72 hours of downtime, impacting patient care and costing over $2M in losses.",
        solution: "Designed a multi-region DR architecture on AWS with automated failover, implemented Veeam with immutable backups, and established quarterly DR testing with documented runbooks.",
        results: ["RTO reduced from 72 hours to 45 minutes", "RPO improved from 24 hours to 15 minutes", "Zero data loss in subsequent DR tests", "Full compliance with HIPAA business continuity requirements"]
      }
    ],
    faqs: [
      { question: "What's the difference between DR and business continuity?", answer: "Disaster recovery focuses on restoring IT systems and data after a disruption. Business continuity is broader — it encompasses maintaining all critical business functions, including people, processes, and communications, during and after a crisis." },
      { question: "How often should we test our DR plan?", answer: "We recommend full DR failover tests at least twice a year, with tabletop exercises quarterly. Critical systems may warrant monthly automated failover testing to ensure readiness." },
      { question: "Is cloud-based DR cost-effective for small businesses?", answer: "Yes — DRaaS eliminates the need for a secondary data center. You pay only for standby resources that scale up during failover, making enterprise-grade DR accessible at a fraction of traditional costs." }
    ]
  },
  {
    slug: "business-intelligence",
    name: "Business Intelligence & Reporting",
    shortDescription: "Transform raw data into actionable insights with interactive dashboards, reports, and self-service analytics.",
    fullDescription: "Our Business Intelligence services empower organizations to make data-driven decisions through intuitive dashboards, automated reporting, and self-service analytics platforms. We design and implement end-to-end BI solutions that connect disparate data sources, establish single sources of truth, and deliver real-time insights to every stakeholder.",
    icon: BarChart3,
    features: [
      "Interactive dashboard design and development",
      "Self-service analytics platforms",
      "Automated report generation and distribution",
      "Data warehouse design and optimization",
      "KPI framework and metrics definition",
      "Real-time and streaming analytics",
      "Embedded analytics for SaaS products",
      "Data storytelling and visualization best practices"
    ],
    benefits: [
      "Faster, data-driven decision making across the organization",
      "Single source of truth for all business metrics",
      "Reduced dependency on IT for ad-hoc reports",
      "Real-time visibility into business performance",
      "Improved forecasting accuracy",
      "Democratized data access for all teams"
    ],
    technologies: ["Power BI", "Tableau", "Looker", "Apache Superset", "Snowflake", "BigQuery", "Redshift", "dbt", "Metabase", "Sisense", "Fivetran", "Airbyte"],
    caseStudies: [
      {
        company: "RetailMax Group",
        industry: "Retail",
        challenge: "Executives relied on weekly static spreadsheets for decision-making, with no real-time visibility into sales performance, inventory, or customer behavior across 150 stores.",
        solution: "Built a cloud data warehouse consolidating POS, inventory, and CRM data, with role-based Power BI dashboards delivering real-time insights to store managers and C-suite.",
        results: ["Decision cycle reduced from 7 days to real-time", "15% improvement in inventory turnover", "$4M annual savings from optimized stock management", "Self-service adoption by 90% of managers"]
      }
    ],
    faqs: [
      { question: "Which BI platform do you recommend?", answer: "It depends on your ecosystem. Power BI integrates deeply with Microsoft tools, Tableau excels in visualization, and Looker is ideal for data-savvy teams wanting a code-first approach. We help you evaluate and choose." },
      { question: "How long does a BI implementation take?", answer: "A foundational dashboard with core KPIs typically takes 4-6 weeks. A full enterprise BI platform with data warehouse, governance, and self-service capabilities is usually 3-6 months." },
      { question: "Can you work with our existing data infrastructure?", answer: "Absolutely. We integrate with any data source — databases, APIs, SaaS platforms, flat files — and can enhance your existing data warehouse or build a new one." }
    ]
  },
  {
    slug: "ai-ml-solutions",
    name: "AI & Machine Learning Solutions",
    shortDescription: "Leverage artificial intelligence and machine learning to automate processes, predict outcomes, and unlock new value.",
    fullDescription: "Our AI & ML solutions help businesses harness the power of artificial intelligence to solve complex problems, automate decision-making, and create competitive advantages. From predictive analytics and NLP to computer vision and generative AI, we deliver production-ready ML systems that drive measurable business impact.",
    icon: Brain,
    features: [
      "Predictive analytics and forecasting",
      "Natural language processing (NLP & LLMs)",
      "Computer vision and image recognition",
      "Recommendation engines",
      "Generative AI integration (ChatGPT, custom models)",
      "MLOps and model lifecycle management",
      "Anomaly detection and fraud prevention",
      "AI-powered process automation"
    ],
    benefits: [
      "Automate complex decisions at scale",
      "Predict trends and customer behavior accurately",
      "Unlock insights from unstructured data (text, images, audio)",
      "Reduce manual effort with intelligent automation",
      "Create personalized customer experiences",
      "Gain competitive advantage through AI-first strategies"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "LangChain", "Hugging Face", "AWS SageMaker", "Azure ML", "Vertex AI", "MLflow", "Kubeflow", "Ray"],
    caseStudies: [
      {
        company: "InsureRight",
        industry: "Insurance",
        challenge: "Claims processing took an average of 14 days with high error rates, leading to poor customer satisfaction and increased operational costs.",
        solution: "Developed an AI-powered claims processing pipeline using NLP for document extraction, ML models for fraud detection, and automated decisioning for straightforward claims.",
        results: ["Claims processing time reduced to 2 days", "Fraud detection accuracy improved by 40%", "60% of simple claims auto-approved", "$8M annual savings in operational costs"]
      }
    ],
    faqs: [
      { question: "Do we need large datasets to start with AI?", answer: "Not necessarily. We can start with transfer learning, pre-trained models, or synthetic data augmentation. Even small, well-curated datasets can deliver meaningful results for focused use cases." },
      { question: "How do you ensure AI models are trustworthy?", answer: "We implement explainability (SHAP, LIME), bias detection, model monitoring, and human-in-the-loop workflows. Responsible AI practices are built into every project." },
      { question: "Can you integrate AI into our existing applications?", answer: "Yes, we deploy models as APIs, embed them in existing workflows, or build standalone AI-powered features — always designed for production scale and reliability." }
    ]
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    shortDescription: "Build high-performance native and cross-platform mobile applications for iOS and Android.",
    fullDescription: "Our mobile app development services deliver intuitive, high-performance applications across iOS and Android platforms. Whether you need a native app for maximum performance or a cross-platform solution for faster time-to-market, we design and build mobile experiences that engage users and drive business results.",
    icon: Smartphone,
    features: [
      "Native iOS and Android development",
      "Cross-platform development (React Native, Flutter)",
      "UI/UX design for mobile experiences",
      "Offline-first architecture",
      "Push notifications and real-time messaging",
      "Mobile backend and API development",
      "App Store and Play Store deployment",
      "Mobile analytics and crash reporting"
    ],
    benefits: [
      "Reach users on their preferred devices",
      "Faster time-to-market with cross-platform frameworks",
      "Consistent brand experience across platforms",
      "Higher user engagement with native-feel interactions",
      "Scalable architecture for growing user bases",
      "Ongoing maintenance and feature updates"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xcode", "Android Studio", "Firebase", "Expo", "Fastlane", "Detox", "Appium", "CodePush"],
    caseStudies: [
      {
        company: "FitTrack Pro",
        industry: "Health & Wellness",
        challenge: "Needed a unified mobile experience for iOS and Android with real-time health data syncing, wearable integration, and offline workout tracking.",
        solution: "Built a cross-platform app using React Native with offline-first architecture, real-time syncing via WebSockets, and integration with Apple Health and Google Fit APIs.",
        results: ["Launched on both platforms in 4 months", "500K+ downloads in first quarter", "4.8-star average app store rating", "Daily active users grew 30% month-over-month"]
      }
    ],
    faqs: [
      { question: "Should we build native or cross-platform?", answer: "Cross-platform (React Native, Flutter) is ideal for most business apps — faster development, shared codebase, near-native performance. Native is recommended for hardware-intensive apps like games or AR experiences." },
      { question: "How do you handle app store approvals?", answer: "We manage the entire submission process — guidelines compliance, metadata optimization, screenshot preparation, and review response — for both App Store and Google Play." },
      { question: "Can you integrate with our existing backend?", answer: "Absolutely. We build mobile apps that integrate seamlessly with your existing APIs, databases, and authentication systems." }
    ]
  },
  {
    slug: "api-integration",
    name: "API Development & Integration",
    shortDescription: "Design, build, and integrate robust APIs to connect systems, automate workflows, and enable digital ecosystems.",
    fullDescription: "Our API development and integration services help organizations connect disparate systems, enable seamless data flow, and build extensible digital platforms. We design RESTful and GraphQL APIs, implement third-party integrations, and establish API governance frameworks that scale with your business.",
    icon: Plug,
    features: [
      "RESTful and GraphQL API design",
      "Third-party API integration (CRM, ERP, payment, etc.)",
      "API gateway and management platforms",
      "Microservices architecture and inter-service communication",
      "Webhook and event-driven integrations",
      "API documentation and developer portals",
      "OAuth 2.0 and API security implementation",
      "Legacy system API wrappers"
    ],
    benefits: [
      "Seamless connectivity between all business systems",
      "Faster partner and vendor onboarding",
      "Reusable APIs accelerate future development",
      "Improved data consistency across platforms",
      "Scalable architecture for growing ecosystems",
      "Revenue opportunities through API monetization"
    ],
    technologies: ["Node.js", "Python", "Java", "GraphQL", "Apollo", "Kong", "Apigee", "AWS API Gateway", "Swagger/OpenAPI", "Postman", "MuleSoft", "Zapier"],
    caseStudies: [
      {
        company: "LogiChain Solutions",
        industry: "Logistics",
        challenge: "Disconnected systems across warehousing, transportation, and order management created data silos, manual reconciliation, and delayed shipment tracking.",
        solution: "Designed a unified API layer connecting WMS, TMS, and OMS platforms with real-time event-driven architecture, enabling end-to-end supply chain visibility.",
        results: ["Order processing time reduced by 60%", "Real-time tracking for 100% of shipments", "Partner onboarding reduced from weeks to days", "$1.2M saved annually in manual reconciliation"]
      }
    ],
    faqs: [
      { question: "REST or GraphQL — which should we use?", answer: "REST is simpler and widely supported — great for CRUD-heavy APIs. GraphQL is ideal when clients need flexible queries or you're serving multiple frontends. We often recommend a hybrid approach." },
      { question: "How do you ensure API security?", answer: "We implement OAuth 2.0, rate limiting, input validation, encryption in transit, and API key management. Every API goes through security review before deployment." },
      { question: "Can you help with legacy system integration?", answer: "Yes, we specialize in wrapping legacy systems with modern APIs — enabling them to participate in your digital ecosystem without costly rewrites." }
    ]
  },
  {
    slug: "data-security",
    name: "Data Security",
    shortDescription: "Protect sensitive data across its lifecycle with encryption, masking, classification, and loss prevention strategies.",
    fullDescription: "Our data security solutions safeguard your organization's most valuable asset — its data. We implement comprehensive protection strategies covering data at rest, in transit, and in use, ensuring regulatory compliance while enabling secure data sharing and collaboration across teams and partners.",
    icon: Lock,
    features: [
      "Data encryption (AES-256, TLS 1.3, envelope encryption)",
      "Data loss prevention (DLP) implementation",
      "Data classification and discovery",
      "Database activity monitoring and auditing",
      "Tokenization and data masking",
      "Backup encryption and secure recovery",
      "Data retention and secure destruction policies",
      "Cross-border data transfer compliance"
    ],
    benefits: [
      "Prevent unauthorized access to sensitive information",
      "Meet regulatory requirements (GDPR, CCPA, HIPAA, PCI DSS)",
      "Minimize breach impact with layered encryption",
      "Enable secure data sharing with partners",
      "Maintain customer trust and brand integrity",
      "Comprehensive audit trails for compliance reporting"
    ],
    technologies: ["Varonis", "Informatica Data Privacy", "BigID", "Imperva", "Thales CipherTrust", "HashiCorp Vault", "AWS KMS", "Azure Purview", "Google DLP API", "Symantec DLP", "Digital Guardian", "Protegrity"],
    caseStudies: [
      {
        company: "FinGuard Banking",
        industry: "Financial Services",
        challenge: "Unclassified sensitive data spread across 50+ databases with no encryption strategy, putting the organization at risk of regulatory penalties and data breaches.",
        solution: "Deployed automated data discovery and classification, implemented column-level encryption for PII/PCI data, and established DLP policies across all endpoints and cloud storage.",
        results: ["100% of sensitive data classified and encrypted", "PCI DSS Level 1 compliance achieved", "Zero data leakage incidents post-implementation", "Audit preparation time reduced by 70%"]
      }
    ],
    faqs: [
      { question: "What data should we encrypt first?", answer: "Start with PII, payment data, health records, and intellectual property. We perform a data discovery and risk assessment to prioritize based on regulatory exposure and business impact." },
      { question: "Does encryption impact application performance?", answer: "Modern encryption algorithms have minimal overhead. We optimize key management and use hardware-accelerated encryption where needed to ensure negligible performance impact." },
      { question: "How do you handle encryption key management?", answer: "We implement centralized key management using HSMs or cloud KMS services with key rotation, access controls, and separation of duties — ensuring keys are as protected as the data." }
    ]
  },
  {
    slug: "information-security",
    name: "Information Security",
    shortDescription: "Establish enterprise-wide security programs with risk management, governance frameworks, and incident response.",
    fullDescription: "Our information security services help organizations build and maintain robust security programs aligned with industry frameworks. From risk assessments and policy development to security operations and incident response, we provide end-to-end protection for your information assets and business processes.",
    icon: ShieldCheck,
    features: [
      "Security risk assessment and gap analysis",
      "ISMS implementation (ISO 27001, NIST CSF, SOC 2)",
      "Security policy and procedure development",
      "Security Operations Center (SOC) setup",
      "Threat intelligence and monitoring",
      "Incident response planning and tabletop exercises",
      "Vulnerability management programs",
      "Security awareness training and phishing simulations"
    ],
    benefits: [
      "Proactive threat detection and rapid response",
      "Framework-aligned security posture (ISO 27001, NIST)",
      "Reduced risk of breaches and associated costs",
      "Cultivate a security-first organizational culture",
      "Board-ready security reporting and metrics",
      "Streamlined audit and certification processes"
    ],
    technologies: ["Splunk SIEM", "Microsoft Sentinel", "CrowdStrike Falcon", "Palo Alto Cortex XSOAR", "Qualys", "Tenable Nessus", "KnowBe4", "Rapid7 InsightVM", "Elastic Security", "Carbon Black", "Wiz", "SentinelOne"],
    caseStudies: [
      {
        company: "GlobalTech Enterprises",
        industry: "Technology",
        challenge: "No formal security program, ad-hoc incident handling, and failed SOC 2 audit blocking enterprise sales pipeline worth $20M.",
        solution: "Built an ISMS from the ground up — risk assessment, policy framework, 24/7 SOC with SIEM deployment, vulnerability management program, and employee security training.",
        results: ["SOC 2 Type II certification in 6 months", "$20M enterprise pipeline unblocked", "Mean time to detect threats reduced to 15 minutes", "95% employee phishing test pass rate"]
      }
    ],
    faqs: [
      { question: "Which security framework should we adopt?", answer: "It depends on your industry and goals. SOC 2 is essential for SaaS companies, ISO 27001 for global enterprises, NIST CSF for US government contractors, and HIPAA for healthcare. We help you choose and implement the right framework." },
      { question: "Do we need a 24/7 SOC?", answer: "For organizations with sensitive data or regulatory requirements, 24/7 monitoring is critical. We offer managed SOC services or help you build an in-house capability based on your scale and budget." },
      { question: "How often should we conduct risk assessments?", answer: "At minimum annually, plus after significant changes to infrastructure, applications, or business processes. Continuous risk monitoring is recommended for mature security programs." }
    ]
  },
  {
    slug: "code-security",
    name: "Code Security",
    shortDescription: "Embed security into your development lifecycle with secure coding practices, SAST/DAST, and supply chain protection.",
    fullDescription: "Our code security services integrate security directly into your software development lifecycle (SDLC). We implement shift-left security practices, automate vulnerability scanning in CI/CD pipelines, and protect your software supply chain — ensuring every line of code that reaches production is secure by design.",
    icon: FileCode,
    features: [
      "Static Application Security Testing (SAST)",
      "Dynamic Application Security Testing (DAST)",
      "Software Composition Analysis (SCA)",
      "Secure code review and developer training",
      "CI/CD pipeline security gate integration",
      "Software Bill of Materials (SBOM) generation",
      "Container image scanning and hardening",
      "Secret detection and management in repositories"
    ],
    benefits: [
      "Catch vulnerabilities before they reach production",
      "Reduce remediation costs with shift-left approach",
      "Protect against supply chain attacks",
      "Build developer security competency",
      "Automated compliance evidence from pipelines",
      "Faster secure releases with integrated tooling"
    ],
    technologies: ["SonarQube", "Snyk", "Checkmarx", "Veracode", "Semgrep", "GitHub Advanced Security", "GitLab SAST", "Trivy", "Grype", "Gitleaks", "OWASP Dependency-Check", "Sigstore", "Syft"],
    caseStudies: [
      {
        company: "CloudPay Systems",
        industry: "FinTech",
        challenge: "Critical vulnerabilities discovered in production code and third-party dependencies, with no automated scanning in the CI/CD pipeline — manual reviews missed 60% of issues.",
        solution: "Implemented SAST, DAST, and SCA tools as CI/CD gates, established secure coding standards, deployed secret scanning across all repositories, and trained 80 developers on secure practices.",
        results: ["92% of vulnerabilities caught pre-production", "Third-party dependency risks reduced by 85%", "Zero critical CVEs in production for 12 months", "Developer security proficiency doubled"]
      }
    ],
    faqs: [
      { question: "What's the difference between SAST, DAST, and SCA?", answer: "SAST analyzes source code for flaws without running it. DAST tests running applications for runtime vulnerabilities. SCA identifies known vulnerabilities in open-source dependencies. Together they provide comprehensive coverage." },
      { question: "Will security scanning slow down our CI/CD pipeline?", answer: "Incremental scanning adds minimal time (1-3 minutes). We optimize by running fast scans on every commit and full scans on PRs/releases, balancing speed with thorough coverage." },
      { question: "How do you handle false positives?", answer: "We tune scanning rules to your codebase, create suppression policies for verified false positives, and implement triage workflows so developers focus only on real issues." }
    ]
  },
  {
    slug: "cloud-instance-security",
    name: "Cloud Instance Security",
    shortDescription: "Secure your cloud workloads with posture management, runtime protection, and compliance automation.",
    fullDescription: "Our cloud instance security services protect your compute workloads across AWS, Azure, and GCP. We implement cloud security posture management (CSPM), workload protection platforms (CWPP), and automated compliance checks to ensure every cloud resource is configured securely and monitored continuously.",
    icon: CloudCog,
    features: [
      "Cloud Security Posture Management (CSPM)",
      "Cloud Workload Protection Platform (CWPP)",
      "Instance hardening and CIS benchmark compliance",
      "Network segmentation and micro-segmentation",
      "Runtime threat detection and response",
      "Automated compliance remediation",
      "Multi-cloud security policy unification",
      "Serverless and container security"
    ],
    benefits: [
      "Eliminate misconfigurations — the #1 cloud breach cause",
      "Continuous compliance across all cloud accounts",
      "Unified security view across multi-cloud environments",
      "Automated detection and remediation of drift",
      "Reduced attack surface with least-privilege policies",
      "Real-time visibility into cloud resource posture"
    ],
    technologies: ["Wiz", "Prisma Cloud", "AWS Security Hub", "Azure Defender", "Google Security Command Center", "Lacework", "Orca Security", "Aqua Security", "Falco", "AWS GuardDuty", "CloudTrail", "Terraform Sentinel"],
    caseStudies: [
      {
        company: "ScaleUp SaaS",
        industry: "Technology",
        challenge: "Rapid cloud expansion led to 3,000+ unaudited instances across 12 AWS accounts with misconfigured security groups, public S3 buckets, and no centralized visibility.",
        solution: "Deployed CSPM across all accounts, remediated 500+ critical misconfigurations, implemented automated guardrails via IaC policies, and established continuous compliance monitoring.",
        results: ["500+ critical misconfigurations remediated in 4 weeks", "100% visibility across 12 AWS accounts", "CIS benchmark compliance improved from 42% to 97%", "Automated remediation for 80% of common drift issues"]
      }
    ],
    faqs: [
      { question: "What are the most common cloud security risks?", answer: "Misconfigured storage buckets, overly permissive IAM roles, unencrypted data, exposed management ports, and missing logging. Our CSPM tools continuously scan for these and 200+ other risk patterns." },
      { question: "Can you secure multi-cloud environments?", answer: "Yes, we deploy unified security policies across AWS, Azure, and GCP using tools like Wiz or Prisma Cloud, providing a single pane of glass for posture management." },
      { question: "How do you handle auto-remediation safely?", answer: "We implement graduated responses — alerting for critical resources, auto-remediation for well-understood issues with rollback capability, and approval workflows for sensitive changes." }
    ]
  },
  {
    slug: "identity-access-management",
    name: "Identity & Access Management",
    shortDescription: "Control who accesses what with zero-trust IAM, SSO, MFA, and privileged access management.",
    fullDescription: "Our Identity & Access Management solutions help organizations implement zero-trust security models with centralized identity governance. We deploy SSO, MFA, privileged access management, and role-based access controls to ensure the right people have the right access at the right time — and nothing more.",
    icon: KeyRound,
    features: [
      "Single Sign-On (SSO) implementation",
      "Multi-Factor Authentication (MFA) deployment",
      "Privileged Access Management (PAM)",
      "Role-Based Access Control (RBAC) design",
      "Identity governance and lifecycle management",
      "Zero-trust architecture implementation",
      "Directory services and federation",
      "Access certification and recertification campaigns"
    ],
    benefits: [
      "Eliminate password fatigue with seamless SSO",
      "Block 99.9% of credential-based attacks with MFA",
      "Enforce least-privilege access across all systems",
      "Automated provisioning and deprovisioning",
      "Complete audit trail of access decisions",
      "Regulatory compliance for access controls"
    ],
    technologies: ["Okta", "Azure AD / Entra ID", "CyberArk", "Ping Identity", "Auth0", "AWS IAM Identity Center", "SailPoint", "OneLogin", "BeyondTrust", "HashiCorp Boundary", "Keycloak", "ForgeRock"],
    caseStudies: [
      {
        company: "Continental Healthcare Network",
        industry: "Healthcare",
        challenge: "150+ applications with separate credentials, no centralized access governance, and failed HIPAA audit due to orphaned accounts and excessive privileges.",
        solution: "Implemented Okta SSO with MFA across all applications, deployed CyberArk PAM for privileged accounts, and established automated joiner/mover/leaver workflows tied to HR systems.",
        results: ["Login time reduced from 45 minutes to 2 minutes daily per user", "100% MFA coverage across all applications", "Orphaned accounts eliminated with automated deprovisioning", "HIPAA access control audit passed with zero findings"]
      }
    ],
    faqs: [
      { question: "How long does SSO implementation take?", answer: "Core SSO with major applications typically takes 4-8 weeks. Full rollout across all applications depends on integration complexity — we prioritize high-risk and high-usage apps first." },
      { question: "What MFA methods do you support?", answer: "We implement phishing-resistant MFA including FIDO2/WebAuthn hardware keys, authenticator apps, push notifications, and biometrics. SMS-based MFA is discouraged due to SIM-swap risks." },
      { question: "How do you handle third-party/contractor access?", answer: "We implement time-bound, just-in-time access with approval workflows, separate identity stores for external users, and automated expiration policies to prevent access creep." }
    ]
  },
  {
    slug: "cybersecurity-consulting",
    name: "Cybersecurity Consulting",
    shortDescription: "Strategic cybersecurity advisory services including risk assessments, incident response planning, and security architecture design.",
    fullDescription: "Our cybersecurity consulting practice helps organizations build resilient security postures through strategic advisory, risk assessments, incident response planning, and security architecture design. We combine deep technical expertise with business acumen to protect your most critical assets.",
    icon: ShieldAlert,
    features: [
      "Cybersecurity maturity assessments",
      "Risk quantification & prioritization",
      "Security roadmap development",
      "Incident response plan development",
      "Tabletop exercises & simulations",
      "Digital forensics & investigation",
      "Zero-trust architecture design",
      "Network segmentation strategy",
      "Threat hunting programs",
      "Dark web monitoring",
      "Attack surface management",
      "Adversary emulation & red teaming"
    ],
    benefits: [
      "Proactive risk identification before breaches occur",
      "Reduced incident response time with tested playbooks",
      "Board-level visibility into security posture",
      "Alignment with industry frameworks (NIST, ISO, CIS)",
      "Optimized security spending based on risk priorities",
      "Regulatory compliance readiness"
    ],
    technologies: ["MITRE ATT&CK", "NIST CSF", "CrowdStrike", "Mandiant", "Recorded Future", "Palo Alto Cortex", "Splunk SOAR", "Carbon Black"],
    caseStudies: [
      {
        company: "SecureBank Corp",
        industry: "Financial Services",
        challenge: "A regional bank experienced a sophisticated phishing attack and lacked a formal incident response plan, leading to delayed containment and regulatory scrutiny.",
        solution: "Conducted a full cybersecurity maturity assessment, developed and tested an incident response playbook, implemented threat hunting capabilities, and established a security operations center (SOC) partnership.",
        results: ["Incident response time reduced from 72 hours to 4 hours", "Achieved NIST CSF Tier 3 maturity within 12 months", "Zero successful breaches in 18 months post-engagement", "Regulatory confidence restored with documented security posture"]
      }
    ],
    faqs: [
      { question: "What does a cybersecurity maturity assessment involve?", answer: "We evaluate your security posture across people, processes, and technology using frameworks like NIST CSF or CIS Controls. The result is a prioritized roadmap with quick wins and strategic improvements." },
      { question: "How often should we conduct red team exercises?", answer: "We recommend annual red team engagements with quarterly tabletop exercises. High-risk industries like finance and healthcare may benefit from semi-annual red team assessments." },
      { question: "Do you provide managed security services?", answer: "We focus on strategic consulting and architecture. For ongoing managed SOC services, we help you select and onboard the right MSSP partner and ensure seamless integration with your security stack." }
    ]
  },
  {
    slug: "compliance-governance",
    name: "Compliance & Governance",
    shortDescription: "Navigate complex regulatory landscapes with comprehensive compliance programs, audit preparation, and governance frameworks.",
    fullDescription: "We help organizations navigate complex regulatory requirements and build sustainable compliance programs. From SOC 2 and HIPAA to GDPR and PCI DSS, our experts design governance frameworks, automate evidence collection, and prepare you for audits with confidence.",
    icon: Scale,
    features: [
      "SOC 2 Type I & II readiness",
      "GDPR & CCPA compliance programs",
      "HIPAA security & privacy compliance",
      "PCI DSS assessment & remediation",
      "ISO 27001 certification preparation",
      "IT governance framework design",
      "Policy & procedure development",
      "Third-party risk management",
      "Internal audit program development",
      "Evidence collection automation",
      "Continuous compliance monitoring",
      "Privacy impact assessments"
    ],
    benefits: [
      "Accelerated compliance certification timelines",
      "Reduced audit preparation effort by up to 60%",
      "Unified control framework across multiple standards",
      "Automated evidence collection and monitoring",
      "Increased enterprise customer confidence",
      "Reduced risk of regulatory fines and penalties"
    ],
    technologies: ["Vanta", "Drata", "OneTrust", "ServiceNow GRC", "BigID", "Qualys", "Archer", "TrustArc"],
    caseStudies: [
      {
        company: "MedFlow Health",
        industry: "Healthcare SaaS",
        challenge: "A fast-growing health-tech startup needed SOC 2 Type II and HIPAA compliance to close enterprise deals but had no formal compliance program or dedicated security staff.",
        solution: "Implemented Vanta for automated compliance monitoring, developed comprehensive security policies, established a risk management framework, and prepared the organization for SOC 2 Type II and HIPAA audits within 6 months.",
        results: ["SOC 2 Type II achieved in 5 months from zero baseline", "HIPAA compliance validated with zero critical findings", "Enterprise deal pipeline increased by 300%", "Ongoing compliance maintained with 90% automation"]
      }
    ],
    faqs: [
      { question: "How long does SOC 2 Type II certification take?", answer: "From zero baseline, SOC 2 Type I typically takes 3-4 months and Type II requires an additional 6-12 month observation period. With automation tools like Vanta or Drata, we can accelerate readiness significantly." },
      { question: "Which compliance framework should we start with?", answer: "It depends on your industry and customers. B2B SaaS companies typically start with SOC 2, healthcare with HIPAA, e-commerce with PCI DSS, and companies with EU customers with GDPR. We help you prioritize based on business impact." },
      { question: "Can you help with multiple compliance frameworks simultaneously?", answer: "Yes — many controls overlap across frameworks. We implement a unified control framework that maps to multiple standards, reducing duplicate effort by 40-60% compared to addressing each framework separately." }
    ]
  },
  {
    slug: "platform-engineering",
    name: "Platform Engineering",
    shortDescription: "Build internal developer platforms that accelerate delivery and reduce cognitive load.",
    fullDescription: "We design and implement Internal Developer Platforms (IDPs) that give your engineering teams self-service capabilities for infrastructure provisioning, environment management, and deployment workflows. By abstracting complexity behind golden paths and developer portals, we help organizations scale their engineering productivity while maintaining governance and security standards.",
    icon: Layers,
    features: [
      "Internal Developer Platform (IDP) design & implementation",
      "Developer portal & service catalog (Backstage)",
      "Golden paths & scaffolding templates",
      "Self-service infrastructure provisioning",
      "Platform API & CLI tooling",
      "Developer experience (DevEx) optimization",
      "Multi-tenant platform architecture",
      "Platform observability & usage analytics"
    ],
    benefits: [
      "Faster developer onboarding",
      "Reduced cognitive load for engineering teams",
      "Consistent environments & governance",
      "Improved developer productivity & satisfaction"
    ],
    technologies: ["Backstage", "Crossplane", "Kratix", "Port", "Humanitec", "Kubernetes", "Argo Workflows", "Score", "Terraform", "Pulumi"],
    caseStudies: [
      {
        company: "FinTech Company",
        industry: "Financial Services",
        challenge: "New service onboarding took 2 weeks with heavy manual configuration and inconsistent environments.",
        solution: "Built a Backstage-based internal developer portal with self-service provisioning and golden path templates.",
        results: ["Onboarding reduced from 2 weeks to 30 minutes", "60% improvement in developer satisfaction", "Standardized service templates across 15 teams"]
      }
    ],
    faqs: [
      { question: "What is platform engineering?", answer: "Platform engineering is the discipline of designing and building toolchains and workflows that enable self-service capabilities for software engineering organizations in the cloud-native era." },
      { question: "How does this differ from DevOps?", answer: "While DevOps focuses on culture and practices, platform engineering focuses on building the actual platforms and tools that make DevOps practices easy to adopt at scale." }
    ]
  },
  {
    slug: "observability-monitoring",
    name: "Observability & Monitoring",
    shortDescription: "Full-stack observability with metrics, logs, and traces for proactive incident management.",
    fullDescription: "We implement comprehensive observability strategies that give your teams deep visibility into application performance, infrastructure health, and user experience. From distributed tracing and log aggregation to custom dashboards and intelligent alerting, we build the monitoring foundation that enables proactive incident response and data-driven optimization.",
    icon: Activity,
    features: [
      "Distributed tracing implementation",
      "Log aggregation & centralized logging",
      "Metrics collection & custom dashboards",
      "APM (Application Performance Monitoring)",
      "Synthetic monitoring & uptime checks",
      "Intelligent alerting & on-call management",
      "SLI/SLO/SLA definition & tracking",
      "Cost-optimized telemetry pipelines"
    ],
    benefits: [
      "Proactive incident detection & response",
      "Reduced mean time to resolution (MTTR)",
      "Deep visibility into system behavior",
      "Data-driven performance optimization"
    ],
    technologies: ["Datadog", "Grafana", "Prometheus", "OpenTelemetry", "Jaeger", "Loki", "Elastic Stack (ELK)", "PagerDuty", "New Relic", "Splunk Observability"],
    caseStudies: [
      {
        company: "E-Commerce Platform",
        industry: "Retail",
        challenge: "120+ microservices with no unified observability, leading to long incident resolution times.",
        solution: "Implemented OpenTelemetry-based distributed tracing and Grafana dashboards across the entire stack.",
        results: ["75% reduction in mean time to detection", "55% reduction in mean time to resolution", "Unified observability across 120+ services"]
      }
    ],
    faqs: [
      { question: "What is the difference between monitoring and observability?", answer: "Monitoring tells you when something is wrong; observability helps you understand why. Observability uses metrics, logs, and traces (the three pillars) to provide deep insights into system behavior." },
      { question: "Do you support OpenTelemetry?", answer: "Yes, we strongly advocate for OpenTelemetry as a vendor-neutral standard. It provides flexibility to switch between observability backends without re-instrumenting your applications." }
    ]
  },
  {
    slug: "finops",
    name: "FinOps & Cloud Cost Optimization",
    shortDescription: "Gain visibility and control over cloud spending with data-driven financial operations.",
    fullDescription: "We implement FinOps practices and tooling that give your organization full visibility into cloud costs, enable accurate forecasting, and drive continuous optimization. From tagging strategies and showback/chargeback models to automated rightsizing and reserved instance planning, we help you maximize cloud ROI while maintaining performance.",
    icon: DollarSign,
    features: [
      "Cloud cost visibility & reporting dashboards",
      "Tagging strategy & cost allocation",
      "Showback & chargeback models",
      "Rightsizing & instance optimization",
      "Reserved instance & savings plan management",
      "Anomaly detection & budget alerting",
      "Multi-cloud cost consolidation",
      "FinOps culture & team enablement"
    ],
    benefits: [
      "Reduced cloud spend by 20-40%",
      "Accurate cost forecasting & budgeting",
      "Accountability across engineering teams",
      "Data-driven infrastructure decisions"
    ],
    technologies: ["CloudHealth", "Apptio Cloudability", "AWS Cost Explorer", "Azure Cost Management", "Spot by NetApp", "Kubecost", "Infracost", "Vantage", "nOps", "Cast AI"],
    caseStudies: [
      {
        company: "SaaS Enterprise",
        industry: "Technology",
        challenge: "Cloud costs growing 30% quarter-over-quarter with no visibility into spend drivers across 200+ AWS accounts.",
        solution: "Implemented FinOps framework with CloudHealth, automated tagging, rightsizing recommendations, and team-level chargeback dashboards.",
        results: ["35% reduction in annual cloud spend", "Full cost attribution across 40 engineering teams", "Automated anomaly detection preventing $50K+ monthly overruns"]
      }
    ],
    faqs: [
      { question: "What is FinOps?", answer: "FinOps is a cloud financial management discipline that brings financial accountability to cloud spending. It combines people, processes, and tools to help organizations understand and optimize their cloud costs." },
      { question: "How quickly can we see cost savings?", answer: "Most organizations see 15-25% savings within the first 90 days through quick wins like rightsizing, eliminating waste, and optimizing reserved capacity." }
    ]
  },
  {
    slug: "serverless-architecture",
    name: "Serverless Architecture",
    shortDescription: "Build event-driven, auto-scaling applications with zero infrastructure management overhead.",
    fullDescription: "We design and implement serverless architectures that let your teams focus on business logic while the cloud handles scaling, availability, and infrastructure management. From API backends and event processing to full serverless web applications, we help you leverage Functions-as-a-Service and managed services for maximum agility and cost efficiency.",
    icon: CloudLightning,
    features: [
      "Serverless API & microservices design",
      "Event-driven architecture patterns",
      "Step functions & workflow orchestration",
      "Serverless data processing pipelines",
      "Edge computing & CDN functions",
      "Serverless database integration",
      "Cold start optimization strategies",
      "Serverless security & IAM best practices"
    ],
    benefits: [
      "Zero infrastructure management",
      "Auto-scaling from zero to millions of requests",
      "Pay-per-use cost model",
      "Faster time-to-market for new features"
    ],
    technologies: ["AWS Lambda", "Azure Functions", "Google Cloud Functions", "AWS Step Functions", "API Gateway", "EventBridge", "DynamoDB", "Cloudflare Workers", "Vercel Edge Functions", "AWS SAM"],
    caseStudies: [
      {
        company: "Media Streaming Company",
        industry: "Media & Entertainment",
        challenge: "Needed to process millions of real-time events daily for content recommendations with unpredictable traffic spikes.",
        solution: "Built a fully serverless event-driven pipeline using Lambda, EventBridge, and DynamoDB with automatic scaling.",
        results: ["Processing 5M+ events/day with zero ops overhead", "70% cost reduction vs. always-on infrastructure", "Sub-second response times during peak traffic"]
      }
    ],
    faqs: [
      { question: "When should we use serverless vs. containers?", answer: "Serverless is ideal for event-driven workloads, intermittent traffic, and when you want zero ops overhead. Containers are better for long-running processes, workloads needing consistent performance, or when you need full control over the runtime." },
      { question: "How do you handle cold starts?", answer: "We use strategies like provisioned concurrency, code optimization, lightweight runtimes, and architectural patterns that minimize cold start impact on user experience." }
    ]
  },
  {
    slug: "test-automation-framework",
    name: "Test Automation Framework",
    shortDescription: "End-to-end test automation frameworks for faster, more reliable software releases.",
    fullDescription: "We design and implement scalable test automation frameworks that integrate seamlessly into your CI/CD pipelines. From UI and API testing to mobile and cross-browser validation, we build maintainable automation suites that catch defects early, reduce manual effort, and accelerate your release cycles.",
    icon: Cog,
    features: [
      "Custom test automation framework design",
      "UI & end-to-end test automation",
      "API & service-level test automation",
      "Mobile test automation (iOS & Android)",
      "Cross-browser & cross-device testing",
      "Data-driven & keyword-driven testing",
      "Test reporting & analytics dashboards",
      "CI/CD pipeline integration"
    ],
    benefits: [
      "80%+ reduction in manual testing effort",
      "Faster feedback loops for developers",
      "Consistent & repeatable test execution",
      "Earlier defect detection in the SDLC"
    ],
    technologies: ["Selenium", "Cypress", "Playwright", "Appium", "TestNG", "Jest", "Robot Framework", "Cucumber", "BrowserStack", "Sauce Labs"],
    caseStudies: [
      {
        company: "Insurance Provider",
        industry: "Financial Services",
        challenge: "Manual regression testing took 3 weeks per release, creating a bottleneck for quarterly deployments.",
        solution: "Built a Playwright-based automation framework with 1,200+ tests integrated into CI/CD, enabling daily regression runs.",
        results: ["Regression cycle reduced from 3 weeks to 4 hours", "85% test automation coverage", "Release frequency increased from quarterly to bi-weekly"]
      }
    ],
    faqs: [
      { question: "Which automation tool do you recommend?", answer: "It depends on your stack. We recommend Playwright for modern web apps, Cypress for JavaScript-heavy SPAs, Selenium for legacy or multi-browser needs, and Appium for mobile. We evaluate your specific requirements before recommending." },
      { question: "How do you ensure test maintainability?", answer: "We use Page Object Model patterns, modular design, centralized test data management, and self-healing locator strategies to minimize maintenance overhead as your application evolves." }
    ]
  },
  {
    slug: "accessibility-testing",
    name: "Accessibility Testing",
    shortDescription: "Ensure your digital products are inclusive and compliant with WCAG and ADA standards.",
    fullDescription: "We provide comprehensive accessibility testing services to ensure your web and mobile applications are usable by everyone, including people with disabilities. From automated scanning and manual expert audits to assistive technology testing and remediation guidance, we help you achieve WCAG compliance and deliver truly inclusive digital experiences.",
    icon: Accessibility,
    features: [
      "WCAG 2.1/2.2 compliance auditing",
      "Automated accessibility scanning",
      "Manual expert accessibility review",
      "Screen reader & assistive technology testing",
      "Keyboard navigation testing",
      "Color contrast & visual accessibility",
      "ARIA implementation review",
      "Accessibility remediation guidance & training"
    ],
    benefits: [
      "WCAG & ADA compliance assurance",
      "Broader audience reach & inclusivity",
      "Reduced legal risk from non-compliance",
      "Improved SEO & overall user experience"
    ],
    technologies: ["axe-core", "WAVE", "Lighthouse", "NVDA", "JAWS", "VoiceOver", "Pa11y", "Deque Axe DevTools", "Accessibility Insights", "Tenon.io"],
    caseStudies: [
      {
        company: "Government Agency",
        industry: "Public Sector",
        challenge: "Public-facing portal had 500+ WCAG violations, risking ADA non-compliance lawsuits and excluding users with disabilities.",
        solution: "Conducted comprehensive accessibility audit, prioritized critical violations, and guided remediation with developer training sessions.",
        results: ["100% WCAG 2.1 AA compliance achieved", "500+ violations remediated across 80 pages", "Accessibility integrated into CI/CD with automated checks"]
      }
    ],
    faqs: [
      { question: "What level of WCAG compliance should we target?", answer: "Most organizations target WCAG 2.1 Level AA, which is the standard required by most regulations including ADA, Section 508, and the European Accessibility Act. Level AAA is aspirational but not typically required." },
      { question: "Can accessibility testing be automated?", answer: "Automated tools can catch about 30-40% of accessibility issues (color contrast, missing alt text, ARIA errors). Manual testing with assistive technologies is essential to catch the remaining issues like keyboard navigation, screen reader experience, and cognitive accessibility." }
    ]
  },
  {
    slug: "low-code-no-code",
    name: "Low-Code / No-Code Development",
    shortDescription: "Accelerate application delivery with visual development platforms and citizen developer enablement.",
    fullDescription: "We help organizations leverage low-code and no-code platforms to rapidly build business applications, automate workflows, and empower citizen developers. From platform selection and governance to complex integrations and enterprise-grade solutions, we ensure you get the speed benefits of visual development without sacrificing scalability or security.",
    icon: Blocks,
    features: [
      "Platform evaluation & selection",
      "Enterprise low-code application development",
      "Citizen developer enablement & training",
      "Workflow & process automation",
      "Low-code governance & best practices",
      "Custom component & plugin development",
      "Integration with enterprise systems",
      "Migration from legacy to low-code platforms"
    ],
    benefits: [
      "10x faster application delivery",
      "Reduced dependency on specialized developers",
      "Empowered business users & citizen developers",
      "Lower total cost of ownership"
    ],
    technologies: ["Microsoft Power Platform", "OutSystems", "Mendix", "Appian", "Retool", "Bubble", "ServiceNow App Engine", "Salesforce Lightning", "Google AppSheet", "Zoho Creator"],
    caseStudies: [
      {
        company: "Healthcare Network",
        industry: "Healthcare",
        challenge: "IT backlog of 200+ application requests from business units with an average 6-month delivery timeline.",
        solution: "Implemented Microsoft Power Platform with governance framework, trained 50 citizen developers, and built a center of excellence.",
        results: ["IT backlog reduced by 70% in 6 months", "Average app delivery time dropped from 6 months to 2 weeks", "50 citizen developers building production apps"]
      }
    ],
    faqs: [
      { question: "Is low-code suitable for enterprise applications?", answer: "Yes, modern enterprise low-code platforms like OutSystems, Mendix, and Power Platform support complex business logic, enterprise integrations, scalability, and security requirements needed for mission-critical applications." },
      { question: "How do you prevent low-code sprawl?", answer: "We establish governance frameworks including platform standards, naming conventions, security policies, review processes, and a Center of Excellence to ensure quality and consistency across all citizen-developed applications." }
    ]
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design Services",
    shortDescription: "Human-centered design that delivers intuitive, engaging, and conversion-optimized digital experiences.",
    fullDescription: "Our UI/UX design services combine user research, interaction design, and visual design to create digital experiences that delight users and drive business outcomes. From discovery and wireframing to high-fidelity prototypes and design systems, we follow a research-driven approach to ensure every design decision is backed by user insights and aligned with your business goals.",
    icon: Palette,
    features: [
      "User research & persona development",
      "Information architecture & user flows",
      "Wireframing & interactive prototyping",
      "Visual design & brand-aligned UI",
      "Design system & component library creation",
      "Usability testing & heuristic evaluation",
      "Responsive & adaptive design",
      "Conversion rate optimization (CRO)"
    ],
    benefits: [
      "Increased user engagement & satisfaction",
      "Higher conversion rates & revenue",
      "Reduced development rework costs",
      "Consistent brand experience across touchpoints"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Storybook", "Zeplin", "Hotjar", "Maze", "UserTesting", "Optimal Workshop"],
    caseStudies: [
      {
        company: "B2B SaaS Platform",
        industry: "Technology",
        challenge: "Complex enterprise dashboard with poor usability scores, high support ticket volume, and 40% feature abandonment rate.",
        solution: "Conducted user research with 30+ interviews, redesigned the dashboard with simplified navigation and a new design system in Figma.",
        results: ["User satisfaction score increased from 3.2 to 4.6/5", "Support tickets reduced by 45%", "Feature adoption increased by 60%"]
      }
    ],
    faqs: [
      { question: "Do you work with existing brand guidelines?", answer: "Absolutely. We integrate with your existing brand identity, extending it thoughtfully into the digital experience while ensuring consistency. If you don't have established guidelines, we can help create them." },
      { question: "How do you measure design success?", answer: "We define measurable KPIs upfront — task completion rates, time-on-task, System Usability Scale (SUS) scores, conversion rates, and NPS. We conduct usability testing to validate designs before development begins." }
    ]
  },
  {
    slug: "generative-ai",
    name: "Generative AI Solutions",
    shortDescription: "Harness the power of generative AI for content creation, conversational interfaces, and intelligent automation.",
    fullDescription: "We help organizations adopt generative AI technologies to transform customer experiences, automate content workflows, and build intelligent applications. From LLM fine-tuning and RAG architectures to conversational AI chatbots and AI-powered content generation, we deliver production-ready generative AI solutions tailored to your business needs.",
    icon: Bot,
    features: [
      "Large Language Model (LLM) integration & fine-tuning",
      "Retrieval-Augmented Generation (RAG) pipelines",
      "Conversational AI & intelligent chatbots",
      "AI-powered content generation & summarization",
      "Prompt engineering & optimization",
      "AI guardrails & responsible AI frameworks",
      "Multi-modal AI (text, image, audio, video)",
      "Enterprise knowledge base & AI search"
    ],
    benefits: [
      "Automated content creation at scale",
      "Enhanced customer engagement with AI assistants",
      "Reduced operational costs through intelligent automation",
      "Faster knowledge discovery & decision-making"
    ],
    technologies: ["OpenAI GPT", "Google Gemini", "Anthropic Claude", "LangChain", "LlamaIndex", "Hugging Face", "Pinecone", "Weaviate", "AWS Bedrock", "Azure OpenAI"],
    caseStudies: [
      {
        company: "Legal Services Firm",
        industry: "Legal",
        challenge: "Lawyers spent 40% of billable hours on document review and research across millions of case files.",
        solution: "Built a RAG-based AI assistant using LangChain and GPT-4 with vector search over the firm's document repository.",
        results: ["60% reduction in document review time", "95% accuracy in legal research queries", "$2M annual savings in billable hour efficiency"]
      }
    ],
    faqs: [
      { question: "How do you ensure data privacy with generative AI?", answer: "We implement private deployments using Azure OpenAI or AWS Bedrock, ensuring your data never leaves your cloud environment. We also apply data anonymization, access controls, and audit logging." },
      { question: "Can you fine-tune models on our proprietary data?", answer: "Yes, we offer fine-tuning services for domain-specific use cases. We also implement RAG architectures that augment base models with your proprietary knowledge without the cost and complexity of full fine-tuning." }
    ]
  },
  {
    slug: "agentic-ai",
    name: "Agentic AI, Agents & Tools",
    shortDescription: "Build autonomous AI agents that reason, plan, and execute complex multi-step tasks.",
    fullDescription: "We design and implement agentic AI systems — autonomous agents that can reason, plan, use tools, and collaborate to accomplish complex business objectives. From single-agent task automation to multi-agent orchestration systems, we build AI solutions that go beyond simple Q&A to take meaningful actions on behalf of your organization.",
    icon: Workflow,
    features: [
      "Autonomous AI agent design & development",
      "Multi-agent orchestration systems",
      "Tool-use & API integration for agents",
      "Agent memory & state management",
      "Human-in-the-loop workflows",
      "Agent evaluation & safety frameworks",
      "Custom tool & plugin development",
      "Enterprise agent deployment & monitoring"
    ],
    benefits: [
      "End-to-end task automation for complex workflows",
      "Reduced manual intervention in repetitive processes",
      "Scalable AI workforce for operational efficiency",
      "Adaptive systems that improve over time"
    ],
    technologies: ["LangGraph", "CrewAI", "AutoGen", "OpenAI Assistants API", "LangChain Agents", "Semantic Kernel", "Haystack", "Prefect", "Temporal", "n8n"],
    caseStudies: [
      {
        company: "Supply Chain Company",
        industry: "Logistics",
        challenge: "Complex procurement process requiring coordination across 5 departments with manual handoffs causing 2-week delays.",
        solution: "Deployed a multi-agent system using LangGraph with specialized agents for vendor evaluation, compliance checking, and approval routing.",
        results: ["Procurement cycle reduced from 2 weeks to 2 days", "90% reduction in manual handoffs", "30% cost savings through automated vendor negotiation"]
      }
    ],
    faqs: [
      { question: "What is agentic AI?", answer: "Agentic AI refers to AI systems that can autonomously plan, reason, and take actions to achieve goals. Unlike traditional chatbots, agents can use tools, access APIs, make decisions, and execute multi-step workflows with minimal human intervention." },
      { question: "How do you ensure agent safety?", answer: "We implement guardrails including action boundaries, human approval gates for critical decisions, comprehensive logging, rollback capabilities, and evaluation frameworks that test agent behavior across edge cases before deployment." }
    ]
  },
  {
    slug: "mlops",
    name: "MLOps & AI Infrastructure",
    shortDescription: "Operationalize machine learning with scalable pipelines, model management, and automated retraining.",
    fullDescription: "We build the infrastructure and processes needed to take machine learning models from experimentation to production at scale. From ML pipeline automation and model versioning to monitoring, drift detection, and automated retraining, we implement MLOps best practices that ensure your AI investments deliver consistent, reliable business value.",
    icon: FlaskConical,
    features: [
      "ML pipeline design & automation",
      "Model versioning & experiment tracking",
      "Feature store implementation",
      "Model serving & inference optimization",
      "Model monitoring & drift detection",
      "Automated retraining pipelines",
      "GPU infrastructure optimization",
      "ML governance & compliance"
    ],
    benefits: [
      "Faster model deployment cycles",
      "Reliable & reproducible ML pipelines",
      "Reduced model degradation with proactive monitoring",
      "Scalable AI infrastructure for growing workloads"
    ],
    technologies: ["MLflow", "Kubeflow", "Weights & Biases", "DVC", "Feast", "Seldon Core", "BentoML", "Ray", "SageMaker", "Vertex AI"],
    caseStudies: [
      {
        company: "FinTech Startup",
        industry: "Financial Services",
        challenge: "Data science team deploying models manually with no versioning, monitoring, or automated retraining — leading to model drift and inconsistent predictions.",
        solution: "Implemented end-to-end MLOps pipeline using MLflow, Kubeflow, and Seldon Core with automated drift detection and retraining triggers.",
        results: ["Model deployment time reduced from weeks to hours", "99.5% model uptime with automated monitoring", "30% improvement in prediction accuracy through continuous retraining"]
      }
    ],
    faqs: [
      { question: "What is MLOps?", answer: "MLOps (Machine Learning Operations) applies DevOps principles to machine learning — automating the end-to-end ML lifecycle from data preparation and model training to deployment, monitoring, and retraining." },
      { question: "Do we need MLOps if we only have a few models?", answer: "Even with a few models, MLOps practices like version control, automated testing, and monitoring prevent common issues like model drift, reproducibility failures, and deployment bottlenecks. The investment pays off quickly as your ML practice grows." }
    ]
  },
  {
    slug: "erp-management",
    name: "ERP Management & Implementation",
    shortDescription: "End-to-end ERP implementation, customization, and management for streamlined business operations.",
    fullDescription: "We provide comprehensive ERP management services covering implementation, customization, migration, and ongoing support. Whether you're deploying a new ERP system or optimizing an existing one, we ensure seamless integration with your business processes and maximize your return on investment.",
    icon: Building2,
    features: [
      "ERP implementation & deployment",
      "Custom module development & configuration",
      "ERP migration & data conversion",
      "Business process mapping & optimization",
      "Multi-site & multi-currency setup",
      "ERP performance tuning & optimization",
      "User training & change management",
      "Ongoing support & managed services"
    ],
    benefits: [
      "Streamlined business operations across departments",
      "Real-time visibility into financials & operations",
      "Reduced manual processes & data silos",
      "Improved decision-making with unified data"
    ],
    technologies: ["SAP S/4HANA", "Oracle ERP Cloud", "Microsoft Dynamics 365", "NetSuite", "Infor CloudSuite", "Workday", "Epicor", "Odoo", "Acumatica", "IFS"],
    caseStudies: [
      {
        company: "Manufacturing Enterprise",
        industry: "Manufacturing",
        challenge: "Operating on a 15-year-old legacy ERP with fragmented data across 8 plants and manual reconciliation processes.",
        solution: "Migrated to SAP S/4HANA with unified data model, automated inter-plant workflows, and real-time financial consolidation.",
        results: ["40% reduction in month-end close time", "Unified operations across 8 manufacturing plants", "Real-time inventory visibility reducing stockouts by 60%"]
      }
    ],
    faqs: [
      { question: "How long does an ERP implementation typically take?", answer: "Timelines vary by scope — a mid-size implementation typically takes 6-12 months, while large enterprises may require 12-24 months. We use phased rollouts to deliver value incrementally." },
      { question: "Can you integrate ERP with our existing systems?", answer: "Yes, we specialize in integrating ERPs with CRM, SCM, HR, e-commerce, and other enterprise systems using APIs, middleware, and iPaaS platforms." }
    ]
  },
  {
    slug: "crm-implementation",
    name: "CRM Implementation & Optimization",
    shortDescription: "Deploy and optimize CRM platforms to enhance customer relationships and drive revenue growth.",
    fullDescription: "We implement, customize, and optimize CRM solutions that align with your sales, marketing, and customer service strategies. From platform selection and data migration to workflow automation and analytics, we help you build a 360-degree view of your customers and maximize the value of every interaction.",
    icon: Users,
    features: [
      "CRM platform selection & implementation",
      "Sales pipeline & workflow automation",
      "Marketing automation integration",
      "Customer 360 & data unification",
      "Custom reporting & analytics dashboards",
      "Third-party app & API integrations",
      "Data migration & cleansing",
      "User adoption & training programs"
    ],
    benefits: [
      "360-degree customer visibility",
      "Increased sales productivity & conversion rates",
      "Automated marketing & lead nurturing workflows",
      "Data-driven customer engagement strategies"
    ],
    technologies: ["Salesforce", "HubSpot", "Microsoft Dynamics 365 CRM", "Zoho CRM", "Freshsales", "Pipedrive", "SugarCRM", "Monday CRM", "SAP CRM", "Oracle CX"],
    caseStudies: [
      {
        company: "B2B Technology Company",
        industry: "Technology",
        challenge: "Sales team using spreadsheets and disconnected tools, losing 30% of leads due to lack of follow-up and no pipeline visibility.",
        solution: "Implemented Salesforce with automated lead scoring, pipeline management, marketing automation integration, and custom dashboards.",
        results: ["45% increase in lead conversion rates", "Complete pipeline visibility for leadership", "20% revenue growth in first year post-implementation"]
      }
    ],
    faqs: [
      { question: "Which CRM platform do you recommend?", answer: "It depends on your needs — Salesforce for enterprise scale, HubSpot for marketing-heavy mid-market, Dynamics 365 for Microsoft-centric organizations. We evaluate your requirements before recommending." },
      { question: "How do you ensure CRM adoption?", answer: "We focus on user-centered design, role-based training, executive sponsorship, and measuring adoption KPIs. Poor adoption is the #1 reason CRM projects fail, so we prioritize it from day one." }
    ]
  },
  {
    slug: "enterprise-integration",
    name: "Enterprise Integration & Middleware",
    shortDescription: "Connect disparate systems with robust integration platforms, APIs, and middleware solutions.",
    fullDescription: "We design and implement enterprise integration architectures that connect your applications, data sources, and business processes into a cohesive ecosystem. From API management and ESB implementation to event-driven architectures and iPaaS solutions, we eliminate data silos and enable seamless information flow across your organization.",
    icon: Cable,
    features: [
      "Enterprise integration strategy & architecture",
      "API management & gateway implementation",
      "iPaaS (Integration Platform as a Service) setup",
      "Event-driven integration patterns",
      "ESB (Enterprise Service Bus) implementation",
      "B2B/EDI integration",
      "Data synchronization & real-time replication",
      "Integration monitoring & error handling"
    ],
    benefits: [
      "Eliminated data silos across the organization",
      "Real-time data flow between systems",
      "Reduced integration maintenance overhead",
      "Scalable architecture for future growth"
    ],
    technologies: ["MuleSoft", "Dell Boomi", "Workato", "Apache Kafka", "Azure Integration Services", "AWS EventBridge", "Informatica", "Talend", "IBM App Connect", "Kong Gateway"],
    caseStudies: [
      {
        company: "Retail Chain",
        industry: "Retail",
        challenge: "12 disconnected systems (POS, ERP, e-commerce, WMS) with manual data transfers causing 48-hour delays in inventory updates.",
        solution: "Implemented MuleSoft-based integration platform with real-time event-driven architecture connecting all systems.",
        results: ["Real-time inventory sync across all channels", "48-hour data delay eliminated", "50% reduction in integration maintenance effort"]
      }
    ],
    faqs: [
      { question: "What is iPaaS?", answer: "iPaaS (Integration Platform as a Service) is a cloud-based platform that enables organizations to connect applications, data, and processes without managing integration infrastructure. Examples include MuleSoft, Boomi, and Workato." },
      { question: "API-first vs ESB — which approach is better?", answer: "API-first is the modern standard for most integrations — it's more flexible, scalable, and developer-friendly. ESBs still have a role in complex legacy environments. We typically recommend API-first with event-driven patterns." }
    ]
  },
  {
    slug: "legacy-modernization",
    name: "Legacy Application Modernization",
    shortDescription: "Transform legacy enterprise applications into modern, scalable, and maintainable systems.",
    fullDescription: "We help organizations modernize aging enterprise applications through strategic approaches including re-platforming, refactoring, re-architecting, and cloud migration. We assess your legacy portfolio, define a modernization roadmap, and execute the transformation while minimizing business disruption and preserving critical business logic.",
    icon: RotateCcw,
    features: [
      "Legacy application assessment & portfolio analysis",
      "Modernization strategy & roadmap planning",
      "Monolith to microservices decomposition",
      "Re-platforming to cloud-native architectures",
      "Database modernization & migration",
      "UI/UX modernization for legacy interfaces",
      "Automated code conversion & refactoring",
      "Phased migration with zero-downtime cutover"
    ],
    benefits: [
      "Reduced technical debt & maintenance costs",
      "Improved system performance & scalability",
      "Enhanced agility for new feature development",
      "Extended application lifespan with modern architecture"
    ],
    technologies: ["Kubernetes", "Docker", "AWS App2Container", "Azure Migrate", "Strangler Fig Pattern", "Spring Boot", ".NET Core", "React", "PostgreSQL", "MongoDB"],
    caseStudies: [
      {
        company: "Insurance Corporation",
        industry: "Insurance",
        challenge: "Core policy management system built on COBOL mainframe — costly to maintain, impossible to integrate with modern digital channels.",
        solution: "Applied strangler fig pattern to incrementally modernize into microservices on Kubernetes while keeping the mainframe running during transition.",
        results: ["70% reduction in infrastructure costs", "New feature delivery accelerated from months to weeks", "Seamless integration with mobile app and partner portals"]
      }
    ],
    faqs: [
      { question: "Should we rewrite or refactor our legacy application?", answer: "It depends on the application's complexity, business value, and timeline. We use a 6R framework (Retain, Retire, Rehost, Replatform, Refactor, Rebuild) to determine the optimal approach for each application in your portfolio." },
      { question: "How do you minimize risk during modernization?", answer: "We use incremental approaches like the strangler fig pattern, maintain parallel systems during transition, implement comprehensive testing, and plan rollback strategies at every phase." }
    ]
  },
  {
    slug: "enterprise-mobility",
    name: "Enterprise Mobility Solutions",
    shortDescription: "Empower your workforce with secure mobile solutions, MDM, and enterprise app management.",
    fullDescription: "We deliver enterprise mobility solutions that enable your workforce to stay productive and connected from anywhere. From mobile device management and enterprise app deployment to secure mobile workspaces and BYOD policies, we help organizations embrace mobility while maintaining security and compliance.",
    icon: TabletSmartphone,
    features: [
      "Mobile Device Management (MDM/UEM)",
      "Enterprise mobile app development & deployment",
      "Secure mobile workspace & containerization",
      "BYOD policy design & implementation",
      "Mobile application management (MAM)",
      "Mobile security & threat defense",
      "Mobile analytics & usage monitoring",
      "Cross-platform enterprise app distribution"
    ],
    benefits: [
      "Secure, productive mobile workforce",
      "Unified endpoint management across devices",
      "Flexible BYOD with enterprise-grade security",
      "Streamlined enterprise app distribution"
    ],
    technologies: ["Microsoft Intune", "VMware Workspace ONE", "Jamf", "MobileIron", "Samsung Knox", "Citrix Endpoint Management", "IBM MaaS360", "Lookout", "Zimperium", "AppConfig"],
    caseStudies: [
      {
        company: "Healthcare System",
        industry: "Healthcare",
        challenge: "5,000+ clinicians using personal devices to access patient data with no security controls or compliance framework.",
        solution: "Deployed Microsoft Intune with BYOD containerization, conditional access policies, and HIPAA-compliant mobile workspace.",
        results: ["100% HIPAA compliance for mobile access", "5,000 devices enrolled and secured in 8 weeks", "Zero data breach incidents since deployment"]
      }
    ],
    faqs: [
      { question: "What is UEM and how does it differ from MDM?", answer: "UEM (Unified Endpoint Management) is the evolution of MDM — it manages not just mobile devices but all endpoints including laptops, desktops, IoT devices, and wearables from a single platform." },
      { question: "How do you handle BYOD security?", answer: "We implement containerization to separate work and personal data, conditional access policies, app-level VPN, remote wipe capabilities for corporate data only, and compliance-based access controls." }
    ]
  },
  {
    slug: "supply-chain-management",
    name: "Supply Chain Management Solutions",
    shortDescription: "Optimize end-to-end supply chain operations with intelligent planning, visibility, and automation.",
    fullDescription: "We implement and optimize supply chain management solutions that provide end-to-end visibility, demand forecasting, inventory optimization, and logistics automation. From warehouse management and procurement to last-mile delivery and supplier collaboration, we help organizations build resilient, efficient, and data-driven supply chains.",
    icon: Truck,
    features: [
      "Supply chain visibility & control tower",
      "Demand forecasting & planning",
      "Inventory optimization & management",
      "Warehouse Management System (WMS) implementation",
      "Procurement & supplier relationship management",
      "Logistics & transportation management",
      "Supply chain analytics & reporting",
      "Supply chain risk management & resilience"
    ],
    benefits: [
      "End-to-end supply chain visibility",
      "Reduced inventory carrying costs by 20-35%",
      "Improved demand forecast accuracy",
      "Faster order fulfillment & delivery"
    ],
    technologies: ["SAP SCM", "Oracle SCM Cloud", "Blue Yonder", "Kinaxis RapidResponse", "Manhattan Associates", "Coupa", "Anaplan", "o9 Solutions", "E2open", "FourKites"],
    caseStudies: [
      {
        company: "Consumer Goods Manufacturer",
        industry: "Consumer Goods",
        challenge: "Frequent stockouts and overstocking across 500+ SKUs due to inaccurate demand forecasting and fragmented supply chain visibility.",
        solution: "Implemented Blue Yonder demand planning with AI-driven forecasting, integrated with SAP for real-time inventory visibility across 12 distribution centers.",
        results: ["30% reduction in inventory carrying costs", "Stockout incidents reduced by 65%", "Demand forecast accuracy improved from 60% to 88%"]
      }
    ],
    faqs: [
      { question: "Can you integrate SCM with our existing ERP?", answer: "Yes, we specialize in integrating supply chain solutions with SAP, Oracle, Dynamics 365, and other ERPs. We ensure seamless data flow between procurement, inventory, manufacturing, and logistics modules." },
      { question: "How do you handle supply chain disruptions?", answer: "We implement risk management frameworks with real-time monitoring, alternative supplier networks, scenario planning tools, and AI-powered early warning systems to detect and respond to disruptions proactively." }
    ]
  },
  {
    slug: "enterprise-content-management",
    name: "Enterprise Content Management",
    shortDescription: "Manage, store, and govern enterprise content with intelligent document management and workflow automation.",
    fullDescription: "We implement enterprise content management solutions that help organizations capture, manage, store, and deliver content across the enterprise. From document management and records retention to intelligent content processing and workflow automation, we enable digital-first operations with proper governance and compliance.",
    icon: FileStack,
    features: [
      "Document management & digital archiving",
      "Intelligent document processing (IDP)",
      "Records management & retention policies",
      "Content workflow automation",
      "Enterprise search & knowledge discovery",
      "Digital signature & e-forms",
      "Compliance & regulatory document management",
      "Content migration & consolidation"
    ],
    benefits: [
      "Eliminated paper-based processes",
      "Faster document retrieval & processing",
      "Regulatory compliance with audit trails",
      "Reduced storage costs & content sprawl"
    ],
    technologies: ["SharePoint", "OpenText", "Hyland OnBase", "Box", "M-Files", "DocuSign", "ABBYY", "Laserfiche", "Alfresco", "Google Workspace"],
    caseStudies: [
      {
        company: "Government Department",
        industry: "Public Sector",
        challenge: "Processing 50,000+ paper documents monthly with manual data entry, 5-day average processing time, and no digital audit trail.",
        solution: "Deployed intelligent document processing with ABBYY and Hyland OnBase, automating capture, classification, and routing with digital workflows.",
        results: ["Document processing time reduced from 5 days to 4 hours", "95% automated data extraction accuracy", "Complete digital audit trail for compliance"]
      }
    ],
    faqs: [
      { question: "How do you handle legacy document migration?", answer: "We develop a phased migration strategy that includes document inventory, metadata mapping, quality validation, and parallel running. We support migration from file shares, legacy DMS systems, and even physical paper archives." },
      { question: "Can you integrate ECM with our existing business applications?", answer: "Yes, we integrate with ERP, CRM, HR, and other enterprise systems to embed content management directly into business processes, eliminating context switching and manual document handling." }
    ]
  },
  {
    slug: "data-governance",
    name: "Data Governance & Quality",
    shortDescription: "Establish data governance frameworks that ensure data accuracy, consistency, and regulatory compliance.",
    fullDescription: "We implement comprehensive data governance programs that define ownership, policies, standards, and processes to ensure your data is accurate, consistent, secure, and compliant. From data cataloging and lineage to quality monitoring and stewardship, we help organizations treat data as a strategic asset.",
    icon: BookCheck,
    features: [
      "Data governance framework & policy design",
      "Data catalog & metadata management",
      "Data lineage & impact analysis",
      "Data quality profiling & monitoring",
      "Data stewardship & ownership models",
      "Master data management (MDM)",
      "Regulatory compliance (GDPR, CCPA, HIPAA)",
      "Data literacy & training programs"
    ],
    benefits: [
      "Trusted, high-quality data across the organization",
      "Regulatory compliance with audit-ready documentation",
      "Clear data ownership & accountability",
      "Reduced data-related errors & rework"
    ],
    technologies: ["Collibra", "Alation", "Informatica Data Governance", "Atlan", "Apache Atlas", "Great Expectations", "Monte Carlo", "Talend Data Quality", "IBM InfoSphere", "Microsoft Purview"],
    caseStudies: [
      {
        company: "Banking Institution",
        industry: "Financial Services",
        challenge: "No centralized data catalog, inconsistent data definitions across departments, and GDPR compliance gaps threatening regulatory penalties.",
        solution: "Implemented Collibra-based data governance platform with automated data lineage, quality rules, and stewardship workflows across 50+ data domains.",
        results: ["Full GDPR compliance achieved in 6 months", "90% of critical data assets cataloged & governed", "40% reduction in data quality incidents"]
      }
    ],
    faqs: [
      { question: "How long does it take to implement a data governance program?", answer: "A foundational framework can be established in 3-6 months, but data governance is an ongoing discipline. We recommend starting with high-priority domains and expanding iteratively." },
      { question: "What is the difference between data governance and data management?", answer: "Data governance defines the policies, standards, and accountability for data. Data management is the execution — the tools and processes used to collect, store, and maintain data according to governance policies." }
    ]
  },
  {
    slug: "data-warehousing",
    name: "Data Warehousing & Data Lakes",
    shortDescription: "Design and implement modern data warehouses and data lakes for scalable analytics and reporting.",
    fullDescription: "We design and build modern data warehousing and data lake solutions that centralize your data for analytics, reporting, and AI/ML workloads. From cloud-native data warehouses and lakehouse architectures to data modeling and performance optimization, we create the data foundation that powers your business intelligence and advanced analytics initiatives.",
    icon: Warehouse,
    features: [
      "Cloud data warehouse design & implementation",
      "Data lake & lakehouse architecture",
      "Dimensional data modeling (star/snowflake)",
      "Data vault 2.0 modeling",
      "Real-time & batch data ingestion",
      "Query performance optimization",
      "Data partitioning & clustering strategies",
      "Cost optimization for cloud storage & compute"
    ],
    benefits: [
      "Centralized, single source of truth for analytics",
      "Scalable architecture for growing data volumes",
      "Faster query performance & report generation",
      "Reduced data infrastructure costs"
    ],
    technologies: ["Snowflake", "Databricks", "Google BigQuery", "Amazon Redshift", "Azure Synapse", "Apache Iceberg", "Delta Lake", "dbt", "Apache Spark", "Fivetran"],
    caseStudies: [
      {
        company: "E-Commerce Company",
        industry: "Retail",
        challenge: "Analytics running on a legacy on-premise data warehouse with 8-hour report refresh cycles and inability to handle growing data volumes.",
        solution: "Migrated to Snowflake with a lakehouse architecture using dbt for transformations and Fivetran for automated ingestion from 30+ sources.",
        results: ["Report refresh reduced from 8 hours to 15 minutes", "10x data volume capacity with elastic scaling", "60% reduction in annual data infrastructure costs"]
      }
    ],
    faqs: [
      { question: "Data warehouse vs. data lake — which do we need?", answer: "Data warehouses are best for structured data and BI reporting. Data lakes handle all data types (structured, semi-structured, unstructured) at scale. Modern lakehouse architectures combine the best of both. We recommend the right approach based on your use cases." },
      { question: "Should we choose Snowflake, Databricks, or BigQuery?", answer: "Each has strengths — Snowflake excels at SQL analytics and data sharing, Databricks is ideal for AI/ML + analytics workloads, and BigQuery offers serverless simplicity for Google-centric orgs. We evaluate your specific needs before recommending." }
    ]
  },
  {
    slug: "etl-data-pipelines",
    name: "ETL & Data Pipelines",
    shortDescription: "Build reliable, scalable data pipelines for extracting, transforming, and loading data across systems.",
    fullDescription: "We design and implement robust ETL/ELT data pipelines that move data reliably across your ecosystem. From batch and real-time ingestion to complex transformations and orchestration, we build data pipelines that are scalable, observable, and maintainable — ensuring your downstream analytics and applications always have fresh, accurate data.",
    icon: ArrowRightLeft,
    features: [
      "ETL/ELT pipeline design & development",
      "Real-time streaming data pipelines",
      "Batch processing & scheduling",
      "Data transformation & cleansing",
      "Pipeline orchestration & dependency management",
      "Schema evolution & change data capture (CDC)",
      "Data pipeline monitoring & alerting",
      "Self-service data integration for analysts"
    ],
    benefits: [
      "Reliable, automated data delivery",
      "Fresh data for real-time analytics & dashboards",
      "Reduced manual data processing effort",
      "Scalable pipelines for growing data volumes"
    ],
    technologies: ["Apache Airflow", "dbt", "Fivetran", "Airbyte", "Apache Kafka", "Spark Structured Streaming", "Prefect", "Dagster", "AWS Glue", "Azure Data Factory"],
    caseStudies: [
      {
        company: "AdTech Platform",
        industry: "Advertising Technology",
        challenge: "Processing 2 billion daily ad events with fragile, manually maintained ETL scripts causing frequent data outages and stale dashboards.",
        solution: "Rebuilt pipelines using Apache Kafka for real-time streaming, dbt for transformations, and Dagster for orchestration with full observability.",
        results: ["Zero data pipeline outages in 12 months", "Real-time data freshness (< 5 min latency)", "Pipeline development time reduced by 70%"]
      }
    ],
    faqs: [
      { question: "ETL vs ELT — which approach should we use?", answer: "ELT (Extract, Load, Transform) is the modern standard for cloud data warehouses — it loads raw data first, then transforms in the warehouse using tools like dbt. ETL is still relevant for legacy systems or when transformations need to happen before loading." },
      { question: "How do you handle data pipeline failures?", answer: "We implement idempotent pipelines with retry logic, dead-letter queues, comprehensive alerting, data quality checks at each stage, and automated rollback capabilities to ensure reliability." }
    ]
  }
  {
    slug: "procurement-services",
    name: "IT Procurement Services",
    shortDescription: "Strategic sourcing and procurement of technology products, services, and solutions at competitive prices.",
    fullDescription: "Our IT Procurement Services streamline the acquisition of hardware, software, and technology services through strategic vendor partnerships, competitive bidding, and centralized purchasing. We leverage volume discounts, negotiate favorable terms, and manage the entire procurement lifecycle — from requirements gathering and vendor evaluation to purchase order management and delivery coordination.",
    icon: ShoppingCart,
    features: [
      "Strategic vendor evaluation and selection",
      "Volume discount negotiation and cost optimization",
      "Purchase order management and tracking",
      "Vendor relationship management",
      "Contract negotiation and compliance",
      "Asset lifecycle planning and budgeting"
    ],
    benefits: [
      "Reduce procurement costs by 15–30% through volume leverage",
      "Streamline purchasing workflows and approval processes",
      "Access to preferred pricing from top-tier technology vendors",
      "Ensure compliance with organizational procurement policies",
      "Reduce time-to-delivery for critical technology purchases",
      "Centralized visibility into all IT spending"
    ],
    technologies: ["SAP Ariba", "Coupa", "Oracle Procurement Cloud", "Jaggaer", "ServiceNow ITAM", "Ivalua"],
    caseStudies: [
      {
        company: "National Retail Chain",
        industry: "Retail",
        challenge: "Decentralized purchasing across 200+ locations led to inconsistent pricing and vendor sprawl.",
        solution: "Implemented a centralized procurement platform with pre-negotiated vendor catalogs and automated approval workflows.",
        results: ["22% reduction in IT procurement costs", "60% faster purchase-to-delivery cycle", "Consolidated vendor base from 150+ to 40 preferred partners"]
      }
    ],
    faqs: [
      { question: "How do you negotiate better pricing?", answer: "We aggregate demand across clients and leverage long-standing vendor partnerships to secure volume discounts, enterprise pricing tiers, and favorable contract terms that individual organizations typically cannot access." },
      { question: "Do you handle international procurement?", answer: "Yes, we manage global procurement including import/export compliance, currency management, regional vendor sourcing, and logistics coordination for multinational deployments." }
    ]
  },
  {
    slug: "software-licensing",
    name: "Software Licensing Management",
    shortDescription: "Comprehensive software license management, optimization, and compliance services.",
    fullDescription: "Our Software Licensing Management services help organizations optimize their software investments, ensure license compliance, and reduce costs. We provide end-to-end license lifecycle management — from initial assessment and right-sizing to renewal negotiation and ongoing compliance monitoring. Our experts navigate complex licensing models across major vendors including Microsoft, Oracle, SAP, Adobe, and more.",
    icon: FileText,
    features: [
      "Software asset inventory and discovery",
      "License compliance auditing and remediation",
      "Renewal management and negotiation",
      "Cloud subscription optimization (SaaS, IaaS, PaaS)",
      "True-up and reconciliation support",
      "Licensing model advisory (perpetual, subscription, hybrid)"
    ],
    benefits: [
      "Avoid costly audit penalties and compliance fines",
      "Reduce software spend by 20–35% through right-sizing",
      "Eliminate shelfware and unused license waste",
      "Proactive renewal management prevents lapses",
      "Expert guidance on complex enterprise licensing agreements",
      "Full visibility into software entitlements and usage"
    ],
    technologies: ["Flexera", "Snow Software", "ServiceNow SAM", "Zylo", "Aspera SmartTrack", "Microsoft VLSC"],
    caseStudies: [
      {
        company: "Global Financial Institution",
        industry: "Financial Services",
        challenge: "Facing a major vendor audit with no visibility into actual license usage across 15,000 endpoints.",
        solution: "Deployed automated discovery tools, reconciled entitlements, and negotiated a compliant position with the vendor before the audit deadline.",
        results: ["Avoided $4.2M in potential audit penalties", "Identified $1.8M in unused licenses for reallocation", "Established ongoing compliance monitoring program"]
      }
    ],
    faqs: [
      { question: "How do you handle cloud and SaaS licensing?", answer: "We monitor SaaS subscription usage, identify underutilized seats, optimize tier selections, and manage renewals to ensure you're only paying for what you actually use across platforms like Microsoft 365, Salesforce, and Adobe Creative Cloud." },
      { question: "Can you help with vendor audit defense?", answer: "Absolutely. We provide pre-audit assessments, license position analysis, remediation planning, and direct negotiation support to minimize exposure and achieve the best possible outcome during vendor audits." }
    ]
  },
  {
    slug: "bulk-hardware-services",
    name: "Bulk Hardware Services",
    shortDescription: "Large-scale hardware procurement, deployment, and lifecycle management for enterprise environments.",
    fullDescription: "Our Bulk Hardware Services provide end-to-end management of large-scale hardware acquisitions — from sourcing and configuration to deployment, maintenance, and end-of-life disposal. Whether you're refreshing thousands of endpoints, building out data center infrastructure, or equipping a new office, we handle logistics, imaging, staging, and rollout with precision and efficiency.",
    icon: HardDrive,
    features: [
      "Bulk hardware sourcing and competitive bidding",
      "Pre-configured imaging and staging services",
      "Large-scale deployment and rollout management",
      "Hardware lifecycle and warranty management",
      "Asset tagging, tracking, and inventory management",
      "Certified IT asset disposal (ITAD) and recycling"
    ],
    benefits: [
      "Significant volume discounts on enterprise hardware",
      "Reduced deployment time with pre-staging and imaging",
      "Simplified logistics for multi-site rollouts",
      "Extend hardware lifespan with proactive maintenance programs",
      "Environmentally responsible disposal and recycling",
      "Single point of contact for all hardware needs"
    ],
    technologies: ["Dell Technologies", "HP Enterprise", "Lenovo", "Cisco", "SCCM/Intune", "ManageEngine"],
    caseStudies: [
      {
        company: "Healthcare Network",
        industry: "Healthcare",
        challenge: "Needed to deploy 8,000 new workstations across 45 clinical locations within a 90-day window during an EMR migration.",
        solution: "Coordinated bulk procurement, centralized imaging facility, and phased rollout with minimal disruption to clinical operations.",
        results: ["8,000 workstations deployed in 78 days", "Zero unplanned clinical downtime during rollout", "18% cost savings vs. individual site procurement"]
      }
    ],
    faqs: [
      { question: "What hardware brands do you support?", answer: "We partner with all major enterprise hardware manufacturers including Dell, HP, Lenovo, Cisco, Apple, and others. We're vendor-agnostic and recommend the best fit based on your requirements, budget, and existing environment." },
      { question: "How do you handle hardware disposal?", answer: "We provide certified IT Asset Disposal (ITAD) services including data sanitization (DoD 5220.22-M or NIST 800-88 compliant), certified destruction when required, environmentally responsible recycling, and full chain-of-custody documentation." }
    ]
  }
];

export const getSolutionBySlug = (slug: string): SolutionDetail | undefined => {
  return solutionsData.find(s => s.slug === slug);
};
