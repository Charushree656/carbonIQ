import { Leaf, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="py-24 max-w-3xl mx-auto flex flex-col items-center text-center space-y-12">
      <div className="w-20 h-20 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center">
        <Leaf className="w-10 h-10 text-emerald-500" />
      </div>

      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our Vision</h1>
        <p className="text-xl text-zinc-400 leading-relaxed">
          We believe that every purchasing decision is an environmental decision. But without data, consumers can't make sustainable choices.
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 text-left">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="text-emerald-500 w-6 h-6" />
          <h3 className="text-2xl font-bold text-white">The Fourth Vector</h3>
        </div>
        <p className="text-zinc-400 leading-relaxed">
          Today's e-commerce giants have perfected optimization for three vectors: <strong className="text-white">Price</strong>, <strong className="text-white">Delivery Time</strong>, and <strong className="text-white">Discounts</strong>. 
          <br /><br />
          CarbonIQ introduces the fourth vector: <strong className="text-emerald-400">Sustainability</strong>. By integrating seamlessly via API, we empower the world's largest online retailers to show consumers the carbon cost of convenience—and offer them a better way.
        </p>
      </div>
    </div>
  );
}
