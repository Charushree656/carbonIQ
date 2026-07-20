# Product Requirements Document (PRD)

## 1. Product Vision
CarbonIQ is a B2B SaaS platform that enables e-commerce companies to estimate the carbon footprint of a customer's shopping cart in real-time and recommend lower-carbon alternatives before checkout. 

**Core Optimization Vector:** Sustainability (alongside Price, Delivery Time, and Discounts).

## 2. Target Audience
**Primary:** E-commerce companies (e.g., Amazon, Blinkit, Zepto, Instamart).
**Secondary:** Sustainability teams, Product managers, Investors, Hackathon judges.

## 3. Core Pages & Features

### 3.1 Landing Page (`/`)
- **Headline:** "Carbon Intelligence for Every Shopping Cart."
- **Description:** Value proposition and overview.
- **Problem Statement:** Lack of visibility into environmental impact.
- **Solution & How It Works:** Step-by-step interactive explanation from cart analysis to green recommendations.
- **Calls to Action (CTAs):** Try Interactive Demo, View API.

### 3.2 Interactive Demo (`/demo`)
- **Core Functionality:** Realistic shopping cart with mock products.
- **Key Metrics Displayed:** Estimated Carbon Score, Total Carbon Emissions, Top Emission Sources, Equivalent Comparison (e.g., "driving 48 km").
- **AI Recommendations:** Suggesting local/greener alternatives (e.g., Imported Apples -> Local Apples).
- **Interactivity:** One-click replacement of items, which dynamically and smoothly updates the carbon score, emissions, and savings.

### 3.3 Analytics Dashboard (`/dashboard`)
- **Mock Customer:** Example integration for "Zepto".
- **Key Metrics:** Today's Orders, Average Carbon Score, Potential Carbon Saved, Top High-Emission Products.
- **Visualizations:** Daily emissions chart, monthly trends, recommendation acceptance rate, total carbon savings.

### 3.4 Developer API Showcase (`/api`)
- **Goal:** Show CarbonIQ as a developer-first product.
- **Content:** Example request/response payload for `/analyze-cart`. 
- **Non-functional:** Visual showcase of API design and integration simplicity.

### 3.5 About Page (`/about`)
- **Goal:** Detail the product vision and mission.

## 4. Design & UX Guidelines
- **Theme:** Premium, minimal, dark mode, modern, elegant (Apple-quality).
- **Color Palette:** Subtle gradients, constrained use of green (only to signify sustainability).
- **UI Elements:** Use of shadcn/ui, Magic UI, and Aceternity UI.
- **Interactivity:** Smooth micro-animations with Framer Motion. Avoid excessive motion; keep it professional.

## 5. Non-Goals
- Fully functional backend (API is mocked).
- Real database integration.
- Consumer-facing actual e-commerce application (it's a B2B product showcase).
