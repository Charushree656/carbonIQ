# User Flow

## Entry Point: Landing Page
1. User arrives at the root URL (`/`).
2. Encounters a premium, dark-mode landing page with the headline "Carbon Intelligence for Every Shopping Cart."
3. User scrolls through the **Problem** (invisible emissions) and **Solution** (CarbonIQ engine) sections.
4. User clicks **"Try Interactive Demo"** in the Hero section or Navbar.

## The Aha! Moment: Interactive Demo
5. User is routed to `/demo`.
6. User sees a pre-populated shopping cart with standard, high-emission grocery items (e.g., Imported Apples, Bottled Water).
7. A summary panel shows the **Total Carbon Emissions** and an equivalence (e.g., "Equivalent to driving 48 km").
8. The CarbonIQ engine (simulated) presents actionable **AI Recommendations**:
   - "Replace Imported Apples with Local Apples to save 2.3 kg CO₂."
9. User clicks the **"Replace"** button.
10. **Micro-interaction:** The old item slides out, the new item slides in. 
11. The Total Carbon Emissions number rolls down dynamically, and a "Savings" metric increments. The equivalence text updates (e.g., "Equivalent to driving 30 km").

## Expanding the Vision: Dashboard & API
12. User navigates to **Dashboard** (`/dashboard`) via the Navbar.
13. User views aggregated analytics (mocked for a client like Zepto), understanding how CarbonIQ provides value at scale (tracking total carbon saved across thousands of orders).
14. User navigates to **API Showcase** (`/api`).
15. User views the clean, simple JSON structures, understanding how easy it is for engineering teams to integrate this into existing checkout flows.
