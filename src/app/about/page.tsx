import React from "react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About GoEuroGuide — Independent European Travel Information",
  description:
    "Learn about GoEuroGuide's mission to provide verified, reliable, and accessible European travel intelligence.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "About Us" }]} />

      <div className="space-y-3 border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17324D] tracking-tight">
          About GoEuroGuide
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed font-light">
          Your trusted European travel information and trip-planning resource.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6 text-[#263238] leading-relaxed text-sm sm:text-base">
        <h2 className="text-xl font-bold text-[#17324D]">Our Mission</h2>
        <p>
          GoEuroGuide was established to provide travelers worldwide with reliable, verified, and practical
          travel intelligence across the European continent. Navigating European entry rules, high-speed rail
          corridors, and multi-country budgets can be complex; we simplify this journey through structured data,
          clear editorial standards, and transparent official resources.
        </p>

        <h2 className="text-xl font-bold text-[#17324D] pt-4">Fact-Checking & Integrity</h2>
        <p>
          We rely directly on official sources — including the European Commission, Schengen consular portals,
          national tourist authorities, and licensed public transport operators. We clearly display verification
          timestamps on all regulatory content and separate verified official data from general travel estimates.
        </p>

        <h2 className="text-xl font-bold text-[#17324D] pt-4">Free-Tier First Philosophy</h2>
        <p>
          GoEuroGuide is built to be accessible to everyone without requiring paid subscriptions, paywalls,
          or dark patterns. Our itinerary planning tools and budget calculators are completely free for all travelers.
        </p>
      </div>
    </div>
  );
}
