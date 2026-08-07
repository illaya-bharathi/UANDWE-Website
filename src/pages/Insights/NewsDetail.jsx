import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { NEWS_ARTICLES } from '../../data/newsData';

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = NEWS_ARTICLES.find(a => a.id === id);

  if (!article) {
    return (
      <div className="bg-[#0b0b12] min-h-screen text-white flex items-center justify-center px-[4%]">
        <div className="text-center">
          <h1 className="text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-white mb-4">Article not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-[#ff6b1a] text-lg underline underline-offset-4 hover:text-orange-300 transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0b0b12] min-h-screen text-white pt-32 pb-24">
      
      {/* Back button */}
      <div className="absolute top-28 left-6 sm:left-12 z-20">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center text-white/70 hover:text-[#ff6b1a] transition-all duration-300 bg-white/5 p-3 rounded-full backdrop-blur-md border border-white/10 hover:border-[#ff6b1a]/50 hover:bg-[#ff6b1a]/10 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="w-full max-w-[90%] md:max-w-5xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24">
        {/* 1. HERO SECTION (Text Only) */}
        <section className="mb-12 sm:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white tracking-tight mb-8 leading-[1.1]"
          >
            {article.category.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-[#ff6b1a]">{article.category.split(' ').slice(-1)}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-light text-white/80 leading-relaxed max-w-4xl border-l-2 border-white/20 pl-6"
          >
            {article.title}
          </motion.p>
        </section>

        {/* 2. ARTICLE CONTENT SECTION */}
        <section className="relative z-10 w-full max-w-3xl mt-16 sm:mt-24 pt-12 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-white/70 text-base sm:text-[17px] md:text-lg leading-[2.2] space-y-8 font-sans font-light">
              <p className="text-white text-xl md:text-[22px] font-normal leading-relaxed mb-12 italic text-white/90">
                {article.desc}
              </p>
              
              {article.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "first-letter:text-6xl first-letter:font-bold first-letter:text-[#ff6b1a] first-letter:mr-3 first-letter:float-left first-letter:mt-2" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </section>
      </div>

    </div>
  );
}
