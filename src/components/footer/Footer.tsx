import React from 'react';
import { ExternalLink, ArrowUp, Heart } from 'lucide-react';
import { FOODPANDA_STORE_URL } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`relative pt-24 pb-12 px-5 sm:px-8 border-t transition-colors z-10 ${
        isDark
          ? 'border-white/10 bg-[#0C0907] text-[#A89F95]'
          : 'border-black/10 bg-[#F5EFE6] text-[#6B5E52]'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Simple, Impactful Final Callout */}
        <div
          className={`flex flex-col md:flex-row md:items-center justify-between gap-8 pb-16 border-b transition-colors ${
            isDark ? 'border-white/10' : 'border-black/10'
          }`}
        >
          <div>
            <span
              className={`text-xs font-mono uppercase tracking-[0.25em] font-bold block mb-2 ${
                isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
              }`}
            >
              LUNA COFFEE · ROXAS CITY
            </span>
            <h3
              className={`font-serif text-3xl sm:text-4xl font-bold max-w-md ${
                isDark ? 'text-white' : 'text-[#1C1510]'
              }`}
            >
              Order fresh lattes & croffles straight to your door.
            </h3>
          </div>

          <a
            href={FOODPANDA_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#D70F64] hover:bg-[#BF0C58] text-white text-sm font-semibold shadow-xl transition-all active:scale-98 self-start md:self-auto"
          >
            <span>Order on foodpanda</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Directory Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-10 py-12 border-b text-xs font-mono transition-colors ${
            isDark ? 'border-white/5' : 'border-black/5'
          }`}
        >
          <div>
            <div
              className={`font-serif text-base font-bold mb-2 ${
                isDark ? 'text-white' : 'text-[#1C1510]'
              }`}
            >
              The Triangle Hub
            </div>
            <p className="leading-relaxed">
              Arnaldo Boulevard, Roxas City, Capiz 5800<br />
              Mon-Thu: 08:00 AM - 11:30 PM<br />
              Fri-Sun: 08:00 AM - 12:00 MN
            </p>
          </div>

          <div>
            <div
              className={`font-serif text-base font-bold mb-2 ${
                isDark ? 'text-white' : 'text-[#1C1510]'
              }`}
            >
              Rizal Street Bar
            </div>
            <p className="leading-relaxed">
              108 Rizal Street, Downtown District<br />
              Daily: 07:30 AM - 10:30 PM<br />
              +63 (036) 621-LUNA
            </p>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div
                className={`font-serif text-base font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-[#1C1510]'
                }`}
              >
                Navigation
              </div>
              <div className="flex flex-col gap-1.5">
                <a
                  href="#menu"
                  className={`transition-colors ${
                    isDark ? 'hover:text-white' : 'hover:text-[#1C1510]'
                  }`}
                >
                  Specialty Menu
                </a>
                <a
                  href="#craft"
                  className={`transition-colors ${
                    isDark ? 'hover:text-white' : 'hover:text-[#1C1510]'
                  }`}
                >
                  Extraction Science
                </a>
                <a
                  href="#announcements"
                  className={`transition-colors ${
                    isDark ? 'hover:text-white' : 'hover:text-[#1C1510]'
                  }`}
                >
                  Events & Dispatches
                </a>
                <a
                  href="#locations"
                  className={`transition-colors ${
                    isDark ? 'hover:text-white' : 'hover:text-[#1C1510]'
                  }`}
                >
                  Locations & Hours
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className={`mt-6 self-start inline-flex items-center gap-2 text-[11px] transition-colors ${
                isDark
                  ? 'text-[#C89D66] hover:text-white'
                  : 'text-[#8A5A2B] hover:text-[#1C1510]'
              }`}
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Rights */}
        <div
          className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono transition-colors ${
            isDark ? 'text-[#6A635B]' : 'text-[#94897E]'
          }`}
        >
          <span>© {new Date().getFullYear()} Luna Coffee Roxas City. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            <span>Brewed with</span>
            <Heart className="w-3 h-3 text-[#D70F64] fill-[#D70F64]" />
            <span>in Capiz</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
