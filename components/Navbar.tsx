'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-[34px] md:top-[32px] left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-white font-bold text-xl">
            wiregency
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#creations" className="text-zinc-400 hover:text-white transition-colors">
              Créations
            </Link>
            <Link 
              href="https://discord.wiregency.com"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-white text-black hover:bg-zinc-200 transition-all rounded-full px-4 py-2"
            >
              Discord
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden bg-black/95 backdrop-blur-md absolute left-0 right-0 top-full border-t border-zinc-800 transition-all duration-300 origin-top ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-4 p-4">
            <Link 
              href="/#creations" 
              className="text-zinc-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Créations
            </Link>
            <Link 
              href="https://discord.wiregency.com"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-white text-black hover:bg-zinc-200 transition-all rounded-full px-4 py-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Discord
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}