import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Home, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Thank You | WebQ Technologies</title>
        <meta
          name="description"
          content="Thank you for contacting WebQ Technologies. We'll get back to you soon."
        />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background flex items-center justify-center py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircle className="w-12 h-12 text-primary" />
            </motion.div>
            
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            >
              Thank You!
            </motion.h1>
            
            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              We've received your message and appreciate you reaching out to us.
            </motion.p>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-card border border-border rounded-2xl p-8 mb-8"
            >
              <div className="flex items-start gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    What happens next?
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Our team will review your inquiry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>We'll respond within 24 business hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>You'll receive an email confirmation shortly</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg"
                onClick={() => navigate("/")}
                className="gap-2"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                onClick={() => navigate("/contact")}
              >
                Send Another Message
              </Button>
            </motion.div>

            {/* Additional Info */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-sm text-muted-foreground mt-8"
            >
              Need immediate assistance? Call us at{" "}
              <a href="tel:+15551234567" className="text-primary hover:underline">
                +1 (555) 123-4567
              </a>
            </motion.p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ThankYou;
