import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import heroAiVisual from "@/assets/hero-ai-visual.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Dark blue background with geometric pattern */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, hsl(215 50% 12%) 0%, hsl(210 100% 20%) 50%, hsl(215 50% 12%) 100%)`,
        }}
      />

      {/* AI Visual on right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img 
            src={heroAiVisual} 
            alt="AI Network Visualization" 
            className="w-full h-full object-cover object-center"
            style={{
              maskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
            }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-24 lg:pt-32 pb-16">
        <div className="max-w-2xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-[hsl(195,100%,45%)] text-sm font-medium tracking-wide">
              AI Solutions
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
          >
            From AI pilot to production in 8 weeks
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-white/70 max-w-lg leading-relaxed"
          >
            We build custom ML models, intelligent automation, and GenAI systems for enterprises ready to move fast — without ripping out what already works.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector('#contact');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 btn-white text-base"
            >
              Book a free AI assessment
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
