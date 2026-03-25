import { Footer } from "@/components/Footer";
import { Mic, Calendar, ArrowRight, Clock, User } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const featuredInsights = [
  {
    title: "The Future of Enterprise AI: 2025 and Beyond",
    category: "Industry Reports",
    excerpt:
      "Explore how artificial intelligence is reshaping enterprise operations, from automated decision-making to predictive analytics.",
    author: "Dr. Sarah Chen",
    date: "Dec 20, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
  },
  {
    title: "Cloud Migration Success Stories: Fortune 500 Companies",
    category: "Case Studies",
    excerpt:
      "Learn from the experiences of leading enterprises that successfully migrated their infrastructure to the cloud.",
    author: "Michael Torres",
    date: "Dec 18, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
  },
  {
    title: "Cybersecurity Best Practices for 2025",
    category: "Whitepapers",
    excerpt:
      "A comprehensive guide to protecting your organization against emerging cyber threats and vulnerabilities.",
    author: "James Wilson",
    date: "Dec 15, 2025",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
  },
  {
    title: "Generative AI in Healthcare: Transforming Patient Care",
    category: "Tech Trends",
    excerpt:
      "Discover how generative AI is revolutionizing diagnostics, treatment planning, and patient engagement.",
    author: "Dr. Emily Roberts",
    date: "Dec 12, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
  },
  {
    title: "Building Resilient Supply Chains with AI",
    category: "Industry Reports",
    excerpt:
      "How AI-powered analytics can help organizations build more resilient and adaptive supply chain networks.",
    author: "David Park",
    date: "Dec 10, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
  },
  {
    title: "The Rise of Agentic AI: Autonomous Systems in Enterprise",
    category: "Tech Trends",
    excerpt:
      "Understanding how autonomous AI agents are changing the way businesses operate and make decisions.",
    author: "Lisa Zhang",
    date: "Dec 8, 2025",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
  },
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

const Insights = () => {
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
          <section className="relative py-12 lg:py-20 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Insights</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                  Technology Insights, Research & <span className="text-primary">Case Studies</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Stay ahead with our latest research, case studies, and expert analysis on technology trends shaping the future of business.
                </p>
              </div>
            </div>
          </section>

          <section className="py-10 lg:py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-lg font-bold text-foreground uppercase tracking-wider whitespace-nowrap">
                  Featured Insights
                </h2>
                <div className="h-px flex-1 bg-border" />
              </div>

              {/* Hero featured article */}
              <Link
                to={`/insights/${featuredInsights[0].title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "")}`}
                className="block mb-8"
              >
                <article className="group grid md:grid-cols-2 gap-0 bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer">
                  <div className="aspect-video md:aspect-auto md:h-full overflow-hidden">
                    <img
                      src={featuredInsights[0].image}
                      alt={featuredInsights[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {featuredInsights[0].category}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mt-3 mb-4 group-hover:text-primary transition-colors">
                      {featuredInsights[0].title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{featuredInsights[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><User className="w-3 h-3" />{featuredInsights[0].author}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{featuredInsights[0].readTime}</span>
                      <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{featuredInsights[0].date}</span>
                    </div>
                  </div>
                </article>
              </Link>

              {/* Remaining insights in 2-column grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredInsights.slice(1).map((insight) => (
                  <Link
                    key={insight.title}
                    to={`/insights/${insight.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "")}`}
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
                          <span className="flex items-center gap-1.5"><User className="w-3 h-3" />{insight.author}</span>
                          <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{insight.readTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
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
