import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  "Full lifecycle software services",
  "Business-technology alignment", 
  "Enterprise & government ready",
];

const pillars = [
  { icon: "🎯", label: "Mission-Driven" },
  { icon: "⚡", label: "Agile Delivery" },
  { icon: "🔒", label: "Secure & Reliable" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-16 lg:py-24 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left - Content (takes 3 cols) */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              Who We Are
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-3xl md:text-4xl lg:text-[42px] font-medium leading-tight text-navy"
            >
              Your strategic{" "}
              <span className="font-serif italic text-gradient">technology partner.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-base leading-relaxed text-navy/60 max-w-xl"
            >
              WebQ Technologies is a full-stack enterprise technology company specializing in AI-powered solutions, cloud infrastructure, and custom software development. From ready-to-deploy products to tailored solutions, we help businesses across EdTech, FinTech, HealthTech, and beyond transform their operations, modernize legacy systems, and scale with confidence. Our team combines deep technical expertise with a commitment to delivering measurable results.
            </motion.p>

            {/* Feature List - Horizontal on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" strokeWidth={2} />
                  <span className="text-sm text-navy/70">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <a 
                href="#solutions" 
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
              >
                <span>Explore our solutions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right - Visual Card (takes 2 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 order-1 lg:order-2"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-navy via-navy to-primary/40 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-[60px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/20 rounded-full blur-[50px]" />
              
              {/* Logo/Brand */}
              <div className="relative flex items-center gap-4 mb-6">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--plum)), hsl(var(--gold)))",
                  }}
                >
                  <span className="font-serif text-2xl text-white font-medium">W</span>
                </div>
                <div>
                  <div className="font-sora font-semibold text-white text-lg">WebQ</div>
                  <div className="text-white/50 text-sm">Technologies</div>
                </div>
              </div>

              {/* Pillars Grid */}
              <div className="relative grid grid-cols-3 gap-4">
                {pillars.map((pillar, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="text-2xl mb-1">{pillar.icon}</div>
                    <div className="text-[11px] text-white/70">{pillar.label}</div>
                  </div>
                ))}
              </div>

              {/* Floating rings decoration */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32">
                <motion.div
                  className="absolute inset-0 rounded-full border border-white/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full border border-white/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
