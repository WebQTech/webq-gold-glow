import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-[120px] bg-background-secondary border-t border-white/[0.06]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="section-label">What clients say</span>

          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-primary-100 leading-relaxed mt-12">
            "WebQ transformed our entire infrastructure in 6 months. Their team's expertise and dedication{" "}
            <span className="font-serif italic text-primary">exceeded every expectation.</span>"
          </blockquote>

          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/[0.06]" />
            <div className="text-left">
              <p className="text-primary-100 font-medium">Sarah Chen</p>
              <p className="text-primary-50 text-sm">CTO, TechCorp Inc.</p>
            </div>
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-28 border-t border-white/[0.06] pt-16"
        >
          <p className="text-primary-40 text-xs text-center tracking-wider uppercase mb-12">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {["TechCorp", "Innovate", "DataFlow", "CloudPeak", "SecureNet"].map((logo, index) => (
              <motion.span
                key={logo}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.3 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ opacity: 0.7 }}
                className="text-xl font-medium text-primary-100 tracking-wide cursor-default transition-opacity"
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
