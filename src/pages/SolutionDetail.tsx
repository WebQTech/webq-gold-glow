import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { ArrowLeft, ArrowRight, Check, Building2, ChevronRight, Home, Layers } from "lucide-react";
import { GoBackButton } from "@/components/GoBackButton";

import { Footer } from "@/components/Footer";
import { getSolutionBySlug, solutionsData } from "@/data/solutionsData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SolutionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = slug ? getSolutionBySlug(slug) : undefined;

  const relatedSolutions = useMemo(() => {
    if (!solution) return [];
    return solutionsData.filter(s => s.slug !== solution.slug).slice(0, 3);
  }, [solution]);

  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const faqRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true, margin: "-80px" });
  const isCaseStudiesInView = useInView(caseStudiesRef, { once: true, margin: "-80px" });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-80px" });

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  const Icon = solution.icon;
  const currentIndex = solutionsData.findIndex(s => s.slug === slug);
  const prevSolution = currentIndex > 0 ? solutionsData[currentIndex - 1] : null;
  const nextSolution = currentIndex < solutionsData.length - 1 ? solutionsData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        {/* Hero */}
        <section ref={heroRef} className="pt-6 pb-10 lg:pt-8 lg:pb-14 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6 lg:px-12">
            <GoBackButton />
            <motion.nav
              aria-label="Breadcrumb"
              initial={{ opacity: 0, y: 10 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
                    <Home className="w-3.5 h-3.5" />
                    Home
                  </Link>
                </li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li>
                  <Link to="/solutions" className="hover:text-primary transition-colors">
                    Solutions
                  </Link>
                </li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">
                  {solution.name}
                </li>
              </ol>
            </motion.nav>

            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* Left: Title + Description + Tech tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  {solution.name}
                </h1>
                <p className="mt-5 text-base text-foreground/70 text-justify leading-relaxed font-[Inter]">
                  {solution.fullDescription}
                </p>

                {/* Technologies inline */}
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {solution.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 text-sm font-medium bg-primary/8 text-primary border border-primary/15 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right: Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-2 flex justify-center"
              >
                <div className="w-48 h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-primary/15 to-primary/5 rounded-3xl flex items-center justify-center">
                  <div className="w-24 h-24 lg:w-28 lg:h-28 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                    <Icon className="w-12 h-12 lg:w-14 lg:h-14 text-primary-foreground" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Deliver + Key Benefits */}
        <section ref={contentRef} className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <Layers className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">What We Deliver</h2>
                </div>
                <ul className="space-y-4">
                  {solution.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.04 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Key Benefits</h2>
                </div>
                <ul className="space-y-4">
                  {solution.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 15 }}
                      animate={isContentInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.15 + index * 0.04 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-500" />
                      </div>
                      <span className="text-foreground/80">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        {solution.caseStudies.length > 0 && (
          <section ref={caseStudiesRef} className="py-10 lg:py-14 bg-muted/30">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isCaseStudiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Success Stories</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Real-world results from our implementations
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {solution.caseStudies.map((caseStudy, index) => (
                  <motion.div
                    key={caseStudy.company}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isCaseStudiesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm">{caseStudy.company}</h3>
                        <p className="text-xs text-muted-foreground">{caseStudy.industry}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Challenge</h4>
                        <p className="text-sm text-muted-foreground">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Solution</h4>
                        <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-primary uppercase tracking-wide mb-1.5">Results</h4>
                        <ul className="grid grid-cols-2 gap-1.5">
                          {caseStudy.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-1.5 text-xs">
                              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
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
        <section ref={faqRef} className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-3xl"
            >
              <Accordion type="single" collapsible className="space-y-3">
                {solution.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-card border border-border rounded-lg px-5"
                  >
                    <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Related Solutions */}
        {relatedSolutions.length > 0 && (
          <section className="py-10 lg:py-14 bg-muted/30">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Related Solutions</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Explore more solutions to transform your business
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-5">
                {relatedSolutions.map((related, index) => {
                  const RelatedIcon = related.icon;
                  return (
                    <motion.div
                      key={related.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                      <Link
                        to={`/solutions/${related.slug}`}
                        className="group block h-full bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all duration-300"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                          <RelatedIcon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                          {related.name}
                        </h3>
                        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                          {related.shortDescription}
                        </p>
                        <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn more
                          <ArrowRight className="w-3.5 h-3.5" />
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
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Ready to Get Started?</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Let's discuss how our {solution.name.toLowerCase()} can help your business.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 btn-primary">
              Contact Us Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-6 border-t border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-center">
              {prevSolution ? (
                <Link
                  to={`/solutions/${prevSolution.slug}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">{prevSolution.name}</span>
                  <span className="sm:hidden">Previous</span>
                </Link>
              ) : (
                <div />
              )}
              {nextSolution ? (
                <Link
                  to={`/solutions/${nextSolution.slug}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="hidden sm:inline">{nextSolution.name}</span>
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

export default SolutionDetail;