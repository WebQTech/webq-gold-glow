import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  topic: z.string().optional(),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    reset();
  };

  return (
    <section id="contact" ref={ref} className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ready to transform your business?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital transformation goals.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <input
                type="text"
                {...register("fullName")}
                className={`w-full px-4 py-3 bg-muted border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors ${
                  errors.fullName ? "border-destructive" : "border-border"
                }`}
                placeholder="John Smith"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-destructive">{errors.fullName.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Work Email *
              </label>
              <input
                type="email"
                {...register("email")}
                className={`w-full px-4 py-3 bg-muted border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors ${
                  errors.email ? "border-destructive" : "border-border"
                }`}
                placeholder="john@company.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Company
              </label>
              <input
                type="text"
                {...register("company")}
                className={`w-full px-4 py-3 bg-muted border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors ${
                  errors.company ? "border-destructive" : "border-border"
                }`}
                placeholder="Company Name"
              />
              {errors.company && (
                <p className="mt-1 text-sm text-destructive">{errors.company.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Topic of Interest
              </label>
              <select
                {...register("topic")}
                className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select a topic</option>
                <option value="ai">AI Solutions</option>
                <option value="cloud">Cloud Services</option>
                <option value="digital">Digital Transformation</option>
                <option value="data">Data & Analytics</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                rows={4}
                {...register("message")}
                className={`w-full px-4 py-3 bg-muted border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none ${
                  errors.message ? "border-destructive" : "border-border"
                }`}
                placeholder="Tell us about your project..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 btn-gradient px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center text-sm text-muted-foreground"
          >
            Or email us directly at{" "}
            <a href="mailto:contact@webqtech.com" className="text-primary hover:underline">
              contact@webqtech.com
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
};
