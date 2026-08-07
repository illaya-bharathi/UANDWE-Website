import React from "react";
import { motion } from "framer-motion";

export const AnimatedText = ({ text, className = "" }) => {
  const words = typeof text === "string" ? text.split(" ") : [];
  return (
    <motion.span
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.015 } // Faster stagger for letters
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`inline-block ${className}`}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } }
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {wordIndex !== words.length - 1 && (
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } }
              }}
              className="inline-block w-[0.35em]"
            >
              {"\u00A0"}
            </motion.span>
          )}
        </span>
      ))}
    </motion.span>
  );
};

export default function SmallParagraph({
  text,
  children,
  className = "",
  animated = true,
  delay = 0.6,
  duration = 1,
  hasAnimated,
  initial = { opacity: 0, y: 30 },
  animate,
  whileInView = { once: true },
  viewport = { once: true },
  ...props
}) {
  // Use the much smaller text size found in the ServiceCards
  const defaultClasses = "text-white/45 text-[10px] md:text-[11px] lg:text-xs leading-relaxed max-w-full";

  const combinedClasses = `${defaultClasses} ${className}`.trim();

  // Handle motion animation states smoothly
  const targetAnimate =
    animate !== undefined
      ? animate
      : hasAnimated !== undefined
      ? hasAnimated
        ? { opacity: 1, y: 0 }
        : {}
      : undefined;

  const content = text ? (
    animated ? <AnimatedText key={text} text={text} /> : text
  ) : (
    children
  );

  return (
    <motion.p
      initial={initial}
      animate={targetAnimate}
      whileInView={targetAnimate ? undefined : { opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration, delay }}
      className={combinedClasses}
      {...props}
    >
      {content}
    </motion.p>
  );
}
