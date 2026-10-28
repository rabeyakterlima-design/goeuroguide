import React from "react";
import Link from "next/link";
import {
  FileCheck2,
  Train,
  Building2,
  ShieldAlert,
  Calculator,
  ChevronRight,
} from "lucide-react";

export function SidebarTravelEssentials() {
  const essentials = [
    {
      title: "Visa & Entry Information",
      href: "/visa",
      icon: <FileCheck2 className="w-4 h-4 text-[#3478A8]" />,
    },
    {
      title: "Transport Guide",
      href: "/transport",
      icon: <Train className="w-4 h-4 text-[#3478A8]" />,
    },
    {
      title: "Accommodation Guide",
      href: "/accommodation",
      icon: <Building2 className="w-4 h-4 text-[#3478A8]" />,
    },
    {
      title: "Travel Safety",
      href: "/guides",
      icon: <ShieldAlert className="w-4 h-4 text-[#3478A8]" />,
    },
    {
      title: "Travel Budget Calculator",
      href: "/budget-calculator",
      icon: <Calculator className="w-4 h-4 text-[#D6A85F]" />,
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-4 sm:p-5 space-y-3">
      <h3 className="text-sm sm:text-base font-bold text-[#17324D] tracking-tight border-b border-slate-100 pb-2.5">
        Travel Essentials
      </h3>

      <div className="space-y-1">
        {essentials.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-md bg-slate-50 group-hover:bg-[#f0f7fc] transition-colors">
                {item.icon}
              </div>
              <span className="text-xs font-semibold text-[#17324D] group-hover:text-[#3478A8] transition-colors">
                {item.title}
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#3478A8] group-hover:translate-x-0.5 transition-all" />
          </Link>
        ))}
      </div>
    </div>
  );
}
