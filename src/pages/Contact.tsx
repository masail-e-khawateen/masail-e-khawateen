import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../lib/config';
import { useSEO } from '../lib/useSEO';

export default function Contact() {
  useSEO({ 
    title: 'رابطہ کریں',
    description: 'Get in touch with the Masail-e-Khawateen team.',
    canonicalUrl: '/contact'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-bg-light min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-urdu">رابطہ کریں</h1>
          <p className="text-lg text-gray-600 font-urdu max-w-2xl mx-auto">
            ہمیں اپنی تجاویز، تصحیحات، یا تکنیکی مسائل کے بارے میں آگاہ کریں۔
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-charcoal mb-2">ای میل</h3>
              <p className="text-sm text-gray-600">{siteConfig.contactEmail}</p>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h3 className="font-bold text-primary mb-2 font-urdu">شرعی سوال پوچھنا ہے؟</h3>
              <p className="text-sm text-gray-700 font-urdu mb-4">
                اگر آپ کو کوئی شرعی مسئلہ پوچھنا ہے تو براہ کرم 'سوال پوچھیں' کا صفحہ استعمال کریں۔
              </p>
              <a href="/ask" className="text-sm font-bold text-primary hover:underline">
                سوالات کے صفحے پر جائیں &larr;
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm text-center h-full flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-2 font-urdu">پیغام بھیج دیا گیا</h3>
                <p className="text-gray-600 font-urdu">آپ کا پیغام ہمیں مل گیا ہے۔ ہم جلد از جلد آپ سے رابطہ کرنے کی کوشش کریں گے۔</p>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">نام</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">ای میل</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">موضوع</label>
                    <div className="relative">
                      <select defaultValue="" 
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl appearance-none bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      >
                        <option value="" disabled>موضوع منتخب کریں...</option>
                        <option value="general">عام معلومات</option>
                        <option value="correction">غلطی کی نشاندہی</option>
                        <option value="source">حوالہ طلب کریں</option>
                        <option value="technical">تکنیکی مسئلہ</option>
                        <option value="scholar">علمی جائزے کی درخواست</option>
                        <option value="other">دیگر</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">پیغام</label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none font-urdu"
                      dir="auto"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full flex justify-center items-center bg-charcoal hover:bg-black text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md text-lg"
                  >
                    <Send size={20} className="ml-2" />پیغام بھیجیں</button>

                </form>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
