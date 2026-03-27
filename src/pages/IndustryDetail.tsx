import { useParams, Link, Navigate } from "react-router-dom";
import { useMemo } from "react";
import { ArrowLeft, ArrowRight, Check, Building2, ChevronRight, Home, Layers } from "lucide-react";
import { GoBackButton } from "@/components/GoBackButton";
import SolutionImageCarousel from "@/components/SolutionImageCarousel";

import { Footer } from "@/components/Footer";
import { getIndustryBySlug, industriesData, IndustryDetail as IndustryDetailType } from "@/data/industriesData";
import { industryImages } from "@/data/industryImages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustryBySlug(slug) : undefined;
  
  const relatedIndustries = useMemo(() => {
    if (!industry) return [];
    return industriesData
      .filter(i => i.category === industry.category && i.slug !== industry.slug)
      .slice(0, 3);
  }, [industry]);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const Icon = industry.icon;
  const currentIndex = industriesData.findIndex(i => i.slug === slug);
  const prevIndustry = currentIndex > 0 ? industriesData[currentIndex - 1] : null;
  const nextIndustry = currentIndex < industriesData.length - 1 ? industriesData[currentIndex + 1] : null;

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
                  <Link to="/industries" className="hover:text-primary transition-colors">
                    Industries
                  </Link>
                </li>
                <li><ChevronRight className="w-3.5 h-3.5" /></li>
                <li className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">
                  {industry.name}
                </li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-5 gap-10 lg:gap-8 items-start">
              {/* Left: Title + Description + Tags */}
              <div className="lg:col-span-2 animate-fade-in">
                <h1 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                  {industry.name}
                </h1>
                <p className="mt-5 text-base text-foreground/70 text-justify leading-relaxed font-[Inter]">
                  {industry.fullDescription}
                </p>

                {/* Tags inline */}
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {industry.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 text-sm font-medium bg-primary/8 text-primary border border-primary/15 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Image Carousel */}
              <div className="lg:col-span-3 flex justify-end animate-fade-in">
                {slug && industryImages[slug] ? (
                  <SolutionImageCarousel
                    images={industryImages[slug]}
                    alt={industry.name}
                  />
                ) : (
                  <div className="w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={industry.heroImage}
                      alt={industry.name}
                      className="w-full h-full object-cover aspect-video"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* What We Solve + How We Help - 4 Card Grid */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-6 auto-rows-fr">
              {/* Card 1: Challenges We Solve */}
              <div className="bg-card border border-border rounded-2xl p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">Challenges We Solve</h2>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {industry.whatWeSolve}
                </p>
              </div>

              {/* Card 2: How We Help */}
              <div className="bg-card border border-border rounded-2xl p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">How We Help</h2>
                </div>
                <ul className="space-y-3">
                  {industry.howWeHelp.slice(0, 4).map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 3: More Capabilities */}
              <div className="bg-card border border-border rounded-2xl p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">More Capabilities</h2>
                </div>
                <ul className="space-y-3">
                  {industry.howWeHelp.slice(4).map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 4: Related Services */}
              <div className="bg-card border border-border rounded-2xl p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">Related Services</h2>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {industry.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm font-medium bg-primary/8 text-primary border border-primary/15 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {industry.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 text-xs bg-muted text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Model Use Case */}
        {industry.caseStudies.length > 0 && (
          <section className="py-10 lg:py-14 bg-muted/30">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Model Use Cases</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl">
                  See how our approach delivers measurable outcomes
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {industry.caseStudies.map((caseStudy) => (
                  <div
                    key={caseStudy.company}
                    className="bg-card border border-border rounded-2xl p-8"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{caseStudy.company}</h3>
                        <p className="text-sm text-muted-foreground">{industry.name}</p>
                      </div>
                    </div>
                    <div className="space-y-5">
                      <div>
                        <h4 className="text-base font-semibold text-primary mb-1.5">Challenge</h4>
                        <p className="text-base text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-primary mb-1.5">Solution</h4>
                        <p className="text-base text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-primary mb-2">Results</h4>
                        <ul className="grid grid-cols-2 gap-3">
                          {caseStudy.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-base">
                              <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
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
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
            </div>

            <div className="max-w-3xl">
              <Accordion type="single" collapsible className="space-y-3">
                {industry.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-card border border-border rounded-lg px-5"
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

        {/* Related Industries */}
        {relatedIndustries.length > 0 && (
          <section className="py-10 lg:py-14 bg-muted/30">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Related Industries</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl">
                  Explore more industries in {industry.category}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedIndustries.map((related) => {
                  const RelatedIcon = related.icon;
                  return (
                    <Link
                      key={related.slug}
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
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Ready to Get Started?</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Let's discuss how we can help transform your {industry.name.toLowerCase()} operations.
            </p>
            <Link to="/#contact" className="mt-6 inline-flex items-center gap-2 btn-primary">
              Contact Us Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-6 border-t border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-center">
              {prevIndustry ? (
                <Link
                  to={`/industries/${prevIndustry.slug}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
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
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
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
