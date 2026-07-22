// @ts-ignore
import { GoogleGenAI } from '@google/genai';
import { MOCK_PRODUCTS } from '../data/mockData';
import type { CartItemType, Recommendation } from '../types';

export const aiService = {
  async analyzeCart(cartItems: CartItemType[]): Promise<Recommendation[]> {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("VITE_GEMINI_API_KEY is missing. AI analysis skipped.");
      throw new Error("Missing Gemini API Key");
    }

    if (cartItems.length === 0) return [];

    const ai = new GoogleGenAI({ apiKey });

    // Prepare context
    const cartSummary = cartItems.map(item => ({
      id: item.product.id,
      name: item.product.name,
      emissions: item.product.carbonEmissions
    }));

    const catalogSummary = Object.values(MOCK_PRODUCTS).map(p => ({
      id: p.id,
      name: p.name,
      emissions: p.carbonEmissions,
      category: p.category
    }));

    const prompt = `
You are CarbonIQ, an expert AI sustainability assistant.
Analyze the user's shopping cart and suggest lower-carbon alternatives strictly from our provided catalog.

USER CART:
${JSON.stringify(cartSummary, null, 2)}

OUR CATALOG:
${JSON.stringify(catalogSummary, null, 2)}

Rules:
1. Find high-emission items in the user's cart.
2. Suggest a lower-emission alternative from the catalog that is in the same or similar category and makes logical sense.
3. Only use products that exist in the provided catalog.
4. Return an array of recommendations.
5. If the cart is already perfectly optimized, return an empty array.

Return ONLY a JSON array with this exact structure for each recommendation:
[
  {
    "sourceId": "id_of_item_in_cart",
    "recommendedProductId": "id_of_alternative_item_from_catalog",
    "carbonSaved": <number, difference in emissions>,
    "tag": "e.g., Local Sourced, Returnable, Plant-based"
  }
]
`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.2, // Low temperature for deterministic output
        }
      });

      let responseText = response.text;
      if (!responseText) return [];
      
      // Clean up potential markdown code blocks before parsing
      responseText = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();
      
      let parsed;
      try {
        parsed = JSON.parse(responseText);
      } catch (parseError) {
        console.error("JSON parse error. Raw text:", responseText);
        throw new Error("AI returned malformed JSON");
      }
      
      // Map recommendedProductId back to actual Product objects
      const recommendations: Recommendation[] = parsed.map((item: any) => {
        const recommendedProduct = MOCK_PRODUCTS[item.recommendedProductId];
        if (!recommendedProduct) return null; // Fallback in case of hallucination
        
        return {
          sourceId: item.sourceId,
          recommendedProduct,
          carbonSaved: item.carbonSaved,
          tag: item.tag
        };
      }).filter(Boolean); // Remove nulls

      return recommendations;

    } catch (error) {
      console.error("Error analyzing cart with Gemini:", error);
      throw error;
    }
  }
};
