import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" ref={ref} className="bg-primary py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight">
            Let's build the future.
          </h2>
          <p className="text-primary-foreground/70 text-lg md:text-xl mt-6">
            Ready to transform your technology? Start a conversation with our team.
          </p>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block mt-10 px-10 py-5 bg-background text-foreground font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
