# Mock Data Plan

Because CarbonIQ is a prototype for a hackathon/investor pitch, we will not build a real backend. Instead, we will use static JSON structures to simulate the API and data layer.

## 1. Products Data (`products.json`)
Represents the items in the e-commerce store.
```json
[
  {
    "id": "p_1",
    "name": "Imported Fuji Apples",
    "category": "Produce",
    "price": 5.99,
    "carbonEmissions": 4.5,
    "unit": "kg"
  },
  {
    "id": "p_2",
    "name": "Plastic Bottled Water",
    "category": "Beverages",
    "price": 1.99,
    "carbonEmissions": 3.8,
    "unit": "1L"
  },
  {
    "id": "p_3",
    "name": "Dairy Butter",
    "category": "Dairy",
    "price": 3.49,
    "carbonEmissions": 2.5,
    "unit": "250g"
  }
]
```

## 2. Recommendations Data (`recommendations.json`)
Maps high-emission items to sustainable alternatives.
```json
[
  {
    "sourceId": "p_1",
    "recommendedId": "p_1_alt",
    "name": "Local Fuji Apples",
    "price": 4.99,
    "carbonEmissions": 2.2,
    "carbonSaved": 2.3,
    "tag": "Local Sourced"
  },
  {
    "sourceId": "p_2",
    "recommendedId": "p_2_alt",
    "name": "Filtered Water Can",
    "price": 2.50,
    "carbonEmissions": 0.6,
    "carbonSaved": 3.2,
    "tag": "Reusable"
  },
  {
    "sourceId": "p_3",
    "recommendedId": "p_3_alt",
    "name": "Plant-based Spread",
    "price": 3.99,
    "carbonEmissions": 0.7,
    "carbonSaved": 1.8,
    "tag": "Vegan"
  }
]
```

## 3. Dashboard Analytics (`analytics.json`)
Aggregated data for charts.
```json
{
  "summary": {
    "todaysOrders": 14205,
    "averageCarbonScore": "B+",
    "potentialCarbonSaved": 12500 // in kg
  },
  "dailyTrend": [
    { "date": "Mon", "emissions": 4000, "saved": 1200 },
    { "date": "Tue", "emissions": 3800, "saved": 1500 },
    { "date": "Wed", "emissions": 4200, "saved": 1100 }
  ],
  "topOffenders": [
    { "name": "Imported Beef", "occurrences": 3200, "avgEmissions": 15.5 },
    { "name": "Plastic Cutlery Set", "occurrences": 8500, "avgEmissions": 1.2 }
  ]
}
```

## 4. State Management Hook (`useCart`)
A custom React hook will manage:
- `cartItems`: Array of current products in the cart.
- `totalEmissions`: Calculated sum.
- `savings`: Calculated sum of accepted recommendations.
- `replaceItem(oldId, newId)`: Function to trigger the replacement logic and update the totals.
