import { createContext, useContext, useState, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { CartItemType, Product, Recommendation } from '../types';
import { INITIAL_CART } from '../data/mockData';

interface CartContextType {
  cart: CartItemType[];
  addToCart: (product: Product) => void;
  removeFromCart: (cartItemId: string) => void;
  savings: number;
  activeRecommendations: Recommendation[];
  setActiveRecommendations: (recs: Recommendation[]) => void;
  totalEmissions: number;
  totalPrice: number;
  applyRecommendation: (sourceId: string, recommendation: Recommendation) => void;
  clearRecommendations: () => void;
  optimizedProductIds: Set<string>;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItemType[]>(INITIAL_CART);
  const [savings, setSavings] = useState<number>(0);
  const [activeRecommendations, setActiveRecommendations] = useState<Recommendation[]>([]);
  const [optimizedProductIds, setOptimizedProductIds] = useState<Set<string>>(new Set());

  const totalEmissions = useMemo(() => {
    return cart.reduce((total, item) => total + (item.product.carbonEmissions * item.quantity), 0);
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { cartItemId: `c_${Date.now()}_${Math.random()}`, product, quantity: 1 }];
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const clearRecommendations = () => {
    setActiveRecommendations([]);
  };

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
    // Remove the applied recommendation
    setActiveRecommendations(prev => prev.filter(r => r.sourceId !== sourceId));
    // Mark the new product as optimized so the AI doesn't re-analyze it
    setOptimizedProductIds(prev => {
      const next = new Set(prev);
      next.add(recommendation.recommendedProduct.id);
      return next;
    });
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      savings,
      activeRecommendations,
      setActiveRecommendations,
      totalEmissions,
      totalPrice,
      applyRecommendation,
      clearRecommendations,
      optimizedProductIds
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
