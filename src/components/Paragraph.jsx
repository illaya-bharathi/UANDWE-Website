import React from "react";
import { motion } from "framer-motion";

export const AnimatedText = ({ text, className = "" }) => {
  const characters = typeof text === "string" ? text.split("") : [];
  return (
    <motion.span
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.03 } // Faster stagger for letters
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`inline-block ${className}`}
    >
      {characters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
          }}
          className={`inline-block ${char === " " ? "w-[0.35em]" : ""}`}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
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
    "text-white/80 text-sm sm:text-base md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px] min-[1920px]:text-2xl min-[2560px]:text-3xl max-w-full sm:max-w-[600px] xl:max-w-[800px] 2xl:max-w-[1000px] leading-relaxed";

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
