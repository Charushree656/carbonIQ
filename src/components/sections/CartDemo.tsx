import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ShoppingCart, ArrowDown, Leaf, CheckCircle2, ScanLine, TreePine, Car, Smartphone } from "lucide-react";

const initialCart = [
  { id: 1, name: "Imported Apples", price: 340, co2: 8.0, replaceable: true },
  { id: 2, name: "Potato Chips", price: 60, co2: 1.2, replaceable: false },
  { id: 3, name: "Plastic Water Bottle", price: 40, co2: 2.1, replaceable: true },
  { id: 4, name: "Rice (5kg)", price: 450, co2: 4.5, replaceable: false },
  { id: 5, name: "Chemical Detergent", price: 358, co2: 2.8, replaceable: true },
];

const recommendedCart = [
  { id: 1, name: "Local Farm Apples", price: 290, co2: 3.8, savings: 4.2 },
  { id: 2, name: "Potato Chips", price: 60, co2: 1.2 },
  { id: 3, name: "Glass Water Bottle", price: 120, co2: 0.2, savings: 1.9 },
  { id: 4, name: "Rice (5kg)", price: 450, co2: 4.5 },
  { id: 5, name: "Eco-Friendly Detergent", price: 380, co2: 1.5, savings: 1.3 },
];

const loadingSteps = [
  "Intercepting cart payload...",
  "Scanning products against LCA database...",
  "Analyzing packaging materials...",
  "Calculating transport routes & emissions...",
  "Generating sustainable recommendations..."
];

