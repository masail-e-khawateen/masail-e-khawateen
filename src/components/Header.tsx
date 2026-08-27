import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, X, ChevronDown } from 'lucide-react';
import { siteConfig, navMenu } from '../lib/config';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const mainNav = navMenu.slice(0, 6);
  const moreNav = navMenu.slice(6);

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
          
          <nav className="hidden lg:flex space-x-6 items-center">
            {mainNav.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-sm font-medium text-charcoal hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {moreNav.length > 0 && (
              <div 
                className="relative group"
                onMouseEnter={() => setShowMore(true)}
                onMouseLeave={() => setShowMore(false)}
              >
                <button className="flex items-center text-sm font-medium text-charcoal hover:text-accent transition-colors">
                  More <ChevronDown size={16} className="ml-1" />
                </button>
                {showMore && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 border border-gray-100 z-50">
                    {moreNav.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            <div className="flex items-center space-x-4 pl-4 border-l border-primary/20">
              <Link to="/search" className="text-charcoal hover:text-accent transition-colors">
                <Search size={20} />
              </Link>
            </div>
          </nav>

          <div className="flex items-center space-x-4 lg:hidden">
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
        <div className="lg:hidden bg-secondary border-b border-primary/10 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1 h-[80vh] overflow-y-auto">
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
          </div>
        </div>
      )}
    </header>
  );
}
