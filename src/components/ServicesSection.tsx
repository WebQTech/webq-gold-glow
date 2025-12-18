import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap, Cloud, Bot, Shield, Database, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Custom Software",
    description: "Tailored applications built for your unique business processes",
    iconColor: "text-primary",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions", 
    description: "Seamless migration and management across all major platforms",
    iconColor: "text-accent",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Intelligent automation that drives measurable results",
    iconColor: "text-primary",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise-grade protection for your digital assets",
    iconColor: "text-accent",
  },
  {
    icon: Database,
    title: "Infrastructure",
    description: "Reliable systems that scale with your growth",
    iconColor: "text-primary",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Data-driven insights for smarter decisions",
    iconColor: "text-accent",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            Explore <span className="font-serif italic text-primary">WebQ Services</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            Explore our innovative AI-powered solutions and tools for enterprise professionals
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass-card group cursor-pointer hover:shadow-lg transition-all duration-500 gradient-border"
            >
              <div className="p-6 flex flex-col justify-between min-h-[280px]">
                <div>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">WebQ Platform</span>
                  <h3 className="text-xl font-medium text-foreground mt-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{service.description}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-muted-foreground">Open Service</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 text-foreground" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
