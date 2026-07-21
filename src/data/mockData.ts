import type { Product, Recommendation } from "../types";

export const MOCK_PRODUCTS: Record<string, Product> = {
  "p_atta_regular": {
    id: "p_atta_regular",
    name: "Commercial Packaged Atta",
    category: "Pantry",
    price: 240,
    carbonEmissions: 3.5,
    unit: "5 kg",
    imageIcon: "🌾"
  },
  "p_atta_local": {
    id: "p_atta_local",
    name: "Local Chakki Atta (Paper Bag)",
    category: "Pantry",
    price: 260,
    carbonEmissions: 1.2,
    unit: "5 kg",
    imageIcon: "🥖"
  },
  "p_milk_plastic": {
    id: "p_milk_plastic",
    name: "Milk (Plastic Pouch)",
    category: "Dairy",
    price: 33,
    carbonEmissions: 1.8,
    unit: "500 ml",
    imageIcon: "🥛"
  },
  "p_milk_glass": {
    id: "p_milk_glass",
    name: "Milk (Returnable Glass)",
    category: "Dairy",
    price: 36,
    carbonEmissions: 0.4,
    unit: "500 ml",
    imageIcon: "🍶"
  },
  "p_rice_imported": {
    id: "p_rice_imported",
    name: "Imported Jasmine Rice",
    category: "Pantry",
    price: 350,
    carbonEmissions: 4.8,
    unit: "1 kg",
    imageIcon: "🍚"
  },
  "p_rice_local": {
    id: "p_rice_local",
    name: "Local Basmati Rice",
    category: "Pantry",
    price: 180,
    carbonEmissions: 1.5,
    unit: "1 kg",
    imageIcon: "🌾"
  },
  "p_oil_palm": {
    id: "p_oil_palm",
    name: "Refined Palm Oil",
    category: "Pantry",
    price: 110,
    carbonEmissions: 6.2,
    unit: "1 L",
    imageIcon: "🛢️"
  },
  "p_oil_mustard": {
    id: "p_oil_mustard",
    name: "Cold Pressed Mustard Oil",
    category: "Pantry",
    price: 180,
    carbonEmissions: 1.4,
    unit: "1 L",
    imageIcon: "🌻"
  },
  "p_protein_chicken": {
    id: "p_protein_chicken",
    name: "Frozen Chicken Breast",
    category: "Meat",
    price: 250,
    carbonEmissions: 8.5,
    unit: "500 g",
    imageIcon: "🍗"
  },
  "p_protein_soya": {
    id: "p_protein_soya",
    name: "Soya Chunks",
    category: "Pantry",
    price: 60,
    carbonEmissions: 0.9,
    unit: "250 g",
    imageIcon: "🥗"
  },
  "p_water_bottle": {
    id: "p_water_bottle",
    name: "Packaged Drinking Water",
    category: "Beverages",
    price: 20,
    carbonEmissions: 0.8,
    unit: "1 L",
    imageIcon: "💧"
  },
  "p_water_can": {
    id: "p_water_can",
    name: "Filtered Water (Returnable Can)",
    category: "Beverages",
    price: 80,
    carbonEmissions: 0.1,
    unit: "20 L",
    imageIcon: "🚰"
  },
  "p_tea_bags": {
    id: "p_tea_bags",
    name: "Premium Tea Bags",
    category: "Beverages",
    price: 150,
    carbonEmissions: 2.1,
    unit: "100 g",
    imageIcon: "☕"
  },
  "p_tea_loose": {
    id: "p_tea_loose",
    name: "Loose Leaf Assam Tea",
    category: "Beverages",
    price: 120,
    carbonEmissions: 0.5,
    unit: "250 g",
    imageIcon: "🍃"
  }
};

export const INITIAL_CART: any[] = [];
export const MOCK_RECOMMENDATIONS: Recommendation[] = [];

export const MOCK_ANALYTICS = {
  summary: {
    todaysOrders: 4205,
    averageCarbonScore: "B+",
    potentialCarbonSaved: 15200,
    acceptanceRate: 72
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
    { name: "Refined Palm Oil", occurrences: 3200, avgEmissions: 6.2 },
    { name: "Packaged Drinking Water", occurrences: 8500, avgEmissions: 0.8 },
    { name: "Commercial Packaged Atta", occurrences: 5400, avgEmissions: 3.5 },
    { name: "Frozen Chicken Breast", occurrences: 4200, avgEmissions: 8.5 }
  ]
};
