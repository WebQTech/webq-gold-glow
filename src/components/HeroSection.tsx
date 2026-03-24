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

const heroImages = [aiMlHero, genAiHero, cloudMigBiz, analyticsDashBiz, securityBiz, devopsBiz];

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
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-10 lg:py-14 overflow-hidden">
      {/* Background image carousel */}
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

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(135deg, hsla(215,50%,10%,0.55) 0%, hsla(210,100%,22%,0.45) 60%, hsla(195,80%,30%,0.35) 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-[2] container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-center">
          {/* Left — headline & description */}
          <div className="lg:col-span-3 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Built for Enterprise.{" "}
              <span className="text-[hsl(195,100%,55%)]">Powered by AI.</span>
            </h1>
            <p className="mt-5 text-base lg:text-lg text-white/70 max-w-2xl leading-relaxed text-justify">
              We help organizations move from traditional IT environments to modern,
              AI-enabled operations with stronger performance, cost efficiency,
              and measurable outcomes.
            </p>
            <p className="mt-2 text-sm text-white/60 max-w-2xl leading-relaxed text-justify">
              With expertise across <strong className="text-white/90">11+ industries</strong> and{" "}
              <strong className="text-white/90">15+ core services</strong>, we deliver end-to-end
              technology solutions — from strategy and consulting to implementation and managed support.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[hsl(210,100%,25%)] font-semibold rounded-sm hover:bg-white/90 transition-colors"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right — highlights panel */}
          <div className="lg:col-span-2 border-l-2 border-[hsl(195,100%,55%)] pl-5 animate-fade-in">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[hsl(195,100%,55%)] mb-3">
              What We Deliver
            </h2>
            <ul className="space-y-2.5">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-[hsl(195,100%,55%)] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Carousel dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-[hsl(195,100%,55%)] w-5" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
