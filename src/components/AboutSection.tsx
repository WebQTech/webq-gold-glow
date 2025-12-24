import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Workflow, Wrench, Rocket, Calendar, CreditCard, Users, BarChart3, ArrowRight } from "lucide-react";

const aiTags = [
  { icon: Brain, label: "LLMs" },
  { icon: Workflow, label: "AI SDLC" },
  { icon: Wrench, label: "Modern Tools" },
  { icon: Rocket, label: "Production-Ready" },
];

const caseStudyFeatures = [
  { icon: Calendar, label: "AI Scheduling" },
  { icon: CreditCard, label: "Automated Billing" },
  { icon: Users, label: "Student Tracking" },
  { icon: BarChart3, label: "Smart Reporting" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Company Overview */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase mb-6"
            >
              About WebQ
            </motion.span>

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

          {/* Right Column - What We're Pioneering + Case Study */}
          <div className="space-y-8">
            {/* What We're Pioneering */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase mb-6"
              >
                What We're Pioneering
              </motion.span>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl md:text-3xl font-medium text-navy mb-4"
              >
                Enabling AI at Every Stage
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-base leading-relaxed text-navy/70 mb-5"
              >
                We enable AI across the full software development lifecycle — from ideation to production. Our team pioneers the latest LLMs, AI tools, and technologies, integrating them into your products and services to drive real results.
              </motion.p>

              {/* AI Tags */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-2"
              >
                {aiTags.map((tag, index) => (
                  <div
                    key={tag.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gold/30 text-navy text-xs font-medium"
                  >
                    <tag.icon className="w-3.5 h-3.5 text-primary" />
                    <span>{tag.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Gold Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="h-px w-full bg-gradient-to-r from-gold via-gold/60 to-transparent origin-left"
            />

            {/* Case Study */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-semibold tracking-wider uppercase mb-4">
                Case Study
              </span>

              <h4 className="text-xl md:text-2xl font-semibold text-navy mb-1">
                Classium
              </h4>
              <p className="text-sm text-primary font-medium mb-3">
                AI-Powered Business Management Platform
              </p>

              <p className="text-sm leading-relaxed text-navy/70 mb-4">
                We built Classium, a comprehensive business management platform for martial arts academies and educational service providers. The platform features AI-driven scheduling, automated billing, student progress tracking, CRM, and intelligent reporting dashboards — transforming manual operations into streamlined digital workflows.
              </p>

              {/* Case Study Feature Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {caseStudyFeatures.map((feature) => (
                  <div
                    key={feature.label}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-navy/5 text-navy/80 text-[11px] font-medium"
                  >
                    <feature.icon className="w-3 h-3" />
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all duration-300"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
