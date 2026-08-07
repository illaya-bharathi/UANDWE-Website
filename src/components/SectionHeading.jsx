import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ titlePart1, titlePart2, className = "", breakLine = false, titleClassName }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${className}`}
    >
      <h2 className={`${titleClassName || 'text-[clamp(1.5rem,3vw,2.5rem)] font-normal'} leading-[1.1] tracking-tight`}>
        {titlePart1 && <span className="text-white">{titlePart1} </span>}
        {breakLine && <br />}
        {titlePart2 && <span className="text-orange-500">{titlePart2}</span>}
      </h2>
    </motion.div>
  );
}
