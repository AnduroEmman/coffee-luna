import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, ArrowRight, Clock } from 'lucide-react';
import { FOODPANDA_STORE_URL } from '../../data/mockData';
import { CoffeeSteam } from '../motion/CoffeeSteam';
import { useTheme } from '../../context/ThemeContext';

export const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-5 sm:px-8 py-20 sm:py-28 overflow-hidden z-10">
      {/* Subtle Warm Amber Crema Glow */}
      <div
        className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[120px] pointer-events-none transition-opacity duration-700 ${
          isDark
            ? 'bg-gradient-to-tr from-[#C89D66]/12 via-[#2B1A12]/20 to-transparent opacity-100'
            : 'bg-gradient-to-tr from-[#D4A362]/20 via-[#F5EFE6]/50 to-transparent opacity-80'
        }`}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Typography & Intentional Macro-Whitespace */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Subtle Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono mb-6 transition-colors ${
              isDark
                ? 'bg-white/[0.04] border border-white/10 text-[#C89D66]'
                : 'bg-black/[0.04] border border-black/10 text-[#8A5A2B]'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="tracking-wider uppercase">The Triangle · Roxas City</span>
            <span className={isDark ? 'text-white/20' : 'text-black/20'}>|</span>
            <span className={isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'}>Now Open Daily</span>
          </motion.div>

          {/* Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.06] tracking-tight transition-colors ${
              isDark ? 'text-[#FAF7F2]' : 'text-[#1C1510]'
            }`}
          >
            Coffee as ritual.{' '}
            <span className={`italic font-normal ${isDark ? 'text-[#E0B883]' : 'text-[#8A5A2B]'}`}>
              Brewed without hurry.
            </span>
          </motion.h1>

          {/* Clean Body Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`mt-6 text-base sm:text-lg leading-relaxed max-w-xl font-sans transition-colors ${
              isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
            }`}
          >
            Specialty espresso extractions, ceremonial Uji matcha, and hot-pressed French croffles in Roxas City. Available for peaceful patio dining or fast delivery via Foodpanda.
          </motion.p>

          {/* Clean Dual CTAs with Button-in-Button Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary Action Button (Foodpanda Order) */}
            <a
              href={FOODPANDA_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-between gap-4 pl-6 pr-2 py-2 rounded-full bg-[#D70F64] hover:bg-[#BF0C58] text-white font-semibold text-sm transition-all duration-300 shadow-[0_10px_30px_rgba(215,15,100,0.35)] hover:shadow-[0_15px_40px_rgba(215,15,100,0.5)] active:scale-[0.98]"
            >
              <span>Order on foodpanda</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-105">
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </span>
            </a>

            {/* Secondary Action Button (Menu Anchor) */}
            <a
              href="#menu"
              className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 active:scale-[0.98] ${
                isDark
                  ? 'bg-white/[0.05] hover:bg-white/[0.09] text-[#FAF7F2] hover:text-[#C89D66] border border-white/10 hover:border-[#C89D66]/40'
                  : 'bg-black/[0.05] hover:bg-black/[0.08] text-[#1C1510] hover:text-[#8A5A2B] border border-black/10 hover:border-[#8A5A2B]/40'
              }`}
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Minimalist Trust & Status Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`mt-10 flex items-center gap-6 text-xs font-mono transition-colors ${
              isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <Star className={`w-3.5 h-3.5 fill-current ${isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'}`} />
              <span className={`font-bold ${isDark ? 'text-white' : 'text-[#1C1510]'}`}>5.0 Rating</span>
              <span>(100+ Reviews)</span>
            </div>
            <span className={isDark ? 'text-white/20' : 'text-black/20'}>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className={`w-3.5 h-3.5 ${isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'}`} />
              <span>~20 min Delivery</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Double-Bezel Frame with Cinematic AI Rotating Coffee Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center"
        >
          {/* Double-Bezel Frame */}
          <div
            className={`w-full max-w-md rounded-[2.5rem] p-2 transition-colors shadow-2xl relative ${
              isDark
                ? 'bg-white/[0.03] ring-1 ring-white/10'
                : 'bg-black/[0.03] ring-1 ring-black/10'
            }`}
          >
            <div
              className={`relative aspect-[4/5] w-full rounded-[calc(2.5rem-0.5rem)] overflow-hidden transition-colors ${
                isDark ? 'bg-[#16110D]' : 'bg-[#EAE2D7]'
              }`}
            >
              {/* Seamless Looping Cinematic Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                src="/assets/Cinematic_slow_motion_K_comme.mp4"
              />

              <div
                className={`absolute inset-0 pointer-events-none transition-colors ${
                  isDark
                    ? 'bg-gradient-to-t from-[#0F0C0A]/90 via-[#0F0C0A]/15 to-transparent'
                    : 'bg-gradient-to-t from-[#1C1510]/80 via-[#1C1510]/10 to-transparent'
                }`}
              />

              {/* Coffee-Specific Rising Steam Motion */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none">
                <CoffeeSteam />
              </div>

              {/* Integrated Clean Caption Inside Card */}
              <div
                className={`absolute bottom-5 inset-x-5 p-4 rounded-2xl backdrop-blur-md flex items-center justify-between transition-colors ${
                  isDark
                    ? 'bg-[#140E0A]/85 border border-white/10'
                    : 'bg-[#FAF7F2]/90 border border-black/10 shadow-lg'
                }`}
              >
                <div>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${
                      isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
                    }`}
                  >
                    Signature Cold Brew & Lattes
                  </span>
                  <div
                    className={`font-serif font-bold text-base ${
                      isDark ? 'text-white' : 'text-[#1C1510]'
                    }`}
                  >
                    Luna Coffee · Zero Gravity
                  </div>
                </div>
                <a
                  href={FOODPANDA_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-xs font-bold transition-transform active:scale-95 ${
                    isDark
                      ? 'bg-[#C89D66]/20 hover:bg-[#C89D66]/30 text-[#E0B883]'
                      : 'bg-[#8A5A2B]/15 hover:bg-[#8A5A2B]/25 text-[#8A5A2B]'
                  }`}
                  title="Order on foodpanda"
                >
                  <span>₱175</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
