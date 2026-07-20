import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart, Leaf, Zap, CloudRain } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* Background Grid */}
      <div className="fixed inset-0 z-[-1] bg-zinc-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-emerald-500 opacity-[0.15] blur-[100px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-4 flex flex-col items-center justify-center text-center">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-4xl mx-auto flex flex-col items-center">
          
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm text-sm text-zinc-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            CarbonIQ API is now in private beta
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight">
            Carbon Intelligence <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              for Every Shopping Cart.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            CarbonIQ helps e-commerce platforms estimate the carbon footprint of every order and recommend lower-carbon alternatives before checkout, seamlessly via API.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link to="/demo" className={buttonVariants({ size: "lg", className: "rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-8 font-semibold w-full sm:w-auto h-12" })}>
              Try Interactive Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link to="/api" className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full border-zinc-700 hover:bg-zinc-800 text-white px-8 font-semibold w-full sm:w-auto h-12" })}>
              View Developer API
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 border-t border-zinc-900/50 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Invisible Cost of Convenience.</h2>
              <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                Millions of products are purchased online every day. Customers optimize for price, delivery time, and discounts.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                But they have zero visibility into the environmental impact of their purchases. High-emission supply chains go unnoticed because the data is disconnected from the checkout experience.
              </p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative aspect-square md:aspect-[4/3] rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-900 to-zinc-800 opacity-50"></div>
              
              <div className="relative w-full max-w-sm space-y-4">
                {/* Mock abstract UI representing traditional checkout */}
                <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 flex justify-between items-center opacity-70">
                  <div className="h-4 w-24 bg-zinc-800 rounded"></div>
                  <div className="h-4 w-12 bg-zinc-800 rounded"></div>
                </div>
                <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 flex justify-between items-center opacity-70">
                  <div className="h-4 w-32 bg-zinc-800 rounded"></div>
                  <div className="h-4 w-16 bg-zinc-800 rounded"></div>
                </div>
                <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 flex justify-between items-center shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                  <div className="flex gap-3 items-center">
                    <CloudRain className="w-5 h-5 text-red-500" />
                    <div className="h-4 w-20 bg-zinc-800 rounded"></div>
                  </div>
                  <div className="h-4 w-16 bg-red-900/30 rounded text-[10px] text-red-500 flex items-center justify-center font-mono tracking-widest px-2 border border-red-500/20">UNKNOWN CO₂</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Enter CarbonIQ Engine.</h2>
            <p className="text-xl text-zinc-400">
              We intercept the cart, calculate the footprint in real-time, and present sustainable alternatives before the transaction completes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent -translate-y-1/2 z-0"></div>
            
            <FeatureCard 
              icon={<ShoppingCart />} 
              title="1. Analyze Cart" 
              desc="Send us the cart items via our sub-50ms API."
              delay={0.1}
            />
            <FeatureCard 
              icon={<Zap className="text-emerald-500" />} 
              title="2. Compute Carbon" 
              desc="Our engine matches products against millions of LCA data points."
              delay={0.2}
            />
            <FeatureCard 
              icon={<Leaf className="text-emerald-500" />} 
              title="3. Green Checkout" 
              desc="Suggest local or lower-impact alternatives seamlessly."
              delay={0.3}
            />
          </div>
        </div>
      </section>

    </div>
  );
}

function FeatureCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="relative z-10 flex flex-col items-center p-8 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xl"
    >
      <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 text-zinc-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-zinc-400 leading-relaxed text-sm">{desc}</p>
    </motion.div>
  );
}
