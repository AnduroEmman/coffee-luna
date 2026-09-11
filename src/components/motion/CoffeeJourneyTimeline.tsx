import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Sparkles, ArrowRight, RotateCcw, Droplet, Flame, Zap, Check } from 'lucide-react';

interface Stage {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  detailStats: { label: string; value: string }[];
}

const STAGES: Stage[] = [
  {
    id: 'origin',
    stepNumber: '01',
    title: 'Highland Terroir Harvest',
    subtitle: 'Atok, Benguet · 1,850+ MASL',
    tagline: 'Hand-picked red cherries at 22° Brix sweetness',
    description:
      'High-altitude volcanic soil and brisk mountain mists slow the maturation of the coffee cherry, concentrating dense fructose and complex phosphoric acidity.',
    detailStats: [
      { label: 'Altitude', value: '1,850 MASL' },
      { label: 'Brix Sugar Index', value: '22.4° Brix' },
      { label: 'Varietal', value: 'Typica & Bourbon' },
    ],
  },
  {
    id: 'roast',
    stepNumber: '02',
    title: 'Small-Batch Flame Profiling',
    subtitle: 'Cast-Iron Drum · 48h Freshness',
    tagline: 'First crack at 196°C with zero scorching',
    description:
      'Roasting in micro-batches of 3kg allows micro-adjustments to airflow and convection heat, caramelizing natural bean sugars into rich cocoa, almond, and berry notes.',
    detailStats: [
      { label: 'Batch Volume', value: '3.0 kg Micro-lot' },
      { label: 'First Crack', value: '196.5°C' },
      { label: 'Roast Age', value: '< 48 Hours' },
    ],
  },
  {
    id: 'grind',
    stepNumber: '03',
    title: 'Titanium Burr Micro-Grind',
    subtitle: '98mm Flat Burrs · Zero Retention',
    tagline: 'Bimodal particle curve for uniform extraction',
    description:
      'Using precision titanium-coated burrs, beans are shattered into a tight particle distribution, unlocking surface area without generating fines that cause astringency.',
    detailStats: [
      { label: 'Burr Geometry', value: '98mm Flat Titanium' },
      { label: 'Particle Target', value: '380 Microns' },
      { label: 'Dose Precision', value: '18.0g ± 0.05g' },
    ],
  },
  {
    id: 'pour',
    stepNumber: '04',
    title: 'The Golden Extraction & Velvet Pour',
    subtitle: '9-Bar Saturated Group · Oatside Microfoam',
    tagline: 'Dense crema ribbon poured into artisan ceramics',
    description:
      'Water at 93.5°C meets 9.2 bars of saturated hydraulic pressure, dissolving aromatic lipids into a velvety shot, seamlessly united with silky steamed Oatside oat milk.',
    detailStats: [
      { label: 'Extraction Time', value: '28.5 Seconds' },
      { label: 'Hydraulic Pressure', value: '9.2 Bar' },
      { label: 'Cup Yield', value: '36.0g Espresso' },
    ],
  },
];

