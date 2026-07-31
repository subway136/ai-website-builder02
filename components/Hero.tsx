'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Zap, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6">
      {/* Background Particles Simulation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: Math.random(),
            }}
            animate={{
              y: [null, '-100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <Zap className="w-3 h-3" />
            The Future of Enterprise Efficiency
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
            AI That <br />
            <span className="text-gradient-blue italic">Actually Works.</span>
          </h1>
          <p className="text-lg text-white/60 mb-8 max-w-lg">
            Aura Intelligence builds sophisticated autonomous agents and custom workflow automations that scale operations by 10x while reducing overhead.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-primary text-black font-bold rounded-full flex items-center gap-2 hover:bg-white transition-all group">
              Start Automating
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass-panel text-white font-bold rounded-full hover:bg-white/10 transition-all">
              View Solutions
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="w-full aspect-square glass-panel rounded-3xl overflow-hidden p-8 flex flex-col justify-center items-center relative">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
             <div className="relative w-48 h-48 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                <Bot className="w-24 h-24 text-primary animate-pulse-slow" />
             </div>
             <div className="mt-12 space-y-4 w-full">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-12 w-full glass-panel rounded-xl flex items-center px-4 gap-4 animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                  </div>
                ))}
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}