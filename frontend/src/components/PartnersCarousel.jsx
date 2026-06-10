import { motion } from "framer-motion";
import { PARTNERS } from "../data/mock";

/**
 * Infinite scrolling partner logos carousel (two reversed rows).
 * Pauses on hover for readability.
 */
export default function PartnersCarousel() {
  const row1 = PARTNERS;
  const row2 = [...PARTNERS].reverse();

  return (
    <div className="relative">
      <div className="ticker-fade space-y-4">
        <Row items={row1} duration={38} direction="left" />
        <Row items={row2} duration={46} direction="right" />
      </div>
    </div>
  );
}

function Row({ items, duration, direction }) {
  const trackItems = [...items, ...items];
  return (
    <div className="overflow-hidden" style={{ maskImage: "none" }}>
      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {trackItems.map((p, i) => (
          <PartnerCard key={`${p.name}-${i}`} partner={p} />
        ))}
      </motion.div>
    </div>
  );
}

function PartnerCard({ partner }) {
  return (
    <div className="group flex items-center gap-4 bg-white rounded-2xl px-5 py-4 ring-1 ring-[#e7e1d4] hover:ring-[#336d2a]/40 hover:-translate-y-0.5 transition-all duration-300 min-w-[300px] cursor-default">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center font-serif-display text-white text-base shadow-sm shrink-0"
        style={{ backgroundColor: partner.color }}
        aria-hidden
      >
        {partner.short
          .split(" ")
          .map((w) => w[0])
          .slice(0, 2)
          .join("")}
      </div>
      <div className="min-w-0">
        <div className="text-[13px] font-semibold text-[#1a3812] leading-tight whitespace-nowrap">
          {partner.short}
        </div>
        <div className="text-[11px] text-[#6d6357] mt-0.5 whitespace-nowrap">
          {partner.name}
        </div>
      </div>
    </div>
  );
}
