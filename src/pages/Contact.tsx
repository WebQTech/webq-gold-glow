import { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  { icon: Mail, title: "Email Us", details: "contact@webqtech.com", subtext: "We'll respond within 24 hours" },
  { icon: Phone, title: "Call Us", details: "+1 (555) 123-4567", subtext: "Mon-Fri, 9am-6pm EST" },
  { icon: MapPin, title: "Visit Us", details: "123 Innovation Drive", subtext: "San Francisco, CA 94105" },
  { icon: Clock, title: "Business Hours", details: "Monday - Friday", subtext: "9:00 AM - 6:00 PM EST" },
];

const Contact = () => {
  useEffect(() => {
    // This loads the mandatory Zoho script for security validation
    const script = document.createElement("script");
    script.src = "https://static.zohocdn.com/zohodeskstatic/app/js/jqueryandencoder.ef05974972bf3bca1b87.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | WebQ Technologies</title>
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="relative pt-24 pb-12">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Start a <span className="text-primary">Conversation</span></h1>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>

                {/* The 'action' must be the Zoho URL and we let the browser handle the submit */}
                <form 
                  name="zsWebToCase_161155000001039003" 
                  id="zsWebToCase_161155000001039003" 
                  action="https://desk.zoho.in/support/WebToCase" 
                  method="POST"
                  encType="multipart/form-data"
                  className="space-y-6"
                >
                  {/* HIDDEN ZOHO TOKENS - DO NOT REMOVE */}
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
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Work Email *</Label>
                      <input
                        name="Email"
                        type="email"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Topic of Interest *</Label>
                    <input
                      name="Subject"
                      type="text"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Message</Label>
                    <textarea
                      name="Description"
                      rows={5}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" id="zsSubmitButton_161155000001039003" className="w-full md:w-auto">
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </motion.div>

              <div className="space-y-8">
                <div className="aspect-[4/3] rounded-2xl bg-muted/50 border border-border flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary/50 mx-auto mb-4" />
                    <p className="text-muted-foreground">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;