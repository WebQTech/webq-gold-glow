import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  "Full lifecycle software services",
  "Business-technology alignment", 
  "Enterprise & government ready",
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-16 lg:py-24 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
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
            className="mt-5 text-base leading-relaxed text-navy/60"
          >
            WebQ Technologies is a full-stack enterprise technology company specializing in AI-powered solutions, cloud infrastructure, and custom software development. From ready-to-deploy products to tailored solutions, we help businesses across EdTech, FinTech, HealthTech, and beyond transform their operations, modernize legacy systems, and scale with confidence. Our team combines deep technical expertise with a commitment to delivering measurable results.
          </motion.p>

          {/* Feature List */}
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
      </div>
    </section>
  );
};
