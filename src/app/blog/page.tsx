import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FEATURED_ARTICLES } from "@/lib/mock-data";
import { Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "European Travel Blog & Stories — GoEuroGuide",
  description:
    "First-hand travel insights, cultural guides, seasonal itineraries, and practical European travel advice.",
};

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Travel Blog" }]} />

      <div className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17324D] tracking-tight">
          GoEuroGuide Travel Blog
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          Inspirational travel stories, secret alpine hiking routes, culinary itineraries,
          and curated city escapes from our European editorial team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_ARTICLES.map((article) => (
          <Link
            key={article.id}
            href={`/guides/${article.slug}`}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col group"
          >
            <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
              <Image
                src={article.cover_image}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#17324D]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                {article.category}
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h2 className="text-base font-bold text-[#17324D] group-hover:text-[#3478A8] transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-xs text-slate-600 line-clamp-2 mt-1.5 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.read_time_minutes} min read</span>
                </span>
                <span className="text-[#3478A8] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Read article <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
