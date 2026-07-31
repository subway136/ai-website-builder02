'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Process', href: '/process' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-panel border-b' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <Cpu className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">Aura <span className="text-primary">Intelligence</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-primary transition-all duration-300 transform hover:scale-105"
          >
            Get a Proposal
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass-panel border-b flex flex-col p-6 gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}