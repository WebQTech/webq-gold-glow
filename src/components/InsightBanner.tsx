import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export const InsightBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-10 lg:py-14 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-8 items-center">
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
                background: `linear-gradient(135deg, hsl(195 100% 45%) 0%, hsl(210 100% 35%) 100%)`,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <span className="text-6xl font-bold">55%</span>
                <p className="mt-2 text-lg opacity-80">of spending by 2030</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-snug">
              How are AI-empowered customers shaping tomorrow's markets?
            </h3>
            <p className="mt-4 text-foreground/70 text-lg leading-relaxed">
              Consumers who embrace AI could drive up to 55% of spending by 2030. It's time to understand the new AI-empowered customer and the wants, needs and expectations that will shape tomorrow's markets.
            </p>
            <a 
              href="#"
              className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:gap-3 transition-all"
            >
              Read the report
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
