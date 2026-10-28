export type TravelStyle =
  | "mountains"
  | "historic"
  | "beaches"
  | "art"
  | "food"
  | "budget"
  | "family"
  | "adventure"
  | "romantic"
  | "solo";

export interface Country {
  id: string;
  name: string;
  slug: string;
  capital: string;
  region: "Western Europe" | "Southern Europe" | "Central Europe" | "Northern Europe" | "Eastern Europe";
  languages: string[];
  currency: {
    code: string;
    name: string;
    symbol: string;
  };
  is_eu: boolean;
  is_schengen: boolean;
  description: string;
  tagline: string;
  cover_image: string;
  official_tourism_url: string;
  sources: {
    name: string;
    url: string;
    type: "official_gov" | "tourism_board" | "transport_operator" | "other";
  }[];
  verified_date: string;
  popular_destinations_count: number;
  best_time_to_visit: string;
  estimated_daily_budget_eur: {
    budget: number;
    moderate: number;
    luxury: number;
  };
  emergency_numbers: {
    general: string;
    police?: string;
    medical?: string;
  };
}

export interface City {
  id: string;
  country_id: string;
  country_name: string;
  country_slug: string;
  name: string;
  slug: string;
  description: string;
  cover_image: string;
  is_capital: boolean;
  highlights: string[];
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  country_name: string;
  country_slug: string;
  city_name?: string;
  city_slug?: string;
  category: "landmark" | "museum" | "nature" | "historic" | "beach" | "food" | "castle";
  description: string;
  short_summary: string;
  cover_image: string;
  gallery?: string[];
  suggested_duration_hours?: number;
  official_website?: string;
  accessibility_notes?: string;
  verified_date: string;
  source_url?: string;
  travel_styles: TravelStyle[];
}

export interface TravelGuide {
  id: string;
  title: string;
  slug: string;
  category: "Travel Guide" | "Visa & Entry" | "Travel Tips" | "Budget Travel" | "Destinations";
  excerpt: string;
  content: string;
  cover_image: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  published_at: string;
  updated_at: string;
  read_time_minutes: number;
  related_countries?: string[];
  related_destinations?: string[];
  source_references?: {
    title: string;
    url: string;
  }[];
  is_featured?: boolean;
}

export interface VisaGuideInfo {
  country_name: string;
  country_slug: string;
  is_schengen: boolean;
  schengen_rules_apply: boolean;
  official_portal_url: string;
  short_stay_rule: string;
  passport_validity_requirement: string;
  etias_notice: string;
  last_verified_date: string;
  official_sources: {
    name: string;
    url: string;
  }[];
}

export interface SearchFilterState {
  destination: string;
  travelDate: string;
  travellers: number;
  budget: "all" | "budget" | "moderate" | "luxury";
}
