import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mic, Calendar, ArrowRight, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";

const newsCategories = [
  { id: "all", label: "All News", count: 8 },
  { id: "updates", label: "Company Updates", count: 4 },
  { id: "blog", label: "Blog", count: 3 },
  { id: "announcements", label: "Announcements", count: 1 },
];

const featuredNews = {
  title: "WebQ Technologies Launches AI-Powered Solutions for Growing Businesses",
  excerpt: "We're excited to announce our new suite of AI tools designed to help startups and SMBs automate workflows, reduce costs, and scale faster.",
  date: "January 15, 2026",
  category: "Announcements",
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop",
};

const newsItems = [
  {
    title: "How We're Helping Local Businesses Embrace AI",
    excerpt: "A look at our recent projects helping small and medium businesses integrate AI into their operations.",
    date: "January 10, 2026",
    category: "Blog",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop",
  },
  {
    title: "Welcome to Our Growing Team: New Hires in Q1",
    excerpt: "Introducing the talented individuals joining WebQ as we expand our capabilities.",
    date: "January 5, 2026",
    category: "Company Updates",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop",
  },
  {
    title: "5 Ways AI Can Transform Your Business Operations",
    excerpt: "Practical insights on implementing AI solutions without breaking the bank.",
    date: "December 28, 2025",
    category: "Blog",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop",
  },
  {
    title: "Our First Year: Lessons Learned Building an AI Startup",
    excerpt: "Reflections on our journey, challenges faced, and milestones achieved.",
    date: "December 20, 2025",
    category: "Company Updates",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop",
  },
  {
    title: "Partnering with Local Tech Incubators",
    excerpt: "Announcing our collaboration with regional innovation hubs to support emerging startups.",
    date: "December 15, 2025",
    category: "Company Updates",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&auto=format&fit=crop",
  },
  {
    title: "Building Secure AI Solutions: Our Approach",
    excerpt: "How we prioritize security and data privacy in every solution we deliver.",
    date: "December 10, 2025",
    category: "Blog",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop",
  },
];

const mediaMentions = [
  { outlet: "Local Tech Weekly", title: "Startups to Watch in AI", date: "Jan 2026" },
  { outlet: "Innovation Hub", title: "Emerging AI Solutions", date: "Dec 2025" },
  { outlet: "Business Insider India", title: "New Age Tech Companies", date: "Dec 2025" },
  { outlet: "Startup Digest", title: "AI for SMBs", date: "Nov 2025" },
];

const News = () => {
  return (
    <>
      <Helmet>
        <title>News | WebQ Technologies - Updates & Announcements</title>
        <meta name="description" content="Stay updated with the latest news, company updates, and announcements from WebQ Technologies." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main id="main-content">
          {/* Hero Section */}
          <section className="relative py-12 lg:py-20 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">News</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                  Latest <span className="text-primary">Updates</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Stay informed about what we're building, our team updates, and insights from our journey.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Categories */}
          <section className="py-6 border-b border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex flex-wrap gap-3">
                {newsCategories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                      category.id === "all" 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-secondary/50 hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    <span className="text-sm font-medium">{category.label}</span>
                    <span className="text-xs bg-background/20 px-2 py-0.5 rounded-full">
                      {category.count}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </section>

          {/* Featured News */}
          <section className="py-10">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="aspect-[21/9] overflow-hidden">
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="p-8 md:p-12 max-w-3xl">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-4">
                      {featuredNews.category}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                      {featuredNews.title}
                    </h2>
                    <p className="text-white/80 mb-4 line-clamp-2">{featuredNews.excerpt}</p>
                    <div className="flex items-center gap-4 text-white/60 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredNews.date}
                      </span>
                      <span className="flex items-center gap-1 text-primary">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>
          </section>

          {/* News Grid */}
          <section className="py-10">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all group cursor-pointer"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-primary">{item.category}</span>
                        <span className="text-xs text-muted-foreground">{item.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{item.excerpt}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* Media Mentions */}
          <section className="py-8 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-2 mb-6">
                <Mic className="w-5 h-5 text-primary" />
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Mentions</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Where We've Been Featured</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {mediaMentions.map((mention, index) => (
                  <motion.a
                    key={mention.outlet}
                    href="#"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-all group flex items-center justify-between"
                  >
                    <div>
                      <p className="font-semibold text-foreground">{mention.outlet}</p>
                      <p className="text-sm text-muted-foreground">{mention.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{mention.date}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="py-10">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  For media inquiries, partnership opportunities, or general questions, we'd love to hear from you.
                </p>
                <a href="mailto:contact@weqtech.com" className="btn-primary inline-flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default News;
