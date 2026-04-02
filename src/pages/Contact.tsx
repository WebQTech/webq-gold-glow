import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "contact@webqtech.com",
    subtext: "We'll respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "US Office",
    details: "6200 Village Pkwy, Suite # 200",
    subtext: "Dublin, CA 94568, USA",
  },
  {
    icon: MapPin,
    title: "India Office",
    details: "5, Kalidasan Street, Chitlapakkam",
    subtext: "Chennai-600064, Tamil Nadu, India",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Monday - Friday",
    subtext: "9:00 AM - 6:00 PM EST",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Automatically detect the current domain for returnURL
  const returnURL = `${window.location.origin}/thank-you`;

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | WebQ Technologies</title>
        <meta
          name="description"
          content="Get in touch with WebQ Technologies. Contact us for enterprise technology solutions, AI consulting, and digital transformation services."
        />
      </Helmet>

      

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <GoBackButton />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Let's Start a{" "}
                <span className="text-primary">Conversation</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have a project in mind or want to learn more about our services?
                We'd love to hear from you. Reach out and let's explore how we
                can transform your business together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-8">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {info.title}
                  </h3>
                  <p className="text-foreground font-medium">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.subtext}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Form - Zoho Desk Integration */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>

                <form 
                  name="zsWebToCase_161155000001039003" 
                  id="zsWebToCase_161155000001039003" 
                  action="https://desk.zoho.in/support/WebToCase" 
                  method="POST"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                  className="space-y-6"
                >
                  {/* Hidden Zoho Fields */}
                  <input type="hidden" name="xnQsjsdp" value="edbsn17fe34adbbb3eaacda29f3a0cf04f228" />
                  <input type="hidden" name="xmIwtLD" value="edbsn18a4fc5e6675ce19261a7bb9659100a6562083b76b7a809f0fed5bd07dcd06c3" />
                  <input type="hidden" name="xJdfEaS" value="" />
                  <input type="hidden" name="actionType" value="Q2FzZXM=" />
                  <input type="hidden" id="property(module)" value="Cases" />
                  <input type="hidden" id="dependent_field_values_Cases" value='{"JSON_VALUES":{},"JSON_SELECT_VALUES":{},"JSON_MAP_DEP_LABELS":[]}' />
                  <input type="hidden" name="returnURL" value={returnURL} />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Full Name</Label>
                      <Input
                        id="contactName"
                        name="Contact Name"
                        type="text"
                        required
                        maxLength={120}
                        placeholder="John Doe"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="Email"
                        type="email"
                        required
                        maxLength={120}
                        placeholder="john@example.com"
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="Subject"
                      type="text"
                      required
                      maxLength={255}
                      placeholder="How can we help you?"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Message</Label>
                    <Textarea
                      id="description"
                      name="Description"
                      maxLength={3000}
                      rows={6}
                      placeholder="Tell us about your project or inquiry..."
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Map Placeholder & Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >


                {/* FAQ Preview */}
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-foreground">
                        What's your typical response time?
                      </p>
                      <p className="text-sm text-muted-foreground">
                        We aim to respond to all inquiries within 24 business
                        hours.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        Do you offer free consultations?
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Yes, we offer a complimentary 30-minute consultation to
                        discuss your project needs.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        What industries do you serve?
                      </p>
                      <p className="text-sm text-muted-foreground">
                        We work across multiple industries including FinTech,
                        Healthcare, Retail, and more.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;