import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background gradient effect */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, hsla(var(--plum), 0.08) 0%, hsla(var(--gold), 0.05) 40%, transparent 70%)",
          borderRadius: "400px 400px 0 0",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-navy"
        >
          Ready to{" "}
          <span className="font-serif italic text-gradient">transform?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-navy/50 max-w-md mx-auto"
        >
          Let's build technology that matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <a href="#" className="btn-gradient text-lg px-10 py-5">
            Start a Conversation
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-sm text-navy/40"
        >
          Or email us at{" "}
          <a href="mailto:admin@webqtech.com" className="text-primary hover:underline">
            admin@webqtech.com
          </a>
        </motion.p>
      </div>
    </section>
  );
};
