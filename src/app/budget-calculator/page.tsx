"use client";

import React, { useState } from "react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  Coins,
  HelpCircle,
} from "lucide-react";
import { SAMPLE_COUNTRIES } from "@/lib/mock-data";

export default function BudgetCalculatorPage() {
  const [selectedCountry, setSelectedCountry] = useState("france");
  const [travellers, setTravellers] = useState(2);
  const [days, setDays] = useState(10);

  // Daily costs per person
  const [lodgingPerNight, setLodgingPerNight] = useState(120);
  const [foodPerDay, setFoodPerDay] = useState(50);
  const [localTransportPerDay, setLocalTransportPerDay] = useState(15);
  const [activitiesPerDay, setActivitiesPerDay] = useState(25);

  // Lump sum expenses per person
  const [flightsPerPerson, setFlightsPerPerson] = useState(450);
  const [insurancePerPerson, setInsurancePerPerson] = useState(40);
  const [visaFeePerPerson] = useState(0);
  const [contingencyPercent, setContingencyPercent] = useState(10);

  // Safe calculations
  const safeTravellers = Math.max(1, travellers || 1);
  const safeDays = Math.max(1, days || 1);

  // Calculations
  const lodgingTotal = (lodgingPerNight * safeDays * Math.ceil(safeTravellers / 2)); // 2 people share room
  const foodTotal = foodPerDay * safeDays * safeTravellers;
  const localTransportTotal = localTransportPerDay * safeDays * safeTravellers;
  const activitiesTotal = activitiesPerDay * safeDays * safeTravellers;
  const flightsTotal = flightsPerPerson * safeTravellers;
  const insuranceTotal = insurancePerPerson * safeTravellers;
  const visaTotal = visaFeePerPerson * safeTravellers;

  const subtotal =
    lodgingTotal +
    foodTotal +
    localTransportTotal +
    activitiesTotal +
    flightsTotal +
    insuranceTotal +
    visaTotal;

  const contingencyAmount = Math.round((subtotal * contingencyPercent) / 100);
  const grandTotal = subtotal + contingencyAmount;
  const perPersonCost = Math.round(grandTotal / safeTravellers);
  const perDayCost = Math.round(grandTotal / safeDays);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Budget Calculator" }]} />

      <div className="space-y-2 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fcf8ee] text-[#9e7330] text-xs font-bold uppercase tracking-wider mb-1">
          <Coins className="w-3.5 h-3.5" />
          <span>Trip Cost Estimator</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17324D] tracking-tight">
          Europe Travel Budget Calculator
        </h1>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          Estimate realistic travel costs across accommodation, daily meals, high-speed rail,
          international flights, attractions, and emergency reserves.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Input Column */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <h2 className="text-lg font-bold text-[#17324D] border-b border-slate-100 pb-3">
            Trip Parameters & Estimates
          </h2>

          {/* Group 1: Basics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                Destination
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 bg-slate-50/50 text-[#17324D]"
              >
                {SAMPLE_COUNTRIES.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                Travellers
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={travellers}
                onChange={(e) => setTravellers(parseInt(e.target.value, 10) || 1)}
                className="w-full px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 bg-slate-50/50 text-[#17324D]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                Trip Days
              </label>
              <input
                type="number"
                min="1"
                max="90"
                value={days}
                onChange={(e) => setDays(parseInt(e.target.value, 10) || 1)}
                className="w-full px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 bg-slate-50/50 text-[#17324D]"
              />
            </div>
          </div>

          {/* Group 2: Daily Expenses */}
          <div className="space-y-4 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Daily Rates (EUR)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Hotel Room / Night (EUR)
                </label>
                <input
                  type="number"
                  min="30"
                  step="10"
                  value={lodgingPerNight}
                  onChange={(e) => setLodgingPerNight(parseInt(e.target.value, 10) || 0)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Food & Dining / Person / Day
                </label>
                <input
                  type="number"
                  min="15"
                  step="5"
                  value={foodPerDay}
                  onChange={(e) => setFoodPerDay(parseInt(e.target.value, 10) || 0)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Local Transit / Person / Day
                </label>
                <input
                  type="number"
                  min="0"
                  step="2"
                  value={localTransportPerDay}
                  onChange={(e) => setLocalTransportPerDay(parseInt(e.target.value, 10) || 0)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Activities & Tickets / Person / Day
                </label>
                <input
                  type="number"
                  min="0"
                  step="5"
                  value={activitiesPerDay}
                  onChange={(e) => setActivitiesPerDay(parseInt(e.target.value, 10) || 0)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200"
                />
              </div>
            </div>
          </div>

          {/* Group 3: One-off Transit & Fixed */}
          <div className="space-y-4 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              One-Off Costs / Person (EUR)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  International Flights
                </label>
                <input
                  type="number"
                  min="0"
                  step="50"
                  value={flightsPerPerson}
                  onChange={(e) => setFlightsPerPerson(parseInt(e.target.value, 10) || 0)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Travel Insurance
                </label>
                <input
                  type="number"
                  min="0"
                  step="5"
                  value={insurancePerPerson}
                  onChange={(e) => setInsurancePerPerson(parseInt(e.target.value, 10) || 0)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Emergency Buffer (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="30"
                  value={contingencyPercent}
                  onChange={(e) => setContingencyPercent(parseInt(e.target.value, 10) || 0)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#17324D] text-white rounded-2xl p-6 sm:p-8 shadow-md space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6A85F]">
                Estimated Trip Total
              </span>
              <div className="text-4xl font-extrabold text-white mt-1">
                €{grandTotal.toLocaleString()}
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Based on {safeDays} days for {safeTravellers} {safeTravellers === 1 ? "traveller" : "travellers"}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700">
              <div className="space-y-0.5">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider">Per Traveller</span>
                <div className="text-xl font-bold text-[#FAF8F3]">
                  €{perPersonCost.toLocaleString()}
                </div>
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider">Daily Group Cost</span>
                <div className="text-xl font-bold text-[#FAF8F3]">
                  €{perDayCost.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Breakdown List */}
            <div className="space-y-2 pt-4 border-t border-slate-700 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-300">Accommodation ({safeDays} nights)</span>
                <span className="font-semibold">€{lodgingTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-300">Food & Dining</span>
                <span className="font-semibold">€{foodTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-300">Local Transit & Rail</span>
                <span className="font-semibold">€{localTransportTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-300">Attractions & Sightseeing</span>
                <span className="font-semibold">€{activitiesTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-300">Flights & Transit to Europe</span>
                <span className="font-semibold">€{flightsTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-300">Insurance & Ancillary</span>
                <span className="font-semibold">€{insuranceTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-1 text-[#D6A85F]">
                <span>Contingency Reserve ({contingencyPercent}%)</span>
                <span className="font-bold">€{contingencyAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex items-start gap-2.5">
            <HelpCircle className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
            <p>
              Prices are estimates based on standard seasonal rates. City taxes and luggage fees may vary.
              No exchange rate API is live; currency shown is EUR.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
