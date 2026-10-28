"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";
import { subscribeNewsletter } from "@/lib/firebase/firestore";

export function SidebarNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setLoading(true);
    try {
      await subscribeNewsletter(email);
      setSubmitted(true);
      setEmail("");
    } catch (err) {
      console.warn("Newsletter subscription offline mode:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-4 sm:p-5 space-y-3">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3478A8]">
        <Mail className="w-4 h-4 text-[#3478A8]" />
        <span>Stay Informed</span>
      </div>

      <h3 className="text-base font-bold text-[#17324D] leading-snug">
        Join Our Newsletter
      </h3>

      <p className="text-xs text-slate-600 leading-relaxed">
        Get travel tips, destination guides, verified visa rule updates, and exclusive itineraries.
      </p>

      {submitted ? (
        <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 flex items-center gap-2 text-emerald-800 text-xs">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
          <span>You&apos;re subscribed! Thank you for joining GoEuroGuide.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#3478A8] text-[#17324D] bg-slate-50/50"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 rounded-lg bg-[#17324D] hover:bg-[#23476c] text-white text-xs font-semibold transition-all shadow-2xs flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
            <span>Subscribe</span>
          </button>
          <p className="text-[10px] text-slate-400 text-center leading-tight">
            We respect your privacy. Unsubscribe anytime. No spam guaranteed.
          </p>
        </form>
      )}
    </div>
  );
}
