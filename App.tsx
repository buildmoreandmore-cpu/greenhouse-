import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { FloatingStats } from './components/FloatingStats';
import { NavigatorWidget } from './components/NavigatorWidget';
import { AppSection } from './types';

function App() {
  const [currentSection, setCurrentSection] = useState<AppSection>(AppSection.HOME);

  return (
    <div className="min-h-screen w-full relative bg-[#0f291e] overflow-hidden selection:bg-[#ccff00] selection:text-black">
      {/* Navigation Layer */}
      <Navigation currentSection={currentSection} setSection={setCurrentSection} />

      {/* Main Content Layer */}
      <main className="relative">
        {currentSection === AppSection.HOME && (
          <>
            <HeroSection />
            <FloatingStats />
            <NavigatorWidget />
          </>
        )}

        {/* Placeholder for other sections to show routing structure */}
        {currentSection !== AppSection.HOME && (
          <div className="h-screen flex items-center justify-center bg-black/50 backdrop-blur-md">
            <div className="text-center p-12 border border-white/10 rounded-3xl bg-[#0f291e]">
              <h2 className="text-4xl font-bold mb-4 text-[#ccff00]">{currentSection}</h2>
              <p className="text-gray-400 mb-8">Coming soon to the lounge.</p>
              <button 
                onClick={() => setCurrentSection(AppSection.HOME)}
                className="text-white hover:text-[#ccff00] underline underline-offset-4"
              >
                Return Home
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Global Grain Overlay for texture (like the photo) */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03] mix-blend-overlay z-[60]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
}

export default App;