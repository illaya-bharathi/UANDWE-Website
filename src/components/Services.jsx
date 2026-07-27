import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Paragraph from "./Paragraph";

import softwareservice from "../assets/images/softwareservice.jpg";
import embeddedsw from "../assets/images/embeddedsw.png";
import hardware from "../assets/images/hardware.jpg";

export default function Services() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.history.replaceState(null, '', '/#services');
        } else {
          if (window.location.hash === '#services') {
            window.history.replaceState(null, '', window.location.pathname);
          }
        }
      },
      { threshold: 0.5 }
    );

    const el = document.getElementById("services");
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const SERVICE_CATEGORIES = [
    {
      id: "ai-data",
      title: t("services.categories.application.title") || "Software Services",
      desc: t("services.categories.application.desc"),
      image: softwareservice,
      services: [
        { name: t("services.categories.application.services.s1.name"), path: "/services/application-development" },
        { name: t("services.categories.application.services.s3.name"), path: "/services/ai-data" },
      ]
    },
    {
      id: "embedded-sw",
      title: t("services.categories.embedded_sw.title"),
      desc: t("services.categories.embedded_sw.desc"),
      image: embeddedsw,
      services: [
        { name: t("services.categories.embedded_sw.services.s1.name"), path: "/services/embedded/drivers" },
        { name: t("services.categories.embedded_sw.services.s2.name"), path: "/services/embedded/firmware" },
        { name: t("services.categories.embedded_sw.services.s3.name"), path: "/services/embedded/rtos" },
        { name: t("services.categories.embedded_sw.services.s4.name"), path: "/services/embedded/linux" },
        { name: t("services.categories.embedded_sw.services.s5.name"), path: "/services/embedded/bsp" },
        { name: t("services.categories.embedded_sw.services.s6.name"), path: "/services/embedded/protocol" },
      ]
    },
    {
      id: "hardware-design",
      title: t("services.categories.hardware_design.title"),
      desc: t("services.categories.hardware_design.desc"),
      image: hardware,
      services: [
        { name: t("services.categories.hardware_design.services.s1.name"), path: "/services/hardware/pcb" },
        { name: t("services.categories.hardware_design.services.s2.name"), path: "/services/hardware/fpga" },
        { name: t("services.categories.hardware_design.services.s3.name"), path: "/services/hardware/asic" },
        { name: t("services.categories.hardware_design.services.s4.name"), path: "/services/hardware/circuit" },
        { name: t("services.categories.hardware_design.services.s5.name"), path: "/services/hardware/prototyping" },
        { name: t("services.categories.hardware_design.services.s6.name"), path: "/services/hardware/validation" },
      ]
    }
  ];

  return (
    <section id="services" className="relative w-full bg-[#0b0b12] text-white py-12 sm:py-20 px-[4%] z-20 min-h-[100dvh] flex flex-col justify-center overflow-hidden">

      {/* Header */}
      <SectionHeading
        titlePart1={t("services.core_part1")}
        titlePart2={t("services.core_part2")}
      />

      {/* Grid of 3 Boxes with Inline Overlay */}
      <div className="w-full max-w-[1536px] mx-auto mt-8 sm:mt-12 relative z-10 flex-grow flex flex-col justify-center">

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SERVICE_CATEGORIES.map((category) => (
            <motion.div
              key={category.id}
              onClick={() => setSelectedCategory(category)}
              className="flex flex-col bg-[#0b0b0f] cursor-pointer group shadow-2xl h-[60vh] min-h-[450px] max-h-[700px] overflow-hidden rounded-3xl border border-white/5 relative transition-all duration-300 hover:border-white/20"
            >
              {/* Full Height Image Background (Fades out & zooms in on hover) */}
              <div className="absolute inset-0 z-0 transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-0">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center opacity-60"
                />
                {/* Gradient to ensure the top text is always readable over the image */}
                <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0b0b0f] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0b0b0f] to-transparent" />
              </div>

              {/* Header section (Always visible) */}
              <div className="p-8 sm:p-10 pb-4 z-20 pointer-events-none mt-auto sm:mt-0 transition-transform duration-500 ease-out group-hover:-translate-y-2">

                <h3 className="text-3xl sm:text-4xl font-semibold text-white leading-snug tracking-tight drop-shadow-lg">
                  {category.title}
                </h3>
              </div>

              {/* Bottom section wrapper - For Hover Text */}
              <div className="relative flex-1 w-full z-20 pointer-events-none">
                {/* Hover State: Text and Button */}
                <div className="absolute inset-0 p-8 sm:p-10 pt-4 flex flex-col justify-start opacity-0 translate-x-12 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                  <Paragraph
                    text={category.desc}
                    className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-none"
                    delay={0.1}
                  />

                  <div className="flex justify-end mt-auto pt-8">
                    <span className="flex items-center text-white font-bold text-xl group-hover:underline underline-offset-4 pointer-events-auto cursor-pointer">
                      Explore <span className="ml-2 text-2xl leading-none">›</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay covering exactly the grid container */}
        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute inset-0 z-50 flex flex-col justify-center items-center p-8 sm:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.6)] rounded-3xl overflow-hidden border border-orange-500/20 bg-gradient-to-br from-orange-500 from-0% via-[#1f2029]/80 via-66% to-[#1f2029]/80 backdrop-blur-2xl"
            >
              <div className="max-w-6xl mx-auto w-full relative h-full flex flex-col justify-center">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="group absolute -top-4 -right-4 sm:-top-4 sm:-right-4 p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors z-50 bg-black/20"
                >
                  <X className="w-6 h-6 text-white transition-transform duration-500 group-hover:rotate-[360deg]" />
                </button>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-10 sm:mb-16 text-white">
                  {selectedCategory.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-y-10 gap-x-8 sm:gap-x-12">
                  {selectedCategory.services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={() => setSelectedCategory(null)} // close modal on click
                      className="group flex items-center text-lg sm:text-xl md:text-2xl text-gray-200 hover:text-white transition-colors py-1"
                    >
                      <span className="relative">
                        {service.name}
                        <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}