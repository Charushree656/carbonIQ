import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Leaf, Search, TrendingDown, ScanLine } from "lucide-react";
import { useState, useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Hero() {
  const [cycleStep, setCycleStep] = useState(0);

  // Auto loop the shopping animation
  useEffect(() => {
    const cycle = setInterval(() => {
      setCycleStep((prev) => (prev >= 4 ? 0 : prev + 1));
    }, 2500); // Step every 2.5s
    return () => clearInterval(cycle);
  }, []);

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-emerald-500 opacity-[0.12] blur-[120px]"></div>

      {/* Left Column: Text */}
      <motion.div 
        variants={stagger} 
        initial="hidden" 
        animate="show" 
        className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start relative z-10"
      >
        <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-sm text-emerald-400 font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          CarbonIQ Engine is Live
        </motion.div>

        <motion.h1 variants={fadeUp} className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Shop Smarter.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
            Shop Greener.
          </span>
        </motion.h1>

        <motion.p variants={fadeUp} className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-sans">
          CarbonIQ brings AI-powered carbon intelligence directly into online shopping platforms. As customers browse products on apps like Zepto, Blinkit, Amazon, or Flipkart, CarbonIQ automatically calculates emissions and recommends sustainable alternatives in real time.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start">
          <Link to="/demo" className="group relative inline-flex h-12 w-full sm:w-auto items-center justify-center overflow-hidden rounded-full bg-emerald-500 px-8 py-3 text-base font-semibold text-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
            <span className="relative flex items-center">
              View Live Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link to="#features" className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/50 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-800 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500">
            Explore Features
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Column: Animated Live Shopping Widget */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex-1 w-full max-w-md relative perspective-1000"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 blur-3xl -z-10 rounded-full"></div>
        
        {/* Mock Shopping Interface (e.g. Blinkit/Zepto) */}
        <div className="rounded-3xl border border-zinc-800 bg-white text-zinc-900 overflow-hidden shadow-2xl relative transform transition-transform duration-500 hover:rotate-y-2">
          
          {/* Mock App Header */}
          <div className="bg-yellow-500/10 px-4 py-3 flex justify-between items-center border-b border-zinc-200">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Delivery in</span>
              <span className="text-lg font-extrabold text-zinc-900">9 minutes</span>
            </div>
            <Search className="w-5 h-5 text-zinc-400" />
          </div>

          <div className="p-6 pb-24 relative">
            <div className="w-full h-56 bg-zinc-100 rounded-2xl mb-4 flex items-center justify-center border border-zinc-200 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80" alt="Milk" className="object-cover w-full h-full opacity-80 mix-blend-multiply" />
              
              {/* Scanning Laser Animation (Step 1) */}
              <AnimatePresence>
                {cycleStep === 1 && (
                  <motion.div 
                    initial={{ top: 0, opacity: 0 }}
                    animate={{ top: "100%", opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,1)] z-10"
                  />
                )}
              </AnimatePresence>
              
              {/* Scan Overlay Text */}
              <AnimatePresence>
                {cycleStep === 1 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-emerald-500/10 flex items-center justify-center backdrop-blur-[2px]"
                  >
                    <div className="bg-zinc-900/90 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2 border border-emerald-500/30">
                      <ScanLine className="w-3 h-3 animate-pulse" />
                      Analyzing Carbon Footprint...
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-heading font-bold text-2xl text-zinc-900">Organic Milk 1L</h3>
              <span className="font-bold text-2xl text-zinc-900">₹72</span>
            </div>
            
            <div className="flex items-center gap-1 text-yellow-400 mb-2">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 text-zinc-300" />
              <span className="text-zinc-500 text-sm ml-1">(1,248)</span>
            </div>

            <p className="text-zinc-500 text-sm mb-6">Farm fresh organic cow milk packaged in standard plastic pouch.</p>

            <button className="w-full py-4 rounded-xl bg-green-600 text-white font-bold text-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20 active:scale-95">
              Add to Cart
            </button>
          </div>

          {/* CarbonIQ Overlay Widget (Steps 2, 3, 4) */}
          <AnimatePresence>
            {cycleStep >= 2 && (
              <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="absolute bottom-0 left-0 right-0 p-2 z-20"
              >
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/95 backdrop-blur-xl p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Leaf className="w-5 h-5 text-emerald-500" />
                    <span className="font-bold text-white text-sm tracking-wide">CarbonIQ Intercept</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-zinc-900 rounded-xl p-3 border border-zinc-800 relative overflow-hidden">
                      <div className={`absolute top-0 left-0 h-1 bg-red-500 transition-all duration-1000 ${cycleStep >= 2 ? 'w-full' : 'w-0'}`}></div>
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Carbon Score</p>
                      <p className="text-2xl font-bold text-red-400">42<span className="text-xs font-normal text-zinc-500">/100</span></p>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-3 border border-zinc-800">
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Est. Emissions</p>
                      <p className="text-2xl font-bold text-white">2.4<span className="text-xs font-normal text-zinc-500 ml-1">kg CO₂</span></p>
                    </div>
                  </div>

                  {/* Recommendation Slider (Step 3 & 4) */}
                  <AnimatePresence mode="wait">
                    {cycleStep >= 3 ? (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3 mb-2 relative"
                      >
                        <div className="absolute -top-3 right-3 bg-emerald-500 text-zinc-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-lg">
                          Greener Choice
                        </div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="text-sm font-bold text-white block">Local Organic Milk (Glass)</span>
                            <span className="text-[10px] text-zinc-400">Score: 95 • Local Transport</span>
                          </div>
                          <span className="text-sm font-bold text-white">₹78</span>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-emerald-500/20">
                          <div className="flex items-center gap-1 text-emerald-400">
                            <TrendingDown className="w-4 h-4" />
                            <span className="text-xs font-bold">Save 1.7 kg CO₂</span>
                          </div>
                          
                          <button className={`h-8 px-4 rounded-lg font-bold text-xs transition-colors shadow-md ${cycleStep === 4 ? 'bg-emerald-600 text-white' : 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400'}`}>
                            {cycleStep === 4 ? 'Swapped!' : 'Swap Product'}
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-[104px] rounded-xl border border-zinc-800 border-dashed bg-zinc-900/50 flex flex-col items-center justify-center mb-2"
                      >
                        <ScanLine className="w-6 h-6 text-emerald-500/50 mb-2 animate-pulse" />
                        <span className="text-xs text-zinc-500 font-medium">Generating AI Recommendations...</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>

    </section>
  );
}
