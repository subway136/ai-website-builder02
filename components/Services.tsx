'use client';
import { motion } from 'framer-motion';
import { MessageSquare, Workflow, BrainCircuit, BarChart, ShieldCheck, Zap } from 'lucide-react';

const services = [
  {
    title: 'LLM Integration',
    description: 'Embed advanced linguistic intelligence into your proprietary software stacks and user experiences.',
    icon: MessageSquare,
    color: 'text-blue-400',
  },
  {
    title: 'Workflow Automation',
    description: 'Eliminate repetitive tasks with custom-built Zapier and Make.com enterprise-grade pipelines.',
    icon: Workflow,
    color: 'text-purple-400',
  },
  {
    title: 'Custom AI Agents',
    description: 'Autonomous agents that handle research, sales outreach, and customer support 24/7.',
    icon: BrainCircuit,
    color: 'text-cyan-400',
  },
  {
    title: 'Predictive Analytics',
    description: 'Transform raw data into actionable insights with machine learning forecasting models.',
    icon: BarChart,
    color: 'text-indigo-400',
  },
  {
    title: 'AI Governance',
    description: 'Ensuring your AI implementations are secure, private, and fully compliant with global standards.',
    icon: ShieldCheck,
    color: 'text-emerald-400',
  },
  {
    title: 'Rapid Prototyping',
    description: 'From concept to MVP in weeks, not months, using our proprietary AI acceleration framework.',
    icon: Zap,
    color: 'text-yellow-400',
  }
];

export default function Services() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Capabilities</h2>
          <p className="text-white/60 max-w-2xl mx-auto">We don\'t just deploy AI; we engineer systems that drive measurable business outcomes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl hover:border-primary/50 transition-colors group"
            >
              <service.icon className={`w-12 h-12 mb-6 ${service.color}`} />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/50 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}