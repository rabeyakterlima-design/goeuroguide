import React from "react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Train, Bus, Plane, Car, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "European Transport Guides & Rail Corridors — GoEuroGuide",
  description:
    "Comprehensive guides to European train networks, high-speed rail passes, airport transfers, and verified public transit operators.",
};

const OPERATORS = [
  { name: "Eurostar", country: "UK, France, Belgium, Netherlands, Germany", url: "https://www.eurostar.com" },
  { name: "SNCF Connect (TGV)", country: "France & International", url: "https://www.sncf-connect.com" },
  { name: "Trenitalia (Frecciarossa)", country: "Italy", url: "https://www.trenitalia.com" },
  { name: "Renfe (AVE)", country: "Spain", url: "https://www.renfe.com" },
  { name: "SBB CFF FFS", country: "Switzerland", url: "https://www.sbb.ch" },
  { name: "NS International", country: "Netherlands", url: "https://www.nsinternational.com" },
];

export default function TransportPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Transport" }]} />

      <div className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17324D] tracking-tight">
          European Transport Guides
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          Navigate Europe efficiently using high-speed rail, regional passes, airport links,
          and public transit systems without unnecessary flight hassle.
        </p>
      </div>

      {/* Modes of Transport Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#3478A8] flex items-center justify-center">
            <Train className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-[#17324D]">High-Speed Rail & Eurail</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Europe’s high-speed rail network reaches up to 320 km/h, linking city center to city center.
            Learn when Eurail passes save money versus advance point-to-point tickets.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Bus className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-[#17324D]">Intercity Coaches</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Budget-friendly travel connecting secondary towns with free Wi-Fi and generous luggage allowances.
            Popular providers include FlixBus and national operators.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <Plane className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-[#17324D]">Regional Flights</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Best reserved for long distances exceeding 6 hours by rail (such as Spain to Greece).
            Always account for airport transfer time and baggage surcharges.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
            <Car className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-[#17324D]">Car Rentals & Tolls</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Ideal for exploring rural countryside (Tuscany, Provence, Swiss valleys).
            Check Vignette requirements in Switzerland and Austria before driving on motorways.
          </p>
        </div>
      </div>

      {/* Official Operators */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <h2 className="text-xl font-bold text-[#17324D]">
          Official National Rail & Transport Operators
        </h2>
        <p className="text-xs text-slate-500">
          Book directly with national rail operators for the lowest fees, official delay notifications, and legitimate tickets:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
          {OPERATORS.map((op, idx) => (
            <a
              key={idx}
              href={op.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#3478A8] transition-colors flex items-center justify-between group"
            >
              <div>
                <div className="font-bold text-sm text-[#17324D] group-hover:text-[#3478A8] transition-colors">
                  {op.name}
                </div>
                <div className="text-[11px] text-slate-500">{op.country}</div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#3478A8]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
