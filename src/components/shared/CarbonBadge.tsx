import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Leaf } from "lucide-react";

interface CarbonBadgeProps {
  score?: string; // e.g., 'A', 'B', 'C'
  emissions?: number; // e.g., 4.5
  className?: string;
  showIcon?: boolean;
}

export function CarbonBadge({ score, emissions, className, showIcon = true }: CarbonBadgeProps) {
  // Determine color based on score or emissions
  let colorClass = "bg-zinc-800 text-zinc-300 border-zinc-700";
  
  if (score) {
    if (['A', 'A+', 'B+'].includes(score)) colorClass = "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-800";
    else if (['B', 'C+'].includes(score)) colorClass = "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
    else colorClass = "bg-red-500/10 text-red-500 border-red-500/20";
  } else if (emissions !== undefined) {
    if (emissions < 1) colorClass = "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-800";
    else if (emissions < 3) colorClass = "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
    else colorClass = "bg-red-500/10 text-red-500 border-red-500/20";
  }

  return (
    <Badge variant="outline" className={cn("px-2 py-0.5 text-xs font-medium gap-1", colorClass, className)}>
      {showIcon && <Leaf className="w-3 h-3" />}
      {score && <span>{score}</span>}
      {emissions !== undefined && <span>{emissions.toFixed(1)} kg CO₂</span>}
    </Badge>
  );
}
