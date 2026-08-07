import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading';
import Paragraph from '../../components/Paragraph';

import { INSIGHTS } from '../../data/employeeInsightData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function EmployeeInsights() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="bg-[#0b0b12] min-h-screen text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#ff6b1a]/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-fuchsia-600/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full px-[4%] pt-[120px] pb-24">

        {/* PAGE HEADING */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-20 sm:mb-24"
        >
          <motion.div variants={itemVariants}>
            <SectionHeading
              titlePart1={t("insights.employeeInsights.titlePart1", "Engineering")}
              titlePart2={t("insights.employeeInsights.titlePart2", "Insights")}
              className="!mb-6 uppercase"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Paragraph
              text={t("insights.employeeInsights.description", "Explore expert perspectives, engineering best practices, emerging technologies, and innovation stories from our teams.")}
              animated={false}
            />
          </motion.div>
        </motion.div>

        {/* INSIGHTS LIST */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col gap-6 sm:gap-8"
        >
          {INSIGHTS.map((insight) => {
            const title = t(`insights_content.employeeInsightData.${insight.id}.title`, insight.title);
            const category = t(`insights_content.employeeInsightData.${insight.id}.category`, insight.category);
            const readTime = t(`insights_content.employeeInsightData.${insight.id}.readTime`, insight.readTime);
            const overview = t(`insights_content.employeeInsightData.${insight.id}.overview`, insight.overview);
            const author = t(`insights_content.employeeInsightData.${insight.id}.author`, insight.author);
            const role = t(`insights_content.employeeInsightData.${insight.id}.role`, insight.role);

            return (
              <motion.div
                key={insight.id}
                variants={itemVariants}
                onClick={() => {
                  navigate(`/resources/employee-insights/${insight.id}`)
                }}
                className="group cursor-pointer relative rounded-xl sm:rounded-2xl overflow-hidden
                           border border-white/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))]
                           shadow-[inset_0_1px_1px_rgba(255,255,255,0.07),0_12px_32px_rgba(0,0,0,0.5)]
                           hover:border-[#ff6b1a]/40
                           hover:shadow-[0_0_40px_rgba(255,107,26,0.1)]
                           transition-all duration-500
                           flex flex-col lg:flex-row"
              >
                {/* Image */}
                <div className="w-full lg:w-[40%] h-[200px] sm:h-[240px] lg:h-auto relative overflow-hidden flex-shrink-0">
                  <img
                    src={insight.image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white/90 text-[10px] sm:text-xs font-semibold uppercase tracking-wider rounded-md border border-white/10 z-20">
                    {category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0b0b12]/60 hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b12]/60 to-transparent lg:hidden" />
                </div>

                {/* Content */}
                <div className="flex-1 p-5 sm:p-7 md:p-8 lg:p-10 flex flex-col justify-center">
                  {/* Category & Read Time */}
                  <div className="flex flex-wrap items-center gap-4 text-fuchsia-400 text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><Tag size={14} /> {category}</span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="flex items-center gap-1.5 text-white/50"><Clock size={14} /> {readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-normal leading-tight tracking-tight text-white mb-4 sm:mb-5 group-hover:text-[#ff6b1a] transition-colors duration-300">
                    {title}
                  </h3>

                  {/* Excerpt */}
                  <Paragraph
                    text={overview}
                    animated={false}
                    className="!max-w-none mb-5 sm:mb-6 line-clamp-3"
                  />

                  {/* Author + Read */}
                  <div className="flex items-center justify-between mt-auto pt-5 sm:pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff6b1a] to-orange-400 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                        {author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <span className="text-white/80 text-[10px] sm:text-[11px] md:text-xs font-normal block leading-tight">{author}</span>
                        <span className="text-white/40 text-[9px] sm:text-[10px] md:text-[11px] block leading-tight">{role}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-white/40 text-[10px] sm:text-xs font-semibold tracking-wider uppercase group-hover:text-[#ff6b1a] transition-colors duration-300">
                      <span className="hidden sm:inline">{t("insights.employeeInsights.readStory", "Read Story")}</span>
                      <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff6b1a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
}
