import React, { useState, useEffect } from 'react';
import { calculateTimeRemaining, padZero, WEDDING_DATE_ISO } from '../utils/countdown';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';

export const DateCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeRemaining(WEDDING_DATE_ISO));
  const [showCalendarOptions, setShowCalendarOptions] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining(WEDDING_DATE_ISO));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'يوم', value: timeLeft.days.toString() },
    { label: 'ساعة', value: padZero(timeLeft.hours) },
    { label: 'دقيقة', value: padZero(timeLeft.minutes) },
    { label: 'ثانية', value: padZero(timeLeft.seconds) },
  ];

  return (
    <section id="wedding-date" className="py-16 sm:py-24 px-4 sm:px-6 relative" dir="rtl">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="space-y-3 mb-10">
          <p className="text-xs sm:text-sm font-cairo font-semibold text-[#d4af37]">
            احفظوا التاريخ
          </p>

          <h2 className="text-3xl sm:text-5xl font-amiri text-[#fdfbf7] font-bold">
            يوم الخميس
          </h2>

          <p className="text-3xl sm:text-5xl font-ruqaa text-[#d4af37] font-bold tracking-wide">
            ١١ نوفمبر ٢٠٢٦
          </p>

          <p className="text-xs sm:text-sm text-[#bdae9c] font-cairo font-light pt-1">
            القاهرة، مصر · يبدأ استقبال الضيوف الكرام في تمام الساعة ٦:٠٠ مساءً
          </p>
        </div>

        {/* Live Countdown Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto my-8 sm:my-12">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="relative p-4 sm:p-6 rounded-xl bg-gradient-to-b from-[#181412] to-[#12100e] border border-[#d4af37]/40 shadow-[0_8px_30px_rgba(0,0,0,0.6)] group hover:border-[#d4af37] transition-all duration-300"
            >
              {/* Subtle Corner Accent */}
              <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#d4af37]/50" />
              <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#d4af37]/50" />

              <div className="font-cairo text-3xl sm:text-5xl font-bold text-[#f7e7ce] tabular-nums tracking-tight">
                {unit.value}
              </div>

              <div className="mt-2 text-xs sm:text-sm font-cairo font-medium text-[#d4af37]">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        {/* Add to Calendar Action */}
        <div className="relative inline-block mt-4">
          <button
            onClick={() => setShowCalendarOptions(!showCalendarOptions)}
            aria-expanded={showCalendarOptions}
            className="px-7 py-3.5 rounded-full border border-[#d4af37] bg-[#1a1613] text-[#f7e7ce] text-xs sm:text-sm font-cairo font-semibold hover:bg-[#d4af37] hover:text-[#0f0e0d] transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.2)] active:scale-95 cursor-pointer flex items-center gap-2.5 mx-auto"
          >
            <svg className="w-4 h-4 text-[#d4af37] group-hover:text-[#0f0e0d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>إضافة الموعد إلى التقويم</span>
          </button>

          {showCalendarOptions && (
            <div className="absolute right-1/2 translate-x-1/2 mt-3 w-56 rounded-xl bg-[#1c1815] border border-[#d4af37]/60 shadow-2xl p-2 z-30 flex flex-col gap-1 animate-fadeIn text-right">
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg text-xs font-cairo font-medium text-[#f7e7ce] hover:bg-[#d4af37]/20 hover:text-[#fff] transition-colors flex items-center justify-between"
              >
                <span>تقويم Google</span>
                <span className="text-[#d4af37]">↗</span>
              </a>
              <button
                onClick={downloadIcsFile}
                className="px-4 py-2.5 rounded-lg text-xs font-cairo font-medium text-[#f7e7ce] hover:bg-[#d4af37]/20 hover:text-[#fff] transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>تقويم Apple / Outlook</span>
                <span className="text-[#d4af37]">↓</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
