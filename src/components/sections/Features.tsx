import { motion, useInView, animate } from "framer-motion";
import { Cpu, ShieldCheck, Lightbulb, Package, Truck, Sparkles } from "lucide-react";
import { useRef, useEffect, useState } from "react";

function Counter({ from, to, suffix = "", duration = 2 }: { from: number; to: number; suffix?: string; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      const node = nodeRef.current;
      if (!node) return;

      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = value.toFixed(0) + suffix;
        }
      });
      setHasAnimated(true);
      return () => controls.stop();
    }
  }, [from, to, inView, suffix, duration, hasAnimated]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
}

const features = [
  {
    title: "AI Carbon Estimation",
    description: "Predicts carbon emissions for every product using advanced AI models.",
    icon: <Cpu className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors" />
  },
  {
    title: "Eco Score",
    description: "Assigns every product an environmental score between 0 and 100 for easy comparison.",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors" />
  },
  {
    title: "Smart Alternatives",
    description: "Suggests products with lower emissions and similar functionality in real time.",
    icon: <Lightbulb className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors" />
  },
  {
    title: "Packaging Intelligence",
    description: "Analyzes packaging materials and sustainability impact automatically.",
    icon: <Package className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors" />
  },
  {
    title: "Delivery Impact",
    description: "Estimates emissions generated during transportation and last-mile delivery.",
    icon: <Truck className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors" />
  },
  {
    title: "AI Sustainability Insights",
    description: "Explains exactly why a recommended product is environmentally better.",
    icon: <Sparkles className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors" />
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        


        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Deep Sustainability Intelligence</h2>
          <p className="text-zinc-400 text-lg">
            CarbonIQ powers the next generation of climate-conscious commerce with enterprise-grade features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 hover:bg-zinc-900 transition-colors overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800 shadow-inner group-hover:border-emerald-500/50 group-hover:bg-emerald-500 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-emerald-400 transition-colors">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
