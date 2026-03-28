import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { industriesData } from "@/data/industriesData";

const industryHighlights = industriesData.slice(0, 12);

export const IndustriesSummary = () => {
  return (
    <section className="py-10 lg:py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Industries We Serve
          </h2>
          <div className="flex justify-center">
            <p className="text-base text-muted-foreground max-w-2xl border-l-4 border-yellow-400 pl-4 text-left">
              From startups to enterprises, we deliver tailored technology solutions
              that address the unique challenges of your industry.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {industryHighlights.map((industry) => {
            const Icon = industry.icon;
            return (
              <Link
                key={industry.slug}
                to={`/industries/${industry.slug}`}
                className="group relative rounded-xl border border-border bg-card p-5 hover:shadow-lg hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-foreground leading-tight mb-1 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {industry.shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Explore All Industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
