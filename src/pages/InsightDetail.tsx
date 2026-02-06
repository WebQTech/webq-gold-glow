import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { ArrowLeft, ArrowRight, Clock, User, Calendar, Tag } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getInsightBySlug, insightsData } from "@/data/insightsData";
import { Helmet } from "react-helmet-async";

const InsightDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const insight = slug ? getInsightBySlug(slug) : undefined;

  // Get related insights (same category, excluding current)
  const relatedInsights = useMemo(() => {
    if (!insight) return [];
    return insightsData
      .filter(i => i.category === insight.category && i.slug !== insight.slug)
      .slice(0, 3);
  }, [insight]);

  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const relatedRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });
  const isRelatedInView = useInView(relatedRef, { once: true, margin: "-100px" });

  if (!insight) {
    return <Navigate to="/insights" replace />;
  }

  const currentIndex = insightsData.findIndex(i => i.slug === slug);
  const prevInsight = currentIndex > 0 ? insightsData[currentIndex - 1] : null;
  const nextInsight = currentIndex < insightsData.length - 1 ? insightsData[currentIndex + 1] : null;

  return (
    <>
      <Helmet>
        <title>{insight.title} | WebQ Technologies Insights</title>
        <meta name="description" content={insight.excerpt} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main id="main-content" className="focus:outline-none" tabIndex={-1}>
          {/* Hero Section */}
          <section ref={heroRef} className="py-10 lg:py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to="/insights"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Insights
                </Link>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7 }}
                >
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    {insight.category}
                  </span>
                  <h1 className="mt-4 text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
                    {insight.title}
                  </h1>
                  <p className="mt-6 text-lg text-muted-foreground">
                    {insight.excerpt}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{insight.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{insight.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{insight.readTime}</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative"
                >
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section ref={contentRef} className="py-10 lg:py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
                {/* Article Content */}
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="prose prose-lg dark:prose-invert max-w-none"
                >
                  {insight.content.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-foreground/80 leading-relaxed mb-6"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.article>

                {/* Sidebar */}
                <motion.aside
                  initial={{ opacity: 0, x: 30 }}
                  animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-8"
                >
                  {/* Key Takeaways */}
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Key Takeaways</h3>
                    <ul className="space-y-3">
                      {insight.keyTakeaways.map((takeaway, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-primary">{index + 1}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Related Topics */}
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      Related Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {insight.relatedTopics.map((topic, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">About the Author</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{insight.author}</p>
                        <p className="text-sm text-muted-foreground">WebQ Technologies</p>
                      </div>
                    </div>
                  </div>
                </motion.aside>
              </div>
            </div>
          </section>

          {/* Related Insights */}
          {relatedInsights.length > 0 && (
            <section ref={relatedRef} className="py-10 lg:py-16 bg-muted/30">
              <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl font-bold text-foreground">Related Insights</h2>
                  <p className="mt-4 text-muted-foreground">
                    More articles in {insight.category}
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                  {relatedInsights.map((related, index) => (
                    <motion.div
                      key={related.slug}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isRelatedInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link
                        to={`/insights/${related.slug}`}
                        className="group block h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all"
                      >
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={related.image}
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-5">
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                            {related.category}
                          </span>
                          <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {related.title}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                            {related.excerpt}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Navigation */}
          <section className="py-8 border-t border-border">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex justify-between items-center">
                {prevInsight ? (
                  <Link
                    to={`/insights/${prevInsight.slug}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors max-w-[45%]"
                  >
                    <ArrowLeft className="w-4 h-4 shrink-0" />
                    <span className="truncate">{prevInsight.title}</span>
                  </Link>
                ) : (
                  <div />
                )}
                {nextInsight ? (
                  <Link
                    to={`/insights/${nextInsight.slug}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-right max-w-[45%]"
                  >
                    <span className="truncate">{nextInsight.title}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-10 lg:py-16 bg-primary/5">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <h2 className="text-3xl font-bold text-foreground">
                Want to Learn More?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest insights and industry updates.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 btn-primary"
              >
                Get in Touch
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

export default InsightDetail;
