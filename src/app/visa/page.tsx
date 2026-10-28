"use client";

import React, { useState } from "react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  ShieldAlert,
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Info,
  Globe2,
} from "lucide-react";
import { SAMPLE_COUNTRIES } from "@/lib/mock-data";

export default function VisaPage() {
  const [nationality, setNationality] = useState("US");
  const [destination, setDestination] = useState("france");
  const [durationDays, setDurationDays] = useState("14");
  const [purpose, setPurpose] = useState("tourism");

  const selectedCountry = SAMPLE_COUNTRIES.find((c) => c.slug === destination) || SAMPLE_COUNTRIES[0];

  // Logic calculation for Schengen 90-day rules
  const durationNum = parseInt(durationDays, 10) || 14;
  const isOver90Days = durationNum > 90;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Visa & Entry Information" }]} />

      {/* Page Header */}
      <div className="space-y-3 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f7fc] text-[#3478A8] text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Official European Travel Advice</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17324D] tracking-tight">
          European Visa & Entry Information
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          Clear, verified guidance on Schengen travel rules, the 90/180-day limitation,
          passport validity checklists, and direct links to official European Union consular services.
        </p>
      </div>

      {/* Mandatory Disclaimer Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 flex items-start gap-3.5">
        <ShieldAlert className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm leading-relaxed space-y-1">
          <strong className="font-bold text-amber-950">
            Important Informational Notice:
          </strong>
          <p>
            GoEuroGuide is an independent travel information resource. We are not a government agency,
            embassy, law firm, or visa processing provider. We never guarantee visa eligibility or approval,
            and we do not collect payments or personal identity documents. Always verify current entry requirements
            with the relevant official embassy or consulate before booking non-refundable travel.
          </p>
        </div>
      </div>

      {/* Interactive Visa Assessment Tool */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <h2 className="text-xl font-bold text-[#17324D]">
          Check Entry Requirements by Destination
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Nationality */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Passport Nationality
            </label>
            <select
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold text-[#17324D] bg-slate-50/50 focus:outline-none focus:border-[#3478A8]"
            >
              <option value="US">United States (US)</option>
              <option value="UK">United Kingdom (UK)</option>
              <option value="CA">Canada (CA)</option>
              <option value="AU">Australia (AU)</option>
              <option value="IN">India (IN - Visa Required)</option>
              <option value="CN">China (CN - Visa Required)</option>
              <option value="PH">Philippines (PH - Visa Required)</option>
              <option value="OTHER">Other Nationality</option>
            </select>
          </div>

          {/* Destination */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              European Destination
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold text-[#17324D] bg-slate-50/50 focus:outline-none focus:border-[#3478A8]"
            >
              {SAMPLE_COUNTRIES.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name} ({c.is_schengen ? "Schengen" : "Non-Schengen"})
                </option>
              ))}
            </select>
          </div>

          {/* Trip Duration */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Intended Stay Duration
            </label>
            <select
              value={durationDays}
              onChange={(e) => setDurationDays(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold text-[#17324D] bg-slate-50/50 focus:outline-none focus:border-[#3478A8]"
            >
              <option value="7">1 Week (7 Days)</option>
              <option value="14">2 Weeks (14 Days)</option>
              <option value="30">1 Month (30 Days)</option>
              <option value="85">Under 90 Days</option>
              <option value="120">Over 90 Days (Long-Stay)</option>
            </select>
          </div>

          {/* Travel Purpose */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Travel Purpose
            </label>
            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold text-[#17324D] bg-slate-50/50 focus:outline-none focus:border-[#3478A8]"
            >
              <option value="tourism">Tourism & Sightseeing</option>
              <option value="business">Business Meetings</option>
              <option value="study">Short Study / Language Course</option>
              <option value="family">Visiting Friends / Family</option>
            </select>
          </div>
        </div>

        {/* Dynamic Result Panel */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-[#3478A8]" />
              <h3 className="font-bold text-base text-[#17324D]">
                Guidance for {selectedCountry.name}
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <span>Status:</span>
              <span className="font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                {selectedCountry.is_schengen ? "Schengen Member" : "National Visa Rules"}
              </span>
            </div>
          </div>

          {/* Condition Analysis */}
          {isOver90Days ? (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs sm:text-sm space-y-1">
              <div className="flex items-center gap-2 font-bold text-rose-950">
                <AlertTriangle className="w-4 h-4 text-rose-700" />
                <span>Stay exceeds 90 days: National Long-Stay Visa Required</span>
              </div>
              <p>
                The standard Schengen tourist allowance allows a maximum of 90 days within any 180-day rolling period.
                For stays exceeding 90 days in {selectedCountry.name}, you must apply for a national long-stay visa (Type D)
                or residence permit directly at the embassy or consulate before your departure.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div className="text-xs sm:text-sm text-slate-700">
                  <strong className="text-[#17324D]">Schengen 90/180-Day Short-Stay Rule:</strong>
                  <p className="mt-0.5">
                    Your planned trip duration of {durationDays} days falls within the standard Schengen short-stay limitation.
                    Citizens of visa-exempt nations (such as US, UK, Canada, Australia) do not require a pre-arranged visa sticker
                    for stays under 90 days. Citizens of visa-required nations must obtain a Schengen short-stay visa (Type C)
                    prior to arrival.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Info className="w-5 h-5 text-[#3478A8] mt-0.5 flex-shrink-0" />
                <div className="text-xs sm:text-sm text-slate-700">
                  <strong className="text-[#17324D]">Passport Validity Rule:</strong>
                  <p className="mt-0.5">
                    Your passport must have been issued within the last 10 years and remain valid for a minimum of
                    <strong> 3 months beyond your planned departure date</strong> from the Schengen territory.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Official Verification Links */}
          <div className="pt-4 border-t border-slate-200 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Official Consular Links for {selectedCountry.name}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href="https://travel-europe.europa.eu/en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-[#3478A8] text-xs font-semibold text-[#17324D] transition-colors"
              >
                <span>Official European Union Travel Portal</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>

              {selectedCountry.sources.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-[#3478A8] text-xs font-semibold text-[#17324D] transition-colors"
                >
                  <span className="truncate pr-2">{s.name}</span>
                  <ExternalLink className="w-4 h-4 text-slate-400 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
