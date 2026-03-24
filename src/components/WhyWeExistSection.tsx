import { ArrowRight, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower organizations with intelligent technology solutions that drive measurable outcomes — replacing complexity with clarity, and legacy constraints with modern capability.",
  },
  {
    icon: Lightbulb,
    title: "Our Approach",
    description:
      "We don't just build software — we engineer competitive advantage. Every engagement starts with understanding your business goals, not just technical requirements.",
  },
  {
    icon: TrendingUp,
    title: "Our Impact",
    description:
      "100+ projects delivered across 11+ industries. Our clients see an average 40% reduction in operational costs and 3x faster time-to-market after digital transformation.",
  },
];

export const WhyWeExistSection = () => {
  return (
    <section className="py-14 lg:py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Why We Exist
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            Technology Should Create{" "}
            <span className="text-primary">Value, Not Complexity</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Too many organizations struggle with outdated systems, fragmented tools, and 
            vendors who don't understand their business. We exist to change that.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Learn more about us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
