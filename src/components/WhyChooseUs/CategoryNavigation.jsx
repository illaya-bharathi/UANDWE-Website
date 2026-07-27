import React from 'react';
import { motion } from 'framer-motion';

const CategoryNavigation = React.memo(({ categories, activeIndex }) => {
  return (
    <div 
      className="flex items-center gap-6 sm:gap-8 md:gap-12 mb-10 md:mb-14 border-b border-white/[0.06] overflow-x-auto [&::-webkit-scrollbar]:hidden"
      style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
    >
      {categories.map((category, idx) => {
        const isActive = idx === activeIndex;

        return (
          <div
            key={category.name}
            className="relative pb-4 flex-shrink-0"
          >
            <span
              className={`block transition-all duration-500 ease-out whitespace-nowrap cursor-default select-none ${
                isActive
                  ? 'text-white text-lg sm:text-xl md:text-2xl font-bold'
                  : 'text-white/30 text-base sm:text-lg md:text-xl font-semibold hover:text-white/50'
              }`}
            >
              {category.name}
            </span>

            {/* Active underline — layoutId morphs smoothly between tabs */}
            {isActive && (
              <motion.div
                layoutId="whyChooseUsUnderline"
                className="absolute -bottom-[1px] left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#ff6b1a] to-orange-400"
                style={{ originY: '0px' }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
});

CategoryNavigation.displayName = 'CategoryNavigation';
export default CategoryNavigation;
