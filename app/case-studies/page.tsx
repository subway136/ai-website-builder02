import Results from '@/components/Results';

export default function CaseStudies() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
         <h1 className="text-6xl font-bold mb-8">Impact <span className="text-primary">Reports</span></h1>
         <p className="text-xl text-white/50 mb-16 max-w-2xl">
            Real results for real enterprises. We pride ourselves on the measurable delta we provide for our clients.
         </p>
         <Results />
         <div className="mt-24 glass-panel p-12 rounded-3xl text-center">
            <h3 className="text-2xl font-bold mb-4">More Results Under NDA</h3>
            <p className="text-white/50 mb-8">Due to the nature of some of our custom AI deployments in finance and healthcare, we cannot display them publicly.</p>
            <button className="px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-black transition-all">
               Request Access Portfolio
            </button>
         </div>
      </div>
    </div>
  );
}