import React from 'react';

export const InvitationMessage: React.FC = () => {
  return (
    <section id="invitation-message" className="py-16 sm:py-24 px-4 sm:px-6 relative" dir="rtl">
      <div className="max-w-3xl mx-auto">
        {/* Luxury Invitation Card Envelope Card */}
        <div className="relative p-6 sm:p-12 md:p-16 rounded-2xl bg-gradient-to-b from-[#181412] to-[#12100e] border border-[#d4af37]/40 shadow-[0_15px_50px_rgba(0,0,0,0.7)] text-center overflow-hidden">
          {/* Ornate Gold Corner Ornaments */}
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#d4af37]/70 pointer-events-none" />
          <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#d4af37]/70 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#d4af37]/70 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#d4af37]/70 pointer-events-none" />

          {/* Inner hairline frame */}
          <div className="absolute inset-5 sm:inset-8 border border-[#d4af37]/20 pointer-events-none" />

          {/* Monogram Seal Top */}
          <div className="relative mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#997312] via-[#e5c158] to-[#fff2cc] p-[2px] shadow-[0_0_20px_rgba(212,175,55,0.4)] mb-8 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#181412] flex items-center justify-center border border-[#d4af37]/40">
              <span className="font-ruqaa font-bold text-base sm:text-lg text-[#f7e7ce]">
                ك & ر
              </span>
            </div>
          </div>

          {/* Section Kicker */}
          <p className="text-xs sm:text-sm font-cairo text-[#d4af37] font-semibold mb-6">
            بطاقة الدعوة الرسمية
          </p>

          {/* Requested Message in Royal Arabic */}
          <div className="space-y-6 sm:space-y-8 font-amiri text-2xl sm:text-3xl md:text-4xl text-[#f7e7ce] leading-relaxed max-w-xl mx-auto">
            <p className="text-[#fff8e7] font-semibold">
              بقلوبٍ تفيضُ محبةً وسروراً،
            </p>

            <div className="w-16 h-[1px] bg-[#d4af37]/40 mx-auto" />

            <p>
              نتشرف بدعوتكم لحضور حفل زفافنا ومشاركتنا بهجة هذا اليوم المبارك.
            </p>

            <p>
              حضوركم الكريم يزيد فرحتنا بهجةً، ويزدان به عرسنا نوراً وسروراً.
            </p>

            <p className="text-[#f3e5ab] font-bold">
              لا نكتمل إلا بوجودكم، وبانتظار أن نسعد بلقائكم لنحتفل معاً بهذه البداية السعيدة.
            </p>
          </div>

          {/* Bottom Filigree Divider */}
          <div className="mt-10 sm:mt-12 flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4af37]/60" />
            <div className="w-2 h-2 rotate-45 border border-[#d4af37]" />
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4af37]/60" />
          </div>
        </div>
      </div>
    </section>
  );
};
