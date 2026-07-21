import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ScanLine, BrainCircuit, Lightbulb, TrendingDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setActiveStep((prev) => (prev >= 4 ? 0 : prev + 1));
    }, 3000); // 3 seconds per step
    return () => clearInterval(cycle);
  }, []);

  const steps = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Customer Shops Normally",
      desc: "User browses and adds items to cart on Blinkit.",
      color: "border-blue-500/50 bg-blue-500/10 text-blue-400"
    },
    {
      icon: <ScanLine className="w-6 h-6" />,
      title: "CarbonIQ Intercepts Cart",
      desc: "Instant background scanning of product data.",
      color: "border-purple-500/50 bg-purple-500/10 text-purple-400"
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "AI Calculates Emissions",
      desc: "Matching against millions of LCA data points.",
      color: "border-yellow-500/50 bg-yellow-500/10 text-yellow-400"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Recommendations Appear",
      desc: "Greener alternatives slide in seamlessly.",
      color: "border-emerald-500/50 bg-emerald-500/10 text-emerald-400"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Cart Updates Automatically",
      desc: "Savings counter increases instantly.",
      color: "border-emerald-500/50 bg-emerald-500/10 text-emerald-400"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-zinc-950 border-y border-zinc-900/50 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">Frictionless Integration.</h2>
          <p className="text-zinc-400 text-lg">
            CarbonIQ sits silently in the background, analyzing data and providing intelligence without disrupting the core shopping experience.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          
          {/* Animated Pipeline Diagram */}
          <div className="flex-1 w-full max-w-lg relative border-l-2 border-zinc-800 ml-6 lg:ml-12 pb-8">
            
            {/* Moving Light Beam representing data flow */}
            <motion.div 
              className="absolute left-[-2px] w-[2px] h-32 bg-gradient-to-b from-transparent via-emerald-500 to-transparent shadow-[0_0_10px_rgba(16,185,129,1)]"
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative pl-10 cursor-pointer" onClick={() => setActiveStep(index)}>
                  
                  {/* Step Node */}
                  <div className={`absolute left-[-17px] top-1 w-8 h-8 rounded-full border-4 border-zinc-950 flex items-center justify-center transition-colors duration-500 ${activeStep === index ? 'bg-emerald-500' : 'bg-zinc-800'}`}>
                    <div className={`w-2 h-2 rounded-full ${activeStep === index ? 'bg-zinc-950' : 'bg-zinc-600'}`}></div>
                  </div>

                  {/* Step Content */}
                  <motion.div 
                    className={`p-6 rounded-2xl border transition-all duration-500 ${activeStep === index ? step.color + ' scale-[1.02] shadow-xl' : 'border-zinc-800 bg-zinc-900/30'}`}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`p-2 rounded-lg ${activeStep === index ? 'bg-zinc-950/20' : 'bg-zinc-800 text-zinc-400'}`}>
                        {step.icon}
                      </div>
                      <h3 className={`text-lg font-bold font-heading ${activeStep === index ? 'text-white' : 'text-zinc-300'}`}>Step {index + 1}: {step.title}</h3>
                    </div>
                    <p className={`text-sm ${activeStep === index ? 'text-white/80' : 'text-zinc-500'}`}>{step.desc}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Visualizer */}
          <div className="flex-1 w-full sticky top-32 perspective-1000">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 min-h-[400px] flex items-center justify-center shadow-2xl relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {activeStep === 0 && (
                  <motion.div key="step0" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="text-center">
                    <ShoppingBag className="w-24 h-24 text-zinc-700 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-2">Shopping Cart</h3>
                    <p className="text-zinc-500">Awaiting user action...</p>
                  </motion.div>
                )}

                {activeStep === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="text-center relative">
                    <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>
                    <ScanLine className="w-24 h-24 text-purple-500 mx-auto mb-6 animate-pulse relative z-10" />
                    <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Intercepting Payload</h3>
                    <p className="text-purple-400 text-sm relative z-10 animate-pulse">Extracting product metadata...</p>
                  </motion.div>
                )}

                {activeStep === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="text-center w-full">
                    <div className="flex justify-center items-center gap-6 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center"><ShoppingBag className="w-8 h-8 text-zinc-500" /></div>
                      <div className="w-16 h-1 border-t-2 border-dashed border-zinc-700 relative overflow-hidden">
                        <motion.div className="absolute top-[-1px] left-0 h-[2px] w-8 bg-emerald-500" animate={{ left: ["-100%", "100%"] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                      </div>
                      <div className="w-16 h-16 rounded-2xl border border-emerald-500 bg-emerald-500/10 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]"><BrainCircuit className="w-8 h-8 text-emerald-500" /></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Processing LCA Data</h3>
                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden mt-6">
                      <motion.div className="h-full bg-emerald-500" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2.5, ease: "easeInOut" }} />
                    </div>
                  </motion.div>
                )}

                {activeStep === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="w-full">
                    <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-2xl rounded-full"></div>
                      <div className="flex items-center gap-2 mb-4">
                        <Lightbulb className="w-5 h-5 text-emerald-400" />
                        <span className="font-bold text-emerald-400 text-sm tracking-wider uppercase">AI Suggested Swap</span>
                      </div>
                      <div className="flex justify-between items-center bg-zinc-950 p-4 rounded-lg border border-zinc-800">
                        <div>
                          <span className="text-white font-bold block mb-1">Local Organic Alternative</span>
                          <span className="text-xs text-zinc-500">Reduces emissions by 65%</span>
                        </div>
                        <button className="px-4 py-2 bg-emerald-500 text-zinc-950 text-xs font-bold rounded-lg hover:bg-emerald-400 transition-colors">Apply</button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="text-center">
                    <div className="w-24 h-24 rounded-full border-4 border-emerald-500 flex items-center justify-center mx-auto mb-6 bg-emerald-500/10 shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                      <TrendingDown className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2 font-heading">Cart Optimized!</h3>
                    <p className="text-emerald-400 font-medium text-lg">2.5 kg CO₂ Saved</p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
