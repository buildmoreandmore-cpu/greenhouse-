import React from 'react';
import { Leaf, Droplets, Zap } from 'lucide-react';

export const FloatingStats: React.FC = () => {
  return (
    <div className="absolute top-32 right-8 z-40 hidden lg:flex flex-col gap-4">
      {/* Stat 1: Purity */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl w-48 animate-float transform rotate-2">
        <div className="flex justify-between items-center mb-2">
          <Leaf className="text-green-400 w-5 h-5" />
          <span className="text-xs text-green-200 font-mono">PURITY</span>
        </div>
        <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden">
          <div className="bg-green-400 w-[100%] h-full"></div>
        </div>
        <div className="mt-2 text-right text-xl font-bold">100%</div>
      </div>

      {/* Stat 2: Powder Level (Zero) */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl w-56 animate-float-delayed transform -rotate-1 translate-x-8">
        <div className="flex justify-between items-center mb-2">
          <Zap className="text-orange-400 w-5 h-5" />
          <span className="text-xs text-orange-200 font-mono">POWDER CONTENT</span>
        </div>
        <div className="flex gap-1">
           {[1,2,3].map(i => (
             <div key={i} className="h-2 w-full bg-black/50 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-gray-600"></div>
             </div>
           ))}
        </div>
        <div className="mt-2 text-right text-xl font-bold text-orange-400">0.0%</div>
      </div>

      {/* Stat 3: Freshness */}
      <div className="bg-[#ccff00] text-black p-4 rounded-2xl w-48 animate-float transform rotate-3 mt-4">
        <div className="flex justify-between items-center mb-2">
          <Droplets className="text-black w-5 h-5" />
          <span className="text-xs font-bold font-mono">FRESHNESS</span>
        </div>
        <div className="flex items-end justify-between">
           <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-tighter">Squeezed</span>
              <span className="font-bold">JUST NOW</span>
           </div>
           <div className="flex gap-1">
              <div className="w-2 h-6 bg-black rounded-sm"></div>
              <div className="w-2 h-4 bg-black/50 rounded-sm"></div>
              <div className="w-2 h-8 bg-black rounded-sm"></div>
           </div>
        </div>
      </div>
    </div>
  );
};