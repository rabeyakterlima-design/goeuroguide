import React from "react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — GoEuroGuide",
  description: "GoEuroGuide privacy policy and data protection principles.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <div className="space-y-3 border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17324D] tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">Last updated: April 2026</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6 text-[#263238] leading-relaxed text-sm">
        <h2 className="text-base font-bold text-[#17324D]">1. Information We Collect</h2>
        <p>
          GoEuroGuide respects visitor privacy. We do not sell personal data. When you subscribe to our newsletter or create an itinerary account, we collect only your email address and basic profile information necessary to save your trip data.
        </p>

        <h2 className="text-base font-bold text-[#17324D]">2. Informational Travel Lookups</h2>
        <p>
          When using our Visa & Entry or Budget Calculator tools, queries are processed client-side. We do not collect passport numbers, dates of birth, or sensitive biometric identity documents.
        </p>

        <h2 className="text-base font-bold text-[#17324D]">3. Cookies & Analytics</h2>
        <p>
          We use strictly necessary technical cookies and lightweight aggregated analytics to understand which guides are most helpful to our visitors.
        </p>
      </div>
    </div>
  );
}
