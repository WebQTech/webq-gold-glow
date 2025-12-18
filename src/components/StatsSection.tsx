import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { number: 500, suffix: "+", label: "Projects Delivered" },
  { number: 99.9, suffix: "%", label: "Uptime Guaranteed" },
  { number: 50, suffix: "+", label: "Enterprise Clients" },
  { number: 24, suffix: "/7", label: "Expert Support" },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="stat-number">
      {value % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
};

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-charcoal py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`text-center ${
                index < stats.length - 1 ? "md:border-r md:border-foreground/10" : ""
              }`}
            >
              <AnimatedNumber value={stat.number} suffix={stat.suffix} />
              <p className="stat-label mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
