import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Flame, Droplets, Sparkles, RotateCcw } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface BrewMethod {
  id: string;
  name: string;
  subtitle: string;
  pressure: string;
  temp: string;
  time: string;
  ratio: string;
  notes: string[];
  cremaColor: string;
  liquidColor: string;
  liquidHeight: number;
  streamSpeed: number;
}

const BREW_METHODS: BrewMethod[] = [
  {
    id: 'espresso',
    name: '9-Bar Espresso Pull',
    subtitle: 'High-Pressure Saturated Extraction',
    pressure: '9.2 Bar',
    temp: '93.5°C',
    time: '28s',
    ratio: '1:2 (18g in · 36g out)',
    notes: ['Dark Cocoa', 'Toasted Hazelnut', 'Dense Crema'],
    cremaColor: '#D4A362',
    liquidColor: '#2B1A12',
    liquidHeight: 65,
    streamSpeed: 1.2,
  },
  {
    id: 'pourover',
    name: 'V60 Spiral Bloom',
    subtitle: 'Conical Slow Manual Brew',
    pressure: 'Gravity (1.0 Bar)',
    temp: '92.0°C',
    time: '3m 15s',
    ratio: '1:16 (15g in · 240g out)',
    notes: ['Jasmine Floral', 'Meyer Lemon', 'Tea Clarity'],
    cremaColor: '#E2C29D',
    liquidColor: '#4A301E',
    liquidHeight: 85,
    streamSpeed: 0.8,
  },
  {
    id: 'coldbrew',
    name: 'Cryo Nitro Steep',
    subtitle: '24-Hour Sub-Zero Extraction',
    pressure: 'Cold Blanket (2.0 Bar)',
    temp: '4.0°C',
    time: '24 Hours',
    ratio: '1:10 Concentrate',
    notes: ['Black Cherry', 'Molasses', 'Silky Nitrogen'],
    cremaColor: '#F3E5D4',
    liquidColor: '#1A1009',
    liquidHeight: 78,
    streamSpeed: 2.0,
  },
];

