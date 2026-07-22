import { Link, Outlet, useLocation } from "react-router-dom";
import { Leaf, Menu, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/hooks/useCart";

export default function MainLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { pathname } = useLocation();
  const { cart } = useCart();
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

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
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col font-sans selection:bg-zinc-500/30 relative overflow-hidden">
      
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
              <Leaf className="w-6 h-6 text-zinc-500 group-hover:text-zinc-400 transition-colors relative z-10" />
              <div className="absolute inset-0 bg-zinc-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-zinc-500">
              CarbonIQ
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link to="/" className="hover:text-zinc-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] transition-all">Home</Link>
            <Link to="/shop" className="hover:text-zinc-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] transition-all">Shop</Link>
            <Link to="#features" className="hover:text-zinc-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] transition-all">Features</Link>
            <Link to="/dashboard" className="hover:text-zinc-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] transition-all">Dashboard</Link>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/demo" className="relative group text-zinc-400 hover:text-white transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-2 -right-2 w-4 h-4 bg-zinc-500 rounded-full flex items-center justify-center text-[10px] font-bold text-zinc-950"
                  >
                    {totalItems}
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>
            <Link to="/demo" className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-zinc-500 px-5 py-2 text-sm font-medium text-zinc-950 transition-all hover:bg-zinc-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-500 active:scale-95">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
              <span className="relative">Go to Cart</span>
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
    </div>
  );
}
