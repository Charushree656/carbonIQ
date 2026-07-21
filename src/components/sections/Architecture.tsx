import { motion } from "framer-motion";
import { User, ShoppingBag, Code2, Database, LayoutDashboard, BrainCircuit, ArrowRight } from "lucide-react";

export default function Architecture() {
  const nodes = [
    { id: "user", icon: <User className="w-6 h-6" />, label: "Customer", delay: 0 },
    { id: "platform", icon: <ShoppingBag className="w-6 h-6" />, label: "Shopping Platform", delay: 0.2 },
    { id: "api", icon: <Code2 className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />, label: "CarbonIQ API", delay: 0.4 },
    { id: "engine", icon: <BrainCircuit className="w-6 h-6 text-zinc-400" />, label: "Intelligence Engine", delay: 0.6 },
    { id: "db", icon: <Database className="w-6 h-6 text-purple-400" />, label: "LCA Database", delay: 0.8 },
    { id: "dashboard", icon: <LayoutDashboard className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />, label: "ESG Dashboard", delay: 1.0 },
  ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">Robust Infrastructure</h2>
          <p className="text-zinc-400 text-lg">
            Our high-performance architecture ensures sub-50ms latency, meaning your checkout conversion rates remain entirely unaffected while we calculate emissions in real-time.
          </p>
        </div>

        {/* Data Pipeline Diagram */}
        <div className="relative max-w-4xl mx-auto py-12 px-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative z-10">
            {nodes.slice(0, 4).map((node, i) => (
              <div key={node.id} className="flex flex-col md:flex-row items-center gap-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: node.delay, type: "spring" }}
                  className="w-24 h-24 rounded-2xl bg-zinc-900 border border-zinc-700 flex flex-col items-center justify-center gap-2 shadow-xl relative z-10 hover:border-zinc-200 dark:border-zinc-800 transition-colors"
                >
                  {node.icon}
                  <span className="text-[10px] font-bold text-zinc-400 text-center px-1 uppercase tracking-wider">{node.label}</span>
                </motion.div>
                {i < 3 && (
                  <div className="hidden md:flex items-center text-zinc-600 relative">
                    <ArrowRight className="w-6 h-6" />
                    <motion.div 
                      className="absolute w-2 h-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 rounded-full shadow-[0_0_10px_#10b981]"
                      animate={{ x: [0, 40], opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: node.delay }}
                    />
                  </div>
                )}
                {i < 3 && <ArrowRight className="md:hidden w-6 h-6 text-zinc-600 rotate-90 my-2" />}
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-24 mt-12 md:mt-16 relative z-10">
            {nodes.slice(4).map((node) => (
              <motion.div 
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: node.delay, type: "spring" }}
                className="w-32 h-24 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col items-center justify-center gap-2 shadow-xl relative z-10 hover:border-zinc-700 transition-colors"
              >
                {node.icon}
                <span className="text-[10px] font-bold text-zinc-400 text-center px-1 uppercase tracking-wider">{node.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Connection lines to DB and Dashboard */}
          <div className="absolute inset-0 pointer-events-none hidden md:block z-0">
            <svg width="100%" height="100%" viewBox="0 0 800 400" className="opacity-30">
              <path d="M 600,100 L 600,200 L 300,200 L 300,280" fill="none" stroke="#52525b" strokeWidth="2" strokeDasharray="5,5" />
              <path d="M 600,100 L 600,200 L 500,200 L 500,280" fill="none" stroke="#52525b" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
