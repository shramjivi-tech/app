import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, ArrowRight, IndianRupee } from "lucide-react";

// The story: ₹1 from a donor is amplified to ₹6 of community impact
// through 5 additional contributions that already exist in the Shramjivi ecosystem.
const LAYERS = [
  { label: "Your Donation", value: 1, color: "#ea8a2e", note: "The seed" },
  { label: "Govt. Convergence", value: 2, color: "#336d2a", note: "+ ₹1" },
  { label: "Operational Infrastructure", value: 3, color: "#3f8434", note: "+ ₹1" },
  { label: "Volunteers & Staff", value: 4, color: "#c97719", note: "+ ₹1" },
  { label: "Partnerships", value: 5, color: "#4a9b3d", note: "+ ₹1" },
  { label: "Community Trust", value: 6, color: "#244e1d", note: "+ ₹1" },
];

const MAX = 6;

export default function MultiplierChart() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1a3812] via-[#244e1d] to-[#1a3812] text-[#faf6ef] p-7 md:p-12"
    >
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#ea8a2e]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#4a9b3d]/15 blur-3xl pointer-events-none" />

      <div className="relative grid lg:grid-cols-12 gap-10 items-end">
        {/* Header */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ea8a2e]/20 text-[#f5b574] text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            We amplify your contribution
          </div>
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-[56px] leading-[1.04] mt-5">
            From <span className="text-[#ea8a2e]">₹1</span> to{" "}
            <span className="text-[#ea8a2e]">₹6</span> of real community impact.
          </h2>
          <p className="mt-5 text-[#cfd9c5] text-[15px] md:text-base leading-relaxed max-w-md">
            Every rupee you give multiplies six-fold through government convergence,
            our existing infrastructure, volunteers, partnerships and 85+ years of
            community trust.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-[#a8b59c]">
            Read left to right <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Chart */}
        <div className="lg:col-span-7">
          <div className="relative h-[360px] md:h-[420px]">
            {/* Y-axis grid lines */}
            <div className="absolute inset-0 flex flex-col-reverse justify-between pointer-events-none">
              {Array.from({ length: MAX + 1 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[10px] text-[#a8b59c] w-7 text-right tabular-nums">
                    ₹{i}
                  </span>
                  <span className="flex-1 h-px bg-[#ffffff]/10" />
                </div>
              ))}
            </div>

            {/* Bars */}
            <div className="absolute inset-0 pl-10 flex items-end justify-between gap-2 md:gap-3">
              {LAYERS.map((l, idx) => {
                const height = (l.value / MAX) * 100;
                return (
                  <div
                    key={l.label}
                    className="flex-1 flex flex-col items-center h-full justify-end gap-2"
                  >
                    {/* Value bubble */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.35 + idx * 0.18,
                        ease: "easeOut",
                      }}
                      className="flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-white/95 text-[#1a3812] text-[11px] font-semibold shadow-sm"
                    >
                      <IndianRupee className="w-2.5 h-2.5" strokeWidth={2.5} />
                      <span className="tabular-nums">{l.value}</span>
                    </motion.div>

                    {/* Bar */}
                    <motion.div
                      initial={{ height: 0 }}
                      animate={inView ? { height: `${height}%` } : { height: 0 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.2 + idx * 0.18,
                        ease: [0.2, 0.7, 0.2, 1],
                      }}
                      className="w-full rounded-t-xl relative overflow-hidden shadow-[0_6px_18px_rgba(0,0,0,0.25)]"
                      style={{ backgroundColor: l.color }}
                    >
                      <div
                        className="absolute inset-x-0 top-0 h-1/2 opacity-30"
                        style={{
                          backgroundImage:
                            "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
                        }}
                      />
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Labels under bars */}
          <div className="mt-3 pl-10 flex items-start justify-between gap-2 md:gap-3">
            {LAYERS.map((l, idx) => (
              <motion.div
                key={l.label}
                initial={{ opacity: 0, y: 6 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + idx * 0.12 }}
                className="flex-1 text-center"
              >
                <div className="text-[10px] md:text-[11px] font-medium text-white leading-tight">
                  {l.label}
                </div>
                <div className="text-[9px] md:text-[10px] text-[#a8b59c] mt-0.5">
                  {l.note}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
