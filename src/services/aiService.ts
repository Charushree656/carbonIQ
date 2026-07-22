// @ts-ignore
import { GoogleGenAI } from '@google/genai';
import { MOCK_PRODUCTS } from '../data/mockData';
import type { CartItemType, Recommendation } from '../types';

export const aiService = {
  async analyzeCart(cartItems: CartItemType[]): Promise<Recommendation[]> {
    // Fake loading delay to simulate AI scan
    await new Promise(resolve => setTimeout(resolve, 600));

    if (cartItems.length === 0) return [];

    const predefinedRecommendations: Record<string, any> = {
      "p_atta_regular": {
        recommendedProductId: "p_atta_local",
        carbonSaved: 2.3,
        tag: "Locally Milled"
      },
      "p_milk_plastic": {
        recommendedProductId: "p_milk_glass",
        carbonSaved: 1.4,
        tag: "Returnable Packaging"
      },
      "p_rice_imported": {
        recommendedProductId: "p_rice_local",
        carbonSaved: 3.3,
        tag: "Locally Sourced"
      },
      "p_oil_palm": {
        recommendedProductId: "p_oil_mustard",
        carbonSaved: 4.8,
        tag: "Sustainable Alternative"
      },
      "p_protein_chicken": {
        recommendedProductId: "p_protein_soya",
        carbonSaved: 7.6,
        tag: "Plant-based"
      },
      "p_water_bottle": {
        recommendedProductId: "p_water_can",
        carbonSaved: 0.7,
        tag: "Bulk Packaging"
      },
      "p_tea_bags": {
        recommendedProductId: "p_tea_loose",
        carbonSaved: 1.6,
        tag: "Zero Waste"
      },
      "p_beef_mince": {
         recommendedProductId: "p_protein_soya",
         carbonSaved: 25.6,
         tag: "Plant-based"
      },
      "p_coffee_pods": {
         recommendedProductId: "p_coffee_beans",
         carbonSaved: 3.2,
         tag: "Zero Waste"
      },
      "p_detergent_liquid": {
         recommendedProductId: "p_detergent_powder",
         carbonSaved: 3.4,
         tag: "Cardboard Packaging"
      }
    };

    const recommendations: Recommendation[] = [];

    for (const item of cartItems) {
      const rec = predefinedRecommendations[item.product.id];
      if (rec) {
        const recommendedProduct = MOCK_PRODUCTS[rec.recommendedProductId];
        if (recommendedProduct) {
          recommendations.push({
            sourceId: item.product.id,
            recommendedProduct,
            carbonSaved: rec.carbonSaved,
            tag: rec.tag
          });
        }
      }
    }

    return recommendations;
  }
};
