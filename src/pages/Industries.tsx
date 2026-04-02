import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronRight, Search, X } from "lucide-react";
import { Footer } from "@/components/Footer";
import { industriesData, getAllIndustryCategories } from "@/data/industriesData";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { GoBackButton } from "@/components/GoBackButton";
import { Helmet } from "react-helmet-async";
import industriesHero1 from "@/assets/industries-hero-1.jpg";
import industriesHero2 from "@/assets/industries-hero-2.jpg";
import industriesHero3 from "@/assets/industries-hero-3.jpg";

const heroSlides = [
  { type: "content" as const },
  { type: "image" as const, src: industriesHero1, alt: "Banking and financial services technology" },
  { type: "image" as const, src: industriesHero2, alt: "Healthcare technology and life sciences" },
  { type: "image" as const, src: industriesHero3, alt: "Retail logistics and supply chain automation" },
];

const industryCategories = getAllIndustryCategories().map(category => ({
  title: category,
  items: industriesData.filter(i => i.category === category).map(i => i.slug),
}));

const industryHighlights = [
  "AI-Centric Digital Innovation & Transformation",
  "Banking & Financial Services",
  "FinTech & Digital Payments",
  "Credit Unions & Financial Cooperatives",
  "Public Sector & Government Consulting",
  "Healthcare, EdTech & Life Sciences",
  "Retail, E-commerce & Consumer Markets",
  "Manufacturing, Logistics & Supply Chain",
];

