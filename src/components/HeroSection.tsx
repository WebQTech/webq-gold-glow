import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[520px] lg:min-h-[600px] overflow-hidden flex items-center">
      {/* Clean gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, hsl(215 50% 10%) 0%, hsl(210 100% 22%) 60%, hsl(195 80% 30%) 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
          >
            Built for Enterprise.{" "}
            <span className="text-[hsl(195,100%,55%)]">Powered by AI.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed"
          >
            We help organizations move from traditional IT environments to modern, 
            AI-enabled operations with stronger performance, cost efficiency, and measurable outcomes.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10"
          >
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[hsl(210,100%,25%)] font-semibold rounded-sm hover:bg-white/90 transition-colors"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
