import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Map, Calculator, BookmarkCheck, Globe2 } from "lucide-react";

export function TripPlannerBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#faf5eb] via-[#f7f0df] to-[#f4ebce] border border-[#e8dbb8] shadow-xs">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
        {/* Left text column */}
        <div className="lg:col-span-5 p-6 sm:p-8 space-y-4 z-10">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17324D] tracking-tight">
              Plan Your Trip
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed max-w-sm">
              Create a personalised itinerary, calculate realistic budgets, save
              your favourite destinations, and make your Europe trip stress-free.
            </p>
          </div>

          <Link
            href="/planner"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#17324D] hover:bg-[#23476c] text-white text-sm font-semibold transition-all shadow-sm active:scale-95 group"
          >
            <span>Start Planning</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Center / Background image: Traveler */}
        <div className="lg:col-span-4 relative h-48 lg:h-64 w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80"
            alt="Traveler with backpack looking over European historic city"
            fill
            sizes="(max-width: 1024px) 100vw, 35vw"
            className="object-cover object-center filter saturate-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f0df] via-transparent to-transparent lg:hidden" />
        </div>

        {/* Right Feature Checklist Card */}
        <div className="lg:col-span-3 p-5 sm:p-6 bg-white/85 backdrop-blur-xs lg:m-4 rounded-xl border border-white/70 shadow-xs space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-[#17324D]">
            <Map className="w-4 h-4 text-[#3478A8]" />
            <span>Custom Itinerary</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-semibold text-[#17324D]">
            <Calculator className="w-4 h-4 text-[#D6A85F]" />
            <span>Estimated Costs</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-semibold text-[#17324D]">
            <BookmarkCheck className="w-4 h-4 text-emerald-600" />
            <span>Save & Edit Anytime</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-semibold text-[#17324D]">
            <Globe2 className="w-4 h-4 text-[#3478A8]" />
            <span>Multi-Country Trips</span>
          </div>
        </div>
      </div>
    </section>
  );
}
