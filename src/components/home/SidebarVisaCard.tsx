import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, BookCheck } from "lucide-react";

export function SidebarVisaCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
      {/* Visual Header Image */}
      <div className="relative h-36 w-full bg-slate-100 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80"
          alt="Santorini Aegean vista"
          fill
          sizes="(max-width: 1024px) 100vw, 30vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Floating Passport Icon Badge */}
        <div className="absolute bottom-3 right-3 bg-[#17324D] text-[#D6A85F] p-2 rounded-lg shadow-md border border-white/20 flex items-center gap-1.5">
          <BookCheck className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-white">
            Official Rules
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3478A8]">
          <ShieldCheck className="w-4 h-4 text-[#3478A8]" />
          <span>Entry Requirements</span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-[#17324D] leading-snug">
          Visa & Entry Information
        </h3>

        <p className="text-xs text-slate-600 leading-relaxed">
          Get verified Schengen policies, 90/180-day rules, passport validity
          requirements, and direct links to official government portals.
        </p>

        <Link
          href="/visa"
          className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[#17324D] hover:bg-[#23476c] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs group"
        >
          <span>Check Visa Guide</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#D6A85F]" />
        </Link>
      </div>
    </div>
  );
}
