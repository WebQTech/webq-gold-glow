import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Code2, BarChart3, Brain, Cloud, GitBranch, TestTube, Shield, Headphones, Building2, LucideIcon } from "lucide-react";
import { Footer } from "@/components/Footer";
import { solutionsData } from "@/data/solutionsData";
import { motion } from "framer-motion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const solutionCategories: { title: string; icon: LucideIcon; items: string[] }[] = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    items: ["ai-ml-solutions", "generative-ai", "agentic-ai", "llm-solutions", "prompt-engineering", "mlops", "nlp-services", "rag-solutions", "computer-vision"],
  },
  {
    title: "Analytics & Data Management",
    icon: BarChart3,
    items: ["data-analytics", "data-management", "business-intelligence", "data-governance", "data-warehousing", "etl-data-pipelines"],
  },
  {
    title: "Cloud Services",
    icon: Cloud,
    items: ["cloud-migration", "it-infrastructure", "cloud-optimization", "hybrid-multi-cloud", "finops", "serverless-architecture"],
  },
  {
    title: "Application Development",
    icon: Code2,
    items: ["custom-app-development", "technology-modernization", "mobile-app-development", "api-integration", "low-code-no-code", "ui-ux-design"],
  },
  {
    title: "DevOps",
    icon: GitBranch,
    items: ["devops-sre", "ci-cd-automation", "infrastructure-as-code", "platform-engineering", "observability-monitoring", "container-orchestration", "gitops-continuous-delivery", "chaos-engineering", "release-engineering"],
  },
  {
    title: "Enterprise Application Management",
    icon: Building2,
    items: ["erp-management", "crm-implementation", "enterprise-integration", "legacy-modernization", "enterprise-mobility", "supply-chain-management", "enterprise-content-management"],
  },
  {
    title: "Security",
    icon: Shield,
    items: ["data-security", "information-security", "code-security", "cloud-instance-security", "identity-access-management", "cybersecurity-consulting", "compliance-governance", "soc-as-a-service", "penetration-testing", "zero-trust-security"],
  },
  {
    title: "Quality Assurance",
    icon: TestTube,
    items: ["qa-testing", "performance-testing", "security-testing", "test-automation-framework", "accessibility-testing"],
  },
  {
    title: "Operations & Support",
    icon: Headphones,
    items: ["production-support", "managed-services", "it-service-management", "it-asset-management", "disaster-recovery", "procurement-services", "software-licensing", "bulk-hardware-services", "help-desk-support", "network-operations", "change-management", "business-continuity", "global-operations-support"],
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>

        {/* Category grid */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutionCategories.map((category, idx) => {
                const CategoryIcon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Card header with gradient accent */}
                    <div className="px-5 pt-5 pb-3 border-b border-border/50 bg-gradient-to-r from-primary/[0.03] to-transparent">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                          <CategoryIcon className="w-4.5 h-4.5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Solution links */}
                    <ul className="px-5 py-4 space-y-1.5">
                      {category.items.map((slug) => {
                        const solution = solutionsData.find((s) => s.slug === slug);
                        if (!solution) return null;
                        const SolutionIcon = solution.icon;
                        return (
                          <li key={slug}>
                            <HoverCard openDelay={200} closeDelay={100}>
                              <HoverCardTrigger asChild>
                                <Link
                                  to={`/solutions/${slug}`}
                                  className="group/link flex items-center gap-2 text-base leading-normal text-primary hover:text-primary/80 transition-colors py-0.5"
                                >
                                  <SolutionIcon className="w-3.5 h-3.5 text-muted-foreground group-hover/link:text-primary transition-colors shrink-0" />
                                  <span>{solution.name}</span>
                                  <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-200" />
                                </Link>
                              </HoverCardTrigger>
                              <HoverCardContent side="right" align="start" className="w-80 p-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center">
                                    <SolutionIcon className="w-4 h-4 text-primary" />
                                  </div>
                                  <h4 className="text-sm font-semibold text-foreground">{solution.name}</h4>
                                </div>
                                <p className="text-xs text-muted-foreground mb-3">{solution.shortDescription}</p>
                                <p className="text-xs font-semibold text-foreground mb-2">What We Deliver</p>
                                <ul className="space-y-1">
                                  {solution.features.slice(0, 5).map((feature, i) => (
                                    <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                                      <CheckCircle2 className="w-3 h-3 mt-0.5 text-primary shrink-0" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                                {solution.features.length > 5 && (
                                  <p className="text-xs text-primary mt-2">+{solution.features.length - 5} more →</p>
                                )}
                              </HoverCardContent>
                            </HoverCard>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                );
              })}
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
