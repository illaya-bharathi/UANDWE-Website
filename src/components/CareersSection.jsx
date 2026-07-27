import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";
import Paragraph from "./Paragraph";

export default function CareersSection() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-[#0b0b12] text-white py-20 px-[4%] z-20 min-h-[70vh] flex flex-col justify-center overflow-hidden">

      {/* Header */}
      <SectionHeading titlePart1="" titlePart2={t("careers_section.header")} />

      <div className="w-full max-w-7xl mx-auto mt-8 relative z-10">
        <div className="rounded-3xl p-0 md:p-8 overflow-hidden relative">

          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 relative z-10">

            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6"
              >
                {t("careers_section.title")}
              </motion.h3>
              <Paragraph
                text={t("careers_section.desc")}
                className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
                delay={0.2}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {/* We use a Link if the route exists, but for now a button is fine */}
                <Link to="/careers/jobs" className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                  {t("careers_section.button")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </div>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/5 aspect-[4/3] sm:aspect-video lg:aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
