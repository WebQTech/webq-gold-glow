import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getAllCategories, getServicesByCategory } from "@/data/servicesData";

const Services = () => {
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        <section className="py-10 lg:py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="section-label">Our Services</span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Comprehensive IT Solutions for{" "}
                <span className="text-primary">Modern Enterprises</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                From custom software development to cloud infrastructure and AI-powered solutions,
                we deliver end-to-end technology services that drive business transformation.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/#contact" className="btn-primary inline-flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {categories.map((category) => (
          <section key={category} className="py-12 lg:py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{category}</h2>
                <div className="mt-2 w-16 h-1 bg-primary rounded-full" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getServicesByCategory(category).map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="group block bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.shortDescription}</p>
                      <div className="flex items-center gap-2 text-sm text-primary font-medium">
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        <section className="py-10 lg:py-16 bg-primary/5">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s discuss how our services can help you achieve your technology goals.
            </p>
            <Link
              to="/#contact"
              className="mt-8 inline-flex items-center gap-2 btn-primary"
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
