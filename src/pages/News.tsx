import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Newspaper, FileText, Mic, BookOpen, Calendar, ArrowRight, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";

const newsCategories = [
  { id: "all", label: "All News", count: 48 },
  { id: "press", label: "Press Releases", count: 24 },
  { id: "updates", label: "Company Updates", count: 12 },
  { id: "media", label: "Media Coverage", count: 8 },
  { id: "blog", label: "Blog", count: 36 },
];

const featuredNews = {
  title: "WebQ Technologies Announces Strategic Partnership with Microsoft for AI Solutions",
  excerpt: "The partnership will combine WebQ's enterprise AI expertise with Microsoft's Azure cloud platform to deliver next-generation AI solutions for Fortune 500 companies.",
  date: "December 20, 2025",
  category: "Press Releases",
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop",
};

const newsItems = [
  {
    title: "WebQ Recognized as Leader in Gartner Magic Quadrant for AI Services",
    excerpt: "Our AI capabilities and client success stories have positioned us as a market leader.",
    date: "December 18, 2025",
    category: "Press Releases",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop",
  },
  {
    title: "Expanding Our Global Footprint: New Office in Singapore",
    excerpt: "Strengthening our presence in the Asia-Pacific region to better serve our growing client base.",
    date: "December 15, 2025",
    category: "Company Updates",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&auto=format&fit=crop",
  },
  {
    title: "CEO Rajesh Kumar Featured in Forbes: The Future of Enterprise AI",
    excerpt: "An in-depth interview discussing the transformative potential of AI in business operations.",
    date: "December 12, 2025",
    category: "Media Coverage",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop",
  },
  {
    title: "How We Helped a Fortune 100 Retailer Achieve 40% Cost Reduction",
    excerpt: "A deep dive into our cloud migration strategy that delivered exceptional results.",
    date: "December 10, 2025",
    category: "Blog",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop",
  },
  {
    title: "WebQ Named to Inc. 5000 Fastest Growing Companies List",
    excerpt: "Recognition of our sustained growth and commitment to innovation.",
    date: "December 8, 2025",
    category: "Press Releases",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&auto=format&fit=crop",
  },
  {
    title: "Introducing Our New AI-Powered Security Platform",
    excerpt: "Advanced threat detection and response capabilities for enterprise clients.",
    date: "December 5, 2025",
    category: "Company Updates",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop",
  },
];

const mediaMentions = [
  { outlet: "Forbes", title: "Top 50 AI Companies to Watch", date: "Dec 2025" },
  { outlet: "TechCrunch", title: "Enterprise AI Market Analysis", date: "Nov 2025" },
  { outlet: "Bloomberg", title: "Digital Transformation Trends", date: "Nov 2025" },
  { outlet: "Wall Street Journal", title: "Future of Cloud Computing", date: "Oct 2025" },
];

const News = () => {
  return (
    <>
      <Helmet>
        <title>News | WebQ Technologies - Press Releases, Updates & Media Coverage</title>
        <meta name="description" content="Stay updated with the latest news, press releases, company updates, and media coverage from WebQ Technologies." />
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
                  Latest <span className="text-primary">News</span> & Updates
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Stay informed about WebQ Technologies' latest announcements, partnerships, and industry recognition.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Categories */}
          <section className="py-8 border-b border-border">
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
          <section className="py-12">
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
          <section className="py-12">
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

              <div className="text-center mt-12">
                <button className="btn-primary inline-flex items-center gap-2">
                  Load More News
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>

          {/* Media Mentions */}
          <section className="py-10 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex items-center gap-2 mb-8">
                <Mic className="w-5 h-5 text-primary" />
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Media Coverage</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-8">Featured In</h2>
              
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

          {/* Press Contact */}
          <section className="py-10">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">Media Inquiries</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  For press inquiries, interview requests, or media assets, please contact our communications team.
                </p>
                <a href="mailto:press@webqtech.com" className="btn-primary inline-flex items-center gap-2">
                  Contact Press Team
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
