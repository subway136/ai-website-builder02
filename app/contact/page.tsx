import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-6xl font-bold mb-8">Let\'s Build the <span className="text-primary">Future.</span></h1>
            <p className="text-xl text-white/50 mb-12">
              Reach out to our engineering team directly to discuss your specific automation needs.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/40">Email Us</p>
                  <p className="text-lg font-bold">aiagencybuilder@gmail.com`

              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/40">Call Us</p>
                  <p className="text-lg font-bold">+447436763956
              </div>
            </div>

            <div className="mt-12 glass-panel p-8 rounded-2xl">
               <h4 className="font-bold mb-4 italic">Or Book a Call Directly</h4>
               <div className="aspect-video bg-white/5 rounded-xl border border-dashed border-white/20 flex items-center justify-center">
                  <p className="text-white/40">Calendly Widget Implementation Placeholder</p>
               </div>
            </div>
          </div>

          <div className="glass-panel p-10 rounded-3xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary" placeholder="Acme Corp" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Work Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary" placeholder="john@acme.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">What can we help with?</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary">
                  <option>Select a service</option>
                  <option>LLM Integration</option>
                  <option>Workflow Automation</option>
                  <option>AI Strategy Audit</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Project Details</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary h-32" placeholder="Tell us about your automation goals..."></textarea>
              </div>
              <button className="w-full py-4 bg-primary text-black font-black rounded-xl hover:bg-white transition-colors">
                Send Transmission
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
