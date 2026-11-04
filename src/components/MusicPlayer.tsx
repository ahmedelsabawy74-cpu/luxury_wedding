import React, { useState, useEffect } from 'react';
import { weddingAudio } from '../utils/audio';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  useEffect(() => {
    const unsubscribe = weddingAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
    setIsPlaying(weddingAudio.getIsPlaying());
    setVolume(weddingAudio.getVolume());
    return () => {
      unsubscribe();
    };
  }, []);

  const handleToggle = () => {
    weddingAudio.toggle();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    weddingAudio.setVolume(val);
  };

  return (
    <div className="fixed top-2.5 left-3 sm:top-3.5 sm:left-6 z-50 flex items-center gap-2" dir="rtl">
      {/* Expandable volume slider on hover/tap */}
      {showVolumeSlider && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161311]/95 backdrop-blur-md border border-[#d4af37]/40 shadow-lg text-xs text-[#f7e7ce] animate-fadeIn">
          <span className="text-[11px] font-cairo text-[#d4af37]">الصوت</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            aria-label="تعديل مستوى صوت موسيقى الزفاف"
            className="w-16 h-1 bg-[#2e261f] rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
          />
        </div>
      )}

      {/* Main Music Control Button */}
      <button
        onClick={handleToggle}
        onMouseEnter={() => setShowVolumeSlider(true)}
        onMouseLeave={() => setShowVolumeSlider(false)}
        aria-label={isPlaying ? 'إيقاف موسيقى الزفاف مؤقتاً' : 'تشغيل موسيقى الزفاف'}
        className="group relative min-w-[44px] min-h-[44px] sm:min-w-[48px] sm:min-h-[48px] px-2.5 sm:px-3 py-2 rounded-full bg-[#181412]/90 backdrop-blur-md border border-[#d4af37]/70 shadow-[0_4px_25px_rgba(0,0,0,0.7)] hover:border-[#d4af37] hover:bg-[#231d19] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
      >
        {/* Animated Sound Wave Bars when playing */}
        <div className="flex items-end gap-[3px] h-4 w-4 justify-center" aria-hidden="true">
          <span
            className={`w-[2.5px] bg-[#d4af37] rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-[pulse_1s_ease-in-out_infinite] h-3.5' : 'h-1.5 opacity-60'
            }`}
          />
          <span
            className={`w-[2.5px] bg-[#f7e7ce] rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-[pulse_0.7s_ease-in-out_infinite_0.2s] h-4' : 'h-2 opacity-60'
            }`}
          />
          <span
            className={`w-[2.5px] bg-[#d4af37] rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-[pulse_1.2s_ease-in-out_infinite_0.4s] h-2.5' : 'h-1 opacity-60'
            }`}
          />
        </div>

        {/* Text status for clarity */}
        <span className="text-xs font-cairo font-medium text-[#f7e7ce] pl-1 hidden xs:inline whitespace-nowrap">
          {isPlaying ? 'الموسيقى تعمل' : 'الموسيقى متوقفة'}
        </span>
      </button>
    </div>
  );
};
