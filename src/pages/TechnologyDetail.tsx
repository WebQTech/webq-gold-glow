import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ChevronRight, Home, Zap, TrendingUp, Users, Globe, BarChart3, Building2, Star } from "lucide-react";
import { GoBackButton } from "@/components/GoBackButton";
import { Footer } from "@/components/Footer";
import { getTechnologyBySlug, technologiesData } from "@/data/technologiesData";
import { CodeTypingAnimation } from "@/components/CodeTypingAnimation";
import { getTechSnippets } from "@/data/technologySnippets";

const metricIcons = [TrendingUp, Globe, Star, Users, BarChart3, Building2, Zap, Globe];

const TechnologyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const tech = slug ? getTechnologyBySlug(slug) : undefined;

  if (!tech) {
    return <Navigate to="/technologies" replace />;
  }

  const Icon = tech.icon;
  const currentIndex = technologiesData.findIndex(t => t.slug === slug);
  const prevTech = currentIndex > 0 ? technologiesData[currentIndex - 1] : null;
  const nextTech = currentIndex < technologiesData.length - 1 ? technologiesData[currentIndex + 1] : null;

  const related = tech.relatedTechnologies
    .map(name => technologiesData.find(t => t.name === name))
    .filter(Boolean)
    .slice(0, 4);

  const snippetData = slug ? getTechSnippets(slug) : undefined;
  const hasSnippets = !!snippetData;

  return (
    <div className="min-h-screen bg-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        {/* Hero */}
        <section className={`bg-gradient-to-b from-primary/5 to-background ${hasSnippets ? "py-2 lg:py-3" : "py-10 lg:py-16"}`}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className={hasSnippets ? "flex items-center gap-4 mb-1" : "mb-4"}>
              <GoBackButton />
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <li>
                    <Link to="/" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
                      <Home className="w-3.5 h-3.5" />Home
                    </Link>
                  </li>
                  <li><ChevronRight className="w-3.5 h-3.5" /></li>
                  <li>
                    <Link to="/technologies" className="hover:text-primary transition-colors">Technologies</Link>
                  </li>
                  <li><ChevronRight className="w-3.5 h-3.5" /></li>
                  <li className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">{tech.name}</li>
                </ol>
              </nav>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={hasSnippets ? "grid lg:grid-cols-2 gap-6 items-start" : "max-w-3xl"}
            >
              <div>
                <span className="text-xs font-black tracking-widest text-primary uppercase">{tech.category}</span>
                <div className="flex items-center gap-3 mt-1">
                  <div className={`bg-primary/10 rounded-xl flex items-center justify-center ${hasSnippets ? "w-9 h-9" : "w-14 h-14"}`}>
                    <Icon className={`text-primary ${hasSnippets ? "w-5 h-5" : "w-7 h-7"}`} />
                  </div>
                  <h1 className={`font-bold text-foreground ${hasSnippets ? "text-2xl lg:text-3xl" : "text-4xl lg:text-5xl"}`}>{tech.name}</h1>
                </div>
                <p className={`text-muted-foreground ${hasSnippets ? "mt-2 text-sm" : "mt-6 text-lg"}`}>{tech.fullDescription}</p>
              </div>

              {hasSnippets && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <CodeTypingAnimation snippets={snippetData!.snippets} />
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Use Cases & Features */}
        <section className="py-10 lg:py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Use Cases
                </h2>
                <ul className="space-y-3">
                  {tech.useCases.map((uc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground/80">{uc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">Key Capabilities</h2>
                <ul className="space-y-3">
                  {tech.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>

                {related.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="text-sm font-semibold text-foreground mb-3">Related Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {related.map(r => (
                        <Link
                          key={r!.slug}
                          to={`/technologies/${r!.slug}`}
                          className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                        >
                          {r!.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Metrics & Industry Popularity (dynamic) */}
        {snippetData && (
          <>
            {/* Key Metrics */}
            <section className="py-10 lg:py-14 bg-primary/5">
              <div className="container mx-auto px-6 lg:px-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-10"
                >
                  {tech.name} by the Numbers
                </motion.h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {snippetData.metrics.map((metric, i) => {
                    const MetricIcon = metricIcons[i % metricIcons.length];
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="bg-card border border-border rounded-xl p-5 text-center hover:shadow-md transition-shadow"
                      >
                        <MetricIcon className="w-6 h-6 text-primary mx-auto mb-2" />
                        <p className="text-2xl lg:text-3xl font-bold text-foreground">{metric.value}</p>
                        <p className="text-sm font-semibold text-foreground/80 mt-1">{metric.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{metric.detail}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Industry Popularity */}
            <section className="py-10 lg:py-14">
              <div className="container mx-auto px-6 lg:px-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-3"
                >
                  Industry Adoption
                </motion.h2>
                <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                  {tech.name} powers mission-critical systems across every major industry vertical.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {snippetData.industries.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="bg-card border border-border rounded-xl p-6"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-bold text-foreground">{item.industry}</h3>
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {item.adoption}% adoption
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mb-3">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.adoption}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                          className="bg-primary h-2 rounded-full"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.use}</p>
                    </motion.div>
                  ))}
                </div>

                {/* WebQ callout */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-10 bg-card border-2 border-primary/20 rounded-2xl p-6 lg:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">How WebQ Technologies Delivers with {tech.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {snippetData.webqCallout}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          </>
        )}

        {/* CTA */}
        <section className="py-10 lg:py-14 bg-primary/5">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Need Help with {tech.name}?
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
              Our experts can help you implement, optimize, or migrate {tech.name} solutions tailored to your business.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 btn-primary">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 border-t border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-center">
              {prevTech ? (
                <Link to={`/technologies/${prevTech.slug}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">{prevTech.name}</span>
                  <span className="sm:hidden">Previous</span>
                </Link>
              ) : <div />}
              {nextTech ? (
                <Link to={`/technologies/${nextTech.slug}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <span className="hidden sm:inline">{nextTech.name}</span>
                  <span className="sm:hidden">Next</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechnologyDetail;
