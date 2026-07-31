import { Cpu, Cloud, Code, Shield } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      title: 'Custom AI Agent Development',
      description: 'We build autonomous agents that can navigate complex software, make decisions based on your logic, and interact with customers like a senior employee.',
      features: ['24/7 Availability', 'Cross-platform Support', 'Adaptive Learning']
    },
    {
      title: 'Enterprise Workflow Automation',
      description: 'End-to-end process mapping and automation using the latest no-code and low-code orchestrators to connect your entire tool stack.',
      features: ['Zero Data Silos', 'Real-time Reporting', 'Error Handling']
    },
    {
      title: 'Private LLM Infrastructure',
      description: 'Deploy open-source LLMs on your own infrastructure for maximum privacy and zero data leakage. Perfect for highly regulated industries.',
      features: ['On-prem / Private Cloud', 'HIPAA/GDPR Compliant', 'Custom Fine-tuning']
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-12">Our <span className="text-primary italic">Solutions</span></h1>
        <div className="space-y-12">
          {solutions.map((sol, i) => (
            <div key={i} className="glass-panel p-12 rounded-3xl grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{sol.title}</h2>
                <p className="text-white/60 text-lg mb-8">{sol.description}</p>
                <ul className="space-y-3">
                  {sol.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary/10 rounded-2xl h-64 border border-white/5 flex items-center justify-center">
                 <div className="animate-pulse">
                    <Cpu className="w-24 h-24 text-primary" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}