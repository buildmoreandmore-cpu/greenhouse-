import React, { useState } from 'react';
import { MapPin, Radio, ShoppingBag, MoreHorizontal, Loader2, Sparkles } from 'lucide-react';
import { generateDrinkRecommendation } from '../services/geminiService';

export const NavigatorWidget: React.FC = () => {
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGetVibe = async () => {
    setLoading(true);
    const vibes = ["Chill & Relaxed", "Energetic & Social", "Health Focus", "Late Night Lounge"];
    const randomVibe = vibes[Math.floor(Math.random() * vibes.length)];
    
    const result = await generateDrinkRecommendation(randomVibe);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-3 max-w-xs">
      {/* Header Pill */}
      <div className="flex items-center gap-2">
        <div className="bg-[#ccff00] p-2 rounded-xl">
          <div className="bg-black text-[#ccff00] p-1 rounded-full">
            <span className="text-xs font-bold px-1">GH</span>
          </div>
        </div>
        <div className="bg-black/80 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/10 font-bold">
          Your Social Vibe
        </div>
      </div>

      {/* Location Tags */}
      <div className="flex gap-2">
        <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-sm font-medium flex items-center gap-2">
           <MapPin size={14} className="text-orange-500" />
           Los Angeles, CA
        </div>
        <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-sm font-medium">
           USA
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors">
          <Radio size={16} />
          Lounge Live
        </button>
        <button className="bg-[#00cc66] hover:bg-[#00b359] text-black px-4 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors">
          <Sparkles size={16} />
          Socializing
        </button>
      </div>

      {/* AI Recommendation Section */}
      <div className="flex gap-2">
        <button 
            onClick={handleGetVibe}
            disabled={loading}
            className="bg-[#ffe600] hover:bg-[#e6cf00] text-black px-4 py-3 rounded-xl font-bold text-sm flex items-center gap-2 flex-grow transition-colors"
        >
          {loading ? <Loader2 className="animate-spin" size={16}/> : <ShoppingBag size={16} />}
          {loading ? "Mixing..." : "Get Drink Rec"}
        </button>
        <button className="bg-black/80 hover:bg-black text-white p-3 rounded-xl border border-white/10">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Dynamic Recommendation Result */}
      {recommendation && (
        <div className="bg-black/90 backdrop-blur-xl border border-[#ccff00]/50 p-4 rounded-2xl mt-2 animate-in fade-in slide-in-from-bottom-4">
            <p className="text-[#ccff00] text-xs uppercase font-bold mb-1">AI Sommelier Says:</p>
            <p className="text-sm text-gray-200 leading-snug">{recommendation}</p>
        </div>
      )}
    </div>
  );
};