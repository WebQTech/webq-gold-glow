import { Link } from "react-router-dom";
import { ArrowRight, Code2, Cloud, Server, RefreshCw, TestTube, Headphones, Settings, Database } from "lucide-react";
import { Footer } from "@/components/Footer";

const solutions = [
  {
    number: "01",
    name: "Custom Software Development",
    description: "Tailored web, mobile, and enterprise applications built for your unique business needs.",
    slug: "custom-app-development",
    icon: Code2,
  },
  {
    number: "02",
    name: "Cloud Migration & Deployment",
    description: "Seamless transition from legacy systems to modern, scalable cloud infrastructure.",
    slug: "cloud-migration",
    icon: Cloud,
  },
  {
    number: "03",
    name: "IT Infrastructure Management",
    description: "End-to-end monitoring, management, and optimization of your technology infrastructure.",
    slug: "it-infrastructure",
    icon: Server,
  },
  {
    number: "04",
    name: "Technology Modernization",
    description: "Transform legacy systems into modern, maintainable, and high-performing platforms.",
    slug: "technology-modernization",
    icon: RefreshCw,
  },
  {
    number: "05",
    name: "Quality Assurance & Test Automation",
    description: "Comprehensive QA strategies with automated testing pipelines for reliable releases.",
    slug: "qa-testing",
    icon: TestTube,
  },
  {
    number: "06",
    name: "Production Support & Monitoring",
    description: "24/7 application monitoring, incident management, and performance optimization.",
    slug: "production-support",
    icon: Headphones,
  },
  {
    number: "07",
    name: "DevOps & Site Reliability Engineering",
    description: "CI/CD pipelines, infrastructure as code, Kubernetes, and observability at scale.",
    slug: "devops-sre",
    icon: Settings,
  },
  {
    number: "08",
    name: "Data Engineering & Analytics",
    description: "Data pipelines, warehousing, BI dashboards, streaming, and governance solutions.",
    slug: "data-analytics",
    icon: Database,
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        <section className="py-10 lg:py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="section-label">What We Deliver</span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                End-to-End Solutions for{" "}
                <span className="text-primary">Digital Transformation</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                From custom software development to cloud infrastructure and DevOps,
                we deliver scalable solutions that modernize your operations and accelerate growth.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <Link
                    key={solution.slug}
                    to={`/services/${solution.slug}`}
                    className="group block bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {solution.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{solution.description}</p>
                    <div className="flex items-center gap-2 text-sm text-primary font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-16 bg-primary/5">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s discuss how our solutions can help you achieve your technology goals.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 btn-primary"
            >
              Contact Us Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;