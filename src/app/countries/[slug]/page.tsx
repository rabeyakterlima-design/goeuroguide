import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SAMPLE_COUNTRIES } from "@/lib/mock-data";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  Coins,
  ShieldCheck,
  Calendar,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

interface CountryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CountryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const country = SAMPLE_COUNTRIES.find((c) => c.slug === slug);
  if (!country) return { title: "Country Not Found" };

  return {
    title: `${country.name} Travel Guide — Destinations, Entry Rules & Budgets`,
    description: `Complete travel guide for ${country.name}: capital ${country.capital}, currency ${country.currency.code}, Schengen rules, safety contacts, and official tourism links.`,
  };
}

export default async function CountryDetailPage({ params }: CountryPageProps) {
  const { slug } = await params;
  const country = SAMPLE_COUNTRIES.find((c) => c.slug === slug);

  if (!country) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Countries", href: "/countries" },
          { label: country.name },
        ]}
      />

      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden min-h-[360px] md:min-h-[420px] flex items-end p-6 md:p-10 shadow-lg border border-slate-200">
        <Image
          src={country.cover_image}
          alt={`${country.name} travel overview`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.8]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/90 via-[#17324D]/40 to-transparent" />

        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {country.region}
            </span>
            {country.is_schengen && (
              <span className="bg-emerald-500/90 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Schengen Area</span>
              </span>
            )}
            {country.is_eu ? (
              <span className="bg-blue-600/90 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                European Union Member
              </span>
            ) : (
              <span className="bg-slate-700/90 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                Non-EU Country
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {country.name}
          </h1>

          <p className="text-sm sm:text-base text-slate-100/95 leading-relaxed font-light">
            {country.description}
          </p>
        </div>
      </div>

      {/* Main Grid: Info Cards + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Detailed Guide */}
        <div className="lg:col-span-8 space-y-8">
          {/* Quick Facts Panel */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
            <h2 className="text-lg font-bold text-[#17324D] mb-4">
              Essential Facts & Logistics
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
              <div className="space-y-1">
                <div className="text-slate-400 font-medium">Capital</div>
                <div className="font-bold text-[#17324D]">{country.capital}</div>
              </div>
              <div className="space-y-1">
                <div className="text-slate-400 font-medium">Languages</div>
                <div className="font-bold text-[#17324D]">
                  {country.languages.join(", ")}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-slate-400 font-medium">Currency</div>
                <div className="font-bold text-[#17324D]">
                  {country.currency.name} ({country.currency.code} {country.currency.symbol})
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-slate-400 font-medium">Emergency Calls</div>
                <div className="font-bold text-red-600">
                  {country.emergency_numbers.general} (General EU)
                </div>
              </div>
            </div>
          </div>

          {/* Best Time to Visit */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-[#3478A8]">
              <Calendar className="w-5 h-5" />
              <h2 className="text-lg font-bold text-[#17324D]">
                Best Time to Visit & Climate
              </h2>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {country.best_time_to_visit}
            </p>
          </div>

          {/* Estimated Daily Travel Budget */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-[#D6A85F]">
              <Coins className="w-5 h-5 text-[#9e7330]" />
              <h2 className="text-lg font-bold text-[#17324D]">
                Estimated Daily Travel Budget (EUR)
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              Indicative daily expenses per person covering modest accommodation, meals, local transit, and attraction entrance:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Budget Style
                </span>
                <div className="text-2xl font-bold text-[#17324D]">
                  €{country.estimated_daily_budget_eur.budget}
                </div>
                <p className="text-[11px] text-slate-400">Hostels & public transit</p>
              </div>

              <div className="p-4 rounded-xl bg-[#f0f7fc] border border-[#d0e5f5] text-center space-y-1">
                <span className="text-xs font-semibold text-[#3478A8] uppercase tracking-wider">
                  Moderate Comfort
                </span>
                <div className="text-2xl font-bold text-[#3478A8]">
                  €{country.estimated_daily_budget_eur.moderate}
                </div>
                <p className="text-[11px] text-slate-500">3-star hotels & bistros</p>
              </div>

              <div className="p-4 rounded-xl bg-[#fcf8ee] border border-[#f5e6c2] text-center space-y-1">
                <span className="text-xs font-semibold text-[#9e7330] uppercase tracking-wider">
                  Luxury Experience
                </span>
                <div className="text-2xl font-bold text-[#9e7330]">
                  €{country.estimated_daily_budget_eur.luxury}+
                </div>
                <p className="text-[11px] text-slate-500">Boutique & fine dining</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Official Sources & Actions */}
        <div className="lg:col-span-4 space-y-6">
          {/* Official Verification Box */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verified Information Desk</span>
            </div>

            <div className="text-xs text-slate-600 space-y-2">
              <p>
                Last verified: <strong className="text-slate-800">{country.verified_date}</strong>
              </p>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Content is fact-checked against official European Union, ministerial, and national tourism portals.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2">
              <span className="text-[11px] font-bold uppercase text-slate-400">
                Official Government & Tourism Sources
              </span>
              {country.sources.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-xs font-medium text-[#17324D] transition-colors"
                >
                  <span className="truncate pr-2">{s.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                </a>
              ))}
            </div>

            <Link
              href="/visa"
              className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#17324D] text-white text-xs font-semibold hover:bg-[#23476c] transition-colors"
            >
              <span>Check {country.name} Visa Rules</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Trip Planner Prompt */}
          <div className="bg-[#FAF8F3] rounded-2xl border border-[#e8dbb8] p-5 shadow-xs space-y-3">
            <h3 className="font-bold text-sm text-[#17324D]">
              Planning a visit to {country.name}?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Add {country.name} to your custom itinerary, calculate rail transit times, and estimate hotel expenses.
            </p>
            <Link
              href={`/planner?destination=${encodeURIComponent(country.name)}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3478A8] hover:text-[#17324D]"
            >
              <span>Create {country.name} Itinerary</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
