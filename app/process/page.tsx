export default function Process() {
  const steps = [
    { title: 'Audit', desc: 'We analyze your current tech stack and workflows to find automation opportunities.' },
    { title: 'Design', desc: 'We architect the AI solution, selecting the best models and integration points.' },
    { title: 'Build', desc: 'Our engineers develop the custom agents and automated pipelines.' },
    { title: 'Test', desc: 'Rigorous testing in sandbox environments ensures reliability and safety.' },
    { title: 'Scale', desc: 'Deployment to production followed by continuous optimization and support.' }
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
         <h1 className="text-6xl font-bold mb-16">Our <span className="text-primary">Methodology</span></h1>
         <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary opacity-30 hidden md:block" />
            <div className="space-y-16">
              {steps.map((step, i) => (
                <div key={i} className="relative pl-0 md:pl-20">
                  <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-2xl bg-black border-2 border-primary items-center justify-center font-black text-2xl z-10">
                    {i + 1}
                  </div>
                  <div className="glass-panel p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-white/50">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
         </div>
      </div>
    </div>
  );
}