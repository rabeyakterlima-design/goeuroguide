"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  variant = "light",
  className = "",
  size = "md",
}: LogoProps) {
  // Dimensions
  const heightClasses = {
    sm: "h-9",
    md: "h-11",
    lg: "h-14",
  };

  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg transition-transform ${className}`}
      aria-label="GoEuroGuide Home - Europe Travel Information"
    >
      {/* Brand Icon & Logo Graphic */}
      <div className={`relative ${heightClasses[size]} aspect-square rounded-full overflow-hidden flex-shrink-0 bg-white shadow-xs border ${isDark ? 'border-navy-700' : 'border-slate-200'}`}>
        <Image
          src="/images/logo.jpg"
          alt="GoEuroGuide Landmark Icon"
          fill
          sizes="60px"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>

      {/* Brand Text & Tagline */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center font-bold tracking-tight text-xl md:text-2xl font-sans">
          <span className={isDark ? "text-white" : "text-[#17324D]"}>Go</span>
          <span className="text-[#D6A85F]">Euro</span>
          <span className={isDark ? "text-slate-100" : "text-[#17324D]"}>Guide</span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className={`h-[1px] w-3 ${isDark ? "bg-slate-400" : "bg-[#17324D]/40"}`}></span>
          <span
            className={`text-[9.5px] uppercase tracking-wider font-medium ${
              isDark ? "text-slate-300" : "text-[#3478A8]"
            }`}
          >
            Europe travel information
          </span>
          <span className={`h-[1px] w-3 ${isDark ? "bg-slate-400" : "bg-[#17324D]/40"}`}></span>
        </div>
      </div>
    </Link>
  );
}
