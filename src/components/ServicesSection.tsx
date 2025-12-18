import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Cloud, Bot, Shield, Wrench, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Custom Software",
    description: "Tailored applications built for your unique business needs",
    color: "bg-primary",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamless migration and management across all platforms",
    color: "bg-accent",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Intelligent automation that drives real results",
    color: "bg-primary",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise-grade protection for your digital assets",
    color: "bg-accent",
  },
  {
    icon: Wrench,
    title: "Infrastructure",
    description: "Reliable systems that scale with your growth",
    color: "bg-primary",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Data-driven insights for smarter decisions",
    color: "bg-accent",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">WHAT WE DO</span>
          <h2 className="section-headline mt-4">Solutions that scale with you</h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card glass-card-hover rounded-2xl p-8 cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{service.description}</p>
              <a
                href="#"
                className="text-primary text-sm font-medium group-hover:underline transition-all"
              >
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
