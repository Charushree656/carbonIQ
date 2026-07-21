import { motion } from "framer-motion";
import type { CartItemType } from "../../types";
import { CarbonBadge } from "../../components/shared/CarbonBadge";

export function CartItem({ item }: { item: CartItemType }) {
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
      <div className="flex flex-col items-end gap-2">
        <CarbonBadge emissions={item.product.carbonEmissions} />
      </div>
    </motion.div>
  );
}
