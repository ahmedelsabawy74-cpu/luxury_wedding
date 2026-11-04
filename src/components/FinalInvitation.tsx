import React, { useState, useEffect } from 'react';

interface Blessing {
  id: string;
  name: string;
  status: 'attending' | 'wishes';
  message: string;
  timestamp: string;
}

const DEFAULT_BLESSINGS: Blessing[] = [
  {
    id: '1',
    name: 'أحمد والعائلة',
    status: 'attending',
    message: 'ألف مبروك للعروسين الغاليين كريم ورضوى! بارك الله لكما وبارك عليكما وجمع بينكما في خير وسعادة دائمة.',
    timestamp: 'القاهرة، مصر',
  },
  {
    id: '2',
    name: 'نور ويوسف',
    status: 'attending',
    message: 'أجمل التهاني القلبية لأحلى عروسين.. نتمنى لكما حياة مديدة ملؤها المودة والرحمة والهناء، وفي انتظار لقائكم في قاعة حلوان!',
    timestamp: 'الإسكندرية، مصر',
  },
];

export const FinalInvitation: React.FC = () => {
  const [blessings, setBlessings] = useState<Blessing[]>(() => {
    try {
      const stored = localStorage.getItem('wedding_blessings_ar');
      return stored ? JSON.parse(stored) : DEFAULT_BLESSINGS;
    } catch {
      return DEFAULT_BLESSINGS;
    }
  });

  const [guestName, setGuestName] = useState('');
  const [attendance, setAttendance] = useState<'attending' | 'wishes'>('attending');
  const [guestMessage, setGuestMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('wedding_blessings_ar', JSON.stringify(blessings));
    } catch {
      // Ignored
    }
  }, [blessings]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    const newBlessing: Blessing = {
      id: Date.now().toString(),
      name: guestName.trim(),
      status: attendance,
      message: guestMessage.trim() || 'نسأل الله لكما حياة عامرة بالمودة والرحمة والبركة!',
      timestamp: 'الآن',
    };

    setBlessings([newBlessing, ...blessings]);
    setSubmittedMessage(`شكراً لك يا ${guestName.trim()}! تم تسجيل تأكيد حضورك ومباركتك الكريمة بنجاح.`);
    setGuestName('');
    setGuestMessage('');

    setTimeout(() => {
      setSubmittedMessage('');
    }, 6000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 sm:pt-24 pb-12 px-4 sm:px-6 relative bg-gradient-to-b from-[#12100e] via-[#0d0c0b] to-[#070605] border-t border-[#d4af37]/30" dir="rtl">
      {/* Decorative Top Divider */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#12100e] border border-[#d4af37]/60 flex items-center justify-center shadow-lg">
        <span className="text-[#d4af37] text-lg font-serif">❦</span>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Exact Section Headings in Arabic */}
        <div className="space-y-4 mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-cairo font-semibold text-[#d4af37]">
            بكل حب وامتنان
          </p>

          <h2 className="text-3xl sm:text-5xl font-amiri text-[#fdfbf7] font-bold leading-tight">
            حضوركم شرفٌ لنا وفرحةٌ تملأ قلوبنا
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#d8c3a5] font-amiri leading-relaxed pt-2">
            شكراً لكم لأنكم جزءٌ من فرحتنا وسعادتنا، ونتطلع بكل محبة للاحتفال معكم بهذه اللحظات الخالدة.
          </p>
        </div>

        {/* Closing Signature */}
        <div className="my-8 sm:my-10 space-y-1">
          <p className="font-amiri text-lg sm:text-2xl text-[#d4af37]/90">
            مع كامل محبتنا وتقديرنا،
          </p>
          <p className="text-4xl sm:text-6xl font-ruqaa font-bold gold-text-gradient py-2">
            كريم & رضوى
          </p>
        </div>

        {/* Guest RSVP & Warm Blessings Form */}
        <div className="max-w-xl mx-auto my-12 p-6 sm:p-8 rounded-2xl bg-[#171310] border border-[#d4af37]/40 shadow-2xl text-right">
          <div className="text-center mb-6">
            <h3 className="font-amiri text-2xl sm:text-3xl font-bold text-[#f7e7ce]">
              إرسال المباركات
            </h3>
          </div>

          {submittedMessage && (
            <div className="mb-6 p-4 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/60 text-xs sm:text-sm text-[#f7e7ce] font-cairo text-center animate-fadeIn">
              ✨ {submittedMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="guest-name" className="block text-xs font-cairo font-semibold text-[#d4af37] mb-1.5">
                الاسم الكريم *
              </label>
              <input
                id="guest-name"
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="مثال: طارق & مريم"
                className="w-full px-4 py-3 rounded-xl bg-[#110f0e] border border-[#d4af37]/30 text-sm text-[#f7e7ce] placeholder-[#7d7063] font-cairo focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
              />
            </div>

            <div>
              <label className="block text-xs font-cairo font-semibold text-[#d4af37] mb-2">
                هل ستشرفنا بالحضور؟
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setAttendance('attending')}
                  className={`py-3 px-3 rounded-xl border text-xs sm:text-sm font-cairo font-medium transition-all text-center cursor-pointer min-h-[44px] flex items-center justify-center gap-1.5 ${
                    attendance === 'attending'
                      ? 'bg-[#d4af37] text-[#0f0e0d] border-[#d4af37] font-bold shadow-md'
                      : 'bg-[#110f0e] text-[#d8c3a5] border-[#d4af37]/30 hover:border-[#d4af37]/60'
                  }`}
                >
                  <span>يشرفني الحضور بكل سرور</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAttendance('wishes')}
                  className={`py-3 px-3 rounded-xl border text-xs sm:text-sm font-cairo font-medium transition-all text-center cursor-pointer min-h-[44px] flex items-center justify-center gap-1.5 ${
                    attendance === 'wishes'
                      ? 'bg-[#d4af37] text-[#0f0e0d] border-[#d4af37] font-bold shadow-md'
                      : 'bg-[#110f0e] text-[#d8c3a5] border-[#d4af37]/30 hover:border-[#d4af37]/60'
                  }`}
                >
                  <span>أبارك لكم من بعيد بكل حب</span>
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="guest-message" className="block text-xs font-cairo font-semibold text-[#d4af37] mb-1.5">
                كلمة مباركة أو دعوة طيبة للعروسين (اختياري)
              </label>
              <textarea
                id="guest-message"
                rows={3}
                value={guestMessage}
                onChange={(e) => setGuestMessage(e.target.value)}
                placeholder="اكتب تهنئتك ودعواتك الصادقة للعروسين كريم ورضوى..."
                className="w-full px-4 py-3 rounded-xl bg-[#110f0e] border border-[#d4af37]/30 text-sm text-[#f7e7ce] placeholder-[#7d7063] font-cairo focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-[#0f0e0d] font-cairo font-bold text-xs sm:text-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-[0.99] transition-all cursor-pointer min-h-[48px]"
            >
              تأكيد الرد وإرسال المباركة
            </button>
          </form>

          {/* Guestbook Wishes Stream */}
          {blessings.length > 0 && (
            <div className="mt-8 pt-6 border-t border-[#d4af37]/20">
              <h4 className="text-xs font-cairo font-semibold text-[#d4af37] mb-3">
                سجل تهاني ومباركات الأحباب ({blessings.length})
              </h4>
              <div className="space-y-3 max-h-56 overflow-y-auto pl-1">
                {blessings.map((b) => (
                  <div key={b.id} className="p-3 rounded-lg bg-[#110f0e]/80 border border-[#d4af37]/20 text-xs font-cairo">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[#f7e7ce]">{b.name}</span>
                      <span className="text-[11px] text-[#d4af37]">
                        {b.status === 'attending' ? 'حاضر بحب' : 'تهنئة من القلب'}
                      </span>
                    </div>
                    <p className="text-[#d8c3a5] font-amiri text-base leading-relaxed">
                      &ldquo;{b.message}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Back to top button */}
        <div className="mt-8">
          <button
            onClick={scrollToTop}
            aria-label="العودة إلى أعلى بطاقة الدعوة"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#d4af37]/30 hover:border-[#d4af37] text-xs font-cairo text-[#d8c3a5] hover:text-[#fff] transition-all cursor-pointer"
          >
            <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>العودة إلى الأعلى</span>
          </button>
        </div>

        {/* Copyright & Info */}
        <div className="mt-12 pt-6 border-t border-[#d4af37]/15 text-xs font-cairo text-[#a89a85]/70 space-y-1">
          <p className="font-amiri text-sm font-bold">كريم & رضوى · حفل زفاف مبارك</p>
          <p className="font-light text-[11px]">الخميس، ١١ نوفمبر ٢٠٢٦ · قاعة حلوان، القاهرة، مصر</p>
        </div>
      </div>
    </footer>
  );
};