export const CoffeeJourneyTimeline: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const currentStage = STAGES[activeIdx];

  return (
    <section className="relative py-28 sm:py-36 px-5 sm:px-8 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-[0.25em] font-bold mb-3 ${
              isDark ? 'bg-white/5 text-[#C89D66] border border-white/10' : 'bg-black/5 text-[#8A5A2B] border border-black/10'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE BEAN-TO-CUP CHOREOGRAPHY</span>
          </div>
          <h2
            className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight transition-colors ${
              isDark ? 'text-[#FAF7F2]' : 'text-[#1C1510]'
            }`}
          >
            From Mountain Peak to Your Cup.
          </h2>
          <p
            className={`mt-4 text-base max-w-xl leading-relaxed transition-colors ${
              isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
            }`}
          >
            Interactive timeline tracking the chemical alchemy and physical craftsmanship behind every single extraction at Luna Coffee.
          </p>
        </div>

        {/* 4 Interactive Stage Progress Nodes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {STAGES.map((s, idx) => {
            const isActive = idx === activeIdx;
            const isCompleted = idx < activeIdx;
            return (
              <button
                key={s.id}
                onClick={() => setActiveIdx(idx)}
                className={`relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 active:scale-[0.98] ${
                  isActive
                    ? isDark
                      ? 'bg-[#1C1510] border-[#C89D66] shadow-[0_0_25px_rgba(200,157,102,0.25)]'
                      : 'bg-white border-[#8A5A2B] shadow-md'
                    : isDark
                    ? 'bg-white/[0.02] border-white/5 hover:border-white/15'
                    : 'bg-black/[0.02] border-black/5 hover:border-black/15'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive
                        ? isDark
                          ? 'text-[#C89D66]'
                          : 'text-[#8A5A2B]'
                        : isDark
                        ? 'text-[#A89F95]'
                        : 'text-[#6B5E52]'
                    }`}
                  >
                    STEP {s.stepNumber}
                  </span>
                  {isCompleted && (
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">
                      ✓
                    </span>
                  )}
                </div>
                <div
                  className={`font-serif text-sm sm:text-base font-bold transition-colors truncate ${
                    isActive ? (isDark ? 'text-white' : 'text-[#1C1510]') : isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
                  }`}
                >
                  {s.title.split(' ')[0]} {s.title.split(' ')[1]}
                </div>
                {/* Active Underline Indicator with Spring Motion */}
                {isActive && (
                  <motion.div
                    layoutId="timelineActiveBar"
                    className={`absolute bottom-0 inset-x-4 h-[2px] rounded-full ${
                      isDark ? 'bg-[#C89D66]' : 'bg-[#8A5A2B]'
                    }`}
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Stage Stage Display */}
        <div
          className={`rounded-[2.5rem] p-6 sm:p-12 border transition-colors shadow-2xl relative overflow-hidden ${
            isDark
              ? 'bg-[#16110D] border-white/10'
              : 'bg-white border-black/10'
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center"
            >
              {/* Left Column: Visual Kinetic Graphic */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div
                  className={`relative w-full aspect-square max-w-[320px] rounded-3xl p-6 flex flex-col items-center justify-center border overflow-hidden transition-colors ${
                    isDark ? 'bg-[#0F0C0A] border-white/10' : 'bg-[#FAF7F2] border-black/10'
                  }`}
                >
                  {/* Dynamic Coffee Graphic per Stage */}
                  {currentStage.id === 'origin' && (
                    <motion.div
                      animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                      className="flex flex-col items-center text-center"
                    >
                      <span className="text-6xl mb-3">🌱</span>
                      <div className="text-xs font-mono text-emerald-400 font-bold tracking-wider uppercase">
                        Ripened Cherry
                      </div>
                      <div className="text-[11px] font-mono text-[#A89F95] mt-1">
                        Hand-harvested at peak sugar brix
                      </div>
                    </motion.div>
                  )}

                  {currentStage.id === 'roast' && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                      className="relative w-36 h-36 flex items-center justify-center rounded-full border-2 border-dashed border-[#C89D66]/50"
                    >
                      <motion.div
                        animate={{ scale: [0.9, 1.15, 0.9] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="text-5xl"
                      >
                        🔥
                      </motion.div>
                      <span className="absolute -top-3 px-2 py-0.5 rounded-full bg-[#1C1510] text-[#C89D66] font-mono text-[9px]">
                        196°C
                      </span>
                    </motion.div>
                  )}

                  {currentStage.id === 'grind' && (
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        className="w-24 h-24 rounded-full border-4 border-[#C89D66]/60 border-t-transparent flex items-center justify-center text-3xl"
                      >
                        ⚙️
                      </motion.div>
                      <motion.div
                        animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="mt-4 flex gap-1"
                      >
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#C89D66]" />
                        ))}
                      </motion.div>
                    </div>
                  )}

                  {currentStage.id === 'pour' && (
                    <div className="relative flex flex-col items-center justify-center">
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="text-6xl mb-2"
                      >
                        ☕
                      </motion.div>
                      <motion.div
                        animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 0.9, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="px-3 py-1 rounded-full bg-[#D70F64]/15 border border-[#D70F64]/40 text-[#D70F64] text-[10px] font-mono font-bold"
                      >
                        9.2 Bar Crema Pour
                      </motion.div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Stage Narrative & Precise Parameters */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span
                    className={`text-xs font-mono uppercase tracking-widest font-semibold ${
                      isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
                    }`}
                  >
                    {currentStage.subtitle}
                  </span>
                  <h3
                    className={`font-serif text-3xl sm:text-4xl font-bold mt-1 ${
                      isDark ? 'text-white' : 'text-[#1C1510]'
                    }`}
                  >
                    {currentStage.title}
                  </h3>
                  <div
                    className={`text-xs font-mono mt-1 ${
                      isDark ? 'text-[#E0B883]' : 'text-[#8A5A2B]'
                    }`}
                  >
                    ✦ {currentStage.tagline}
                  </div>
                </div>

                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
                  }`}
                >
                  {currentStage.description}
                </p>

                {/* 3 Micro Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {currentStage.detailStats.map((stat, i) => (
                    <div
                      key={i}
                      className={`p-3.5 rounded-xl border transition-colors ${
                        isDark ? 'bg-black/30 border-white/5' : 'bg-[#FAF7F2] border-black/5'
                      }`}
                    >
                      <div
                        className={`text-[9px] font-mono uppercase tracking-wider mb-1 ${
                          isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
                        }`}
                      >
                        {stat.label}
                      </div>
                      <div
                        className={`font-mono text-sm sm:text-base font-bold ${
                          isDark ? 'text-white' : 'text-[#1C1510]'
                        }`}
                      >
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Step Forward Button */}
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => setActiveIdx((prev) => (prev + 1) % STAGES.length)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all active:scale-95 ${
                      isDark
                        ? 'bg-[#C89D66] text-[#0C0907] hover:bg-[#E0B883]'
                        : 'bg-[#8A5A2B] text-white hover:bg-[#70461E]'
                    }`}
                  >
                    <span>Next Stage ({activeIdx === 3 ? 'Restart 01' : `0${activeIdx + 2}`})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono text-[#A89F95]">
                    Stage {activeIdx + 1} of 4
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