export default function CartDemo() {
  const [step, setStep] = useState<"initial" | "analyzing" | "analyzed" | "applied">("initial");
  const [loadingIndex, setLoadingIndex] = useState(0);

  const currentCart = step === "applied" ? recommendedCart : initialCart;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (step === "analyzing") {
      interval = setInterval(() => {
        setLoadingIndex((prev) => {
          if (prev >= loadingSteps.length - 1) {
            clearInterval(interval);
            setStep("analyzed");
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step]);

  const handleSimulate = () => {
    setLoadingIndex(0);
    setStep("analyzing");
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-zinc-950">
      
      {/* Premium background particles simulation */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ background: 'radial-gradient(circle at center, transparent 0%, #09090b 100%), url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2310b981\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">Experience the AI Engine.</h2>
          <p className="text-zinc-400 text-lg">
            See how CarbonIQ seamlessly intercepts a standard shopping cart and transforms it into a climate-conscious purchase.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Mock Cart UI */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-md shadow-2xl overflow-hidden hover:border-zinc-700 transition-colors">
            <div className="p-4 border-b border-zinc-800 bg-zinc-900/50 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-zinc-400" />
                <span className="font-bold text-white">Your Cart</span>
              </div>
              <span className="text-sm font-medium text-zinc-400">{currentCart.length} Items</span>
            </div>
            
            <div className="p-6">
              <div className="space-y-4 mb-6 relative min-h-[300px]">
                <AnimatePresence mode="popLayout">
                  {currentCart.map((item) => (
                    <motion.div 
                      key={item.name}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className={`flex justify-between items-center p-4 rounded-xl border transition-colors ${step === 'applied' && 'savings' in item ? 'border-emerald-500/40 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'border-zinc-800 bg-zinc-900/30'}`}
                    >
                      <div>
                        <p className="font-bold text-white text-sm">{item.name}</p>
                        {step === 'applied' && 'savings' in item && (
                          <p className="text-xs font-semibold text-emerald-400 mt-1 flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full inline-flex">
                            <Leaf className="w-3 h-3" /> Saved {item.savings} kg CO₂
                          </p>
                        )}
                      </div>
                      <span className="font-bold text-zinc-300">₹{item.price}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex justify-between items-center mb-6">
                <span className="text-zinc-400">Total</span>
                <span className="font-bold text-3xl text-white">
                  ₹{currentCart.reduce((acc, curr) => acc + curr.price, 0)}
                </span>
              </div>

              {step === "initial" && (
                <button 
                  onClick={handleSimulate}
                  className="w-full h-14 rounded-xl bg-zinc-100 text-zinc-900 font-bold hover:bg-white transition-all active:scale-95 text-lg shadow-xl"
                >
                  Checkout
                </button>
              )}
            </div>
          </div>

          {/* CarbonIQ Interactive Panel */}
          <div className="rounded-2xl border border-emerald-500/30 bg-zinc-900/90 backdrop-blur-xl p-8 relative overflow-hidden min-h-[550px] flex flex-col shadow-[0_0_40px_rgba(16,185,129,0.1)]">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
              <Leaf className="w-64 h-64 text-emerald-500" />
            </div>

            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-emerald-500" />
                <span className="font-heading font-bold text-xl text-white">CarbonIQ Engine</span>
              </div>
              {(step === "analyzing" || step === "analyzed") && (
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              )}
            </div>

            {step === "initial" && (
              <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10">
                <div className="w-20 h-20 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center mb-6">
                  <ScanLine className="w-10 h-10 text-zinc-600" />
                </div>
                <p className="text-zinc-400 mb-8 font-medium">Waiting to intercept cart payload...</p>
                <button 
                  onClick={handleSimulate}
                  className="px-8 py-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all font-bold text-sm flex items-center gap-2 active:scale-95"
                >
                  Simulate API Analysis
                </button>
              </div>
            )}

            {step === "analyzing" && (
              <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10">
                <div className="w-24 h-24 relative mb-8">
                  <div className="absolute inset-0 rounded-full border-4 border-zinc-800"></div>
                  <motion.div 
                    className="absolute inset-0 rounded-full border-4 border-emerald-500 border-t-transparent border-r-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Leaf className="w-8 h-8 text-emerald-500 animate-pulse" />
                  </div>
                </div>
                <div className="h-6 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={loadingIndex}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="text-emerald-400 font-medium"
                    >
                      {loadingSteps[loadingIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>
                <div className="w-64 h-2 bg-zinc-800 rounded-full mt-8 overflow-hidden">
                  <motion.div 
                    className="h-full bg-emerald-500"
                    animate={{ width: `${((loadingIndex + 1) / loadingSteps.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            )}

            {step === "analyzed" && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1 flex flex-col relative z-10"
              >
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                    <p className="text-xs font-bold text-red-500/80 mb-1 uppercase tracking-wider">Carbon Footprint</p>
                    <p className="text-3xl font-black text-red-500">18.6 <span className="text-base font-normal text-red-400">kg CO₂</span></p>
                  </div>
                  <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
                    <p className="text-xs font-bold text-yellow-500/80 mb-1 uppercase tracking-wider">Eco Score</p>
                    <p className="text-3xl font-black text-yellow-500">69 <span className="text-base font-normal text-yellow-400">/100</span></p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-emerald-500 mb-3 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    AI Recommendations Found
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-zinc-800 shadow-inner">
                      <div className="flex items-center gap-3">
                        <span className="line-through text-zinc-500 text-sm font-medium">Imported Apples</span>
                        <ArrowDown className="w-4 h-4 text-emerald-500" />
                        <span className="text-white text-sm font-bold">Local Farm</span>
                      </div>
                      <span className="text-emerald-400 text-sm font-bold">Save 4.2 kg</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-zinc-800 shadow-inner">
                      <div className="flex items-center gap-3">
                        <span className="line-through text-zinc-500 text-sm font-medium">Plastic Bottle</span>
                        <ArrowDown className="w-4 h-4 text-emerald-500" />
                        <span className="text-white text-sm font-bold">Glass</span>
                      </div>
                      <span className="text-emerald-400 text-sm font-bold">Save 1.9 kg</span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 mb-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[40px] rounded-full"></div>
                  <div className="flex justify-between items-center relative z-10">
                    <span className="text-emerald-500 font-bold uppercase tracking-wider text-xs">Potential Reduction</span>
                    <span className="text-2xl font-black text-emerald-400">7.4 kg CO₂</span>
                  </div>
                </div>

                <button 
                  onClick={() => setStep("applied")}
                  className="w-full h-14 rounded-xl bg-emerald-500 text-zinc-950 font-black text-lg hover:bg-emerald-400 transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] active:scale-95"
                >
                  Apply AI Recommendations
                </button>
              </motion.div>
            )}

            {step === "applied" && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 flex flex-col relative z-10"
              >
                <div className="flex flex-col items-center justify-center text-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 relative">
                    <div className="absolute inset-0 rounded-full border-2 border-emerald-500/50 animate-ping"></div>
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2 font-heading text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Cart Optimized</h3>
                  <p className="text-emerald-400 font-bold text-lg">You saved 7.4 kg of CO₂ emissions!</p>
                </div>
                
                {/* Environmental Equivalents */}
                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 mb-8">
                  <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 text-center">Real-World Impact Equivalent</h4>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mb-2">
                        <TreePine className="w-5 h-5 text-emerald-500" />
                      </div>
                      <p className="text-[10px] text-zinc-400 mb-1">Planting</p>
                      <p className="text-sm font-bold text-white">1 Tree</p>
                    </div>
                    <div className="flex flex-col items-center border-x border-zinc-800">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-2">
                        <Car className="w-5 h-5 text-blue-500" />
                      </div>
                      <p className="text-[10px] text-zinc-400 mb-1">Driving</p>
                      <p className="text-sm font-bold text-white">30 km</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mb-2">
                        <Smartphone className="w-5 h-5 text-purple-500" />
                      </div>
                      <p className="text-[10px] text-zinc-400 mb-1">Charging</p>
                      <p className="text-sm font-bold text-white">900 Phones</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setStep("initial")}
                  className="mt-auto px-6 py-3 rounded-full border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors text-sm font-bold active:scale-95 w-full max-w-[200px] mx-auto"
                >
                  Reset Demo
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
