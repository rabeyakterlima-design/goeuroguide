import React from "react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — GoEuroGuide",
  description: "Transparency and affiliate link disclosure policy for GoEuroGuide.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Affiliate Disclosure" }]} />
      <div className="space-y-3 border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17324D] tracking-tight">
          Affiliate Disclosure
        </h1>
        <p className="text-xs text-slate-500">Last updated: April 2026</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6 text-[#263238] leading-relaxed text-sm">
        <h2 className="text-base font-bold text-[#17324D]">1. Transparent Commercial Relationships</h2>
        <p>
          GoEuroGuide is committed to absolute transparency. Some links on this site may be affiliate links.
          This means that if you choose to make a booking or purchase through these links, we may receive a small commission at no additional cost to you.
        </p>

        <h2 className="text-base font-bold text-[#17324D]">2. Editorial Independence</h2>
        <p>
          Our editorial recommendations are never influenced by commissions. We highlight official railway operators, national tourism offices, and public attractions regardless of whether an affiliate partnership exists.
        </p>
      </div>
    </div>
  );
}
