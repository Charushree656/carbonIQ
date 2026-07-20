import type { Product, Recommendation } from "../types";

export const MOCK_PRODUCTS: Record<string, Product> = {
  "p_apples_imp": {
    id: "p_apples_imp",
    name: "Imported Fuji Apples",
    category: "Produce",
    price: 5.99,
    carbonEmissions: 4.5,
    unit: "1 kg",
    imageIcon: "🍎"
  },
  "p_water_plastic": {
    id: "p_water_plastic",
    name: "Plastic Bottled Water",
    category: "Beverages",
    price: 1.99,
    carbonEmissions: 3.8,
    unit: "1L",
    imageIcon: "💧"
  },
  "p_butter_dairy": {
    id: "p_butter_dairy",
    name: "Dairy Butter",
    category: "Dairy",
    price: 4.49,
    carbonEmissions: 2.5,
    unit: "250g",
    imageIcon: "🧈"
  },
  "p_chicken": {
    id: "p_chicken",
    name: "Chicken Breast",
    category: "Meat",
    price: 8.99,
    carbonEmissions: 6.9,
    unit: "500g",
    imageIcon: "🍗"
  },
  "p_apples_local": {
    id: "p_apples_local",
    name: "Local Fuji Apples",
    category: "Produce",
    price: 4.99,
    carbonEmissions: 2.2,
    unit: "1 kg",
    imageIcon: "🍏"
  },
  "p_water_can": {
    id: "p_water_can",
    name: "Filtered Water Can (Reusable)",
    category: "Beverages",
    price: 2.50,
    carbonEmissions: 0.6,
    unit: "1L",
    imageIcon: "🚰"
  },
  "p_spread_plant": {
    id: "p_spread_plant",
    name: "Plant-based Spread",
    category: "Dairy Alternatives",
    price: 3.99,
    carbonEmissions: 0.7,
    unit: "250g",
    imageIcon: "🌻"
  }
};

export const INITIAL_CART = [
  { cartItemId: "c_1", product: MOCK_PRODUCTS["p_apples_imp"], quantity: 1 },
  { cartItemId: "c_2", product: MOCK_PRODUCTS["p_water_plastic"], quantity: 2 },
  { cartItemId: "c_3", product: MOCK_PRODUCTS["p_butter_dairy"], quantity: 1 },
  { cartItemId: "c_4", product: MOCK_PRODUCTS["p_chicken"], quantity: 1 },
];

export const MOCK_RECOMMENDATIONS: Recommendation[] = [
  {
    sourceId: "p_apples_imp",
    recommendedProduct: MOCK_PRODUCTS["p_apples_local"],
    carbonSaved: 2.3,
    tag: "Local Sourced"
  },
  {
    sourceId: "p_water_plastic",
    recommendedProduct: MOCK_PRODUCTS["p_water_can"],
    carbonSaved: 3.2,
    tag: "Reusable"
  },
  {
    sourceId: "p_butter_dairy",
    recommendedProduct: MOCK_PRODUCTS["p_spread_plant"],
    carbonSaved: 1.8,
    tag: "Vegan"
  }
];

export const MOCK_ANALYTICS = {
  summary: {
    todaysOrders: 14205,
    averageCarbonScore: "B+",
    potentialCarbonSaved: 12500, // in kg
    acceptanceRate: 68 // %
  },
  dailyTrend: [
    { date: "Mon", emissions: 4000, saved: 1200 },
    { date: "Tue", emissions: 3800, saved: 1500 },
    { date: "Wed", emissions: 4200, saved: 1100 },
    { date: "Thu", emissions: 3900, saved: 1800 },
    { date: "Fri", emissions: 4500, saved: 2100 },
    { date: "Sat", emissions: 5200, saved: 2800 },
    { date: "Sun", emissions: 4800, saved: 2400 },
  ],
  topOffenders: [
    { name: "Imported Beef", occurrences: 3200, avgEmissions: 15.5 },
    { name: "Plastic Cutlery Set", occurrences: 8500, avgEmissions: 1.2 },
    { name: "Bottled Water (24 pk)", occurrences: 5400, avgEmissions: 8.4 },
    { name: "Dairy Cheese", occurrences: 4200, avgEmissions: 6.1 }
  ]
};
