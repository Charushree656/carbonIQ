import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-zinc-950 border-t border-zinc-800">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.15),transparent_60%)]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-full mb-8 border border-emerald-500/20">
          <Zap className="w-6 h-6 text-emerald-500" />
        </div>

        <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
          Ready to Make Every Purchase <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Greener?</span>
        </h2>
        
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Integrate CarbonIQ into your shopping platform today and help millions of users reduce their carbon footprint without impacting conversion rates.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/demo" className="group relative inline-flex h-14 w-full sm:w-auto items-center justify-center overflow-hidden rounded-full bg-emerald-500 px-8 py-3 text-lg font-bold text-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] active:scale-95 focus-visible:outline-none">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
            <span className="relative flex items-center">
              Request Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link to="/contact" className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full border-2 border-zinc-700 bg-zinc-900/50 px-8 py-3 text-lg font-bold text-white transition-all hover:bg-zinc-800 hover:border-zinc-500 active:scale-95 focus-visible:outline-none">
            Partner With Us
          </Link>
        </div>

      </div>
    </section>
  );
}
