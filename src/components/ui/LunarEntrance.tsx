import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LunarEntranceProps {
  onComplete: () => void;
}

export const LunarEntrance: React.FC<LunarEntranceProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'aligning' | 'totality' | 'exit'>('aligning');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('totality'), 900);
    const t2 = setTimeout(() => setPhase('exit'), 2000);
    const t3 = setTimeout(() => onComplete(), 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03, filter: 'blur(8px)' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0C0907] text-[#FAF7F2] select-none overflow-hidden"
    >
      {/* Radiant Crema Glow */}
      <motion.div
        animate={{
          opacity: phase === 'totality' ? 0.8 : 0.25,
          scale: phase === 'totality' ? 1.4 : 1,
        }}
        transition={{ duration: 1.0, ease: 'easeOut' }}
        className="absolute w-[450px] h-[450px] rounded-full blur-[100px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200, 157, 102, 0.35) 0%, rgba(215, 15, 100, 0.15) 50%, transparent 70%)',
        }}
      />

      {/* Minimal Skip Pill */}
      <button
        onClick={onComplete}
        className="absolute top-6 right-6 text-[10px] font-mono tracking-widest text-[#A89F95] hover:text-white uppercase px-3.5 py-1.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.03] backdrop-blur-md transition-all active:scale-95"
      >
        Skip [ESC]
      </button>

      {/* Central Eclipse Composition */}
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Fine Orbit Ring */}
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="absolute w-44 h-44 pointer-events-none"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="rgba(200, 157, 102, 0.2)"
            strokeWidth="0.75"
            strokeDasharray="3 5"
          />
          <circle cx="50" cy="2" r="2" fill="#C89D66" />
        </motion.svg>

        {/* Outer Radiant Corona */}
        <motion.div
          animate={{
            scale: phase === 'totality' ? [1, 1.35, 1.25] : 1,
            opacity: phase === 'totality' ? 0.9 : 0.2,
            boxShadow:
              phase === 'totality'
                ? '0 0 80px 25px rgba(200, 157, 102, 0.5), 0 0 120px 40px rgba(215, 15, 100, 0.2)'
                : '0 0 25px 5px rgba(200, 157, 102, 0.1)',
          }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="absolute w-32 h-32 rounded-full border border-[#C89D66]/30 bg-[#C89D66]/10"
        />

        {/* Solar Golden Core */}
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-[#9B6B38] via-[#C89D66] to-[#E0B883] shadow-[0_0_50px_rgba(200,157,102,0.7)] flex items-center justify-center">
          <span className="text-xl opacity-60">☕</span>
        </div>

        {/* Lunar Eclipse Disc */}
        <motion.div
          initial={{ x: -70, y: -20, opacity: 0.8 }}
          animate={{
            x: phase === 'aligning' ? 0 : 4,
            y: phase === 'aligning' ? 0 : -2,
            opacity: 1,
          }}
          transition={{ duration: 1.1, ease: [0.34, 1.56, 0.64, 1] }}
          className="absolute w-[92px] h-[92px] rounded-full bg-[#0C0907] border border-[#C89D66]/30 shadow-inner flex items-center justify-center"
        >
          <div className="w-full h-full rounded-full border-r border-t border-[#C89D66]/40 opacity-70" />
        </motion.div>
      </div>

      {/* Typographic Unmasking */}
      <div className="relative mt-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
          animate={{
            opacity: phase !== 'aligning' ? 1 : 0,
            y: phase !== 'aligning' ? 0 : 12,
            filter: phase !== 'aligning' ? 'blur(0px)' : 'blur(6px)',
          }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C89D66] font-bold mb-2"
        >
          ROXAS CITY · THE TRIANGLE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16, filter: 'blur(10px)' }}
          animate={{
            opacity: phase !== 'aligning' ? 1 : 0,
            y: phase !== 'aligning' ? 0 : 16,
            filter: phase !== 'aligning' ? 'blur(0px)' : 'blur(10px)',
          }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF7F2]"
        >
          LUNA <span className="text-[#E0B883] italic font-normal">COFFEE</span>
        </motion.h1>
      </div>
    </motion.div>
  );
};
