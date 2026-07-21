import { motion } from "framer-motion";
import type { CartItemType } from "../../types";
import { CarbonBadge } from "../../components/shared/CarbonBadge";
import { useCart } from "@/hooks/useCart";
import { Minus, Plus } from "lucide-react";

export function CartItem({ item }: { item: CartItemType }) {
  const { addToCart, decreaseQuantity } = useCart();
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-between p-4 bg-zinc-950 border border-zinc-800 rounded-xl"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl">
          {item.product.imageIcon}
        </div>
        <div>
          <h4 className="text-zinc-100 font-medium">{item.product.name}</h4>
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
