import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/hooks/useCart";
import { MOCK_PRODUCTS } from "@/data/mockData";
import { ShoppingCart, Leaf, Minus, Plus } from "lucide-react";

const CATEGORIES = ["All", "Pantry", "Dairy", "Meat", "Beverages"];

export default function Shop() {
  const { addToCart, decreaseQuantity, cart } = useCart();
  const products = Object.values(MOCK_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-4rem)] flex flex-col md:flex-row gap-8">
      {/* Sidebar Categories */}
      <div className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-24">
          <h2 className="text-xl font-bold text-white mb-6">Categories</h2>
          <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center px-4 py-3 rounded-xl transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20"
                    : "text-zinc-400 hover:bg-zinc-800/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {selectedCategory === "All" ? "CarbonIQ Demo Shop" : selectedCategory}
          </h1>
          <p className="text-zinc-400 text-sm max-w-2xl">
            Add items to your cart to see how our AI analyzes the carbon footprint and suggests sustainable alternatives in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-all group flex flex-col relative"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl bg-zinc-800/50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {product.imageIcon}
                </div>
                <div className="flex items-center gap-1 text-[10px] font-medium px-2 py-1 bg-zinc-800/80 rounded-full text-zinc-300">
                  <Leaf className="w-3 h-3 text-emerald-400" />
                  {product.carbonEmissions} kg CO₂
                </div>
              </div>
              
              <h3 className="text-base font-semibold text-white mb-1 leading-tight">{product.name}</h3>
              <p className="text-xs text-zinc-500 mb-4">{product.category}</p>
              
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-800/50">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white">₹{product.price}</span>
                  <span className="text-[10px] text-zinc-500">{product.unit}</span>
                </div>
                
                {(() => {
                  const cartItem = cart.find((item) => item.product.id === product.id);
                  return cartItem ? (
                    <div className="flex items-center gap-3 bg-emerald-500 text-zinc-950 px-2 py-1 rounded-lg font-semibold shadow-lg shadow-emerald-500/20">
                      <button 
                        onClick={() => decreaseQuantity(product)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-emerald-600 rounded transition-colors active:scale-95"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-4 text-center text-sm">{cartItem.quantity}</span>
                      <button 
                        onClick={() => addToCart(product)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-emerald-600 rounded transition-colors active:scale-95"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(product)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium text-sm transition-colors active:scale-95 bg-white text-zinc-900 hover:bg-zinc-200"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      Add
                    </button>
                  );
                })()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
