import React from "react";
import Image from "next/image";

export function SidebarPromoCard() {
  return (
    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full border border-slate-200 shadow-xs group">
      <Image
        src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80"
        alt="Italian Cinque Terre cliffside village"
        fill
        sizes="(max-width: 1024px) 100vw, 30vw"
        className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/80 via-transparent to-transparent flex flex-col justify-end p-5 text-right">
        <p className="font-serif italic text-white text-2xl font-light drop-shadow-md">
          Explore
          <br />
          Dream
          <br />
          Discover ♡
        </p>
      </div>
    </div>
  );
}
