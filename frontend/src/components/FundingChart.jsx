import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FUNDING_FLOW } from "../data/mock";
import { TrendingUp } from "lucide-react";

export default function FundingChart() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  // Build a unique legend across all programs
  const legendMap = {};
  FUNDING_FLOW.programs.forEach((p) => {
    p.segments.forEach((s) => {
      legendMap[s.label] = s.color;
    });
  });
  const legend = Object.entries(legendMap);

  return (
    <div ref={ref} className="bg-white rounded-3xl p-7 md:p-10 ring-1 ring-[#e7e1d4]">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-[#6e4a0a] mb-2 flex items-center gap-2">
            <TrendingUp className="w-3.5 h-3.5" />
            Shramjivi Funding Flow
          </div>
          <h3 className="font-serif-display text-2xl md:text-3xl text-[#1a3812] leading-tight">
            Financial contribution of current activities
          </h3>
          <p className="text-sm text-[#6d6357] mt-2 max-w-lg">{FUNDING_FLOW.totalNote}</p>
        </div>
        {/* Legend */}
        <div className="flex flex-wrap gap-3 max-w-md">
          {legend.map(([label, color]) => (
            <div key={label} className="inline-flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: color }}
              />
              <span className="text-xs text-[#3d4441]">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-7">
        {FUNDING_FLOW.programs.map((p, idx) => (
          <div key={p.name}>
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <div>
                <div className="font-medium text-[#1a3812]">{p.name}</div>
                <div className="text-xs text-[#6d6357]">{p.sub}</div>
              </div>
              <div className="text-xs text-[#6d6357]">
                {p.segments.map((s) => `${s.value}% ${s.label.split(" ")[0]}`).join(" \u00b7 ")}
              </div>
            </div>
            <div className="relative h-7 bg-[#f3ecdc] rounded-full overflow-hidden flex">
              {p.segments.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${s.value}%` } : { width: 0 }}
                  transition={{
                    duration: 1.1,
                    ease: [0.2, 0.7, 0.2, 1],
                    delay: 0.15 + idx * 0.12 + i * 0.08,
                  }}
                  className="h-full relative group"
                  style={{ backgroundColor: s.color }}
                  title={`${s.label}: ${s.value}%`}
                >
                  {s.value >= 18 && (
                    <span className="absolute inset-0 flex items-center justify-center text-[11px] font-medium text-white px-2 truncate">
                      {s.value}%
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
