import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon, ChevronRight } from 'lucide-react';
import { sampleArticles, categories } from '../lib/data';
import { useSEO } from '../lib/useSEO';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(query);

  useSEO({ 
    title: query ? `Search results for "${query}"` : 'Search Masail',
    description: 'Search through our authentic database of Islamic rulings and articles.',
    canonicalUrl: '/search'
  });

  const results = sampleArticles.filter(article => 
    article.title.toLowerCase().includes(query.toLowerCase()) || 
    article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
    article.content.toLowerCase().includes(query.toLowerCase()) ||
    article.subcategory.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchParams({ q: searchTerm });
    } else {
      setSearchParams({});
    }
  };

  useEffect(() => {
    setSearchTerm(query);
  }, [query]);

  return (
    <div className="bg-bg-light min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-charcoal mb-4 font-urdu">Search Results</h1>
          
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mt-6">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-lg transition-colors font-urdu shadow-sm"
              placeholder="Search for a topic..."
              dir="auto"
            />
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
              <button type="submit" className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-xl font-medium transition-colors font-urdu">
                Search
              </button>
            </div>
          </form>
        </div>

        {query && (
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-charcoal">
              Found {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
            </h2>
          </div>
        )}

        {results.length > 0 ? (
          <div className="space-y-6">
            {results.map(article => (
              <Link key={article.id} to={`/article/${article.slug}`} className="block bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                    {categories.find(c => c.id === article.categoryId)?.title || 'Category'} - {article.subcategory}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors font-urdu" dir="rtl">{article.title}</h3>
                <p className="text-gray-600 text-sm font-urdu" dir="rtl">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        ) : query ? (
          <div className="bg-white p-12 rounded-3xl border border-gray-100 text-center shadow-sm">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <SearchIcon className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-2 font-urdu">Humein is sawal ka article nahi mila</h3>
            <p className="text-gray-500 mb-8 font-urdu">We couldn't find any articles matching your search. Please try different keywords or ask a new question.</p>
            <Link to="/ask" className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-medium transition-colors font-urdu">
              Sawal Poochiye
            </Link>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 font-urdu text-lg">Enter a search term to find articles and rulings.</p>
          </div>
        )}

      </div>
    </div>
  );
}
