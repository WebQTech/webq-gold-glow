import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { solutionsData } from "@/data/solutionsData";

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

        {/* Solutions by Category — masonry-style 3-col */}
        <section className="pb-10 lg:pb-14 pt-2">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-10">
              {solutionCategories.map((category) => (
                <div key={category.title} className="break-inside-avoid mb-6">
                  <h3 className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-3 border-b border-border pb-2">
                    {category.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {category.items.map((slug) => {
                      const solution = solutionsData.find((s) => s.slug === slug);
                      if (!solution) return null;
                      return (
                        <li key={slug}>
                          <Link
                            to={`/solutions/${slug}`}
                            className="text-primary hover:underline underline-offset-4 transition-colors text-[14px] leading-snug"
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
        <section className="py-8 lg:py-12 bg-primary/5">
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