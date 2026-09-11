import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';
import { FOODPANDA_STORE_URL } from '../../data/mockData';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Craft Science', href: '#craft' },
    { label: 'Locations', href: '#locations' },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <>
      {/* Floating Island Header */}
      <header className="fixed top-0 inset-x-0 z-50 py-4 px-4 sm:px-8 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Brand Logo */}
          <a
            href="#"
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-xl transition-all duration-300 shadow-lg ${
              isDark
                ? 'bg-[#140E0A]/85 border border-white/10 hover:border-[#C89D66]/40'
                : 'bg-white/90 border border-black/10 hover:border-[#8A5A2B]/40'
            }`}
          >
            <span className="text-lg">☕</span>
            <div className="flex flex-col leading-none">
              <span
                className={`font-serif text-sm font-bold tracking-tight transition-colors ${
                  isDark ? 'text-white hover:text-[#C89D66]' : 'text-[#1C1510] hover:text-[#8A5A2B]'
                }`}
              >
                LUNA COFFEE
              </span>
              <span
                className={`text-[9px] font-mono tracking-widest uppercase mt-0.5 ${
                  isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
                }`}
              >
                Roxas City
              </span>
            </div>
          </a>

          {/* Desktop Nav Island */}
          <nav
            className={`hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full backdrop-blur-xl shadow-lg transition-colors ${
              isDark ? 'bg-[#140E0A]/85 border border-white/10' : 'bg-white/90 border border-black/10'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors ${
                  isDark ? 'text-[#A89F95] hover:text-white' : 'text-[#6B5E52] hover:text-[#1C1510]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle + Foodpanda Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            <div className="hidden sm:flex items-center">
              <a
                href={FOODPANDA_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D70F64] hover:bg-[#BF0C58] text-white text-xs font-semibold tracking-wide shadow-[0_4px_20px_rgba(215,15,100,0.35)] transition-all active:scale-95"
              >
                <span>Order on foodpanda</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2.5 rounded-full backdrop-blur-xl transition-colors ${
                isDark
                  ? 'bg-[#140E0A]/85 text-[#FAF7F2] border border-white/10'
                  : 'bg-white/90 text-[#1C1510] border border-black/10'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`md:hidden mt-3 p-4 rounded-3xl backdrop-blur-2xl pointer-events-auto space-y-2 shadow-2xl ${
                isDark
                  ? 'bg-[#140E0A]/95 border border-white/10 text-white'
                  : 'bg-white/95 border border-black/10 text-[#1C1510]'
              }`}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    isDark
                      ? 'text-[#FAF7F2] hover:text-[#C89D66] hover:bg-white/5'
                      : 'text-[#1C1510] hover:text-[#8A5A2B] hover:bg-black/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-black/10 dark:border-white/10">
                <a
                  href={FOODPANDA_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-[#D70F64] text-white text-xs font-semibold text-center flex items-center justify-center gap-2"
                >
                  <span>Order on foodpanda</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
