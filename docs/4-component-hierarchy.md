# Component Hierarchy

## 1. Global Shell
- **`App`**
  - **`Router`**
    - **`MainLayout`**
      - **`Navbar`** (Logo, Links: Demo, Dashboard, API, About)
      - **`PageContent`** (Dynamic based on route)
      - **`Footer`** (Copyright, Links)

## 2. Page: Home (`/`)
- **`Home`**
  - **`HeroSection`** (Headline, Subtitle, CTA buttons)
  - **`ProblemSection`** (Text layout highlighting the invisible carbon cost)
  - **`SolutionSection`** (Animated graphic: Cart -> CarbonIQ -> Green Cart)
  - **`HowItWorksSection`** (Step-by-step visual list)

## 3. Page: Interactive Demo (`/demo`)
- **`Demo`**
  - **`PageHeader`** (Title and context)
  - **`DemoContainer`** (Two-column layout)
    - **Left Column: `CartView`**
      - **`CartItemList`**
        - **`CartItem`** (Displays mock product, image, price, individual emissions)
      - **`RecommendationsPanel`**
        - **`SuggestionCard`** (Old Item -> New Item, Carbon Saved, "Replace" CTA)
    - **Right Column: `ImpactSummary`**
      - **`TotalCarbonScore`** (Big numeric display)
      - **`EquivalenceWidget`** (e.g., "Equal to driving 48km")
      - **`SavingsTracker`** (Tracks CO2 saved via accepted recommendations)

## 4. Page: Dashboard (`/dashboard`)
- **`Dashboard`**
  - **`MetricsGrid`**
    - **`MetricCard`** (Today's Orders, Avg Score, Carbon Saved)
  - **`ChartsArea`**
    - **`DailyEmissionsChart`** (Recharts Line/Bar chart)
    - **`AcceptanceRateChart`** (Recharts Pie chart)
  - **`TopOffendersTable`** (List of high-emission items frequently bought)

## 5. Page: API Showcase (`/api`)
- **`ApiShowcase`**
  - **`ApiEndpointSummary`** (POST `/analyze-cart`)
  - **`CodeBlock`** (Request JSON payload)
  - **`CodeBlock`** (Response JSON payload with emissions & recommendations)

## 6. Page: About (`/about`)
- **`About`**
  - **`VisionStatement`**
  - **`Team/Story`** (Optional)
