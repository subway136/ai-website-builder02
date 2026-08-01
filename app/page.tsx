import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ROICounter from '@/components/ROICounter';
import WorkflowVis from '@/components/WorkflowVis';
import Results from '@/components/Results';
import ROIEstimator from '@/components/ROIEstimator';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <ROICounter />
      <Services />
      <WorkflowVis />
      <ROIEstimator />
      <Results />
      <FAQ />
      
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto glass-panel p-16 rounded-3xl border-primary/20">
          <h2 className="text-5xl font-bold mb-6">Ready to Aura-mate?</h2>
          <p className="text-xl text-white/60 mb-10">
            Book your complimentary 30-minute AI Strategy Audit and discover untapped efficiencies.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 rounded-full bg-white/5 border border-white/10 focus:border-primary outline-none min-w-[300px]"
            />
            <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors">
              Join the Future
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
<AIBots />
