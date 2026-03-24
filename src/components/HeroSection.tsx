import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
      <div className="relative h-[320px] sm:h-[400px] lg:h-[480px]">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img
              src={heroImages[current]}
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle bottom fade into text area */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 z-[1]"
          style={{
            background: `linear-gradient(to top, hsl(215 50% 8%) 0%, transparent 100%)`,
          }}
        />

        {/* Carousel dot indicators — overlaid on image */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[2] flex gap-2">
          {heroImages.map((_, i) => (
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
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[hsl(195,100%,55%)] text-[hsl(215,50%,8%)] font-semibold rounded-sm hover:bg-[hsl(195,100%,60%)] transition-colors"
                >
                  Get Started Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
