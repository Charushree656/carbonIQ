import { Link, Outlet } from "react-router-dom";
import { Leaf } from "lucide-react";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col font-sans selection:bg-emerald-500/30">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors">
            <Leaf className="w-6 h-6" />
            <span className="font-bold text-xl tracking-tight text-white">CarbonIQ</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
            <Link to="/demo" className="hover:text-white transition-colors">Demo</Link>
            <Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
            <Link to="/api" className="hover:text-white transition-colors">API</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/demo" className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-zinc-950 shadow transition-colors hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500">
              Try Demo
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4">
        <Outlet />
      </main>
      
      <footer className="border-t border-zinc-900 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-emerald-500" />
            <span>CarbonIQ © {new Date().getFullYear()}</span>
          </div>
          <p>For B2B SaaS Hackathon Demonstration Only.</p>
        </div>
      </footer>
    </div>
  );
}
