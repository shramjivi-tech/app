import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Timeline({ items }) {
  return (
    <>
      {/* Desktop: Horizontal scroll-driven timeline */}
      <div className="hidden md:block">
        <HorizontalTimeline items={items} />
      </div>
      {/* Mobile: Vertical animated timeline */}
      <div className="md:hidden">
        <VerticalTimeline items={items} />
      </div>
    </>
  );
}

function HorizontalTimeline({ items }) {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      const p = max > 0 ? el.scrollLeft / max : 0;
      setProgress(p);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Progress bar */}
      <div className="relative h-1 bg-[#e7e1d4] rounded-full overflow-hidden mb-10">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#336d2a] to-[#ea8a2e] transition-[width] duration-150"
          style={{ width: `${Math.max(8, progress * 100)}%` }}
        />
      </div>

      <div
        ref={scrollerRef}
        className="overflow-x-auto scroll-x pb-6 -mx-5 px-5"
      >
        <div className="relative flex gap-6 min-w-max items-stretch">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-[68px] h-px bg-[#d8d2c2]" />
          {items.map((it, idx) => (
            <TimelineCard key={it.year + idx} item={it} index={idx} />
          ))}
        </div>
      </div>

      <div className="mt-4 text-xs text-[#6d6357] flex items-center gap-2">
        <span className="inline-block w-8 h-px bg-[#336d2a]" />
        Scroll horizontally to explore 85+ years of journey
      </div>
    </div>
  );
}

function TimelineCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.04, ease: [0.2, 0.7, 0.2, 1] }}
      className="relative w-72 shrink-0"
    >
      {/* Node */}
      <div className="flex flex-col items-center">
        <div className="font-serif-display text-4xl text-[#ea8a2e] leading-none">
          {item.year}
        </div>
        <div className="my-4 relative">
          <span className="block w-3.5 h-3.5 rounded-full bg-[#336d2a] ring-4 ring-[#faf6ef] relative z-10" />
        </div>
      </div>
      {/* Card */}
      <div className="mt-2 bg-white rounded-2xl p-5 ring-1 ring-[#e7e1d4] hover:ring-[#336d2a]/40 hover:-translate-y-1 transition-all duration-300 min-h-[140px]">
        <Sparkles className="w-4 h-4 text-[#ea8a2e]" />
        <p className="text-[14px] text-[#2d3431] leading-relaxed mt-3">{item.text}</p>
      </div>
    </motion.div>
  );
}

function VerticalTimeline({ items }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative pl-8">
      {/* Static line */}
      <div className="absolute left-[14px] top-0 bottom-0 w-px bg-[#e7e1d4]" />
      {/* Animated progress line */}
      <motion.div
        className="absolute left-[14px] top-0 w-px bg-gradient-to-b from-[#336d2a] to-[#ea8a2e]"
        style={{ height: lineHeight }}
      />

      <ul className="space-y-7">
        {items.map((m, idx) => (
          <VerticalItem key={m.year + idx} item={m} index={idx} />
        ))}
      </ul>
    </div>
  );
}

function VerticalItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: 16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.03, ease: [0.2, 0.7, 0.2, 1] }}
      className="relative"
    >
      <span className="absolute -left-[26px] top-1.5 w-3 h-3 rounded-full bg-[#336d2a] ring-4 ring-[#faf6ef]" />
      <div className="font-serif-display text-2xl text-[#ea8a2e] leading-none">
        {item.year}
      </div>
      <p className="mt-2 text-[15px] text-[#2d3431] leading-relaxed">{item.text}</p>
    </motion.li>
  );
}
