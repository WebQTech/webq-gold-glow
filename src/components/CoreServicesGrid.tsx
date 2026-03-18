import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Cpu, Cloud, Code2, Server, Shield, Database } from "lucide-react";

const coreServices = [
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Custom ML models, predictive analytics, generative AI, and intelligent automation to capture opportunities in your data.",
    link: "/services/ai-machine-learning",
    color: "hsl(210 100% 35%)",
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Full-cycle development from requirements to deployment. Technology stack selection, API design, and legacy modernization.",
    link: "/services",
    color: "hsl(210 100% 35%)",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "From strategy and planning to migration, refactoring, modernization, and support — unlock the potential of the cloud.",
    link: "/services",
    color: "hsl(210 100% 35%)",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Data pipelines, warehousing, BI dashboards, streaming, and governance. Turn your data into actionable business intelligence.",
    link: "/services",
    color: "hsl(210 100% 35%)",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Threat detection, compliance frameworks, risk assessment, and security architecture to protect your enterprise.",
    link: "/services",
    color: "hsl(210 100% 35%)",
  },
  {
    icon: Server,
    title: "Managed Services",
    description: "24/7 monitoring, production support, DevOps, and site reliability engineering. We keep your systems running at peak.",
    link: "/services",
    color: "hsl(210 100% 35%)",
  },
];

export const CoreServicesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * index }}
              >
                <Link to={service.link} className="group block">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
