import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Automatically detect the current domain for returnURL
  const returnURL = `${window.location.origin}/thank-you`;

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  return (
    <section id="contact" ref={ref} className="py-10 lg:py-16 bg-background">
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
            action="https://desk.zoho.in/support/WebToCase"
            method="POST"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            {/* Hidden Zoho Fields */}
            <input type="hidden" name="xnQsjsdp" value="edbsn17fe34adbbb3eaacda29f3a0cf04f228" />
            <input type="hidden" name="xmIwtLD" value="edbsn18a4fc5e6675ce19261a7bb9659100a6562083b76b7a809f0fed5bd07dcd06c3" />
            <input type="hidden" name="xJdfEaS" value="" />
            <input type="hidden" name="actionType" value="Q2FzZXM=" />
            <input type="hidden" id="property(module)" value="Cases" />
            <input type="hidden" id="dependent_field_values_Cases" value='{"JSON_VALUES":{},"JSON_SELECT_VALUES":{},"JSON_MAP_DEP_LABELS":[]}' />
            <input type="hidden" name="returnURL" value={returnURL} />

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="Contact Name"
                required
                maxLength={120}
                className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Work Email *
              </label>
              <input
                type="email"
                name="Email"
                required
                maxLength={120}
                className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Company
              </label>
              <input
                type="text"
                name="Company"
                maxLength={100}
                className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Company Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Topic of Interest
              </label>
              <select
                name="Subject"
                className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select a topic</option>
                <option value="AI Solutions">AI Solutions</option>
                <option value="Cloud Services">Cloud Services</option>
                <option value="Digital Transformation">Digital Transformation</option>
                <option value="Data & Analytics">Data & Analytics</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                rows={4}
                name="Description"
                maxLength={3000}
                className="w-full px-4 py-3 bg-muted border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
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