export const CoffeeExtractionSimulator: React.FC = () => {
  const [activeMethod, setActiveMethod] = useState<BrewMethod>(BREW_METHODS[0]);
  const [isBrewing, setIsBrewing] = useState(true);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleSelect = (m: BrewMethod) => {
    setActiveMethod(m);
    setIsBrewing(false);
    setTimeout(() => setIsBrewing(true), 150);
  };

  return (
    <div
      className={`w-full max-w-5xl mx-auto rounded-[2.5rem] p-3 sm:p-4 transition-colors shadow-2xl ${
        isDark
          ? 'bg-[#140E0A] ring-1 ring-white/10'
          : 'bg-[#F0EBE1] ring-1 ring-black/10'
      }`}
    >
      <div
        className={`rounded-[2rem] p-6 sm:p-10 border transition-colors relative overflow-hidden ${
          isDark
            ? 'bg-[#1A130E] border-white/5'
            : 'bg-[#FFFFFF] border-black/5 shadow-md'
        }`}
      >
        {/* Ambient Radial Backlight */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-25 transition-colors duration-700"
          style={{ background: activeMethod.cremaColor }}
        />

        {/* Header */}
        <div
          className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b transition-colors relative z-10 ${
            isDark ? 'border-white/10' : 'border-black/10'
          }`}
        >
          <div>
            <div
              className={`flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] font-bold ${
                isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full animate-ping ${
                  isDark ? 'bg-[#C89D66]' : 'bg-[#8A5A2B]'
                }`}
              />
              KINETIC EXTRACTION CHAMBER
            </div>
            <h3
              className={`font-serif text-2xl sm:text-3xl font-bold mt-1 ${
                isDark ? 'text-[#FAF7F2]' : 'text-[#1C1510]'
              }`}
            >
              The Science of Every Drop
            </h3>
          </div>

          {/* Interactive Method Tabs */}
          <div
            className={`inline-flex p-1 rounded-full border transition-colors ${
              isDark ? 'bg-black/40 border-white/10' : 'bg-black/5 border-black/10'
            }`}
          >
            {BREW_METHODS.map((method) => {
              const isActive = activeMethod.id === method.id;
              return (
                <button
                  key={method.id}
                  onClick={() => handleSelect(method)}
                  className={`relative px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
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
                      layoutId="brewTabIndicator"
                      className={`absolute inset-0 rounded-full shadow-md ${
                        isDark ? 'bg-[#C89D66]' : 'bg-[#8A5A2B]'
                      }`}
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{method.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Kinetic Simulation Canvas & Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 relative z-10">
          {/* Left: Interactive Extraction Visualizer */}
          <div
            className={`lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl border transition-colors relative ${
              isDark ? 'bg-black/30 border-white/5' : 'bg-[#FAF7F2] border-black/5 shadow-inner'
            }`}
          >
            {/* Visualizer Apparatus */}
            <div className="relative w-48 h-64 flex flex-col items-center justify-between">
              {/* Spout / Grouphead */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-28 h-3 bg-gradient-to-r from-[#2A231D] via-[#4D3F33] to-[#2A231D] rounded-t-md border-t border-white/20" />
                <div className="w-16 h-7 bg-gradient-to-b from-[#3D3127] to-[#221B15] rounded-b-xl border-x border-b border-white/10 shadow-lg flex items-center justify-center">
                  <div className="w-3 h-2 bg-[#C89D66] rounded-full opacity-60" />
                </div>
              </div>

              {/* Middle: Continuous Liquid Stream */}
              <div className="relative flex-1 w-full flex items-center justify-center overflow-visible">
                {isBrewing && (
                  <>
                    <motion.div
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: [0.7, 0.9, 0.7] }}
                      transition={{
                        duration: activeMethod.streamSpeed,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      style={{
                        background: `linear-gradient(to bottom, ${activeMethod.cremaColor}, ${activeMethod.liquidColor})`,
                      }}
                      className="w-[3.5px] h-full origin-top rounded-full shadow-[0_0_8px_rgba(200,157,102,0.4)]"
                    />

                    <motion.div
                      animate={{ scale: [0.2, 1.8], opacity: [0.8, 0] }}
                      transition={{
                        duration: 1.0,
                        repeat: Infinity,
                        ease: 'easeOut',
                      }}
                      className="absolute bottom-6 w-8 h-2 rounded-[50%] border border-[#C89D66]/60 pointer-events-none"
                    />
                  </>
                )}
              </div>

              {/* Bottom: Glass Vessel */}
              <div
                className={`relative w-28 h-32 rounded-b-2xl border-x border-b p-1 flex flex-col justify-end overflow-hidden shadow-inner backdrop-blur-sm ${
                  isDark
                    ? 'border-white/20 bg-white/[0.03]'
                    : 'border-black/20 bg-black/[0.03]'
                }`}
              >
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${activeMethod.liquidHeight}%` }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ background: activeMethod.liquidColor }}
                  className="w-full rounded-b-xl relative transition-colors duration-500 overflow-hidden"
                >
                  <div
                    style={{ background: activeMethod.cremaColor }}
                    className="w-full h-3.5 absolute top-0 inset-x-0 shadow-sm opacity-90 transition-colors duration-500"
                  />
                  <div className="absolute top-0 right-1.5 w-1 h-full bg-white/10 rounded-full" />
                </motion.div>
              </div>
            </div>

            {/* Re-bloom Toggle */}
            <button
              onClick={() => handleSelect(activeMethod)}
              className={`mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono transition-colors ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10 text-[#C89D66]'
                  : 'bg-black/5 hover:bg-black/10 border border-black/10 text-[#8A5A2B]'
              }`}
            >
              <RotateCcw className="w-3 h-3" />
              <span>Simulate Re-Bloom</span>
            </button>
          </div>

          {/* Right: Telemetry Matrix */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div
                className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                  isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
                }`}
              >
                {activeMethod.subtitle}
              </div>
              <h4
                className={`font-serif text-3xl font-bold mt-1 ${
                  isDark ? 'text-white' : 'text-[#1C1510]'
                }`}
              >
                {activeMethod.name}
              </h4>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
                }`}
              >
                Precision-calibrated by Luna Coffee baristas to extract peak soluble sugars, aromatic terpene notes, and silky lipids without over-extracting bitter tannins.
              </p>
            </div>

            {/* Gauges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'EXTRACTION PRESSURE', val: activeMethod.pressure, icon: Flame },
                { label: 'BREW TEMPERATURE', val: activeMethod.temp, icon: Droplets },
                { label: 'CONTACT TIME', val: activeMethod.time, icon: Sparkles },
                { label: 'BREW RATIO', val: activeMethod.ratio, icon: Coffee },
              ].map((g, i) => (
                <div
                  key={i}
                  className={`p-3.5 rounded-xl border flex flex-col justify-between transition-colors ${
                    isDark
                      ? 'bg-black/40 border-white/5 text-white'
                      : 'bg-black/[0.03] border-black/5 text-[#1C1510]'
                  }`}
                >
                  <span
                    className={`text-[9px] font-mono uppercase tracking-wider block mb-1 ${
                      isDark ? 'text-[#A89F95]' : 'text-[#8A5A2B]'
                    }`}
                  >
                    {g.label}
                  </span>
                  <span className="font-mono text-base font-bold">
                    {g.val}
                  </span>
                </div>
              ))}
            </div>

            {/* Sensory Aroma Notes */}
            <div>
              <span
                className={`text-[10px] font-mono uppercase tracking-wider block mb-2 ${
                  isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
                }`}
              >
                ACTIVE SENSORY PROFILE
              </span>
              <div className="flex flex-wrap gap-2">
                {activeMethod.notes.map((note, idx) => (
                  <span
                    key={idx}
                    className={`px-3.5 py-1.5 rounded-full border text-xs font-mono transition-colors ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-[#FAF7F2]'
                        : 'bg-black/5 border-black/10 text-[#1C1510]'
                    }`}
                  >
                    ✦ {note}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
