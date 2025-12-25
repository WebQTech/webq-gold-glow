import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const heroSlides = [
  {
    label: "AI Solutions",
    title: "Engineering AI for enterprise impact",
    description: "We help you harness AI's transformative power with enterprise-grade solutions that deliver measurable business outcomes.",
    cta: "Get started",
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
