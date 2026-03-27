import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Headphones, UserCheck, Users, Monitor, Landmark, LucideIcon, Settings, ChevronRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { getServicesPageCategories, getServicesByCategory } from "@/data/servicesData";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { GoBackButton } from "@/components/GoBackButton";

const categoryIcons: Record<string, LucideIcon> = {
  "Support & Consulting": Headphones,
  "Talent Management Services": UserCheck,
  "Non-IT Talent Management Services": Users,
  "Govt Strategic Consulting": Landmark,
  "Govt Technical Consulting": Settings,
};

const serviceHighlights = [
  "Talent Management & Workforce Consulting",
  "HR Outsourcing & Administrative Support Services",
  "IT-Enabled Business Support Services (ITES/BPO)",
  "Operational Support, Coordination, and Program Administration",
  "Dedicated Advisory, Staff Support, and Consulting Engagements",
  "Federal, State, County, and City Government Consulting Services",
];

const itSolutions = [
  "Application Development",
  "Cloud Services",
  "DevOps & CI/CD",
  "Quality Assurance",
  "Analytics & Data Management",
  "Operations & Support",
  "Security Solutions",
  "AI & Machine Learning",
  "Enterprise Application Management",
];

const Services = () => {
  const categories = getServicesPageCategories();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>

        {/* Hero — dark gradient matching homepage */}
        <section
          className="py-8 lg:py-10"
          style={{
            background: `linear-gradient(135deg, hsl(215 50% 10%) 0%, hsl(210 100% 22%) 60%, hsl(195 80% 30%) 100%)`,
          }}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <GoBackButton />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
              {/* Left — headline & description */}
              <div className="lg:col-span-3 animate-fade-in">
                <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-3">
                  <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-white/90 font-medium">Services</span>
                </nav>
                <h1 className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight">
                  IT &amp; Professional Consulting Services
                </h1>
                <p className="mt-4 text-sm lg:text-base text-white/70 leading-relaxed max-w-2xl text-justify">
                  In addition to our core technology and engineering solutions, we offer comprehensive
                  IT‑enabled and professional consulting services that reinforce and extend our
                  delivery&nbsp;capabilities.
                </p>
                <p className="mt-2 text-sm text-white/60 leading-relaxed max-w-2xl text-justify">
                  This unified service model enables organizations across the private and public
                  sectors to receive consistent, end‑to‑end support across both technology and
                  operational&nbsp;functions.
                </p>
              </div>

              {/* Right — service highlights */}
              <div className="lg:col-span-2 border-l-2 border-[hsl(195,100%,55%)] pl-5 animate-fade-in">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-[hsl(195,100%,55%)] mb-3">
                  What We Cover
                </h2>
                <ul className="space-y-2">
                  {serviceHighlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-white/90"
                    >
                      <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-[hsl(195,100%,55%)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section title + divider */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-lg font-bold text-foreground uppercase tracking-wider whitespace-nowrap">
                Our Service Categories
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* IT Solutions cross-reference tile */}
              <div className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in">
                <div className="px-5 pt-5 pb-3 border-b border-border/50 bg-gradient-to-r from-primary/[0.03] to-transparent">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <Monitor className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">
                      IT Solutions
                    </h2>
                  </div>
                </div>
                <ul className="px-5 py-4 space-y-1.5">
                  {itSolutions.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground py-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="px-5 pb-4">
                  <Link
                    to="/solutions"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    View All Solutions
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Service category tiles */}
              {categories.map((category) => {
                const CategoryIcon = categoryIcons[category] || Headphones;
                const services = getServicesByCategory(category);

                return (
                  <div
                    key={category}
                    className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in"
                  >
                    <div className="px-5 pt-5 pb-3 border-b border-border/50 bg-gradient-to-r from-primary/[0.03] to-transparent">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                          <CategoryIcon className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                        <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">
                          {category}
                        </h2>
                      </div>
                    </div>

                    <ul className="px-5 py-4 space-y-1.5">
                      {services.map((service) => {
                        const ServiceIcon = service.icon;
                        return (
                          <li key={service.slug}>
                            <HoverCard openDelay={200} closeDelay={100}>
                              <HoverCardTrigger asChild>
                                <Link
                                  to={`/services/${service.slug}`}
                                  className="group/link flex items-center gap-2 text-base leading-normal text-primary hover:text-primary/80 transition-colors py-0.5"
                                >
                                  <ServiceIcon className="w-3.5 h-3.5 text-muted-foreground group-hover/link:text-primary transition-colors shrink-0" />
                                  <span>{service.name}</span>
                                  <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-200" />
                                </Link>
                              </HoverCardTrigger>
                              <HoverCardContent side="right" align="start" className="w-80 p-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center">
                                    <ServiceIcon className="w-4 h-4 text-primary" />
                                  </div>
                                  <h4 className="text-sm font-semibold text-foreground">{service.name}</h4>
                                </div>
                                <p className="text-xs text-muted-foreground mb-3">{service.shortDescription}</p>
                                <p className="text-xs font-semibold text-foreground mb-2">Key Features</p>
                                <ul className="space-y-1">
                                  {service.features.slice(0, 5).map((feature, i) => (
                                    <li key={i} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                                      <CheckCircle2 className="w-3 h-3 mt-0.5 text-primary shrink-0" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                                {service.features.length > 5 && (
                                  <p className="text-xs text-primary mt-2">+{service.features.length - 5} more →</p>
                                )}
                              </HoverCardContent>
                            </HoverCard>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA — plum→gold gradient */}
        <section
          className="py-16 lg:py-[120px]"
          style={{
            background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(43 74% 58%) 100%)`,
          }}
        >
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white italic font-serif">
              Build Better.
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Let&apos;s discuss how our professional services can help you achieve your goals.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-white text-primary font-semibold px-12 py-4 rounded-full hover:bg-white/90 transition-colors"
            >
              Contact Us Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;