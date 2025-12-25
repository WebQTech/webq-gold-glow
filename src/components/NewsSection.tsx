import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    date: "Dec 20, 2024",
    title: "WebQ Technologies launches AI-powered enterprise solutions suite",
    category: "Press Release",
  },
  {
    date: "Dec 15, 2024",
    title: "How generative AI is transforming customer experiences in 2025",
    category: "Insights",
  },
  {
    date: "Dec 10, 2024",
    title: "WebQ recognized as a leader in digital transformation services",
    category: "Awards",
  },
];

export const NewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="news" ref={ref} className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              News
            </h2>
            <a 
              href="#"
              className="inline-flex items-center gap-2 mt-4 text-primary font-medium hover:gap-3 transition-all"
            >
              View all news
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* News List */}
          <div className="space-y-0">
            {newsItems.map((item, index) => (
              <motion.a
                key={item.title}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="news-item group block"
              >
                <div className="flex items-start gap-4 w-full">
                  <span className="text-sm text-foreground/40 whitespace-nowrap">
                    {item.date}
                  </span>
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h4 className="mt-1 text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <ArrowRight className="w-5 h-5 text-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
