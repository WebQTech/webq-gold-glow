import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";

const featuredInsights = [
  {
    title: "The Future of Enterprise AI: 2025 and Beyond",
    category: "Industry Reports",
    author: "Dr. Sarah Chen",
    readTime: "12 min read",
    slug: "the-future-of-enterprise-ai-2025-and-beyond",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
  },
  {
    title: "Cloud Migration Success Stories: Fortune 500 Companies",
    category: "Case Studies",
    author: "Michael Torres",
    readTime: "8 min read",
    slug: "cloud-migration-success-stories-fortune-500-companies",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
  },
  {
    title: "Cybersecurity Best Practices for 2025",
    category: "Whitepapers",
    author: "James Wilson",
    readTime: "15 min read",
    slug: "cybersecurity-best-practices-for-2025",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
  },
];

export const InsightsSummary = () => {
  return (
    <section className="py-14 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Insights & Research
          </h2>
          <div className="flex justify-center">
            <p className="text-base text-muted-foreground max-w-2xl border-l-4 border-yellow-400 pl-4 text-left">
              Stay ahead with our latest research, case studies, whitepapers, and expert analysis on technology trends shaping the future of business.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featuredInsights.map((insight) => (
            <Link
              key={insight.slug}
              to={`/insights/${insight.slug}`}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {insight.category}
                </span>
                <h3 className="text-base font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {insight.title}
                </h3>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {insight.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Explore All Insights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
