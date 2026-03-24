import { Link } from "react-router-dom";
import { ArrowRight, Brain, Cloud, Shield, BarChart3, Cpu, Building2, Briefcase, Server } from "lucide-react";

const useCases = [
  {
    icon: Brain,
    area: "Solutions",
    title: "AI-Powered Diagnostics Platform",
    description: "Transformed legacy healthcare systems to deliver 10x faster patient insights using custom ML models and predictive analytics.",
    link: "/solutions/ai-machine-learning",
    tag: "AI & Machine Learning",
  },
  {
    icon: Cloud,
    area: "Technologies",
    title: "Multi-Cloud Enterprise Migration",
    description: "Migrated 200+ microservices to a multi-cloud architecture on AWS and Azure, reducing infrastructure costs by 35%.",
    link: "/technologies/aws",
    tag: "AWS · Azure · Kubernetes",
  },
  {
    icon: Briefcase,
    area: "Services",
    title: "Government Digital Transformation",
    description: "Delivered end-to-end consulting for a federal agency's IT modernization, replacing 15 legacy systems in 18 months.",
    link: "/services/govt-strategic-consulting",
    tag: "Strategic Consulting",
  },
  {
    icon: BarChart3,
    area: "Industries",
    title: "FinTech Real-Time Analytics",
    description: "Built a real-time fraud detection pipeline processing 5M+ transactions daily for a leading banking institution.",
    link: "/industries/banks-fintech",
    tag: "Banks & FinTech",
  },
  {
    icon: Shield,
    area: "Solutions",
    title: "Zero-Trust Security Architecture",
    description: "Implemented enterprise-wide zero-trust security framework, achieving SOC 2 and ISO 27001 compliance in 6 months.",
    link: "/solutions/security",
    tag: "Security",
  },
  {
    icon: Server,
    area: "Technologies",
    title: "E-Commerce Platform at Scale",
    description: "Supported 5M+ concurrent users with cloud-native architecture using React, Node.js, and Apache Kafka streaming.",
    link: "/industries/retail-ecommerce",
    tag: "Retail & E-Commerce",
  },
];

export const UseCasesSummary = () => {
  return (
    <section className="py-14 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Use Cases
          </h2>
          <div className="flex justify-center">
            <p className="text-base text-muted-foreground max-w-2xl border-l-4 border-yellow-400 pl-4 text-left">
              Real-world examples of how our solutions, technologies, services, and industry 
              expertise come together to deliver measurable business outcomes.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {useCases.map((useCase) => (
            <Link
              key={useCase.title}
              to={useCase.link}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <useCase.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {useCase.area}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {useCase.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {useCase.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                  {useCase.tag}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Explore All Solutions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
