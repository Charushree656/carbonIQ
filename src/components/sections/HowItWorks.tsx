import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ScanLine, BrainCircuit, Leaf, CheckCircle2, Apple, Milk, Package, Droplet, Wheat, ArrowRight, TreePine, Car, Recycle } from "lucide-react";
import { useState, useEffect } from "react";

// Helper components for counters
function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = count;
    const duration = 1000;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(start + (value - start) * ease);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value]);

  return <span>{prefix}{count.toFixed(1).replace('.0', '')}{suffix}</span>;
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cartReplaced, setCartReplaced] = useState(false);
  
  const scanTexts = ["Detecting products...", "Reading packaging...", "Analyzing transport...", "Calculating emissions..."];
  const [scanTextIndex, setScanTextIndex] = useState(0);

  // Scan text effect
  useEffect(() => {
    if (activeStep === 1) {
      const interval = setInterval(() => {
        setScanTextIndex((prev) => (prev + 1) % scanTexts.length);
      }, 800);
      return () => clearInterval(interval);
    }
  }, [activeStep, scanTexts.length]);

  // Step cycle effect
  useEffect(() => {
    if (isHovered) return;
    
    const cycle = setInterval(() => {
      setActiveStep((prev) => {
        if (prev === 4) {
          setCartReplaced(false);
          return 0;
        }
        return prev + 1;
      });
    }, 4500); // 4.5 seconds per step for better reading
    
    return () => clearInterval(cycle);
  }, [isHovered]);

  const steps = [
    {
      icon: <ShoppingBag className="w-5 h-5" />,
      title: "Shop Normally 🛒",
      desc: "CarbonIQ works quietly in the background without changing your shopping experience."
    },
    {
      icon: <ScanLine className="w-5 h-5" />,
      title: "CarbonIQ AI Scans 🤖",
      desc: "Instantly reads packaging, manufacturing region, and transportation data."
    },
    {
      icon: <BrainCircuit className="w-5 h-5" />,
      title: "Carbon Intelligence 📊",
      desc: "Every product receives a carbon score and eco rating."
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "AI Recommends 🌱",
      desc: "CarbonIQ suggests greener alternatives with similar quality and price."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: "Checkout Greener 🌍",
      desc: "Lower your carbon footprint and track your environmental impact."
    }
  ];

  // Cart Data
  const initialProducts = [
    { id: 1, name: "Imported Apples", icon: <Apple className="w-6 h-6 text-red-400" />, co2: 4.8, score: 58, rating: "Medium", pkg: "Plastic", trans: "Imported" },
    { id: 2, name: "Organic Milk", icon: <Milk className="w-6 h-6 text-zinc-200" />, co2: 1.2, score: 85, rating: "Good", pkg: "Carton", trans: "Local" },
    { id: 3, name: "Potato Chips", icon: <Package className="w-6 h-6 text-yellow-400" />, co2: 2.1, score: 65, rating: "Medium", pkg: "Plastic", trans: "National" },
    { id: 4, name: "Bottled Water", icon: <Droplet className="w-6 h-6 text-blue-400" />, co2: 3.5, score: 40, rating: "Poor", pkg: "PET Plastic", trans: "National" },
    { id: 5, name: "Premium Rice", icon: <Wheat className="w-6 h-6 text-orange-200" />, co2: 9.9, score: 35, rating: "Poor", pkg: "Plastic", trans: "Imported" },
  ];

  const replacedProduct = { id: 1, name: "Local Fuji Apples", icon: <Apple className="w-6 h-6 text-emerald-400" />, co2: 1.6, score: 92, rating: "Excellent", pkg: "Paper", trans: "Local" };

  const displayProducts = cartReplaced 
    ? [replacedProduct, ...initialProducts.slice(1)]
    : initialProducts;

  const totalCo2Before = initialProducts.reduce((acc, curr) => acc + curr.co2, 0);
  const totalCo2After = replacedProduct.co2 + initialProducts.slice(1).reduce((acc, curr) => acc + curr.co2, 0);
  
  const handleReplace = () => {
    setCartReplaced(true);
    setTimeout(() => {
      setActiveStep(4);
    }, 1000);
  };

  return (
    <section id="how-it-works" className="py-24 bg-zinc-950 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">How CarbonIQ Works</h2>
          <p className="text-zinc-400 text-lg">
            CarbonIQ integrates seamlessly into your favorite shopping platforms, helping you make sustainable choices without changing the way you shop.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          
          {/* Left Column: Steps */}
          <div className="flex-1 w-full max-w-md relative pb-8 z-20">
            {/* Timeline Line */}
            <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-zinc-800 rounded-full">
              <motion.div 
                className="absolute top-0 left-0 w-full bg-emerald-500 rounded-full"
                animate={{ height: `${(activeStep / 4) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isPast = activeStep > index;
                
                return (
                  <div 
                    key={index} 
                    className={`relative pl-16 py-2 cursor-pointer group transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
                    onClick={() => {
                      setActiveStep(index);
                      if (index < 3) setCartReplaced(false);
                    }}
                  >
                    {/* Step Node */}
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 bg-zinc-950 ${isActive || isPast ? 'border-emerald-500' : 'border-zinc-700'}`}>
                      {(isActive || isPast) && <div className="w-2 h-2 rounded-full bg-emerald-500" />}
                    </div>

                    <div className={`p-5 rounded-2xl border transition-all duration-300 ${isActive ? 'border-emerald-500/30 bg-emerald-500/5 shadow-[0_0_20px_rgba(16,185,129,0.1)]' : 'border-transparent bg-transparent hover:bg-zinc-900/50'}`}>
                      <h3 className={`text-xl font-bold font-heading mb-2 ${isActive ? 'text-white' : 'text-zinc-300'}`}>{step.title}</h3>
                      <AnimatePresence>
                        {isActive && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <p className="text-zinc-400 text-sm leading-relaxed mt-2">{step.desc}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visualizer */}
          <div className="flex-[1.5] w-full min-h-[500px] lg:min-h-[650px] relative perspective-1000">
            <div className="w-full h-full rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl p-6 md:p-8 overflow-hidden shadow-2xl relative flex flex-col">
              
              {/* Fake Browser Header */}
              <div className="flex items-center gap-2 mb-8 border-b border-zinc-800 pb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto bg-zinc-950 rounded-md px-4 py-1.5 text-xs text-zinc-500 flex items-center gap-2 border border-zinc-800 w-full max-w-[200px] justify-center">
                  <ShoppingBag className="w-3 h-3" /> checkout.com/cart
                </div>
              </div>

              <div className="flex-1 relative">
                
                {/* 
                  Steps 1-4 share the same Cart layout, just different overlays.
                  Step 5 is entirely different (Checkout screen).
                */}
                <AnimatePresence mode="wait">
                  
                  {activeStep < 4 ? (
                    <motion.div key="cart-view" className="h-full flex flex-col gap-4 relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      
                      <div className="flex justify-between items-end mb-2">
                        <h3 className="text-2xl font-bold text-white font-heading">Your Cart (5 items)</h3>
                      </div>

                      <div className="space-y-3 relative z-10 flex-1">
                        {displayProducts.map((product, idx) => (
                          <motion.div 
                            key={product.id + (product.name === "Local Fuji Apples" ? '-replaced' : '')}
                            initial={activeStep === 0 ? { opacity: 0, x: 20 } : false}
                            animate={activeStep === 0 ? { opacity: 1, x: 0 } : false}
                            transition={{ delay: idx * 0.1 }}
                            layout
                            className={`flex items-center justify-between p-4 rounded-xl border ${product.name === "Local Fuji Apples" ? 'border-emerald-500/50 bg-emerald-500/10' : 'border-zinc-800 bg-zinc-950/50'} relative overflow-hidden`}
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                                {product.icon}
                              </div>
                              <div>
                                <h4 className="text-white font-bold">{product.name}</h4>
                                <p className="text-zinc-500 text-xs mt-0.5">Qty: 1 • {product.pkg}</p>
                              </div>
                            </div>
                            
                            {/* Step 3: Carbon Intelligence Overlay */}
                            <AnimatePresence>
                              {activeStep >= 2 && (
                                <motion.div 
                                  initial={{ opacity: 0, scale: 0.9, x: 10 }}
                                  animate={{ opacity: 1, scale: 1, x: 0 }}
                                  transition={{ delay: activeStep === 2 ? idx * 0.15 : 0 }}
                                  className="flex items-center gap-6"
                                >
                                  <div className="text-right hidden sm:block">
                                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-0.5">CO₂ Impact</div>
                                    <div className={`font-mono font-bold text-sm ${product.co2 > 4 ? 'text-red-400' : product.co2 > 2 ? 'text-yellow-400' : 'text-emerald-400'}`}>
                                      <AnimatedCounter value={product.co2} suffix=" kg" />
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-0.5">Score</div>
                                    <div className={`font-mono text-lg font-bold ${product.score < 50 ? 'text-red-400' : product.score < 75 ? 'text-yellow-400' : 'text-emerald-400'}`}>
                                      <AnimatedCounter value={product.score} />
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>

                          </motion.div>
                        ))}
                      </div>

                      {/* Step 2: Scanning Overlay */}
                      <AnimatePresence>
                        {activeStep === 1 && (
                          <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-xl border border-emerald-500/20"
                          >
                            <div className="absolute inset-0 bg-emerald-500/5 backdrop-blur-[1px]"></div>
                            <motion.div 
                              className="absolute left-0 right-0 h-[2px] bg-emerald-400 shadow-[0_0_15px_2px_rgba(52,211,153,0.8)]"
                              animate={{ top: ["0%", "100%", "0%"] }}
                              transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                            />
                            
                            {/* Scanning text changing rapidly */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-zinc-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-500/30 flex items-center gap-2 text-emerald-400 text-sm font-mono">
                              <ScanLine className="w-4 h-4 animate-pulse" />
                              <motion.span
                                key={scanTextIndex}
                                initial={{ opacity: 0.5 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                {scanTexts[scanTextIndex]}
                              </motion.span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Step 4: AI Recommendation Overlay */}
                      <AnimatePresence>
                        {activeStep === 3 && !cartReplaced && (
                          <motion.div 
                            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                            className="absolute top-8 right-0 md:right-[-20px] w-[calc(100%-20px)] md:w-80 bg-zinc-900 border border-emerald-500/50 rounded-2xl shadow-2xl z-30 overflow-hidden"
                          >
                            <div className="bg-emerald-500/10 px-4 py-3 border-b border-emerald-500/20 flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <Leaf className="w-4 h-4 text-emerald-400" />
                                <span className="text-emerald-400 font-bold text-sm">Greener Alternative</span>
                              </div>
                              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-full font-bold border border-emerald-500/20">-3.2 kg CO₂</span>
                            </div>
                            
                            <div className="p-5">
                              <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-inner">
                                  <Apple className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                  <h4 className="text-white font-bold">Local Fuji Apples</h4>
                                  <p className="text-zinc-400 text-xs mt-0.5">Paper packaging • Local farm</p>
                                </div>
                              </div>

                              <div className="bg-zinc-950 rounded-lg p-3 text-xs text-zinc-400 mb-4 leading-relaxed border border-zinc-800">
                                Locally sourced apples reduce transportation emissions by over 60% while maintaining similar quality.
                              </div>

                              <button 
                                onClick={handleReplace}
                                className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 group text-sm"
                              >
                                Replace & Save <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                    </motion.div>
                  ) : (
                    
                    // Step 5: Checkout Summary
                    <motion.div key="checkout-view" className="h-full flex flex-col justify-center relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent rounded-2xl pointer-events-none"></div>
                      
                      <div className="text-center mb-10">
                        <motion.div 
                          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}
                          className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(16,185,129,0.4)]"
                        >
                          <CheckCircle2 className="w-8 h-8 text-zinc-950" />
                        </motion.div>
                        <h3 className="text-3xl font-bold text-white mb-2 font-heading">Great Choice! 🎉</h3>
                        <p className="text-zinc-400">You reduced your shopping footprint by <span className="text-emerald-400 font-bold">15%</span></p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 md:gap-8 mb-10 max-w-md mx-auto w-full">
                        <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 text-center relative overflow-hidden group">
                          <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors"></div>
                          <div className="text-zinc-500 text-xs uppercase tracking-wider mb-2 font-medium">Before CarbonIQ</div>
                          <div className="text-3xl font-mono font-bold text-zinc-300 line-through decoration-red-500/50">{totalCo2Before.toFixed(1)} kg</div>
                          <div className="text-xs text-zinc-600 mt-2">Eco Score: 52</div>
                        </div>
                        
                        <div className="bg-emerald-500/10 p-6 rounded-2xl border border-emerald-500/30 text-center relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/20 blur-xl rounded-full"></div>
                          <div className="text-emerald-500 text-xs uppercase tracking-wider mb-2 font-medium">After CarbonIQ</div>
                          <div className="text-4xl font-mono font-bold text-emerald-400"><AnimatedCounter value={totalCo2After} /> kg</div>
                          <div className="text-xs text-emerald-500/80 mt-2 font-bold flex items-center justify-center gap-1">Eco Score: <AnimatedCounter value={68} /></div>
                        </div>
                      </div>

                      {/* Environmental Equivalents */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                        {[
                          { icon: <TreePine className="w-5 h-5 text-emerald-400" />, text: "Equivalent to planting 2 trees" },
                          { icon: <Car className="w-5 h-5 text-blue-400" />, text: "Driving 35km less" },
                          { icon: <Recycle className="w-5 h-5 text-purple-400" />, text: "40% less plastic waste" }
                        ].map((stat, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + (i * 0.1) }}
                            className="bg-zinc-950/50 border border-zinc-800/50 p-3 rounded-xl flex items-center gap-3 text-sm text-zinc-300"
                          >
                            <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">{stat.icon}</div>
                            <span className="leading-tight text-xs">{stat.text}</span>
                          </motion.div>
                        ))}
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

