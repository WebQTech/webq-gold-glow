import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    number: "1",
    title: "Strategic Partnership",
    description: "We serve as strategic partners to businesses and government agencies seeking transformation, resilience, and competitive advantage.",
  },
  {
    number: "2",
    title: "Full Lifecycle Expertise",
    description: "From initial design and development to deployment, monitoring, and continuous improvement — we handle it all.",
  },
  {
    number: "3",
    title: "Business-Tech Alignment",
    description: "Our integrated approach ensures seamless alignment between your business goals and technical execution.",
  },
];

export const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              Why WebQ
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-navy"
            >
              Built for{" "}
              <span className="font-serif italic text-primary">transformation.</span>
            </motion.h2>

            {/* Reasons */}
            <div className="mt-10 space-y-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-5"
                >
                  <span className="font-serif text-3xl text-primary shrink-0">
                    {reason.number}
                  </span>
                  <div>
                    <h3 className="font-sora text-base font-semibold text-navy">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm text-navy/55 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - 3D Sphere Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center h-[400px]"
          >
            {/* Sphere */}
            <div 
              className="sphere-3d w-48 h-48 animate-float"
              style={{ willChange: "transform" }}
            />

            {/* Orbiting Ring */}
            <div 
              className="absolute w-72 h-72 rounded-full border-2 border-dashed animate-spin-slow"
              style={{ 
                borderColor: "hsla(var(--plum), 0.2)",
                transform: "rotateX(70deg)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
