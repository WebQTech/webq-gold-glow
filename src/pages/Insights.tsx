import { useState, useEffect, useMemo } from "react";
import { Footer } from "@/components/Footer";
import { Mic, Calendar, ArrowRight, Clock, User, ChevronRight, Search, X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { GoBackButton } from "@/components/GoBackButton";
import { insightsData } from "@/data/insightsData";
import insightsHero1 from "@/assets/insights-hero.jpg";
import insightsHero2 from "@/assets/insights-hero-2.jpg";
import insightsHero3 from "@/assets/insights-hero-3.jpg";

const heroImages = [
  { src: insightsHero1, alt: "Technology research and data analytics workspace" },
  { src: insightsHero2, alt: "Team collaborating on cloud strategy" },
  { src: insightsHero3, alt: "Cybersecurity and AI research presentation" },
];
const upcomingWebinars = [
  {
    title: "AI-Powered Digital Transformation",
    date: "Apr 17, 2026",
    time: "2:00 PM EST",
    speaker: "Dr. Sarah Chen",
  },
  {
    title: "Cloud Security Best Practices",
    date: "May 14, 2026",
    time: "11:00 AM EST",
    speaker: "James Wilson",
  },
  {
    title: "Future of FinTech Innovation",
    date: "Jun 11, 2026",
    time: "3:00 PM EST",
    speaker: "Michael Torres",
  },
];

const allCategories = [...new Set(insightsData.map((i) => i.category))];

const Insights = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isHeroReady, setIsHeroReady] = useState(false);

  useEffect(() => {
    let loaded = 0;
    heroImages.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded >= 1) setIsHeroReady(true);
      };
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const filterOptions = ["All", ...allCategories];

  const filteredInsights = useMemo(() => {
    let results = insightsData;
    if (activeFilter !== "All") {
      results = results.filter((i) => i.category === activeFilter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.excerpt.toLowerCase().includes(q) ||
          i.category.toLowerCase().includes(q)
      );
    }
    return results;
  }, [activeFilter, searchQuery]);
  return (
    <>
      <Helmet>
        <title>Insights | WebQ Technologies - Industry Reports, Case Studies & Trends</title>
        <meta
          name="description"
          content="Explore industry reports, case studies, whitepapers, and the latest tech trends from WebQ Technologies experts."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
        <main id="main-content" className="focus:outline-none" tabIndex={-1}>
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
                    <span className="text-white/90 font-medium">Insights</span>
                  </nav>
                  <h1 className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight">
                    Technology Insights, Research &amp; Case Studies
                  </h1>
                  <p className="mt-4 text-sm lg:text-base text-white/70 leading-relaxed max-w-2xl text-justify">
                    Stay ahead of digital transformation with expert insights, research, and real‑world case studies focused on AI, cloud computing, data platforms, cybersecurity, and enterprise technology.
                  </p>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed max-w-2xl text-justify">
                    Our Knowledge &amp; Insights hub shares practical analysis and proven perspectives drawn from hands‑on experience across banking, healthcare, government, retail, and logistics—helping organizations understand emerging technology trends, make informed decisions, and achieve measurable business outcomes.
                  </p>
                </div>

                {/* Right — auto-rotating image carousel */}
                <div className="lg:col-span-2 hidden lg:block">
                  <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[3/2]">
                    {heroImages.map((img, idx) => (
                      <img
                        key={idx}
                        src={img.src}
                        alt={img.alt}
                        width={960}
                        height={640}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                          idx === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                        loading={idx === 0 ? "eager" : "lazy"}
                      />
                    ))}
                    {/* Dot indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {heroImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentSlide ? "bg-white w-5" : "bg-white/50"
                          }`}
                          aria-label={`View image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-10 lg:py-14">
            <div className="container mx-auto px-6 lg:px-12">
              {/* Section header + search */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-lg font-bold text-foreground uppercase tracking-wider whitespace-nowrap">
                  All Insights
                </h2>
                <div className="h-px flex-1 bg-border" />
                <div className="relative max-w-xs w-full shrink-0">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search insights…"
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

              {/* Category filter tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {filterOptions.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                      activeFilter === filter
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {filteredInsights.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">No insights found matching your search.</p>
                  <button
                    onClick={() => { setSearchQuery(""); setActiveFilter("All"); }}
                    className="mt-4 text-primary font-medium hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <>
                  {/* Featured article (first result) */}
                  <Link
                    to={`/insights/${filteredInsights[0].slug}`}
                    className="block mb-8"
                  >
                    <article className="group grid md:grid-cols-2 gap-0 bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer">
                      <div className="aspect-video md:aspect-auto md:h-full overflow-hidden">
                        <img
                          src={filteredInsights[0].image}
                          alt={filteredInsights[0].title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          {filteredInsights[0].category}
                        </span>
                        <h3 className="text-xl lg:text-2xl font-bold text-foreground mt-3 mb-4 group-hover:text-primary transition-colors">
                          {filteredInsights[0].title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{filteredInsights[0].excerpt}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{filteredInsights[0].readTime}</span>
                          <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{filteredInsights[0].date}</span>
                        </div>
                      </div>
                    </article>
                  </Link>

                  {/* Remaining insights grid */}
                  {filteredInsights.length > 1 && (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredInsights.slice(1).map((insight) => (
                        <Link
                          key={insight.slug}
                          to={`/insights/${insight.slug}`}
                          className="block"
                        >
                          <article className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer h-full">
                            <div className="aspect-video overflow-hidden">
                              <img
                                src={insight.image}
                                alt={insight.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="p-5">
                              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                {insight.category}
                              </span>
                              <h3 className="text-base font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                {insight.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{insight.excerpt}</p>
                              <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{insight.readTime}</span>
                              </div>
                            </div>
                          </article>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </section>

          <section className="py-10 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Upcoming Webinars</h2>

              <div className="grid md:grid-cols-3 gap-6">
                {upcomingWebinars.map((webinar) => (
                  <div
                    key={webinar.title}
                    className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-center gap-2 text-primary mb-3">
                      <Mic className="w-5 h-5" />
                      <span className="text-sm font-semibold">Live Webinar</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{webinar.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {webinar.date} • {webinar.time}
                      </p>
                      <p className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {webinar.speaker}
                      </p>
                    </div>
                    <button className="mt-4 text-primary text-sm font-semibold inline-flex items-center gap-1">
                      Register Now <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Insights;
