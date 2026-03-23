import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "contact@webqtech.com",
    subtext: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "925-548-9897",
    subtext: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Visit Us (USA)",
    details: "6200 Village Pkwy, Suite # 200",
    subtext: "Dublin, CA 94568, USA",
  },
  {
    icon: MapPin,
    title: "Registered Office (India)",
    details: "5, Kalidasan Street, Chitlapakkam",
    subtext: "Chennai-600064, India",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Monday - Friday",
    subtext: "9:00 AM - 6:00 PM EST",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setIsSubmitting(false);
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
              {/* Form */}
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        maxLength={100}
                        className={`bg-background border-border focus:border-primary ${
                          errors.name ? "border-destructive" : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        maxLength={255}
                        className={`bg-background border-border focus:border-primary ${
                          errors.email ? "border-destructive" : ""
                        }`}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      maxLength={200}
                      className={`bg-background border-border focus:border-primary ${
                        errors.subject ? "border-destructive" : ""
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive">{errors.subject}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      maxLength={2000}
                      rows={6}
                      className={`bg-background border-border focus:border-primary resize-none ${
                        errors.message ? "border-destructive" : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
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
                {/* USA Map */}
                <div className="rounded-2xl border border-border overflow-hidden">
                  <div className="bg-muted/30 px-4 py-2 border-b border-border">
                    <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      USA Office — Dublin, CA
                    </p>
                  </div>
                  <iframe
                    title="USA Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.5!2d-121.9352!3d37.7085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbe1c5e5b6b3f%3A0x0!2s6200+Village+Pkwy%2C+Dublin%2C+CA+94568!5e0!3m2!1sen!2sus!4v1700000000000"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* India Map */}
                <div className="rounded-2xl border border-border overflow-hidden">
                  <div className="bg-muted/30 px-4 py-2 border-b border-border">
                    <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      India Office — Chennai
                    </p>
                  </div>
                  <iframe
                    title="India Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d80.1486!3d12.9516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f5c5b5b5b5b%3A0x0!2sKalidasan+Street%2C+Chitlapakkam%2C+Chennai!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

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
