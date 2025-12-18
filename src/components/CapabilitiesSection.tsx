import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, RefreshCw, Shield, BarChart3, Zap, Link } from "lucide-react";

const capabilities = [
  {
    icon: Rocket,
    title: "Automation & Efficiency",
    description: "Intelligent applications that enable automation, efficiency, and differentiation.",
  },
  {
    icon: RefreshCw,
    title: "Change Management",
    description: "Structured governance for code changes, version control, and release cycles.",
  },
  {
    icon: Shield,
    title: "Security Architecture",
    description: "Robust security for networks, cloud instances, applications, and data encryption.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Machine learning and predictive analytics to drive smarter decisions.",
  },
  {
    icon: Zap,
    title: "Real-time Monitoring",
    description: "Continuous system monitoring, incident response, and performance tuning.",
  },
  {
    icon: Link,
    title: "Seamless Integration",
    description: "Integrated approach ensuring alignment between business goals and technical execution.",
  },
];

export const CapabilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="capabilities" ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            Core Capabilities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-navy"
          >
            What sets us{" "}
            <span className="font-serif italic text-primary">apart.</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="capability-item"
            >
              <capability.icon className="capability-icon w-8 h-8 text-primary mb-4 transition-transform duration-300" />
              <h3 className="font-sora text-lg font-semibold text-navy mb-2">
                {capability.title}
              </h3>
              <p className="text-sm text-navy/55 leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
