import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { technologiesData, getAllTechnologyCategories } from "@/data/technologiesData";
import { motion } from "framer-motion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const categoryIcons: Record<string, string> = {};

const technologyCategories = getAllTechnologyCategories().map(category => ({
  title: category,
  items: technologiesData.filter(t => t.category === category).map(t => t.slug),
}));

const techHighlights = [
  "AI & Machine Learning Frameworks",
  "Cloud-Native & Multi-Cloud Platforms",
  "Modern Frontend & Backend Stacks",
  "Data Engineering & Analytics Pipelines",
  "DevOps, CI/CD & Infrastructure as Code",
  "Enterprise Security & Compliance Tools",
];

const Technologies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>

        {/* Hero — dark gradient matching Services page */}
        <section
          className="py-8 lg:py-10"
          style={{
            background: `linear-gradient(135deg, hsl(215 50% 10%) 0%, hsl(210 100% 22%) 60%, hsl(195 80% 30%) 100%)`,
          }}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
              {/* Left — headline & description */}
              <div className="lg:col-span-3 animate-fade-in">
                <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-3">
                  <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-white/90 font-medium">Technologies</span>
                </nav>
                <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight tracking-tight">
                  Technologies We Work With
                </h1>
                <p className="mt-4 text-sm lg:text-base text-white/70 leading-relaxed max-w-2xl text-justify">
                  We leverage a modern, battle‑tested technology stack across AI, cloud, data, and
                  enterprise platforms to deliver secure, scalable, and high‑performance&nbsp;solutions.
                </p>
              </div>

              {/* Right — technology highlights */}
              <div className="lg:col-span-2 border-l-2 border-[hsl(195,100%,55%)] pl-5 animate-fade-in">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-[hsl(195,100%,55%)] mb-3">
                  What We Cover
                </h2>
                <ul className="space-y-2">
                  {techHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                      <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-[hsl(195,100%,55%)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Category grid — same pattern as Solutions */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologyCategories.map((category, idx) => (
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
                      {category.items.length} technologies
                    </span>
                  </h3>
                  <ul className="space-y-1.5">
                    {category.items.map((slug) => {
                      const tech = technologiesData.find(t => t.slug === slug);
                      if (!tech) return null;
                      const TechIcon = tech.icon;
                      return (
                        <li key={slug}>
                          <HoverCard openDelay={200} closeDelay={100}>
                            <HoverCardTrigger asChild>
                              <Link
                                to={`/technologies/${slug}`}
                                className="group flex items-center gap-2 text-base leading-normal text-primary hover:text-primary/80 transition-colors"
                              >
                                <TechIcon className="w-4 h-4 text-primary/70 shrink-0" />
                                <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                                {tech.name}
                              </Link>
                            </HoverCardTrigger>
                            <HoverCardContent side="right" align="start" className="w-80 p-4">
                              <h4 className="text-sm font-semibold text-foreground mb-1">{tech.name}</h4>
                              <p className="text-xs text-muted-foreground mb-3">{tech.shortDescription}</p>
                              <p className="text-xs font-semibold text-foreground mb-2">Use Cases</p>
                              <ul className="space-y-1">
                                {tech.useCases.slice(0, 5).map((uc, i) => (
                                  <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                                    <CheckCircle2 className="w-3 h-3 mt-0.5 text-primary shrink-0" />
                                    {uc}
                                  </li>
                                ))}
                              </ul>
                              {tech.useCases.length > 5 && (
                                <p className="text-xs text-primary mt-2">+{tech.useCases.length - 5} more →</p>
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
              Need a Specific Technology?
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
              Our teams are proficient across a wide range of technologies. Let&apos;s discuss your requirements.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 btn-primary"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Technologies;
