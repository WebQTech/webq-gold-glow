import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroAiVisual from "@/assets/hero-ai-visual.png";

const heroSlides = [
  {
    label: "AI Solutions",
    title: "From AI pilot to production in 8 weeks",
    description: "We build custom ML models, intelligent automation, and GenAI systems for enterprises ready to move fast — without ripping out what already works.",
    cta: "Book a free AI assessment",
    ctaLink: "#solutions",
  },
  {
    label: "Cloud Services",
    title: "Accelerate your cloud transformation",
    description: "Modernize your infrastructure with our comprehensive cloud migration and management services across AWS, Azure, and GCP.",
    cta: "Explore now",
    ctaLink: "#solutions",
  },
  {
    label: "Digital Transformation",
    title: "Reimagine your business processes",
    description: "Transform legacy systems into agile, scalable platforms that drive innovation and competitive advantage.",
    cta: "Learn more",
    ctaLink: "#solutions",
  },
];

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentSlide = heroSlides[activeTab];

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Dark blue background with geometric pattern */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, hsl(215 50% 12%) 0%, hsl(210 100% 20%) 50%, hsl(215 50% 12%) 100%)`,
        }}
      />

      {/* AI Visual on right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img 
            src={heroAiVisual} 
            alt="AI Network Visualization" 
            className="w-full h-full object-cover object-center"
            style={{
              maskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
            }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-16 lg:pt-24">
        <div className="max-w-2xl">
          {/* Label */}
          <motion.div
            key={`label-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-[hsl(195,100%,45%)] text-sm font-medium tracking-wide">
              {currentSlide.label}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            key={`title-${activeTab}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
          >
            {currentSlide.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            key={`desc-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-white/70 max-w-lg leading-relaxed"
          >
            {currentSlide.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            key={`cta-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <a 
              href={currentSlide.ctaLink}
              className="inline-flex items-center gap-2 btn-white text-base"
            >
              {currentSlide.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom tab navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 pb-6">
            {/* Scroll indicator */}
            <motion.div
              className="mr-4 text-white/50 hidden lg:block"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>

            {/* Tabs */}
            <div className="flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-sm">
              {heroSlides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`hero-tab ${activeTab === index ? 'active' : ''}`}
                >
                  {slide.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
