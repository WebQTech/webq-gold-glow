import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { industriesData, getAllIndustryCategories } from "@/data/industriesData";
import { motion } from "framer-motion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const industryCategories = getAllIndustryCategories().map(category => ({
  title: category,
  items: industriesData.filter(i => i.category === category).map(i => i.slug),
}));

const Industries = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        {/* Category grid — same pattern as Solutions */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryCategories.map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="rounded-lg border border-border bg-card p-5 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 pb-2 border-b border-border">
                    {category.title}
                    <span className="ml-2 text-xs font-normal text-muted-foreground lowercase tracking-normal">
                      {category.items.length} industries
                    </span>
                  </h3>
                  <ul className="space-y-1.5">
                    {category.items.map((slug) => {
                      const industry = industriesData.find(i => i.slug === slug);
                      if (!industry) return null;
                      const Icon = industry.icon;
                      return (
                        <li key={slug}>
                          <HoverCard openDelay={200} closeDelay={100}>
                            <HoverCardTrigger asChild>
                              <Link
                                to={`/industries/${slug}`}
                                className="group flex items-center gap-2 text-base leading-normal text-primary hover:text-primary/80 transition-colors"
                              >
                                <Icon className="w-4 h-4 text-primary/70 shrink-0" />
                                <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                                {industry.name}
                                {industry.isNew && (
                                  <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-full ml-1">
                                    New
                                  </span>
                                )}
                              </Link>
                            </HoverCardTrigger>
                            <HoverCardContent side="right" align="start" className="w-80 p-4">
                              <h4 className="text-sm font-semibold text-foreground mb-1">{industry.name}</h4>
                              <p className="text-xs text-muted-foreground mb-3">{industry.shortDescription}</p>
                              <p className="text-xs font-semibold text-foreground mb-2">How We Help</p>
                              <ul className="space-y-1">
                                {industry.howWeHelp.slice(0, 4).map((item, i) => (
                                  <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                                    <CheckCircle2 className="w-3 h-3 mt-0.5 text-primary shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                              {industry.howWeHelp.length > 4 && (
                                <p className="text-xs text-primary mt-2">+{industry.howWeHelp.length - 4} more →</p>
                              )}
                            </HoverCardContent>
                          </HoverCard>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 lg:py-14 bg-primary/5">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Ready to Transform Your Industry?
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s discuss how our industry-specific expertise can help solve your unique challenges.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 btn-primary"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
