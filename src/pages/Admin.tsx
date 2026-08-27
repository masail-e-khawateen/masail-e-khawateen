import React, { useState } from 'react';
import { useArticles } from '../lib/store';
import { Article, categories } from '../lib/data';
import { Edit, Trash, Plus, Save, X } from 'lucide-react';

export default function Admin() {
  const { articles, saveArticle, deleteArticle, isLoaded } = useArticles();
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);

  if (!isLoaded) return <div className="p-10 text-center">Loading...</div>;

  const handleCreate = () => {
    setEditingArticle({
      id: Date.now().toString(),
      title: '',
      slug: '',
      categoryId: categories[0].id,
      subcategory: '',
      excerpt: '',
      content: '',
      author: 'Admin',
      reviewStatus: 'Draft',
      sources: [],
      publishedDate: new Date().toISOString().split('T')[0],
      tags: [],
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingArticle) {
      // Ensure slug format is clean
      const cleanedArticle = {
        ...editingArticle,
        slug: editingArticle.slug.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-')
      };
      saveArticle(cleanedArticle);
      setEditingArticle(null);
    }
  };

  const handleArrayChange = (field: keyof Article, value: string) => {
    if (editingArticle) {
      setEditingArticle({
        ...editingArticle,
        [field]: value.split(',').map(s => s.trim()).filter(Boolean)
      });
    }
  };

  return (
    <div className="bg-bg-light min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-charcoal">Content Management</h1>
          {!editingArticle && (
            <button onClick={handleCreate} className="bg-primary text-white px-4 py-2 rounded-md flex items-center">
              <Plus size={20} className="mr-2" /> Add Article
            </button>
          )}
        </div>

        {editingArticle ? (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-6">{editingArticle.title ? 'Edit Article' : 'New Article'}</h2>
            <form onSubmit={handleSave} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input type="text" required value={editingArticle.title} onChange={e => setEditingArticle({...editingArticle, title: e.target.value})} className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                  <input type="text" required value={editingArticle.slug} onChange={e => setEditingArticle({...editingArticle, slug: e.target.value})} className="w-full p-2 border rounded-md" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select value={editingArticle.categoryId} onChange={e => setEditingArticle({...editingArticle, categoryId: e.target.value})} className="w-full p-2 border rounded-md">
                    {categories.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Review Status</label>
                  <select value={editingArticle.reviewStatus} onChange={e => setEditingArticle({...editingArticle, reviewStatus: e.target.value as any})} className="w-full p-2 border rounded-md">
                    <option value="Draft">Draft</option>
                    <option value="Pending Scholar Review">Pending Scholar Review</option>
                    <option value="Reviewed">Reviewed (Requires real scholar)</option>
                    <option value="Published">Published</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Short Description (Excerpt)</label>
                <textarea required value={editingArticle.excerpt} onChange={e => setEditingArticle({...editingArticle, excerpt: e.target.value})} className="w-full p-2 border rounded-md" rows={2}></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Content (Markdown/Text)</label>
                <textarea required value={editingArticle.content} onChange={e => setEditingArticle({...editingArticle, content: e.target.value})} className="w-full p-2 border rounded-md" rows={10}></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">SEO Title</label>
                  <input type="text" value={editingArticle.seoTitle || ''} onChange={e => setEditingArticle({...editingArticle, seoTitle: e.target.value})} className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                  <input type="text" value={editingArticle.metaDescription || ''} onChange={e => setEditingArticle({...editingArticle, metaDescription: e.target.value})} className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Canonical URL</label>
                  <input type="text" value={editingArticle.canonicalUrl || ''} onChange={e => setEditingArticle({...editingArticle, canonicalUrl: e.target.value})} className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Publication Date</label>
                  <input type="date" value={editingArticle.publishedDate} onChange={e => setEditingArticle({...editingArticle, publishedDate: e.target.value})} className="w-full p-2 border rounded-md" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sources (Comma separated)</label>
                  <input type="text" value={(editingArticle.sources || []).join(', ')} onChange={e => handleArrayChange('sources', e.target.value)} className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Quran References (Comma separated)</label>
                  <input type="text" value={(editingArticle.quranReferences || []).join(', ')} onChange={e => handleArrayChange('quranReferences', e.target.value)} className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hadith References (Comma separated)</label>
                  <input type="text" value={(editingArticle.hadithReferences || []).join(', ')} onChange={e => handleArrayChange('hadithReferences', e.target.value)} className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tags (Comma separated)</label>
                  <input type="text" value={(editingArticle.tags || []).join(', ')} onChange={e => handleArrayChange('tags', e.target.value)} className="w-full p-2 border rounded-md" />
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-4 border-t">
                <button type="button" onClick={() => setEditingArticle(null)} className="px-4 py-2 border rounded-md text-gray-600 flex items-center">
                  <X size={18} className="mr-1" /> Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md flex items-center">
                  <Save size={18} className="mr-1" /> Save Article
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {articles.map((article) => (
                  <tr key={article.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{article.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {categories.find(c => c.id === article.categoryId)?.title || article.categoryId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        article.reviewStatus === 'Published' ? 'bg-green-100 text-green-800' :
                        article.reviewStatus === 'Draft' ? 'bg-gray-100 text-gray-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {article.reviewStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button onClick={() => setEditingArticle(article)} className="text-primary hover:text-primary-dark mr-4">
                        <Edit size={18} />
                      </button>
                      <button onClick={() => deleteArticle(article.id)} className="text-red-600 hover:text-red-900">
                        <Trash size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
