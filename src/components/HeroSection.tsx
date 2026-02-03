import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

      {/* Animated geometric visual on right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        {/* Angled overlay */}
        <div 
          className="absolute inset-0"
          style={{
            clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
            background: `linear-gradient(135deg, hsla(195, 100%, 45%, 0.15) 0%, hsla(210, 100%, 35%, 0.1) 100%)`,
          }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
            backgroundImage: `
              linear-gradient(hsla(195, 100%, 45%, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsla(195, 100%, 45%, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Glowing nodes */}
        <motion.div
          className="absolute w-3 h-3 rounded-full"
          style={{
            top: '30%',
            right: '40%',
            background: 'hsl(195 100% 45%)',
            boxShadow: '0 0 30px hsla(195, 100%, 45%, 0.8)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-2 h-2 rounded-full"
          style={{
            top: '50%',
            right: '25%',
            background: 'hsl(195 100% 45%)',
            boxShadow: '0 0 20px hsla(195, 100%, 45%, 0.6)',
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute w-4 h-4 rounded-full"
          style={{
            top: '70%',
            right: '35%',
            background: 'hsl(195 100% 45%)',
            boxShadow: '0 0 40px hsla(195, 100%, 45%, 0.7)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}>
          <motion.line
            x1="60%"
            y1="30%"
            x2="75%"
            y2="50%"
            stroke="hsla(195, 100%, 45%, 0.4)"
            strokeWidth="1"
            strokeDasharray="5 5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.line
            x1="75%"
            y1="50%"
            x2="65%"
            y2="70%"
            stroke="hsla(195, 100%, 45%, 0.4)"
            strokeWidth="1"
            strokeDasharray="5 5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </svg>
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
              AI-Powered Enterprise Technology
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
          >
            We build technology that transforms{" "}
            <span className="text-gradient font-serif italic">Businesses.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-white/70 max-w-lg leading-relaxed"
          >
            Harness AI's transformative power with enterprise-grade solutions that deliver measurable business outcomes.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <a 
              href="#solutions"
              className="inline-flex items-center gap-2 btn-white text-base"
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