import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep dive into goals",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Architecture for scale",
  },
  {
    number: "03",
    title: "Build",
    description: "Agile dev + testing",
  },
  {
    number: "04",
    title: "Scale",
    description: "Deploy, optimize",
  },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            The Process
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-navy"
          >
            From idea to{" "}
            <span className="font-serif italic text-primary">product.</span>
          </motion.h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div 
            className="hidden lg:block absolute top-[8px] left-0 right-0 h-[2px]"
            style={{
              background: "linear-gradient(90deg, hsla(var(--plum), 0.3), hsla(var(--gold), 0.3))",
            }}
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative lg:px-6 first:lg:pl-0 last:lg:pr-0"
              >
                {/* Dot */}
                <div className="process-dot mb-6" />

                {/* Number */}
                <span className="text-sm text-navy/30 font-medium">{step.number}</span>

                {/* Title */}
                <h3 className="mt-2 font-sora text-lg font-semibold text-navy">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-1 text-sm text-navy/50">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
