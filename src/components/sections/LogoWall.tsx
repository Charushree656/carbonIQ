import { motion } from "framer-motion";

export default function LogoWall() {
  const platforms = [
    "Amazon", "Flipkart", "Blinkit", "Zepto", "Instamart", "BigBasket", "Myntra"
  ];

  return (
    <section className="py-16 border-y border-zinc-900 bg-zinc-950/80 relative overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-32 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="text-center text-xs font-bold text-zinc-500 mb-10 uppercase tracking-[0.2em]">
          Integrates seamlessly into the world's leading platforms
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative cursor-default"
            >
              {/* Premium Logo Card Mock */}
              <div className="px-8 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 group-hover:border-emerald-500/50 group-hover:bg-zinc-900/80 group-hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100">
                <span className="font-heading font-black text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  {platform}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
