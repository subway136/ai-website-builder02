'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cases = [
  {
    client: 'FinTech Global',
    result: '92% Reduction in Support Time',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda595c7b8?auto=format&fit=crop&q=80&w=800',
  },
  {
    client: 'Eco Logistics',
    result: '14,000 Hours Automated Yearly',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    client: 'MedStack AI',
    result: '$2.4M Overhead Reduction',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b496d75c?auto=format&fit=crop&q=80&w=800',
  }
];

export default function Results() {
  return (
    <section className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Proven Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div 
              key={i} 
              className="group relative rounded-3xl overflow-hidden aspect-[4/5]"
              whileHover={{ y: -10 }}
            >
              <Image 
                src={c.image} 
                alt={c.client} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-primary text-sm font-bold uppercase mb-2">{c.client}</p>
                <h3 className="text-2xl font-bold">{c.result}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}