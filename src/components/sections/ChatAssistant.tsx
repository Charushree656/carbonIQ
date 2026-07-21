import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Sparkles } from "lucide-react";

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", content: "Hi! I'm the CarbonIQ sustainability assistant. Ask me anything about how we calculate emissions or generate recommendations." }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const presetQuestions = [
    "How is carbon calculated?",
    "Why is local better?",
    "What is LCA data?"
  ];

  const handleQuestion = (q: string) => {
    setMessages(prev => [...prev, { role: "user", content: q }]);
    setIsTyping(true);
    
    setTimeout(() => {
      let answer = "";
      if (q.includes("calculated")) {
        answer = "We calculate carbon footprint using Life Cycle Assessment (LCA) data, factoring in raw material extraction, manufacturing processes, packaging materials, and transportation distance based on the user's location.";
      } else if (q.includes("local")) {
        answer = "Local products typically have a significantly lower carbon footprint because they avoid heavy transportation emissions (like air freight or cross-country trucking), which can account for up to 40% of a product's total footprint.";
      } else {
        answer = "LCA stands for Life Cycle Assessment. It's a comprehensive database of environmental impact metrics for thousands of materials and processes, allowing our AI to accurately estimate the true cost of any product.";
      }
      
      setMessages(prev => [...prev, { role: "ai", content: answer }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-4 sm:right-8 w-[350px] max-w-[calc(100vw-32px)] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-zinc-950" />
                <span className="font-bold text-zinc-950 font-heading tracking-wide">CarbonIQ Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-950 hover:bg-zinc-600/50 p-1 rounded-md transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="h-[350px] overflow-y-auto p-4 space-y-4 bg-zinc-900/50">
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {m.role === 'ai' && (
                    <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-zinc-900 dark:text-white" />
                    </div>
                  )}
                  <div className={`p-3 rounded-2xl max-w-[80%] text-sm ${m.role === 'user' ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 text-zinc-950 rounded-tr-sm' : 'bg-zinc-800 text-white rounded-tl-sm'}`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-zinc-900 dark:text-white" />
                  </div>
                  <div className="p-4 rounded-2xl bg-zinc-800 rounded-tl-sm flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-zinc-950 border-t border-zinc-800">
              <div className="flex flex-wrap gap-2 mb-3">
                {presetQuestions.map((q, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleQuestion(q)}
                    disabled={isTyping}
                    className="text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-3 py-1.5 rounded-full transition-colors disabled:opacity-50"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Ask a question..." 
                  disabled 
                  className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 text-sm text-zinc-400 cursor-not-allowed"
                />
                <button disabled className="w-10 h-10 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950/50 text-zinc-900 rounded-lg flex items-center justify-center cursor-not-allowed">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 sm:right-8 w-14 h-14 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 rounded-full shadow-sm hover:shadow-sm flex items-center justify-center z-50 transition-transform active:scale-95 group"
      >
        <MessageSquare className="w-6 h-6 text-zinc-950 group-hover:scale-110 transition-transform" />
      </button>
    </>
  );
}
