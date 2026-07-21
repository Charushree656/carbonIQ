import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, Info, CheckCircle2, AlertCircle } from "lucide-react";

function AnimatedNumber({ value, prefix = "", suffix = "", decimal = false }: { value: number, prefix?: string, suffix?: string, decimal?: boolean }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      const node = nodeRef.current;
      if (!node) return;

      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          node.textContent = prefix + (decimal ? v.toFixed(1) : Math.round(v)) + suffix;
        }
      });
      setHasAnimated(true);
      return () => controls.stop();
    }
  }, [value, inView, hasAnimated, prefix, suffix, decimal]);

  return <span ref={nodeRef}>{prefix}{decimal ? "0.0" : "0"}{suffix}</span>;
}

export default function Comparison() {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Impact at Scale</h2>
          <p className="text-zinc-400 text-lg">
            See the tangible difference CarbonIQ brings to an average checkout session.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto rounded-3xl border border-zinc-800 bg-zinc-900/30 overflow-hidden shadow-2xl">
          
          <div className="grid md:grid-cols-2 relative z-10">
            
            {/* Before Optimization */}
            <div className="p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-red-500/5 transition-colors group-hover:bg-red-500/10"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <p className="text-sm font-bold text-red-500 uppercase tracking-widest">Before Optimization</p>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-zinc-400 mb-2 font-medium">Total Carbon Footprint</p>
                    <p className="text-6xl font-black text-white">
                      <AnimatedNumber value={21.5} decimal suffix=" kg" />
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-zinc-400 mb-2 font-medium">Average Eco Score</p>
                    <p className="text-5xl font-black text-red-400">
                      <AnimatedNumber value={62} />
                    </p>
                    <div className="w-full h-2 bg-zinc-800 rounded-full mt-4 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: "62%" }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-red-500" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After Optimization */}
            <div className="p-8 md:p-12 relative overflow-hidden group border-t md:border-t-0 md:border-l border-zinc-800">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_70%)]"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <p className="text-sm font-bold text-emerald-500 uppercase tracking-widest">After CarbonIQ</p>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-emerald-500/80 mb-2 font-medium">Optimized Carbon Footprint</p>
                    <p className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-400">
                      <AnimatedNumber value={14.1} decimal suffix=" kg" />
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-emerald-500/80 mb-2 font-medium">New Eco Score</p>
                    <p className="text-5xl font-black text-emerald-400">
                      <AnimatedNumber value={91} />
                    </p>
                    <div className="w-full h-2 bg-zinc-800 rounded-full mt-4 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: "91%" }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-emerald-500" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-zinc-950 border-4 border-zinc-800 rounded-full flex items-center justify-center z-20 shadow-xl hidden md:flex">
              <ArrowRight className="w-5 h-5 text-zinc-500" />
            </div>

          </div>

          {/* AI Explanation Footer */}
          <div className="bg-emerald-500 p-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-950/20 p-2 rounded-full mt-1 shrink-0">
                <Info className="w-5 h-5 text-emerald-950" />
              </div>
              <div>
                <p className="text-emerald-950 font-black text-lg mb-1 tracking-tight">34% Emission Reduction Achieved</p>
                <p className="text-emerald-900 text-sm font-medium leading-relaxed max-w-2xl">
                  By substituting 3 out of 8 items in the cart with AI-recommended sustainable alternatives, the total carbon footprint was reduced by 7.4 kg without compromising product quality or increasing the total price significantly.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
