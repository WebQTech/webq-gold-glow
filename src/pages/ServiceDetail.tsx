import { useParams, Link, Navigate } from "react-router-dom";
import { useMemo } from "react";
import { ArrowLeft, ArrowRight, Check, Building2, ChevronRight, Home, Layers } from "lucide-react";
import { GoBackButton } from "@/components/GoBackButton";

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
  
  const relatedServices = useMemo(() => {
    if (!service) return [];
    return servicesData
      .filter(s => s.category === service.category && s.slug !== service.slug)
      .slice(0, 3);
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;
  const currentIndex = servicesData.findIndex(s => s.slug === slug);
  const prevService = currentIndex > 0 ? servicesData[currentIndex - 1] : null;
  const nextService = currentIndex < servicesData.length - 1 ? servicesData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        {/* Hero */}
        <section className="pt-6 pb-10 lg:pt-8 lg:pb-14 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6 lg:px-12">
            <GoBackButton />
            <nav aria-label="Breadcrumb" className="mb-8 animate-fade-in">
              <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
                    <Home className="w-3.5 h-3.5" />
                    Home
                  </Link>
                </li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li>
                  <Link to="/services" className="hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">
                  {service.name}
                </li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* Left: Title + Description + Tech tags */}
              <div className="lg:col-span-3 animate-fade-in">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  {service.name}
                </h1>
                <p className="mt-6 text-base text-foreground/70 text-justify leading-relaxed font-[Inter]">
                  {service.fullDescription}
                </p>

                {/* Technologies inline */}
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 text-sm font-medium bg-primary/8 text-primary border border-primary/15 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Icon */}
              <div className="lg:col-span-2 flex justify-center animate-fade-in">
                <div className="w-48 h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-primary/15 to-primary/5 rounded-3xl flex items-center justify-center">
                  <div className="w-24 h-24 lg:w-28 lg:h-28 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                    <Icon className="w-12 h-12 lg:w-14 lg:h-14 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered + Key Benefits */}
        <section className="py-10 lg:py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Layers className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Services Offered</h2>
                </div>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Key Benefits</h2>
                </div>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-500" />
                      </div>
                      <span className="text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        {service.caseStudies.length > 0 && (
          <section className="py-10 lg:py-16 bg-muted/30">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Success Stories</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl">
                  See how we've helped organizations like yours achieve their goals
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {service.caseStudies.map((caseStudy) => (
                  <div
                    key={caseStudy.company}
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
                              <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="text-foreground/80">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        <section className="py-10 lg:py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
            </div>

            <div className="max-w-3xl">
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
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-10 lg:py-16 bg-muted/30">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Related Services</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl">
                  Explore more services in {service.category}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedServices.map((related) => {
                  const RelatedIcon = related.icon;
                  return (
                    <Link
                      key={related.slug}
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
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-10 lg:py-16">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how our {service.name.toLowerCase()} services can help your business.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 btn-primary">
              Contact Us Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-6 border-t border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-center">
              {prevService ? (
                <Link
                  to={`/services/${prevService.slug}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
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
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
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