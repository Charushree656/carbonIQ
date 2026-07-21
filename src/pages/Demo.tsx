import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/hooks/useCart";
import { CartItem } from "@/features/cart/CartItem";
import { SuggestionCard } from "@/features/recommendations/SuggestionCard";
import { ImpactSummary } from "@/features/cart/ImpactSummary";
import { ShieldCheck, ShoppingCart, Loader2, AlertCircle } from "lucide-react";
import { aiService } from "@/services/aiService";
import { Link } from "react-router-dom";

export default function Demo() {
  const { cart, activeRecommendations, setActiveRecommendations, totalEmissions, savings, applyRecommendation, optimizedProductIds } = useCart();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const lastAnalyzedProductIds = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (cart.length === 0) {
      setActiveRecommendations([]);
      lastAnalyzedProductIds.current.clear();
      return;
    }

    // Check if there are new unoptimized products in the cart
    const currentProductIds = new Set(cart.map(item => item.product.id));
    const hasNewUnoptimizedProducts = cart.some(item => 
      !lastAnalyzedProductIds.current.has(item.product.id) && 
      !optimizedProductIds.has(item.product.id)
    );

    if (!hasNewUnoptimizedProducts) {
      // If we just removed items or applied a recommendation, we don't need to re-analyze.
      // But we should clean up recommendations for products that are no longer in the cart.
      setActiveRecommendations(activeRecommendations.filter((rec: any) => currentProductIds.has(rec.sourceId)));
      return;
    }

    const runAnalysis = async () => {
      setIsAnalyzing(true);
      setError(null);
      try {
        const recommendations = await aiService.analyzeCart(cart);
        
        // Filter out recommendations for products that are already optimized
        const validRecs = recommendations.filter(rec => !optimizedProductIds.has(rec.sourceId));
        setActiveRecommendations(validRecs);
        
        lastAnalyzedProductIds.current = new Set(cart.map(item => item.product.id));
      } catch (err) {
        console.error("Analysis failed:", err);
        setError("AI analysis failed. Please ensure your Gemini API key is set in .env.local");
      } finally {
        setIsAnalyzing(false);
      }
    };

    // Small debounce so rapid cart changes don't spam the API
    const timeoutId = setTimeout(runAnalysis, 1000);
    return () => clearTimeout(timeoutId);

  }, [cart, setActiveRecommendations, optimizedProductIds]);

  return (
    <div className="py-12 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-4">Your Shopping Cart</h1>
        <p className="text-zinc-400 max-w-2xl text-lg">
          Review your items. CarbonIQ automatically analyzes your cart in real-time to suggest sustainable, lower-emission alternatives from our catalog.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column: Cart & Recommendations */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* AI Analysis State & Recommendations Panel */}
          <AnimatePresence mode="wait">
            {isAnalyzing && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 flex items-center gap-3"
              >
                <Loader2 className="w-5 h-5 text-zinc-500 animate-spin" />
                <h3 className="text-zinc-900 dark:text-zinc-100 font-medium">
                  CarbonIQ AI is analyzing your cart...
                </h3>
              </motion.div>
            )}

            {error && !isAnalyzing && (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-red-950/30 border border-red-500/30 rounded-xl p-4 flex items-center gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-500" />
                <p className="text-red-400 text-sm">{error}</p>
              </motion.div>
            )}

            {!isAnalyzing && activeRecommendations.length > 0 && (
              <motion.div 
                key="recommendations"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="w-5 h-5 text-zinc-900 dark:text-white" />
                  <h2 className="text-xl font-semibold text-white">Smart Recommendations</h2>
                </div>
                
                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {activeRecommendations.map(rec => (
                      <SuggestionCard 
                        key={rec.sourceId} 
                        recommendation={rec} 
                        onReplace={applyRecommendation} 
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Shopping Cart List */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-zinc-400" />
                <h2 className="text-xl font-semibold text-white">Cart Items</h2>
              </div>
              <Link to="/shop" className="text-sm text-zinc-900 dark:text-white hover:text-zinc-600 dark:text-zinc-400">
                + Add more items
              </Link>
            </div>
            
            {cart.length === 0 ? (
              <div className="bg-zinc-900/50 border border-zinc-800 border-dashed rounded-xl p-12 text-center">
                <p className="text-zinc-500 mb-4">Your cart is empty.</p>
                <Link to="/shop" className="bg-white text-zinc-950 px-6 py-2 rounded-lg font-medium hover:bg-zinc-200 transition-colors">
                  Go to Shop
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                <AnimatePresence mode="popLayout">
                  {cart.map(item => (
                    <CartItem key={item.cartItemId} item={item} />
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
          
        </div>

        {/* Right Column: Impact Summary */}
        <div>
          <ImpactSummary totalEmissions={totalEmissions} savings={savings} />
        </div>
      </div>
    </div>
  );
}
