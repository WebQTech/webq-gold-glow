import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { industriesData, getAllIndustryCategories } from "@/data/industriesData";

const Industries = () => {
  const categories = getAllIndustryCategories();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        {/* Hero Section */}
        <section className="py-10 lg:py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-sm font-semibold tracking-widest text-primary uppercase">
                Industries We Serve
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Transforming Businesses Across Every Sector
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                From startups to enterprises, we deliver tailored technology solutions 
                that address the unique challenges of your industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries by Category */}
        {categories.map((category, categoryIndex) => {
          const categoryIndustries = industriesData.filter(i => i.category === category);
          
          return (
            <section 
              key={category} 
              className={`py-10 lg:py-14 ${categoryIndex % 2 === 1 ? 'bg-muted/30' : ''}`}
            >
              <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-10"
                >
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                    {category}
                  </h2>
                  <div className="w-20 h-1 bg-primary mt-4 rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryIndustries.map((industry, index) => {
                    const Icon = industry.icon;
                    return (
                      <motion.div
                        key={industry.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Link
                          to={`/industries/${industry.slug}`}
                          className="group block h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                        >
                          {/* Hero Image */}
                          <div className="aspect-video w-full overflow-hidden">
                            <img 
                              src={industry.heroImage} 
                              alt={industry.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>

                          <div className="p-6">
                            <div className="flex items-start justify-between mb-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                              {industry.isNew && (
                                <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
                                  New
                                </span>
                              )}
                            </div>
                            
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {industry.name}
                            </h3>
                            
                            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                              {industry.shortDescription}
                            </p>


                            <div className="mt-4 flex flex-wrap gap-1">
                              {industry.tags.slice(0, 3).map((tag, i) => (
                                <span 
                                  key={i}
                                  className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                              {industry.tags.length > 3 && (
                                <span className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded-full">
                                  +{industry.tags.length - 3}
                                </span>
                              )}
                            </div>

                            <div className="mt-6 inline-flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                              Learn more
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA Section */}
        <section className="py-10 lg:py-16 bg-primary/5">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Ready to Transform Your Industry?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how our industry-specific expertise can help solve your unique challenges.
              </p>
              <Link
                to="/#contact"
                className="mt-8 inline-flex items-center gap-2 btn-primary"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
