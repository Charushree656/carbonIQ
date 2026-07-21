import { motion } from "framer-motion";
import { useCart } from "@/hooks/useCart";
import { MOCK_PRODUCTS } from "@/data/mockData";
import { ShoppingCart, Leaf } from "lucide-react";

export default function Shop() {
  const { addToCart } = useCart();
  const products = Object.values(MOCK_PRODUCTS);

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">CarbonIQ Demo Shop</h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          Add items to your cart to see how our AI analyzes the carbon footprint and suggests sustainable alternatives in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-zinc-200 dark:border-zinc-800 hover:bg-zinc-900 transition-all group flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl bg-zinc-800/50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {product.imageIcon}
              </div>
              <div className="flex items-center gap-1 text-xs font-medium px-2 py-1 bg-zinc-800 rounded-full text-zinc-400">
                <Leaf className="w-3 h-3 text-zinc-900 dark:text-white" />
                {product.carbonEmissions} kg CO₂
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
            <p className="text-sm text-zinc-400 mb-4">{product.category}</p>
            
            <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-800/50">
              <div>
                <span className="text-lg font-bold text-white">₹{product.price}</span>
                <span className="text-xs text-zinc-500 ml-1">/ {product.unit}</span>
              </div>
              
              <button
                onClick={() => addToCart(product)}
                className="flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 text-zinc-950 px-4 py-2 rounded-lg font-semibold hover:bg-zinc-800 dark:bg-zinc-200 transition-colors active:scale-95"
              >
                <ShoppingCart className="w-4 h-4" />
                Add
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
