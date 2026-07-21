import { motion } from "framer-motion";
import { Briefcase, Key, Database, Building2, TrendingUp, Plane, Pizza, Shirt, Laptop } from "lucide-react";

export default function BusinessVision() {
  const plans = [
    {
      title: "SaaS Subscription",
      icon: <Briefcase className="w-6 h-6 text-zinc-900 dark:text-white" />,
      desc: "Tiered monthly plans for standard e-commerce platforms.",
      features: ["Up to 1M requests/mo", "Basic Analytics", "Standard UI Widget"]
    },
    {
      title: "Carbon Intelligence API",
      icon: <Key className="w-6 h-6 text-zinc-500" />,
      desc: "Pay-as-you-go access to our carbon footprint LCA database.",
      features: ["Sub-50ms latency", "Custom integrations", "Raw LCA data access"]
    },
    {
      title: "Enterprise ESG",
      icon: <Database className="w-6 h-6 text-blue-500" />,
      desc: "Full suite sustainability analytics and compliance reporting.",
      features: ["Scope 3 reporting", "Dedicated Support", "Custom ML models"]
    }
  ];

  const futureVerticals = [
    { name: "Food Delivery", icon: <Pizza className="w-5 h-5" /> },
    { name: "Fashion", icon: <Shirt className="w-5 h-5" /> },
    { name: "Electronics", icon: <Laptop className="w-5 h-5" /> },
    { name: "Travel Booking", icon: <Plane className="w-5 h-5" /> },
    { name: "B2B Procurement", icon: <Building2 className="w-5 h-5" /> }
  ];

  return (
    <section id="business" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Business Model & Vision</h2>
          <p className="text-zinc-400 text-lg">
            Flexible integration options designed to scale from fast-growing startups to enterprise retail giants.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/0 to-zinc-500/0 group-hover:from-zinc-500/5 group-hover:to-zinc-500/5 transition-colors"></div>
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 relative z-10">
                {plan.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading relative z-10">{plan.title}</h3>
              <p className="text-zinc-400 text-sm mb-6 relative z-10">{plan.desc}</p>
              
              <ul className="space-y-3 relative z-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-zinc-300">
                    <TrendingUp className="w-4 h-4 text-zinc-900 dark:text-white" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-12 text-center overflow-hidden relative">
          
          
          <h3 className="text-2xl font-bold text-white mb-4 font-heading">Expanding the Horizon</h3>
          <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
            CarbonIQ is built to scale beyond grocery and standard retail. Our AI engine is rapidly learning to analyze emissions across multiple high-impact industries.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {futureVerticals.map((vert, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-950/50 text-sm font-medium text-zinc-300 hover:border-zinc-200 dark:border-zinc-800 hover:text-zinc-600 dark:text-zinc-400 transition-colors">
                {vert.icon}
                {vert.name}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
