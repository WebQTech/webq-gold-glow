import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} 
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <div className="pt-20 lg:pt-0">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight"
            >
              Technology,{" "}
              <span className="font-serif italic text-accent">reimagined</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg text-muted-foreground mt-8 max-w-md leading-relaxed"
            >
              Cutting edge AI-powered IT solutions designed for enterprises that demand excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-10"
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-opacity duration-300"
              >
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
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass-card relative group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-900/40 via-stone-800/40 to-neutral-900/40 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium text-foreground">
                    Enterprise Solutions
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">in WebQ Platform</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Explore</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-secondary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-foreground" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Cards Grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="glass-card group cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-stone-800/40 to-neutral-900/40 p-6 flex flex-col justify-between">
                  <h4 className="text-base font-medium text-foreground">Cloud Infrastructure</h4>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center self-end group-hover:bg-secondary transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 text-foreground" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="glass-card group cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-neutral-800/40 to-stone-900/40 p-6 flex flex-col justify-between">
                  <h4 className="text-base font-medium text-foreground">AI Integration</h4>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center self-end group-hover:bg-secondary transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 text-foreground" />
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
