import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import videoBg from "../assets/images/uaw.mp4";
import SectionHeading from "./SectionHeading";

export default function Hero({ title, description, badge }) {
  const { t } = useTranslation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0b0b12]">

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>

      {/* IMAGE TRAIL ANIMATION (OVERLAY) */}
      <div className="absolute inset-0 z-[5]">

      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-[4%]">

        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 py-1 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-500 text-[10px] sm:text-xs tracking-widest uppercase font-semibold"
          >
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            {badge}
          </motion.div>
        )}

        <SectionHeading
          titlePart1={t("hero.title_1")}
          titlePart2={t("hero.title_2")}
          breakLine={false}
          className="!mb-4 sm:!mb-6 [&_h2]:!font-extrabold [&_h2]:!leading-tight [&_h2]:!tracking-tight [&_span.text-white]:block [&_span.text-white]:whitespace-nowrap [&_span.text-white]:!text-[clamp(20px,6vw,32px)] [&_span.text-white]:sm:!text-4xl [&_span.text-white]:md:!text-4xl [&_span.text-white]:lg:!text-5xl [&_span.text-white]:xl:!text-5xl [&_span.text-white]:2xl:!text-6xl [&_span.text-white]:min-[1920px]:!text-[80px] [&_span.text-white]:min-[2560px]:!text-[100px] [&_span.text-orange-500]:block [&_span.text-orange-500]:!text-[clamp(20px,6vw,32px)] [&_span.text-orange-500]:sm:!text-4xl [&_span.text-orange-500]:md:!text-4xl [&_span.text-orange-500]:lg:!text-5xl [&_span.text-orange-500]:xl:!text-5xl [&_span.text-orange-500]:2xl:!text-6xl [&_span.text-orange-500]:min-[1920px]:!text-[80px] [&_span.text-orange-500]:min-[2560px]:!text-[100px] [&_span.text-orange-500]:!mt-1 [&_span.text-orange-500]:md:!mt-2"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/80 text-[11px] sm:text-xs md:text-[13px] lg:text-sm xl:text-[15px] 2xl:text-base min-[1920px]:text-[17px] min-[2560px]:text-lg max-w-full sm:max-w-[600px] xl:max-w-[800px] 2xl:max-w-[1000px] leading-relaxed"
        >
          {t("hero.description")}
        </motion.p>
      </div>
    </section>
  );
}