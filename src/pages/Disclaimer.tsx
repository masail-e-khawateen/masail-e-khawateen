import React from 'react';
import { disclaimerContent } from '../lib/config';
import { useSEO } from '../lib/useSEO';

export default function Disclaimer() {
  useSEO({ 
    title: 'Disclaimer',
    description: 'Read the disclaimer for Masail-e-Khawateen regarding the educational nature of our content.',
    canonicalUrl: '/disclaimer'
  });
  return (
    <div className="bg-bg-light min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 font-urdu border-b border-gray-100 pb-4">
          {disclaimerContent.title}
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700" dir="rtl">
          <p className="font-urdu leading-relaxed">
            {disclaimerContent.intro}
          </p>

          {disclaimerContent.sections.map((section, index) => (
            <React.Fragment key={index}>
              <h3 className="text-xl font-bold text-charcoal mt-8 mb-3">{section.title}</h3>
              <p className="font-urdu leading-relaxed">
                {section.content}
              </p>
              {section.highlight && (
                <p className="font-urdu leading-relaxed font-semibold text-primary">
                  {section.highlight}
                </p>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
