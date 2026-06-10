import { motion } from "framer-motion";

const variants = {
  hidden: (dir) => ({
    opacity: 0,
    y: dir === "up" ? 28 : dir === "down" ? -28 : 0,
    x: dir === "left" ? 28 : dir === "right" ? -28 : 0,
    filter: "blur(6px)",
  }),
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.2, 0.7, 0.2, 1] },
  },
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  amount = 0.2,
  as = "div",
}) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      custom={direction}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
}

export function Stagger({ children, className = "", delayChildren = 0, staggerChildren = 0.08 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: { delayChildren, staggerChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", direction = "up" }) {
  return (
    <motion.div className={className} custom={direction} variants={variants}>
      {children}
    </motion.div>
  );
}
