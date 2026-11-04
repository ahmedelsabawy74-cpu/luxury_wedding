import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24 overflow-hidden" dir="rtl">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_40%,_rgba(212,175,55,0.12)_0%,_rgba(15,14,13,0)_70%)]" />

      {/* Decorative Floral Crest Top */}
      <div className="relative mb-6 sm:mb-8 animate-fadeIn">
        <svg
          viewBox="0 0 200 40"
          className="w-36 sm:w-48 h-8 sm:h-10 mx-auto text-[#d4af37]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left Laurel */}
          <path
            d="M80 20 C60 18, 40 12, 10 24 M70 18 C55 10, 35 15, 25 8 M60 21 C45 28, 30 25, 15 32"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Center Monogram Emblem */}
          <circle cx="100" cy="20" r="14" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="20" r="11" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <text
            x="100"
            y="24"
            textAnchor="middle"
            fill="currentColor"
            fontSize="10"
            fontFamily="'Aref Ruqaa', cursive"
            fontWeight="bold"
          >
            ك&ر
          </text>
          {/* Right Laurel */}
          <path
            d="M120 20 C140 18, 160 12, 190 24 M130 18 C145 10, 165 15, 175 8 M140 21 C155 28, 170 25, 185 32"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Top Blessing & Tagline */}
      <div className="space-y-3 mb-6 sm:mb-8">
        <p className="font-amiri text-base sm:text-lg md:text-xl text-[#e5c158]">
          بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ
        </p>
        <p className="font-amiri text-sm sm:text-base md:text-lg text-[#d8c3a5]">
          معاً بمباركة عائلتيهما الكريمتين
        </p>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
      </div>

      {/* Main Focus: Karim & Radwaa */}
      <div className="relative my-4 sm:my-6 space-y-2">
        <h1 className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-ruqaa font-bold tracking-normal text-[#fdfbf7] drop-shadow-[0_4px_30px_rgba(212,175,55,0.35)] leading-tight">
          <span className="block gold-text-gradient py-1">كريم</span>
          <span className="block font-ruqaa text-3xl xs:text-4xl sm:text-6xl text-[#d4af37] my-[-0.15em] relative z-10">
            &
          </span>
          <span className="block gold-text-gradient py-1">رضوى</span>
        </h1>
      </div>

      {/* Invitation Quote */}
      <div className="mt-6 sm:mt-8 max-w-xl mx-auto px-4">
        <p className="font-amiri text-xl sm:text-2xl md:text-3xl text-[#f3e5ab]/95 leading-relaxed">
          &ldquo;يسرنا ويسعدنا دعوتكم لمشاركتنا فرحة العمر وبداية رحلتنا معاً.&rdquo;
        </p>
      </div>

      {/* Quick Event Summary Badges */}
      <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#d4af37] font-cairo">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
          <span className="text-[#f7e7ce]">الخميس، ١١ نوفمبر ٢٠٢٦</span>
        </div>
        <span className="text-[#d4af37]/40">|</span>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
          <span className="text-[#f7e7ce]">حلوان دار المهندسين العسكريين </span>
        </div>
        <a href="https://maps.app.goo.gl/V5Hgs8njN1bSCTuz7?g_st=aw">اضغط هنا لزياره الموقع 
        </a>
      </div>

      {/* Downward Scroll Cue */}
      <div className="mt-12 sm:mt-16 flex flex-col items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
        <span className="text-xs font-cairo text-[#f7e7ce]/80">استعراض تفاصيل الدعوة</span>
        <a
          href="#invitation-message"
          aria-label="الانتقال إلى نص بطاقة الدعوة"
          className="p-2 text-[#d4af37] hover:text-[#fff2cc] transition-colors"
        >
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};
