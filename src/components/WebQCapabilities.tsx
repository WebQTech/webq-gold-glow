import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Brain, Cloud, Code2, Database, Shield, Server,
  Settings, TestTube, ArrowRight,
} from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    summary: "Custom ML models, generative AI, predictive analytics, and intelligent automation — turning data into competitive advantage.",
    link: "/solutions/ai-machine-learning",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    summary: "Strategy, migration, refactoring, and managed cloud services across AWS, Azure, and GCP at enterprise scale.",
    link: "/solutions/cloud-services",
  },
  {
    icon: Code2,
    title: "Application Development",
    summary: "Full-cycle custom software — web, mobile, and enterprise platforms built for performance, scalability, and longevity.",
    link: "/solutions/custom-app-development",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    summary: "Pipelines, warehousing, BI dashboards, real-time streaming, and governance — from raw data to business intelligence.",
    link: "/solutions/data-analytics",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    summary: "Zero-trust architecture, threat detection, compliance frameworks, and risk management to protect your enterprise.",
    link: "/solutions/security",
  },
  {
    icon: Settings,
    title: "DevOps & SRE",
    summary: "CI/CD pipelines, infrastructure as code, Kubernetes orchestration, observability, and site reliability engineering.",
    link: "/solutions/devops-sre",
  },
  {
    icon: Server,
    title: "Enterprise Application Management",
    summary: "Salesforce, ServiceNow, SAP — implementation, customization, integration, and ongoing managed support.",
    link: "/solutions/enterprise-application-management",
  },
  {
    icon: TestTube,
    title: "Quality Assurance & Testing",
    summary: "Automated testing pipelines, performance engineering, security testing, and comprehensive QA strategies.",
    link: "/solutions/qa-testing",
  },
];

export const WebQCapabilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Our Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Everything You Need to{" "}
            <span className="text-primary">Modernize & Scale</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Eight core practice areas. One integrated team. We don't just advise — we engineer,
            deploy, and operate the technology that drives your business forward.
          </p>
        </div>

        {/* Capability Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.06 * i }}
              >
                <Link
                  to={cap.link}
                  className="group block h-full p-6 bg-card rounded-xl border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cap.summary}
                  </p>
                  <ArrowRight className="w-4 h-4 mt-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Explore links */}
        <div className="flex flex-wrap gap-6 justify-center text-sm">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Explore All Solutions <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/technologies"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Technologies We Use <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Professional Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
