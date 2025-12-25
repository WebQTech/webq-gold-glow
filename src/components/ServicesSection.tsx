import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, X, Code2, Cloud, Server, RefreshCw, TestTube, Headphones, Settings, Database } from "lucide-react";

const services = [
  {
    number: "01",
    name: "Custom Software Development",
    description: "Full-cycle development tailored to your needs",
    icon: Code2,
    details: [
      "Full-cycle development from requirements to deployment",
      "Technology stack selection (React, Node, Python, .NET, etc.)",
      "API design and third-party integrations",
      "Legacy system modernization and code refactoring",
      "Dedicated teams with transparent project management"
    ]
  },
  {
    number: "02",
    name: "Cloud Migration & Deployment",
    description: "Legacy to cloud across public, private & hybrid",
    icon: Cloud,
    details: [
      "Migration readiness assessment",
      "Lift-and-shift, re-platforming, or re-architecture strategies",
      "AWS, Azure, and Google Cloud expertise",
      "Zero-downtime migration execution",
      "Post-migration cost optimization"
    ]
  },
  {
    number: "03",
    name: "IT Infrastructure Management",
    description: "Networks, servers & systems for uptime & scalability",
    icon: Server,
    details: [
      "24/7 infrastructure monitoring and alerting",
      "Server, network, and database administration",
      "Capacity planning and performance optimization",
      "Backup, disaster recovery, and business continuity",
      "Vendor management and procurement"
    ]
  },
  {
    number: "04",
    name: "Technology Modernization",
    description: "Transform legacy systems into scalable applications",
    icon: RefreshCw,
    details: [
      "Legacy application assessment and roadmap",
      "Monolith to microservices transformation",
      "Database migration and optimization",
      "Containerization with Docker and Kubernetes",
      "CI/CD pipeline implementation"
    ]
  },
  {
    number: "05",
    name: "Quality Assurance & Test Automation",
    description: "Comprehensive testing strategies & automation",
    icon: TestTube,
    details: [
      "Manual and automated testing strategies",
      "Test framework design (Selenium, Cypress, Playwright)",
      "CI/CD integrated continuous testing",
      "Performance, security, and load testing",
      "UAT coordination and defect tracking"
    ]
  },
  {
    number: "06",
    name: "Production Support & Monitoring",
    description: "24/7 oversight, incident response & optimization",
    icon: Headphones,
    details: [
      "24/7 application and infrastructure monitoring",
      "Real-time alerting and incident management",
      "Root cause analysis and post-incident reviews",
      "SLA management and uptime guarantees",
      "Proactive performance tuning"
    ]
  },
  {
    number: "07",
    name: "DevOps & Site Reliability Engineering",
    description: "CI/CD pipelines, IaC & observability solutions",
    icon: Settings,
    details: [
      "CI/CD pipeline design (Jenkins, GitHub Actions, GitLab CI)",
      "Infrastructure as Code (Terraform, Ansible, CloudFormation)",
      "Kubernetes orchestration and container management",
      "Observability: logging, metrics, tracing (Datadog, Prometheus, Grafana)",
      "SLO/SLI definition and reliability improvements"
    ]
  },
  {
    number: "08",
    name: "Data Engineering & Analytics",
    description: "Data pipelines, warehousing & business intelligence",
    icon: Database,
    details: [
      "Data pipeline architecture and ETL processes",
      "Data warehouse design (Snowflake, BigQuery, Redshift)",
      "Business intelligence dashboards and reporting",
      "Real-time data streaming and processing",
      "Data governance and quality management"
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
        className={`relative p-4 rounded-xl border transition-all duration-300 ${
          isExpanded 
            ? 'bg-white border-primary/30 shadow-xl shadow-primary/10' 
            : 'bg-white/50 border-navy/5 hover:bg-white hover:border-primary/20 hover:shadow-lg'
        }`}
        animate={{
          scale: isExpanded ? 1.02 : 1,
          y: isExpanded ? -4 : 0,
        }}
        whileHover={!isExpanded ? {
          scale: 1.01,
          y: -2,
          boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
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
        <div className="flex items-start gap-3">
          {/* Number & Icon */}
          <div className="flex flex-col items-center gap-1">
            <span className={`text-[10px] font-medium transition-colors ${
              isExpanded ? 'text-primary' : 'text-navy/30'
            }`}>
              {service.number}
            </span>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isExpanded 
                ? 'bg-primary text-white' 
                : 'bg-primary/10 text-primary'
            }`}>
              <Icon className="w-4 h-4" strokeWidth={1.5} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className={`text-base md:text-lg font-semibold transition-colors ${
                  isExpanded ? 'text-primary' : 'text-navy'
                }`}>
                  {service.name}
                </h3>
                <p className="text-sm text-navy/50 mt-0.5 line-clamp-1">
                  {service.description}
                </p>
              </div>

              {/* Expand/Collapse indicator */}
              <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                isExpanded 
                  ? 'bg-navy/10 rotate-0' 
                  : 'bg-primary/10'
              }`}>
                {isExpanded ? (
                  <X className="w-3 h-3 text-navy" />
                ) : (
                  <ArrowRight className="w-3 h-3 text-primary" />
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
    <section id="solutions" ref={ref} className="py-10 lg:py-12 scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-8">
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
            className="mt-3 text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-navy"
          >
            Full-stack enterprise{" "}
            <span className="font-serif italic text-primary">technology.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-sm text-navy/55"
          >
            End-to-end services from development to deployment, monitoring, and continuous improvement.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div ref={sectionRef} className="grid md:grid-cols-2 gap-3">
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
