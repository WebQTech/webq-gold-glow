import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface SolutionImageCarouselProps {
  images: string[];
  alt: string;
  interval?: number;
}

const SolutionImageCarousel = ({ images, alt, interval = 5000 }: SolutionImageCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || lightboxOpen) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, lightboxOpen]);

  // Close lightbox on Escape key
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") setCurrent((prev) => (prev + 1) % images.length);
      if (e.key === "ArrowLeft") setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxOpen, images.length]);

  const openLightbox = useCallback(() => setLightboxOpen(true), []);

  return (
    <>
      <div className="relative w-full aspect-[5/4] rounded-2xl overflow-hidden bg-muted/30 group cursor-pointer" onClick={openLightbox}>
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

        {/* Zoom hint overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center rounded-2xl">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 backdrop-blur-sm rounded-full p-3">
            <ZoomIn className="w-5 h-5 text-foreground" />
          </div>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => { e.stopPropagation(); setCurrent(index); }}
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors text-white"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10 text-white/60 text-sm font-medium">
              {current + 1} / {images.length}
            </div>

            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); setCurrent((prev) => (prev - 1 + images.length) % images.length); }}
                  className="absolute left-4 z-10 p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors text-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setCurrent((prev) => (prev + 1) % images.length); }}
                  className="absolute right-4 z-10 p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors text-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={images[current]}
                alt={`${alt} - ${current + 1}`}
                className="relative z-[1] max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            {/* Dot indicators in lightbox */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setCurrent(index); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-white w-6"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SolutionImageCarousel;
