import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

/**
 * Reusable image slot. If `src` is provided, renders the image with cover.
 * Otherwise renders a styled placeholder with logo-orange/green accents that
 * matches the design language so the client can drop in real photos later.
 */
export default function ImageSlot({
  src,
  alt = "",
  className = "",
  aspect = "4/3",
  rounded = "rounded-2xl",
  label = "Photo coming soon",
}) {
  return (
    <div
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {src ? (
        <motion.img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
        />
      ) : (
        <Placeholder label={label} />
      )}
    </div>
  );
}

function Placeholder({ label }) {
  return (
    <div className="absolute inset-0 bg-[#f5ecd9] flex items-center justify-center">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(234,138,46,0.10) 0%, rgba(51,109,42,0.10) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(51,109,42,0.06) 0 8px, transparent 8px 16px)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-2 text-center px-4">
        <div className="w-12 h-12 rounded-full bg-white/80 border border-[#ea8a2e]/40 flex items-center justify-center shadow-sm">
          <ImageIcon className="w-5 h-5 text-[#ea8a2e]" />
        </div>
        <div className="text-[11px] uppercase tracking-[0.22em] text-[#6e4a0a] font-medium">
          {label}
        </div>
      </div>
    </div>
  );
}
