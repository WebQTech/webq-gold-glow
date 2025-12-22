import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, X, Code2, Cloud, Brain, Server, Shield, RefreshCw, TestTube, Headphones, FlaskConical, Settings } from "lucide-react";

const services = [
  {
    number: "01",
    name: "Custom Software Development",
    description: "Bespoke solutions tailored to unique operational needs",
    icon: Code2,
    details: [
      "Full-cycle development from requirements gathering to deployment",
      "Technology stack selection based on your specific needs (React, Node, Python, .NET, etc.)",
      "API design and third-party integrations",
      "Legacy system modernization and code refactoring",
      "Dedicated development teams with transparent project management"
    ]
  },
  {
    number: "02",
    name: "Cloud Migration & Deployment",
    description: "Legacy to cloud across public, private & hybrid",
    icon: Cloud,
    details: [
      "Assessment of current infrastructure and migration readiness",
      "Lift-and-shift, re-platforming, or full re-architecture strategies",
      "AWS, Azure, and Google Cloud expertise",
      "Zero-downtime migration planning and execution",
      "Cost optimization and resource right-sizing post-migration"
    ]
  },
  {
    number: "03",
    name: "AI-Powered Solutions",
    description: "Machine learning, predictive analytics & automation",
    icon: Brain,
    details: [
      "Custom machine learning model development and training",
      "Computer vision, NLP, and predictive analytics implementations",
      "AI integration into existing workflows and applications",
      "Data pipeline setup for model training and inference",
      "Ongoing model monitoring, retraining, and performance tuning"
    ]
  },
  {
    number: "04",
    name: "IT Infrastructure Management",
    description: "Networks, servers & systems for uptime & scalability",
    icon: Server,
    details: [
      "24/7 infrastructure monitoring and alerting",
      "Server, network, and database administration",
      "Capacity planning and performance optimization",
      "Backup, disaster recovery, and business continuity planning",
      "Vendor management and hardware/software procurement"
    ]
  },
  {
    number: "05",
    name: "Cybersecurity & Compliance",
    description: "Threat mitigation & regulatory compliance",
    icon: Shield,
    details: [
      "Vulnerability assessments and penetration testing",
      "Security architecture design and implementation",
      "Compliance readiness: SOC2, HIPAA, GDPR, PCI-DSS",
      "Identity and access management (IAM) setup",
      "Security incident response planning and execution"
    ]
  },
  {
    number: "06",
    name: "Technology Modernization",
    description: "Transform legacy systems into scalable applications",
    icon: RefreshCw,
    details: [
      "Legacy application assessment and modernization roadmap",
      "Monolith to microservices architecture transformation",
      "Database migration and optimization (SQL to NoSQL, cloud databases)",
      "Containerization with Docker and Kubernetes",
      "CI/CD pipeline implementation for faster releases"
    ]
  },
  {
    number: "07",
    name: "Quality Assurance & Testing",
    description: "AI-based testing, data quality & validation",
    icon: TestTube,
    details: [
      "Manual and exploratory testing for edge cases",
      "Performance and load testing under real-world conditions",
      "Security testing and vulnerability scanning",
      "User acceptance testing (UAT) coordination",
      "Test documentation and defect tracking"
    ]
  },
  {
    number: "08",
    name: "Production Support & Monitoring",
    description: "24/7 oversight, incident response & optimization",
    icon: Headphones,
    details: [
      "24/7 application and infrastructure monitoring",
      "Real-time alerting and incident management",
      "Root cause analysis and post-incident reviews",
      "SLA management and uptime guarantees",
      "Proactive performance tuning and optimization"
    ]
  },
  {
    number: "09",
    name: "Test Automation Solutions",
    description: "Automated testing frameworks & CI/CD integration",
    icon: FlaskConical,
    details: [
      "Automated test framework design and implementation (Selenium, Cypress, Playwright)",
      "API testing automation with Postman, REST Assured",
      "CI/CD integration for continuous testing on every build",
      "Mobile app testing automation (Appium, XCUITest, Espresso)",
      "Test coverage analysis and reporting dashboards"
    ]
  },
  {
    number: "10",
    name: "DevOps & Site Reliability Engineering",
    description: "CI/CD pipelines, IaC & observability solutions",
    icon: Settings,
    details: [
      "CI/CD pipeline design and automation (Jenkins, GitHub Actions, GitLab CI)",
      "Infrastructure as Code with Terraform, Ansible, CloudFormation",
      "Kubernetes orchestration and container management",
      "Observability stack setup: logging, metrics, tracing (Datadog, Prometheus, Grafana)",
      "SLO/SLI definition, error budgets, and reliability improvements"
    ]
  },
];

