import { motion } from "framer-motion";
import { CloudRain, Leaf, Car } from "lucide-react";

interface ImpactSummaryProps {
  totalEmissions: number;
  savings: number;
}

export function ImpactSummary({ totalEmissions, savings }: ImpactSummaryProps) {
  // Rough equivalency: 1 kg CO2 = ~4 km driven in an average gas car
  const equivalentKm = Math.round(totalEmissions * 4);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/60 rounded-2xl p-6 sticky top-24 shadow-2xl overflow-hidden relative group"
    >
      {/* Subtle glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-md z-0 pointer-events-none"></div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          Carbon Impact Summary
        </h3>
        
        <div className="space-y-6">
          <div className="bg-zinc-950/50 p-4 rounded-xl border border-zinc-800/50">
            <div className="flex items-center justify-between mb-1 text-zinc-400 text-sm font-medium">
              <span>Total Emissions</span>
              <CloudRain className="w-4 h-4 text-zinc-500" />
            </div>
            <div className="flex items-end gap-2">
              <motion.span 
                key={totalEmissions}
                initial={{ scale: 1.1, opacity: 0, color: '#ef4444' }}
                animate={{ scale: 1, opacity: 1, color: '#f8fafc' }}
                className="text-4xl font-black tracking-tight"
              >
                {totalEmissions.toFixed(1)}
              </motion.span>
              <span className="text-zinc-500 font-medium mb-1.5">kg CO₂</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-900/20 p-4 rounded-xl border border-emerald-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Leaf className="w-16 h-16 text-emerald-500" />
            </div>
            <div className="flex items-center justify-between mb-1 text-emerald-400 text-sm font-semibold relative z-10">
              <span>Potential Savings</span>
              <Leaf className="w-4 h-4" />
            </div>
            <div className="flex items-end gap-2 relative z-10">
              <motion.span 
                key={savings}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-3xl font-black text-emerald-400 tracking-tight"
              >
                {savings.toFixed(1)}
              </motion.span>
              <span className="text-emerald-500/70 font-medium mb-1">kg CO₂</span>
            </div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-4 bg-zinc-800/30 rounded-xl border border-zinc-700/50 mt-2 transition-all cursor-default"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 p-2.5 bg-zinc-950 rounded-full shadow-inner border border-zinc-800">
                <Car className="w-5 h-5 text-zinc-400" />
              </div>
              <div>
                <p className="text-sm text-zinc-300 leading-snug">
                  This order emits the same CO₂ as driving <span className="text-white font-bold bg-zinc-800 px-1.5 py-0.5 rounded text-xs mx-0.5">{equivalentKm} km</span> in an average car.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
