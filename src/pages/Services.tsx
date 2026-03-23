import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Headphones, UserCheck, Users, Monitor, Landmark, LucideIcon, Settings, ChevronRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { getServicesPageCategories, getServicesByCategory } from "@/data/servicesData";
import { motion } from "framer-motion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

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
    <div className="min-h-screen bg-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>

        {/* Hero — dark navy band */}
        <section className="relative bg-[hsl(var(--navy))] overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary-light)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-light)) 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }} />

          <div className="relative container mx-auto px-6 lg:px-12 py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* Left — headline & description */}
              <div className="lg:col-span-3">
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50 mb-3"
                >
                  Services
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="text-2xl lg:text-4xl font-bold text-primary-foreground leading-tight"
                >
                  IT &amp; Professional Consulting Services
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="mt-5 text-sm lg:text-base text-primary-foreground/70 leading-relaxed max-w-2xl"
                >
                  Our core IT delivery, engineering, and technology solution capabilities are detailed
                  under{" "}
                  <Link to="/solutions" className="text-primary-foreground font-semibold underline underline-offset-2 hover:text-accent transition-colors">
                    Solutions
                  </Link>
                  . In addition, we provide a full suite of{" "}
                  <span className="text-primary-foreground font-semibold">IT-Enabled and Professional Support Services</span>{" "}
                  designed to strengthen, extend, and complement our technology offerings.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="mt-4 text-xs lg:text-sm text-primary-foreground/50 leading-relaxed max-w-2xl"
                >
                  Together, these services ensure organizations receive seamless, end-to-end support
                  across both technology and operational domains — serving private enterprises and
                  public sector agencies at every level of government.
                </motion.p>
              </div>

              {/* Right — service highlights */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="lg:col-span-2"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/40 mb-4">
                  What We Cover
                </p>
                <ul className="space-y-3">
                  {serviceHighlights.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
                      className="flex items-start gap-2.5 text-sm text-primary-foreground/80"
                    >
                      <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-accent shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Category grid */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* IT Solutions cross-reference tile */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="px-5 pt-5 pb-3 border-b border-border/50 bg-gradient-to-r from-primary/[0.04] to-transparent">
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
              </motion.div>

              {/* Service category tiles */}
              {categories.map((category, idx) => {
                const CategoryIcon = categoryIcons[category] || Headphones;
                const services = getServicesByCategory(category);

                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: (idx + 1) * 0.05 }}
                    className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="px-5 pt-5 pb-3 border-b border-border/50 bg-gradient-to-r from-primary/[0.04] to-transparent">
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
                                  className="group/link flex items-center gap-2 text-sm leading-normal text-muted-foreground hover:text-primary transition-colors py-0.5"
                                >
                                  <ServiceIcon className="w-3.5 h-3.5 text-muted-foreground/60 group-hover/link:text-primary transition-colors shrink-0" />
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
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 lg:py-20 bg-gradient-to-r from-[hsl(var(--navy))] to-[hsl(var(--cognizant-dark))]">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-3 text-sm lg:text-base text-primary-foreground/60 max-w-2xl mx-auto">
              Let&apos;s discuss how our professional services can help you achieve your goals.
            </p>
            <Link
              to="/#contact"
              className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
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