import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Import a curated set of solution images for the hero carousel
import aiMlHero from "@/assets/solutions/ai-ml-hero-1.jpg";
import genAiHero from "@/assets/solutions/generative-ai-hero-1.jpg";
import cloudMigBiz from "@/assets/solutions/cloud-migration-biz.jpg";
import analyticsDashBiz from "@/assets/solutions/analytics-dashboard-biz.jpg";
import securityBiz from "@/assets/solutions/security-biz.jpg";
import devopsBiz from "@/assets/solutions/devops-biz.jpg";

const heroSlides = [
  { image: aiMlHero, caption: "AI & Machine Learning" },
  { image: genAiHero, caption: "Generative AI" },
  { image: cloudMigBiz, caption: "Cloud Services" },
  { image: analyticsDashBiz, caption: "Data & Analytics" },
  { image: securityBiz, caption: "Cybersecurity" },
  { image: devopsBiz, caption: "DevOps & SRE" },
];

const highlights = [
  "AI & Machine Learning Solutions",
  "Cloud Migration & Infrastructure",
  "Enterprise Application Management",
  "Data Engineering & Analytics",
  "DevOps & Site Reliability Engineering",
  "Cybersecurity & Compliance",
];

export const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Top: Full-width image carousel */}
      <div className="relative h-[220px] sm:h-[280px] lg:h-[340px]">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.01 }}
            animate={{ opacity: 1, scale: 1.06 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1, ease: "easeInOut" },
              scale: { duration: 5, ease: "linear" },
            }}
          >
            <img
              src={heroSlides[current].image}
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle bottom fade into text area */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 z-[1]"
          style={{
            background: `linear-gradient(to top, hsl(215 50% 8% / 0.72) 0%, transparent 100%)`,
          }}
        />

        {/* Caption + dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-3">
          <AnimatePresence mode="wait">
            <motion.span
              key={current}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4 }}
              className="px-5 py-1.5 rounded-full bg-white/90 text-[hsl(210,100%,35%)] text-sm font-semibold shadow-md backdrop-blur-sm"
            >
              {heroSlides[current].caption}
            </motion.span>
          </AnimatePresence>
          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-[hsl(195,100%,55%)] w-5" : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: Text content on solid dark background */}
      <div className="bg-[hsl(215,50%,8%)] py-10 lg:py-14">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
            {/* Left — headline & description */}
            <div className="lg:col-span-3 animate-fade-in">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Built for Enterprise.{" "}
                <span className="text-[hsl(195,100%,55%)]">Powered by AI.</span>
              </h1>
              <p className="mt-5 text-base lg:text-lg text-white/75 max-w-2xl leading-relaxed">
                We help organizations move from traditional IT environments to modern,
                AI-enabled operations with stronger performance, cost efficiency,
                and measurable outcomes.
              </p>
              <p className="mt-2 text-sm text-white/60 max-w-2xl leading-relaxed">
                With expertise across <strong className="text-white/90">11+ industries</strong> and{" "}
                <strong className="text-white/90">15+ core services</strong>, we deliver end-to-end
                technology solutions — from strategy and consulting to implementation and managed support.
              </p>
            </div>

            {/* Right — highlights panel */}
            <div className="lg:col-span-2 border-l-2 border-[hsl(195,100%,55%)]/40 pl-5 animate-fade-in">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[hsl(195,100%,55%)] mb-3">
                What We Deliver
              </h2>
              <ul className="space-y-2.5">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/85">
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-[hsl(195,100%,55%)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
