import React from 'react';
import { editorialPolicyContent } from '../lib/config';

export default function EditorialPolicy() {
  return (
    <div className="bg-bg-light min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 font-urdu border-b border-gray-100 pb-4">
          {editorialPolicyContent.title}
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="font-urdu leading-relaxed mb-8 text-lg">
            {editorialPolicyContent.intro}
          </p>

          <ol className="space-y-6 font-urdu">
            {editorialPolicyContent.policies.map((policy, index) => (
              <li key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-primary mt-0 mb-2">{policy.title}</h3>
                <p className="m-0 text-gray-700">{policy.content}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
