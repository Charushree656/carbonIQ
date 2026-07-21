import { useInView, animate } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Factory, Truck } from "lucide-react";
import { useRef, useEffect, useState } from "react";

function Counter({ from, to, suffix = "", prefix = "", decimal = false }: { from: number; to: number; suffix?: string; prefix?: string; decimal?: boolean }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      const node = nodeRef.current;
      if (!node) return;
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = prefix + (decimal ? value.toFixed(1) : Math.round(value)) + suffix;
        }
      });
      setHasAnimated(true);
      return () => controls.stop();
    }
  }, [from, to, inView, suffix, prefix, decimal, hasAnimated]);

  return <span ref={nodeRef}>{prefix}{from}{suffix}</span>;
}

const trendData = [
  { name: 'W1', saved: 420 },
  { name: 'W2', saved: 680 },
  { name: 'W3', saved: 550 },
  { name: 'W4', saved: 890 },
];

const sourceData = [
  { name: 'Manufacturing', value: 65, color: '#ef4444' },
  { name: 'Transportation', value: 25, color: '#f59e0b' },
  { name: 'Packaging', value: 10, color: '#3b82f6' },
];

export default function DashboardPreview() {
  return (
    <section className="py-24 bg-zinc-950 border-y border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">Enterprise Analytics</h2>
          <p className="text-zinc-400 text-lg">
            Rich data visualization and gamification built-in. Track the environmental impact of your entire customer base.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-8 shadow-2xl backdrop-blur-xl">
          
          {/* Top Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-inner">
              <p className="text-xs text-zinc-500 mb-2 font-bold uppercase tracking-wider">Carbon Saved (Weekly)</p>
              <p className="text-3xl font-black text-emerald-400">
                <Counter from={0} to={2840} suffix=" kg" />
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-inner">
              <p className="text-xs text-zinc-500 mb-2 font-bold uppercase tracking-wider">Eco-Purchases</p>
              <p className="text-3xl font-black text-cyan-400">
                <Counter from={0} to={89} suffix="%" />
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-inner">
              <p className="text-xs text-zinc-500 mb-2 font-bold uppercase tracking-wider">Total Orders Scanned</p>
              <p className="text-3xl font-black text-white">
                <Counter from={0} to={12} suffix="K+" />
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-inner">
              <p className="text-xs text-zinc-500 mb-2 font-bold uppercase tracking-wider">Monthly Sustainability</p>
              <p className="text-3xl font-black text-white">A+</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Main Chart */}
            <div className="lg:col-span-2 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-inner flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white font-heading">Weekly Carbon Savings Trend</h3>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full">+14% vs last month</span>
              </div>
              <div className="flex-1 w-full min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorSaved" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                    <XAxis dataKey="name" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '12px', color: '#fff' }} />
                    <Area type="monotone" dataKey="saved" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorSaved)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="space-y-6">
              {/* Emissions Source Breakdown */}
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-inner h-[200px] flex flex-col">
                <h3 className="text-sm font-bold text-zinc-400 mb-4 uppercase tracking-wider">Emissions Source</h3>
                <div className="flex-1 flex items-center gap-4">
                  <div className="w-24 h-24 shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={sourceData} innerRadius={30} outerRadius={45} paddingAngle={2} dataKey="value" stroke="none">
                          {sourceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '8px' }} itemStyle={{ color: '#fff', fontSize: '12px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1 text-zinc-300"><Factory className="w-3 h-3 text-red-500" /> Mfg.</span>
                      <span className="font-bold text-white">65%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1 text-zinc-300"><Truck className="w-3 h-3 text-yellow-500" /> Trans.</span>
                      <span className="font-bold text-white">25%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carbon Heatmap Mock */}
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-inner flex-1 flex flex-col justify-between">
                <h3 className="text-sm font-bold text-zinc-400 mb-4 uppercase tracking-wider">Category Heatmap</h3>
                <div className="grid grid-cols-4 gap-2 h-full">
                  {[...Array(16)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`rounded flex items-center justify-center text-[10px] font-bold opacity-80
                        ${i % 3 === 0 ? 'bg-red-500 text-red-950' : 
                          i % 5 === 0 ? 'bg-yellow-500 text-yellow-950' : 'bg-emerald-500 text-emerald-950'}`}
                    >
                      {i % 3 === 0 ? 'Hi' : i % 5 === 0 ? 'Med' : 'Low'}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
