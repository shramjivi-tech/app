import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../data/mock";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 5500);
    return () => clearInterval(timerRef.current);
  }, [paused, index]); // eslint-disable-line react-hooks/exhaustive-deps

  const t = TESTIMONIALS[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-[32px] bg-white ring-1 ring-[#e7e1d4]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.article
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -direction * 60, filter: "blur(6px)" }}
            transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
            className="grid md:grid-cols-12 gap-0"
          >
            {/* Image side */}
            <div className="md:col-span-5 relative h-64 md:h-auto md:min-h-[360px] overflow-hidden">
              <motion.img
                src={t.image}
                alt={t.name}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3812]/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white" />
            </div>

            {/* Content */}
            <div className="md:col-span-7 p-7 md:p-12 flex flex-col justify-center">
              <Quote className="w-9 h-9 text-[#ea8a2e]" />
              <p className="mt-5 font-serif-display text-2xl md:text-3xl lg:text-[34px] leading-[1.25] text-[#1a3812]">
                “{t.quote}”
              </p>
              <div className="mt-7 pt-5 border-t border-[#f0e8d3]">
                <div className="font-medium text-[#336d2a] text-lg">{t.name}</div>
                <div className="text-sm text-[#6d6357] mt-0.5">{t.title}</div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className="group relative"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-500 ${
                  i === index
                    ? "w-10 bg-[#336d2a]"
                    : "w-4 bg-[#d8d2c2] hover:bg-[#336d2a]/40"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-11 h-11 rounded-full bg-white ring-1 ring-[#e7e1d4] flex items-center justify-center text-[#336d2a] hover:bg-[#336d2a] hover:text-white hover:ring-[#336d2a] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="w-11 h-11 rounded-full bg-[#336d2a] text-white flex items-center justify-center hover:bg-[#244e1d] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
