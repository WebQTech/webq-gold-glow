import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Globe, Zap, Heart } from "lucide-react";

const highlights = [
  { icon: Heart, label: "Health & Wellness Benefits" },
  { icon: Zap, label: "Learning & Growth Budget" },
  { icon: Globe, label: "Remote & Hybrid Flexibility" },
  { icon: Briefcase, label: "Competitive Compensation" },
];

const openRolesCount = 8;

export const CareersSummary = () => {
  return (
    <section className="py-14 lg:py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
              Careers
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
              Build the <span className="text-primary">Future</span> With Us
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Join a team of passionate innovators working on cutting-edge technology 
              solutions that transform businesses worldwide. We currently have{" "}
              <strong className="text-foreground font-medium">{openRolesCount}+ open positions</strong> across 
              engineering, product, design, and consulting.
            </p>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View Open Positions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right - Benefits Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
