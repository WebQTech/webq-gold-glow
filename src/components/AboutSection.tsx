import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Building2, Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: Building2, value: "500+", label: "Enterprise Clients" },
  { icon: Users, value: "5,000+", label: "Team Members" },
  { icon: Globe, value: "30+", label: "Countries" },
  { icon: Award, value: "20+", label: "Years Experience" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-10 lg:py-16 bg-background scroll-mt-20">
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
            href="#"
            className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:gap-3 transition-all"
          >
            Learn more about us
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-foreground/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
