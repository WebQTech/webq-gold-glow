import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Cpu, Cloud, Code2, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  { 
    icon: Cpu, 
    title: "AI & Machine Learning",
    description: "Custom ML models and intelligent automation"
  },
  { 
    icon: Cloud, 
    title: "Cloud Infrastructure",
    description: "AWS, Azure, GCP migration and management"
  },
  { 
    icon: Code2, 
    title: "Software Development",
    description: "Full-stack enterprise applications"
  },
  { 
    icon: Shield, 
    title: "Cybersecurity",
    description: "Threat protection and compliance"
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-16 lg:py-24 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">About Us</span>
            <h2 className="mt-4 text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
              Your strategic
              <br />
              <span className="text-gradient font-serif italic">technology partner.</span>
            </h2>
            <p className="mt-6 text-foreground/70 text-lg leading-relaxed">
              WebQ Technologies partners with enterprises worldwide to modernize technology, 
              reimagine processes, and transform experiences. Our deep industry expertise and 
              innovative approach help clients navigate complexity and achieve their strategic goals.
            </p>
            <p className="mt-4 text-foreground/60 leading-relaxed">
              Our integrated approach ensures seamless alignment between business goals and technical execution, 
              delivering measurable results that drive sustainable growth.
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:gap-3 transition-all group"
            >
              Learn more about us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Column - Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 bg-background rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
