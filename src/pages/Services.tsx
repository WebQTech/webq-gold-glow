import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Headphones, UserCheck, Users, Monitor, Landmark, LucideIcon, Settings } from "lucide-react";
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

const Services = () => {
  const categories = getServicesPageCategories();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        {/* Hero */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h1 className="text-xl lg:text-2xl font-bold text-foreground">
                IT &amp; Professional Consulting Services
              </h1>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Our core IT delivery, engineering, and technology solution capabilities are detailed
                under{" "}
                <Link
                  to="/solutions"
                  className="text-foreground font-semibold hover:text-primary transition-colors"
                >
                  Solutions
                </Link>
                . In addition, we provide a full suite of{" "}
                <strong className="text-foreground">IT-Enabled and Professional Support Services</strong>{" "}
                designed to strengthen, extend, and complement our technology offerings.
                These include:
              </p>
              <ul className="mt-4 space-y-2 text-base text-foreground font-semibold list-disc list-inside">
                <li>Talent Management &amp; Workforce Consulting</li>
                <li>HR Outsourcing &amp; Administrative Support Services</li>
                <li>IT-Enabled Business Support Services (ITES/BPO)</li>
                <li>Operational Support, Coordination, and Program Administration</li>
                <li>Dedicated Advisory, Staff Support, and Consulting Engagements</li>
              </ul>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Together, these services ensure organizations receive seamless, end-to-end support
                across both technology and operational domains.
              </p>
            </div>
          </div>
        </section>

        {/* Category grid — matches Solutions page style */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* IT Solutions summary tile */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
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
                  {[
                    "Application Development",
                    "Cloud Services",
                    "DevOps & CI/CD",
                    "Quality Assurance",
                    "Analytics & Data Management",
                    "Operations & Support",
                    "Security Solutions",
                    "AI & Machine Learning",
                    "Enterprise Application Management",
                  ].map((item) => (
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

              {categories.map((category, idx) => {
                const CategoryIcon = categoryIcons[category] || Headphones;
                const services = getServicesByCategory(category);

                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.06 }}
                    className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Card header */}
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

                    {/* Service links */}
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
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 lg:py-14 bg-primary/5">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s discuss how our professional services can help you achieve your goals.
            </p>
            <Link
              to="/#contact"
              className="mt-6 inline-flex items-center gap-2 btn-primary"
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