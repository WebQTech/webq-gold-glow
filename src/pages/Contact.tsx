import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load Zoho's mandatory validation script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.zohocdn.com/zohodeskstatic/app/js/jqueryandencoder.ef05974972bf3bca1b87.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // This is the fix: It stops the global template from showing the "Error" toast
    e.stopPropagation();
    setIsSubmitting(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | WebQ Technologies</title>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-4xl font-bold mb-4">Send Us a Message</h1>
              
              <form 
                name="zsWebToCase_161155000001039003" 
                id="zsWebToCase_161155000001039003" 
                action="https://desk.zoho.in/support/WebToCase" 
                method="POST"
                onSubmit={handleFormSubmit}
                encType="multipart/form-data"
                className="space-y-6"
              >
                {/* Zoho Hidden Tokens */}
                <input type="hidden" name="xnQsjsdp" value="edbsn17fe34adbbb3eaacda29f3a0cf04f228" />
                <input type="hidden" name="xmIwtLD" value="edbsn18a4fc5e6675ce19261a7bb9659100a6562083b76b7a809f0fed5bd07dcd06c3" />
                <input type="hidden" name="xJdfEaS" value="" />
                <input type="hidden" name="actionType" value="Q2FzZXM=" />
                <input type="hidden" id="property(module)" value="Cases" />
                <input type="hidden" id="dependent_field_values_Cases" value='{"JSON_VALUES":{},"JSON_SELECT_VALUES":{},"JSON_MAP_DEP_LABELS":[]}' />
                <input type="hidden" name="returnURL" value="https://www.webqtech.com/thank-you" />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Full Name *</Label>
                    <input
                      name="Contact Name"
                      type="text"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Work Email *</Label>
                    <input
                      name="Email"
                      type="email"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Topic of Interest *</Label>
                  <input
                    name="Subject"
                    type="text"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Message</Label>
                  <textarea
                    name="Description"
                    rows={6}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Support Info Side */}
            <div className="space-y-8 lg:pt-12">
               <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">Zoho Desk Integrated</h3>
                <p className="text-sm text-muted-foreground">
                  Your requests are now tracked automatically via contact@webqtech.com tickets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;