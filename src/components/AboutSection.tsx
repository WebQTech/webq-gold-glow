import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Workflow, Wrench, ArrowRight } from "lucide-react";
import { AIBrainVisual } from "./AIBrainVisual";

const statsPills = [
  { label: "100+ Projects" },
  { label: "20+ Years" },
  { label: "Global 24/7" },
];

const aiTags = [
  { icon: Brain, label: "LLMs" },
  { icon: Workflow, label: "AI SDLC" },
  { icon: Wrench, label: "Modern Tools" },
];

const sdlcSteps = ["Ideation", "Development", "Deployment", "Production"];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-16 lg:py-24 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-12 items-center">
          {/* Left Column - Compact Text Content */}
          <div className="space-y-6">
            {/* About WebQ Label */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase"
            >
              About WebQ
            </motion.span>

            {/* Who We Are */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-navy mb-3">
                Who We Are
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-navy/70">
                Enterprise technology. 100+ projects. Decades of experience. Global delivery.
              </p>
            </motion.div>

            {/* Stats Pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap gap-2"
            >
              {statsPills.map((stat) => (
                <div
                  key={stat.label}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-plum/10 border border-plum/20 text-navy text-xs font-medium"
                >
                  {stat.label}
                </div>
              ))}
            </motion.div>

            {/* Gold Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px w-full bg-gradient-to-r from-gold via-gold/60 to-transparent origin-left"
            />

            {/* AI at Every Stage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-3"
            >
              <h3 className="text-lg md:text-xl font-medium text-navy">
                AI at Every Stage
              </h3>
              
              {/* SDLC Flow */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-navy/60">
                {sdlcSteps.map((step, index) => (
                  <span key={step} className="flex items-center gap-1.5">
                    <span className="font-medium">{step}</span>
                    {index < sdlcSteps.length - 1 && (
                      <span className="text-gold">→</span>
                    )}
                  </span>
                ))}
              </div>

              {/* AI Tags */}
              <div className="flex flex-wrap gap-2">
                {aiTags.map((tag) => (
                  <div
                    key={tag.label}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-gold/30 text-navy text-[11px] font-medium"
                  >
                    <tag.icon className="w-3 h-3 text-primary" />
                    <span>{tag.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gold Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px w-full bg-gradient-to-r from-gold via-gold/60 to-transparent origin-left"
            />

            {/* Case Study - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-semibold tracking-wider uppercase">
                  Case Study
                </span>
                <div>
                  <span className="font-semibold text-navy text-sm">Classium</span>
                  <span className="text-navy/60 text-xs ml-2">AI-powered business management</span>
                </div>
              </div>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-1.5 text-primary text-xs font-medium hover:gap-2.5 transition-all duration-300 whitespace-nowrap"
              >
                <span>View</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column - 3D AI Brain Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[300px] md:h-[350px] lg:h-[400px]"
          >
            <AIBrainVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
