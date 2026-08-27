import { useEffect } from 'react';
import { siteConfig } from './config';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

export function useSEO({ title, description, canonicalUrl }: SEOProps = {}) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} - ${siteConfig.tagline}`;
    const pageDesc = description || siteConfig.description;
    const url = canonicalUrl ? `https://masailekhawateen.example.com${canonicalUrl}` : 'https://masailekhawateen.example.com';

    document.title = pageTitle;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMeta('description', pageDesc);
    setMeta('og:title', pageTitle, true);
    setMeta('og:description', pageDesc, true);
    setMeta('og:url', url, true);
    setMeta('og:type', 'website', true);

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);

  }, [title, description, canonicalUrl]);
}
