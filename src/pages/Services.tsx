import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { servicesData, getAllCategories, getServicesByCategory } from "@/data/servicesData";

const ServiceCard = ({ service, index }: { service: typeof servicesData[0]; index: number }) => {
  const Icon = service.icon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/services/${service.slug}`}
        className="group block bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full"
      >
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
          <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
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
    </motion.div>
  );
};

const Services = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        {/* Hero Section */}
      <section ref={heroRef} className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Services by Category */}
      {categories.map((category) => {
        const categoryServices = getServicesByCategory(category);
        const categoryRef = useRef(null);
        const isCategoryInView = useInView(categoryRef, { once: true, margin: "-100px" });

        return (
          <section key={category} ref={categoryRef} className="py-12 lg:py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isCategoryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {category}
                </h2>
                <div className="mt-2 w-16 h-1 bg-primary rounded-full" />
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryServices.map((service, index) => (
                  <ServiceCard key={service.slug} service={service} index={index} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your technology goals.
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
