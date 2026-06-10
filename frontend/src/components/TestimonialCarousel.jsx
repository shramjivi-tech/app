import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../data/mock";

/**
 * Compact testimonial carousel — shows 3 small cards at once (1 on mobile, 2 on tablet),
 * sliding leftwards in a continuous motion. Hover pauses; manual controls cycle.
 */
export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const next = () => setActive((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () =>
    setActive((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 4500);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  // Pick 3 (or 2 / 1 depending on viewport) starting at `active`.
  const visibleCount = 3;
  const visible = Array.from({ length: visibleCount }, (_, k) => {
    return TESTIMONIALS[(active + k) % TESTIMONIALS.length];
  });

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 32, filter: "blur(5px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -32, filter: "blur(5px)" }}
            transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {visible.map((t, i) => (
              <article
                key={`${t.name}-${i}`}
                className={`bg-white rounded-2xl p-5 ring-1 ring-[#e7e1d4] hover:ring-[#336d2a]/30 transition-all duration-300 ${
                  i > 0 ? "hidden md:block" : ""
                } ${i > 1 ? "lg:block hidden md:hidden" : ""}`}
              >
                <Quote className="w-5 h-5 text-[#ea8a2e]" />
                <p className="mt-3 text-[14px] text-[#2d3431] leading-relaxed line-clamp-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-[#f0e8d3] flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-[#ecf3e0] shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-[13px] font-medium text-[#336d2a] truncate">{t.name}</div>
                    <div className="text-[11px] text-[#6d6357] truncate">{t.title}</div>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? "w-8 bg-[#336d2a]" : "w-3 bg-[#d8d2c2] hover:bg-[#336d2a]/40"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-9 h-9 rounded-full bg-white ring-1 ring-[#e7e1d4] flex items-center justify-center text-[#336d2a] hover:bg-[#336d2a] hover:text-white hover:ring-[#336d2a] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="w-9 h-9 rounded-full bg-[#336d2a] text-white flex items-center justify-center hover:bg-[#244e1d] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
