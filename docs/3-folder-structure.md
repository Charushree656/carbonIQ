# Folder Structure

The project will follow a feature-based scalable architecture.

```text
src/
├── assets/             # Static assets like images, SVG illustrations, and icons
├── components/         # Global reusable components (Buttons, Cards, Inputs)
│   ├── ui/             # Base UI components (shadcn/ui output)
│   └── shared/         # Cross-feature components (e.g., CarbonScoreBadge)
├── features/           # Feature-specific components and logic
│   ├── cart/           # Cart overview, item list, checkout summary
│   ├── recommendations/# AI recommendation cards, replacement logic
│   ├── dashboard/      # Analytics metrics, charts, tables
│   └── landing/        # Hero section, problem/solution showcase
├── layouts/            # Page layout wrappers
│   └── MainLayout.tsx  # Includes Navbar and Footer
├── pages/              # Route level components
│   ├── Home.tsx        # (/) Landing Page
│   ├── Demo.tsx        # (/demo) Interactive Demo
│   ├── Dashboard.tsx   # (/dashboard) Analytics Dashboard
│   ├── Api.tsx         # (/api) Developer Showcase
│   └── About.tsx       # (/about) Product Vision
├── hooks/              # Custom React hooks (e.g., useCart, useEmissions)
├── services/           # Mock API endpoints (e.g., analyzeCart())
├── data/               # Static mock data (products.json, stats.json)
├── types/              # TypeScript interfaces and types
├── utils/              # Helper functions (formatting numbers, calculating CO2)
├── App.tsx             # Root component and router configuration
└── main.tsx            # React entry point
```
