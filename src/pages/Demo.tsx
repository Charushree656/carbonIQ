import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/hooks/useCart";
import { CartItem } from "@/features/cart/CartItem";
import { SuggestionCard } from "@/features/recommendations/SuggestionCard";
import { ImpactSummary } from "@/features/cart/ImpactSummary";
import { ShieldCheck, ShoppingCart } from "lucide-react";

export default function Demo() {
  const { cart, activeRecommendations, totalEmissions, savings, applyRecommendation } = useCart();

  return (
    <div className="py-12 max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-4">Interactive Demo</h1>
        <p className="text-zinc-400 max-w-2xl text-lg">
          This is a simulated shopping cart. CarbonIQ intercepts the cart contents in real-time, 
          analyzes the carbon footprint, and offers sustainable alternatives before checkout.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column: Cart & Recommendations */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Active Recommendations Panel */}
          <AnimatePresence>
            {activeRecommendations.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  <h2 className="text-xl font-semibold text-white">CarbonIQ Recommendations</h2>
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
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart className="w-5 h-5 text-zinc-400" />
              <h2 className="text-xl font-semibold text-white">Your Cart</h2>
            </div>
            
            <div className="space-y-3">
              <AnimatePresence mode="popLayout">
                {cart.map(item => (
                  <CartItem key={item.cartItemId} item={item} />
                ))}
              </AnimatePresence>
            </div>
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
