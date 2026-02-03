import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ValueProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-normal leading-[1.5] text-foreground/90">
            <span className="text-foreground font-semibold">WebQ Technologies</span> is a full-service technology solutions company specialized in{" "}
            <a href="#solutions" className="text-primary font-medium hover:underline underline-offset-4 transition-all">Artificial Intelligence</a>,{" "}
            <a href="#solutions" className="text-primary font-medium hover:underline underline-offset-4 transition-all">Digital Transformation</a>,{" "}
            <a href="#solutions" className="text-primary font-medium hover:underline underline-offset-4 transition-all">Cloud</a>,{" "}
            <a href="#solutions" className="text-primary font-medium hover:underline underline-offset-4 transition-all">Cybersecurity</a>,{" "}
            <a href="#solutions" className="text-primary font-medium hover:underline underline-offset-4 transition-all">Software Development</a> and{" "}
            <a href="#solutions" className="text-primary font-medium hover:underline underline-offset-4 transition-all">IT Professional Services</a>.
          </p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed"
          >
            With proven expertise across 11+ industries and 15+ core service offerings, we help organizations harness cutting-edge technology to drive innovation, efficiency, and growth.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
