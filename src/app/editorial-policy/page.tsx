import React from "react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy & Verification Standards — GoEuroGuide",
  description: "Learn about GoEuroGuide's fact-checking and editorial verification processes.",
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Editorial Policy" }]} />
      <div className="space-y-3 border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17324D] tracking-tight">
          Editorial & Verification Policy
        </h1>
        <p className="text-xs text-slate-500">Last updated: April 2026</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6 text-[#263238] leading-relaxed text-sm">
        <h2 className="text-base font-bold text-[#17324D]">1. Primary Official Sourcing</h2>
        <p>
          We prioritize primary government legislation, European Union official publications (europa.eu),
          and official national tourist boards (e.g., Atout France, ENIT Italia, Turespa&ntilde;a, Switzerland Tourism).
        </p>

        <h2 className="text-base font-bold text-[#17324D]">2. Transparent Verification Dates</h2>
        <p>
          Every factual article, visa guide, and country overview features an explicit &quot;Last Verified Date&quot;.
          When travel regulations change (such as Schengen border policies or ETIAS rollout timelines), our editorial desk updates the database and increments the verification timestamp.
        </p>

        <h2 className="text-base font-bold text-[#17324D]">3. Non-Fabrication Guarantee</h2>
        <p>
          We never fabricate user reviews, awards, ticket pricing, or live train schedules. When live pricing data is unavailable, we explicitly state that prices are indicative estimations based on standard seasonal rates.
        </p>
      </div>
    </div>
  );
}