const ServiceCard = ({ 
  service, 
  index, 
  isExpanded, 
  onToggle, 
  isInView 
}: { 
  service: typeof services[0]; 
  index: number; 
  isExpanded: boolean; 
  onToggle: () => void;
  isInView: boolean;
}) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
      onClick={onToggle}
      className="cursor-pointer"
      style={{ perspective: '1000px' }}
      data-service-card
    >
      <motion.div
        className={`relative p-5 md:p-6 rounded-2xl border transition-all duration-300 ${
          isExpanded 
            ? 'bg-white border-primary/30 shadow-xl shadow-primary/10' 
            : 'bg-white/50 border-navy/5 hover:bg-white hover:border-primary/20 hover:shadow-lg'
        }`}
        animate={{
          scale: isExpanded ? 1.02 : 1,
          z: isExpanded ? 50 : 0,
        }}
        whileHover={!isExpanded ? {
          scale: 1.01,
          rotateX: -1,
          rotateY: 1,
          z: 10,
        } : {}}
        transition={{ 
          duration: 0.3, 
          ease: [0.23, 1, 0.32, 1]
        }}
        style={{ 
          transformStyle: 'preserve-3d',
          zIndex: isExpanded ? 50 : 1,
        }}
      >
        {/* Main row content */}
        <div className="flex items-start gap-4 md:gap-6">
          {/* Number & Icon */}
          <div className="flex flex-col items-center gap-2">
            <span className={`text-xs font-medium transition-colors ${
              isExpanded ? 'text-primary' : 'text-navy/30'
            }`}>
              {service.number}
            </span>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isExpanded 
                ? 'bg-primary text-white' 
                : 'bg-primary/10 text-primary'
            }`}>
              <Icon className="w-5 h-5" strokeWidth={1.5} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className={`text-base md:text-lg font-semibold transition-colors ${
                  isExpanded ? 'text-primary' : 'text-navy'
                }`}>
                  {service.name}
                </h3>
                <p className="text-sm text-navy/50 mt-1">
                  {service.description}
                </p>
              </div>

              {/* Expand/Collapse indicator */}
              <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isExpanded 
                  ? 'bg-navy/10 rotate-0' 
                  : 'bg-primary/10 group-hover:bg-primary/20'
              }`}>
                {isExpanded ? (
                  <X className="w-4 h-4 text-navy" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-primary" />
                )}
              </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-navy/10">
                    <ul className="space-y-3">
                      {service.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                          className="flex items-start gap-3 text-sm text-navy/70"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const ref = useRef(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (expandedIndex !== null && sectionRef.current) {
        const target = event.target as Node;
        const cards = sectionRef.current.querySelectorAll('[data-service-card]');
        let clickedOnCard = false;
        cards.forEach(card => {
          if (card.contains(target)) clickedOnCard = true;
        });
        if (!clickedOnCard) {
          setExpandedIndex(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [expandedIndex]);

  return (
    <section id="solutions" ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            Solutions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-navy"
          >
            Full-stack enterprise{" "}
            <span className="font-serif italic text-primary">technology.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-navy/55"
          >
            End-to-end services from development to deployment, monitoring, and continuous improvement.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div ref={sectionRef} className="grid md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
