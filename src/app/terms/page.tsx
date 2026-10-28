import React from "react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions — GoEuroGuide",
  description: "Terms and conditions of using the GoEuroGuide website and travel resources.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Terms and Conditions" }]} />
      <div className="space-y-3 border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17324D] tracking-tight">
          Terms and Conditions
        </h1>
        <p className="text-xs text-slate-500">Last updated: April 2026</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6 text-[#263238] leading-relaxed text-sm">
        <h2 className="text-base font-bold text-[#17324D]">1. Informational Nature of Service</h2>
        <p>
          All information, articles, guides, visa requirements, and budget calculators on GoEuroGuide are provided for educational and trip-planning informational purposes only. GoEuroGuide does not issue visas, sell flight or train tickets directly, or guarantee consular approval.
        </p>

        <h2 className="text-base font-bold text-[#17324D]">2. Third-Party Links & Operators</h2>
        <p>
          We provide outbound links to official government portals, European national railway carriers, and municipal tourism boards. We are not responsible for policies, fare alterations, or service changes made by third-party operators.
        </p>

        <h2 className="text-base font-bold text-[#17324D]">3. User Accounts & Itineraries</h2>
        <p>
          Users are responsible for safeguarding their account credentials. Itineraries created on our platform remain the user&apos;s personal planning material.
        </p>
      </div>
    </div>
  );
}
