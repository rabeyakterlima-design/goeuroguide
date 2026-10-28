import React from "react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Building2, Bed, Home, Hotel, Info } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "European Accommodation Guide & Lodging Styles — GoEuroGuide",
  description:
    "Expert guide to European accommodation options: boutique hotels, historic apartments, mountain chalets, and tourist city taxes.",
};

export default function AccommodationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Accommodation" }]} />

      <div className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17324D] tracking-tight">
          European Accommodation Guide
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          From historic Parisian boutique hotels and Tuscan agriturismi to Swiss alpine chalets,
          understand booking seasons, European room conventions, and mandatory municipal city taxes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#3478A8] flex items-center justify-center">
            <Hotel className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-[#17324D]">Boutique & City Hotels</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            European hotel rooms are often cozier than North American equivalents.
            Look for heritage architecture in city centers within walking distance of rail terminals.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Home className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-[#17324D]">Serviced Apartments</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Ideal for stays over 3 nights and families wanting kitchen facilities.
            Ensure local registration compliance with municipal rental regulations (e.g., Paris, Barcelona).
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <Bed className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-[#17324D]">Design Hostels</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Europe is famous for high-quality social hostels offering both private en-suite rooms
            and shared dormitories with modern co-working lounges.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
            <Building2 className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-[#17324D]">Agriturismi & Chalets</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Farm stays in Italy and traditional wooden chalets in the Alps provide immersive cultural experiences
            with locally sourced breakfast and alpine views.
          </p>
        </div>
      </div>

      {/* City Tax Notice */}
      <div className="bg-[#FAF8F3] rounded-2xl border border-[#e8dbb8] p-6 shadow-xs flex items-start gap-3.5">
        <Info className="w-5 h-5 text-[#3478A8] mt-0.5 flex-shrink-0" />
        <div className="space-y-1 text-xs sm:text-sm text-slate-700">
          <strong className="font-bold text-[#17324D]">
            Notice on Mandatory European City Taxes:
          </strong>
          <p>
            Most European municipalities (including Paris, Rome, Amsterdam, and Florence) levy a mandatory tourist tax
            (&euro;2 to &euro;10 per person per night) that is usually payable directly at the accommodation check-in/checkout
            and is excluded from online booking totals.
          </p>
        </div>
      </div>
    </div>
  );
}
