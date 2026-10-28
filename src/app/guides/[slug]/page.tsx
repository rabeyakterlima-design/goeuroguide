import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FEATURED_ARTICLES } from "@/lib/mock-data";
import { Clock, User, Calendar, ShieldCheck, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = FEATURED_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — GoEuroGuide`,
    description: article.excerpt,
  };
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const article = FEATURED_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs
        items={[
          { label: "Travel Guides", href: "/guides" },
          { label: article.title },
        ]}
      />

      {/* Header Info */}
      <div className="space-y-4">
        <div className="inline-block px-3 py-1 rounded-full bg-[#f0f7fc] text-[#3478A8] text-xs font-bold uppercase tracking-wider">
          {article.category}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#17324D] tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed font-light">
          {article.excerpt}
        </p>

        {/* Author / Date Meta */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-3 border-t border-slate-200">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-[#3478A8]" />
            <span className="font-semibold text-slate-700">{article.author.name}</span>
            <span>({article.author.role})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>Updated {article.updated_at}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>{article.read_time_minutes} min read</span>
          </div>
        </div>
      </div>

      {/* Featured Cover Image */}
      <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md bg-slate-100">
        <Image
          src={article.cover_image}
          alt={article.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      {/* Editorial Content Body */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6 text-[#263238] leading-relaxed text-sm sm:text-base">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-bold text-[#17324D]">Editorial & Fact-Checking Standard:</span>
            <p className="mt-0.5">
              GoEuroGuide guides are written with verifiable public policies, national rail standards,
              and official consulates. We do not accept sponsored placements that compromise objective travel advice.
            </p>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-[#17324D] pt-4">
          1. Key Planning Considerations
        </h2>
        <p>
          When traveling across Europe, having clarity on border jurisdictions, currency differences,
          and public transport options will significantly enhance your travel experience.
          Whether navigating Schengen passport controls or booking seat reservations on high-speed trains,
          advance planning saves both time and unnecessary stress.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-[#17324D] pt-4">
          2. Transport & Rail Corridors
        </h2>
        <p>
          Europe’s high-speed rail network connects major capitals often faster than regional air travel
          once airport security and city center transfers are taken into account.
          High-speed services such as Eurostar, TGV, Frecciarossa, and ICE provide comfortable,
          panoramic routes directly connecting city centers.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-[#17324D] pt-4">
          3. Entry Rules & Consular Requirements
        </h2>
        <p>
          Non-EU travelers must ensure their passport holds at least 3 months of validity beyond
          their intended departure date from the Schengen Area. The 90/180-day short-stay limitation
          applies across the entire Schengen zone as a single unified border space.
        </p>

        {/* Back Link */}
        <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
          <Link
            href="/guides"
            className="text-xs font-semibold text-[#3478A8] hover:text-[#17324D]"
          >
            ← Back to all travel guides
          </Link>
          <Link
            href="/planner"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D6A85F] text-[#17324D] text-xs font-bold hover:bg-[#c29143] hover:text-white transition-colors"
          >
            <span>Plan your journey</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
