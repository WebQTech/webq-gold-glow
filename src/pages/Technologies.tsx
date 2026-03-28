import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronRight, Search, X } from "lucide-react";
import { Footer } from "@/components/Footer";
import { technologiesData, getAllTechnologyCategories } from "@/data/technologiesData";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { GoBackButton } from "@/components/GoBackButton";
import techHero1 from "@/assets/technologies-hero-1.jpg";
import techHero2 from "@/assets/technologies-hero-2.jpg";
import techHero3 from "@/assets/technologies-hero-3.jpg";

const heroImages = [
  { src: techHero1, alt: "AI and machine learning technology stack" },
  { src: techHero2, alt: "DevOps and CI/CD pipeline infrastructure" },
  { src: techHero3, alt: "Enterprise data analytics and cloud platforms" },
];

const technologyCategories = getAllTechnologyCategories().map(category => ({
  title: category,
  items: technologiesData.filter(t => t.category === category).map(t => t.slug),
}));

const techHighlights = [
  "AI & Machine Learning Frameworks",
  "Cloud-Native & Multi-Cloud Platforms",
  "Modern Frontend & Backend Stacks",
  "Data Engineering & Analytics Pipelines",
  "DevOps, CI/CD & Infrastructure as Code",
  "Enterprise Security & Compliance Tools",
];

const Technologies = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [highlightedCategory, setHighlightedCategory] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const filterOptions = ["All", ...technologyCategories.map((c) => c.title)];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setHighlightedCategory(null);
    if (filter === "All") return;
    setTimeout(() => {
      const el = document.getElementById(`tech-category-${filter.replace(/\s+/g, '-').toLowerCase()}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setHighlightedCategory(filter);
        setTimeout(() => setHighlightedCategory(null), 2000);
      }
    }, 50);
  };

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return technologyCategories;

    const q = searchQuery.toLowerCase();
    return technologyCategories
      .map((category) => ({
        ...category,
        items: category.items.filter((slug) => {
          const tech = technologiesData.find((t) => t.slug === slug);
          return tech && (
            tech.name.toLowerCase().includes(q) ||
            tech.shortDescription?.toLowerCase().includes(q)
          );
        }),
      }))
      .filter((category) => category.items.length > 0);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>

        {/* Hero */}
        <section
          className="py-8 lg:py-10"
          style={{
            background: `linear-gradient(135deg, hsl(215 50% 10%) 0%, hsl(210 100% 22%) 60%, hsl(195 80% 30%) 100%)`,
          }}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <GoBackButton />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-3 animate-fade-in">
                <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-3">
                  <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-white/90 font-medium">Technologies</span>
                </nav>
                <h1 className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight">
                  Technologies We Work With
                </h1>
                <p className="mt-4 text-sm lg:text-base text-white/70 leading-relaxed max-w-2xl text-justify">
                  We leverage a modern, battle‑tested technology stack across AI, cloud, data, and
                  enterprise platforms to deliver secure, scalable, and high‑performance&nbsp;solutions.
                </p>
                <p className="mt-2 text-sm text-white/60 leading-relaxed max-w-2xl text-justify">
                  Our technology choices prioritize real‑world reliability, deep interoperability, and
                  best‑practice alignment—ensuring faster time to value and long‑term&nbsp;maintainability.
                </p>
              </div>

              <div className="lg:col-span-2 border-l-2 border-[hsl(195,100%,55%)] pl-5 animate-fade-in">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-[hsl(195,100%,55%)] mb-3">
                  What We Cover
                </h2>
                <ul className="space-y-2">
                  {techHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                      <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-[hsl(195,100%,55%)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Category grid with filters & search */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Section header + search */}
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-lg font-bold text-foreground uppercase tracking-wider whitespace-nowrap">
                Our Technology Categories
              </h2>
              <div className="h-px flex-1 bg-border" />
              <div className="relative max-w-xs w-full shrink-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search technologies…"
                  className="w-full h-9 pl-9 pr-9 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterClick(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                    activeFilter === filter
                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                      : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* No results */}
            {filteredCategories.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <Search className="w-8 h-8 mx-auto mb-3 opacity-50" />
                <p className="text-sm">No technologies found for "{searchQuery}"</p>
                <button onClick={() => { setSearchQuery(""); setActiveFilter("All"); }} className="mt-2 text-sm text-primary hover:underline">
                  Clear filters
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((category) => (
                <div
                  key={category.title}
                  id={`tech-category-${category.title.replace(/\s+/g, '-').toLowerCase()}`}
                  className={`group rounded-xl border bg-card overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-500 animate-fade-in scroll-mt-24 ${
                    highlightedCategory === category.title
                      ? "border-primary ring-2 ring-primary/30 shadow-lg shadow-primary/10"
                      : "border-border"
                  }`}
                >
                  <div className="px-5 pt-5 pb-3 border-b border-border/50 bg-gradient-to-r from-primary/[0.03] to-transparent">
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
                      {category.title}
                      <span className="ml-2 text-xs font-normal text-muted-foreground lowercase tracking-normal">
                        {category.items.length} technologies
                      </span>
                    </h3>
                  </div>

                  <ul className="px-5 py-4 space-y-1.5">
                    {category.items.map((slug) => {
                      const tech = technologiesData.find(t => t.slug === slug);
                      if (!tech) return null;
                      const TechIcon = tech.icon;
                      return (
                        <li key={slug}>
                          <HoverCard openDelay={200} closeDelay={100}>
                            <HoverCardTrigger asChild>
                              <Link
                                to={`/technologies/${slug}`}
                                className="group/link flex items-center gap-2 text-base leading-normal text-primary hover:text-primary/80 transition-colors py-0.5"
                              >
                                <TechIcon className="w-3.5 h-3.5 text-muted-foreground group-hover/link:text-primary transition-colors shrink-0" />
                                <span>{tech.name}</span>
                                <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-200" />
                              </Link>
                            </HoverCardTrigger>
                            <HoverCardContent side="right" align="start" className="w-80 p-4">
                              <h4 className="text-sm font-semibold text-foreground mb-1">{tech.name}</h4>
                              <p className="text-xs text-muted-foreground mb-3">{tech.shortDescription}</p>
                              <p className="text-xs font-semibold text-foreground mb-2">Use Cases</p>
                              <ul className="space-y-1">
                                {tech.useCases.slice(0, 5).map((uc, i) => (
                                  <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                                    <CheckCircle2 className="w-3 h-3 mt-0.5 text-primary shrink-0" />
                                    {uc}
                                  </li>
                                ))}
                              </ul>
                              {tech.useCases.length > 5 && (
                                <p className="text-xs text-primary mt-2">+{tech.useCases.length - 5} more →</p>
                              )}
                            </HoverCardContent>
                          </HoverCard>
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
        <section className="py-10 lg:py-14 bg-primary/5">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Need a Specific Technology?
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
              Our teams are proficient across a wide range of technologies. Let&apos;s discuss your requirements.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 btn-primary"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Technologies;
