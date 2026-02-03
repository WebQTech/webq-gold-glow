import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[650px] lg:min-h-[750px] overflow-hidden">
      {/* Dark blue background with geometric pattern */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, hsl(215 50% 10%) 0%, hsl(210 100% 18%) 50%, hsl(215 50% 10%) 100%)`,
        }}
      />

      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated geometric visual on right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        {/* Angled overlay */}
        <div 
          className="absolute inset-0"
          style={{
            clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)',
            background: `linear-gradient(135deg, hsla(195, 100%, 45%, 0.12) 0%, hsla(210, 100%, 35%, 0.08) 100%)`,
          }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)',
            backgroundImage: `
              linear-gradient(hsla(195, 100%, 45%, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, hsla(195, 100%, 45%, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glowing nodes */}
        <motion.div
          className="absolute w-4 h-4 rounded-full"
          style={{
            top: '28%',
            right: '38%',
            background: 'hsl(195 100% 50%)',
            boxShadow: '0 0 40px hsla(195, 100%, 50%, 0.8), 0 0 80px hsla(195, 100%, 50%, 0.4)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-3 h-3 rounded-full"
          style={{
            top: '52%',
            right: '22%',
            background: 'hsl(195 100% 50%)',
            boxShadow: '0 0 30px hsla(195, 100%, 50%, 0.7), 0 0 60px hsla(195, 100%, 50%, 0.3)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-5 h-5 rounded-full"
          style={{
            top: '72%',
            right: '32%',
            background: 'hsl(195 100% 50%)',
            boxShadow: '0 0 50px hsla(195, 100%, 50%, 0.8), 0 0 100px hsla(195, 100%, 50%, 0.4)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
        />

        {/* Additional smaller nodes for depth */}
        <motion.div
          className="absolute w-2 h-2 rounded-full"
          style={{
            top: '40%',
            right: '45%',
            background: 'hsl(195 100% 60%)',
            boxShadow: '0 0 20px hsla(195, 100%, 60%, 0.6)',
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-2 h-2 rounded-full"
          style={{
            top: '62%',
            right: '48%',
            background: 'hsl(195 100% 60%)',
            boxShadow: '0 0 20px hsla(195, 100%, 60%, 0.6)',
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}>
          <motion.line
            x1="62%"
            y1="28%"
            x2="78%"
            y2="52%"
            stroke="hsla(195, 100%, 50%, 0.3)"
            strokeWidth="1"
            strokeDasharray="4 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.line
            x1="78%"
            y1="52%"
            x2="68%"
            y2="72%"
            stroke="hsla(195, 100%, 50%, 0.3)"
            strokeWidth="1"
            strokeDasharray="4 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <motion.line
            x1="55%"
            y1="40%"
            x2="62%"
            y2="28%"
            stroke="hsla(195, 100%, 50%, 0.2)"
            strokeWidth="1"
            strokeDasharray="4 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          />
          <motion.line
            x1="52%"
            y1="62%"
            x2="68%"
            y2="72%"
            stroke="hsla(195, 100%, 50%, 0.2)"
            strokeWidth="1"
            strokeDasharray="4 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 2 }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-28 lg:pt-40 pb-20">
        <div className="max-w-2xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[hsl(195,100%,55%)] text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[hsl(195,100%,55%)] animate-pulse" />
              AI-Powered Enterprise Technology
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
          >
            We build technology
            <br />
            that transforms{" "}
            <span className="relative inline-block">
              <span className="text-gradient font-serif italic">Businesses.</span>
              <motion.span 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(210,100%,35%)] to-[hsl(195,100%,45%)] rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 text-lg lg:text-xl text-white/60 max-w-xl leading-relaxed"
          >
            Harness AI's transformative power with enterprise-grade solutions that deliver measurable business outcomes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a 
              href="#solutions"
              className="inline-flex items-center gap-2 btn-white text-base font-semibold"
            >
              Get started
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-4 text-white/80 hover:text-white font-medium transition-colors"
            >
              <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors">
                <Play className="w-4 h-4 ml-0.5" />
              </span>
              Learn more
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-sm text-white/40 mb-4">Trusted by forward-thinking enterprises</p>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">11+</div>
                <div className="text-xs text-white/50">Industries</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-xs text-white/50">Core Services</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-xs text-white/50">Uptime</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};