'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';

export default function ROIEstimator() {
  const [employees, setEmployees] = useState(25);
  const [hours, setHours] = useState(10);
  
  const annualSavings = employees * hours * 50 * 52; // Assuming $50/hr avg cost
  const efficiencyGain = Math.round(hours * 0.7);

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl">
        <div className="flex items-center gap-3 mb-8">
           <Calculator className="text-primary w-8 h-8" />
           <h2 className="text-3xl font-bold">ROI Estimator</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium mb-4 text-white/70 italic">Total Team Size</label>
              <input 
                type="range" 
                min="5" 
                max="500" 
                value={employees}
                onChange={(e) => setEmployees(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between mt-2 text-primary font-bold">
                <span>{employees} Members</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-4 text-white/70 italic">Repetitive Hours / Week per Person</label>
              <input 
                type="range" 
                min="1" 
                max="40" 
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between mt-2 text-primary font-bold">
                <span>{hours} Hours</span>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 flex flex-col justify-center items-center text-center">
             <span className="text-white/50 text-sm mb-2">Estimated Annual Savings</span>
             <span className="text-5xl font-black text-primary">${annualSavings.toLocaleString()}</span>
             <div className="mt-6 w-full pt-6 border-t border-primary/10">
                <p className="text-sm text-white/70 italic">Potential time reclaimed per week:</p>
                <p className="text-2xl font-bold">{employees * efficiencyGain} Hours</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}