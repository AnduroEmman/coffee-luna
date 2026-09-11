import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'gold' | 'foodpanda' | 'ghost' | 'espresso';
  className?: string;
  pullFactor?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'gold',
  className = '',
  pullFactor = 0.28,
  onClick,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setOffset({
      x: (e.clientX - centerX) * pullFactor,
      y: (e.clientY - centerY) * pullFactor,
    });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const variantStyles = {
    gold: 'bg-gradient-to-r from-[#DDA853] via-[#F4D086] to-[#DDA853] text-[#1A1410] font-bold shadow-[0_10px_30px_rgba(221,168,83,0.35)] hover:shadow-[0_15px_40px_rgba(221,168,83,0.5)] border border-[#F4D086]/40',
    foodpanda: 'bg-[#D70F64] hover:bg-[#BF0C58] text-white font-bold shadow-[0_10px_35px_rgba(215,15,100,0.45)] hover:shadow-[0_18px_45px_rgba(215,15,100,0.65)] border border-pink-400/30',
    ghost: 'bg-transparent text-cream hover:text-gold border border-white/15 hover:border-gold/50 backdrop-blur-md',
    espresso: 'bg-[#2E231C] text-cream hover:text-white border border-gold/20 hover:border-gold/50 shadow-md',
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 20, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 active:scale-95 select-none overflow-hidden group ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {/* Light Sheen Sweep */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
    </motion.button>
  );
};
