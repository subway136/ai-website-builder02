'use client';
import { motion } from 'framer-motion';
import { Database, Cpu, Send } from 'lucide-react';

export default function WorkflowVis() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Intelligent Workflow</h2>
          <p className="text-white/60">How we orchestrate data and AI to deliver results.</p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary hidden md:block opacity-20" />

          {[ 
            { icon: Database, label: 'Data Ingestion', desc: 'Syncing your CRM, Cloud Storage & SaaS tools' },
            { icon: Cpu, label: 'Aura Core', desc: 'AI classification, reasoning and task planning' },
            { icon: Send, label: 'Action Layer', desc: 'Automated execution across your ecosystem' }
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center max-w-xs"
            >
              <div className="w-24 h-24 rounded-3xl glass-panel flex items-center justify-center border-primary/30 border-2 mb-6 bg-background group hover:scale-110 transition-transform">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.label}</h3>
              <p className="text-sm text-white/50">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}