import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const ImpactNumber = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const target = 500;
      const increment = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="section-dark py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-sora text-[100px] sm:text-[120px] md:text-[160px] font-bold leading-none text-gradient">
            {count}+
          </span>
          <p className="mt-4 text-sm text-white/50 tracking-[0.15em] uppercase">
            Projects Delivered
          </p>
        </motion.div>
      </div>
    </section>
  );
};
