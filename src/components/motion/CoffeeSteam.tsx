import React from 'react';
import { motion } from 'framer-motion';

export const CoffeeSteam: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none relative w-20 h-28 overflow-visible ${className}`} aria-hidden="true">
      {/* Three wavy rising steam ribbons with staggered sinusoidal drift */}
      {[
        { d: 'M 10 90 Q 0 60 12 35 T 8 5', delay: 0, duration: 3.5, x: 0 },
        { d: 'M 22 90 Q 32 55 18 30 T 26 5', delay: 0.8, duration: 4.2, x: 5 },
        { d: 'M 16 90 Q 8 65 24 40 T 14 5', delay: 1.6, duration: 3.8, x: -3 },
      ].map((steam, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 40 100"
          className="absolute inset-0 w-full h-full overflow-visible"
          initial={{ opacity: 0, y: 15, scaleY: 0.8 }}
          animate={{
            opacity: [0, 0.45, 0.3, 0],
            y: [-5, -35],
            scaleY: [0.9, 1.25],
            x: [steam.x, steam.x + (i % 2 === 0 ? 8 : -8)],
          }}
          transition={{
            duration: steam.duration,
            repeat: Infinity,
            delay: steam.delay,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <path
            d={steam.d}
            fill="none"
            stroke="url(#steam-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="steam-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#E0B883" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#FAF7F2" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0" />
            </linearGradient>
          </defs>
        </motion.svg>
      ))}
    </div>
  );
};
