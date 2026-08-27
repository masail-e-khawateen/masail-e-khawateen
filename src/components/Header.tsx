import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import { siteConfig, navMenu } from '../lib/config';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary border-b border-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-bold text-primary tracking-tight">{siteConfig.logoText}</span>
              <span className="text-[10px] text-accent tracking-widest uppercase font-semibold">{siteConfig.subtitle}</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-6 items-center">
            {navMenu.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-sm font-medium text-charcoal hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4 pl-4 border-l border-primary/20">
              <Link to="/search" className="text-charcoal hover:text-accent transition-colors">
                <Search size={20} />
              </Link>
              <Link 
                to="/ask" 
                className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm"
              >
                Ask a Question
              </Link>
            </div>
          </nav>

          <div className="flex items-center space-x-4 md:hidden">
            <Link to="/search" className="text-charcoal p-2">
              <Search size={24} />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary border-b border-primary/10 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navMenu.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-3 rounded-md text-base font-medium text-charcoal hover:text-accent hover:bg-primary/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
                to="/ask"
                className="block px-3 py-3 mt-4 text-center rounded-md text-base font-medium bg-primary text-white hover:bg-primary-dark"
                onClick={() => setIsOpen(false)}
              >
                Ask a Question
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
