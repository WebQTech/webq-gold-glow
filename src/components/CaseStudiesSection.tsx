import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Cpu, Zap, ArrowRight } from "lucide-react";

const capabilities = [
  { icon: Sparkles, label: "LLM Integration" },
  { icon: Cpu, label: "AI-Powered Pipelines" },
  { icon: Zap, label: "Production-Ready Systems" },
];

export const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" ref={ref} className="py-20 lg:py-32 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase"
          >
            AI SDLC Enablement
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-navy"
          >
            AI across the{" "}
            <span className="font-serif italic text-primary">full lifecycle.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base md:text-lg leading-relaxed text-navy/70 max-w-3xl mx-auto"
          >
            We enable AI across the full software development lifecycle — from ideation to production. Our team pioneers the latest LLMs, AI tools, and technologies available in the market, integrating them into your products and services to drive real results.
          </motion.p>

          {/* Capability Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {capabilities.map((capability, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <capability.icon className="w-10 h-10 text-primary mb-4 mx-auto" strokeWidth={1.5} />
                <span className="text-navy font-medium">{capability.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <a 
              href="#industries" 
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
            >
              <span>See industries we serve</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};