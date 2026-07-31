'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hello! I am Aura Assistant. How can I help you automate your business today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: 'Thank you for your inquiry. One of our engineers will be in touch, or you can book a call directly in the Contact page!' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-80 md:w-96 glass-panel rounded-2xl shadow-2xl overflow-hidden border border-primary/20 flex flex-col mb-4"
          >
            <div className="p-4 bg-primary text-black font-bold flex justify-between items-center">
              <span>Aura AI Assistant</span>
              <X className="w-5 h-5 cursor-pointer" onClick={() => setIsOpen(false)} />
            </div>
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-black/50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-xl text-sm ${m.role === 'user' ? 'bg-primary text-black' : 'bg-white/10 text-white'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-white/10 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about automation..." 
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm flex-1 focus:outline-none focus:border-primary"
              />
              <button onClick={handleSend} className="p-2 bg-primary text-black rounded-lg hover:bg-white transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="text-black w-7 h-7" />
      </button>
    </div>
  );
}