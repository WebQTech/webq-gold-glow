import { motion } from "framer-motion";
import { ArrowRight, Brain, RefreshCw, CreditCard, Landmark, Heart, Building2, GraduationCap, ShoppingCart, Factory, Truck, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const industries = {
  "AI & TECHNOLOGY": [
    {
      name: "AI-Based Tech Domain",
      icon: Brain,
      description: "AI enables tech companies to accelerate product development, automate testing, and deliver smarter features that anticipate user needs.",
      useCases: [
        "Intelligent code review and bug detection",
        "Automated QA and testing pipelines",
        "AI-powered product recommendations"
      ]
    },
    {
      name: "Legacy to AI Transformation",
      icon: RefreshCw,
      description: "Transform outdated systems into AI-ready platforms without disrupting operations, unlocking trapped data and automating manual processes.",
      useCases: [
        "Legacy data extraction and modernization",
        "API bridges connecting old systems to AI tools",
        "Gradual AI integration with zero downtime"
      ]
    }
  ],
  "FINANCE": [
    {
      name: "Banks & FinTech",
      icon: CreditCard,
      description: "AI revolutionizes financial services with real-time fraud detection, personalized banking experiences, and automated compliance.",
      useCases: [
        "ML-powered fraud detection and prevention",
        "Automated KYC/AML compliance",
        "Intelligent customer service chatbots"
      ]
    },
    {
      name: "Capital Markets",
      icon: Landmark,
      description: "High-performance AI solutions for trading, portfolio management, and regulatory compliance in securities and investment.",
      useCases: [
        "Algorithmic trading strategies",
        "Automated portfolio rebalancing",
        "Real-time risk assessment"
      ]
    }
  ],
  "PUBLIC SECTOR": [
    {
      name: "Healthcare Tech",
      icon: Heart,
      description: "AI improves patient outcomes through faster diagnostics, personalized treatment plans, and streamlined clinical workflows.",
      useCases: [
        "AI-assisted medical imaging analysis",
        "Predictive patient scheduling",
        "Automated clinical documentation"
      ]
    },
    {
      name: "Government",
      icon: Building2,
      description: "Modernize citizen services with AI-powered portals, document processing, and data-driven policy decisions.",
      useCases: [
        "Automated document processing and approvals",
        "Citizen service chatbots",
        "Predictive resource allocation"
      ]
    },
    {
      name: "EduTech",
      icon: GraduationCap,
      description: "AI transforms education with personalized learning paths, automated grading, and intelligent tutoring systems.",
      useCases: [
        "Adaptive learning platforms",
        "Automated essay and assignment grading",
        "Student performance prediction"
      ]
    }
  ],
  "COMMERCE & INDUSTRY": [
    {
      name: "Retail & E-commerce",
      icon: ShoppingCart,
      description: "AI drives sales through personalized recommendations, dynamic pricing, and intelligent inventory management.",
      useCases: [
        "AI-powered product recommendations",
        "Demand forecasting and inventory optimization",
        "Visual search and chatbot assistants"
      ]
    },
    {
      name: "Manufacturing",
      icon: Factory,
      description: "Smart manufacturing with predictive maintenance, quality control automation, and supply chain optimization.",
      useCases: [
        "Predictive equipment maintenance",
        "Computer vision quality inspection",
        "Production schedule optimization"
      ]
    },
    {
      name: "Logistics & Supply Chain",
      icon: Truck,
      description: "AI optimizes routes, predicts demand, and automates warehouse operations for faster, cheaper delivery.",
      useCases: [
        "Route optimization and fleet management",
        "Demand forecasting and planning",
        "Automated warehouse picking systems"
      ]
    },
    {
      name: "Energy & Utilities",
      icon: Zap,
      description: "AI enables smarter grids, predictive maintenance, and optimized energy distribution for sustainable operations.",
      useCases: [
        "Smart grid load balancing",
        "Predictive infrastructure maintenance",
        "Energy consumption optimization"
      ]
    }
  ]
};

const Industries = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Industries We Serve
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                AI solutions tailored to your sector's unique challenges and opportunities
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries by Category */}
        {Object.entries(industries).map(([category, categoryIndustries], categoryIndex) => (
          <section 
            key={category} 
            className={`py-16 lg:py-20 ${categoryIndex % 2 === 1 ? 'bg-muted/30' : ''}`}
          >
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-10"
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {category}
                </h2>
                <div className="w-20 h-1 bg-primary mt-4 rounded-full" />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {categoryIndustries.map((industry, index) => {
                  const Icon = industry.icon;
                  return (
                    <motion.div
                      key={industry.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {industry.name}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-5">
                        {industry.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {industry.useCases.map((useCase, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {useCase}
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={scrollToContact}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        Get in touch
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary/5">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Don't see your industry?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We work across sectors. Our AI expertise adapts to your unique business challenges.
              </p>
              <a
                href="/#contact"
                onClick={scrollToContact}
                className="mt-8 inline-flex items-center gap-2 btn-primary"
              >
                Book an Assessment
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;