import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Lightbulb, Target, Zap, Shield } from "lucide-react";

const values = [
  { 
    icon: Lightbulb, 
    title: "Innovation First", 
    description: "Cutting-edge solutions that push boundaries" 
  },
  { 
    icon: Target, 
    title: "Results Driven", 
    description: "Focused on delivering measurable outcomes" 
  },
  { 
    icon: Zap, 
    title: "Agile Approach", 
    description: "Fast, flexible, and adaptive methodologies" 
  },
  { 
    icon: Shield, 
    title: "Trusted Partner", 
    description: "Building lasting relationships with integrity" 
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-16 lg:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <span className="section-label">About WebQ Technologies</span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-foreground">
            We engineer technology for lasting business impact
          </h2>
          <p className="mt-4 text-foreground/70 text-lg leading-relaxed">
            WebQ Technologies partners with enterprises worldwide to modernize technology, 
            reimagine processes, and transform experiences. Our deep industry expertise and 
            innovative approach help clients navigate complexity and achieve their strategic goals.
          </p>
          <a 
            href="/about"
            className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:gap-3 transition-all"
          >
            Learn more about us
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <value.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-foreground/60">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
