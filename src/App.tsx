/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { EntranceDoors } from './components/EntranceDoors';
import { MusicPlayer } from './components/MusicPlayer';
import { GoldParticles } from './components/GoldParticles';
import { HeroSection } from './components/HeroSection';
import { InvitationMessage } from './components/InvitationMessage';
import { DateCountdown } from './components/DateCountdown';
import { PhotoGallery } from './components/PhotoGallery';
import { RomanticQuote } from './components/RomanticQuote';
import { VenueSection } from './components/VenueSection';
import { FinalInvitation } from './components/FinalInvitation';
import { weddingAudio } from './utils/audio';

export default function App() {
  const [hasOpenedInvitation, setHasOpenedInvitation] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenInvitation = () => {
    setHasOpenedInvitation(true);
    // Start romantic piano wedding music on entrance tap
    weddingAudio.start().catch(() => {
      // Audio autoplay restrictions handled safely
    });
  };

  return (
    <div
      className="min-h-screen bg-[#0f0e0d] text-[#f4eee6] selection:bg-[#d4af37]/30 selection:text-[#fff8e7] relative overflow-x-hidden font-cairo"
      dir="rtl"
    >
      {/* 1. Fullscreen Opening Screen with Golden Doors and Ring */}
      <EntranceDoors onOpen={handleOpenInvitation} isOpen={hasOpenedInvitation} />

      {/* 2. Floating Ambient Particles */}
      <GoldParticles density={30} className="z-10" />

      {/* 3. Floating Music Control */}
      {hasOpenedInvitation && <MusicPlayer />}

      {/* 4. Elegant Sticky Top Bar (Only visible after scrolling past hero or when opened) */}
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
          isScrolled && hasOpenedInvitation
            ? 'bg-[#12100e]/95 backdrop-blur-md border-b border-[#d4af37]/30 py-3 px-4 sm:px-8 shadow-lg'
            : 'opacity-0 pointer-events-none py-3 px-4 sm:px-8'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="text-lg sm:text-xl font-ruqaa text-[#fdfbf7] whitespace-nowrap shrink-0 hover:text-[#d4af37] transition-colors"
          >
            <span className="gold-text-gradient font-bold">كريم & رضوى</span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-cairo font-medium text-[#d8c3a5]">
            <a href="#invitation-message" className="hover:text-[#fff] transition-colors whitespace-nowrap">
              بطاقة الدعوة
            </a>
            <a href="#wedding-date" className="hover:text-[#fff] transition-colors whitespace-nowrap">
              الموعد والعد التنازلي
            </a>
            <a href="#gallery" className="hover:text-[#fff] transition-colors whitespace-nowrap">
              العروسان
            </a>
            <a href="#venue" className="hover:text-[#fff] transition-colors whitespace-nowrap">
              مكان الحفل
            </a>
          </nav>

          {/* Right actions: Desktop shows location CTA; padded to clear floating music button */}
          <div className="hidden sm:flex items-center gap-3 pl-14 sm:pl-16">
            <a
              href="#venue"
              className="px-4 py-1.5 rounded-full border border-[#d4af37] text-xs font-cairo font-medium text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0f0e0d] transition-all whitespace-nowrap shrink-0"
            >
              موقع القاعة
            </a>
          </div>
        </div>
      </header>

      {/* Main Invitation Content */}
      <main className="relative z-20">
        {/* Main Hero Section */}
        <HeroSection />

        {/* Dedicated Invitation Message Card */}
        <InvitationMessage />

        {/* Wedding Date & Live Countdown */}
        <DateCountdown />

        {/* Wedding Photo Gallery (Karim & Radwaa) */}
        <PhotoGallery />

        {/* Romantic Quote & Milestones */}
        <RomanticQuote />

        {/* Wedding Venue & Location */}
        <VenueSection />

        {/* Final Invitation Message & Blessings/RSVP */}
        <FinalInvitation />
      </main>
    </div>
  );
}
