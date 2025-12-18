import { motion } from "framer-motion";
import { ArrowRight, Building2, Cloud, Brain } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20">
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight"
            >
              Technology,{" "}
              <span className="font-serif italic text-primary">reimagined</span>
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
                className="inline-flex items-center gap-2 px-7 py-3.5 btn-gradient text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity duration-300"
              >
                Get Started
              </a>
            </motion.div>
          </div>

          {/* Right Column - Visual Cards */}
          <div className="relative lg:pt-8">
            {/* Main Card - Enterprise Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 gradient-border"
            >
              <div className="relative p-6 flex flex-col justify-between min-h-[220px]">
                <div>
                  <Building2 className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-2xl md:text-3xl font-medium text-foreground">
                    Enterprise Solutions
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 max-w-xs">
                    End-to-end infrastructure management for scaling businesses
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm font-medium text-primary">500+ projects delivered</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-foreground" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Cards Grid */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              {/* Cloud Infrastructure Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 gradient-border"
              >
                <div className="relative p-6 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <Cloud className="w-8 h-8 text-accent mb-3" />
                    <h4 className="text-base font-medium text-foreground">Cloud Infrastructure</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Seamless migration & deployment across all platforms
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs font-medium text-accent">99.9% uptime</span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors"
                    >
                      <ArrowRight className="w-3 h-3 text-foreground" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* AI Integration Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 gradient-border"
              >
                <div className="relative p-6 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <Brain className="w-8 h-8 text-primary mb-3" />
                    <h4 className="text-base font-medium text-foreground">AI Integration</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Intelligent automation that drives real results
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs font-medium text-primary">10x faster processing</span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors"
                    >
                      <ArrowRight className="w-3 h-3 text-foreground" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
