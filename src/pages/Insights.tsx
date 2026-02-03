import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, BookOpen, Lightbulb, TrendingUp, Mic, Calendar, ArrowRight, Clock, User } from "lucide-react";
import { Helmet } from "react-helmet-async";

const insightCategories = [
  { id: "reports", label: "Industry Reports", icon: FileText, count: 24 },
  { id: "case-studies", label: "Case Studies", icon: BookOpen, count: 18 },
  { id: "whitepapers", label: "Whitepapers", icon: Lightbulb, count: 12 },
  { id: "tech-trends", label: "Tech Trends", icon: TrendingUp, count: 36 },
  { id: "webinars", label: "Webinars", icon: Mic, count: 8 },
  { id: "events", label: "Events", icon: Calendar, count: 5 },
];

const featuredInsights = [
  {
    title: "The Future of Enterprise AI: 2025 and Beyond",
    category: "Industry Reports",
    excerpt: "Explore how artificial intelligence is reshaping enterprise operations, from automated decision-making to predictive analytics.",
    author: "Dr. Sarah Chen",
    date: "Dec 20, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
  },
  {
    title: "Cloud Migration Success Stories: Fortune 500 Companies",
    category: "Case Studies",
    excerpt: "Learn from the experiences of leading enterprises that successfully migrated their infrastructure to the cloud.",
    author: "Michael Torres",
    date: "Dec 18, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
  },
  {
    title: "Cybersecurity Best Practices for 2025",
    category: "Whitepapers",
    excerpt: "A comprehensive guide to protecting your organization against emerging cyber threats and vulnerabilities.",
    author: "James Wilson",
    date: "Dec 15, 2025",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
  },
  {
    title: "Generative AI in Healthcare: Transforming Patient Care",
    category: "Tech Trends",
    excerpt: "Discover how generative AI is revolutionizing diagnostics, treatment planning, and patient engagement.",
    author: "Dr. Emily Roberts",
    date: "Dec 12, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
  },
  {
    title: "Building Resilient Supply Chains with AI",
    category: "Industry Reports",
    excerpt: "How AI-powered analytics can help organizations build more resilient and adaptive supply chain networks.",
    author: "David Park",
    date: "Dec 10, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
  },
  {
    title: "The Rise of Agentic AI: Autonomous Systems in Enterprise",
    category: "Tech Trends",
    excerpt: "Understanding how autonomous AI agents are changing the way businesses operate and make decisions.",
    author: "Lisa Zhang",
    date: "Dec 8, 2025",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
  },
];

const upcomingWebinars = [
  {
    title: "AI-Powered Digital Transformation",
    date: "Jan 15, 2025",
    time: "2:00 PM EST",
    speaker: "Dr. Sarah Chen",
  },
  {
    title: "Cloud Security Best Practices",
    date: "Jan 22, 2025",
    time: "11:00 AM EST",
    speaker: "James Wilson",
  },
  {
    title: "Future of FinTech Innovation",
    date: "Feb 5, 2025",
    time: "3:00 PM EST",
    speaker: "Michael Torres",
  },
];

const Insights = () => {
  return (
    <>
      <Helmet>
        <title>Insights | WebQ Technologies - Industry Reports, Case Studies & Trends</title>
        <meta name="description" content="Explore industry reports, case studies, whitepapers, and the latest tech trends from WebQ Technologies experts." />
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
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Insights</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                  Knowledge & <span className="text-primary">Insights</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Stay ahead with our latest research, case studies, and expert analysis on technology trends shaping the future of business.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Categories */}
          <section className="py-12 border-b border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex flex-wrap gap-4">
                {insightCategories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all group"
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{category.label}</span>
                    <span className="text-xs bg-background/50 group-hover:bg-primary-foreground/20 px-2 py-0.5 rounded-full">
                      {category.count}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Insights Grid */}
          <section className="py-10 lg:py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Featured Insights</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredInsights.map((insight, index) => (
                  <motion.article
                    key={insight.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {insight.category}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {insight.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {insight.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="w-3 h-3" />
                          <span>{insight.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span>{insight.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="text-center mt-12">
                <button className="btn-primary inline-flex items-center gap-2">
                  View All Insights
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>

          {/* Upcoming Webinars */}
          <section className="py-10 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Upcoming Webinars</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {upcomingWebinars.map((webinar, index) => (
                  <motion.div
                    key={webinar.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    <button className="mt-4 text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
                      Register Now <ArrowRight className="w-3 h-3" />
                    </button>
                  </motion.div>
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
