import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Workflow, Wrench, Rocket } from "lucide-react";

const aiTags = [
  { icon: Brain, label: "LLMs" },
  { icon: Workflow, label: "AI SDLC" },
  { icon: Wrench, label: "Modern Tools" },
  { icon: Rocket, label: "Production-Ready" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase mb-8"
        >
          About WebQ
        </motion.span>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left Side - Company Overview (60%) */}
          <div className="lg:col-span-3">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-navy"
            >
              Who We Are
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base md:text-lg leading-relaxed text-navy/70"
            >
              WebQ Technologies is a full-stack enterprise technology company with hundreds of projects delivered across all sectors. Our tech executives bring decades of experience in global IT delivery, services, and technology transformation. From ready-to-deploy products to tailored solutions, we help businesses across AI, Banks & FinTech, Capital Markets, Healthcare Tech, Government, and beyond modernize legacy systems and scale with confidence.
            </motion.p>
          </div>

          {/* Gold Accent Divider - Visible on desktop */}
          <div className="hidden lg:flex lg:col-span-0 justify-center">
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-px h-full bg-gradient-to-b from-transparent via-gold to-transparent origin-top"
            />
          </div>

          {/* Right Side - AI Pioneering (40%) */}
          <div className="lg:col-span-2 lg:pl-8">
            {/* Mobile gold divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:hidden h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent mb-8"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              {/* Subtle plum tint background */}
              <div className="absolute inset-0 -m-4 rounded-2xl bg-primary/5 border border-primary/10" />
              
              <div className="relative p-4">
                <h3 className="text-xl md:text-2xl font-medium text-navy mb-4">
                  Enabling AI at Every Stage
                </h3>

                <p className="text-sm md:text-base leading-relaxed text-navy/70 mb-6">
                  We enable AI across the full software development lifecycle — from ideation to production. Our team pioneers the latest LLMs, AI tools, and technologies, integrating them into your products and services to drive real results.
                </p>

                {/* AI Tags */}
                <div className="flex flex-wrap gap-2">
                  {aiTags.map((tag, index) => (
                    <motion.div
                      key={tag.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gold/30 text-navy text-xs font-medium"
                    >
                      <tag.icon className="w-3.5 h-3.5 text-primary" />
                      <span>{tag.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
