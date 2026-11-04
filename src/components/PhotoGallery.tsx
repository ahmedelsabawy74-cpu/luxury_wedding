import React, { useState } from 'react';

interface PersonPortrait {
  name: string;
  role: string;
  imageSrc: string;
  fallbackText: string;
  quote: string;
}

export const PhotoGallery: React.FC = () => {
  const [groomImgError, setGroomImgError] = useState(false);
  const [brideImgError, setBrideImgError] = useState(false);

  const groom: PersonPortrait = {
    name: 'كريم',
    role: 'العريس',
    imageSrc: '../../public/images/groom.jpeg',
    fallbackText: 'ك',
    quote: 'في عينيها وجدتُ سكينتي، وموطني، وأجمل أقداري.',
  };

  const bride: PersonPortrait = {
    name: 'رضوى',
    role: 'العروس',
    imageSrc: '/images/bride.jpeg',
    fallbackText: 'ر',
    quote: 'معه أزهرت أحلامي، وبجواره تبدأ أجمل حكايات السعادة.',
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-6 relative" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-cairo font-semibold text-[#d4af37]">
            العروسان
          </p>
          <h2 className="text-4xl sm:text-6xl font-ruqaa text-[#fdfbf7] font-bold">
            كريم & رضوى
          </h2>
          <p className="text-base sm:text-xl text-[#bdae9c] font-amiri max-w-lg mx-auto leading-relaxed">
            قلبان اجتمعا على المودة والرحمة، ليكتبا معاً فصلاً جديداً من فصول السعادة الأبدية.
          </p>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto pt-2" />
        </div>

        {/* Two Separate Photo Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-stretch">
          {/* Karim - The Groom */}
          <div className="flex flex-col items-center">
            {/* Elegant Portrait Frame */}
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-[#221c17] via-[#161311] to-[#0f0e0d] border border-[#d4af37]/50 shadow-[0_15px_40px_rgba(0,0,0,0.7)] group overflow-hidden">
              {/* Ornate Gold Filigree Corners */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#d4af37] z-20 pointer-events-none" />
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#d4af37] z-20 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#d4af37] z-20 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#d4af37] z-20 pointer-events-none" />

              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#161311] flex items-center justify-center">
                {!groomImgError ? (
                  <img
                    src={groom.imageSrc}
                    alt="كريم - العريس"
                    onError={() => setGroomImgError(true)}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter brightness-[0.98]"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-tr from-[#1b1713] to-[#251e18]">
                    <div className="w-20 h-20 rounded-full border-2 border-[#d4af37] flex items-center justify-center mb-4 text-3xl font-ruqaa text-[#d4af37]">
                      {groom.fallbackText}
                    </div>
                    <span className="font-ruqaa text-3xl text-[#f7e7ce]">{groom.name}</span>
                    <span className="text-xs font-cairo text-[#d4af37] mt-1">{groom.role}</span>
                  </div>
                )}

                {/* Subtle gradient scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Overlaid Role Badge */}
                <div className="absolute bottom-4 left-4 right-4 text-center z-10">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#161311]/85 backdrop-blur-md border border-[#d4af37]/40 text-xs font-cairo font-semibold text-[#d4af37]">
                    العريس
                  </span>
                </div>
              </div>
            </div>

            {/* Groom Details & Caption */}
            <div className="mt-6 text-center max-w-sm px-4">
              <h3 className="text-3xl sm:text-4xl font-ruqaa text-[#fdfbf7]">
                {groom.name}
              </h3>
              <p className="mt-1 text-sm text-[#d4af37] font-cairo font-medium">
                العريس
              </p>
              <p className="mt-3 text-base sm:text-lg text-[#d8c3a5] font-amiri leading-relaxed">
                &ldquo;{groom.quote}&rdquo;
              </p>
            </div>
          </div>

          {/* Radwaa - The Bride */}
          <div className="flex flex-col items-center">
            {/* Elegant Portrait Frame */}
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-[#221c17] via-[#161311] to-[#0f0e0d] border border-[#d4af37]/50 shadow-[0_15px_40px_rgba(0,0,0,0.7)] group overflow-hidden">
              {/* Ornate Gold Filigree Corners */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#d4af37] z-20 pointer-events-none" />
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#d4af37] z-20 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#d4af37] z-20 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#d4af37] z-20 pointer-events-none" />

              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#161311] flex items-center justify-center">
                {!brideImgError ? (
                  <img
                    src={bride.imageSrc}
                    alt="رضوى - العروس"
                    onError={() => setBrideImgError(true)}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter brightness-[0.98]"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-tr from-[#1b1713] to-[#251e18]">
                    <div className="w-20 h-20 rounded-full border-2 border-[#d4af37] flex items-center justify-center mb-4 text-3xl font-ruqaa text-[#d4af37]">
                      {bride.fallbackText}
                    </div>
                    <span className="font-ruqaa text-3xl text-[#f7e7ce]">{bride.name}</span>
                    <span className="text-xs font-cairo text-[#d4af37] mt-1">{bride.role}</span>
                  </div>
                )}

                {/* Subtle gradient scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Overlaid Role Badge */}
                <div className="absolute bottom-4 left-4 right-4 text-center z-10">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#161311]/85 backdrop-blur-md border border-[#d4af37]/40 text-xs font-cairo font-semibold text-[#d4af37]">
                    العروس
                  </span>
                </div>
              </div>
            </div>

            {/* Bride Details & Caption */}
            <div className="mt-6 text-center max-w-sm px-4">
              <h3 className="text-3xl sm:text-4xl font-ruqaa text-[#fdfbf7]">
                {bride.name}
              </h3>
              <p className="mt-1 text-sm text-[#d4af37] font-cairo font-medium">
                العروس
              </p>
              <p className="mt-3 text-base sm:text-lg text-[#d8c3a5] font-amiri leading-relaxed">
                &ldquo;{bride.quote}&rdquo;
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
