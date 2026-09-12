import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LunarEntrance } from './components/ui/LunarEntrance';
import { CosmicDustCanvas } from './components/ui/CosmicDustCanvas';
import { Navbar } from './components/navbar/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { CoffeeExtractionSimulator } from './components/motion/CoffeeExtractionSimulator';
import { CoffeeJourneyTimeline } from './components/motion/CoffeeJourneyTimeline';
import { MenuSection } from './components/menu/MenuSection';
import { BlogSection } from './components/blog/BlogSection';
import { Locations } from './components/branches/Locations';
import { ReviewsSection } from './components/reviews/ReviewsSection';
import { Footer } from './components/footer/Footer';

const AppContent: React.FC = () => {
  const [entered, setEntered] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden font-sans transition-colors duration-500 ${
        isDark ? 'bg-[#0F0C0A] text-[#FAF7F2]' : 'bg-[#FAF7F2] text-[#1C1510]'
      }`}
    >
      {/* 1. Serene Lunar Opening Sequence */}
      <AnimatePresence>
        {!entered && (
          <LunarEntrance onComplete={() => setEntered(true)} />
        )}
      </AnimatePresence>

      {/* 2. Soft, Ambient Golden Aroma Background */}
      <CosmicDustCanvas />

      {/* 3. Floating Island Navigation with Theme Toggle */}
      <Navbar />

      <main className="relative z-10">
        {/* 4. Editorial Hero with Rising Steam & Uncluttered Layout */}
        <HeroSection />

        {/* 5. Interactive Coffee Extraction Chamber (Espresso, V60, Cold Brew) */}
        <section id="craft" className="relative py-28 sm:py-36 px-5 sm:px-8 z-10 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
              <span
                className={`text-xs font-mono uppercase tracking-[0.25em] font-bold mb-3 ${
                  isDark ? 'text-[#C89D66]' : 'text-[#8A5A2B]'
                }`}
              >
                SPECIALTY EXTRACTION SCIENCE
              </span>
              <h2
                className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight transition-colors ${
                  isDark ? 'text-[#FAF7F2]' : 'text-[#1C1510]'
                }`}
              >
                The Physics in Every Cup.
              </h2>
              <p
                className={`mt-4 text-base max-w-xl leading-relaxed transition-colors ${
                  isDark ? 'text-[#A89F95]' : 'text-[#6B5E52]'
                }`}
              >
                Temperature stability, saturated 9-bar pressure curves, and micro-particle grinding dialed in daily to showcase the origin's natural sugars.
              </p>
            </div>
            <CoffeeExtractionSimulator />
          </div>
        </section>

        {/* 6. Kinetic Bean-to-Cup Journey Timeline (Harvest -> Roast -> Grind -> Pour) */}
        <CoffeeJourneyTimeline />

        {/* 7. Dispatches, Events, and Promos Blog Feed (Above Menu) */}
        <BlogSection />

        {/* 8. Curated Specialty Menu with Sensory Radar Spectrum Bars */}
        <MenuSection />

        {/* 9. The Triangle & Rizal St Sanctuaries */}
        <Locations />

        {/* 10. Verified Customer Voices */}
        <ReviewsSection />
      </main>

      {/* 10. Refined Minimalist Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
