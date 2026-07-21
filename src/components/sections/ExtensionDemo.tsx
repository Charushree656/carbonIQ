import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Search, ShoppingCart, Leaf, ChevronRight, X, MousePointer2 } from "lucide-react";

export default function ExtensionDemo() {
  const [step, setStep] = useState(0);

  return (
    <section className="py-24 bg-zinc-950 border-y border-zinc-900/50 overflow-hidden relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">CarbonIQ for Browsers</h2>
          <p className="text-zinc-400 text-lg">
            Not a platform partner yet? Our Chrome Extension brings climate intelligence directly to Amazon, Flipkart, and more for individual consumers.
          </p>
        </div>

        {/* Browser Mockup */}
        <div className="max-w-5xl mx-auto rounded-xl border border-zinc-700 bg-zinc-900 shadow-2xl overflow-hidden relative" onMouseEnter={() => setStep(1)} onMouseLeave={() => setStep(0)}>
          
          {/* Browser Header */}
          <div className="bg-zinc-800 p-3 flex items-center gap-4 border-b border-zinc-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 max-w-xl bg-zinc-900 rounded-md h-7 flex items-center px-3 text-xs text-zinc-400 font-mono">
              amazon.com/dp/B08F...
            </div>
            <div className="ml-auto flex items-center gap-3">
              <div className="w-6 h-6 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center cursor-pointer shadow-sm">
                <Leaf className="w-4 h-4 text-zinc-400" />
              </div>
            </div>
          </div>

          {/* E-commerce Mockup */}
          <div className="bg-white p-6 md:p-10 flex flex-col md:flex-row gap-8 relative h-[500px]">
            {/* Fake Amazon Nav */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-zinc-900 flex items-center px-6 gap-6 z-0">
              <span className="font-bold text-white text-xl tracking-tighter">amazon</span>
              <div className="flex-1 bg-white h-9 rounded flex items-center px-3 max-w-2xl">
                <span className="text-zinc-400 text-sm">Laundry Detergent</span>
                <Search className="w-4 h-4 text-zinc-400 ml-auto" />
              </div>
              <ShoppingCart className="w-6 h-6 text-white ml-auto" />
            </div>

            <div className="w-full md:w-1/3 bg-zinc-100 rounded-lg mt-16 border border-zinc-200"></div>
            <div className="flex-1 mt-16 space-y-4">
              <div className="h-6 w-3/4 bg-zinc-200 rounded"></div>
              <div className="h-6 w-1/2 bg-zinc-200 rounded"></div>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-4 w-24 bg-yellow-400 rounded"></div>
                <div className="h-4 w-12 bg-blue-400 rounded"></div>
              </div>
              <div className="h-8 w-24 bg-zinc-800 rounded mt-4"></div>
              <div className="space-y-2 mt-6">
                <div className="h-3 w-full bg-zinc-100 rounded"></div>
                <div className="h-3 w-full bg-zinc-100 rounded"></div>
                <div className="h-3 w-4/5 bg-zinc-100 rounded"></div>
              </div>
              
              {/* Fake Add to Cart */}
              <div className="w-48 h-10 rounded-full bg-yellow-400 mt-8 flex items-center justify-center relative cursor-pointer">
                {step === 0 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 2, x: 50, y: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute z-10 bottom-[-20px] right-[-20px]"
                  >
                    <MousePointer2 className="w-8 h-8 text-zinc-800 drop-shadow-xl" />
                  </motion.div>
                )}
              </div>
            </div>

            {/* Extension Popup overlay */}
            <AnimatePresence>
              {step === 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: -20, x: 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, y: -20, x: 20 }}
                  className="absolute top-16 right-16 w-80 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden z-20 flex flex-col"
                >
                  <div className="bg-zinc-100 dark:bg-zinc-900 p-3 flex justify-between items-center border-b border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                      <Leaf className="w-4 h-4 text-zinc-500" />
                      <span className="font-semibold text-sm">CarbonIQ Alert</span>
                    </div>
                    <X className="w-4 h-4 text-zinc-500 cursor-pointer" />
                  </div>
                  
                  <div className="p-4">
                    <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-4">
                      This detergent generates <span className="font-bold text-red-500">4.5 kg CO₂</span> due to imported heavy liquid shipping.
                    </p>
                    
                    <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-4 cursor-pointer hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Greener Alternative</p>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-zinc-900 dark:text-white text-sm">Eco Sheets (Local)</span>
                        <span className="text-zinc-900 dark:text-white font-bold text-sm">₹290</span>
                      </div>
                      <p className="text-xs text-zinc-500 mt-1">Saves 3.1 kg CO₂ • Zero Plastic</p>
                    </div>

                    <button className="w-full h-10 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-medium text-sm hover:opacity-90 transition-colors flex items-center justify-center gap-2 shadow-sm">
                      Replace & Save Cart
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hover overlay hint */}
            {step === 0 && (
              <div className="absolute inset-0 bg-black/5 flex items-center justify-center z-10 backdrop-blur-[1px]">
                <div className="px-6 py-3 rounded-full bg-zinc-900 text-white font-bold shadow-xl flex items-center gap-2">
                  Hover to simulate browsing
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
