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

export default function Paragraph({
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
  const defaultClasses =
    "text-white/80 text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-[13px] 2xl:text-sm min-[1920px]:text-[15px] min-[2560px]:text-base max-w-full sm:max-w-[600px] xl:max-w-[800px] 2xl:max-w-[1000px] leading-relaxed";

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
