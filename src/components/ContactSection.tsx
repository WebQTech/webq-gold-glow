import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send } from "lucide-react";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-16 lg:py-24 bg-[hsl(215,50%,12%)] text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to transform your business?
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital transformation goals.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[hsl(195,100%,45%)] transition-colors"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Work Email *
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[hsl(195,100%,45%)] transition-colors"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Company
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[hsl(195,100%,45%)] transition-colors"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">
                Topic of Interest
              </label>
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white focus:outline-none focus:border-[hsl(195,100%,45%)] transition-colors">
                <option value="" className="bg-[hsl(215,50%,12%)]">Select a topic</option>
                <option value="ai" className="bg-[hsl(215,50%,12%)]">AI Solutions</option>
                <option value="cloud" className="bg-[hsl(215,50%,12%)]">Cloud Services</option>
                <option value="digital" className="bg-[hsl(215,50%,12%)]">Digital Transformation</option>
                <option value="data" className="bg-[hsl(215,50%,12%)]">Data & Analytics</option>
                <option value="other" className="bg-[hsl(215,50%,12%)]">Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white/70 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[hsl(195,100%,45%)] transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 btn-gradient px-8 py-4"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center text-sm text-white/40"
          >
            Or email us directly at{" "}
            <a href="mailto:contact@webqtech.com" className="text-[hsl(195,100%,45%)] hover:underline">
              contact@webqtech.com
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
};
