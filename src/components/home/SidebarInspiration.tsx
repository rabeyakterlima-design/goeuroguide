import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Sparkles } from "lucide-react";
import { INSPIRATION_LINKS } from "@/lib/mock-data";

export function SidebarInspiration() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-4 sm:p-5 space-y-4">
      <div>
        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#D6A85F]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Ideas</span>
        </div>
        <h3 className="text-sm sm:text-base font-bold text-[#17324D] tracking-tight">
          Travel Inspiration
        </h3>
        <p className="text-[11px] text-slate-500 mt-0.5">
          Seasonal guides, destination collections and more.
        </p>
      </div>

      {/* Links List */}
      <div className="space-y-1">
        {INSPIRATION_LINKS.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-slate-50 transition-colors text-xs text-[#263238] hover:text-[#3478A8] font-medium group"
          >
            <span className="line-clamp-1">{link.title}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#3478A8] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
          </Link>
        ))}
      </div>

      {/* Miniature Visual Banner */}
      <div className="relative h-24 w-full rounded-xl overflow-hidden bg-slate-100">
        <Image
          src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80"
          alt="Palace of Alhambra in Granada, Spain"
          fill
          sizes="(max-width: 1024px) 100vw, 30vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/80 via-transparent to-transparent flex items-end p-2.5">
          <span className="text-[11px] font-bold text-white tracking-wide">
            Historic Palaces of Andalusia →
          </span>
        </div>
      </div>
    </div>
  );
}
