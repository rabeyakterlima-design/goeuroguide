import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { FEATURED_ARTICLES } from "@/lib/mock-data";

export function FeaturedGuides() {
  return (
    <section className="space-y-4">
      {/* Section Header */}
      <div className="flex items-end justify-between border-b border-slate-200/80 pb-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#17324D] tracking-tight">
            Featured Travel Guides
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Helpful articles and tips for your European journey
          </p>
        </div>
        <Link
          href="/guides"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#3478A8] hover:text-[#17324D] transition-colors group flex-shrink-0"
        >
          <span>View All Articles</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid of 4 Guides */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {FEATURED_ARTICLES.map((article) => (
          <Link
            key={article.id}
            href={`/guides/${article.slug}`}
            className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300"
          >
            {/* Thumbnail */}
            <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
              <Image
                src={article.cover_image}
                alt={article.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-[#17324D]/85 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                {article.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-3.5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-[#17324D] group-hover:text-[#3478A8] transition-colors line-clamp-2 leading-snug">
                  {article.title}
                </h3>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-slate-100 mt-3">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{article.read_time_minutes} min read</span>
                </span>
                <span className="font-medium text-slate-500">{article.published_at}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
