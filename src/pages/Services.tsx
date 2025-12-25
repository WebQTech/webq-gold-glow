import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Code2, Cloud, Server, RefreshCw, TestTube, Headphones, Settings, Database,
  Shield, Smartphone, Brain, Layers, Zap, Users, BarChart3, Lock,
  ArrowRight
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const allServices = [
  {
    category: "Development & Engineering",
    services: [
      {
        name: "Custom Software Development",
        description: "Full-cycle development from requirements to deployment, tailored to your specific business needs.",
        icon: Code2,
        features: [
          "Technology stack selection (React, Node, Python, .NET)",
          "API design and third-party integrations",
          "Legacy system modernization",
          "Dedicated development teams"
        ]
      },
      {
        name: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        icon: Smartphone,
        features: [
          "React Native & Flutter development",
          "Native iOS (Swift) and Android (Kotlin)",
          "App Store optimization",
          "Push notifications & analytics"
        ]
      },
      {
        name: "AI & Machine Learning",
        description: "Intelligent solutions powered by cutting-edge AI and ML technologies.",
        icon: Brain,
        features: [
          "Custom ML model development",
          "Natural language processing",
          "Computer vision solutions",
          "Predictive analytics"
        ]
      },
      {
        name: "API Development & Integration",
        description: "Seamless connectivity between your systems and third-party services.",
        icon: Layers,
        features: [
          "RESTful & GraphQL APIs",
          "Microservices architecture",
          "Third-party integrations",
          "API documentation & versioning"
        ]
      },
    ]
  },
  {
    category: "Cloud & Infrastructure",
    services: [
      {
        name: "Cloud Migration & Deployment",
        description: "Seamless transition from legacy systems to modern cloud infrastructure.",
        icon: Cloud,
        features: [
          "Migration readiness assessment",
          "AWS, Azure, and Google Cloud",
          "Zero-downtime migration",
          "Cost optimization strategies"
        ]
      },
      {
        name: "IT Infrastructure Management",
        description: "24/7 monitoring and management of your critical IT infrastructure.",
        icon: Server,
        features: [
          "Infrastructure monitoring & alerting",
          "Server & network administration",
          "Disaster recovery planning",
          "Vendor management"
        ]
      },
      {
        name: "DevOps & SRE",
        description: "Streamlined development operations and site reliability engineering.",
        icon: Settings,
        features: [
          "CI/CD pipeline implementation",
          "Infrastructure as Code",
          "Kubernetes orchestration",
          "SLO/SLI management"
        ]
      },
      {
        name: "Technology Modernization",
        description: "Transform legacy systems into scalable, modern applications.",
        icon: RefreshCw,
        features: [
          "Monolith to microservices",
          "Containerization (Docker/K8s)",
          "Database modernization",
          "Technical debt reduction"
        ]
      },
    ]
  },
  {
    category: "Data & Analytics",
    services: [
      {
        name: "Data Engineering",
        description: "Build robust data pipelines and warehousing solutions.",
        icon: Database,
        features: [
          "ETL pipeline development",
          "Data warehouse design",
          "Real-time data streaming",
          "Data governance frameworks"
        ]
      },
      {
        name: "Business Intelligence",
        description: "Transform data into actionable insights for better decision-making.",
        icon: BarChart3,
        features: [
          "Custom BI dashboards",
          "KPI tracking & reporting",
          "Data visualization",
          "Self-service analytics"
        ]
      },
    ]
  },
  {
    category: "Quality & Security",
    services: [
      {
        name: "Quality Assurance",
        description: "Comprehensive testing strategies to ensure software excellence.",
        icon: TestTube,
        features: [
          "Automated testing frameworks",
          "Performance & load testing",
          "Security testing",
          "UAT coordination"
        ]
      },
      {
        name: "Cybersecurity Services",
        description: "Protect your digital assets with enterprise-grade security solutions.",
        icon: Shield,
        features: [
          "Security audits & assessments",
          "Penetration testing",
          "Compliance management",
          "Incident response planning"
        ]
      },
      {
        name: "Identity & Access Management",
        description: "Secure authentication and authorization for your applications.",
        icon: Lock,
        features: [
          "SSO implementation",
          "Multi-factor authentication",
          "Role-based access control",
          "Identity governance"
        ]
      },
    ]
  },
  {
    category: "Support & Consulting",
    services: [
      {
        name: "Production Support",
        description: "24/7 application monitoring, incident response, and optimization.",
        icon: Headphones,
        features: [
          "Real-time monitoring & alerting",
          "Incident management",
          "Root cause analysis",
          "SLA management"
        ]
      },
      {
        name: "Digital Transformation Consulting",
        description: "Strategic guidance for your digital transformation journey.",
        icon: Zap,
        features: [
          "Technology roadmapping",
          "Process optimization",
          "Change management",
          "ROI analysis"
        ]
      },
      {
        name: "Team Augmentation",
        description: "Scale your team with skilled professionals on demand.",
        icon: Users,
        features: [
          "Dedicated developers",
          "Flexible engagement models",
          "Domain expertise",
          "Seamless integration"
        ]
      },
    ]
  },
];

const ServiceCard = ({ service, index }: { service: typeof allServices[0]['services'][0]; index: number }) => {
  const Icon = service.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon className="w-6 h-6 text-primary group-hover:text-white" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{service.name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Services = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="section-label">Our Services</span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Comprehensive IT Solutions for{" "}
              <span className="text-primary">Modern Enterprises</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              From custom software development to cloud infrastructure and AI-powered solutions, 
              we deliver end-to-end technology services that drive business transformation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/#contact" className="btn-primary inline-flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/#solutions" className="btn-secondary inline-flex items-center gap-2">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services by Category */}
      {allServices.map((category, categoryIndex) => {
        const categoryRef = useRef(null);
        const isCategoryInView = useInView(categoryRef, { once: true, margin: "-100px" });

        return (
          <section key={category.category} ref={categoryRef} className="py-12 lg:py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isCategoryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {category.category}
                </h2>
                <div className="mt-2 w-16 h-1 bg-primary rounded-full" />
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.services.map((service, index) => (
                  <ServiceCard key={service.name} service={service} index={index} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your technology goals.
          </p>
          <Link 
            to="/#contact" 
            className="mt-8 inline-flex items-center gap-2 btn-primary"
          >
            Contact Us Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
