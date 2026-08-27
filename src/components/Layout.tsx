import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BottomNav from './BottomNav';
import { siteConfig } from '../lib/config';

export default function Layout() {
  useEffect(() => {
    document.title = `${siteConfig.name} - ${siteConfig.subtitle}`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', siteConfig.description);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-bg-light">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
