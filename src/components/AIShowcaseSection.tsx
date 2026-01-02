import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { NeuralNetworkBackground } from "./NeuralNetworkBackground";

// Custom AI service illustrations
import aiMlIcon from "@/assets/ai-ml-icon.png";
import generativeAiIcon from "@/assets/generative-ai-icon.png";
import conversationalAiIcon from "@/assets/conversational-ai-icon.png";
import computerVisionIcon from "@/assets/computer-vision-icon.png";
import aiAutomationIcon from "@/assets/ai-automation-icon.png";

const aiServices = [
  {
    slug: "ai-machine-learning",
    name: "AI & Machine Learning",
    description: "Custom ML models, predictive analytics, and intelligent automation",
    image: aiMlIcon,
    gradient: "from-violet-500/20 to-purple-600/20",
    features: ["Custom ML Models", "Predictive Analytics", "Recommendation Engines"]
  },
  {
    slug: "generative-ai-solutions",
    name: "Generative AI",
    description: "LLM integration, RAG systems, and AI-powered content creation",
    image: generativeAiIcon,
    gradient: "from-amber-500/20 to-orange-600/20",
    features: ["GPT-4 & Claude Integration", "RAG Systems", "Content Generation"]
  },
  {
    slug: "conversational-ai",
    name: "Conversational AI",
    description: "Intelligent chatbots and virtual assistants for any channel",
    image: conversationalAiIcon,
    gradient: "from-emerald-500/20 to-teal-600/20",
    features: ["Multi-channel Bots", "Natural Language", "24/7 Support"]
  },
  {
    slug: "computer-vision",
    name: "Computer Vision",
    description: "Visual recognition, object detection, and image analysis",
    image: computerVisionIcon,
    gradient: "from-blue-500/20 to-cyan-600/20",
    features: ["Object Detection", "Image Classification", "Video Analytics"]
  },
  {
    slug: "ai-process-automation",
    name: "AI Automation",
    description: "Intelligent process automation combining AI with RPA",
    image: aiAutomationIcon,
    gradient: "from-rose-500/20 to-pink-600/20",
    features: ["Document Processing", "Decision Automation", "Workflow AI"]
  }
];

export const AIShowcaseSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
      id="ai-showcase"
    >
      {/* Neural Network Background */}
      <NeuralNetworkBackground />
      
      {/* Ambient glows */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Artificial Intelligence</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Transform Your Business with{" "}
            <span className="text-gradient">AI-Powered Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From generative AI to computer vision, we build intelligent systems that automate processes, 
            enhance decision-making, and create competitive advantages.
          </p>
        </motion.div>

        {/* AI Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {aiServices.map((service, index) => {
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group block h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden"
                >
                  {/* Custom Illustration */}
                  <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-16 h-16 object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 btn-gradient px-8 py-4"
          >
            Explore All AI Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};