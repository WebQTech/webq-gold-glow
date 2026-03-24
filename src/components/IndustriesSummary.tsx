import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { industriesData } from "@/data/industriesData";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const industryHighlights = industriesData.slice(0, 12);

export const IndustriesSummary = () => {
  return (
    <section className="py-14 lg:py-20 bg-background">
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

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <TooltipProvider delayDuration={200}>
            {industryHighlights.map((industry) => (
              <Tooltip key={industry.slug}>
                <TooltipTrigger asChild>
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:shadow-md hover:border-primary/50 transition-all"
                  >
                    {industry.name}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-[250px] text-center">
                  <p>{industry.shortDescription}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
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