import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Hero3DVisual } from "./Hero3DVisual";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 lg:pt-40 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="relative z-10">
            {/* Micro Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-primary animate-pulse-glow" />
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-primary">
                AI-Powered Enterprise Technology
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[42px] sm:text-[52px] lg:text-[58px] font-medium leading-[1.1] tracking-tight text-navy"
            >
              We build technology
              <br />
              that transforms <span className="font-serif italic text-gradient">Business.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-[17px] leading-[1.75] text-navy/60 max-w-[520px]"
            >
              Enterprise-grade IT solutions that empower organizations to innovate, 
              scale, and operate with agility. From custom software to AI-powered 
              systems — we're your strategic technology partner.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <a href="#solutions" className="btn-primary">
                Explore Solutions
              </a>
              <a 
                href="#work" 
                className="group flex items-center gap-2 text-sm font-medium text-navy hover:text-primary transition-colors"
              >
                See Our Work 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex items-center gap-6 text-[13px] text-navy/40"
            >
              <span>50+ enterprises</span>
              <span className="w-1 h-1 rounded-full bg-navy/20" />
              <span>500+ projects</span>
              <span className="w-1 h-1 rounded-full bg-navy/20" />
              <span>99.9% uptime</span>
            </motion.div>
          </div>

          {/* Right Column - 3D Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <Hero3DVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
