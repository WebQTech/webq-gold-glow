import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { solutionsData } from "@/data/solutionsData";
import { motion } from "framer-motion";

const solutionCategories = [
  {
    title: "Application Development",
    items: ["custom-app-development", "technology-modernization", "mobile-app-development", "api-integration", "low-code-no-code", "ui-ux-design"],
  },
  {
    title: "Cloud Services",
    items: ["cloud-migration", "it-infrastructure", "cloud-optimization", "hybrid-multi-cloud", "finops", "serverless-architecture"],
  },
  {
    title: "DevOps",
    items: ["devops-sre", "ci-cd-automation", "infrastructure-as-code", "platform-engineering", "observability-monitoring", "container-orchestration", "gitops-continuous-delivery", "chaos-engineering", "release-engineering"],
  },
  {
    title: "Quality Assurance",
    items: ["qa-testing", "performance-testing", "security-testing", "test-automation-framework", "accessibility-testing"],
  },
  {
    title: "Analytics & Data Management",
    items: ["data-analytics", "data-management", "business-intelligence", "data-governance", "data-warehousing", "etl-data-pipelines"],
  },
  {
    title: "AI & Machine Learning",
    items: ["ai-ml-solutions", "generative-ai", "agentic-ai", "mlops", "nlp-services", "rag-solutions", "computer-vision"],
  },
  {
    title: "Security",
    items: ["data-security", "information-security", "code-security", "cloud-instance-security", "identity-access-management", "cybersecurity-consulting", "compliance-governance", "soc-as-a-service", "penetration-testing", "zero-trust-security"],
  },
  {
    title: "Operations & Support",
    items: ["production-support", "managed-services", "it-service-management", "it-asset-management", "disaster-recovery", "procurement-services", "software-licensing", "bulk-hardware-services", "help-desk-support", "network-operations", "change-management", "business-continuity"],
  },
  {
    title: "Enterprise Application Management",
    items: ["erp-management", "crm-implementation", "enterprise-integration", "legacy-modernization", "enterprise-mobility", "supply-chain-management", "enterprise-content-management"],
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>

        {/* Running text marquee */}
        <div className="overflow-hidden py-3" style={{ backgroundColor: '#E5B94E' }}>
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(6)].map((_, i) => (
              <span key={i} className="text-2xl lg:text-3xl font-bold mx-12 shrink-0" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <span className="text-foreground">Comprehensive IT Solutions for </span>
                <span className="text-primary">Modern Enterprises</span>
                <span className="text-foreground mx-8">•</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Category grid */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutionCategories.map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="rounded-lg border border-border bg-card p-5 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 pb-2 border-b border-border">
                    {category.title}
                    <span className="ml-2 text-xs font-normal text-muted-foreground lowercase tracking-normal">
                      {category.items.length} solutions
                    </span>
                  </h3>
                  <ul className="space-y-1.5">
                    {category.items.map((slug) => {
                      const solution = solutionsData.find((s) => s.slug === slug);
                      if (!solution) return null;
                      return (
                        <li key={slug}>
                          <Link
                            to={`/solutions/${slug}`}
                            className="group flex items-center gap-1.5 text-[14px] leading-snug text-primary hover:text-primary/80 transition-colors"
                          >
                            <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                            {solution.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 lg:py-14 bg-primary/5">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s discuss how our solutions can help you achieve your technology goals.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 btn-primary"
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