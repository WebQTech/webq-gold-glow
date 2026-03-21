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
    items: ["devops-sre", "ci-cd-automation", "infrastructure-as-code", "platform-engineering", "observability-monitoring"],
  },
  {
    title: "Quality Assurance",
    items: ["qa-testing", "performance-testing", "security-testing", "test-automation-framework", "accessibility-testing"],
  },
  {
    title: "Analytics & Data Management",
    items: ["data-analytics", "data-management", "business-intelligence", "ai-ml-solutions"],
  },
  {
    title: "Security",
    items: ["data-security", "information-security", "code-security", "cloud-instance-security", "identity-access-management", "cybersecurity-consulting", "compliance-governance"],
  },
  {
    title: "Operations & Support",
    items: ["production-support", "managed-services", "it-service-management", "it-asset-management", "disaster-recovery"],
  },
];

const Solutions = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return solutionCategories;

    const query = searchQuery.toLowerCase();
    return solutionCategories
      .map((category) => {
        const matchingItems = category.items.filter((slug) => {
          const solution = solutionsData.find((s) => s.slug === slug);
          if (!solution) return false;
          return (
            solution.name.toLowerCase().includes(query) ||
            solution.shortDescription.toLowerCase().includes(query) ||
            category.title.toLowerCase().includes(query)
          );
        });
        return { ...category, items: matchingItems };
      })
      .filter((category) => category.items.length > 0);
  }, [searchQuery]);

  const totalResults = filteredCategories.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        {/* Search Bar */}
        <section className="pt-10 lg:pt-16 pb-4">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-xl relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Search solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow text-[15px]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>
            {searchQuery.trim() && (
              <p className="mt-3 text-sm text-muted-foreground">
                {totalResults} result{totalResults !== 1 ? "s" : ""} found
                {totalResults === 0 && " — try a different keyword"}
              </p>
            )}
          </div>
        </section>

        {/* Solutions by Category */}
        <section className="py-6 lg:py-10">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
              {filteredCategories.map((category) => (
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
