import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  "Full lifecycle software services",
  "Business-technology alignment",
  "Enterprise & government ready",
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - 3D Ring Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center h-[400px]"
          >
            <div 
              className="ring-container relative"
              style={{ transformStyle: "preserve-3d", transform: "rotateX(60deg)" }}
            >
              {/* Outer Ring */}
              <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[250px] h-[250px] ring-3d ring-3d-1" />
              
              {/* Middle Ring */}
              <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[200px] h-[200px] ring-3d ring-3d-2" />
              
              {/* Inner Ring */}
              <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[150px] h-[150px] ring-3d ring-3d-3" />
            </div>

            {/* Center Orb with W */}
            <div 
              className="absolute w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, hsl(var(--plum)), hsl(var(--gold)))",
                boxShadow: "0 20px 50px hsla(var(--plum), 0.4)",
              }}
            >
              <span className="font-serif text-3xl text-white">W</span>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              Who We Are
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-navy"
            >
              Your strategic{" "}
              <span className="font-serif italic text-primary">technology partner.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base leading-relaxed text-navy/55 max-w-lg"
            >
              We deliver comprehensive, enterprise-grade IT solutions that empower 
              organizations to innovate, scale, and operate with agility. We specialize 
              in the full lifecycle of software and infrastructure services — from 
              initial design to continuous improvement.
            </motion.p>

            {/* Feature List */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 space-y-4"
            >
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span 
                    className="w-2 h-2 rounded-full"
                    style={{ background: "linear-gradient(135deg, hsl(var(--plum)), hsl(var(--gold)))" }}
                  />
                  <span className="text-[15px] text-navy/70">{feature}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};
