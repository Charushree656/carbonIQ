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
      className="p-4 bg-gradient-to-r from-emerald-950/30 to-zinc-950 border border-emerald-900/50 rounded-xl mb-4"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2 text-emerald-500 text-sm font-semibold">
          <Sparkles className="w-4 h-4" />
          <span>Greener Alternative Found</span>
        </div>
        <span className="text-xs text-zinc-500 font-medium bg-zinc-900 px-2 py-1 rounded-full border border-zinc-800">
          {recommendation.tag}
        </span>
      </div>
      
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-900 flex items-center justify-center text-xl">
             {recommendation.recommendedProduct.imageIcon}
           </div>
           <div>
             <h4 className="text-zinc-100 font-medium text-sm">{recommendation.recommendedProduct.name}</h4>
             <p className="text-emerald-500 text-xs font-medium">Save {recommendation.carbonSaved.toFixed(1)} kg CO₂</p>
           </div>
        </div>
        
        <Button 
          size="sm" 
          onClick={() => onReplace(recommendation.sourceId, recommendation)}
          className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-semibold"
        >
          Replace <ArrowRight className="ml-1 w-3 h-3" />
        </Button>
      </div>
    </motion.div>
  );
}
