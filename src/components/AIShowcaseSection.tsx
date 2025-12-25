import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Sparkles, MessageSquare, Eye, Workflow, Zap } from "lucide-react";

const aiServices = [
  {
    slug: "ai-machine-learning",
    name: "AI & Machine Learning",
    description: "Custom ML models, predictive analytics, and intelligent automation",
    icon: Brain,
    gradient: "from-violet-500 to-purple-600",
    features: ["Custom ML Models", "Predictive Analytics", "Recommendation Engines"]
  },
  {
    slug: "generative-ai-solutions",
    name: "Generative AI",
    description: "LLM integration, RAG systems, and AI-powered content creation",
    icon: Sparkles,
    gradient: "from-amber-500 to-orange-600",
    features: ["GPT-4 & Claude Integration", "RAG Systems", "Content Generation"]
  },
  {
    slug: "conversational-ai",
    name: "Conversational AI",
    description: "Intelligent chatbots and virtual assistants for any channel",
    icon: MessageSquare,
    gradient: "from-emerald-500 to-teal-600",
    features: ["Multi-channel Bots", "Natural Language", "24/7 Support"]
  },
  {
    slug: "computer-vision",
    name: "Computer Vision",
    description: "Visual recognition, object detection, and image analysis",
    icon: Eye,
    gradient: "from-blue-500 to-cyan-600",
    features: ["Object Detection", "Image Classification", "Video Analytics"]
  },
  {
    slug: "ai-process-automation",
    name: "AI Automation",
    description: "Intelligent process automation combining AI with RPA",
    icon: Workflow,
    gradient: "from-rose-500 to-pink-600",
    features: ["Document Processing", "Decision Automation", "Workflow AI"]
  }
];

const stats = [
  { value: "95%", label: "Accuracy Rate" },
  { value: "10x", label: "Faster Processing" },
  { value: "60%", label: "Cost Reduction" },
  { value: "24/7", label: "AI Availability" }
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
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 opacity-30">
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

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* AI Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {aiServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group block h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
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
          transition={{ duration: 0.6, delay: 0.8 }}
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
