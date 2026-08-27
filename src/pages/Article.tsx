import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories, sampleArticles } from '../lib/data';
import { ChevronRight, Share2, AlertTriangle, CheckCircle, Info } from 'lucide-react';

export default function Article() {
  const { slug } = useParams();
  const article = sampleArticles.find(a => a.slug === slug);
  const category = categories.find(c => c.id === article?.categoryId);
  
  if (!article || !category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-charcoal mb-4">Article not found</h1>
        <Link to="/" className="text-primary hover:underline">Return to Home</Link>
      </div>
    );
  }

  const isReviewed = article.reviewStatus === 'Reviewed';

  return (
    <div className="bg-bg-light min-h-screen pb-20">
      
      {/* Article Header */}
      <div className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to={`/category/${category.slug}`} className="hover:text-primary transition-colors">{category.title}</Link>
            <ChevronRight size={14} />
            <span className="text-charcoal font-medium truncate">{article.title}</span>
          </div>
          
          <div className="mb-4 flex items-center space-x-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
              {article.subcategory}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 font-urdu leading-snug" dir="rtl">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-600 font-urdu leading-relaxed mb-6" dir="rtl">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between py-4 border-t border-gray-100 text-sm text-gray-500">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <div>
                <span className="block text-xs text-gray-400">Published</span>
                <span className="font-medium text-gray-700">{article.publishedDate}</span>
              </div>
              {isReviewed && article.lastReviewedDate && (
                <div className="pl-4 border-l border-gray-200">
                  <span className="block text-xs text-gray-400">Last Reviewed</span>
                  <span className="font-medium text-gray-700">{article.lastReviewedDate}</span>
                </div>
              )}
            </div>
            <button className="flex items-center text-primary hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-colors">
              <Share2 size={16} className="mr-2" /> Share
            </button>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Status Banner */}
        <div className={`mb-8 p-4 rounded-xl border flex items-start space-x-3 ${isReviewed ? 'bg-green-50 border-green-200 text-green-800' : 'bg-amber-50 border-amber-200 text-amber-800'}`}>
          <div className="flex-shrink-0 mt-0.5">
            {isReviewed ? <CheckCircle size={20} className="text-green-600" /> : <AlertTriangle size={20} className="text-amber-600" />}
          </div>
          <div>
            <h4 className="font-semibold">{isReviewed ? 'Verified by Scholar' : 'Pending Review (Demo Content)'}</h4>
            <p className="text-sm opacity-90 mt-1">
              {isReviewed 
                ? `This article has been reviewed for Islamic accuracy by ${article.scholarReviewer}.`
                : 'This article is currently a draft/placeholder and has not yet been verified by a qualified scholar.'}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="prose prose-lg max-w-none prose-headings:text-charcoal prose-headings:font-bold prose-p:text-gray-700 prose-a:text-primary">
          <div className="font-urdu text-xl leading-loose" dir="rtl">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full bg-primary"></div>
              <h3 className="text-2xl font-bold text-primary mb-4 mt-0">Quick Answer (Khulasa)</h3>
              <p className="m-0">{article.content}</p>
            </div>

            <h3 className="text-2xl font-bold mt-10 mb-4">Detailed Explanation (Tafseeli Jawab)</h3>
            <p>
              Yahan tafseeli wazahat aayegi. Yeh ek placeholder section hai jo article ke structure ko darshata hai. Asal content mein yahan mukammal wazahat hogi jo asaan Urdu zaban mein likhi jayegi taake khawateen ko samajhne mein asani ho.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4">Important Points (Aham Nukaat)</h3>
            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
              <li>Pehla aham nukta yahan likha jayega.</li>
              <li>Dusra aham nukta.</li>
              <li>Teesra aham nukta jo is maslay ko mazeed wazeh karega.</li>
            </ul>
          </div>
        </div>

        {/* Metadata section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          
          {article.madhhab && (
            <div className="mb-6 flex items-start space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-gray-900 uppercase tracking-wider">Fiqhi Note</h4>
                <p className="text-sm text-gray-700 mt-1">{article.madhhab}</p>
              </div>
            </div>
          )}

          <div className="mb-8">
            <h4 className="font-semibold text-charcoal mb-3">Sources / Hawalajat:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {article.sources.map((source, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-primary mr-2">•</span> {source}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-charcoal text-white p-6 rounded-2xl">
            <h4 className="font-bold text-lg mb-2 font-urdu">Disclaimer</h4>
            <p className="text-sm text-gray-300 leading-relaxed font-urdu">
              This content is provided for educational purposes. Personal circumstances may change the ruling. For a personal fatwa, consult a qualified Mufti or Islamic scholar. <Link to="/disclaimer" className="text-accent hover:underline">Read full disclaimer</Link>.
            </p>
          </div>
        </div>

      </div>

      {/* Related Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        <h2 className="text-2xl font-bold text-charcoal mb-8 font-urdu">Is Topic Se Mutalliq Mazeed Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleArticles.filter(a => a.id !== article.id).slice(0, 3).map((rel) => (
            <Link key={rel.id} to={`/article/${rel.slug}`} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <span className="text-xs font-semibold text-primary mb-2 block">{rel.subcategory}</span>
              <h3 className="text-lg font-bold text-charcoal group-hover:text-primary transition-colors font-urdu leading-snug" dir="rtl">{rel.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
