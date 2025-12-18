import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="section-label">What clients say</span>

          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed mt-10">
            "WebQ transformed our entire infrastructure in 6 months. Their team's expertise and dedication{" "}
            <span className="font-serif italic text-primary">exceeded every expectation.</span>"
          </blockquote>

          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
            <div className="text-left">
              <p className="text-foreground font-medium">Sarah Chen</p>
              <p className="text-muted-foreground text-sm">CTO, TechCorp Inc.</p>
            </div>
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 border-t border-border pt-16"
        >
          <p className="text-muted-foreground text-xs text-center tracking-wider uppercase mb-10">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["TechCorp", "Innovate", "DataFlow", "CloudPeak", "SecureNet"].map((logo, index) => (
              <motion.span
                key={logo}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.4 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ opacity: 0.8 }}
                className="text-xl font-medium text-foreground tracking-wide cursor-default transition-opacity"
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
