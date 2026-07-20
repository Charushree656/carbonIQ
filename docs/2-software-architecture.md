# Software Architecture

## Core Technologies
- **Framework:** React with Vite for fast HMR and optimized builds.
- **Language:** TypeScript for type safety and superior developer experience.
- **Routing:** React Router for client-side navigation.

## Styling & UI Components
- **Core Styling:** Tailwind CSS (utility-first, responsive, dark-mode ready).
- **Component Libraries:** 
  - shadcn/ui (accessible, customizable base components).
  - Aceternity UI (premium, modern interactive elements).
  - Magic UI (subtle, high-quality effects).
- **Animations:** Framer Motion for complex layout transitions and micro-animations.
- **Icons:** Lucide React for consistent, crisp iconography.
- **Charts:** Recharts for rendering the analytics dashboard.

## State Management
- **Local State:** React `useState` and `useReducer`.
- **Global State:** React Context (or Zustand if complexity increases) specifically for managing the Interactive Demo's shopping cart state and active recommendations.

## Data Layer (Mocked)
- Since no real backend is required, all data will be mocked on the client-side.
- **Mock Services:** Services will simulate API latency (e.g., `setTimeout`) to show realistic loading states, especially in the interactive demo.

## Deployment Strategy
- The application will be bundled as a static site via Vite (`npm run build`).
- Can be deployed seamlessly to Vercel, Netlify, or GitHub Pages for the hackathon presentation.
