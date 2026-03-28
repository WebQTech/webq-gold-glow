import { GitBranch, RefreshCw, Users, Rocket, CheckCircle2, ArrowRight } from "lucide-react";

const methodologies = [
  {
    icon: GitBranch,
    title: "Agile & Scrum",
    description: "Iterative sprints with continuous feedback loops, ensuring rapid delivery and adaptability to changing requirements.",
  },
  {
    icon: RefreshCw,
    title: "DevOps & CI/CD",
    description: "Automated build, test, and deploy pipelines that enable multiple production releases per day with zero downtime.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Embedded engineering teams that integrate with your org, providing deep domain knowledge and long-term accountability.",
  },
  {
    icon: Rocket,
    title: "Rapid Prototyping",
    description: "From concept to working prototype in weeks — validating ideas early and reducing risk before full-scale development.",
  },
];

export const DeliveryMethodologySection = () => {
  return (
    <section className="py-14 lg:py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — content */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
              How We Deliver
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
              Proven Delivery{" "}
              <span className="text-primary">Methodologies</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-2">
              We combine industry-standard frameworks with battle-tested processes 
              to deliver projects on time, within budget, and at the highest quality bar.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every engagement is tailored — whether it's a 4-week sprint or a multi-year 
              transformation program, our delivery model scales to match your ambition.
            </p>
          </div>

          {/* Right — methodology cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {methodologies.map((item) => (
              <div
                key={item.title}
                className="p-5 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
