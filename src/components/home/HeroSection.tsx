import React from "react";
import Image from "next/image";
import { DestinationSearchWidget } from "./DestinationSearchWidget";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-8 pb-16 lg:pb-24">
      {/* Hero Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=85"
          alt="Panoramic European coastal town with scenic mountains and Mediterranean architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.88]"
        />
        {/* Gradient overlay for contrast and luxury aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/90 via-[#17324D]/40 to-[#17324D]/25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges & Script Accent */}
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D6A85F]" />
            <span>Your Complete Guide to Exploring Europe</span>
          </div>

          {/* Handwritten Tagline Script */}
          <div className="hidden md:block transform rotate-[-3deg] text-right">
            <span className="font-serif italic text-white/95 text-xl tracking-wide font-light drop-shadow-md">
              More Than Just a Trip ♡
            </span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-3xl mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-sm font-sans">
            Discover Europe.
            <br />
            <span className="text-[#FAF8F3]">Plan Your Perfect Journey.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-100/90 leading-relaxed max-w-2xl font-light">
            Explore beautiful destinations, discover essential travel information,
            verified entry policies, and create your own European adventure.
          </p>
        </div>

        {/* Embedded Interactive Search Widget */}
        <div className="w-full mt-4 max-w-5xl">
          <DestinationSearchWidget />
        </div>
      </div>
    </section>
  );
}
