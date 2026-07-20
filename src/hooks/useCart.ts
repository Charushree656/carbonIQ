import { useState, useMemo } from 'react';
import type { CartItemType, Recommendation } from '../types';
import { INITIAL_CART, MOCK_RECOMMENDATIONS } from '../data/mockData';

export function useCart() {
  const [cart, setCart] = useState<CartItemType[]>(INITIAL_CART);
  const [savings, setSavings] = useState<number>(0);

  // Active recommendations are those where the source item is in the cart
  const activeRecommendations = useMemo(() => {
    return MOCK_RECOMMENDATIONS.filter(rec => 
      cart.some(item => item.product.id === rec.sourceId)
    );
  }, [cart]);

  const totalEmissions = useMemo(() => {
    return cart.reduce((total, item) => total + (item.product.carbonEmissions * item.quantity), 0);
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }, [cart]);

  const applyRecommendation = (sourceId: string, recommendation: Recommendation) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.product.id === sourceId) {
          // Increment savings
          setSavings(prev => prev + (recommendation.carbonSaved * item.quantity));
          return {
            ...item,
            product: recommendation.recommendedProduct
          };
        }
        return item;
      });
    });
  };

  return {
    cart,
    savings,
    activeRecommendations,
    totalEmissions,
    totalPrice,
    applyRecommendation
  };
}
