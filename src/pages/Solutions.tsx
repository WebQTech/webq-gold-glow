import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { solutionsData } from "@/data/solutionsData";

const solutionCategories = [
  {
    title: "Application Development",
    items: ["custom-app-development", "technology-modernization"],
  },
  {
    title: "Cloud & Infrastructure",
    items: ["cloud-migration", "it-infrastructure"],
  },
  {
    title: "DevOps & Quality",
    items: ["devops-sre", "qa-testing"],
  },
  {
    title: "Data & Operations",
    items: ["data-analytics", "production-support"],
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        {/* Hero */}
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

        {/* Solutions by Category - Datavail-style */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
              {solutionCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="text-base font-black text-foreground uppercase tracking-wider mb-5 border-b border-border pb-3">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((slug) => {
                      const solution = solutionsData.find((s) => s.slug === slug);
                      if (!solution) return null;
                      return (
                        <li key={slug}>
                          <Link
                            to={`/solutions/${slug}`}
                            className="text-primary hover:underline underline-offset-4 transition-colors text-[15px] leading-relaxed"
                          >
                            {solution.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
