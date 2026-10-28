import {
  collection,
  doc,
  getDocs,
  setDoc,
  addDoc,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./config";
import { Country, TravelGuide } from "../types";
import { SAMPLE_COUNTRIES, FEATURED_ARTICLES } from "../mock-data";

// Collection references
export const COLLECTIONS = {
  COUNTRIES: "countries",
  DESTINATIONS: "destinations",
  GUIDES: "guides",
  ITINERARIES: "itineraries",
  BUDGETS: "budgets",
  USERS: "users",
  FAVORITES: "favorites",
  NEWSLETTER: "newsletter_subscriptions",
};

// 1. Countries
export async function getCountries(): Promise<Country[]> {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.COUNTRIES));
    if (!querySnapshot.empty) {
      return querySnapshot.docs.map((doc) => doc.data() as Country);
    }
  } catch (error) {
    console.warn("Firestore offline or empty, falling back to starter data:", error);
  }
  return SAMPLE_COUNTRIES;
}

export async function getCountryBySlug(slug: string): Promise<Country | null> {
  try {
    const q = query(
      collection(db, COLLECTIONS.COUNTRIES),
      where("slug", "==", slug)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data() as Country;
    }
  } catch (error) {
    console.warn("Firestore fetch error, checking local fallback:", error);
  }
  return SAMPLE_COUNTRIES.find((c) => c.slug === slug) || null;
}

// 2. Travel Guides
export async function getTravelGuides(): Promise<TravelGuide[]> {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.GUIDES));
    if (!querySnapshot.empty) {
      return querySnapshot.docs.map((doc) => doc.data() as TravelGuide);
    }
  } catch (error) {
    console.warn("Firestore offline or empty, falling back to starter guides:", error);
  }
  return FEATURED_ARTICLES;
}

export async function getGuideBySlug(slug: string): Promise<TravelGuide | null> {
  try {
    const q = query(collection(db, COLLECTIONS.GUIDES), where("slug", "==", slug));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data() as TravelGuide;
    }
  } catch (error) {
    console.warn("Firestore fetch error, checking local fallback:", error);
  }
  return FEATURED_ARTICLES.find((a) => a.slug === slug) || null;
}

// 3. User Saved Itineraries
export async function saveItinerary(userId: string, tripData: Record<string, unknown>) {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.ITINERARIES), {
      userId,
      ...tripData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error saving itinerary to Firestore:", error);
    throw error;
  }
}

export async function getUserItineraries(userId: string) {
  try {
    const q = query(
      collection(db, COLLECTIONS.ITINERARIES),
      where("userId", "==", userId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch (error) {
    console.error("Error fetching itineraries:", error);
    return [];
  }
}

// 4. Newsletter Subscription
export async function subscribeNewsletter(email: string) {
  try {
    await addDoc(collection(db, COLLECTIONS.NEWSLETTER), {
      email,
      subscribedAt: serverTimestamp(),
      active: true,
    });
    return true;
  } catch (error) {
    console.error("Error saving newsletter subscription:", error);
    return false;
  }
}

// 5. Seed Starter Content to Firestore
export async function seedFirestoreStarterData() {
  try {
    // Seed countries
    for (const country of SAMPLE_COUNTRIES) {
      const countryRef = doc(db, COLLECTIONS.COUNTRIES, country.slug);
      await setDoc(countryRef, country, { merge: true });
    }

    // Seed articles
    for (const guide of FEATURED_ARTICLES) {
      const guideRef = doc(db, COLLECTIONS.GUIDES, guide.slug);
      await setDoc(guideRef, guide, { merge: true });
    }

    return { success: true, message: "Starter European data seeded to Firestore successfully!" };
  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error("Error seeding starter data to Firestore:", err);
    return { success: false, error: err.message || "Failed to seed Firestore" };
  }
}
