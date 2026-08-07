import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";
import nvidiaLogo from "../assets/images/nvidialogo.png";
import microchipLogo from "../assets/images/microchiplogo.png";
import semiorgLogo from "../assets/images/semiorglogo.png";
import renesasLogo from "../assets/images/renesaslogo.png";



export default function Partners() {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px 0px -100px 0px"
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#0b0b12] text-white px-4 sm:px-6 md:px-[5%] pt-8 pb-8 sm:pt-8 sm:pb-8 overflow-hidden"
    >
      {/* HEADER */}
      <SectionHeading
        titlePart2={t("whyus.heading_1")}
        className="w-full mx-auto !mb-8"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full mx-auto space-y-8"
      >
        {/* Customer & Go-To-Market Partners */}
        <motion.div variants={cardVariants}>
          <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-white/90 mb-8 border-l-4 border-orange-500 pl-4 ml-4 sm:ml-0 overflow-hidden flex flex-wrap">
            {t("whyus.categories.customer_gtm")}
          </h3>
          <div className="flex flex-col md:flex-row w-full gap-4 lg:gap-6 px-4 sm:px-0">

            {/* NVIDIA */}
            <div
              className="group relative flex-1 w-full rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-orange-500/30 p-4 sm:p-6 flex items-center justify-center overflow-hidden transition-all duration-300"
              style={{ boxShadow: "inset 0px 1px 1px rgba(255, 255, 255, 0.05)" }}
            >
              {/* Radial Core Background */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,115,0,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150 group-hover:scale-100" />

              {/* Dot Grid Texture Masked */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />


              {/* Logo Image + Typography */}
              <div className="relative z-10 flex items-center justify-center gap-3 md:gap-4 transition-all duration-500 group-hover:scale-105">
                <img
                  src={nvidiaLogo}
                  alt="NVIDIA logo"
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain group-hover:drop-shadow-[0_0_8px_rgba(255,115,0,0.4)]"
                />
                <h4 className="text-lg md:text-xl lg:text-xl xl:text-2xl font-bold tracking-widest transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 group-hover:from-orange-400 group-hover:to-orange-600 group-hover:drop-shadow-[0_0_8px_rgba(255,115,0,0.2)]">
                  {t("whyus.partners.nvidia")}
                </h4>
              </div>
            </div>

            {/* RENESAS */}
            <div
              className="group relative flex-1 w-full rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-orange-500/30 p-4 sm:p-6 flex items-center justify-center overflow-hidden transition-all duration-300"
              style={{ boxShadow: "inset 0px 1px 1px rgba(255, 255, 255, 0.05)" }}
            >
              {/* Radial Core Background */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,115,0,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150 group-hover:scale-100" />

              {/* Dot Grid Texture Masked */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />


              {/* Logo Image + Typography */}
              <div className="relative z-10 flex items-center justify-center gap-3 md:gap-4 transition-all duration-500 group-hover:scale-105">
                <img
                  src={renesasLogo}
                  alt="Renesas logo"
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain group-hover:drop-shadow-[0_0_8px_rgba(255,115,0,0.4)]"
                />
                <h4 className="text-lg md:text-xl lg:text-xl xl:text-2xl font-bold tracking-wider transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 group-hover:from-orange-400 group-hover:to-orange-600 group-hover:drop-shadow-[0_0_8px_rgba(255,115,0,0.2)]">
                  {t("whyus.partners.renesas")}
                </h4>
              </div>
            </div>

            {/* MICROCHIP */}
            <div
              className="group relative flex-1 w-full rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-orange-500/30 p-4 sm:p-6 flex items-center justify-center overflow-hidden transition-all duration-300"
              style={{ boxShadow: "inset 0px 1px 1px rgba(255, 255, 255, 0.05)" }}
            >
              {/* Radial Core Background */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,115,0,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150 group-hover:scale-100" />

              {/* Dot Grid Texture Masked */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />


              {/* Logo Image + Typography */}
              <div className="relative z-10 flex items-center justify-center gap-3 md:gap-4 transition-all duration-500 group-hover:scale-105">
                <img
                  src={microchipLogo}
                  alt="Microchip logo"
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain group-hover:drop-shadow-[0_0_8px_rgba(255,115,0,0.4)]"
                />
                <h4 className="text-lg md:text-xl lg:text-xl xl:text-2xl font-bold tracking-tight transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 group-hover:from-orange-400 group-hover:to-orange-600 group-hover:drop-shadow-[0_0_8px_rgba(255,115,0,0.2)]">
                  {t("whyus.partners.microchip")}
                </h4>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Industry Partnerships */}
        <motion.div variants={cardVariants}>
          <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-white/90 mb-8 border-l-4 border-orange-500 pl-4 ml-4 sm:ml-0 overflow-hidden flex flex-wrap">
            {t("whyus.categories.industry")}
          </h3>
          <div className="flex justify-start px-4 sm:px-0 w-full">

            {/* SEMI.org */}
            <div
              className="group relative w-full md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1rem)] rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-orange-500/30 p-4 sm:p-6 flex items-center justify-center overflow-hidden transition-all duration-300"
              style={{ boxShadow: "inset 0px 1px 1px rgba(255, 255, 255, 0.05)" }}
            >
              {/* Radial Core Background */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,115,0,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150 group-hover:scale-100" />

              {/* Dot Grid Texture Masked */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />


              {/* Logo Image + Typography */}
              <div className="relative z-10 flex items-center justify-center gap-3 md:gap-4 transition-all duration-500 group-hover:scale-105">
                <img
                  src={semiorgLogo}
                  alt="SEMI.org logo"
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain group-hover:drop-shadow-[0_0_8px_rgba(255,115,0,0.4)]"
                />
                <h4 className="text-lg md:text-xl lg:text-xl xl:text-2xl font-bold tracking-widest transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 group-hover:from-orange-400 group-hover:to-orange-600 group-hover:drop-shadow-[0_0_8px_rgba(255,115,0,0.2)]">
                  {t("whyus.partners.semi")}
                </h4>
              </div>
            </div>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}