import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Flame, Coffee, Droplet } from 'lucide-react';
import { MENU_ITEMS, FOODPANDA_STORE_URL } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';
import { CoffeeSteam } from '../motion/CoffeeSteam';

// Sensory flavor parameters mapped to authentic coffee tasting notes
const SENSORY_DATA: Record<string, { sweetness: number; acidity: number; body: number; roast: number }> = {
  'spanish-latte': { sweetness: 92, acidity: 18, body: 88, roast: 75 },
  'matcha': { sweetness: 65, acidity: 15, body: 75, roast: 20 },
  'caramel-macc': { sweetness: 88, acidity: 20, body: 80, roast: 70 },
  'iced-cream-latte': { sweetness: 95, acidity: 12, body: 92, roast: 65 },
  'dark-moon': { sweetness: 35, acidity: 25, body: 95, roast: 95 },
  'malaya': { sweetness: 70, acidity: 22, body: 78, roast: 65 },
  'dark-malaya': { sweetness: 40, acidity: 20, body: 92, roast: 90 },
  'americano': { sweetness: 25, acidity: 45, body: 60, roast: 75 },
  'latte': { sweetness: 60, acidity: 25, body: 75, roast: 65 },
  'tadhana': { sweetness: 85, acidity: 20, body: 85, roast: 70 },
  'croffle': { sweetness: 70, acidity: 5, body: 60, roast: 50 },
  'waffles': { sweetness: 75, acidity: 5, body: 65, roast: 45 },
  'cheesecake': { sweetness: 80, acidity: 25, body: 90, roast: 40 },
  'java-chip-frappe': { sweetness: 90, acidity: 10, body: 88, roast: 60 },
  'matcha-frappe': { sweetness: 80, acidity: 10, body: 82, roast: 15 },
  'affogato-frappe': { sweetness: 85, acidity: 20, body: 90, roast: 75 },
  'caramel-macc-frappe': { sweetness: 90, acidity: 12, body: 85, roast: 65 },
  'pink-drink': { sweetness: 85, acidity: 50, body: 45, roast: 5 },
};

