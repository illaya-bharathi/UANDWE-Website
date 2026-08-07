import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

import america from "../assets/images/america.png";
import aiimage from "../assets/images/aiimage.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NEWS_ARTICLES } from "../data/newsData";

export default function NewsInsights() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="relative z-10 bg-[#0b0b12] text-white px-4 sm:px-6 md:px-[5%] pt-8 pb-8 sm:pt-8 sm:pb-8 overflow-hidden">
      <SectionHeading
        titlePart1={t("news_insights.heading.part1")}
        titlePart2={t("news_insights.heading.part2")}
        className="w-full mx-auto !mb-12"
      />

      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {NEWS_ARTICLES.map((article, index) => {
          const category = t(`news_insights.articles.${article.id}.category`, { defaultValue: article.category });
          const desc = t(`news_insights.articles.${article.id}.desc`, { defaultValue: article.desc });
          
          return (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            onClick={() => navigate(article.link)}
            className="group relative flex flex-col h-[400px] sm:h-[450px] lg:h-[500px] bg-[#141414] border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/15 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(255,115,0,0.1)] cursor-pointer"
          >
            {/* Full-bleed Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              style={{ backgroundImage: `url(${article.image})` }}
            />

            {/* Dark Gradient Overlay - TCS Style */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content Container (Pinned to Bottom) */}
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
              <div className="w-full">

                {/* Big Heading - Category (e.g., Company News) */}
                <h3 className="text-lg md:text-2xl lg:text-3xl font-normal tracking-tight leading-tight text-white transition-colors duration-300">
                  {category}
                </h3>

                {/* Content sliding up on hover */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                  <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col">
                    <p className="text-gray-300 text-xs sm:text-sm line-clamp-3 mb-4 mt-4">
                      {desc}
                    </p>

                    <div className="inline-flex items-center text-orange-400 text-xs sm:text-sm font-normal tracking-wider uppercase pb-2">
                      <span>{t("news_insights.read_more")}</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )})}
      </div>
    </section>
  );
}
