# GoEuroGuide 🇪🇺
> **Europe travel information and interactive trip planning platform**

GoEuroGuide is a modern, responsive European travel intelligence and trip-planning web application built with Next.js App Router, React 19, TypeScript, Tailwind CSS, and Firebase / Supabase.

---

## ✨ Features

- **European Destination Discovery:** Comprehensive country guides for France, Italy, Spain, Switzerland, Netherlands, Greece, and beyond.
- **Official Visa & Entry Guidance:** Clear, verified guidance on Schengen travel rules, the 90/180-day limitation, passport validity checklists, and direct links to official EU portals.
- **Interactive Trip Planner:** Build day-by-day itineraries, add custom activities, calculate costs, and print or export travel plans.
- **Travel Budget Calculator:** Estimate multi-category travel expenses (lodging, dining, transit, flights, insurance, emergency contingency).
- **Transport & Accommodation Guides:** High-speed rail corridors, Eurail advice, European hotel standards, and tourist city tax breakdowns.
- **Editorial Fact-Checking Standards:** Content verified against primary government and official tourism authorities with timestamps.
- **Global Search:** Accessible modal (`Ctrl+K` / `Cmd+K` / `Esc`) with live category filtering.
- **Responsive Magazine UI:** Inspired by premium European travel magazines with accessible color contrast and smooth micro-interactions.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language:** TypeScript (Strict)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Backend & Auth:** Firebase (Authentication, Cloud Firestore) / Supabase compatible
- **Forms & Validation:** React Hook Form & Zod

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/rabeyakterlima-design/goeuroguide.git
cd goeuroguide
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=goeuroguide.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=goeuroguide
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=goeuroguide.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📄 License
This project is licensed under the MIT License.
