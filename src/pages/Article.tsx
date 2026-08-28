import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { categories } from '../lib/data';
import { ChevronRight, Share2, AlertTriangle, CheckCircle, Info, ArrowLeft, ArrowRight } from 'lucide-react';
import { useSEO } from '../lib/useSEO';
import { useArticles } from '../lib/store';

export default function Article() {
  const { categorySlug, articleSlug } = useParams();
  const navigate = useNavigate();
  const { publishedArticles, isLoaded } = useArticles();
  
  const article = publishedArticles.find(a => a.slug === articleSlug);
  const category = categories.find(c => c.slug === categorySlug);
  
  useSEO({ 
    title: article?.seoTitle || article?.title,
    description: article?.metaDescription || article?.excerpt,
    canonicalUrl: article?.canonicalUrl || (article && category ? `/${category.slug}/${article.slug}` : undefined)
  });
  
  // Structured Data
  useEffect(() => {
    if (article && category) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'article-structured-data';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.seoTitle || article.title,
        "description": article.metaDescription || article.excerpt,
        "author": {
          "@type": "Person",
          "name": article.author
        },
        "datePublished": article.publishedDate,
        "dateModified": article.lastUpdatedDate || article.publishedDate
      });
      document.head.appendChild(script);

      return () => {
        const existing = document.getElementById('article-structured-data');
        if (existing) existing.remove();
      };
    }
  }, [article, category]);
  
  if (!isLoaded) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!article || !category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-charcoal mb-4">Article not found</h1>
        <Link to="/" className="text-primary hover:underline">Return to Home</Link>
      </div>
    );
  }

  const isReviewed = article.reviewStatus === 'Reviewed' || article.reviewStatus === 'Published';
  const categoryArticles = publishedArticles.filter(a => a.categoryId === category.id);
  const currentIndex = categoryArticles.findIndex(a => a.id === article.id);
  const prevArticle = currentIndex > 0 ? categoryArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < categoryArticles.length - 1 ? categoryArticles[currentIndex + 1] : null;
  const relatedArticles = categoryArticles.filter(a => a.id !== article.id).slice(0, 2);

  return (
    <div className="bg-bg-light min-h-screen pb-20">
      
      {/* Article Header */}
      <div className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to={`/${category.slug}`} className="hover:text-primary transition-colors">{category.title}</Link>
            <ChevronRight size={14} />
            <span className="text-charcoal font-medium truncate">{article.title}</span>
          </div>
          
          <div className="mb-4 flex items-center space-x-3">
            {article.subcategory && (
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                {article.subcategory}
              </span>
            )}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 font-urdu leading-snug" dir="rtl">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-600 font-urdu leading-relaxed mb-6" dir="rtl">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between py-4 border-t border-gray-100 text-sm text-gray-500">
            <div className="flex flex-wrap items-center gap-4 mb-2 sm:mb-0">
              <div>
                <span className="block text-xs text-gray-400">اشاعت</span>
                <span className="font-medium text-gray-700">{new Date(article.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              {article.lastUpdatedDate && (
                <div>
                  <span className="block text-xs text-gray-400">آخری اپڈیٹ</span>
                  <span className="font-medium text-gray-700">{new Date(article.lastUpdatedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              )}
            </div>
            
            <button className="flex items-center space-x-2 text-gray-500 hover:text-primary transition-colors" onClick={() => navigator.clipboard.writeText(window.location.href).then(() => alert('لنک کاپی ہو گیا!'))}>
              <Share2 size={18} />
              <span>شیئر</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Verification Banner */}
        <div className={`mb-10 p-5 rounded-2xl flex items-start space-x-4 border ${isReviewed ? 'bg-green-50 border-green-100' : 'bg-amber-50 border-amber-100'}`}>
          <div className="mt-1">
            {isReviewed ? <CheckCircle size={20} className="text-green-600" /> : <AlertTriangle size={20} className="text-amber-600" />}
          </div>
          <div>
            <h4 className="font-semibold">{isReviewed ? 'عالم سے تصدیق شدہ' : article.reviewStatus}</h4>
            <p className="text-sm opacity-90 mt-1">
              {isReviewed 
                ? `اس مضمون کی شرعی درستگی کا جائزہ ${article.scholarReviewer || 'ایک مستند عالم'} نے لیا ہے۔`
                : 'یہ مضمون فی الحال مسودہ یا نمونہ ہے اور کسی مستند عالم نے اس کی تصدیق نہیں کی ہے۔'}
            </p>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg prose-headings:text-charcoal prose-a:text-primary max-w-none font-urdu leading-loose text-gray-800" dir="rtl">
          {article.content}
        </article>
        
        {/* References */}
        {((article.sources && article.sources.length > 0) || (article.quranReferences && article.quranReferences.length > 0) || (article.hadithReferences && article.hadithReferences.length > 0)) && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-charcoal mb-4">حوالہ جات اور ماخذ</h3>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              {article.quranReferences?.map((q, i) => <li key={`q-${i}`}>{q}</li>)}
              {article.hadithReferences?.map((h, i) => <li key={`h-${i}`}>{h}</li>)}
              {article.sources?.map((s, i) => <li key={`s-${i}`}>{s}</li>)}
              {article.madhhab && <li><strong>فقہ / مسلک:</strong> {article.madhhab}</li>}
            </ul>
          </div>
        )}

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">{tag}</span>
            ))}
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-12 bg-gray-50 p-6 rounded-2xl border border-gray-200">
          <div className="flex items-center space-x-2 text-charcoal font-bold mb-2">
            <Info size={18} />
            <span>اہم دستبرداری</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            یہاں دی گئی معلومات تعلیمی مقاصد کے لیے ہیں۔ حساس نوعیت کے مسائل (جیسے طلاق، خلع یا پیچیدہ طبی مسائل) کے لیے براہ کرم کسی مستند مفتی یا عالمِ دین سے رجوع کریں۔ انفرادی حالات سے شرعی احکام تبدیل ہو سکتے ہیں۔
          </p>
        </div>

        {/* Prev / Next Navigation */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-8 gap-4">
          {prevArticle ? (
            <Link to={`/${category.slug}/${prevArticle.slug}`} className="group flex items-center text-primary hover:text-primary-dark transition-colors w-full sm:w-auto justify-start">
              <ArrowRight size={18} className="mr-2 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
              <span className="font-medium truncate max-w-[200px]">{prevArticle.title}</span>
            </Link>
          ) : <div className="w-full sm:w-auto"></div>}
          
          {nextArticle && (
            <Link to={`/${category.slug}/${nextArticle.slug}`} className="group flex items-center text-primary hover:text-primary-dark transition-colors w-full sm:w-auto justify-end text-right">
              <span className="font-medium truncate max-w-[200px]">{nextArticle.title}</span>
              <ArrowLeft size={18} className="mr-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
          )}
        </div>

        {/* متعلقہ مضامین */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-charcoal mb-6">متعلقہ مضامین</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map(rel => (
                <Link key={rel.id} to={`/${category.slug}/${rel.slug}`} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                  <h4 className="font-bold text-charcoal mb-2 group-hover:text-primary transition-colors font-urdu" dir="rtl">{rel.title}</h4>
                  <p className="text-sm text-gray-500 font-urdu line-clamp-2" dir="rtl">{rel.excerpt}</p>
                </Link>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link to={`/${category.slug}`} className="inline-block border border-primary text-primary hover:bg-primary/5 px-6 py-2 rounded-full font-medium transition-colors">
                مزید مضامین - {category.title}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
