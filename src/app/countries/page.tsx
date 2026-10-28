import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { SAMPLE_COUNTRIES } from "@/lib/mock-data";
import { MapPin, Globe, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore European Countries — Destination Directory",
  description:
    "Browse European countries with official entry rules, Schengen information, regional guides, travel budgets, and verified tourism links.",
};

export default function CountriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Countries" }]} />

      {/* Page Header */}
      <div className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17324D] tracking-tight">
          Explore European Countries
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          Comprehensive guides to European nations featuring official tourism portals,
          verified Schengen & EU membership status, emergency contacts, and practical travel logistics.
        </p>
      </div>

      {/* Grid of Countries */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_COUNTRIES.map((country) => (
          <div
            key={country.id}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col group"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
              <Image
                src={country.cover_image}
                alt={`${country.name} landscape`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 flex items-center gap-1.5">
                {country.is_schengen && (
                  <span className="bg-[#17324D]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    Schengen
                  </span>
                )}
                {country.is_eu && (
                  <span className="bg-[#3478A8]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    EU Member
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-[#17324D] group-hover:text-[#3478A8] transition-colors">
                    {country.name}
                  </h2>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {country.region}
                  </span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {country.description}
                </p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Capital: <strong className="text-slate-700">{country.capital}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-slate-400" />
                  <span>Currency: <strong className="text-slate-700">{country.currency.code} ({country.currency.symbol})</strong></span>
                </div>
              </div>

              {/* Action Link */}
              <Link
                href={`/countries/${country.slug}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 group-hover:bg-[#17324D] text-[#17324D] group-hover:text-white text-xs font-semibold transition-colors"
              >
                <span>View Country Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
