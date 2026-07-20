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
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sticky top-24">
      <h3 className="text-xl font-bold text-white mb-6">Carbon Impact Summary</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2 text-zinc-400 text-sm">
            <span>Total Emissions</span>
            <CloudRain className="w-4 h-4" />
          </div>
          <div className="flex items-end gap-2">
            <motion.span 
              key={totalEmissions}
              initial={{ scale: 1.2, opacity: 0, color: '#10b981' }}
              animate={{ scale: 1, opacity: 1, color: '#f4f4f5' }}
              className="text-4xl font-extrabold text-white"
            >
              {totalEmissions.toFixed(1)}
            </motion.span>
            <span className="text-zinc-500 mb-1">kg CO₂</span>
          </div>
        </div>

        <div className="h-px w-full bg-zinc-800"></div>

        <div>
          <div className="flex items-center justify-between mb-2 text-emerald-500 text-sm font-medium">
            <span>Potential Savings</span>
            <Leaf className="w-4 h-4" />
          </div>
          <div className="flex items-end gap-2">
            <motion.span 
              key={savings}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-3xl font-bold text-emerald-500"
            >
              {savings.toFixed(1)}
            </motion.span>
            <span className="text-emerald-500/50 mb-1">kg CO₂</span>
          </div>
        </div>

        <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 mt-6">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 p-1.5 bg-zinc-800 rounded-lg text-zinc-400">
              <Car className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm text-zinc-300">
                This order emits the same CO₂ as driving <span className="text-white font-bold">{equivalentKm} km</span> in an average car.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
