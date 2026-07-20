# Development Roadmap

This roadmap breaks the development of the CarbonIQ prototype into manageable phases. The goal is to build an impressive, functional UI without getting bogged down by backend complexity.

## Phase 1: Project Initialization & Foundation
- Scaffold React + Vite + TypeScript project.
- Install Tailwind CSS and configure the `tailwind.config.js`.
- Install `shadcn/ui` base and set up the dark mode theme.
- Install `framer-motion`, `lucide-react`, and `recharts`.
- Create the core folder structure (`src/components`, `src/pages`, etc.).
- Set up React Router with empty shell pages for `/`, `/demo`, `/dashboard`, `/api`, `/about`.
- Implement `MainLayout` with a responsive Navbar and Footer.

## Phase 2: Design System & Shared Components
- Create global design tokens (colors, typography). Note: Keep it premium, dark mode default, subtle green accents.
- Implement shared UI components:
  - `Button` (with primary, secondary, and ghost variants).
  - `Card` (with glassmorphism or subtle borders).
  - `CarbonBadge` (A colored pill displaying a carbon score or emissions number).

## Phase 3: The Landing Page (`/`)
- Implement the Hero Section.
- Build the "Problem" and "Solution" text/graphic sections.
- Create the "How it Works" animated flow.
- Ensure animations (Framer Motion) are smooth but not overwhelming.

## Phase 4: The Interactive Demo (`/demo`) - *Critical Path*
- Create the mock JSON data files in `src/data/`.
- Build the `useCart` hook to manage the demo state (items, emissions, replacements).
- Implement the `CartItemList` and `CartItem` component.
- Implement the `RecommendationsPanel` and `SuggestionCard`.
- Implement the `ImpactSummary` widget.
- Wire up the "Replace" button to trigger state changes.
- Add micro-animations so the numbers tick up/down smoothly and the replaced item physically swaps out.

## Phase 5: The Analytics Dashboard (`/dashboard`)
- Create the `MetricsGrid` with top-level stats.
- Integrate Recharts to build the `DailyEmissionsChart` and `AcceptanceRateChart`.
- Build the `TopOffendersTable`.
- Wire it all up to the mock analytics JSON data.

## Phase 6: API Showcase & Polish
- Build the API Showcase (`/api`) page with formatted code blocks.
- Build a simple About (`/about`) page.
- Perform a final aesthetic pass: check alignments, font weights, gradients, and micro-interactions.
- Test responsive design on mobile/tablet viewpoints.
