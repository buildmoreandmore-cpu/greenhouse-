import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a4d33] to-[#0f291e]"></div>
      
      {/* Checkered Wall Effect from description */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000 75%), linear-gradient(-45deg, transparent 75%, #000 75%)',
             backgroundSize: '60px 60px',
             backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
           }}>
      </div>

      {/* Giant Background Circle (Sun/Moon/Planet art piece) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-to-tr from-orange-500/20 to-purple-500/20 rounded-full blur-3xl"></div>

      {/* Main Content Container */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        
        {/* Floating Abstract Juice/Fruit Art - Replacing the Astronaut */}
        <div className="relative w-full h-[400px] md:h-[600px] mb-8 animate-float">
            {/* We create a CSS-only abstract composition to represent the "First of its kind" feeling */}
            
            {/* The "Bottle" */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 md:w-48 h-80 md:h-96 bg-gradient-to-br from-orange-400 to-red-500 rounded-[40px] shadow-[0_0_50px_rgba(255,100,0,0.5)] flex items-center justify-center overflow-hidden border-2 border-white/20 backdrop-blur-sm z-20">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop')] bg-cover opacity-80 mix-blend-overlay"></div>
                <div className="text-white/90 font-bold text-6xl rotate-90 tracking-widest opacity-50">PURE</div>
            </div>

            {/* Floating Elements around it */}
            <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-[#ccff00] rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500 rounded-full blur-xl opacity-40 animate-pulse delay-700"></div>
            
            {/* The "Lounge" Vibe - Curved lines */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,80 Q50,100 100,80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <path d="M0,85 Q50,105 100,85" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </svg>
        </div>

        {/* Headlines */}
        <div className="relative z-30 -mt-20">
            <h2 className="text-[#ccff00] font-bold tracking-widest text-sm md:text-base uppercase mb-2 animate-in slide-in-from-bottom-8 duration-700">The First of its Kind Anywhere</h2>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl font-serif italic">
                Social Juice Bar<br/>
                <span className="font-sans not-italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#ccff00]">
                    & Lounge
                </span>
            </h1>
            <p className="max-w-xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed backdrop-blur-sm bg-black/20 p-4 rounded-2xl border border-white/5">
                A place to socialize and grab a nice refreshing real fruit drink. 
                <span className="text-[#ccff00] font-bold block mt-2">NO POWDERS! All natural.</span>
            </p>
        </div>

      </div>
    </div>
  );
};