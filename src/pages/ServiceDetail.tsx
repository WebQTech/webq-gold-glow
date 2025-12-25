import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { ArrowLeft, ArrowRight, Check, Building2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getServiceBySlug, servicesData, ServiceDetail as ServiceDetailType } from "@/data/servicesData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  
  // Get related services (same category, excluding current)
  const relatedServices = useMemo(() => {
    if (!service) return [];
    return servicesData
      .filter(s => s.category === service.category && s.slug !== service.slug)
      .slice(0, 3);
  }, [service]);

  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const faqRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isCaseStudiesInView = useInView(caseStudiesRef, { once: true, margin: "-100px" });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;
  const currentIndex = servicesData.findIndex(s => s.slug === slug);
  const prevService = currentIndex > 0 ? servicesData[currentIndex - 1] : null;
  const nextService = currentIndex < servicesData.length - 1 ? servicesData[currentIndex + 1] : null;

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
              to="/services" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label font-bold">{service.category}</span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {service.name}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                {service.fullDescription}
              </p>
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
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                <div className="w-32 h-32 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon className="w-16 h-16 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section ref={featuresRef} className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isFeaturesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                What's Included
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isFeaturesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
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

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isFeaturesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Key Benefits
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isFeaturesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-foreground/80">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {service.caseStudies.length > 0 && (
        <section ref={caseStudiesRef} className="py-16 lg:py-24">
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
                See how we've helped organizations like yours achieve their goals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {service.caseStudies.map((caseStudy, index) => (
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
                      <p className="text-sm text-muted-foreground">{caseStudy.industry}</p>
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
      <section ref={faqRef} className="py-16 lg:py-24 bg-muted/30">
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
              {service.faqs.map((faq, index) => (
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

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Related Services
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Explore more services in {service.category}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((related, index) => {
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
                      to={`/services/${related.slug}`}
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
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how our {service.name.toLowerCase()} services can help your business.
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
            {prevService ? (
              <Link
                to={`/services/${prevService.slug}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{prevService.name}</span>
                <span className="sm:hidden">Previous</span>
              </Link>
            ) : (
              <div />
            )}
            {nextService ? (
              <Link
                to={`/services/${nextService.slug}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="hidden sm:inline">{nextService.name}</span>
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

export default ServiceDetail;
