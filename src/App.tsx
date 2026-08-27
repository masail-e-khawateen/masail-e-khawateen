/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Category from './pages/Category';
import Categories from './pages/Categories';
import Article from './pages/Article';
import Ask from './pages/Ask';
import Search from './pages/Search';
import About from './pages/About';
import Contact from './pages/Contact';
import Disclaimer from './pages/Disclaimer';
import EditorialPolicy from './pages/EditorialPolicy';
import Admin from './pages/Admin';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="ask" element={<Ask />} />
          <Route path="search" element={<Search />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="editorial-policy" element={<EditorialPolicy />} />
          <Route path="admin" element={<Admin />} />
          
          {/* Dynamic Routes */}
          <Route path=":categorySlug" element={<Category />} />
          <Route path=":categorySlug/:articleSlug" element={<Article />} />
        </Route>
      </Routes>
    </Router>
  );
}

