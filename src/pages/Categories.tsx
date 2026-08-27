import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../lib/data';

export default function Categories() {
  return (
    <div className="bg-bg-light min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-charcoal font-urdu">All Categories</h1>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.id} to={`/category/${cat.slug}`} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-primary transition-colors font-urdu">{cat.title}</h3>
              <p className="text-gray-500 font-urdu">{cat.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
