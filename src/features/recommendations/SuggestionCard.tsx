import { motion } from "framer-motion";
import type { Recommendation } from "../../types";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface SuggestionCardProps {
  recommendation: Recommendation;
  onReplace: (sourceId: string, recommendation: Recommendation) => void;
}

export function SuggestionCard({ recommendation, onReplace }: SuggestionCardProps) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20, height: 0, marginTop: 0, marginBottom: 0, padding: 0, overflow: 'hidden' }}
      className="relative p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl mb-4 shadow-[0_0_25px_rgba(16,185,129,0.15)] overflow-hidden group hover:border-emerald-500/50 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative flex items-start justify-between mb-3">
        <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold tracking-wide">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span className="uppercase text-[11px] tracking-wider">Greener Alternative Found</span>
        </div>
        <span className="text-xs text-emerald-400 font-medium bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
          {recommendation.tag}
        </span>
      </div>
      
      <div className="relative flex items-center justify-between mt-2">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 rounded-lg bg-zinc-900/80 border border-emerald-500/20 flex items-center justify-center text-xl shadow-inner">
             {recommendation.recommendedProduct.imageIcon}
           </div>
           <div>
             <h4 className="text-zinc-100 font-semibold text-sm">{recommendation.recommendedProduct.name}</h4>
             <p className="text-emerald-400 text-xs font-semibold mt-0.5">Save {recommendation.carbonSaved.toFixed(1)} kg CO₂</p>
           </div>
        </div>
        
        <Button 
          size="sm" 
          onClick={() => onReplace(recommendation.sourceId, recommendation)}
          className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-full text-xs font-bold px-4 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all active:scale-95"
        >
          Replace <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
        </Button>
      </div>
    </motion.div>
  );
}
