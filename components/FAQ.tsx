'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How long does an initial AI implementation take?',
    a: 'Most pilot projects are completed within 4 to 6 weeks. This includes the audit, design, and deployment phases.'
  },
  {
    q: 'Is our company data secure during automation?',
    a: 'Absolutely. We use enterprise-grade encryption and can deploy local, private LLMs that never send data to external third-party servers.'
  },
  {
    q: 'What is the typical ROI for your solutions?',
    a: 'Our clients typically see a complete return on investment within the first 6-8 months through labor cost savings and increased output.'
  },
  {
    q: 'Do we need technical staff to maintain the agents?',
    a: 'No. We provide a managed service where our team handles the monitoring, updates, and optimization of all AI systems.'
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="glass-panel rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-lg">{f.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-white/60">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}