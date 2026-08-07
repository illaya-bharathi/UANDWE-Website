import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading';
import { CASE_STUDIES } from '../../data/caseStudyData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const bodyText = "text-[11px] sm:text-xs md:text-[13px] lg:text-sm xl:text-[15px] 2xl:text-base min-[1920px]:text-[17px] min-[2560px]:text-lg text-white/60 leading-relaxed";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const rawStudy = CASE_STUDIES.find(s => s.id === id);

  if (!rawStudy) {
    return (
      <div className="bg-[#0b0b12] min-h-screen text-white flex items-center justify-center px-[4%]">
        <div className="text-center">
          <h1 className="text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-white mb-4">Case Study not found</h1>
          <button
            onClick={() => navigate('/resources/casestudies')}
            className="text-[#ff6b1a] text-lg underline underline-offset-4 hover:text-orange-300 transition-colors"
          >
            ← {t("insights_content.details.backToCaseStudies", "Back to Case Studies")}
          </button>
        </div>
      </div>
    );
  }

  const study = {
    ...rawStudy,
    title: t(`insights_content.caseStudyData.${rawStudy.id}.title`, rawStudy.title),
    client: t(`insights_content.caseStudyData.${rawStudy.id}.client`, rawStudy.client),
    category: t(`insights_content.caseStudyData.${rawStudy.id}.category`, rawStudy.category),
    impact: t(`insights_content.caseStudyData.${rawStudy.id}.impact`, rawStudy.impact),
    overview: t(`insights_content.caseStudyData.${rawStudy.id}.overview`, rawStudy.overview),
    author: t(`insights_content.caseStudyData.${rawStudy.id}.author`, rawStudy.author),
    role: t(`insights_content.caseStudyData.${rawStudy.id}.role`, rawStudy.role),
    content: t(`insights_content.caseStudyData.${rawStudy.id}.content`, rawStudy.content)
  };

  return (
    <div className="bg-[#0b0b12] min-h-screen text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#ff6b1a]/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-emerald-500/5 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      {/* HERO BANNER */}
      <section className="relative w-full min-h-[50vh] sm:min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b12] via-[#0b0b12]/70 to-transparent" />
          <div className="absolute inset-0 bg-[#0b0b12]/30" />
        </div>
        <div className="relative z-10 w-full px-[4%] pb-12 sm:pb-16 pt-32">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/resources/casestudies')}
            className="flex items-center gap-2 text-white/40 text-sm font-semibold tracking-wider uppercase mb-6 sm:mb-8 hover:text-[#ff6b1a] transition-colors duration-300 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            {t("insights_content.details.backToCaseStudies", "Back to Case Studies")}
          </motion.button>

          <SectionHeading
            titlePart1={study.title}
            titlePart2=""
            className="!mb-5"
            titleClassName="text-sm md:text-lg lg:text-xl font-normal leading-tight"
          />
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff6b1a] to-orange-400 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
              {study.author.split(' ').map(n => n[0]).join('')}
            </div>
            <p className={`${bodyText}`}>
              {study.author}  •  {study.role}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-[4%] py-16 sm:py-20 md:py-28 flex flex-col gap-20 sm:gap-24 md:gap-28 max-w-[1400px] mx-auto">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionHeading titlePart1={t("insights_content.details.overview", "Overview")} titlePart2="" className="!mb-5" />
          </motion.div>
          <motion.p variants={itemVariants} className={bodyText}>
            {study.content || study.overview}
          </motion.p>
        </motion.section>

        {/* AUTHOR */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionHeading titlePart1={t("insights_content.details.author", "Author")} titlePart2="" className="!mb-6" />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 sm:gap-5 p-5 sm:p-6 md:p-7
                       rounded-xl sm:rounded-2xl
                       border border-white/8 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))]
                       shadow-[inset_0_1px_1px_rgba(255,255,255,0.07),0_12px_32px_rgba(0,0,0,0.5)]"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#ff6b1a] to-orange-400 flex items-center justify-center text-white text-sm sm:text-base font-bold flex-shrink-0">
              {study.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-normal text-white mb-0.5 tracking-tight">{study.author}</h3>
              <p className="text-lg md:text-xl text-white/40 leading-relaxed">{study.role}</p>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
