"use client";

import React, { useState } from "react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import {
  MapPin,
  Plus,
  Trash2,
  Printer,
  Sparkles,
} from "lucide-react";
import { SAMPLE_COUNTRIES } from "@/lib/mock-data";

interface ItineraryItem {
  id: string;
  time: string;
  activity: string;
  location: string;
  costEur: number;
}

interface ItineraryDay {
  dayNumber: number;
  date: string;
  city: string;
  items: ItineraryItem[];
}

export default function TripPlannerPage() {
  const [tripTitle, setTripTitle] = useState("Grand European Journey");
  const [destinationCountry, setDestinationCountry] = useState("France");
  const [travellers, setTravellers] = useState(2);
  const [travelStyle, setTravelStyle] = useState("Historic & Cultural");

  const [days, setDays] = useState<ItineraryDay[]>([
    {
      dayNumber: 1,
      date: "Day 1",
      city: "Paris",
      items: [
        { id: "1-1", time: "09:30 AM", activity: "Eiffel Tower Ascent & Champ de Mars", location: "Paris 7th", costEur: 35 },
        { id: "1-2", time: "01:00 PM", activity: "Bistro Lunch along the Seine", location: "Saint-Germain", costEur: 28 },
        { id: "1-3", time: "03:30 PM", activity: "Musée d'Orsay Impressionist Wing", location: "Paris 7th", costEur: 16 },
      ],
    },
    {
      dayNumber: 2,
      date: "Day 2",
      city: "Paris",
      items: [
        { id: "2-1", time: "10:00 AM", activity: "Louvre Museum Classical Masterpieces", location: "Paris 1st", costEur: 22 },
        { id: "2-2", time: "02:30 PM", activity: "Stroll through Jardin des Tuileries & Marais", location: "Marais", costEur: 0 },
        { id: "2-3", time: "07:30 PM", activity: "Sunset Seine River Cruise", location: "Pont Neuf", costEur: 18 },
      ],
    },
  ]);

  // Add Day
  const handleAddDay = () => {
    const nextDayNum = days.length + 1;
    setDays([
      ...days,
      {
        dayNumber: nextDayNum,
        date: `Day ${nextDayNum}`,
        city: destinationCountry,
        items: [
          {
            id: `${nextDayNum}-1`,
            time: "10:00 AM",
            activity: "Explore historic town center",
            location: destinationCountry,
            costEur: 15,
          },
        ],
      },
    ]);
  };

  // Remove Day
  const handleRemoveDay = (dayIndex: number) => {
    if (days.length <= 1) return;
    setDays(days.filter((_, idx) => idx !== dayIndex).map((d, i) => ({ ...d, dayNumber: i + 1, date: `Day ${i + 1}` })));
  };

  // Add Activity to Day
  const handleAddActivity = (dayIndex: number) => {
    const updated = [...days];
    const newId = `${dayIndex + 1}-${updated[dayIndex].items.length + 1}`;
    updated[dayIndex].items.push({
      id: newId,
      time: "02:00 PM",
      activity: "New Activity / Sightseeing",
      location: updated[dayIndex].city,
      costEur: 20,
    });
    setDays(updated);
  };

  // Delete Activity
  const handleDeleteActivity = (dayIndex: number, itemId: string) => {
    const updated = [...days];
    updated[dayIndex].items = updated[dayIndex].items.filter((item) => item.id !== itemId);
    setDays(updated);
  };

  // Calculate estimated total activity costs
  const totalActivityCost = days.reduce(
    (total, day) => total + day.items.reduce((dayTotal, item) => dayTotal + (item.costEur || 0), 0),
    0
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "Trip Planner" }]} />

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fcf8ee] text-[#9e7330] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Itinerary Builder</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#17324D] tracking-tight">
            Europe Trip Planner
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Build your custom day-by-day European itinerary with activity schedules and cost estimates.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-semibold text-[#17324D] hover:bg-slate-50 transition-colors shadow-2xs"
          >
            <Printer className="w-4 h-4 text-slate-500" />
            <span>Print Itinerary</span>
          </button>
        </div>
      </div>

      {/* Trip Configuration Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
            Trip Title
          </label>
          <input
            type="text"
            value={tripTitle}
            onChange={(e) => setTripTitle(e.target.value)}
            className="w-full px-3 py-2 text-sm font-semibold text-[#17324D] bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#3478A8]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
            Primary Country
          </label>
          <select
            value={destinationCountry}
            onChange={(e) => setDestinationCountry(e.target.value)}
            className="w-full px-3 py-2 text-sm font-semibold text-[#17324D] bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#3478A8]"
          >
            {SAMPLE_COUNTRIES.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
            Travel Style
          </label>
          <select
            value={travelStyle}
            onChange={(e) => setTravelStyle(e.target.value)}
            className="w-full px-3 py-2 text-sm font-semibold text-[#17324D] bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#3478A8]"
          >
            <option value="Historic & Cultural">Historic & Cultural</option>
            <option value="Mountains & Nature">Mountains & Nature</option>
            <option value="Beaches & Islands">Beaches & Islands</option>
            <option value="Food & Wine">Food & Wine</option>
            <option value="Budget Explorer">Budget Explorer</option>
            <option value="Romantic Escape">Romantic Escape</option>
            <option value="Family Adventure">Family Adventure</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
            Travellers
          </label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTravellers((prev) => Math.max(1, prev - 1))}
              className="w-8 h-8 rounded-lg bg-slate-100 font-bold hover:bg-slate-200 text-[#17324D]"
            >
              -
            </button>
            <span className="text-sm font-bold text-[#17324D] px-2">
              {travellers} {travellers === 1 ? "Person" : "People"}
            </span>
            <button
              onClick={() => setTravellers((prev) => Math.min(10, prev + 1))}
              className="w-8 h-8 rounded-lg bg-slate-100 font-bold hover:bg-slate-200 text-[#17324D]"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
            Est. Activity Total
          </label>
          <div className="text-xl font-bold text-[#3478A8] pt-1">
            €{totalActivityCost * travellers}{" "}
            <span className="text-xs font-normal text-slate-500">
              (€{totalActivityCost}/person)
            </span>
          </div>
        </div>
      </div>

      {/* Days & Activities List */}
      <div className="space-y-6">
        {days.map((day, dayIndex) => (
          <div
            key={day.dayNumber}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
          >
            {/* Day Header */}
            <div className="p-4 sm:p-5 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#17324D] text-white flex items-center justify-center font-bold text-xs">
                  {day.dayNumber}
                </span>
                <div>
                  <h3 className="font-bold text-base text-[#17324D]">
                    {day.date} — {day.city}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {day.items.length} {day.items.length === 1 ? "activity" : "activities"} scheduled
                  </p>
                </div>
              </div>

              {days.length > 1 && (
                <button
                  onClick={() => handleRemoveDay(dayIndex)}
                  className="text-xs text-red-600 hover:text-red-800 p-1.5 rounded-lg hover:bg-red-50 flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Remove Day</span>
                </button>
              )}
            </div>

            {/* Activities Table */}
            <div className="p-4 sm:p-5 space-y-3">
              {day.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-slate-200 bg-white gap-3 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="text-xs font-semibold text-[#3478A8] bg-[#f0f7fc] px-2.5 py-1 rounded-md flex-shrink-0">
                      {item.time}
                    </span>
                    <div>
                      <div className="font-bold text-sm text-[#17324D]">{item.activity}</div>
                      <div className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4">
                    <span className="text-xs font-bold text-slate-700">
                      {item.costEur > 0 ? `€${item.costEur}` : "Free"}
                    </span>
                    <button
                      onClick={() => handleDeleteActivity(dayIndex, item.id)}
                      className="text-slate-400 hover:text-red-600 p-1"
                      aria-label="Delete activity"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={() => handleAddActivity(dayIndex)}
                className="w-full py-2.5 rounded-xl border border-dashed border-slate-300 text-xs font-semibold text-[#3478A8] hover:bg-[#f0f7fc] hover:border-[#3478A8] transition-colors flex items-center justify-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Add Activity to Day {day.dayNumber}</span>
              </button>
            </div>
          </div>
        ))}

        {/* Add Day Button */}
        <button
          onClick={handleAddDay}
          className="w-full py-4 rounded-2xl bg-white border-2 border-dashed border-slate-300 hover:border-[#3478A8] text-sm font-bold text-[#17324D] hover:text-[#3478A8] transition-colors flex items-center justify-center gap-2 shadow-2xs"
        >
          <Plus className="w-5 h-5" />
          <span>Add Another Day</span>
        </button>
      </div>
    </div>
  );
}
