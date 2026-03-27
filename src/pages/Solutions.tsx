import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Code2, BarChart3, Brain, Cloud, GitBranch, TestTube, Shield, Headphones, Building2, Database, LucideIcon, ChevronRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { solutionsData } from "@/data/solutionsData";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { GoBackButton } from "@/components/GoBackButton";

const solutionHighlights = [
  "AI & Machine Learning Solutions",
  "Cloud Migration & Infrastructure",
  "Enterprise Application Management",
  "Data Engineering & Analytics",
  "DevOps & Site Reliability Engineering",
  "Cybersecurity & Compliance",
];

const solutionCategories: { title: string; icon: LucideIcon; items: string[] }[] = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    items: ["generative-ai", "agentic-ai", "llm-solutions", "rag-solutions", "ai-ml-solutions", "nlp-services", "computer-vision", "mlops", "prompt-engineering"],
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
    title: "Databases & Data Infrastructure",
    icon: Database,
    items: ["database-administration", "database-migration", "cloud-database-services", "data-architecture", "nosql-newscale-databases"],
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

        {/* Hero — dark gradient matching Services page */}
        <section
          className="py-8 lg:py-10"
          style={{
            background: `linear-gradient(135deg, hsl(215 50% 10%) 0%, hsl(210 100% 22%) 60%, hsl(195 80% 30%) 100%)`,
          }}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <GoBackButton />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
              {/* Left — headline & description */}
              <div className="lg:col-span-3 animate-fade-in">
                <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-3">
                  <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-white/90 font-medium">Solutions</span>
                </nav>
                <h1 className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight">
                  Technology Solutions & Products
                </h1>
                <p className="mt-4 text-sm lg:text-base text-white/70 leading-relaxed max-w-2xl text-justify">
                  We deliver end-to-end technology—from ready-to-deploy products to fully customized solutions.
                  Our ten core offerings span AI, cloud, security, DevOps, and more, all grounded in industry-tested
                  frameworks and modern&nbsp;engineering.
                </p>
                <p className="mt-2 text-sm text-white/60 leading-relaxed max-w-2xl text-justify">
                  Every solution is engineered for enterprise scale, guided by measurable
                  outcomes, and delivered by domain experts with deep industry and
                  technology&nbsp;expertise.
                </p>
              </div>

              {/* Right — solution highlights */}
              <div className="lg:col-span-2 border-l-2 border-[hsl(195,100%,55%)] pl-5 animate-fade-in">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-[hsl(195,100%,55%)] mb-3">
                  What We Deliver
                </h2>
                <ul className="space-y-2">
                  {solutionHighlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-white/90"
                    >
                      <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-[hsl(195,100%,55%)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section title + divider */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-lg font-bold text-foreground uppercase tracking-wider whitespace-nowrap">
                Our Solution Categories
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutionCategories.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <div
                    key={category.title}
                    className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in"
                  >
                    <div className="px-5 pt-5 pb-3 border-b border-border/50 bg-gradient-to-r from-primary/[0.03] to-transparent">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                          <CategoryIcon className="w-4.5 h-4.5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                        <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
                          {category.title}
                        </h3>
                      </div>
                    </div>

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
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA — plum→gold gradient */}
        <section
          className="py-16 lg:py-[120px]"
          style={{
            background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(43 74% 58%) 100%)`,
          }}
        >
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white italic font-serif">
              Build Better.
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Let&apos;s discuss how our solutions can help you achieve your technology goals.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-white text-primary font-semibold px-12 py-4 rounded-full hover:bg-white/90 transition-colors"
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
