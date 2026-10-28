import React from "react";
import Link from "next/link";
import {
  Mountain,
  Landmark,
  Umbrella,
  Palette,
  Utensils,
  PiggyBank,
  Users,
  Compass,
} from "lucide-react";
import { TRAVEL_STYLES } from "@/lib/mock-data";

const iconMap: Record<string, React.ReactNode> = {
  Mountain: <Mountain className="w-5 h-5" />,
  Landmark: <Landmark className="w-5 h-5" />,
  Umbrella: <Umbrella className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Utensils: <Utensils className="w-5 h-5" />,
  PiggyBank: <PiggyBank className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
};

export function TravelStyles() {
  return (
    <section className="space-y-4">
      {/* Section Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#17324D] tracking-tight">
          Explore by Travel Style
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Find the perfect travel experience for you
        </p>
      </div>

      {/* Grid of 8 Travel Styles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
        {TRAVEL_STYLES.map((style) => (
          <Link
            key={style.id}
            href={style.href}
            className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#3478A8]/40 hover:-translate-y-0.5 transition-all text-center"
          >
            {/* Circular Icon Container */}
            <div
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2.5 transition-transform group-hover:scale-110 ${style.color}`}
            >
              {iconMap[style.iconName]}
            </div>

            {/* Label */}
            <span className="text-xs font-semibold text-[#17324D] group-hover:text-[#3478A8] transition-colors leading-tight">
              {style.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
