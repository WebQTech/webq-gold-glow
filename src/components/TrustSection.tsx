import { Shield, Award, Globe, Clock, CheckCircle2 } from "lucide-react";

const trustPillars = [
  { icon: Shield, label: "SOC 2 & ISO 27001 Compliant" },
  { icon: Award, label: "25+ Enterprise Clients Served" },
  { icon: Globe, label: "10+ Countries & Timezones" },
  { icon: Clock, label: "99.9% Uptime SLA Guarantee" },
];

const trustPoints = [
  "End-to-end data encryption and zero-trust security architecture",
  "NDA-backed engagements with strict IP ownership for clients",
  "Transparent reporting with real-time project dashboards",
  "Dedicated account managers and 24/7 escalation support",
  "Rigorous QA with automated testing across every release",
];

export const TrustSection = () => {
  return (
    <section className="py-14 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Trust & Reliability
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            Enterprise-Grade Trust,{" "}
            <span className="text-primary">Every Engagement</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Security, compliance, and transparency aren't afterthoughts — they're 
            foundational to how we operate and deliver.
          </p>
        </div>

        {/* Trust stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {trustPillars.map((pillar) => (
            <div
              key={pillar.label}
              className="flex flex-col items-center text-center p-5 bg-card rounded-xl border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{pillar.label}</p>
            </div>
          ))}
        </div>

        {/* Trust checklist */}
        <div className="max-w-3xl mx-auto">
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
