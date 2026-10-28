import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FEATURED_ARTICLES } from "@/lib/mock-data";
import { Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "European Travel Guides & Editorial Advice — GoEuroGuide",
  description:
    "In-depth European travel guides covering rail itineraries, visa procedures, travel budgets, and practical packing strategies.",
};

export default function GuidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Travel Guides" }]} />

      <div className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17324D] tracking-tight">
          European Travel Guides
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          Researched, practical guides covering everything from Schengen visa paperwork
          to scenic alpine rail journeys and daily budget estimation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FEATURED_ARTICLES.map((article) => (
          <Link
            key={article.id}
            href={`/guides/${article.slug}`}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row group"
          >
            <div className="relative sm:w-2/5 aspect-[16/10] sm:aspect-auto bg-slate-100 overflow-hidden">
              <Image
                src={article.cover_image}
                alt={article.title}
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#17324D]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                {article.category}
              </div>
            </div>

            <div className="p-5 sm:w-3/5 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <h2 className="text-lg font-bold text-[#17324D] group-hover:text-[#3478A8] transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.read_time_minutes} min read</span>
                </span>
                <span className="text-[#3478A8] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Read guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
