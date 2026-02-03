import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Bell, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <>
      <Helmet>
        <title>News | WebQ Technologies</title>
        <meta name="description" content="Stay updated with news and announcements from WebQ Technologies." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main id="main-content">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Bell className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  News & Updates
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We're just getting started! As we grow and achieve new milestones, we'll share our journey here. Stay tuned for exciting updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/about" className="btn-secondary inline-flex items-center justify-center gap-2">
                    Learn About Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Coming Soon Message */}
          <section className="py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-secondary/30 rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto"
              >
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  More Updates Coming Soon
                </h2>
                <p className="text-muted-foreground">
                  Follow us on social media or contact us directly to stay connected with our latest developments.
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default News;
