import React, { useState, useEffect } from 'react';
import { GoldParticles } from './GoldParticles';

interface EntranceDoorsProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const EntranceDoors: React.FC<EntranceDoorsProps> = ({ onOpen, isOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isFullyRevealed, setIsFullyRevealed] = useState(false);

  // Check for ?autostart=1
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('autostart') === '1') {
      setIsOpening(true);
      setTimeout(() => {
        setIsFullyRevealed(true);
        onOpen();
      }, 300);
    }
  }, [onOpen]);

  const handleTriggerOpen = () => {
    if (isOpening || isFullyRevealed) return;
    setIsOpening(true);
    // Trigger audio immediately on user tap gesture
    onOpen();

    setTimeout(() => {
      setIsFullyRevealed(true);
    }, 2400);
  };

  if (isFullyRevealed) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden select-none bg-[#0a0908] perspective-container transition-opacity duration-1000 ${
        isOpen && isFullyRevealed ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      role="dialog"
      aria-label="بوابة الدخول الملكية لبطاقة الزفاف"
      dir="rtl"
    >
      {/* Background Particles */}
      <GoldParticles density={40} className="z-20 pointer-events-none" />

      {/* Radiant light beam from behind the doors when opening */}
      <div
        className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-1000 pointer-events-none ${
          isOpening ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-[120vw] h-[120vh] bg-[radial-gradient(ellipse_at_center,_rgba(247,231,206,0.85)_0%,_rgba(212,175,55,0.4)_40%,_transparent_75%)] animate-pulse" />
      </div>

      {/* Dual Royal Golden Doors */}
      <div className={`relative w-full h-full flex ${isOpening ? 'doors-open' : ''}`}>
        {/* Right Golden Door (RTL primary door) */}
        <div
          className="door-left w-1/2 h-full relative z-30 flex flex-col justify-between p-4 sm:p-8 bg-[#12100e] border-l border-[#d4af37]/60 shadow-[5px_0_35px_rgba(0,0,0,0.85)]"
          style={{
            backgroundImage: `radial-gradient(circle at 100% 50%, rgba(212,175,55,0.15) 0%, transparent 60%),
                              linear-gradient(180deg, #161311 0%, #0d0c0a 100%)`,
          }}
        >
          {/* Ornate Gold Outer Border */}
          <div className="absolute inset-3 sm:inset-6 border border-[#d4af37]/40 pointer-events-none">
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#d4af37]" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]" />
          </div>

          {/* Door Top Crest */}
          <div className="relative pt-6 pr-4 flex items-center gap-2 opacity-80">
            <span className="text-sm font-ruqaa text-[#e5c158]">كريم & رضوى</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-[#d4af37] to-transparent" />
          </div>

          {/* Left Door Handle / Filigree Lock */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-40">
            <div className="w-9 h-28 sm:w-12 sm:h-36 rounded-r-full bg-gradient-to-b from-[#f3e5ab] via-[#d4af37] to-[#8c6710] shadow-[0_0_15px_rgba(212,175,55,0.5)] border border-[#fff2cc]/40 flex items-center justify-center">
              <div className="w-2 h-16 sm:w-3 sm:h-20 rounded-full bg-[#12100e]/40 border border-[#f3e5ab]/30" />
            </div>
          </div>

          {/* Subtle Bottom Pattern */}
          <div className="relative pb-6 pr-4 opacity-50 text-xs font-amiri text-[#d4af37]">
            حفل زفاف مبارك
          </div>
        </div>

        {/* Left Golden Door */}
        <div
          className="door-right w-1/2 h-full relative z-30 flex flex-col justify-between p-4 sm:p-8 bg-[#12100e] border-r border-[#d4af37]/60 shadow-[-5px_0_35px_rgba(0,0,0,0.85)]"
          style={{
            backgroundImage: `radial-gradient(circle at 0% 50%, rgba(212,175,55,0.15) 0%, transparent 60%),
                              linear-gradient(180deg, #161311 0%, #0d0c0a 100%)`,
          }}
        >
          {/* Ornate Gold Outer Border */}
          <div className="absolute inset-3 sm:inset-6 border border-[#d4af37]/40 pointer-events-none">
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#d4af37]" />
          </div>

          {/* Door Top Crest */}
          <div className="relative pt-6 pl-4 flex items-center justify-end gap-2 opacity-80">
            <div className="h-[1px] w-12 bg-gradient-to-r from-[#d4af37] to-transparent" />
            <span className="text-sm font-amiri text-[#e5c158]">٢٠٢٦</span>
          </div>

          {/* Subtle Bottom Pattern */}
          <div className="relative pb-6 pl-4 text-left opacity-50 text-xs font-amiri text-[#d4af37]">
            ١١ نوفمبر
          </div>
        </div>
      </div>

      {/* Center Interactive Seal & Golden Wedding Ring */}
      <div
        className={`absolute inset-0 z-40 flex flex-col items-center justify-center p-6 text-center transition-all duration-700 pointer-events-auto ${
          isOpening ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        {/* Romantic Lead Message */}
        <div className="mb-6 sm:mb-8 space-y-2 max-w-sm">
          <div className="inline-flex items-center justify-center gap-3 mb-1">
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="font-amiri text-sm tracking-wider text-[#f7e7ce]/90">
              دعوة زفاف ملكية
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-amiri text-[#fff8e7] leading-relaxed">
            دعوة خاصة بانتظاركم
          </h2>

          <p className="text-base sm:text-lg text-[#d8c3a5] font-ruqaa">
            كريم & رضوى
          </p>
        </div>

        {/* Interactive Center Ring with Soft Glow Effect */}
        <button
          onClick={handleTriggerOpen}
          aria-label="اضغط لفتح بطاقة دعوة الزفاف"
          className="group relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] p-4 rounded-full transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          {/* Ambient Glow Rings */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(212,175,55,0.4)_0%,_transparent_70%)] animate-pulse" />
          <div className="absolute -inset-4 rounded-full border border-[#d4af37]/30 animate-spin" style={{ animationDuration: '24s' }} />
          <div className="absolute -inset-8 rounded-full border border-[#d4af37]/15 animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />

          {/* Central Ring Icon / Medallion */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#8c6710] via-[#ffd700] to-[#fff2cc] shadow-[0_0_50px_rgba(212,175,55,0.6)] flex items-center justify-center animate-ring-breathe">
            {/* Inner Dark Core with Intertwined Golden Rings */}
            <div className="w-full h-full rounded-full bg-[#12100e] border border-[#f3e5ab]/50 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(212,175,55,0.25)_0%,_transparent_70%)]" />

              {/* Ornate Golden Wedding Rings Graphic */}
              <svg
                viewBox="0 0 100 100"
                className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_2px_8px_rgba(212,175,55,0.8)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Ring 1 (Groom's band) */}
                <ellipse
                  cx="42"
                  cy="50"
                  rx="26"
                  ry="26"
                  stroke="url(#goldGradient1)"
                  strokeWidth="5"
                  className="filter drop-shadow"
                />
                <ellipse
                  cx="42"
                  cy="50"
                  rx="22"
                  ry="22"
                  stroke="rgba(255,245,210,0.4)"
                  strokeWidth="1"
                />

                {/* Ring 2 (Bride's engagement ring) */}
                <ellipse
                  cx="58"
                  cy="50"
                  rx="24"
                  ry="24"
                  stroke="url(#goldGradient2)"
                  strokeWidth="4.5"
                />

                {/* Brilliant Diamond on Bride's Ring */}
                <polygon
                  points="58,22 64,26 58,32 52,26"
                  fill="#ffffff"
                  stroke="#ffd700"
                  strokeWidth="1"
                  className="animate-pulse"
                />
                {/* Diamond Sparkle Glint */}
                <circle cx="58" cy="26" r="2" fill="#fff" />
                <path d="M58 18 L58 34 M50 26 L66 26" stroke="rgba(255,255,255,0.8)" strokeWidth="0.8" />

                <defs>
                  <linearGradient id="goldGradient1" x1="20" y1="20" x2="70" y2="80" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#fff2cc" />
                    <stop offset="35%" stopColor="#ffd700" />
                    <stop offset="70%" stopColor="#aa7c11" />
                    <stop offset="100%" stopColor="#f3e5ab" />
                  </linearGradient>
                  <linearGradient id="goldGradient2" x1="30" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="40%" stopColor="#e5c158" />
                    <stop offset="80%" stopColor="#8c6710" />
                    <stop offset="100%" stopColor="#fff8e7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </button>

        {/* Call to action label */}
        <div className="mt-6 sm:mt-8 space-y-2 max-w-[92vw] mx-auto">
          <button
            onClick={handleTriggerOpen}
            className="w-auto px-6 py-3.5 rounded-full border border-[#d4af37]/80 bg-[#171412]/90 backdrop-blur-md text-xs sm:text-sm font-cairo font-semibold text-[#f7e7ce] hover:text-[#fff8e7] hover:border-[#d4af37] hover:bg-[#d4af37]/20 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.6)] active:scale-95 cursor-pointer flex items-center justify-center gap-2 mx-auto whitespace-nowrap shrink-0"
          >
            <span>اضغط لفتح بطاقة الدعوة</span>
            <svg
              className="w-4 h-4 text-[#d4af37] animate-bounce shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>

          <p className="text-xs text-[#a89a85] font-cairo font-light">
            ستبدأ الموسيقى ومراسم الاحتفال
          </p>
        </div>
      </div>
    </div>
  );
};
