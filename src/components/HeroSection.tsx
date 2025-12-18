import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background py-[120px]">
      {/* Gradient glows */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 80%, rgba(229, 185, 78, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(52, 211, 153, 0.06) 0%, transparent 50%)
          `
        }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} 
      />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Text */}
          <div className="pt-20 lg:pt-0">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[40px] md:text-[56px] lg:text-[80px] font-medium leading-[1.05] tracking-tight text-primary-100"
            >
              Technology,{" "}
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-serif italic text-primary"
              >
                reimagined
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg text-primary-50 mt-10 max-w-md leading-relaxed"
            >
              Cutting edge AI-powered IT solutions designed for enterprises that demand excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-12"
            >
              <a href="#services" className="btn-primary">
                Get Started
              </a>
            </motion.div>
          </div>

          {/* Right Column - Visual Cards */}
          <div className="relative">
            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="glass-card glass-card-hover relative group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-900/30 via-stone-800/30 to-emerald-900/20 p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium text-primary-100">
                    Enterprise Solutions
                  </h3>
                  <p className="text-sm text-primary-50 mt-2">in WebQ Platform</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary-40">Explore</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-primary-100" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Cards Grid */}
            <div className="grid grid-cols-2 gap-5 mt-5">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="glass-card glass-card-hover group cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-stone-800/30 to-emerald-900/20 p-6 flex flex-col justify-between">
                  <h4 className="text-base font-medium text-primary-100">Cloud Infrastructure</h4>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center self-end group-hover:bg-white/[0.1] transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 text-primary-100" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
                className="glass-card glass-card-hover group cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-neutral-800/30 to-emerald-900/20 p-6 flex flex-col justify-between">
                  <h4 className="text-base font-medium text-primary-100">AI Integration</h4>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center self-end group-hover:bg-white/[0.1] transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 text-primary-100" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
