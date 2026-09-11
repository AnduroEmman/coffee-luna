import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation, ExternalLink, Check } from 'lucide-react';
import { BRANCHES, FOODPANDA_STORE_URL } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';

export const Locations: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="locations" className="relative py-28 sm:py-36 px-5 sm:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span
            className={`text-xs font-mono uppercase tracking-[0.25em] font-bold mb-3 ${
              isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
            }`}
          >
            VISIT OUR SANCTUARY
          </span>
          <h2
            className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight transition-colors ${
              isDark ? 'text-[#FAF7F2]' : 'text-[#1C1510]'
            }`}
          >
            Two Spaces. One Standard.
          </h2>
          <p
            className={`mt-4 text-base max-w-lg leading-relaxed transition-colors ${
              isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
            }`}
          >
            Relax on our starlight terrace at The Triangle, or order delivery straight to your location in Roxas City.
          </p>
        </div>

        {/* Dual Branch Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {BRANCHES.map((branch, idx) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-[2.5rem] p-3 border transition-all duration-500 flex flex-col justify-between ${
                isDark
                  ? 'bg-white/[0.02] border-white/10 hover:border-[#C89D66]/40'
                  : 'bg-white border-black/10 hover:border-[#8A5A2B]/40 shadow-md hover:shadow-xl'
              }`}
            >
              <div>
                {/* Visual Header */}
                <div
                  className={`relative aspect-[16/10] w-full rounded-[calc(2.5rem-0.75rem)] overflow-hidden ${
                    isDark ? 'bg-[#16110D]' : 'bg-[#EAE2D7]'
                  }`}
                >
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 ${
                      isDark
                        ? 'bg-gradient-to-t from-[#0F0C0A] via-[#0F0C0A]/40 to-transparent'
                        : 'bg-gradient-to-t from-[#1C1510]/80 via-[#1C1510]/30 to-transparent'
                    }`}
                  />

                  {/* Clean Bottom Title */}
                  <div className="absolute bottom-5 inset-x-6">
                    <span
                      className={`text-xs font-mono uppercase tracking-wider block font-semibold ${
                        isDark ? 'text-[#C89D66]' : 'text-[#E0B883]'
                      }`}
                    >
                      {branch.designation}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                      {branch.name}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8 space-y-6">
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
                    }`}
                  >
                    {branch.vibeDescription}
                  </p>

                  <div
                    className={`space-y-3 pt-4 border-t text-xs sm:text-sm font-mono transition-colors ${
                      isDark
                        ? 'border-white/10 text-[#D8C7B0]'
                        : 'border-black/10 text-[#54473C]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <MapPin
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
                        }`}
                      />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock
                        className={`w-4 h-4 shrink-0 ${
                          isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
                        }`}
                      />
                      <span>{branch.hours}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone
                        className={`w-4 h-4 shrink-0 ${
                          isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
                        }`}
                      />
                      <span>{branch.phone}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {branch.features.map((feat, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 text-xs p-2.5 rounded-xl border transition-colors ${
                          isDark
                            ? 'bg-white/[0.02] border-white/5 text-[#A89F95]'
                            : 'bg-black/[0.02] border-black/5 text-[#6B5E52]'
                        }`}
                      >
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
                          }`}
                        />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-8 pt-0 flex flex-wrap gap-3">
                <a
                  href={branch.foodpandaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3.5 px-5 rounded-full bg-[#D70F64] hover:bg-[#BF0C58] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
                >
                  <span>Order on foodpanda</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`py-3.5 px-6 rounded-full text-xs font-medium flex items-center justify-center gap-2 transition-colors ${
                    isDark
                      ? 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                      : 'bg-black/5 hover:bg-black/10 border border-black/10 text-[#1C1510]'
                  }`}
                >
                  <Navigation
                    className={`w-3.5 h-3.5 ${
                      isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
                    }`}
                  />
                  <span>Directions</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
