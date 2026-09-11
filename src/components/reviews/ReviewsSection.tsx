import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { REVIEWS } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';

export const ReviewsSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="reviews"
      className={`relative py-28 px-5 sm:px-8 z-10 border-t border-b transition-colors ${
        isDark
          ? 'border-white/5 bg-black/20'
          : 'border-black/5 bg-[#F5EFE6]/50'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span
            className={`text-xs font-mono uppercase tracking-[0.25em] font-bold mb-3 block ${
              isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
            }`}
          >
            VERIFIED GUEST VOICES
          </span>
          <h2
            className={`font-serif text-3xl sm:text-5xl font-bold tracking-tight transition-colors ${
              isDark ? 'text-[#FAF7F2]' : 'text-[#1C1510]'
            }`}
          >
            Loved Across Roxas City
          </h2>
          <p
            className={`mt-3 text-sm transition-colors ${
              isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
            }`}
          >
            Real feedback from verified Foodpanda orders at The Triangle, Capiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`p-6 rounded-3xl border flex flex-col justify-between transition-colors ${
                isDark
                  ? 'bg-white/[0.02] border-white/10 hover:border-[#C89D66]/30'
                  : 'bg-white border-black/10 hover:border-[#8A5A2B]/30 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                {/* 5 Stars */}
                <div
                  className={`flex gap-1 mb-3 ${
                    isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
                  }`}
                >
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p
                  className={`text-sm italic leading-relaxed ${
                    isDark ? 'text-[#FAF7F2]' : 'text-[#1C1510]'
                  }`}
                >
                  "{rev.text}"
                </p>
              </div>

              <div
                className={`mt-6 pt-3 border-t flex items-center justify-between text-xs font-mono transition-colors ${
                  isDark ? 'border-white/5 text-[#A89F95]' : 'border-black/5 text-[#6B5E52]'
                }`}
              >
                <span className={`font-bold ${isDark ? 'text-white' : 'text-[#1C1510]'}`}>
                  {rev.author}
                </span>
                <span className="text-emerald-500 font-semibold">Verified Order</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
