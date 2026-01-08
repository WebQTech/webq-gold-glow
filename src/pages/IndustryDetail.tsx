import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { ArrowLeft, ArrowRight, Check, Building2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getIndustryBySlug, industriesData, IndustryDetail as IndustryDetailType } from "@/data/industriesData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustryBySlug(slug) : undefined;
  
  // Get related industries (same category, excluding current)
  const relatedIndustries = useMemo(() => {
    if (!industry) return [];
    return industriesData
      .filter(i => i.category === industry.category && i.slug !== industry.slug)
      .slice(0, 3);
  }, [industry]);

  const heroRef = useRef(null);
  const solutionsRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const faqRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isSolutionsInView = useInView(solutionsRef, { once: true, margin: "-100px" });
  const isCaseStudiesInView = useInView(caseStudiesRef, { once: true, margin: "-100px" });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const Icon = industry.icon;
  const currentIndex = industriesData.findIndex(i => i.slug === slug);
  const prevIndustry = currentIndex > 0 ? industriesData[currentIndex - 1] : null;
  const nextIndustry = currentIndex < industriesData.length - 1 ? industriesData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        {/* Hero Section */}
        <section ref={heroRef} className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Link 
                to="/industries" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Industries
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-base font-black tracking-widest text-primary uppercase">
                    {industry.category}
                  </span>
                  {industry.isNew && (
                    <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
                      New
                    </span>
                  )}
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  {industry.name}
                </h1>
                <p className="mt-6 text-lg text-muted-foreground">
                  {industry.fullDescription}
                </p>
                
                {/* Key Stat */}
                <div className="mt-8 inline-flex items-center gap-4 bg-primary/10 rounded-xl px-6 py-4">
                  <span className="text-4xl font-bold text-primary">{industry.stat}</span>
                  <span className="text-sm text-muted-foreground">{industry.statLabel}</span>
                </div>

                <div className="mt-8">
                  <Link to="/#contact" className="btn-primary inline-flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-video max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={industry.heroImage} 
                    alt={industry.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Solve & How We Help */}
        <section ref={solutionsRef} className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* What We Solve */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isSolutionsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Challenges We Solve
                </h2>
                <p className="text-muted-foreground text-lg">
                  {industry.whatWeSolve}
                </p>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Industries We Serve</h3>
                  <div className="flex flex-wrap gap-2">
                    {industry.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* How We Help */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isSolutionsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  How We Help
                </h2>
                <ul className="space-y-4">
                  {industry.howWeHelp.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isSolutionsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Related Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {industry.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        {industry.caseStudies.length > 0 && (
          <section ref={caseStudiesRef} className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isCaseStudiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Success Stories
                </h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                  See how we've helped organizations in {industry.name.toLowerCase()} achieve their goals
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {industry.caseStudies.map((caseStudy, index) => (
                  <motion.div
                    key={caseStudy.company}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isCaseStudiesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card border border-border rounded-2xl p-8"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{caseStudy.company}</h3>
                        <p className="text-sm text-muted-foreground">{industry.name}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-primary mb-1">Challenge</h4>
                        <p className="text-sm text-muted-foreground">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-primary mb-1">Solution</h4>
                        <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-primary mb-2">Results</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {caseStudy.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                              <span className="text-foreground/80">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        <section ref={faqRef} className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {industry.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-card border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Related Industries */}
        {relatedIndustries.length > 0 && (
          <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Related Industries
                </h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                  Explore more industries in {industry.category}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedIndustries.map((related, index) => {
                  const RelatedIcon = related.icon;
                  return (
                    <motion.div
                      key={related.slug}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link
                        to={`/industries/${related.slug}`}
                        className="group block h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                          <RelatedIcon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {related.name}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                          {related.shortDescription}
                        </p>
                        <div className="mt-4 inline-flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn more
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can help transform your {industry.name.toLowerCase()} operations.
            </p>
            <Link
              to="/#contact"
              className="mt-8 inline-flex items-center gap-2 btn-primary"
            >
              Contact Us Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 border-t border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-center">
              {prevIndustry ? (
                <Link
                  to={`/industries/${prevIndustry.slug}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">{prevIndustry.name}</span>
                  <span className="sm:hidden">Previous</span>
                </Link>
              ) : (
                <div />
              )}
              {nextIndustry ? (
                <Link
                  to={`/industries/${nextIndustry.slug}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="hidden sm:inline">{nextIndustry.name}</span>
                  <span className="sm:hidden">Next</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndustryDetail;
