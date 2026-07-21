import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-zinc-950 border-t border-zinc-800">
      
      {/* Dynamic Background Removed for minimalism */}
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center justify-center p-3 bg-zinc-100 dark:bg-zinc-900 rounded-full mb-8 border border-zinc-200 dark:border-zinc-800">
          <Zap className="w-6 h-6 text-zinc-900 dark:text-white" />
        </div>

        <h2 className="font-heading text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mb-8 tracking-tight">
          Ready to Make Every Purchase <span className="text-zinc-500 dark:text-zinc-400">Greener?</span>
        </h2>
        
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Integrate CarbonIQ into your shopping platform today and help millions of users reduce their carbon footprint without impacting conversion rates.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/demo" className="group relative inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-lg bg-zinc-900 dark:bg-white px-8 py-3 text-lg font-bold text-white dark:text-zinc-950 transition-all hover:opacity-90 active:scale-95 focus-visible:outline-none">
            <span className="relative flex items-center">
              Request Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link to="/contact" className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-8 py-3 text-lg font-bold text-zinc-900 dark:text-white transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900 active:scale-95 focus-visible:outline-none">
            Partner With Us
          </Link>
        </div>

      </div>
    </section>
  );
}
