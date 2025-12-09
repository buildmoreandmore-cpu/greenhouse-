import React from 'react';
import { AppSection } from '../types';

interface NavigationProps {
  currentSection: AppSection;
  setSection: (section: AppSection) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentSection, setSection }) => {
  const navItems = [
    { label: 'Our Story', id: AppSection.ABOUT },
    { label: 'The Menu', id: AppSection.MENU },
    { label: 'Rewards', id: AppSection.HOME }, // Placeholder link
    { label: 'Private Events', id: AppSection.EVENTS },
  ];

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4 w-full max-w-4xl px-4 justify-center">
      {/* Main Nav Bar */}
      <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-1 py-1 flex items-center shadow-2xl">
        <div className="bg-orange-500 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
          GH
        </div>
        
        <div className="hidden md:flex items-center gap-1 pr-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSection(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                currentSection === item.id 
                  ? 'text-white bg-white/10' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="h-4 w-[1px] bg-gray-600 mx-2"></div>
          
          <button className="text-gray-400 text-sm hover:text-white px-2 flex items-center gap-1">
            Products <span className="text-[10px]">▼</span>
          </button>
        </div>
      </div>

      {/* CTA Button */}
      <button className="bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold px-8 py-3 rounded-full shadow-[0_0_20px_rgba(204,255,0,0.3)] transition-transform hover:scale-105 uppercase text-sm tracking-wider">
        Book Lounge
      </button>
    </div>
  );
};