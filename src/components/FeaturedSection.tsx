import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export const FeaturedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
          >
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, hsl(210 100% 35%) 0%, hsl(195 100% 45%) 100%)`,
              }}
            />
            {/* Abstract shapes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* Rotating rings */}
                <motion.div
                  className="absolute inset-0 border-2 border-white/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-8 border border-white/30 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">AI</span>
                  </div>
                </div>
                {/* Orbiting dots */}
                {[0, 90, 180, 270].map((deg, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-white rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0',
                    }}
                    animate={{
                      rotate: [deg, deg + 360],
                      x: [80, 80],
                      y: [0, 0],
                    }}
                    transition={{
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:pl-8"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Engineering AI for impact
            </h3>
            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              We've engineered an enterprise-grade last mile for AI—so you can turn AI's power into lasting impact. Our solutions bridge the gap between AI potential and real-world business outcomes.
            </p>
            <a 
              href="#solutions"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Get started
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
