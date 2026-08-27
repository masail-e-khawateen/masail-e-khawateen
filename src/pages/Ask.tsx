import React, { useState } from 'react';
import { categories } from '../lib/data';
import { Send, AlertTriangle, ShieldCheck } from 'lucide-react';
import { useSEO } from '../lib/useSEO';

export default function Ask() {
  useSEO({ 
    title: 'Ask a Question',
    description: 'Submit your Shar‘i questions anonymously to our scholars.',
    canonicalUrl: '/ask'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-bg-light min-h-screen py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-urdu">Apna Shar‘i Sawal Poochiye</h1>
          <p className="text-lg text-gray-600 font-urdu max-w-2xl mx-auto">
            “Apna Shar‘i sawal anonymously submit karein. Humare scholars iska jawab website par publish karenge (aapki identity posheeda rakhi jayegi).”
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 flex items-start space-x-3 text-amber-800">
          <AlertTriangle className="flex-shrink-0 mt-0.5" size={24} />
          <div>
            <h3 className="font-bold text-lg font-urdu">Important Notice</h3>
            <p className="text-sm mt-1 font-urdu">
              Sensitive personal questions (jaise specific talaq ke alfaz, waghaira) should be reviewed by a qualified Mufti face-to-face or via a secure fatwa center before a final ruling is given. Yeh form aam masail ki rehnumai ke liye hai.
            </p>
          </div>
        </div>

        {isSubmitted ? (
          <div className="bg-white rounded-3xl p-10 text-center shadow-sm border border-gray-100">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-2xl font-bold text-charcoal mb-4 font-urdu">Jazakallah Khair</h2>
            <p className="text-gray-600 font-urdu mb-8">
              Aapka sawal submit ho chuka hai. Hum koshish karenge ke jald hi iska jawab publish kiya jaye.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-medium transition-colors font-urdu"
            >
              Ek aur sawal poochiye
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 relative">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-white rounded-full p-2 shadow-sm border border-gray-100 hidden md:block">
              <ShieldCheck className="text-primary" size={32} />
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-urdu">Name (Optional)</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="Anonymous"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-urdu">Email (Optional)</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="For notification when answered"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-urdu">Category <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select 
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl appearance-none bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-urdu"
                  >
                    <option value="" disabled selected>Select a category...</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.title}</option>
                    ))}
                    <option value="other">Other / Not sure</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-urdu">Your Question <span className="text-red-500">*</span></label>
                <textarea 
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-urdu resize-none"
                  placeholder="Apna masla tafseel se likhein..."
                  dir="auto"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-urdu">Madhhab (Optional)</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl appearance-none bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-urdu">
                    <option value="" disabled selected>Select madhhab if you follow a specific one...</option>
                    <option value="hanafi">Hanafi</option>
                    <option value="shafi">Shafi'i</option>
                    <option value="maliki">Maliki</option>
                    <option value="hanbali">Hanbali</option>
                    <option value="none">Not specific / I don't know</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5 mt-1">
                  <input 
                    id="consent" 
                    name="consent" 
                    type="checkbox" 
                    required
                    className="focus:ring-primary h-5 w-5 text-primary border-gray-300 rounded" 
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="consent" className="font-medium text-gray-700 font-urdu cursor-pointer">
                    Main samajhti hu ke yeh ek educational platform hai aur mera sawal website par (baghair naam ke) publish kiya ja sakta hai.
                  </label>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <button 
                  type="submit"
                  className="w-full sm:w-auto flex justify-center items-center bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg font-urdu text-lg"
                >
                  <Send size={20} className="mr-2" />
                  Submit Question
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}

function CheckCircle(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}
