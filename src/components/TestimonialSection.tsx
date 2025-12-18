import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const clientLogos = [
  "TechCorp",
  "Innovate",
  "DataFlow",
  "CloudPeak",
  "SecureNet",
];

export const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Quote Icon */}
          <Quote className="w-12 h-12 text-primary mx-auto mb-8 rotate-180" />

          {/* Quote Text */}
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed italic">
            "WebQ transformed our entire infrastructure in 6 months. Their team's expertise and dedication exceeded every expectation."
          </blockquote>

          {/* Attribution */}
          <div className="mt-8">
            <p className="text-foreground font-semibold">Sarah Chen</p>
            <p className="text-muted-foreground text-sm">CTO, TechCorp Inc.</p>
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 border-t border-border pt-12"
        >
          <p className="text-muted-foreground text-sm text-center mb-8 tracking-wider uppercase">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {clientLogos.map((logo, index) => (
              <motion.span
                key={logo}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.4 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ opacity: 0.8 }}
                className="text-xl md:text-2xl font-semibold text-foreground tracking-wide cursor-default transition-opacity"
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
