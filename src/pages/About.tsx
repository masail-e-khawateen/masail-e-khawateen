import React from 'react';
import { Link } from 'react-router-dom';
import { aboutContent } from '../lib/config';

export default function About() {
  return (
    <div className="bg-bg-light min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 font-urdu border-b border-gray-100 pb-4">
          {aboutContent.title}
        </h1>
        
        <div className="prose prose-lg prose-headings:text-primary prose-a:text-primary max-w-none font-urdu leading-relaxed text-gray-700" dir="rtl">
          <p>
            {aboutContent.intro}
          </p>
          
          {aboutContent.sections.map((section, index) => (
            <React.Fragment key={index}>
              <h2 className="text-2xl font-bold mt-8 mb-4">{section.title}</h2>
              <p>{section.content}</p>
            </React.Fragment>
          ))}
          
          <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 mt-8 mb-4">
            <h3 className="text-xl font-bold text-primary mt-0 mb-2">{aboutContent.importantNote.title}</h3>
            <p className="m-0">
              {aboutContent.importantNote.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
