import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading';
import { WHITEPAPERS } from '../../data/whitepaperData';

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

// Body text style — same as aboutus/careers pages
const bodyText = "text-[11px] sm:text-xs md:text-[13px] lg:text-sm xl:text-[15px] 2xl:text-base min-[1920px]:text-[17px] min-[2560px]:text-lg text-white/60 leading-relaxed";

export default function WhitepaperDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const rawWp = WHITEPAPERS.find(w => w.id === id);

  if (!rawWp) {
    return (
      <div className="bg-[#0b0b12] min-h-screen text-white flex items-center justify-center px-[4%]">
        <div className="text-center">
          <h1 className="text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-white mb-4">Whitepaper not found</h1>
          <button
            onClick={() => navigate('/resources/whitepapers')}
            className="text-orange-400 text-lg underline underline-offset-4 hover:text-orange-300 transition-colors"
          >
            ← {t("insights_content.details.backToWhitepapers", "Back to Whitepapers")}
          </button>
        </div>
      </div>
    );
  }

  const keyBenefitsList = t(`insights_content.whitepaperData.${rawWp.id}.keyBenefits`, { returnObjects: true, defaultValue: rawWp.keyBenefits });

  const wp = {
    ...rawWp,
    title: t(`insights_content.whitepaperData.${rawWp.id}.title`, rawWp.title),
    author: t(`insights_content.whitepaperData.${rawWp.id}.author`, rawWp.author),
    role: t(`insights_content.whitepaperData.${rawWp.id}.role`, rawWp.role),
    overview: t(`insights_content.whitepaperData.${rawWp.id}.overview`, rawWp.overview),
    keyBenefits: Array.isArray(keyBenefitsList) ? keyBenefitsList : rawWp.keyBenefits,
    businessImpact: t(`insights_content.whitepaperData.${rawWp.id}.businessImpact`, rawWp.businessImpact),
    conclusion: t(`insights_content.whitepaperData.${rawWp.id}.conclusion`, rawWp.conclusion)
  };

  return (
    <div className="bg-[#0b0b12] min-h-screen text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#ff6b1a]/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      {/* HERO BANNER */}
      <section className="relative w-full min-h-[50vh] sm:min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={wp.image}
            alt={wp.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b12] via-[#0b0b12]/70 to-transparent" />
          <div className="absolute inset-0 bg-[#0b0b12]/30" />
        </div>
        <div className="relative z-10 w-full px-[4%] pb-12 sm:pb-16 pt-32">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/resources/whitepapers')}
            className="flex items-center gap-2 text-white/40 text-sm font-semibold tracking-wider uppercase mb-6 sm:mb-8 hover:text-orange-400 transition-colors duration-300 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            {t("insights_content.details.backToWhitepapers", "Back to Whitepapers")}
          </motion.button>

          <SectionHeading
            titlePart1={wp.title}
            titlePart2=""
            className="!mb-5"
            titleClassName="text-sm md:text-lg lg:text-xl font-normal leading-tight"
          />
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff6b1a] to-orange-400 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
              {wp.author.split(' ').map(n => n[0]).join('')}
            </div>
            <p className={`${bodyText}`}>
              {wp.author}  •  {wp.role}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-[4%] py-16 sm:py-20 md:py-28 flex flex-col gap-20 sm:gap-24 md:gap-28 max-w-[1400px] mx-auto">

        {/* OVERVIEW */}
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
            {wp.overview}
          </motion.p>
        </motion.section>

        {/* KEY BENEFITS */}
        {wp.keyBenefits && wp.keyBenefits.length > 0 && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <SectionHeading titlePart1={t("insights_content.details.keyBenefitsPart1", "Key")} titlePart2={t("insights_content.details.keyBenefitsPart2", "Benefits")} className="!mb-8" />
            </motion.div>
            <div className="flex flex-col gap-4 sm:gap-5">
              {wp.keyBenefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#ff6b1a]/10 flex items-center justify-center mt-1">
                    <CheckCircle size={14} className="text-[#ff6b1a]" />
                  </div>
                  <p className={bodyText}>
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* BUSINESS IMPACT */}
        {wp.businessImpact && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <SectionHeading titlePart1={t("insights_content.details.businessImpactPart1", "Business")} titlePart2={t("insights_content.details.businessImpactPart2", "Impact")} className="!mb-5" />
            </motion.div>
            <motion.p variants={itemVariants} className={bodyText}>
              {wp.businessImpact}
            </motion.p>
          </motion.section>
        )}

        {/* CONCLUSION */}
        {wp.conclusion && (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <SectionHeading titlePart1={t("insights_content.details.conclusion", "Conclusion")} titlePart2="" className="!mb-5" />
            </motion.div>
            <motion.p variants={itemVariants} className={bodyText}>
              {wp.conclusion}
            </motion.p>
          </motion.section>
        )}

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
              {wp.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-normal text-white mb-0.5 tracking-tight">{wp.author}</h3>
              <p className="text-lg md:text-xl text-white/40 leading-relaxed">{wp.role}</p>
            </div>
          </motion.div>
        </motion.section>

      </div>
    </div>
  );
}
