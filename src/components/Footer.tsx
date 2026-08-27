import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { siteConfig, socialLinks, footerSections } from '../lib/config';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1 flex flex-col gap-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              <h2 className="text-xl font-bold text-primary font-urdu">{siteConfig.name}</h2>
            </div>
            <p className="text-[10px] text-gray-500 font-urdu leading-relaxed uppercase tracking-wider font-semibold mb-4">
              {siteConfig.subtitle}
            </p>
            <p className="text-sm text-gray-600 font-urdu leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  <Instagram size={20} />
                </a>
              )}
              {socialLinks.youtube && (
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  <Youtube size={20} />
                </a>
              )}
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  <Facebook size={20} />
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  <Twitter size={20} />
                </a>
              )}
              {socialLinks.whatsapp && (
                <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  <MessageCircle size={20} />
                </a>
              )}
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-primary mb-4 border-b border-gray-100 pb-2">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.path} className="text-gray-600 hover:text-accent text-sm transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
        
        <div className="border-t border-gray-100 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} {siteConfig.copyrightText}</p>
            <p className="mt-1">Editorial Policy | Scholar Reviewed Content</p>
          </div>
          <p className="max-w-lg text-center md:text-right font-urdu leading-relaxed">
            {siteConfig.footerNotice}
          </p>
        </div>
      </div>
    </footer>
  );
}