export const MenuSection: React.FC = () => {
  const [activeCat, setActiveCat] = useState<'all' | 'signature' | 'espresso' | 'frappe' | 'pastries'>('all');
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'signature', label: 'House Signatures' },
    { id: 'espresso', label: 'Espresso Bar' },
    { id: 'frappe', label: 'Blended Frappes' },
    { id: 'pastries', label: 'Croffles & Bakery' },
  ];

  const filtered = activeCat === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCat);

  return (
    <section id="menu" className="relative py-28 sm:py-36 px-5 sm:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span
            className={`text-xs font-mono uppercase tracking-[0.25em] font-bold mb-3 ${
              isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
            }`}
          >
            ROXAS CITY SPECIALTY MENU
          </span>
          <h2
            className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight transition-colors ${
              isDark ? 'text-[#FAF7F2]' : 'text-[#1C1510]'
            }`}
          >
            Crafted for the Palate.
          </h2>
          <p
            className={`mt-4 text-base max-w-lg leading-relaxed transition-colors ${
              isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
            }`}
          >
            Hover any coffee to reveal its real-time sensory aroma radar. Tap to order directly from Luna Coffee on Foodpanda.
          </p>

          {/* Streamlined Category Switcher */}
          <div
            className={`mt-10 inline-flex p-1.5 rounded-full shadow-lg overflow-x-auto max-w-full transition-colors ${
              isDark
                ? 'bg-white/[0.03] border border-white/10'
                : 'bg-black/[0.03] border border-black/10'
            }`}
          >
            {categories.map((cat) => {
              const isActive = activeCat === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCat(cat.id as any)}
                  className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors select-none whitespace-nowrap ${
                    isActive
                      ? isDark
                        ? 'text-[#140E0A] font-bold'
                        : 'text-white font-bold'
                      : isDark
                      ? 'text-[#A89F95] hover:text-white'
                      : 'text-[#6B5E52] hover:text-[#1C1510]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="menuFilterPill"
                      className={`absolute inset-0 rounded-full shadow-md ${
                        isDark ? 'bg-[#C89D66]' : 'bg-[#8A5A2B]'
                      }`}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean, Spacious Product Grid with Sensory Radar Hover Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => {
              const isHovered = hoveredItemId === item.id;
              const sensory = SENSORY_DATA[item.id] || { sweetness: 70, acidity: 30, body: 75, roast: 60 };

              return (
                <motion.article
                  key={item.id}
                  layout="position"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoveredItemId(item.id)}
                  onMouseLeave={() => setHoveredItemId(null)}
                  className={`group rounded-3xl p-3 border transition-all duration-500 flex flex-col justify-between relative overflow-hidden ${
                    isDark
                      ? 'bg-white/[0.02] hover:bg-white/[0.04] border-white/10 hover:border-[#C89D66]/40'
                      : 'bg-white hover:bg-[#FDFBF7] border-black/10 hover:border-[#8A5A2B]/40 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Visual Header */}
                    <div
                      className={`relative aspect-[4/3] w-full rounded-2xl overflow-hidden ${
                        isDark ? 'bg-[#16110D]' : 'bg-[#EAE2D7]'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                        loading="lazy"
                      />
                      <div
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          isDark
                            ? 'bg-gradient-to-t from-[#0F0C0A]/85 via-transparent to-transparent'
                            : 'bg-gradient-to-t from-[#1C1510]/60 via-transparent to-transparent'
                        }`}
                      />

                      {/* Coffee Steam Wisps on Card Hover */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 0.7, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute bottom-2 right-4 pointer-events-none"
                          >
                            <CoffeeSteam />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Price Pill */}
                      <div
                        className={`absolute top-3.5 right-3.5 px-3 py-1 rounded-full backdrop-blur-md border text-xs font-mono font-bold ${
                          isDark
                            ? 'bg-black/60 border-white/15 text-[#E0B883]'
                            : 'bg-white/90 border-black/10 text-[#8A5A2B]'
                        }`}
                      >
                        {item.price}
                      </div>
                    </div>

                    {/* Body Text */}
                    <div className="p-5">
                      <div
                        className={`text-[10px] font-mono uppercase tracking-wider font-semibold ${
                          isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
                        }`}
                      >
                        {item.subtitle}
                      </div>
                      <h3
                        className={`font-serif text-2xl font-bold mt-1 transition-colors ${
                          isDark
                            ? 'text-[#FAF7F2] group-hover:text-[#C89D66]'
                            : 'text-[#1C1510] group-hover:text-[#8A5A2B]'
                        }`}
                      >
                        {item.name}
                      </h3>
                      <p
                        className={`mt-2 text-xs sm:text-sm leading-relaxed line-clamp-2 ${
                          isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
                        }`}
                      >
                        {item.description}
                      </p>

                      {/* Tasting Notes */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.notes.map((n, i) => (
                          <span
                            key={i}
                            className={`px-2.5 py-0.5 rounded-md border text-[10px] font-mono ${
                              isDark
                                ? 'bg-white/5 border-white/5 text-[#D8C7B0]'
                                : 'bg-black/5 border-black/5 text-[#6B5E52]'
                            }`}
                          >
                            {n}
                          </span>
                        ))}
                      </div>

                      {/* Interactive Coffee Sensory Spectrum Bar (Animated on Card Hover) */}
                      <div
                        className={`mt-5 pt-3 border-t transition-all duration-300 ${
                          isDark ? 'border-white/5' : 'border-black/5'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#A89F95] mb-1.5">
                          <span>SENSORY SPECTRUM</span>
                          <span className="text-[#C89D66]">
                            {isHovered ? 'Active Profile' : 'Sweetness · Body'}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                          <div>
                            <div className="flex justify-between mb-0.5 text-[9px] text-[#A89F95]">
                              <span>Sweetness</span>
                              <span>{sensory.sweetness}%</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-black/20 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${sensory.sweetness}%` }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="h-full rounded-full bg-[#C89D66]"
                              />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between mb-0.5 text-[9px] text-[#A89F95]">
                              <span>Body Density</span>
                              <span>{sensory.body}%</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-black/20 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${sensory.body}%` }}
                                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="h-full rounded-full bg-[#8A5A2B]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Foodpanda Order CTA with Button-in-Button */}
                  <div className="p-5 pt-0">
                    <a
                      href={FOODPANDA_STORE_URL}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full py-3 px-4 rounded-xl text-xs font-semibold tracking-wide flex items-center justify-center gap-2 border transition-all duration-300 active:scale-[0.98] ${
                        isDark
                          ? 'bg-white/5 hover:bg-[#D70F64] text-white border-white/10 hover:border-transparent'
                          : 'bg-black/5 hover:bg-[#D70F64] text-[#1C1510] hover:text-white border-black/10 hover:border-transparent'
                      }`}
                    >
                      <span>Order on foodpanda</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
