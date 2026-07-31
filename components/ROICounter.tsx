'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    label: 'Efficiency Increase',
    value: 85,
    suffix: '%',
  },
  {
    label: 'Cost Reduction',
    value: 60,
    suffix: '%',
  },
  {
    label: 'Hours Saved Monthly',
    value: 450,
    suffix: '+',
  },
  {
    label: 'ROI Delivery',
    value: 300,
    suffix: '%',
  },
];

export default function ROICounter() {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-black text-primary mb-2">{stat.value}{stat.suffix}</div>
              <div className="text-white/50 uppercase tracking-widest text-xs font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}