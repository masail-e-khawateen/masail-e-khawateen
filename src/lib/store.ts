import { useState, useEffect } from 'react';
import { Article, sampleArticles } from './data';

const STORAGE_KEY = 'masaile_articles';

export function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setArticles(JSON.parse(stored));
      } catch (e) {
        setArticles(sampleArticles);
      }
    } else {
      setArticles(sampleArticles);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleArticles));
    }
    setIsLoaded(true);
  }, []);

  const saveArticle = (article: Article) => {
    setArticles(prev => {
      const exists = prev.find(a => a.id === article.id);
      let updated;
      if (exists) {
        updated = prev.map(a => a.id === article.id ? article : a);
      } else {
        updated = [article, ...prev];
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const deleteArticle = (id: string) => {
    setArticles(prev => {
      const updated = prev.filter(a => a.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const publishedArticles = articles.filter(a => a.reviewStatus === 'Published');

  return {
    articles,
    publishedArticles,
    isLoaded,
    saveArticle,
    deleteArticle
  };
}
