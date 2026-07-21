import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-zinc-950/80 border-t border-zinc-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Partner with CarbonIQ</h2>
          <p className="text-zinc-400 text-lg">
            Ready to integrate climate intelligence into your platform? Get in touch with our enterprise team.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 shadow-sm backdrop-blur-xl relative"
        >

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full h-12 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full h-12 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Company Name</label>
              <input 
                type="text" 
                id="company" 
                className="w-full h-12 px-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors"
                placeholder="Acme Corp (e-commerce)"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors resize-none"
                placeholder="Tell us about your integration needs..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full h-14 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Request Partnership
              <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
