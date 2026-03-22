import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SolutionImageCarouselProps {
  images: string[];
  alt: string;
  interval?: number;
}

const SolutionImageCarousel = ({ images, alt, interval = 4000 }: SolutionImageCarouselProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full aspect-[5/4] rounded-2xl overflow-hidden bg-muted/30">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${alt} - ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-primary w-5"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SolutionImageCarousel;