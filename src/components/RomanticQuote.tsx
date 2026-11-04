import React from 'react';

export const RomanticQuote: React.FC = () => {
  const milestones = [
    {
      title: 'لقاء القلوب',
      description: 'صدفةٌ دافئة جمعت القلوب، وبدأت منها رحلة الود والوفاء والضحكات الصادقة.',
      icon: '✦',
    },
    {
      title: 'وعد العمر',
      description: 'يدٌ تعاهدت بالمحبة والرحمة، ونبضٌ اتفق على أن يكملا معاً دروب الحياة بكل تفاصيلها.',
      icon: '💍',
    },
    {
      title: 'ليلة العمر',
      description: 'في ليلة الحلم، نتوّج حبنا بالزواج المبارك بحضور ومشاركة أغلى الأهل والأحباب.',
      icon: '🕊️',
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden" dir="rtl">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(212,175,55,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Decorative Romantic Flourish */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#d4af37]" />
          <span className="text-xl sm:text-2xl text-[#d4af37]">❦</span>
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#d4af37]" />
        </div>

        {/* The Exact Quote in Luxury Arabic */}
        <blockquote className="my-6 sm:my-8 px-4">
          <p className="text-3xl sm:text-5xl md:text-6xl font-amiri text-[#fdfbf7] font-bold leading-normal drop-shadow-[0_2px_15px_rgba(212,175,55,0.25)]">
            &ldquo;قلبان، وحبٌّ واحد، وبدايةٌ لأجمل حكاية.&rdquo;
          </p>
        </blockquote>

        <p className="text-base sm:text-lg font-ruqaa text-[#d4af37] mt-4">
          كريم & رضوى · معاً إلى الأبد
        </p>

        {/* Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 sm:mt-16 text-right">
          {milestones.map((item, index) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-gradient-to-b from-[#181412] to-[#12100e] border border-[#d4af37]/30 hover:border-[#d4af37]/70 transition-all duration-300 relative group"
            >
              <div className="text-2xl mb-3 text-[#d4af37]">{item.icon}</div>
              <h4 className="font-amiri text-xl text-[#f7e7ce] font-bold mb-2 flex items-center justify-between">
                <span>{item.title}</span>
                <span className="text-xs font-cairo text-[#d4af37]/70">
                  {['٠١', '٠٢', '٠٣'][index]}
                </span>
              </h4>
              <p className="text-xs sm:text-sm text-[#bdae9c] leading-relaxed font-cairo font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
