import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ServiceCard = React.memo(({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <Link
        to={service.path}
        className="group relative block rounded-2xl p-4 md:p-6 h-full flex flex-col
          bg-white/[0.03] backdrop-blur-sm
          border border-white/[0.08]
          hover:border-[#ff6b1a]/40
          hover:bg-white/[0.06]
          hover:shadow-[0_8px_40px_rgba(255,107,26,0.12)]
          hover:-translate-y-1.5
          transition-all duration-500 ease-out overflow-hidden"
      >
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff6b1a]/0 to-[#ff6b1a]/0 group-hover:from-[#ff6b1a]/[0.04] group-hover:to-transparent transition-all duration-500 pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full justify-between min-h-0">
          <div className="flex flex-col flex-grow min-h-0">
            {/* Service Name */}
            <h4 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-[#ff6b1a] transition-colors duration-300 leading-tight flex-none">
              {service.name}
            </h4>

            {/* Description */}
            <p className="text-white/45 text-xs md:text-sm lg:text-[15px] leading-relaxed mb-4 line-clamp-3 md:line-clamp-4 overflow-hidden">
              {service.description}
            </p>
          </div>

          {/* Arrow indicator */}
          <div className="flex items-center justify-end mt-auto">
            <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center
              group-hover:border-[#ff6b1a]/50 group-hover:bg-[#ff6b1a]/10
              transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#ff6b1a] transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';
export default ServiceCard;
