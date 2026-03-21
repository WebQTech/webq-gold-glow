import {
  Code2, Cloud, Server, RefreshCw, TestTube, Headphones, Settings, Database,
  Gauge, Network, GitBranch, Container, Zap, Shield, Wrench, ClipboardList,
  BarChart3, Brain, Smartphone, Plug, Lock, ShieldCheck, FileCode, CloudCog, KeyRound,
  ShieldAlert, Scale, LucideIcon
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
  }
];

export const getSolutionBySlug = (slug: string): SolutionDetail | undefined => {
  return solutionsData.find(s => s.slug === slug);
};
