import { ArrowRight, Code2, Cloud, Server, RefreshCw, TestTube, Headphones, Settings, Database } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const solutions = [
  {
    number: "01",
    name: "Custom Software Development",
    description: "Tailored web, mobile, and enterprise applications built for your unique business needs.",
    slug: "custom-app-development",
    icon: Code2,
  },
  {
    number: "02",
    name: "Cloud Migration & Deployment",
    description: "Seamless transition from legacy systems to modern, scalable cloud infrastructure.",
    slug: "cloud-migration",
    icon: Cloud,
  },
  {
    number: "03",
    name: "IT Infrastructure Management",
    description: "End-to-end monitoring, management, and optimization of your technology infrastructure.",
    slug: "it-infrastructure",
    icon: Server,
  },
  {
    number: "04",
    name: "Technology Modernization",
    description: "Transform legacy systems into modern, maintainable, and high-performing platforms.",
    slug: "technology-modernization",
    icon: RefreshCw,
  },
  {
    number: "05",
    name: "Quality Assurance & Test Automation",
    description: "Comprehensive QA strategies with automated testing pipelines for reliable releases.",
    slug: "qa-testing",
    icon: TestTube,
  },
  {
    number: "06",
    name: "Production Support & Monitoring",
    description: "24/7 application monitoring, incident management, and performance optimization.",
    slug: "production-support",
    icon: Headphones,
  },
  {
    number: "07",
    name: "DevOps & Site Reliability Engineering",
    description: "CI/CD pipelines, infrastructure as code, Kubernetes, and observability at scale.",
    slug: "devops-sre",
    icon: Settings,
  },
  {
    number: "08",
    name: "Data Engineering & Analytics",
    description: "Data pipelines, warehousing, BI dashboards, streaming, and governance solutions.",
    slug: "data-analytics",
    icon: Database,
  },
];

export const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 bg-background scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-2">
            What We Deliver
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Solutions
          </h2>
        </motion.div>

        <div className="divide-y divide-border">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                to={`/services/${solution.slug}`}
                className="group flex items-center gap-6 py-5 px-4 -mx-4 rounded-lg transition-all duration-300 hover:bg-muted hover:pl-8"
              >
                <span className="text-sm font-mono font-bold text-primary opacity-60 group-hover:opacity-100 transition-opacity w-8 shrink-0">
                  {solution.number}
                </span>
                <solution.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {solution.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5 hidden sm:block">
                    {solution.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
