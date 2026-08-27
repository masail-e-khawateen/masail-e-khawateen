import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories, sampleArticles, faqs } from '../lib/data';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useSEO } from '../lib/useSEO';

export default function Category() {
  const { slug } = useParams();
  const category = categories.find(c => c.slug === slug);
  const categoryArticles = sampleArticles.filter(a => a.categoryId === category?.id);

  useSEO({ 
    title: category?.title ? `${category.title} Masail` : 'Category',
    description: category?.description,
    canonicalUrl: `/category/${slug}`
  });

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-charcoal mb-4">Category not found</h1>
        <Link to="/" className="text-primary hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-bg-light min-h-screen pb-20">
      
      {/* Category Header */}
      <div className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-charcoal font-medium">{category.title}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-3xl">
              {category.icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-charcoal font-urdu">{category.title}</h1>
              <p className="text-gray-500 mt-2 font-urdu">{category.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-6 border-b border-gray-200 pb-2">Articles in {category.title}</h2>
              
              {categoryArticles.length > 0 ? (
                <div className="space-y-6">
                  {categoryArticles.map(article => (
                    <Link key={article.id} to={`/article/${article.slug}`} className="block bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {article.subcategory}
                        </span>
                        {article.reviewStatus === 'Reviewed' ? (
                          <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded border border-green-100">Reviewed</span>
                        ) : (
                          <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded border border-amber-100">{article.reviewStatus}</span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors font-urdu" dir="rtl">{article.title}</h3>
                      <p className="text-gray-600 text-sm font-urdu line-clamp-2" dir="rtl">{article.excerpt}</p>
                      <div className="mt-4 flex items-center text-primary font-medium text-sm">
                        Read full article <ChevronRight size={16} className="ml-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center">
                  <p className="text-gray-500 font-urdu mb-4">No articles found in this category yet.</p>
                  <Link to="/ask" className="text-primary hover:underline font-medium">Ask a question about {category.title}</Link>
                </div>
              )}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal mb-6 border-b border-gray-200 pb-2">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.slice(0, 5).map((faq, i) => (
                  <details key={i} className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-charcoal hover:text-primary font-urdu text-lg">
                      <span dir="rtl">{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <ChevronDown size={20} />
                      </span>
                    </summary>
                    <div className="text-gray-600 p-5 pt-0 font-urdu border-t border-gray-50" dir="rtl">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-charcoal mb-4">Subcategories</h3>
              <ul className="space-y-2">
                {category.subcategories.map(sub => (
                  <li key={sub}>
                    <Link to={`/search?q=${sub.toLowerCase()}`} className="text-gray-600 hover:text-primary text-sm flex items-center font-urdu">
                      <ChevronRight size={14} className="mr-2 flex-shrink-0 text-primary/50" />
                      <span>{sub}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center">
              <h3 className="text-lg font-bold text-charcoal mb-2 font-urdu">Sawal Poochiye</h3>
              <p className="text-sm text-gray-600 mb-4 font-urdu">Apna masla mufti sahiban se samajhne ke liye sawal bhejein.</p>
              <Link to="/ask" className="block w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 rounded-lg transition-colors text-sm">
                Ask a Question
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
