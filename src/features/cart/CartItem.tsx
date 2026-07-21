import { motion } from "framer-motion";
import type { CartItemType } from "../../types";
import { CarbonBadge } from "../../components/shared/CarbonBadge";
import { useCart } from "@/hooks/useCart";
import { Minus, Plus, Sparkles } from "lucide-react";

export function CartItem({ item }: { item: CartItemType }) {
  const { addToCart, decreaseQuantity, optimizedProductIds } = useCart();
  const isOptimized = optimizedProductIds.has(item.product.id);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center justify-between p-4 rounded-xl border relative overflow-hidden transition-all duration-500 ${
        isOptimized 
          ? "bg-emerald-950/20 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)]" 
          : "bg-zinc-950 border-zinc-800"
      }`}
    >
      {isOptimized && (
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none" />
      )}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl">
          {item.product.imageIcon}
        </div>
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <h4 className="text-zinc-100 font-medium">{item.product.name}</h4>
            {isOptimized && (
              <span className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
                <Sparkles className="w-3 h-3" />
                AI Choice
              </span>
            )}
          </div>
          <p className="text-zinc-400 text-sm">{item.product.unit} • ₹{item.product.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-3">
        <CarbonBadge emissions={item.product.carbonEmissions} />
        
        <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded-lg font-semibold border border-emerald-500/20">
          <button 
            onClick={() => decreaseQuantity(item.product)}
            className="w-6 h-6 flex items-center justify-center hover:bg-emerald-500/20 rounded-md transition-colors active:scale-95"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="w-4 text-center text-sm">{item.quantity}</span>
          <button 
            onClick={() => addToCart(item.product)}
            className="w-6 h-6 flex items-center justify-center hover:bg-emerald-500/20 rounded-md transition-colors active:scale-95"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
