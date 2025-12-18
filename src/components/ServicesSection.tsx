import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap, Cloud, Bot, Shield, Database, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Custom Software",
    description: "Tailored applications built for your unique business processes",
    gradient: "from-amber-900/20 via-stone-800/20 to-emerald-900/15",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions", 
    description: "Seamless migration and management across all major platforms",
    gradient: "from-stone-800/20 via-neutral-800/20 to-emerald-900/15",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Intelligent automation that drives measurable results",
    gradient: "from-neutral-800/20 via-stone-900/20 to-emerald-900/15",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise-grade protection for your digital assets",
    gradient: "from-zinc-800/20 via-stone-800/20 to-emerald-900/15",
  },
  {
    icon: Database,
    title: "Infrastructure",
    description: "Reliable systems that scale with your growth",
    gradient: "from-stone-900/20 via-neutral-800/20 to-emerald-900/15",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Data-driven insights for smarter decisions",
    gradient: "from-neutral-900/20 via-zinc-800/20 to-emerald-900/15",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-[120px] bg-background-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary-100">
            Explore <span className="font-serif italic text-primary">WebQ Services</span>
          </h2>
          <p className="text-primary-50 mt-8 max-w-xl mx-auto leading-relaxed">
            Explore our innovative AI-powered solutions and tools for enterprise professionals
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="glass-card glass-card-hover group cursor-pointer"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${service.gradient} p-12 flex flex-col justify-between`}>
                <div>
                  <div className="w-12 h-12 rounded-full bg-white/[0.06] flex items-center justify-center mb-5">
                    <service.icon className="w-5 h-5 text-primary-100" />
                  </div>
                  <span className="text-xs text-primary-40 uppercase tracking-wider">WebQ Platform</span>
                  <h3 className="text-xl font-medium text-primary-100 mt-3">{service.title}</h3>
                  <p className="text-sm text-primary-50 mt-4 leading-relaxed">{service.description}</p>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-xs text-primary-40">Open Service</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 text-primary-100" />
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
