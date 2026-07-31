'use client';
import Link from 'next/link';
import { Cpu, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase">Aura <span className="text-primary">Intelligence</span></span>
            </Link>
            <p className="text-white/50 max-w-sm mb-8">
              Transforming modern enterprises through custom-built artificial intelligence and hyper-efficient automation.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-white/30 hover:text-primary cursor-pointer" />
              <Linkedin className="w-5 h-5 text-white/30 hover:text-primary cursor-pointer" />
              <Github className="w-5 h-5 text-white/30 hover:text-primary cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 italic">Services</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><Link href="/solutions" className="hover:text-primary">LLM Integration</Link></li>
              <li><Link href="/solutions" className="hover:text-primary">Sales Agents</Link></li>
              <li><Link href="/solutions" className="hover:text-primary">Workflow Ops</Link></li>
              <li><Link href="/solutions" className="hover:text-primary">Strategy Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 italic">Company</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><Link href="/case-studies" className="hover:text-primary">Case Studies</Link></li>
              <li><Link href="/process" className="hover:text-primary">Our Method</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link href="/" className="hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Aura Intelligence AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-white/40 uppercase tracking-widest">Systems Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}