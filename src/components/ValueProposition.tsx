import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ValueProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-relaxed tracking-tight"
          >
            A full-service technology solutions company specialized in{" "}
            <span className="text-primary">AI</span>,{" "}
            <span className="text-primary">Digital Transformation</span>,{" "}
            <span className="text-primary">Cloud</span>,{" "}
            <span className="text-primary">Cybersecurity</span>,{" "}
            <span className="text-primary">Software Development</span> &{" "}
            <span className="text-primary">IT Services</span>.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            With expertise across <strong className="text-foreground font-medium">11+ industries</strong> and{" "}
            <strong className="text-foreground font-medium">15+ core services</strong>, we help organizations 
            harness cutting-edge technology to drive innovation, efficiency, and growth.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