const Industries = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [highlightedCategory, setHighlightedCategory] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeroReady, setIsHeroReady] = useState(false);

  useEffect(() => {
    let loaded = 0;
    const imageSlides = heroSlides.filter(s => s.type === "image");
    if (imageSlides.length === 0) { setIsHeroReady(true); return; }
    imageSlides.forEach((slide) => {
      if (slide.type === "image") {
        const img = new Image();
        img.src = slide.src;
        img.onload = img.onerror = () => {
          loaded++;
          if (loaded >= 1) setIsHeroReady(true);
        };
      }
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const filterOptions = ["All", ...industryCategories.map((c) => c.title)];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setHighlightedCategory(null);
    if (filter === "All") return;
    setTimeout(() => {
      const el = document.getElementById(`industry-category-${filter.replace(/\s+/g, '-').toLowerCase()}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setHighlightedCategory(filter);
        setTimeout(() => setHighlightedCategory(null), 2000);
      }
    }, 50);
  };

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return industryCategories;

    const q = searchQuery.toLowerCase();
    return industryCategories
      .map((category) => ({
        ...category,
        items: category.items.filter((slug) => {
          const industry = industriesData.find((i) => i.slug === slug);
          return industry && (
            industry.name.toLowerCase().includes(q) ||
            industry.shortDescription?.toLowerCase().includes(q)
          );
        }),
      }))
      .filter((category) => category.items.length > 0);
  }, [searchQuery]);

  return (
    <>
      <Helmet>
        <title>Industries | WebQ Technologies - Industry Solutions & Expertise</title>
        <meta name="description" content="WebQ Technologies serves banking, healthcare, government, retail, manufacturing, and more with tailored enterprise technology solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>

        {/* Hero — dark gradient matching Services page */}
        <section
          className="py-6 lg:py-8"
          style={{
            background: `linear-gradient(135deg, hsl(215 50% 10%) 0%, hsl(210 100% 22%) 60%, hsl(195 80% 30%) 100%)`,
          }}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <GoBackButton />
            <div className={`grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8 items-start transition-opacity duration-500 ${isHeroReady ? "opacity-100" : "opacity-0"}`}>
              <div className="lg:col-span-3 animate-fade-in">
                <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-3">
                  <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-white/90 font-medium">Industries</span>
                </nav>
                <h1 className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight">
                  Industries We Serve
                </h1>
                <p className="mt-4 text-sm lg:text-base text-white/70 leading-relaxed max-w-2xl text-justify">
                  We partner with organizations across industries to deliver technology
                  solutions informed by real‑world experience and powered by modern AI,
                  cloud, data, and enterprise&nbsp;platforms.
                </p>
                <p className="mt-2 text-sm text-white/60 leading-relaxed max-w-2xl text-justify">
                  From highly regulated sectors like banking, healthcare, and government to
                  fast‑paced industries such as retail and logistics, our solutions are tailored
                  to deliver measurable outcomes, operational resilience, and long‑term&nbsp;success.
                </p>
              </div>

              <div className="lg:col-span-2 hidden lg:block relative aspect-[3/2] rounded-xl overflow-hidden shadow-2xl">
                  {heroSlides.map((slide, idx) => (
                    slide.type === "content" ? (
                      <div
                        key="content-slide"
                        className={`absolute inset-0 w-full h-full flex flex-col justify-center px-6 transition-opacity duration-700 ${idx === currentSlide ? "opacity-100" : "opacity-0"}`}
                        style={{
                          background: `linear-gradient(135deg, hsl(215 50% 12%) 0%, hsl(210 100% 20%) 60%, hsl(195 80% 28%) 100%)`,
                        }}
                      >
                        <h2 className="text-xs font-semibold uppercase tracking-widest text-[hsl(195,100%,55%)] mb-4 border-l-2 border-[hsl(195,100%,55%)] pl-3">
                          Industries We Serve
                        </h2>
                        <ul className="space-y-2.5 pl-3">
                          {industryHighlights.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                              <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-[hsl(195,100%,55%)] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <img
                        key={idx}
                        src={slide.src}
                        alt={slide.alt}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === currentSlide ? "opacity-100" : "opacity-0"}`}
                        width={960}
                        height={640}
                      />
                    )
                  ))}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {heroSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? "bg-white w-5" : "bg-white/50"}`}
                        aria-label={`View slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* Section title + search + filters */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-lg font-bold text-foreground uppercase tracking-wider whitespace-nowrap">
                Industry Categories
              </h2>
              <div className="h-px flex-1 bg-border" />
              <div className="relative max-w-xs w-full shrink-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search industries…"
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
                <p className="text-sm">No industries found for "{searchQuery}"</p>
                <button onClick={() => { setSearchQuery(""); setActiveFilter("All"); }} className="mt-2 text-sm text-primary hover:underline">
                  Clear filters
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((category) => (
                <div
                  key={category.title}
                  id={`industry-category-${category.title.replace(/\s+/g, '-').toLowerCase()}`}
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
                        {category.items.length} industries
                      </span>
                    </h3>
                  </div>
                  <ul className="px-5 py-4 space-y-1.5">
                    {category.items.map((slug) => {
                      const industry = industriesData.find(i => i.slug === slug);
                      if (!industry) return null;
                      const Icon = industry.icon;
                      return (
                        <li key={slug}>
                          <HoverCard openDelay={200} closeDelay={100}>
                            <HoverCardTrigger asChild>
                              <Link
                                to={`/industries/${slug}`}
                                className="group/link flex items-center gap-2 text-base leading-normal text-primary hover:text-primary/80 transition-colors py-0.5"
                              >
                                <Icon className="w-3.5 h-3.5 text-muted-foreground group-hover/link:text-primary transition-colors shrink-0" />
                                <span>{industry.name}</span>
                                {industry.isNew && (
                                  <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-full ml-1">
                                    New
                                  </span>
                                )}
                                <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-200" />
                              </Link>
                            </HoverCardTrigger>
                            <HoverCardContent side="right" align="start" className="w-80 p-4">
                              <h4 className="text-sm font-semibold text-foreground mb-1">{industry.name}</h4>
                              <p className="text-xs text-muted-foreground mb-3">{industry.shortDescription}</p>
                              <p className="text-xs font-semibold text-foreground mb-2">How We Help</p>
                              <ul className="space-y-1">
                                {industry.howWeHelp.slice(0, 4).map((item, i) => (
                                  <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                                    <CheckCircle2 className="w-3 h-3 mt-0.5 text-primary shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                              {industry.howWeHelp.length > 4 && (
                                <p className="text-xs text-primary mt-2">+{industry.howWeHelp.length - 4} more →</p>
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

        {/* CTA — plum→gold gradient */}
        <section
          className="py-16 lg:py-[120px]"
          style={{
            background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(43 74% 58%) 100%)`,
          }}
        >
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white italic font-serif">
              Transform Your Industry.
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Let&apos;s discuss how our industry-specific expertise can help solve your unique challenges.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-white text-primary font-semibold px-12 py-4 rounded-full hover:bg-white/90 transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Industries;
