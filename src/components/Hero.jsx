import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import videoBg from "../assets/images/uaw.mp4";
import Paragraph, { AnimatedText } from "./Paragraph";

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

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-extrabold leading-tight tracking-tight mb-4 sm:mb-6 text-white max-w-full"
        >
          <span className="block whitespace-nowrap text-[clamp(20px,7vw,36px)] sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl min-[1920px]:text-[96px] min-[2560px]:text-[120px]">
            <AnimatedText key={t("hero.title_1")} text={t("hero.title_1")} />
          </span>
          <span className="block text-[clamp(16px,5.5vw,24px)] sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl min-[1920px]:text-[64px] min-[2560px]:text-[80px] text-orange-500 mt-1 md:mt-2">
            <AnimatedText key={t("hero.title_2")} text={t("hero.title_2")} />
          </span>
        </motion.h1>

        <Paragraph
          text={t("hero.description")}
          hasAnimated={hasAnimated}
        />
      </div>
    </section>
  );
}