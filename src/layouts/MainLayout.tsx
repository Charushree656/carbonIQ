import { Link, Outlet, useLocation } from "react-router-dom";
import { Leaf, Globe, Menu, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MainLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Mouse follow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col font-sans selection:bg-emerald-500/30 relative overflow-hidden">
      
      {/* Global Mouse Follow Glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16,185,129,0.03), transparent 40%)`,
        }}
      />

      <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/60 backdrop-blur-md supports-[backdrop-filter]:bg-zinc-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Leaf className="w-6 h-6 text-emerald-500 group-hover:text-emerald-400 transition-colors relative z-10" />
              <div className="absolute inset-0 bg-emerald-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">
              CarbonIQ
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link to="/" className="hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] transition-all">Home</Link>
            <Link to="#how-it-works" className="hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] transition-all">How It Works</Link>
            <Link to="#features" className="hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] transition-all">Features</Link>
            <Link to="/demo" className="hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] transition-all">Demo</Link>
            <Link to="/dashboard" className="hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] transition-all">Dashboard</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link to="/demo" className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-zinc-950 transition-all hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 active:scale-95">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
              <span className="relative">Request Demo</span>
            </Link>
          </div>

          <button 
            className="md:hidden p-2 text-zinc-400 hover:text-white active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>
      
      <main className="flex-1 w-full relative z-10">
        <Outlet />
      </main>
      
      <footer className="border-t border-zinc-800/50 bg-zinc-950/80 py-16 relative z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 mb-12">
            <div className="col-span-2 md:col-span-6 lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4 group">
                <Leaf className="w-6 h-6 text-emerald-500 group-hover:rotate-12 transition-transform" />
                <span className="font-heading font-bold text-xl tracking-tight text-white">CarbonIQ</span>
              </Link>
              <p className="text-zinc-400 text-sm max-w-xs mb-6 leading-relaxed">
                The intelligence layer for climate-conscious commerce. Seamlessly integrate carbon emission data into any shopping platform.
              </p>
              
              <div className="mb-6">
                <p className="text-white text-sm font-bold mb-2">Subscribe to our Newsletter</p>
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Enter your email" className="h-10 px-3 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-emerald-500 w-full" />
                  <button className="h-10 px-3 rounded-lg bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-colors active:scale-95 flex items-center justify-center shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all">
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="col-span-1 lg:col-span-1">
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><Link to="#features" className="hover:text-emerald-400 transition-colors">Features</Link></li>
                <li><Link to="/dashboard" className="hover:text-emerald-400 transition-colors">ESG Dashboard</Link></li>
                <li><Link to="/extension" className="hover:text-emerald-400 transition-colors">Browser Extension</Link></li>
                <li><Link to="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</Link></li>
              </ul>
            </div>

            <div className="col-span-1 lg:col-span-1">
              <h4 className="font-semibold text-white mb-4">Developers</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><Link to="/api" className="hover:text-emerald-400 transition-colors">CarbonIQ API</Link></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">LCA Database</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">GitHub Repo</a></li>
              </ul>
            </div>
            
            <div className="col-span-1 lg:col-span-1">
              <h4 className="font-semibold text-white mb-4">Business</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Enterprise</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Sales</a></li>
              </ul>
            </div>
            
            <div className="col-span-1 lg:col-span-1">
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>CarbonIQ © {new Date().getFullYear()}. All rights reserved. YC-Backed Mockup.</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
