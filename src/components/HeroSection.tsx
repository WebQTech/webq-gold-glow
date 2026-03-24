import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

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
  const { reducedMotion } = useReducedMotion();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[75vh] min-h-[480px] max-h-[700px] overflow-hidden">
      {/* Full-bleed background image carousel */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0 z-0 origin-top"
          initial={{ opacity: reducedMotion ? 1 : 0, scale: 1 }}
          animate={{ opacity: 1, scale: reducedMotion ? 1 : 1.06 }}
          exit={{ opacity: reducedMotion ? 1 : 0 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : {
                  opacity: { duration: 1, ease: "easeInOut" },
                  scale: { duration: 5, ease: "linear" },
                }
          }
        >
          <img
            src={heroSlides[current].image}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-[hsl(215,50%,8%)]/60" />
      <div
        className="absolute inset-x-0 bottom-0 h-40 z-[1]"
        style={{
          background: "linear-gradient(to top, hsl(215 50% 8% / 0.85) 0%, transparent 100%)",
        }}
      />

      {/* Content overlay */}
      <div className="relative z-[2] h-full flex flex-col justify-end pb-10 lg:pb-14">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-end">
            {/* Left — headline & description */}
            <div className="lg:col-span-3">

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight">
                Built for Enterprise.{" "}
                <span className="text-[hsl(195,100%,55%)]">Powered by&nbsp;AI.</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/80 max-w-xl leading-relaxed">
                We help organizations move from traditional IT to modern,
                AI-enabled operations with stronger performance and measurable&nbsp;outcomes.
              </p>

            </div>

            {/* Right — highlights panel */}
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-5">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[hsl(195,100%,55%)] mb-3">
                What We Deliver
              </h2>
              <ul className="space-y-2.5">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-base text-white/85">
                    <ChevronRight className="w-4 h-4 mt-0.5 text-[hsl(195,100%,55%)] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Caption + Dot indicators — centered */}
          <div className="flex flex-col items-center gap-3 mt-10">
            <AnimatePresence mode="wait">
              <motion.span
                key={current}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4 }}
                className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold tracking-wide backdrop-blur-sm border border-white/20"
              >
                {heroSlides[current].caption}
              </motion.span>
            </AnimatePresence>
            <div className="flex gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-[hsl(195,100%,55%)] w-6"
                      : "bg-white/30 w-1.5 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
