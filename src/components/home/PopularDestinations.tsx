import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SAMPLE_COUNTRIES } from "@/lib/mock-data";

export function PopularDestinations() {
  return (
    <section className="space-y-4">
      {/* Section Header */}
      <div className="flex items-end justify-between border-b border-slate-200/80 pb-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#17324D] tracking-tight">
            Popular Destinations
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Explore some of Europe&apos;s most loved destinations
          </p>
        </div>
        <Link
          href="/countries"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#3478A8] hover:text-[#17324D] transition-colors group flex-shrink-0"
        >
          <span>View All Countries</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid of 6 Country Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {SAMPLE_COUNTRIES.map((country) => (
          <Link
            key={country.id}
            href={`/countries/${country.slug}`}
            className="group relative bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
          >
            {/* Card Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
              <Image
                src={country.cover_image}
                alt={`${country.name} travel destination`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Card Footer Content */}
            <div className="p-3 sm:p-3.5 flex items-center justify-between bg-white flex-1">
              <div>
                <h3 className="font-bold text-sm sm:text-base text-[#17324D] group-hover:text-[#3478A8] transition-colors">
                  {country.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium truncate max-w-[120px] sm:max-w-[150px]">
                  {country.tagline}
                </p>
              </div>

              {/* Circular Action Arrow */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f0f7fc] text-[#3478A8] group-hover:bg-[#3478A8] group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
