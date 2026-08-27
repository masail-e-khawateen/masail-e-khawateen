import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ChevronRight, BookOpen } from 'lucide-react';
import { categories, sampleArticles, faqs } from '../lib/data';
import { siteConfig, popularSearches } from '../lib/config';

export default function Home() {
  const navigate = useNavigate();
  const featuredArticle = sampleArticles.find(a => a.isFeatured) || sampleArticles[0];
  const latestArticles = [...sampleArticles].sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()).slice(0, 3);
  
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = new FormData(e.currentTarget).get('q');
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query.toString())}`);
    }
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* HERO SECTION */}
      <section className="relative bg-primary flex items-center justify-center text-center overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-islamic-pattern opacity-40 z-0"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-urdu leading-tight text-white">
            {siteConfig.name.split('-').join(' ')}<br/><span className="text-accent">— {siteConfig.tagline.split(' — ')[1] || siteConfig.tagline} —</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-urdu opacity-90">
            “{siteConfig.description}”
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/search" className="bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg text-center font-urdu text-lg">
              Apna Masla Search Karein
            </Link>
            <Link to="/ask" className="bg-transparent border-2 border-accent text-accent hover:bg-accent/10 font-semibold px-8 py-4 rounded-full transition-all text-center font-urdu text-lg">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form className="relative" onSubmit={handleSearchSubmit}>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              name="q"
              className="block w-full pl-12 pr-4 py-4 md:py-5 border-2 border-gray-200 rounded-2xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-lg transition-colors font-urdu"
              placeholder="Apna masla search karein... (e.g. Haiz ke baad ghusl kab karna hai?)"
              dir="auto"
            />
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
              <button type="submit" className="bg-primary hover:bg-primary-dark text-white px-6 py-2 md:py-3 rounded-xl font-medium transition-colors font-urdu">
                Search
              </button>
            </div>
          </form>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-gray-500">
            <span className="mr-2 py-1 font-medium text-gray-700">Popular:</span>
            {popularSearches.map(tag => (
              <Link key={tag} to={`/search?q=${tag.toLowerCase()}`} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR CATEGORIES */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary font-urdu border-r-4 border-accent pr-4 inline-block">Khawateen ke Aham Masail</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/category/${cat.slug}`} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 transition-all group flex flex-col items-center text-center cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-primary/5 text-primary flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">{cat.title}</h3>
                <p className="text-sm text-gray-500 font-urdu leading-relaxed">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20 relative overflow-hidden flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center space-x-2 bg-accent/20 text-accent-light text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-4">
                <span>⭐ Aaj Ka Masla</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-urdu leading-normal" dir="rtl">
                {featuredArticle.title}
              </h2>
              
              <p className="text-gray-700 mb-6 font-urdu text-lg leading-relaxed" dir="rtl">
                {featuredArticle.excerpt}
              </p>
              
              <Link to={`/article/${featuredArticle.slug}`} className="inline-flex items-center font-bold text-primary hover:text-primary-dark transition-colors text-base underline underline-offset-8">
                Read More <ChevronRight size={20} className="ml-1" />
              </Link>
            </div>
            <div className="hidden md:flex w-32 h-32 bg-primary/10 rounded-xl items-center justify-center text-5xl opacity-50 flex-shrink-0">
              📖
            </div>
          </div>
        </div>
      </section>

      {/* MOST ASKED QUESTIONS */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal font-urdu">Khawateen ke Aam Sawalat</h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-primary/30 transition-colors cursor-pointer group">
                <Link to={`/search?q=${encodeURIComponent(faq.question)}`} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mr-4 mt-1">
                    {index + 1}
                  </div>
                  <h3 className="font-medium text-charcoal group-hover:text-primary font-urdu text-lg">{faq.question}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-charcoal font-urdu">Latest Articles</h2>
              <div className="w-24 h-1 bg-accent mt-4 rounded-full"></div>
            </div>
            <Link to="/search" className="hidden sm:inline-flex items-center text-primary font-medium hover:text-primary-dark">
              View All <ChevronRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <Link key={article.id} to={`/article/${article.slug}`} className="group flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 px-3 py-1 rounded-full">
                      {categories.find(c => c.id === article.categoryId)?.title || article.categoryId}
                    </span>
                    <span className="text-xs text-gray-400">{article.publishedDate}</span>
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors font-urdu leading-snug" dir="rtl">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 mb-6 flex-grow font-urdu" dir="rtl">{article.excerpt}</p>
                  
                  <div className="pt-4 border-t border-gray-100 flex justify-between items-center mt-auto">
                    <span className="inline-flex items-center text-sm font-semibold text-charcoal group-hover:text-primary">
                      Read More <ChevronRight size={16} className="ml-1" />
                    </span>
                    {article.reviewStatus === 'Reviewed' ? (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-medium">Verified</span>
                    ) : (
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded font-medium">Pending Review</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ASK A QUESTION CTA */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-islamic-pattern opacity-10"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
          <BookOpen size={48} className="text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-urdu text-white">Apna Shar‘i Sawal Poochiye</h2>
          <p className="text-lg text-emerald-50 opacity-90 mb-10 font-urdu leading-relaxed">
            “Agar aapko apne kisi personal Shar‘i maslay ke bare mein rehnumai chahiye to apna sawal submit karein. Sensitive personal questions should be reviewed by a qualified Mufti or scholar.”
          </p>
          <Link to="/ask" className="inline-block bg-accent hover:bg-accent-light text-white font-bold px-10 py-4 rounded-full transition-colors text-lg shadow-lg font-urdu">
            Sawal Poochiye
          </Link>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-charcoal">Authentic Sources & Scholar Review</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-xl">📖</div>
              <h3 className="font-bold text-charcoal text-sm">Quran & Hadith References</h3>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-xl">⚖️</div>
              <h3 className="font-bold text-charcoal text-sm">Fiqh/Madhhab Mentioned</h3>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-xl">👤</div>
              <h3 className="font-bold text-charcoal text-sm">Scholar Review</h3>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-xl">📅</div>
              <h3 className="font-bold text-charcoal text-sm">Regularly Updated</h3>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/editorial-policy" className="text-primary hover:text-primary-dark font-medium underline underline-offset-4">
              Hamari Editorial Policy
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
