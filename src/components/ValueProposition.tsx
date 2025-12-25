import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ValueProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-normal leading-relaxed text-foreground max-w-5xl"
        >
          WebQ Technologies helps companies modernize{" "}
          <a href="#solutions" className="keyword-highlight">technology</a>,
          reimagine{" "}
          <a href="#solutions" className="keyword-highlight">processes</a>
          {" "}and transform{" "}
          <a href="#solutions" className="keyword-highlight">experiences</a>
          {" "}so they stay ahead in a fast-changing world.
        </motion.p>
      </div>
    </section>
  );
};
