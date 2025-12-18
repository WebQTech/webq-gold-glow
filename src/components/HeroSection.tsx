import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden section-light">
      {/* Floating gradient shapes */}
      <div 
        className="floating-shape w-[400px] h-[400px] -top-20 -right-20 opacity-10"
        style={{ background: "hsl(var(--plum))" }}
      />
      <div 
        className="floating-shape w-[400px] h-[400px] -bottom-20 -left-20 opacity-10"
        style={{ background: "hsl(var(--gold))" }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* The Big Word */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif italic text-[64px] sm:text-[100px] md:text-[140px] lg:text-[180px] leading-none text-gradient"
        >
          Transform.
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-8 text-lg text-navy/60 max-w-[400px] mx-auto"
        >
          AI-powered enterprise solutions that move businesses forward.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10"
        >
          <a href="#services" className="btn-primary">
            Start Building
          </a>
        </motion.div>
      </div>
    </section>
  );
};
