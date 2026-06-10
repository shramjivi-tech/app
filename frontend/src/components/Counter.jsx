import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

/**
 * Parses a value string like "58,000+", "2,37,169", "108%", "\u20b91,000"
 * Returns { prefix, number, suffix, formatter }
 */
function parseValue(value) {
  if (typeof value === "number") {
    return { prefix: "", number: value, suffix: "", isIndian: false };
  }
  const str = String(value).trim();
  // Find first digit
  const firstDigit = str.search(/\d/);
  if (firstDigit === -1) return { prefix: "", number: 0, suffix: str, isIndian: false };
  const prefix = str.slice(0, firstDigit);
  const rest = str.slice(firstDigit);
  // Match the numeric portion (digits + commas + optional decimal)
  const m = rest.match(/^([\d,]+(?:\.\d+)?)/);
  if (!m) return { prefix, number: 0, suffix: rest, isIndian: false };
  const numStr = m[1];
  const suffix = rest.slice(numStr.length);
  // Detect Indian numbering (2-digit lakh group: e.g. 2,37,169)
  const groups = numStr.split(",");
  const isIndian =
    groups.length > 2 && groups.slice(1, -1).every((g) => g.length === 2);
  const number = parseFloat(numStr.replace(/,/g, ""));
  return { prefix, number, suffix, isIndian };
}

function formatIndian(n) {
  // 2,37,169 style
  const str = Math.round(n).toString();
  if (str.length <= 3) return str;
  const last3 = str.slice(-3);
  const rest = str.slice(0, -3);
  return rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + last3;
}

function formatStandard(n) {
  return Math.round(n).toLocaleString("en-IN");
}

export default function Counter({ value, duration = 1.6, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const { prefix, number, suffix, isIndian } = parseValue(value);
  const mv = useMotionValue(0);
  const spring = useSpring(mv, {
    stiffness: 60,
    damping: 18,
    mass: 1,
  });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    mv.set(number);
  }, [inView, number, mv]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(v));
    return () => unsub();
  }, [spring]);

  const formatted = isIndian ? formatIndian(display) : formatStandard(display);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
