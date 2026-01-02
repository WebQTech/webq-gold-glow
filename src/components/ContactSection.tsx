import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().min(1, "Company name is required").max(100, "Company name must be less than 100 characters"),
  jobTitle: z.string().trim().max(100, "Job title must be less than 100 characters").optional(),
  challenge: z.string().optional(),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const challengeOptions = [
  { value: "", label: "Select a challenge" },
  { value: "manual-processes", label: "Manual/repetitive processes" },
  { value: "data-analysis", label: "Data analysis and insights" },
  { value: "customer-support", label: "Customer support scaling" },
  { value: "content-creation", label: "Content creation" },
  { value: "document-processing", label: "Document processing" },
  { value: "other", label: "Other" },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Log submission data
    console.log("AI Assessment Form Submission:", data);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="contact" ref={ref} className="py-16 lg:py-24 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Book Your Free AI Assessment
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Tell us about your business and we'll identify your highest-impact AI opportunities — no commitment required.
            </p>
          </motion.div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 px-6 bg-background rounded-2xl border border-border"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Thanks for reaching out!
              </h3>
              <p className="text-muted-foreground text-lg">
                We'll be in touch within 24 hours to schedule your assessment.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-6 bg-background p-8 rounded-2xl border border-border"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register("fullName")}
                  className={`w-full px-4 py-3 bg-muted border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors ${
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
                  className={`w-full px-4 py-3 bg-muted border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors ${
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
                  Company Name *
                </label>
                <input
                  type="text"
                  {...register("company")}
                  className={`w-full px-4 py-3 bg-muted border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors ${
                    errors.company ? "border-destructive" : "border-border"
                  }`}
                  placeholder="Acme Corp"
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-destructive">{errors.company.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  {...register("jobTitle")}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="VP of Operations"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  What's your biggest operational challenge?
                </label>
                <select
                  {...register("challenge")}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                >
                  {challengeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell us more about your needs (optional)
                </label>
                <textarea
                  rows={4}
                  {...register("message")}
                  className={`w-full px-4 py-3 bg-muted border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none ${
                    errors.message ? "border-destructive" : "border-border"
                  }`}
                  placeholder="What processes are you looking to improve with AI? Any specific goals or timelines?"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Get My Free Assessment"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.form>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center text-sm text-muted-foreground"
          >
            Prefer to talk now? Email us at{" "}
            <a href="mailto:contact@webqtech.com" className="text-primary hover:underline font-medium">
              contact@webqtech.com
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
};
