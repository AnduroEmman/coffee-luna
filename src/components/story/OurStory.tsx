import React from 'react';
import { motion } from 'framer-motion';
import { CoffeeExtractionSimulator } from '../motion/CoffeeExtractionSimulator';
import { useTheme } from '../../context/ThemeContext';

export const OurStory: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="craft"
      className={`relative py-28 sm:py-36 px-5 sm:px-8 z-10 border-t transition-colors ${
        isDark ? 'border-white/5' : 'border-black/5'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span
            className={`text-xs font-mono uppercase tracking-[0.25em] font-bold mb-3 ${
              isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
            }`}
          >
            SPECIALTY EXTRACTION SCIENCE
          </span>
          <h2
            className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight transition-colors ${
              isDark ? 'text-[#FAF7F2]' : 'text-[#1C1510]'
            }`}
          >
            The Physics in Every Cup.
          </h2>
          <p
            className={`mt-4 text-base max-w-xl leading-relaxed transition-colors ${
              isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
            }`}
          >
            Temperature stability, saturated 9-bar pressure curves, and micro-particle grinding dialed in daily to showcase the origin's natural sugars.
          </p>
        </div>

        {/* Interactive Kinetic Brew & Extraction Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <CoffeeExtractionSimulator />
        </motion.div>

        {/* 3 Quiet Craft Commitments */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t text-left transition-colors ${
            isDark ? 'border-white/10' : 'border-black/10'
          }`}
        >
          <div>
            <div
              className={`text-xs font-mono uppercase tracking-wider mb-1 font-semibold ${
                isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
              }`}
            >
              01 · HIGH ALTITUDE SOURCING
            </div>
            <h4
              className={`font-serif text-xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-[#1C1510]'
              }`}
            >
              1,850+ MASL Density
            </h4>
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
              }`}
            >
              Cool highland temperatures slow bean development, concentrating complex floral acids and deep fructose sugars in each harvest.
            </p>
          </div>

          <div>
            <div
              className={`text-xs font-mono uppercase tracking-wider mb-1 font-semibold ${
                isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
              }`}
            >
              02 · SMALL-BATCH ROAST PROFILES
            </div>
            <h4
              className={`font-serif text-xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-[#1C1510]'
              }`}
            >
              Roasted Every 48 Hours
            </h4>
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
              }`}
            >
              We never stockpile warehouse inventory. What you drink at The Triangle or order via Foodpanda was roasted this week.
            </p>
          </div>

          <div>
            <div
              className={`text-xs font-mono uppercase tracking-wider mb-1 font-semibold ${
                isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
              }`}
            >
              03 · BARISTA-GRADE OATSIDE
            </div>
            <h4
              className={`font-serif text-xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-[#1C1510]'
              }`}
            >
              Certified Plant Milk Bar
            </h4>
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
              }`}
            >
              Roasted Australian oats steamed into velvet microfoam that complements our dark espresso roast with zero dairy separation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
