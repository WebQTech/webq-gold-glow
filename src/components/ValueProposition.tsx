import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ValueProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-10 lg:py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-2xl lg:text-3xl xl:text-[36px] font-normal leading-relaxed text-foreground max-w-6xl"
        >
          WebQ Technologies is a full-service technology solutions company specialized in{" "}
          <a href="#solutions" className="keyword-highlight">Artificial Intelligence</a>,{" "}
          <a href="#solutions" className="keyword-highlight">Digital Transformation</a>,{" "}
          <a href="#solutions" className="keyword-highlight">Cloud</a>,{" "}
          <a href="#solutions" className="keyword-highlight">Cybersecurity</a>,{" "}
          <a href="#solutions" className="keyword-highlight">Software Development</a> and{" "}
          <a href="#solutions" className="keyword-highlight">IT Professional Services</a>.
          {" "}With proven expertise across 11+ industries and 15+ core service offerings, we help organizations harness cutting-edge technology to drive innovation, efficiency, and growth.
        </motion.p>
      </div>
    </section>
  );
};
